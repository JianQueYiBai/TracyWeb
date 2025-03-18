import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children, threadId, setThreadId }) => {
  // Helper function to update the last message in the chat
  const updateLastMessage = (message) => {
    setState((prev) => {
      return {
        ...prev,
        messages: [...prev.messages.slice(0, -1), { ...prev.messages.at(-1), message }],
      };
    });
  };

  const callChatAPI = async (message) => {
    try {
      const url = '/api/v1/chat';

      const requestBody = {
        query: message,
        thread_id: threadId || undefined,
        stream: true, // Enable streaming
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      // For streaming, return the response directly
      if (requestBody.stream) {
        return response;
      }

      // For non-streaming, handle as before
      const data = await response.json();

      // Store the thread_id for future conversations
      if (data.thread_id && setThreadId) {
        setThreadId(data.thread_id);
      }

      return data.response;
    } catch (error) {
      console.error('Error calling chat API:', error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  const handleUserMessage = async (message) => {
    // Show thinking message first
    const thinkingMessage = createChatBotMessage('Thinking...');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, thinkingMessage],
    }));

    try {
      // Call the API and get the streaming response
      const response = await callChatAPI(message);

      // Keep the thinking message until we get a workflow or message update
      let messageInitialized = false;

      // Process the SSE stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedContent = '';
      let currentThreadId = threadId;
      let lastEventType = null; // Track the last event type processed
      let hasSeenWorkflow = false; // Track if we've seen a workflow message

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        // Decode the chunk and split by double newline (SSE message separator)
        const chunk = decoder.decode(value);
        const events = chunk.split('\n\n').filter((event) => event.trim());

        for (const event of events) {
          const lines = event.split('\n');
          let eventType = '';
          let eventData = '';

          for (const line of lines) {
            if (line.startsWith('event:')) {
              eventType = line.substring(7).trim();
            } else if (line.startsWith('data:')) {
              eventData = line.substring(5).trim();
            }
          }

          if (eventData) {
            try {
              const parsedData = JSON.parse(eventData);

              // Handle different event types
              if (eventType === 'message') {
                // Only process message events with actual content
                if (parsedData.content && parsedData.content.trim() !== '') {
                  // Store the content
                  accumulatedContent = parsedData.content;

                  // Simple approach: if this is the first real message after a workflow,
                  // add a small delay to ensure the workflow message has been rendered
                  const needsDelay =
                    !messageInitialized &&
                    hasSeenWorkflow &&
                    lastEventType === 'EventType.WORKFLOW';

                  if (needsDelay) {
                    // Small delay to ensure workflow message is rendered before we update
                    await new Promise((resolve) => {
                      setTimeout(resolve, 20);
                    });
                  }

                  if (!messageInitialized) {
                    setState((prev) => {
                      const newMessages = prev.messages.filter((msg) => msg !== thinkingMessage);
                      return {
                        ...prev,
                        messages: [...newMessages, createChatBotMessage(accumulatedContent)],
                      };
                    });
                    messageInitialized = true;
                  } else {
                    updateLastMessage(accumulatedContent);
                  }

                  lastEventType = eventType;
                }
              } else if (eventType === 'EventType.WORKFLOW') {
                hasSeenWorkflow = true;

                // Only initialize with workflow if no message has been shown yet
                if (!messageInitialized) {
                  setState((prev) => {
                    const newMessages = prev.messages.filter((msg) => msg !== thinkingMessage);
                    return {
                      ...prev,
                      messages: [...newMessages, createChatBotMessage(parsedData.content)],
                    };
                  });
                  messageInitialized = true;
                }

                lastEventType = eventType;
              } else if (eventType === 'EventType.START' && parsedData.thread_id && setThreadId) {
                // Save thread ID from the start event
                currentThreadId = parsedData.thread_id;
                setThreadId(currentThreadId);
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      }

      // After the stream is done, if there's no content, show an error
      if (!messageInitialized) {
        setState((prev) => {
          const newMessages = prev.messages.filter((msg) => msg !== thinkingMessage);
          return {
            ...prev,
            messages: [
              ...newMessages,
              createChatBotMessage("Sorry, I couldn't generate a response. Please try again."),
            ],
          };
        });
      }
    } catch (error) {
      console.error('Error handling message:', error);

      setState((prev) => {
        // Create a new array without the thinking message
        const newMessages = prev.messages.filter((msg) => msg !== thinkingMessage);

        return {
          ...prev,
          messages: [
            ...newMessages,
            createChatBotMessage('Sorry, something went wrong. Please try again.'),
          ],
        };
      });
    }
  };

  // For compatibility with existing code
  const handleHello = () => {
    handleUserMessage('hello');
  };

  const handleDefault = (message) => {
    handleUserMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDefault,
            handleUserMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

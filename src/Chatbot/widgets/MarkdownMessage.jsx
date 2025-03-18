// Don't import ReactMarkdown directly as it's causing issues with module federation

const MarkdownMessage = (props) => {
  // Get the message content
  const payload = props.payload || '';

  // Simple markdown-like rendering without external dependencies
  const renderText = (text) => {
    if (!text) return '';

    // Format line breaks
    let formatted = text.replace(/\n/g, '<br/>');

    // Format bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Format italic text
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Format code blocks (simple version)
    formatted = formatted.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');

    // Format inline code
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');

    return formatted;
  };

  return (
    <div className="markdown-message" dangerouslySetInnerHTML={{ __html: renderText(payload) }} />
  );
};

export default MarkdownMessage;

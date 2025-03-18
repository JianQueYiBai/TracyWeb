const CustomBotMessage = (props) => {
  console.log('CustomBotMessage props:', props);

  // Get the message from props
  const messageText = props.message;

  // 优化的markdown渲染函数 - 减少不必要的换行
  const renderText = (text) => {
    if (!text) return '';

    // 首先，处理代码块 (必须在其他处理之前完成)
    let processedText = text.replace(/```([\s\S]*?)```/g, function (match, code) {
      return '{{CODE_BLOCK_' + encodeURIComponent(code) + '}}';
    });

    // 分割成行并处理
    const lines = processedText.split('\n');
    let inList = false;
    let inParagraph = false;
    let result = '';

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // 跳过空行
      if (line === '') {
        // 如果在段落内，关闭段落
        if (inParagraph) {
          result += '</p>';
          inParagraph = false;
        }
        // 如果在列表内，不做特殊处理（列表项之间的空行忽略）
        continue;
      }

      // 检查是否是标题
      const isHeading = /^#{1,3} /.test(line);

      // 检查是否是列表项
      const isListItem = /^[-*] /.test(line) || /^\d+\. /.test(line);

      // 处理列表的开始和结束
      if (isListItem) {
        // 如果之前在段落中，结束段落
        if (inParagraph) {
          result += '</p>';
          inParagraph = false;
        }

        if (/^[-*] (.*)/.test(line)) {
          // 无序列表项
          if (inList !== 'ul') {
            if (inList) {
              // 如果之前在有序列表中，先结束它
              result += '</ol>';
            }
            result += '<ul style="padding-left:1.5em;margin:0.5em 0;">';
            inList = 'ul';
          }
          result += line.replace(/^[-*] (.*)/, '<li>$1</li>');
        } else if (/^\d+\. (.*)/.test(line)) {
          // 有序列表项
          if (inList !== 'ol') {
            if (inList) {
              // 如果之前在无序列表中，先结束它
              result += '</ul>';
            }
            result += '<ol style="padding-left:1.5em;margin:0.5em 0;">';
            inList = 'ol';
          }
          result += line.replace(/^\d+\. (.*)/, '<li>$1</li>');
        }
      }
      // 处理标题
      else if (isHeading) {
        // 如果在列表或段落中，结束它
        if (inList) {
          result += inList === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }
        if (inParagraph) {
          result += '</p>';
          inParagraph = false;
        }

        if (/^# (.*)/.test(line)) {
          result += line.replace(
            /^# (.*)/,
            '<h1 style="font-size:1.5em;font-weight:bold;margin-top:0.8em;margin-bottom:0.5em;">$1</h1>',
          );
        } else if (/^## (.*)/.test(line)) {
          result += line.replace(
            /^## (.*)/,
            '<h2 style="font-size:1.3em;font-weight:bold;margin-top:0.8em;margin-bottom:0.5em;">$1</h2>',
          );
        } else if (/^### (.*)/.test(line)) {
          result += line.replace(
            /^### (.*)/,
            '<h3 style="font-size:1.1em;font-weight:bold;margin-top:0.8em;margin-bottom:0.5em;">$1</h3>',
          );
        }
      }
      // 常规文本 - 作为段落处理
      else {
        // 如果在列表中，先结束列表
        if (inList) {
          result += inList === 'ul' ? '</ul>' : '</ol>';
          inList = false;
        }

        // 如果不是段落的开始，添加到当前段落
        if (inParagraph) {
          result += ' ' + line; // 添加空格代替换行符
        } else {
          // 开始新段落
          result += '<p>' + line;
          inParagraph = true;
        }
      }
    }

    // 确保所有开放的标签都被关闭
    if (inList) {
      result += inList === 'ul' ? '</ul>' : '</ol>';
    }
    if (inParagraph) {
      result += '</p>';
    }

    // 恢复代码块
    result = result.replace(/\{\{CODE_BLOCK_(.*?)\}\}/g, function (match, encodedCode) {
      const code = decodeURIComponent(encodedCode);
      return (
        '<pre style="background-color:#f6f8fa;padding:1em;border-radius:4px;overflow-x:auto;"><code>' +
        code +
        '</code></pre>'
      );
    });

    // 处理粗体、斜体和内联代码
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight:bold;">$1</strong>');
    result = result.replace(/\*(.*?)\*/g, '<em style="font-style:italic;">$1</em>');
    result = result.replace(
      /`([^`]+)`/g,
      '<code style="background-color:rgba(0,0,0,0.06);padding:0.2em 0.4em;border-radius:3px;font-family:monospace;font-size:0.9em;">$1</code>',
    );

    return result;
  };

  return (
    <div className="react-chatbot-kit-chat-bot-message">
      <div className="react-chatbot-kit-chat-bot-message-arrow"></div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div
          className="markdown-message react-chatbot-kit-chat-bot-message-text"
          dangerouslySetInnerHTML={{ __html: renderText(messageText) }}
        />
      </div>
    </div>
  );
};

export default CustomBotMessage;

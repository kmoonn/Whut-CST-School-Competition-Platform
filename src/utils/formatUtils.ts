import React from 'react';

/**
 * 将换行符分割的文本转换为React元素数组
 */
export function formatMultilineText(text: string): React.ReactNode {
  return text.split('\n').map((line, index) => {
    if (index < text.split('\n').length - 1) {
      return React.createElement(
        React.Fragment,
        { key: index },
        line,
        React.createElement('br')
      );
    }
    return React.createElement(React.Fragment, { key: index }, line);
  });
} 
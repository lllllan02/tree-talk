import React from 'react';

const Logo: React.FC = () => (
  <span style={{
    display: 'inline-block',
    fontFamily: 'Arial Rounded MT Bold, Arial, sans-serif',
    fontSize: 32,
    userSelect: 'none',
    letterSpacing: 1,
  }}>
    <span
      style={{
        fontWeight: 900,
        fontStyle: 'italic',
        background: 'linear-gradient(90deg, #1890ff 0%, #6dd5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: '#1890ff',
        padding: '0 2px',
        marginRight: 1,
        display: 'inline-block',
      }}
    >
      TreeT
    </span>
    <span
      style={{
        fontWeight: 500,
        fontStyle: 'italic',
        color: '#5a7bbd', // 蓝灰色
        letterSpacing: 1,
        marginLeft: 0,
        display: 'inline-block',
      }}
    >
      alk
    </span>
  </span>
);

export default Logo; 
import React from 'react';

interface NodeConnectorProps {
  childCount: number;
}

const NodeConnector: React.FC<NodeConnectorProps> = ({ childCount }) => {
  if (childCount === 0) return null;
  return (
    <div style={{ position: 'relative', height: 32, width: '100%' }}>
      {/* 父节点竖线 */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 1,
          height: 16,
          background: '#d0d0d0',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      />
      {/* 横线（多子节点时才显示） */}
      {childCount > 1 && (
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: `${100 / (childCount * 2)}%`,
            width: `${100 - 100 / childCount}%`,
            height: 1,
            background: '#d0d0d0',
            zIndex: 1,
          }}
        />
      )}
      {/* 每个子节点的竖线 */}
      {Array.from({ length: childCount }).map((_, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: 16,
            left: `${((idx * 2 + 1) * 100) / (childCount * 2)}%`,
            width: 1,
            height: 16,
            background: '#d0d0d0',
            zIndex: 1,
            transform: 'translateX(-50%)',
          }}
        />
      ))}
    </div>
  );
};

export default NodeConnector; 
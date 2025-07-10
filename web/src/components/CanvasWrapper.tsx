import React, { useRef, useState } from 'react';

interface CanvasWrapperProps {
  children: React.ReactNode;
  minScale?: number;
  maxScale?: number;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ children, minScale = 0.3, maxScale = 2 }) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // 拖动
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e: MouseEvent) => {
    if (!dragging.current) return;
    setTranslate(prev => ({
      x: prev.x + (e.clientX - lastPos.current.x),
      y: prev.y + (e.clientY - lastPos.current.y),
    }));
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseUp = () => {
    dragging.current = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  // 缩放
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    let newScale = scale - e.deltaY * 0.001;
    newScale = Math.max(minScale, Math.min(maxScale, newScale));
    setScale(newScale);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '70vh',
        background: '#fafbfc',
        overflow: 'hidden',
        cursor: dragging.current ? 'grabbing' : 'grab',
        borderRadius: 16,
        position: 'relative',
        userSelect: 'none',
      }}
      onMouseDown={onMouseDown}
      onWheel={onWheel}
    >
      <div
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          transition: dragging.current ? 'none' : 'transform 0.1s',
          width: 'fit-content',
          minWidth: 600,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CanvasWrapper; 
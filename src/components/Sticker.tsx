import React from 'react';

interface StickerProps {
  children: React.ReactNode;
  color?: string;
  rotate?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Sticker: React.FC<StickerProps> = ({ 
  children, 
  color = 'var(--accent-color)', 
  rotate = '-2deg',
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`sticker ${className}`} 
      style={{ 
        backgroundColor: color, 
        transform: `rotate(${rotate})`,
        ...style 
      }}
    >
      {children}
    </div>
  );
};

export default Sticker;

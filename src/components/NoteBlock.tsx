import React from 'react';

interface NoteBlockProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
  hasWashiTape?: boolean;
  className?: string;
}

const NoteBlock: React.FC<NoteBlockProps> = ({ 
  children, 
  title, 
  date, 
  hasWashiTape = false,
  className = ''
}) => {
  return (
    <div className={`note-block ${className}`}>
      {hasWashiTape && <div className="washi-tape" />}
      {title && <h2 className="handwritten" style={{ marginBottom: '0.5rem' }}>{title}</h2>}
      {date && <p className="accent-text" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{date}</p>}
      <div className="note-content">
        {children}
      </div>
    </div>
  );
};

export default NoteBlock;

import React from 'react';
import NoteBlock from '../components/NoteBlock';

const BlogPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 className="handwritten" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Log Entries</h1>
        <p className="accent-text" style={{ fontSize: '1.1rem' }}>Short notes and long-form thoughts on tech and design.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <NoteBlock title="Content Coming Soon" date="Currently Drafting" hasWashiTape={true}>
          <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
            My log entries and long-form thoughts are currently being drafted. Check back soon for updates on tech, design, and more!
          </p>
        </NoteBlock>
      </div>
    </div>
  );
};

export default BlogPage;

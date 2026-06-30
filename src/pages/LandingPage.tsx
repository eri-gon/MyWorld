import React from 'react';
import NoteBlock from '../components/NoteBlock';
import Sticker from '../components/Sticker';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profilepic.jpg';

const LandingPage: React.FC = () => {
  return (
    <div>
      <section style={{ marginBottom: '6rem', textAlign: 'center' }}>
        <div style={{
          width: '200px',
          height: '240px',
          margin: '0 auto 2rem',
          padding: '12px 12px 40px',
          background: 'white',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <img 
            src={profilePic} 
            alt="Eric Gan" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              border: '1px solid #eee'
            }} 
          />
        </div>
        <Sticker rotate="0deg" style={{ marginBottom: '1.5rem' }}>வணக்கம் • 你好 • Hello</Sticker>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }} className="handwritten">
          I’m <span className="accent-text">Eric Gan</span> (甘雨轩 / erigon)
        </h1>
        <div style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#666', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p>I build systems to find signal in noise.</p>
          <p>I choose intentionality over endless consumption.</p>
        </div>
      </section>

      <section style={{ marginBottom: '6rem' }}>
        <NoteBlock title="My Story" hasWashiTape={true}>
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }} className="handwritten">
            <p style={{ marginBottom: '1rem' }}>I grew up in Fremont, California, where competition is an endless pursuit of ends, move fast, and break things. Things can be discarded, repaired, and replaced at a moment’s notice, but people take years or maybe never recover from the continuous pressure and competitiveness. Coming out of high school, I was broken, lost, and without direction.</p>
            <p>At UCSD, I was given the time and space to discover what I was genuinely interested in and passionate about. I got into triathlon, and realized it wasn’t for me. I taught myself piano from a library book. I co-founded a juggling club. Although I initially chose my data science major, unsure of it, I slowly developed a passion for the content I was learning.</p>
          </div>
        </NoteBlock>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <NoteBlock title="Latest Project" hasWashiTape={true}>
          <p>Check out my latest work in web development and design.</p>
          <Link to="/projects" style={buttonStyle}>
            View Projects <ArrowRight size={16} />
          </Link>
        </NoteBlock>

        <NoteBlock title="About Me" hasWashiTape={true}>
          <p>Learn more about my background, education, and technical skills.</p>
          <Link to="/about" style={buttonStyle}>
            View About Me <ArrowRight size={16} />
          </Link>
        </NoteBlock>
      </div>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1.5rem',
  color: 'var(--accent-color)',
  textDecoration: 'none',
  fontWeight: '600',
  fontFamily: 'var(--font-accent)',
  fontSize: '1.1rem'
};

export default LandingPage;

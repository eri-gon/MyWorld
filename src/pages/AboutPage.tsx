import React from 'react';
import NoteBlock from '../components/NoteBlock';
import Sticker from '../components/Sticker';

const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <section style={{ marginBottom: '4rem' }}>
        <h1 className="handwritten" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h1>
        <NoteBlock hasWashiTape={true}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            I’m interested in improving how people <span className="handwritten accent-text" style={{ fontSize: '1.5rem' }}>learn, think, and work</span>—through better tools, cleaner pipelines, and thoughtful design.
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            I build systems to find signal in noise.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I choose intentionality over endless consumption.
          </p>
          <p className="accent-text" style={{ fontWeight: '600' }}>
            Most importantly, I’m a fast and lifelong learner.
          </p>
        </NoteBlock>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 className="handwritten" style={{ marginBottom: '1.5rem' }}>Education</h2>
        <NoteBlock hasWashiTape={true} date="Sep. 2023 – Jun 2027">
          <h3 className="handwritten" style={{ margin: '0 0 0.5rem' }}>UC San Diego</h3>
          <p style={{ fontWeight: '600', marginBottom: '0.2rem' }}>Bachelor of Arts in Data Science</p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>3.87 GPA • La Jolla, CA</p>
        </NoteBlock>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 className="handwritten" style={{ marginBottom: '1.5rem' }}>Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <NoteBlock hasWashiTape={true} date="Feb. 2025 – June 2025">
            <h3 className="handwritten" style={{ margin: '0 0 0.5rem' }}>Undergraduate Research Assistant</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Knight Lab, UC San Diego</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
              <li>Performed data scraping and processing of large-scale microbiome datasets using Python and Bash</li>
              <li>Conducted QIIME 2 analyses to study microbial community structure and diversity</li>
              <li>Developed and optimized workflows to streamline microbiome data cleaning and visualization</li>
            </ul>
          </NoteBlock>

          <NoteBlock hasWashiTape={true} date="2024 – 2025">
            <h3 className="handwritten" style={{ margin: '0 0 0.5rem' }}>Food Service Assistant Manager</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Philmont Scout Ranch • Cimarron, NM</p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>June 2024 – Aug 2024, June 2025 – Aug 2025</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
              <li>Supervised food service operations serving up to 300 people per meal</li>
              <li>Managed inventory, ordering, and logistics across multiple facilities</li>
              <li>Created SOPs to improve operational efficiency and consistency</li>
              <li>Trained and led staff to ensure safe and efficient service</li>
            </ul>
          </NoteBlock>

          <NoteBlock hasWashiTape={true} date="Dec. 2024 – Present">
            <h3 className="handwritten" style={{ margin: '0 0 0.5rem' }}>Co-Founder</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>333Jugglers, UC San Diego</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
              <li>Founded and scaled UCSD juggling club from concept to official recognition</li>
              <li>Led recruitment, events, and weekly skill workshops</li>
              <li>Managed logistics, partnerships, and long-term sustainability planning</li>
            </ul>
          </NoteBlock>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 className="handwritten" style={{ marginBottom: '1.5rem' }}>Technical Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Languages</p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Sticker rotate="0deg">Python</Sticker>
              <Sticker rotate="0deg" color="#3498db">Java</Sticker>
              <Sticker rotate="0deg" color="#f39c12">JavaScript</Sticker>
              <Sticker rotate="0deg" color="#2ecc71">SQL</Sticker>
              <Sticker rotate="0deg" color="#e67e22">HTML/CSS</Sticker>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Frameworks & Libraries</p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Sticker rotate="0deg" color="#61dafb" style={{ color: '#333' }}>React</Sticker>
              <Sticker rotate="0deg" color="#ee4c2c">PyTorch</Sticker>
              <Sticker rotate="0deg" color="#f39c12">scikit-learn</Sticker>
              <Sticker rotate="0deg" color="#150458">pandas</Sticker>
              <Sticker rotate="0deg" color="#013243">NumPy</Sticker>
              <Sticker rotate="0deg" color="#2c3e50">Matplotlib</Sticker>
              <Sticker rotate="0deg" color="#f9a03f">D3.js</Sticker>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Tools & Technologies</p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Sticker rotate="0deg" color="#f05032">Git</Sticker>
              <Sticker rotate="0deg" color="#4eaa25">Bash</Sticker>
              <Sticker rotate="0deg" color="#000000">QIIME 2</Sticker>
              <Sticker rotate="0deg" color="#007acc">VS Code</Sticker>
              <Sticker rotate="0deg" color="#fe315d">IntelliJ</Sticker>
              <Sticker rotate="0deg" color="#5a5a5a">Cursor</Sticker>
              <Sticker rotate="0deg" color="#ff00ff">Antigravity</Sticker>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

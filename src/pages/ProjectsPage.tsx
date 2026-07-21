import React from 'react';
import NoteBlock from '../components/NoteBlock';
import Sticker from '../components/Sticker';
import dscReport from '../assets/dsc140b_final_report.pdf';

// Import thumbnails
import convThumb from '../assets/thumbnail/convolution_thumbnail.png';
import geoThumb from '../assets/thumbnail/Geogussr_thumbnail.png';
import gaitThumb from '../assets/thumbnail/gait_thumbnail.png';
import gearThumb from '../assets/thumbnail/Geargrind_thumbnail.png';
import foodThumb from '../assets/thumbnail/food_thumbnail.png';
import portThumb from '../assets/thumbnail/Portfolio_thumbnail.png';
import formula1Thumb from '../assets/thumbnail/formula1_thumbnail.png';
import oceanThumb from '../assets/thumbnail/ocean_health.png';

const projects = [
  {
    title: "Personal CRM Social Graph Visualizer",
    description: "Designed and built a personal CRM social graph visualizer using a FastAPI backend and an interactive D3.js frontend dashboard, displaying real-time personal connections and group memberships. Engineered a custom Python ingestion pipeline that parses exported Google Keep JSON files, designed a relational database schema in PostgreSQL (Adjacency List Model), solved same-name node collisions with a hybrid entity resolution heuristic, and built a responsive dark-mode glassmorphic D3.js visualizer with custom physics constraints.",
    tags: ["Python", "FastAPI", "PostgreSQL", "D3.js", "SQL", "JavaScript", "HTML/CSS", "Regular Expressions", "REST APIs"],
    date: "July 2026",
    link: ""
  },
  {
    title: "Formula 1 DNF Prediction",
    description: "Trained and evaluated Logistic Regression, Random Forest, XGBoost, and LightGBM models under significant class imbalance and temporal distribution shifts. Optimized LightGBM using Optuna Bayesian hyperparameter search over 30 trials, achieving a 2.6x improvement in F1-score and 5x in Recall compared to baselines. Built and deployed an interactive web application on Hugging Face Spaces for real-time race outcome predictions.",
    tags: ["Python", "LightGBM", "XGBoost", "Optuna", "Hugging Face Spaces"],
    date: "June 2026",
    link: "https://huggingface.co/spaces/EricGan64/F1-project",
    image: formula1Thumb
  },
  {
    title: "Ocean Health Dashboard",
    description: "Designed a serverless data pipeline (S3 + Athena + Lambda + API Gateway) for an 800,000-record dataset. Developed the full-stack dashboard end-to-end within 20 hours, from data ingestion to deployment. Designed a composite ocean health index to visualize trends across time and geographic regions.",
    tags: ["Streamlit", "AWS S3", "AWS Athena", "AWS Lambda", "API Gateway", "Python"],
    date: "April 2026",
    link: "https://chumbucket.streamlit.app/",
    image: oceanThumb
  },
  {
    title: "1D Convolution Visualization Playground",
    description: "Built an interactive web application to visualize discrete convolution with step-by-step kernel sliding. Designed interactive controls for signals and kernels to improve intuition for linear systems.",
    tags: ["React", "JavaScript"],
    date: "Mar 2026",
    link: "https://eri-gon.github.io/DiscreteConvolution/",
    image: convThumb
  },
  {
    title: "SoCalGuessr Image Classification",
    description: "Built and evaluated a 6-class image classification model using MobileNetV3-Small. Applied transfer learning and achieved 84% validation accuracy. Optimized lightweight architecture for efficiency.",
    tags: ["PyTorch", "MobileNetV3", "Computer Vision"],
    date: "Mar 2026",
    link: dscReport,
    image: geoThumb
  },
  {
    title: "Gait Pattern Analyzer",
    description: "Developed interactive visualizations to analyze gait data from neurological datasets. Used Python for data processing and D3.js for dynamic comparisons. Designed UI for exploring patient-level gait differences.",
    tags: ["Python", "D3", "JavaScript", "HTML", "CSS"],
    date: "June 2025",
    link: "https://yihsuankuo.github.io/DSC-106-Final-Project/",
    image: gaitThumb
  },
  {
    title: "GearGrind",
    description: "A geospatial data visualization of bike traffic patterns in Cambridge and Boston. Implemented using Mapbox API and D3.js to map and analyze urban mobility.",
    tags: ["JS", "D3.js", "Mapbox", "Geospatial", "Viz"],
    date: "Data Log",
    link: "https://eri-gon2.github.io/geargrind/",
    image: gearThumb
  },
  {
    title: "RecipeProject",
    description: "Data analysis and machine learning models built using Food.com data to uncover culinary trends and predict recipe characteristics.",
    tags: ["Python", "Scikit-Learn", "Matplotlib", "ML"],
    date: "Analysis Entry",
    link: "https://eri-gon.github.io/RecipeProject/",
    image: foodThumb
  },
  {
    title: "Webdesign Portfolio",
    description: "My early web design portfolio showcasing the foundations of HTML, CSS, and JavaScript through various experimental layouts.",
    tags: ["HTML", "CSS", "JS", "Portfolio"],
    date: "Archive",
    link: "https://eri-gon.github.io/Gan_Portfolio/",
    image: portThumb
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <h1 className="handwritten" style={{ fontSize: '3rem', marginBottom: '1rem' }}>My Projects</h1>
        <p className="accent-text" style={{ fontSize: '1.1rem' }}>A collection of things I've built and learned from.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {projects.map((project, index) => (
          <NoteBlock key={index} title={project.title} date={project.date} hasWashiTape={true}>
            {project.image && (
              <div style={{
                width: '100%',
                height: '180px',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                borderRadius: '4px',
                border: '1px solid #eee'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            <p style={{ marginBottom: '1.5rem' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {project.tags.map(tag => (
                <Sticker key={tag} color="#f0f0f0" style={{ color: '#666', rotate: '0deg', fontSize: '0.8rem' }}>
                  {tag}
                </Sticker>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'var(--accent-color)',
                  fontWeight: '600',
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.1rem'
                }}
              >
                View Project &rarr;
              </a>
            )}
          </NoteBlock>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

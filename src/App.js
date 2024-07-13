import React from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #1a202c, #2d3748)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '4rem 1rem',
    textAlign: 'center',
  },
  header: {
    marginBottom: '3rem',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '4px solid #9f7aea',
    marginBottom: '1.5rem',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.25rem',
    color: '#d6bcfa',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  project: {
    background: '#2d3748',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#d6bcfa',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    color: '#a0aec0',
  },
};

const Section = ({ title, children }) => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const App = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <header style={styles.header}>
        <img
          src="/api/placeholder/200/200"
          alt="Profile"
          style={styles.image}
        />
        <h1 style={styles.name}>Your Name</h1>
        <p style={styles.title}>Anime Enthusiast & AI Aficionado</p>
      </header>

      <Section title="About Me">
        <p>
          Passionate about merging the worlds of anime and artificial intelligence.
          Exploring the intersection of creativity and technology.
        </p>
      </Section>

      <Section title="Projects">
        <div>
          <div style={styles.project}>
            <h3 style={styles.projectTitle}>AI-Powered Anime Recommendation Engine</h3>
            <p>Developed a machine learning model to suggest anime based on user preferences.</p>
          </div>
          <div style={styles.project}>
            <h3 style={styles.projectTitle}>Anime Character Generation using GANs</h3>
            <p>Created a Generative Adversarial Network to produce unique anime character designs.</p>
          </div>
        </div>
      </Section>

      <Section title="Contact">
        <p style={{ marginBottom: '1rem' }}>
          Feel free to reach out: <a href="mailto:your.email@example.com" style={styles.link}>your.email@example.com</a>
        </p>
        <div>
          <a href="https://github.com/ccrss" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
          {' | '}
          <a href="https://linkedin.com/in/ccrss" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
        </div>
      </Section>
    </div>
    <footer style={styles.footer}>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  </div>
);

export default App;
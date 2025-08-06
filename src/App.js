import './App.css';
import Table from './comps/Table';
import About from './comps/About';

function App() {
  return (
    <div className="App" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center'
    }}>
      <About />
      <Table style={{
        width: '100%',
        borderCollapse: 'collapse',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        borderRadius: '8px',
        overflow: 'hidden'
      }} />
    </div>
  );
}

export default App;

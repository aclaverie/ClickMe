import './App.css';
import Layout from './components/layout';
import Info from './components/info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Info />
          <Layout />
      </header>
    </div>
  );
}

export default App;

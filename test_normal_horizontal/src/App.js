import logo from './logo.svg';
import './App.css';

// Imports
import '@torrez_mn/gh-card';

function App() {
  return (
    <div className="App">


	  <gh-card 
	gh-user='getify'
	gh-mode='horizontal'
	gh-primary-color='rgba(245, 40, 145, 0.8)'
	gh-secondary-color='rgba(0, 100, 20, 1)'
	/>


    </div>
  );
}

export default App;

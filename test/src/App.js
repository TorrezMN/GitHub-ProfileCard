import './App.css';


import 'gh-card';



function App() {
  return (
    <div className="App">
	  <gh-card 
		gh-user='TorrezMN'
		gh-mode='normal' // normal, mio
		gh-primary-color='orange'
		gh-secondary-color='whitesmoke'
	  />
	  <gh-card 
		gh-user='yogonza524'
		gh-mode='normal' // normal, black_white, mio
		gh-primary-color='rgba(0,23,255,.5)'
		gh-secondary-color='whitesmoke'
	  />
    </div>
  );
}

export default App;

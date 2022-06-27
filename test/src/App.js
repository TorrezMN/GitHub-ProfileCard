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

			<gh-card 
			gh-user='getify'
			gh-mode='horizontal' // normal, black_white, mio
			gh-primary-color='rgba(245, 40, 145, 0.8)'
			gh-secondary-color='rgba(0, 100, 20, 1)'
			/>

			<gh-card 
			gh-user='TorrezMN'
			gh-mode='horizontal-projects' // normal, black_white, mio
			gh-primary-color='rgba(245, 0, 145, 0.5)'
			gh-secondary-color='rgba(0, 100, 9, 1)'
			/>

    </div>
  );
}

export default App;

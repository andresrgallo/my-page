import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import resumeData from './components/resumeData';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
			</div>
		);
	}
}

export default App;

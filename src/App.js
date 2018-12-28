import React, { Component } from 'react';
import resumeData from './components/resumeData';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import GlobalStyle from './theme/globalStyle';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle />
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				<Resume />
				<Portfolio />
				<Contact resumeData={resumeData} />
			</div>
		);
	}
}

export default App;

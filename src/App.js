import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import resumeData from './components/resumeData';
import GlobalStyle from './theme/globalStyle';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GlobalStyle />
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
			</div>
		);
	}
}

export default App;

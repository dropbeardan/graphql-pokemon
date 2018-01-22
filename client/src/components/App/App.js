import React from 'react';
import injectSheet from 'react-jss';

import styles from './App.styles.js';

const App = (props) => {
	return (
		<div className="App">
			<header className={props.classes.header}>
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	);
};

export default injectSheet(styles)(App);

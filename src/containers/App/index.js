import React from 'react';
import LoadingIndicator from '../../components/essentials/LoadingIndicator';
import Overlay from '../../components/essentials/Overlay';
import OKRApp from '../OKRApp';
import './App.css';

function App() {
	return (
		<div className="App max-dims">
			<div className="header flex--row-ac">
				<div className="company">
					Ally.io
				</div>
				<div className="product">
					OKR Viewer
				</div>
			</div>
			<LoadingIndicator />
			<Overlay />
			<OKRApp />
		</div>
	);
}

export default App;

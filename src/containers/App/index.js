import React from 'react';
import LoadingIndicator from '../../components/essentials/LoadingIndicator';
import Overlay from '../../components/essentials/Overlay';
import Modal from '../../components/essentials/Modal';
import OKRApp from '../OKRApp';
import './App.scss';

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
			<Modal />
			<OKRApp />
		</div>
	);
}

export default App;

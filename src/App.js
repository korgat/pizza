
import { Route } from 'react-router';
import Cart from './pages/cart/cart';
import { Header } from './pages/common';
import Home from './pages/home/home';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route exact path="/" component={Home} />
				<Route path="/cart" component={Cart} />
			</div>
		</div>
	);
}

export default App;

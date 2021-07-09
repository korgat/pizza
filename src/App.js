
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import Cart from './pages/cart/cart';
import { Header } from './pages/common';
import Home from './pages/home/home';
import { setIsLoaded, setPizza } from './store/actions/setPizza';
import firebase from './firebase';

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setIsLoaded(false))
		const unsubscribe = firebase.firestore()
			.collection("pizzas")
			.onSnapshot(onSnapshot => {
				const newArray = onSnapshot.docs.reduce((newArr, doc) => {
					newArr.push({ ...doc.data(), id: doc.id })
					return newArr
				}, [])
				dispatch(setIsLoaded(true))
				dispatch(setPizza(newArray))
			})
		return () => {
			unsubscribe()
		}
	}, [])

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

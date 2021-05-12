import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filters, PizzaBlock, PizzaBlockLoader } from './components'
import { getPizza } from "../../store/actions/setPizza"


const Home = () => {
	const dispatch = useDispatch()
	const { pizzasArray, currentFilter, pizzasInCart, isLoaded } = useSelector(state => ({
		pizzasArray: state.pizza.items,
		currentFilter: state.filter,
		pizzasInCart: state.cart.items,
		isLoaded: state.pizza.isLoaded
	}))

	useEffect(() => {
		dispatch(getPizza(currentFilter.category.type, currentFilter.sort.type, currentFilter.sortDirection))
	}, [currentFilter])



	return (
		<div className="container">
			<Filters currentFilter={currentFilter} />
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? pizzasArray.map((obj, index) => <PizzaBlock
						amountPizzasInCart={Object.keys(pizzasInCart).includes(obj.id.toString())
							? pizzasInCart[obj.id].length
							: 0}
						{...obj}
						key={`${obj.title}_${index}`} />)
					: Array(10).fill([]).map((item, index) => <PizzaBlockLoader key={index} />)
				}
			</div>
		</div>

	)
}

export default Home

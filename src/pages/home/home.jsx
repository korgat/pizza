import { useSelector } from 'react-redux'
import { Filters, PizzaBlock, PizzaBlockLoader } from './components'
import { orderBy } from 'lodash'


const Home = () => {
	const { pizzasArray, currentFilter, pizzasInCart, isLoaded } = useSelector(state => ({
		pizzasArray: state.pizza.items,
		currentFilter: state.filter,
		pizzasInCart: state.cart.items,
		isLoaded: state.pizza.isLoaded,
	}))

	const sortBy = () => {
		return orderBy(pizzasArray, currentFilter.sort.type, currentFilter.sortDirection).filter((obj) => {
			if (currentFilter.category.type === obj.category) {
				return obj
			} if (currentFilter.category.type === null) {
				return obj
			}
		})
	}

	return (
		<div className="container">
			<Filters currentFilter={currentFilter} />
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? sortBy().map((obj, index) => <PizzaBlock
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

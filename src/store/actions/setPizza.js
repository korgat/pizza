import axios from "axios"

export const setPizza = (pizzas) => ({
	type: "SET_PIZZA",
	payload: pizzas
})

export const setIsLoaded = (status) => ({
	type: "SET_IS_LOADED",
	payload: status
})

export const getPizza = (category, sort, sortDirection) => (dispatch) => {
	dispatch(setIsLoaded(false))
	axios.get(`https://reactpizza-cafe.herokuapp.com/api?${category ? "category=" + category : ""}&_sort=${sort}&_order=${sortDirection}`).then(resp => {
		dispatch(setIsLoaded(true))
		dispatch(setPizza(resp.data))

	})
}


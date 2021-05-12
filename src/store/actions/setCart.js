
export const addPizzaToCart = (obj) => ({
	type: "ADD_PIZZA_TO_CART",
	payload: obj
})

export const deleteStack = (id) => ({
	type: "DELETE_STACK",
	payload: id
})

export const plusPizza = (id) => ({
	type: "PLUS_PIZZA",
	payload: id
})
export const minusPizza = (id) => ({
	type: "MINUS_PIZZA",
	payload: id
})

export const clearCart = () => ({
	type: "CLEAR_CART",

})


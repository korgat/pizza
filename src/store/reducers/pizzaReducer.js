
const initialState = {
	isLoaded: false,
	items: []
}

const pizzaReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_PIZZA":
			return {
				...state,
				items: action.payload
			}
		case "SET_IS_LOADED":
			return {
				...state,
				isLoaded: action.payload
			}
		default:
			return state
	}
}

export default pizzaReducer
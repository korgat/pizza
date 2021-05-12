
const initialState = {
	totalCount: 0,
	totalPrice: 0,
	items: {}
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PIZZA_TO_CART":
			return {
				...state,
				totalCount: ++state.totalCount,
				totalPrice: state.totalPrice + action.payload.price,
				items: {
					...state.items,
					[action.payload.id]: state.items[action.payload.id]
						? [...state.items[action.payload.id], action.payload]
						: [action.payload]
				}
			}
		case "DELETE_STACK":
			const currentArray = state.items[action.payload]
			const filteredArrays = Object.keys(state.items).reduce((newObj, key) => {
				if (action.payload.toString() !== key) {
					newObj[key] = state.items[key]
				}
				return newObj
			}, {})
			return {
				...state,
				totalCount: state.totalCount - currentArray.length,
				totalPrice: state.totalPrice - currentArray.reduce((acc, obj) => acc + obj.price, 0),
				items: filteredArrays
			}
		case "PLUS_PIZZA":
			const lastObjInStack = state.items[action.payload][state.items[action.payload].length - 1]
			return {
				...state,
				totalCount: ++state.totalCount,
				totalPrice: state.totalPrice + lastObjInStack.price,
				items: {
					...state.items,
					[action.payload]: [...state.items[action.payload], lastObjInStack]
				}
			}
		case "MINUS_PIZZA": {
			const lastObjInStack = state.items[action.payload][state.items[action.payload].length - 1]
			return {
				...state,
				totalCount: --state.totalCount,
				totalPrice: state.totalPrice - lastObjInStack.price,
				items: {
					...state.items,
					[action.payload]: [...state.items[action.payload].slice(0, -1)]
				}
			}
		}
		case "CLEAR_CART":
			return {
				...state,
				totalCount: 0,
				totalPrice: 0,
				items: {
				}
			}
		default:
			return state
	}
}

export default cartReducer
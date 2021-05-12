
const initialState = {
	sort: { type: "popularity", index: 0 },
	category: { type: null, index: 0 },
	sortDirection: "asc"
}

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CATEGORY":
			return {
				...state,
				category: action.payload
			}
		case "SET_SORT":
			return {
				...state,
				sort: action.payload
			}
		case "SET_SORT_DIRECTION":
			return {
				...state,
				sortDirection: action.payload
			}
		default:
			return state
	}
}

export default filterReducer
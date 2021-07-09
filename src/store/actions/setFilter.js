export const setCategory = (type, index) => ({
	type: "SET_CATEGORY",
	payload: { type, index }
})

export const setSort = (type, index) => ({
	type: "SET_SORT",
	payload: { type, index }
})

export const setSortDirection = (direction) => ({
	type: "SET_SORT_DIRECTION",
	payload: direction
})

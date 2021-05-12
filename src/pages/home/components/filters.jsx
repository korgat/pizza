import React, { useRef, useState } from 'react'
import cn from "classnames"
import { useDispatch } from 'react-redux'
import { setCategory, setSort, setSortDirection } from '../../../store/actions/setFilter'

const Filters = ({ currentFilter }) => {
	const dispatch = useDispatch()
	const sortLabelRef = useRef()
	const allCategory = [
		{ title: "Все", type: null },
		{ title: "Мясные", type: "meat" },
		{ title: "Вегетарианская", type: "vegetarian" },
		{ title: "Гриль", type: "grill" },
		{ title: "Острые", type: "hot" },
		{ title: "Закрытые", type: "closed" },
	]
	const allSortTypes = [
		{ title: "популярности", type: "popularity" },
		{ title: "цене", type: "price" },
		{ title: "алфавиту", type: "title" },
	]
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(currentFilter.category.index)
	const [activeSortIndex, setActiveSortIndex] = useState(currentFilter.sort.index)
	const [popupStatus, setPopupStatus] = useState(false)

	const bodyClickHandler = (e) => {
		if (!e.path.includes(sortLabelRef.current)) {
			setPopupStatus(false)
			document.body.removeEventListener("click", bodyClickHandler)
		}
	}

	const onSortLabelClick = () => {
		setPopupStatus(true)
		document.body.addEventListener("click", bodyClickHandler)
	}

	const onSortTypeClick = (index) => {
		setActiveSortIndex(index)
		dispatch(setSort(allSortTypes[index].type, index))
	}

	const onCategoryTypeClick = (index) => {
		setActiveCategoryIndex(index)
		dispatch(setCategory(allCategory[index].type, index))
	}

	const onArrowClick = () => {
		currentFilter.sortDirection === "asc"
			? dispatch(setSortDirection("desc"))
			: dispatch(setSortDirection("asc"))

	}

	return (
		<div className="content__top">
			<div className="categories">
				<ul>
					{allCategory.map((obj, index) => <li
						onClick={() => onCategoryTypeClick(index)}
						className={cn({
							"active": activeCategoryIndex === index
						})}
						key={`${obj.title}_${index}`}>{obj.title}</li>)}
				</ul>
			</div>
			<div className="sort">
				<div className="sort__label down">
					<svg
						width="24"
						height="18"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={onArrowClick}
						className={cn({
							"down": currentFilter.sortDirection === "asc"
						})}
					>
						<path
							d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
							fill="#fe5f1e"
						/>
					</svg>
					<div ref={sortLabelRef} onClick={onSortLabelClick}>
						<b>Сортировка по:</b>
						<span>{allSortTypes[activeSortIndex].title}</span>
					</div>
				</div>
				{popupStatus && <div className="sort__popup">
					<ul>
						{allSortTypes.map((obj, index) => <li
							onClick={() => onSortTypeClick(index)}
							className={cn({
								"active": activeSortIndex === index
							})}
							key={`${obj.title}_${index}`}>{obj.title}</li>)}
					</ul>
				</div>}
			</div>
		</div>

	)
}

export default Filters

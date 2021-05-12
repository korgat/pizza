import React, { useState } from 'react'
import cn from "classnames"
import { useDispatch } from 'react-redux'
import { addPizzaToCart } from '../../../store/actions/setCart'

const PizzaBlock = ({ title, url, price, dough, sizes, id, amountPizzasInCart }) => {
	const dispatch = useDispatch()

	const allDough = [
		"тонкое", "традиционное"
	]
	const allSizes = [26, 30, 40]
	const [activeDoughIndex, setActiveDoughIndex] = useState(dough[0])
	const [activeSizeIndex, setActiveSizeIndex] = useState(allSizes.indexOf(sizes[0]))

	const onAddBtnClick = () => {
		dispatch(addPizzaToCart({
			title,
			url,
			id,
			dough: allDough[activeDoughIndex],
			sizes: allSizes[activeSizeIndex],
			price: price[activeSizeIndex]
		}))
	}

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={url}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{title}</h4>
			<div className="pizza-block__selector">
				<ul>
					{allDough.map((item, index) => <li
						onClick={() => setActiveDoughIndex(index)}
						className={cn({
							"active": activeDoughIndex === index,
							"disabled": !dough.includes(index)
						})}
						key={`${item}_${index}`}>{item}</li>)}
				</ul>
				<ul>
					{allSizes.map((item, index) => <li
						onClick={() => setActiveSizeIndex(index)}
						className={cn({
							"active": activeSizeIndex === index,
							"disabled": !sizes.includes(item)
						})}
						key={`${item}_${index}`}>{item}</li>)}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price[activeSizeIndex]} ₽</div>
				<div onClick={onAddBtnClick} className="button button--outline button--add">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>{amountPizzasInCart}</i>
				</div>
			</div>
		</div>

	)
}

export default PizzaBlock

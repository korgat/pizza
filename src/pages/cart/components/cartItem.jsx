import React from 'react'

const CartItem = ({ pizzasStack, handleDeleteStack, addPizzaToStack, deletePizzaFromStack }) => {

	const onDeleteStackClick = () => {
		handleDeleteStack(pizzasStack[0].id)
	}

	const onPlusBtnClick = () => {
		addPizzaToStack(pizzasStack[0].id)
	}

	const onMinusBtnClick = () => {
		pizzasStack.length === 1
			? handleDeleteStack(pizzasStack[0].id)
			: deletePizzaFromStack(pizzasStack[0].id)
	}
	return (
		<div class="cart__item">
			<div class="cart__item-img">
				<img class="pizza-block__image"
					src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
					alt="Pizza" />
			</div>
			<div class="cart__item-info">
				<h3>{pizzasStack[0].title}</h3>
				<p>{pizzasStack[0].dough} тесто, {pizzasStack[0].sizes} см.</p>
			</div>
			<div class="cart__item-count">
				<div onClick={onMinusBtnClick} class="button button--outline button--circle cart__item-count-minus">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
							fill="#EB5A1E" />
						<path
							d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
							fill="#EB5A1E" />
					</svg>

				</div>
				<b>{pizzasStack.length}</b>
				<div onClick={onPlusBtnClick} class="button button--outline button--circle cart__item-count-plus">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
							fill="#EB5A1E" />
						<path
							d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
							fill="#EB5A1E" />
					</svg>

				</div>
			</div>
			<div class="cart__item-price">
				<b>{pizzasStack.reduce((acc, obj) => acc + obj.price, 0)} ₽</b>
			</div>
			<div class="cart__item-remove">
				<div onClick={onDeleteStackClick} class="button button--outline button--circle">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
							fill="#EB5A1E" />
						<path
							d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
							fill="#EB5A1E" />
					</svg>

				</div>
			</div>
		</div>

	)
}

export default CartItem

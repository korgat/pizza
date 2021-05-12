import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaBlockLoader = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={457}
			viewBox="0 0 280 457"
			backgroundColor="#fff4e5"
			foregroundColor="#ffffff"
			{...props}
		>
			<circle cx="375" cy="226" r="20" />
			<circle cx="135" cy="130" r="130" />
			<rect x="10" y="275" rx="0" ry="0" width="260" height="22" />
			<rect x="2" y="308" rx="0" ry="0" width="2" height="3" />
			<rect x="0" y="312" rx="0" ry="0" width="280" height="84" />
			<rect x="129" y="416" rx="33" ry="33" width="151" height="44" />
			<rect x="0" y="428" rx="0" ry="0" width="108" height="18" />
		</ContentLoader>
	)
}

export default PizzaBlockLoader

const genHexColor = () => {
	return '#'+(Math.random()*0xFFFFFF<<0).toString(16).toUpperCase();
}

export {genHexColor};
const colorInputs = [...document.getElementsByClassName('colorInput')];

function prependHash () {
		let str = this.value.substring(1);
		str = '#' + str;
		this.value = str;
}

// export {prependHash};
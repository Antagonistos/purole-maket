document.getElementById('burger').onclick = function () {
	document.getElementById('header__inner').classList.toggle('header-menu--active')
}

document.getElementById('item').onclick = function () {
	document.getElementById('item').classList.toggle('item__show')
}
document.getElementById('item--more').onclick = function () {
	document.getElementById('item--more').classList.toggle('item__text-more__on')
}

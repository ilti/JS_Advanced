function createArticle() {
	let titleInputElemen = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');

	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputElemen.value;

	let contentElement = document.createElement('p');
	contentElement.innerHTML = contentInputElement.value;

	if (contentElement.innerHTML && headingElement.innerHTML) {
		titleInputElemen.value = '';
		contentInputElement.value = '';

		let mainPSection = document.createElement('article');
		mainPSection.appendChild(headingElement);
		mainPSection.appendChild(contentElement);

		let articleListSection = document.querySelector("#articles > h1");
		articleListSection.appendChild(mainPSection);
	}

}
const output = document.querySelector(".output");

function createNewCard() {
	const name = document.querySelector("#name").value;
	const sport = document.querySelector("#sport").value;
	const infos = document.querySelector("#infos").value;
	const imageUrl = document.querySelector("#image").value;

	console.log(imageUrl);

	const newCard = `<div class="new-card" style="background: url(${imageUrl}) no-repeat center"><p>Name: ${name}</p><p>Sport: ${sport}</p><p class="infos">Additional information: ${infos}</p></div>`;
	output.insertAdjacentHTML("afterbegin", newCard);

	document.querySelector("#name").value = "";
	document.querySelector("#sport").value = "";
	document.querySelector("#infos").value = "";
	document.querySelector("#image").value = "";
}

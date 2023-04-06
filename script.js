function submitForm(event) {
	event.preventDefault();
	const form = event.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries());
	const formDataDiv = document.getElementById("form-data");
	formDataDiv.innerHTML = "";
	formDataDiv.style.display = "block";
	for (const [key, value] of Object.entries(data)) {
		const p = document.createElement("p");
		p.innerHTML = `<span>${key}:</span> ${value}`;
		formDataDiv.appendChild(p);
	}
	form.reset();
}

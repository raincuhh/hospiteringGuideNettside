document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("change-button").addEventListener("click", () => {
		document.getElementById("show-up").textContent = "Moss - byen vår!";
		console.log("du klikket meg!");
	});
});

document.getElementById("popupBtn").onclick = function() {
		document.getElementById("popup").style.display = "block";
	};
document.querySelector(".close-btn").onclick = function() {
		document.getElementById("popup").style.display = "none";
	};
window.onclick = function(event) {
		if (event.target.className === "popup") {
			document.getElementById("popup").style.display = "none";
		}
	};

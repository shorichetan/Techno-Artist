let firstInteraction = false;
function showTab(id) {
	// Hide all tabs
	document.querySelectorAll('.tab-content').forEach(tab => {
		if (firstInteraction) {
		tab.classList.add('hidden'); // Apply transition effect only after first interaction
	}
	tab.style.display = 'none';
	});
// Show the selected tab
let activeTab = document.getElementById(id);
activeTab.style.display = 'block'; 
// If it's after the first interaction, enable the transition effect
if (firstInteraction) {
	setTimeout(() => {
		activeTab.classList.remove('hidden'); // Activate fade-in effect
	}, 10);
	}
firstInteraction = true; // Set flag after first tab change
// Update button styles to indicate active tab
document.querySelectorAll('.tab-button').forEach(button => {
	button.classList.remove('active-tab');
});
// Highlight clicked tab button
document.querySelector(`#${id}-button`).classList.add('active-tab');
}

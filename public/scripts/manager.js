// Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Open/Close Modal
const modal = document.getElementById('procurementModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = modal.querySelector('.close');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Search Functionality (Placeholder)
const procurements = [
    { name: 'Rice', type: 'Grain', date: '2024-08-01', tonnage: 5000, cost: 2000000, dealer: 'Dealer A', branch: 'Matugga', price: 2200 },
    { name: 'Beans', type: 'Legume', date: '2024-08-02', tonnage: 3000, cost: 1500000, dealer: 'Dealer B', branch: 'Maganjo', price: 1800 },
    // Add more procurement data here for testing
];

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const results = procurements.filter(procurement => 
        procurement.name.toLowerCase().includes(searchTerm) ||
        procurement.type.toLowerCase().includes(searchTerm) ||
        procurement.dealer.toLowerCase().includes(searchTerm)
    );
    
    // Output results in a way that suits your needs
    console.log(results); // For testing, display results in the console
    // You might want to update the UI with the search results
});

// Help & Support Button
document.getElementById('openHelp').addEventListener('click', function() {
    alert('For help and support, please contact our support team at support@kgl.com.');
});

// Auto-Suggestions (Placeholder)
const produceNames = ['Rice', 'Beans', 'Maize', 'Cowpeas', 'G-nuts', 'Soybeans'];

document.getElementById('produceName').addEventListener('input', function() {
    const value = this.value.toLowerCase();
    const suggestions = produceNames.filter(name => name.toLowerCase().includes(value));
    console.log(suggestions); // You might want to implement a dropdown or suggestion list here
});

// Log Out Button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Redirect to the landing page or close the software
    window.location.href = '/index.html'; // Replace with the actual URL of the landing page
    // or
    // window.close(); // If running in a context where window.close() is permitted
});

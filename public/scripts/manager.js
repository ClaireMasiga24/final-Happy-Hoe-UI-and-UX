// Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Manage Procurement Data
let procurements = [];

// Update Summary Cards
function updateSummaryCards() {
    const totalProcurements = procurements.length;
    const totalCost = procurements.reduce((sum, p) => sum + p.cost, 0);
    const avgTonnage = procurements.length > 0 
        ? (procurements.reduce((sum, p) => sum + p.tonnage, 0) / totalProcurements).toFixed(2)
        : 0;

    document.getElementById('totalProcurements').textContent = totalProcurements;
    document.getElementById('totalCost').textContent = `${totalCost} UgX`;
    document.getElementById('avgTonnage').textContent = `${avgTonnage} kg`;
}

// Render Procurements (for display and search results)
function renderProcurements() {
    const container = document.getElementById('procurementList');
    container.innerHTML = '';

    procurements.forEach((procurement, index) => {
        const div = document.createElement('div');
        div.classList.add('procurement-entry');
        div.innerHTML = `
            <p>${procurement.name} (${procurement.type}) - ${procurement.tonnage} kg - ${procurement.cost} UgX</p>
            <button data-index="${index}" class="delete-btn">Delete</button>
        `;
        container.appendChild(div);
    });

    // Attach event listeners for delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteProcurement);
    });
}

// Add Procurement
document.getElementById('procurementForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newProcurement = {
        name: document.getElementById('produceName').value,
        type: document.getElementById('produceType').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        tonnage: parseFloat(document.getElementById('tonnage').value),
        cost: parseFloat(document.getElementById('cost').value),
        dealer: document.getElementById('dealerName').value,
        branch: document.getElementById('branch').value,
        contact: document.getElementById('contact').value,
        price: parseFloat(document.getElementById('price').value)
    };

    procurements.push(newProcurement);
    updateSummaryCards();
    renderProcurements();
    modal.style.display = 'none';
    this.reset(); // Clear the form after submission
});

// Delete Procurement
function deleteProcurement(e) {
    const index = e.target.getAttribute('data-index');
    procurements.splice(index, 1); // Remove the procurement
    updateSummaryCards();
    renderProcurements();
}

// Search Functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const results = procurements.filter(procurement => 
        procurement.name.toLowerCase().includes(searchTerm) ||
        procurement.type.toLowerCase().includes(searchTerm) ||
        procurement.dealer.toLowerCase().includes(searchTerm)
    );
    
    renderSearchResults(results);
});

function renderSearchResults(results) {
    const container = document.getElementById('procurementList');
    container.innerHTML = '';

    results.forEach((procurement, index) => {
        const div = document.createElement('div');
        div.classList.add('procurement-entry');
        div.innerHTML = `
            <p>${procurement.name} (${procurement.type}) - ${procurement.tonnage} kg - ${procurement.cost} UgX</p>
            <button data-index="${index}" class="delete-btn">Delete</button>
        `;
        container.appendChild(div);
    });

    // Attach event listeners for delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteProcurement);
    });
}

// Modal Functionality
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
    window.location.href = '/index.html';
});

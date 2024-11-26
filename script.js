
function loadBookings() {
  const bookingTableBody = document.getElementById('booking-body');
  const bookings = [
    { username: 'Elon Mask', description: 'Tesla', dimension: '1200 sq ft', image: 'elon-mask.png' },
    { username: 'Bill Gates', description: 'Microsoft', dimension: '850 sq ft', image: 'bill-gates.png' },
  ];

  bookingTableBody.innerHTML = ''; // Clear existing rows

  bookings.forEach((booking, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${booking.username}</td>
      <td><img src="${booking.image}" alt="${booking.username}" class="booking-image" /></td>
      <td>${booking.description}</td>
      <td>${booking.dimension}</td>
      <td><button class="btn-approve">Approve</button></td>
    `;
    bookingTableBody.appendChild(row);
  });
}

// Add new property
document.getElementById('property-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Property added!'); // Placeholder for actual submission logic
});

// Load bookings on page load
loadBookings();

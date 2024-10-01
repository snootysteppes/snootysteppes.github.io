document.addEventListener("DOMContentLoaded", function() {
  const services = [
    { name: "Haircut", description: "Get a fresh new look with our expert haircuts.", price: "$50" },
    { name: "Hair Coloring", description: "Transform your style with a vibrant new hair color.", price: "$80" },
    { name: "Styling", description: "Perfect for special occasions or just because!", price: "$40" },
  ];

  const serviceContainer = document.getElementById('service-container');

  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.innerHTML = `
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <p><strong>Price: ${service.price}</strong></p>
    `;
    serviceContainer.appendChild(serviceCard);
  });

  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    alert(`Booking confirmed!\nName: ${name}\nEmail: ${email}\nService: ${service}\nDate: ${date}`);
  });
});

function scrollToBooking() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

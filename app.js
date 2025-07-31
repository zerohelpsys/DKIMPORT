// app.js
const products = [
  {
    image: 'Products/Powerbanks/powerbank1.jpg', // ✅ Corrected path
    title: 'S 40 POWERBANK',
    code: 'P001',
    price: '5500/-PKR',
    category: 'POWERBANK',
    specs: 'QUICK CHARGING SUPPORT- 50000MAH - 4 USB TO TYPE C PORT - 2 TYPE C TO TYPE C PORT',
  },
  {
    image: 'Products/Powerbanks/powerbank2.jpg', // ✅ Same correction
    title: 'TREQA IMPORTED POWERBANK',
    code: 'P002',
    price: '1500/-PKR',
    category: 'POWERBANK',
    specs: 'IMPORTED- 10000MAH - QUICK CHARGE',
  },
  {
    image: 'Products/Powerbanks/powerbank3.jpg', // ✅ Same correction
    title: 'LOT IMPORTED POWERBANK',
    code: 'P003',
    price: '3000/-PKR',
    category: 'POWERBANK',
    specs: 'IMPORTED- 27000MAH - QUICK CHARGE',
  },
  {
    image: 'Products/Charger/micharger35w.jpeg', // ✅ Same correction
    title: 'MI CHARGER 35 W',
    code: 'C001',
    price: '800/-PKR',
    category: 'Charger',
    specs: 'MI Orignal Charger - 35 W Fast Charging',
  },
];

const productGrid = document.getElementById('productGrid');
const searchTitle = document.getElementById('searchTitle');
const searchCategory = document.getElementById('searchCategory');

function renderProducts(filterTitle = '', filterCategory = '') {
  productGrid.innerHTML = '';
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    p.category.toLowerCase().includes(filterCategory.toLowerCase())
  );
  filtered.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p><strong>Code:</strong> ${product.code}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Specs:</strong> ${product.specs}</p>
      <button class="btn-order" onclick='orderOnWhatsApp(${JSON.stringify(product)})'>Order on WhatsApp</button>
    `;
    productGrid.appendChild(productCard);
  });
}

function orderOnWhatsApp(product) {
  const msg = `*Order Details:*\nTitle: ${product.title}\nCode: ${product.code}\nPrice: ${product.price}\nCategory: ${product.category}\nSpecs: ${product.specs}`;
  const url = `https://wa.me/923299391781?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

searchTitle.addEventListener('input', () => {
  renderProducts(searchTitle.value, searchCategory.value);
});

searchCategory.addEventListener('input', () => {
  renderProducts(searchTitle.value, searchCategory.value);
});

renderProducts();

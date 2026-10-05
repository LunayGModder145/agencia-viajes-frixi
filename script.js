// 1. Array de objetos para las tarjetas
const data = [
  {
    title: "viaje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies. Sed lobortis dignissim lorem, pharetra.",
    url_img: "assets/viajes-1.jpg"
  },
  {
    title: "viaje 2",
    description: "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, ultricies nec sem id, efficitur convallis arcu. Praesent suscipit augue nec velit egestas.",
    url_img: "assets/viajes-2.jpg"
  },
  {
    title: "viaje 3",
    description: "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac, laoreet in metus. Sed dui odio.",
    url_img: "assets/viajes-3.jpg"
  }
];

// 2. Array de ciudades para el selector
const cities = [
  "Burgos",
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza"
];

// 3. Renderizar las tarjetas
const contenedorRecomendados = document.getElementById("contenedor-recomendados");

data.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.url_img}" alt="${item.title}">
    <div class="card-content">
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.description}</p>
    </div>
  `;

  contenedorRecomendados.appendChild(card);
});

// 4. Renderizar las opciones del select
const selectDestinos = document.getElementById("select-destinos");

cities.forEach((city) => {
  const option = document.createElement("option");
  option.value = city.toLowerCase();
  option.textContent = city;
  
  selectDestinos.appendChild(option);
});
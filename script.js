const data = [
  {
    title: "viaje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url_img: "assets/viajes-1.jpg"
  },
  {
    title: "viaje 2",
    description: "Mauris felis libero, suscipit sed pretium fermentum.",
    url_img: "assets/viajes-2.jpg"
  },
  {
    title: "viaje 3",
    description: "Phasellus dignissim turpis id hendrerit mollis.",
    url_img: "assets/viajes-3.jpg"
  }
];

const cities = [
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

// Se declaran las referencias al DOM una sola vez
const contenedorRecomendados = document.getElementById("contenedor-recomendados");
const selectDestinos = document.getElementById("select-destinos");

// Bucle para inyectar las tarjetas en Recomendados
for (let i = 0; i < data.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  const img = document.createElement("img");
  img.src = data[i].url_img;
  card.appendChild(img);
  
  const h3 = document.createElement("h3");
  h3.textContent = data[i].title;
  card.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = data[i].description;
  card.appendChild(p);
 
  contenedorRecomendados.appendChild(card);
}

// Bucle para inyectar las ciudades en el selector Destinos
for (let i = 0; i < cities.length; i++) {
  const option = document.createElement("option");
  option.value = cities[i];
  option.textContent = cities[i];
  
  selectDestinos.appendChild(option);
}

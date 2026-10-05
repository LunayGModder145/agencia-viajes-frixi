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

const contenedorRecomendados = document.getElementById("contenedor-recomendados");

// Bucle básico para inyectar solo las imágenes
for (let i = 0; i < data.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  
  // Añadimos la imagen primero
  const img = document.createElement("img");
  img.src = data[i].url_img;
  card.appendChild(img);
  
  // 3. Creamos el título <h3> y le asignamos el texto desde data[i].title
  const h3 = document.createElement("h3");
  h3.textContent = data[i].title;
  card.appendChild(h3);

  // 4. Creamos el párrafo <p> y le asignamos la descripción desde data[i].description
  const p = document.createElement("p");
  p.textContent = data[i].description;
  card.appendChild(p);
 
  contenedorRecomendados.appendChild(card);
}

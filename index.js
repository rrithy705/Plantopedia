async function getPlants() {
  const response = await fetch("/api/plants");
  const plants = await response.json();

  displayPlants(plants);
}

function displayPlants(plants) {
  const plantList = document.getElementById("plant-list");

  plants.forEach((plant) => {
    const article = document.createElement("article");

    article.classList.add("plant-card");

    article.innerHTML = `
      <img
        src="${plant.image}"
        alt="Photo of ${plant.name}"
      >

      <h3>${plant.name}</h3>

      <p><strong>Type:</strong> ${plant.type}</p>

      <p><strong>Sunlight:</strong> ${plant.sunlight}</p>

      <p><strong>Watering:</strong> ${plant.watering}</p>

      <a href="/plants/${plant.id}" role="button">
        View Details
      </a>
    `;

    plantList.appendChild(article);
  });
}

getPlants();
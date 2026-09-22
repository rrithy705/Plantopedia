async function getPlant() {
  const path = window.location.pathname;

  const id = path.split("/").pop();

  const response = await fetch(`/api/plants/${id}`);

  if (!response.ok) {
    window.location.href = "/404.html";
    return;
  }

  const plant = await response.json();

  displayPlant(plant);
}

function displayPlant(plant) {
  const details = document.getElementById("plant-details");

  details.innerHTML = `
    <img
      src="${plant.image}"
      alt="Photo of ${plant.name}"
    >

    <h1>${plant.name}</h1>

    <p>
      <strong>Scientific Name:</strong>
      ${plant.scientificName}
    </p>

    <p>
      <strong>Type:</strong>
      ${plant.type}
    </p>

    <p>
      <strong>Description:</strong>
      ${plant.description}
    </p>

    <p>
      <strong>Sunlight:</strong>
      ${plant.sunlight}
    </p>

    <p>
      <strong>Watering:</strong>
      ${plant.watering}
    </p>
  `;
}

getPlant();
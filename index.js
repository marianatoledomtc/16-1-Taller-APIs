// Use the free version URL to fetch random cat images
let imageSearchUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

document.getElementById('loadMoreCats').addEventListener('click', fetchCatData);

async function fetchCatData() {
  try {
    let response = await fetch(imageSearchUrl);
    let images = await response.json();

    // Loop through the cat images and create cards
    images.forEach(image => {
      createCatCard(image.url);
    });
  } catch (error) {
    console.error('Error fetching cat data:', error);
  }
}

function createCatCard(imageUrl) {
  let cardContainer = document.createElement('div');
  cardContainer.className = 'col-md-6';

  let card = document.createElement('div');
  card.className = 'card shadow-sm';

  let img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Cat Image';
  img.className = 'card-img-top';

  let gif = document.createElement('img');
  gif.src = 'img/pusheen-gif.gif';
  gif.alt = 'Cat GIF';
  gif.className = 'card-gif text-center';

  let cardBody = document.createElement('div');
  cardBody.className = 'card-body text-center';

  cardBody.appendChild(img);
  cardBody.appendChild(gif);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);

  document.getElementById('catContainer').appendChild(cardContainer);
}

fetchCatData();

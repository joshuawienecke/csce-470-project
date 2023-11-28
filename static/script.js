document.addEventListener("DOMContentLoaded", function() {
    fetchShirtData();
});

async function fetchShirtData() {
    const response = await fetch('/');
    const shirtData = await response.json();
    displayShirts(shirtData);
}

function displayShirts(shirts) {
    const container = document.getElementById('shirt-container');
    
    for (let i = 0; i < Math.min(shirts.length, 5); i++) {
        const shirt = shirts[i];
        const shirtCard = document.createElement('div');
        shirtCard.className = 'shirt-card';

        const shirtImage = document.createElement('img');
        shirtImage.src = shirt.image;  // image path
        shirtImage.className = 'shirt-image';

        const shirtName = document.createElement('div');
        shirtName.className = 'shirt-name';
        shirtName.textContent = `Shirt Name: ${shirt.name}`;

        const shirtEmbeddings = document.createElement('div');
        shirtEmbeddings.className = 'shirt-embeddings';
        shirtEmbeddings.textContent = `Embeddings: ${shirt.embeddings.join(', ')}`;

        shirtCard.appendChild(shirtImage);
        shirtCard.appendChild(shirtName);
        shirtCard.appendChild(shirtEmbeddings);
        container.appendChild(shirtCard);
    }
}



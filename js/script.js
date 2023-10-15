
function buttonDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => img.src = data.message);
    img.style.border = '10px solid rgb(28, 255, 191)';
    img.style.borderRadius = '20px';
}

function buttonCat() {
    const img = document.getElementById('img');
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {img.src = data[0].url;});
    img.style.border = '10px solid rgb(28, 255, 191)';
    img.style.borderRadius = '20px';
}

function buttonCapybara() {
    const img = document.getElementById('img');
    fetch('https://api.capy.lol/v1/capybara?json=true')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.data.url;
        img.src = imageUrl;
        img.style.border = '10px solid rgb(28, 255, 191)';
        img.style.borderRadius = '20px'; // Adjust this value to control the rounding
      });
}
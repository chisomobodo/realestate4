const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c6cec7b15mshceb8981571a3dcep11a25ejsnd293906ab6a6',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	}
};


	 fetch(url, options).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
        let markup = ''
        data.photos.map(element => {
          markup+= `<div class="property-card">
         <img src="${element.url}" alt="Property 1" width="400">
         <h2 class="property-title">${element.title}</h2>
         <p class="property-price">$1,200,000</p>
         <p class="property-location">Ikeja, Lagos NG</p>
     </div>`
     document.getElementById('product').innerHTML = markup   
        });
    }).catch(err => console.log(err));


    // Function to show the modal with property details
function showModal(property) {
    const modal = document.getElementById("propertyModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalLocation = document.getElementById("modalLocation");

    modalImage.src = property.image;
    modalTitle.textContent = property.title;
    modalPrice.textContent = property.price;
    modalLocation.textContent = property.location;

    modal.classList.remove("hidden");
}


// Function to hide the modal
function hideModal() {
    const modal = document.getElementById("propertyModal");
    modal.classList.add("hidden");
}

// Attach click event listeners to property cards
document.getElementById('product').addEventListener('click', function(event) {
    const clickedElement = event.target.closest('.property-card');
    if (clickedElement) {
        // Get the property details from the clicked card (you need to adjust this part)
        const property = {
            image: clickedElement.querySelector('img').src,
            title: clickedElement.querySelector('.property-title').textContent,
            price: clickedElement.querySelector('.property-price').textContent,
            location: clickedElement.querySelector('.property-location').textContent,
        };

        showModal(property);
    }
});

// Attach click event listener to the close button of the modal
document.querySelector('.close-btn').addEventListener('click', hideModal);
















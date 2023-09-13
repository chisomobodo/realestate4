const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd2d1f6cac6mshf58c114af333d08p187bcbjsn02d6bc6a6e7d',
		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
	}
};



	 fetch(url, options).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
        let markup = ''
        data.photos.map(element => {
          markup+= `<div><div class="property-card"  onclick="openPopup(${element.id})">
         <img src="${element.url}" alt="Property 1" width="400">
         <h2 class="property-title">${element.title}</h2>
         <p class="property-price">$1,200,000</p>
         <p class="property-location">Ikeja, Lagos NG</p>
     </div>
     <div class="popup"  id="popup-${element.id}">
                    <div class="modal-content">
                        <span class="close" onclick="closePopup(${element.id})">&times;</span>
                        <img src="${element.url}" alt="Property 1" width="200">
                        <h2 class="property-title">${element.title}</h2>
                        <p class="property-price">$1,200,000</p>
                        <p class="property-location">Ikeja, Lagos NG</p>
                    </div>
                </div>
     </div>`
     document.getElementById('product').innerHTML = markup   
        });
    }).catch(err => console.log(err));


    
// function showModal(property) {
//     const modal = document.getElementById("propertyModal");
//     const modalImage = document.getElementById("modalImage");
//     const modalTitle = document.getElementById("modalTitle");
//     const modalPrice = document.getElementById("modalPrice");
//     const modalLocation = document.getElementById("modalLocation");

//     modalImage.src = property.image;
//     modalTitle.textContent = property.title;
//     modalPrice.textContent = property.price;
//     modalLocation.textContent = property.location;

//     modal.classList.remove("hidden");
// }



// function hideModal() {
//     const modal = document.getElementById("propertyModal");
//     modal.classList.add("hidden");
// }


// document.getElementById('product').addEventListener('click', function(event) {
//     const clickedElement = event.target.closest('.property-card');
//     if (clickedElement) {
        
//         const property = {
//             image: clickedElement.querySelector('img').src,
//             title: clickedElement.querySelector('.property-title').textContent,
//             price: clickedElement.querySelector('.property-price').textContent,
//             location: clickedElement.querySelector('.property-location').textContent,
//         };

//         showModal(property);
//     }
// });


// document.querySelector('.close-btn').addEventListener('click', hideModal);


// document.getElementById('openModalBtn').addEventListener('click', function() {
//     document.getElementById('myModal').style.display = 'block';
// });

// document.getElementsByClassName('close')[0].addEventListener('click', function() {
//     document.getElementById('myModal').style.display = 'none';
// });





// function openPopup(id){
//     let popup = document.getElementById('popup-${id}')
//     popup.classList.add("open-popup");
// }
// added id to make the modal unique
function openPopup(id) {
    document.getElementById(`popup-${id}`).classList.add('open-popup');
}

function closePopup(id) {
    document.getElementById(`popup-${id}`).classList.remove("open-popup");
}










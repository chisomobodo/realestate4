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


    








// added id to make the modal unique
function openPopup(id) {
    document.getElementById(`popup-${id}`).classList.add('open-popup');
}

function closePopup(id) {
    document.getElementById(`popup-${id}`).classList.remove("open-popup");
}










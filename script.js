
const rapidApiKey = '0c6cec7b15mshceb8981571a3dcep11a25ejsnd293906ab6a6';
const bayutApiEndpoint = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';


async function fetchPropertyData() {
  try {
    const response = await fetch('https://bayut.p.rapidapi.com/properties/detail?externalID=4937770', {
      method: 'GET',
      headers: {
        '0c6cec7b15mshceb8981571a3dcep11a25ejsnd293906ab6a6': rapidApiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

   
    const propertyListings = document.querySelector('.property-listings');

    data.results.forEach((property) => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');

      

      const propertyTitle = document.createElement('h2');
      propertyTitle.classList.add('property-title');
      propertyTitle.textContent = property.title;

      const propertyPrice = document.createElement('p');
      propertyPrice.classList.add('property-price');
      propertyPrice.textContent = `$${property.price}`;

      const propertyLocation = document.createElement('p');
      propertyLocation.classList.add('property-location');
      propertyLocation.textContent = property.location;

      
      propertyCard.appendChild(propertyTitle);
      propertyCard.appendChild(propertyPrice);
      propertyCard.appendChild(propertyLocation);

      propertyListings.appendChild(propertyCard);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

window.addEventListener('load', fetchPropertyData);



// const url = 'https://bayut.p.rapidapi.com/properties/detail?externalID=4937770';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0c6cec7b15mshceb8981571a3dcep11a25ejsnd293906ab6a6',
// 		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

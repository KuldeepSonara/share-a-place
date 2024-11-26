const getCurrentLocation = document.getElementById('locate-btn');
const addressForm = document.querySelector('form');



// Initialize map here (example coordinates for London, you can change it)
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locateUserHandler = () => {
  if (!navigator.geolocation) {
    showFallBackmessage(
      'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
    );
    return;
}

showLoader('Loading map>>>');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('Position:', position);
      const { latitude, longitude } = position.coords;
     updateMapAndCreateLink(latitude,longitude, 'you are here')
    hideLoader()
      
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error('Error while retrieving position:', error.message);
      showFallBackmessage('Could not retrieve your location. Please try again later.');
    }
  );
};



const addressToMap = (event)=>{
    event.preventDefault();
    
    const addressInput = document.getElementById('address');
    // console.log(addressInput)
    const address = addressInput.value.trim();
    
    if(address && address.length > 0 ){
      console.log(address)
      showLoader('Finding loaction >>>>>')
      axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
              format: 'json',
              q: address,
            }
          }).then(response => {
            const data = response.data;
            // console.log(data);
            if(data && data.length > 0){
                const plase = data[0];
                const lat = plase.lat;
                const lon = plase.lon;
                const placeName = plase.display_name;

                updateMapAndCreateLink(lat,lon, placeName)
                hideLoader()
            }else {
                showFallBackmessage('Place not found. Please try again with a different address.');
              }
          })
    }else{
      showFallBackmessage('Please add addres')
    }
}

getCurrentLocation.addEventListener('click', locateUserHandler);

addressForm.addEventListener('submit',(value)=>{
    addressToMap(value)
});
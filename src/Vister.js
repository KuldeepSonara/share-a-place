// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map (make sure to do this before updating the map)
    console.log('hallo')
    const map = L.map('map').setView([51.505, -0.09], 13); // Default coordinates (London)
  
    // Tile layer for the map (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Function to get the query parameters from the URL
    const getQueryParams = () => {
      const params = new URLSearchParams(window.location.search);
      const latitude = parseFloat(params.get('lat'));
      const longitude = parseFloat(params.get('lon'));
      return { latitude, longitude };
    };
  
    // Get the latitude and longitude from the query parameters
    const { latitude, longitude } = getQueryParams();
  
    // If valid latitude and longitude are present, update the map
    if (latitude && longitude) {
      map.setView([latitude, longitude], 13); // Set map view to the given coordinates
      L.marker([latitude, longitude]).addTo(map)
        .bindPopup('<b>Shared Location</b>')
        .openPopup();
    } else {
      console.log('No valid coordinates in the URL.');
    }
  });
  
const shareLinkInput = document.getElementById('share-link');
const shareBtn = document.getElementById('share-btn');

// Function to update the map with a new location and generate the shareable link
const updateMapAndCreateLink = (latitude, longitude, textContent) => {
  // Update the map view to the new coordinates
  map.setView([latitude, longitude], 13);

  // Add a marker and popup at the new location
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(`<b>${textContent}</b>`) // Show a popup at the user's location
    .openPopup();

  // Create the shareable link
  // const shareableLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=13/${latitude}/${longitude}`;
  
  const currentUrl = window.location.origin; // Get the base URL (e.g., http://localhost:3000)
  const shareableLink = `${currentUrl}/share%20plase/dist/vister.html?lat=${latitude}&lon=${longitude}`;

  // Display the link in the input field and enable the Share button
  shareLinkInput.value = shareableLink;
  shareBtn.disabled = false; // Enable the Share button

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
};


const copyToClipboard = () => {
    const text = shareLinkInput.value;
    console.log(text)

    if(navigator.clipboard){
        navigator.clipboard.writeText(text).then(copy =>{
            console.log(copy)
        }).catch(error =>{
            console.log(error)
        })
    }else{
        console.log('Error')
    }
  };
  

shareBtn.addEventListener('click', copyToClipboard);
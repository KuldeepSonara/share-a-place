const shareLinkInput = document.getElementById('share-link');
const shareBtn = document.getElementById('share-btn');

const updateMapAndCreateLink = (latitude, longitude, textContent) => {
  map.setView([latitude, longitude], 13);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(`<b>${textContent}</b>`) 
    .openPopup();


  // const shareableLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=13/${latitude}/${longitude}`;
  
  const currentUrl = window.location.origin; 
  const shareableLink = `${currentUrl}/dist/vister.html?lat=${latitude}&lon=${longitude}&name=${textContent}`;

  
  shareLinkInput.value = shareableLink;
  shareBtn.disabled = false; 

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
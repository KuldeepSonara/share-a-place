const getCurrentLocation = document.getElementById("locate-btn");
const addressForm = document.querySelector("form");

// Initialize map here (example coordinates for London, you can change it)
const map = L.map("map").setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locateUserHandler = () => {
  if (!navigator.geolocation) {
    showFallbackMessage(
      "Location feature is not available in your browser - please use a more modern browser or manually enter an address."
    );
    return;
  }

  showLoader("Loading map...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Position:", position);
      const { latitude, longitude } = position.coords;
      updateMapAndCreateLink(latitude, longitude, "You are here");
      hideLoader();

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    (error) => {
      console.error("Error while retrieving position:", error.message);
      showFallbackMessage(
        "Location unavailable. Enable GPS or enter an address manually."
      );
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
};

const addressToMap = (event) => {
  event.preventDefault();

  const addressInput = document.getElementById("address");
  // console.log(addressInput)
  const address = addressInput.value.trim();

  if (address && address.length > 0) {
    console.log(address);
    showLoader("Finding location...");
    axios
      .get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          format: "json",
          q: address,
        },
      })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        if (data && data.length > 0) {
          const place = data[0];
          const lat = place.lat;
          const lon = place.lon;
          const placeName = place.display_name;

          updateMapAndCreateLink(lat, lon, placeName);
          hideLoader();
        } else {
          showFallbackMessage(
            "Place not found. Please try again with a different address."
          );
        }
      });
  } else {
    showFallbackMessage("Please add an address");
  }
};

getCurrentLocation.addEventListener("click", locateUserHandler);

addressForm.addEventListener("submit", (value) => {
  addressToMap(value);
});

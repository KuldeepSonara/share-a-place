# My Place

**My Place** allows users to easily share and view locations on an interactive map powered by OpenStreetMap and Leaflet.js. You can share a location by entering an address or using your current location, generating a unique, shareable link. This app is designed for quick and simple location sharing and viewing.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Share a Place](#share-a-place)
  - [View a Place](#view-a-place)
  - [Pages](#pages)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/my-place.git
    cd my-place
    ```

2. Open the `index.html` file in your browser. You can do this in two ways:
   - **Directly open the file**: Double-click `index.html` to open it in your browser.
   - **Use a live server**: If you have a local server setup (e.g., using the VSCode Live Server extension), run the project through the server.

---

## Usage

### Share a Place
1. On the `index.html` page, enter an address or click on **"Use my location"** to update the map.
2. A unique link will be generated that you can share with others.

### View a Place
- Use the generated shareable link to open the location on the map in the `vister.html` page.

### Pages
- **index.html**: The main page where users can share a place.
- **vister.html**: The page for viewing a shared location using the generated link.

---

## Features
- **Geolocation Support**: Share your current location or manually enter an address.
- **Shareable Links**: Generate a unique URL for each shared location.
- **Interactive Map**: View locations on an interactive map using Leaflet.js and OpenStreetMap.
- **Modal Dialogs**: Friendly pop-up modals for loading and error messages.

---

## Project Structure
.vscode/          # VSCode settings
src/
  shareplace.js   # Handles sharing a place functionality
  ui/
    modal.js      # Manages modals
  utility/
    location.js   # Handles location-related utilities
  Vister.js       # Handles viewing a shared place
style/
  shareplace.css  # Styling for the main app
  vister.css      # Styling for viewing a place
  modal.css       # Styling for modals
index.html        # Main page for sharing a place
vister.html       # Page for viewing shared places

---

For those interested in enhancing My Place, you can fork the repository, work on your improvements in a new branch, and submit a pull request. Contributions are always appreciated, and adhering to project standards ensures a smooth integration process. Thank you for your support!
---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

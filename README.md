# My Place

**My Place** allows users to share and view locations on a map using OpenStreetMap and Leaflet.js. You can either enter an address or use your current location to update the map and generate a shareable link. This app is designed for simple, easy location sharing and viewing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-place.git
   cd my-place
   ```

2. Open the `index.html` file in your browser. You can either:

   - **Simply open the file directly in your browser** by double-clicking on `index.html`.
   - **Use a live server** to run it if you have a local server setup (e.g., using VSCode's Live Server extension).

## Usage

1. **Share a Place**: On `index.html`, enter an address or use your current location to update the map and generate a shareable link.
2. **View a Place**: Use the generated link to view the shared location on the map in the `vister.html` page.

### Pages:

- **index.html**: Main page for sharing a place.
- **vister.html**: View a shared location using the generated link.

## Features

- **Geolocation Support**: Share your location by entering an address or using your current location.
- **Shareable Links**: Generate a unique link for each place you share.
- **Interactive Map**: View shared places on an interactive map using Leaflet.js and OpenStreetMap.
- **Modal Dialogs**: Friendly pop-up modals for loading and error messages.

## Project Structure

The project follows a simple structure with the key files:

.vscode/ # VSCode settings
src/
sharePlace.js # Handles sharing a place functionality
ui/
modal.js # Manages modals
utility/
location.js # Handles location-related utilities
Vister.js # Handles viewing a shared place
style/
sharePlace.css # Styling for the main app
vister.css # Styling for viewing a place
modal.css # Styling for modals
index.html # Main page for sharing a place
vister.html # Page for viewing shared places

## Contributing

We welcome contributions! Here's how you can help improve **My Place**:

1. **Fork the repository**: Create your own copy of the project.
2. **Create a new branch**: `git checkout -b feature-branch`
3. **Make changes**: Work on your feature or bug fix.
4. **Commit your changes**: `git commit -m 'Add a new feature'`
5. **Push to your branch**: `git push origin feature-branch`
6. **Submit a Pull Request**: Open a pull request to merge your changes into the main repository.

Please ensure that your code adheres to the project’s coding standards and is well-documented. Thank you for contributing!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

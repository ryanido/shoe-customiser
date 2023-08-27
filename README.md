# Shoe Customization App
<img width="1470" alt="image" src="https://github.com/ryanido/shoe-customiser/assets/74929384/8a4006ad-9eda-4a7e-83b9-4487ae1afa3c">


## Introduction

The Shoe Customization App is a web application built using React and Three.js that allows users to customize the colors and materials of different parts of a shoe model in real-time.

## Features

- **3D Shoe Model**: The app displays a 3D shoe model that users can interact with.

- **Color Customization**: Users can change the color of various parts of the shoe, including laces, mesh, caps, inner, sole, stripes, band, and patch.

- **Material Selection**: Users can choose from different materials for certain parts of the shoe, such as leather, polyester, and rubber (Placeholders feel free to customize!).

- **User-Friendly Interface**: The app provides a user-friendly interface with buttons to select colors and materials for customization.

## Project Structure

- **App.js**: This is the main component of the application, which contains the 3D shoe model and customization options.

- **Shoe.jsx**: The Shoe component defines the 3D shoe model and handles the dynamic changes based on user customizations.

- **ColorButton**: The ColorButton component represents a color option button that users can click to change the color of a specific shoe part.

- **MaterialButton**: The MaterialButton component represents a material selection button for certain shoe parts.
- 
## Getting Started

To run the Shoe Customization App locally, follow these steps:

1. Clone this repository to your local machine:

 ```bash
 git clone https://github.com/ryanido/shoe-customiser
 ```
2. Navigate to the project directory:

  ```bash
  cd shoe-customiser
  ```
3. Install dependencies:

  ```bash
  npm install
  ```
4. Start the development server:

  ```bash
  npm start
  ```
5. Open your web browser and visit http://localhost:3000 to use the application.

## Usage
Upon launching the app, you will see a 3D shoe model and customization optionsbelow the model.

Use the left and right arrow buttons to select different parts of the shoe for customization.

For each selected part, you can choose a material and color using the buttons provided.

The 3D shoe model will update in real-time to reflect your customizations.

Experiment with different color and material combinations to create your unique shoe design.



# DishCover - Recipe Finder Application

## Overview
DishCover is a modern, user-friendly Recipe Finder application built using **HTML, CSS, and JavaScript**. It allows users to search for  Ghanaian recipes, view detailed ingredients and instructions, and explore various categories. The application provides a seamless and accessible interface for food enthusiasts to discover new dishes effortlessly.

## Features
- **Search Recipes:** Users can search for recipes by name.
- **Recipe Details:** View detailed ingredients, instructions, and images.
- **Categories:** Browse recipes based on different categories.
- **Responsive UI:** Built with CSS for a modern and mobile-friendly experience.
- **Dark Mode Toggle:** Enhances accessibility and user preference.
- **Favorites (Upcoming):** Save favorite recipes for later.
- **Shopping List (Upcoming):** Generate a shopping list based on selected recipes.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **API:** TheMealDB API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dishcover.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dishcover
   ```
3. Open `index.html` in a browser.

## Folder Structure
```
DishCover/
│-- css/         # Stylesheets
│-- js/          # JavaScript files
│-- images/      # Static files (images, icons)
│-- index.html   # Main HTML file
│-- README.md
```

## API Integration
DishCover fetches recipes from TheMealDB API:
- **Search endpoint:** `https://www.themealdb.com/api/json/v1/1/search.php?s=mealname`
- **Recipe details:** `https://www.themealdb.com/api/json/v1/1/lookup.php?i=recipeID`
- **Categories:** `https://www.themealdb.com/api/json/v1/1/categories.php`

## Deployment
DishCover can be deployed using **GitHub Pages, Netlify, or Vercel**:
1. Upload your files to a hosting service.
2. Share the URL with users.

## Contribution
Contributions are welcome! To contribute:
- Fork the repository.
- Create a new branch (`feature-branch`).
- Make your changes and commit them.
- Submit a pull request.

## License
This project is licensed under the **MIT License**.

## Contact
For any inquiries or suggestions, feel free to reach out!
- **Email:** your.email@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)

---
Happy Cooking with DishCover! 🍽️


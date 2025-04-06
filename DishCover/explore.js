async function searchRecipe() {
    const query = document.getElementById("searchInput").value.trim(); // Get user input

    if (!query) {
        alert("Please enter a recipe name to search.");
        return;
    }

    // Redirect to Explore.html with the search query as a URL parameter
    window.location.href = `Explore.html?search=${encodeURIComponent(query)}`;
}

async function fetchSearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search"); // Get search term from URL

    if (!query) {
        document.getElementById("results").innerHTML = "<p></p>";
        return;
    }

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayRecipes(data.meals); // Display search results
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (!recipes) {
        resultsDiv.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Extract YouTube video ID from the URL
        const youtubeEmbedUrl = recipe.strYoutube
            ? `https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`
            : null;

        recipeCard.innerHTML = `
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" width="200">
            <p><strong>Category:</strong> ${recipe.strCategory}</p>

            <p id="short-instructions-${recipe.idMeal}">
                <strong>Instructions:</strong> 
                ${recipe.strInstructions.substring(0, 200)}...
                <button onclick="showFullInstructions('${recipe.idMeal}')">Read More</button>
            </p>

            <p id="full-instructions-${recipe.idMeal}" style="display: none;">
                <strong>Full Instructions:</strong> ${recipe.strInstructions}
                <button onclick="hideFullInstructions('${recipe.idMeal}')">Show Less</button>
            </p>

            ${youtubeEmbedUrl 
                ? `<iframe width="300" height="200" src="${youtubeEmbedUrl}" frameborder="0" allowfullscreen></iframe>` 
                : `<p><em>Video not available.</em></p>`
            }
        `;

        resultsDiv.appendChild(recipeCard);
    });
}

// Function to show full instructions
function showFullInstructions(mealId) {
    document.getElementById(`short-instructions-${mealId}`).style.display = "none";
    document.getElementById(`full-instructions-${mealId}`).style.display = "block";
}

// Function to hide full instructions
function hideFullInstructions(mealId) {
    document.getElementById(`short-instructions-${mealId}`).style.display = "block";
    document.getElementById(`full-instructions-${mealId}`).style.display = "none";
}

// Call the function when Explore.html loads
window.onload = fetchSearchResults;




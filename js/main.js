const recipeList = document.querySelector('#recipe-list');

const config = {
    apiKey: '275d58779ccf4e22af03e792e8819fff',
    baseUrl: 'https://api.spoonacular.com/recipes/random?number=50&apiKey='
}

const fetchRecipes = async () => {
    const response = await fetch(`${config.baseUrl}${config.apiKey}`);
    const data = await response.json();

    displayRecipes(data.recipes);
}

fetchRecipes()

const displayRecipes = (recipes) => {
    recipes.forEach((recipe) => {
        const recipeItem = document.createElement('li');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <img
                src="${recipe.image}"
                alt="${recipe.title}"
            />
            <h2>${recipe.title}</h2>
            <p>
                <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.originalName).join(', ')}
            </p>
            <a href="" target="_blank">View Recipe</a>
        `;
        recipeList.appendChild(recipeItem);
    });
}

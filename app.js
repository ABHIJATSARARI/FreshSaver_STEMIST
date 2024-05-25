// Define the recipes array with three recipes
const recipes = [
    {
      title: "Veggie Stir-Fry with Peanut Sauce",
      ingredients: "1 cup broccoli florets, 1 cup sliced carrots, 1 bell pepper (any color), thinly sliced, 1 cup snap peas, 1/2 cup sliced mushrooms, 2 tablespoons vegetable oil, 1/4 cup peanuts (chopped), 2 green onions (chopped for garnish), Sesame seeds (for garnish), Cooked rice or noodles (your choice) for serving",
      instructions: "In a large pan or wok, heat the vegetable oil over medium-high heat. Add the broccoli, carrots, bell pepper, snap peas, and mushrooms to the pan. Stir-fry for 4-5 minutes or until the vegetables are tender-crisp. While the vegetables are cooking, prepare the peanut sauce by whisking together the peanut butter, soy sauce, rice vinegar, honey (or maple syrup), minced garlic, and grated ginger. Add water as needed to achieve your preferred sauce consistency. Pour the peanut sauce over the stir-fried vegetables and toss until well-coated. Serve the veggie stir-fry over cooked rice or noodles. Garnish with chopped peanuts, green onions, and sesame seeds. Enjoy your flavorful and wholesome meal!"
    },
    {
      title: "Cheesy Vegetable Frittata",
      ingredients: "6 large eggs, 1/4 cup milk or cream, 1 cup leftover cooked vegetables (e.g., roasted or steamed), 1/2 cup shredded cheddar cheese (or any cheese of your choice), 2 tablespoons butter or oil, Salt and pepper to taste",
      instructions: "Preheat your oven to 375°F (190°C). In a bowl, whisk together the eggs, milk or cream, salt, and pepper until well combined. In an oven-safe skillet, heat the butter or oil over medium heat. Add the cooked vegetables to the skillet and spread them out evenly. Pour the whisked egg mixture over the vegetables, making sure they are fully submerged. Sprinkle the shredded cheese on top of the frittata. Cook on the stovetop for 2-3 minutes or until the edges start to set. Transfer the skillet to the preheated oven and bake for 12-15 minutes or until the frittata is set in the center and slightly puffed. Remove from the oven and let it cool for a few minutes before slicing and serving. Enjoy your delicious and cheesy vegetable frittata!"
    },
    {
      title: "Leftover Veggie Quesadillas",
      ingredients: "4 large flour tortillas, 1 cup mixed leftover cooked vegetables (e.g., roasted, grilled, or sautéed), 1 cup shredded cheese (e.g., cheddar, mozzarella, or pepper jack), 1/2 teaspoon ground cumin, 1/2 teaspoon chili powder",
      instructions: "Lay two tortillas on a clean surface. Sprinkle half of the shredded cheese evenly over one tortilla. Spread the leftover cooked vegetables on top of the cheese. Sprinkle ground cumin and chili powder over the vegetables. Add the remaining shredded cheese on top of the vegetables. Place the second tortilla over the cheese to form a quesadilla. In a large non-stick skillet, heat it over medium heat. Carefully transfer the quesadilla to the skillet and cook for 2-3 minutes on each side or until the tortilla is crispy and the cheese is melted. Remove from the skillet, let it cool for a moment, then cut it into wedges. Serve with salsa, guacamole, or sour cream for dipping. Enjoy your tasty and quick leftover veggie quesadillas!"
    }
  ];
  
  let clickCount = 0;
  

function generateRecipe() {
  // Get the form input values
  const ingredients = document.querySelector(".home31-textinput").value.trim();
  const dietaryPreferences = document.querySelector(".home31-textinput1").value.trim();
  const cookingExpertise = document.querySelector(".home31-textinput2").value.trim();
  const craving = document.querySelector(".home31-textinput3").value.trim();

  // Check if all input fields are filled
  if (ingredients === "" || dietaryPreferences === "" || cookingExpertise === "" || craving === "") {
    alert("Please fill in all the input fields to generate a recipe suggestion.");
    return;
  }

  // Display a recipe suggestion from the recipes array
  const randomRecipeIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomRecipeIndex];

  const recipeSuggestionsContainer = document.getElementById("recipeSuggestionsContainer");
  recipeSuggestionsContainer.innerHTML = `
    <h2>Recipe Suggestion:</h2>
    <h3>${randomRecipe.title}</h3>
    <p><strong>Ingredients:</strong> ${randomRecipe.ingredients}</p>
    <p><strong>Instructions:</strong> ${randomRecipe.instructions}</p>
  `;

  clickCount++;

  // Check if the API limit has been exceeded after 3 clicks
  if (clickCount >= 3) {
    recipeSuggestionsContainer.innerHTML += "<p>API limit exceeded.</p>";
    // Disable the "Preparing" button after API limit is exceeded
    document.querySelector(".primary-button-button").disabled = true;
  }
}
  
  
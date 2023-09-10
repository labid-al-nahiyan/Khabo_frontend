import RecipeCart from '../RecipeCart/RecipeCart';
import { checkPropTypes } from "prop-types";
import './ShowRecipe.css'

const ShowRecipe = ({recipes}) => {
    
    // const recipes = [
    //     {
    //       name: "Spaghetti Carbonara",
    //       ingredients: [
    //         "200g spaghetti",
    //         "100g guanciale or pancetta, diced",
    //         "2 large eggs",
    //         "50g Pecorino Romano cheese, grated",
    //         "50g Parmesan cheese, grated",
    //         "2 cloves garlic, minced",
    //         "Salt and black pepper to taste"
    //       ],
    //       procedure: "Boil spaghetti. Cook guanciale and garlic. Mix eggs and cheese. Combine all ingredients. Serve hot.",
    //       imageLink: "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01.jpg"
    //     },
    //     {
    //       name: "Chicken Alfredo",
    //       ingredients: [
    //         "8 oz fettuccine",
    //         "2 boneless, skinless chicken breasts, sliced",
    //         "2 cups heavy cream",
    //         "1/2 cup butter",
    //         "1 cup grated Parmesan cheese",
    //         "2 cloves garlic, minced",
    //         "Salt and black pepper to taste"
    //       ],
    //       procedure: "Cook fettuccine. Sauté chicken and garlic. Add cream and butter. Stir in cheese. Serve with cooked pasta.",
    //       imageLink: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg"
    //     },
    //     {
    //       name: "Caesar Salad",
    //       ingredients: [
    //         "1 head romaine lettuce, chopped",
    //         "1/2 cup Caesar dressing",
    //         "1/4 cup grated Parmesan cheese",
    //         "1 cup croutons",
    //         "1/4 teaspoon black pepper",
    //         "1/4 teaspoon salt"
    //       ],
    //       procedure: "Toss lettuce with dressing. Add cheese, croutons, salt, and pepper. Mix well and serve.",
    //       imageLink: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg"
    //     },
    //     {
    //         name: "Chicken Tacos",
    //         ingredients: [
    //           "1 lb boneless, skinless chicken thighs, diced",
    //           "1 packet taco seasoning",
    //           "1 cup diced tomatoes",
    //           "1/2 cup diced onions",
    //           "1/2 cup shredded cheddar cheese",
    //           "8 small taco shells",
    //           "Lettuce, sour cream, and salsa for garnish"
    //         ],
    //         procedure: "Cook chicken with taco seasoning. Warm taco shells. Fill with chicken, tomatoes, onions, cheese, and garnish.",
    //         imageLink: "https://media.istockphoto.com/id/1265666630/photo/homemade-chicken-meixcan-street-tacos.jpg?s=612x612&w=0&k=20&c=njSh2RLoqz51W5UBX-Y4k5K4cZik9EXiqoUjPSpW4vw="
    //     },
    //       {
    //         name: "Vegetable Stir-Fry",
    //         ingredients: [
    //           "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
    //           "1 lb tofu, cubed",
    //           "3 cloves garlic, minced",
    //           "2 tablespoons soy sauce",
    //           "1 tablespoon vegetable oil",
    //           "1 teaspoon sesame oil",
    //           "Cooked rice for serving"
    //         ],
    //         procedure: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
    //         imageLink: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
    //       }
    //   ];
      
    
    return (
        <div className="recipes-container">
            <h1>All Recipes</h1>
            <div className='recipe_cartContainer'>
            {
                recipes.map((recipe,index)=>{
                    return <RecipeCart key={index} recipe={recipe}></RecipeCart>
                })
            }
            </div>
        </div>
    );
};
ShowRecipe.propTypes = {
  recipes: checkPropTypes.array
}

export default ShowRecipe;
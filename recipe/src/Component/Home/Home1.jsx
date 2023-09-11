import ScrollCarousel from 'scroll-carousel-react';
import RecipeCart from '../RecipeCart/RecipeCart';
import HomeCarausel from '../HomeCarousel/HomeCarausel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'

import { useState } from 'react';
import { AuthContext } from '../Helpers/AuthContext';

const Home1 = () => {

  const [authState, setAuthState] = useState({
    user_name: "",
    logged: false,
  });

    const recipes = [
        {
          title: "Spaghetti Carbonara",
          ingredients: [
            "200g spaghetti",
            "100g guanciale or pancetta, diced",
            "2 large eggs",
            "50g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste"
          ],
          description: "Boil spaghetti. Cook guanciale and garlic. Mix eggs and cheese. Combine all ingredients. Serve hot.",
          recipe_image: "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01.jpg"
        },
        {
          title: "Chicken Alfredo",
          ingredients: [
            "8 oz fettuccine",
            "2 boneless, skinless chicken breasts, sliced",
            "2 cups heavy cream",
            "1/2 cup butter",
            "1 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste"
          ],
          description: "Cook fettuccine. Sauté chicken and garlic. Add cream and butter. Stir in cheese. Serve with cooked pasta.",
          recipe_image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg"
        },
        {
          title: "Caesar Salad",
          ingredients: [
            "1 head romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/4 cup grated Parmesan cheese",
            "1 cup croutons",
            "1/4 teaspoon black pepper",
            "1/4 teaspoon salt"
          ],
          description: "Toss lettuce with dressing. Add cheese, croutons, salt, and pepper. Mix well and serve.",
          recipe_image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg"
        },
        {
            title: "Chicken Tacos",
            ingredients: [
              "1 lb boneless, skinless chicken thighs, diced",
              "1 packet taco seasoning",
              "1 cup diced tomatoes",
              "1/2 cup diced onions",
              "1/2 cup shredded cheddar cheese",
              "8 small taco shells",
              "Lettuce, sour cream, and salsa for garnish"
            ],
            description: "Cook chicken with taco seasoning. Warm taco shells. Fill with chicken, tomatoes, onions, cheese, and garnish.",
            recipe_image: "https://media.istockphoto.com/id/1265666630/photo/homemade-chicken-meixcan-street-tacos.jpg?s=612x612&w=0&k=20&c=njSh2RLoqz51W5UBX-Y4k5K4cZik9EXiqoUjPSpW4vw="
        },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          },
          {
            title: "Vegetable Stir-Fry",
            ingredients: [
              "2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)",
              "1 lb tofu, cubed",
              "3 cloves garlic, minced",
              "2 tablespoons soy sauce",
              "1 tablespoon vegetable oil",
              "1 teaspoon sesame oil",
              "Cooked rice for serving"
            ],
            description: "Sauté tofu and garlic in oils. Add vegetables and soy sauce. Cook until veggies are tender. Serve over rice.",
            recipe_image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg"
          }
      ];
import { useLoaderData } from 'react-router-dom';


export const populerRecipeLoader = async () => {
  const res = await fetch(`https://khabo.pythonanywhere.com/`);
  const resJson = await res.json();
  console.log(resJson)
  return resJson;
};

const Home1 = () => {
    const recipes = useLoaderData();
  
 
    return (

      <div >
        <HomeCarausel></HomeCarausel>
      <div className='feature-show-container'>
        <Container >
            <Row>
                <Col >
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Features</strong>
                    </h3>
                    
                </Col>
            </Row>
            <Row className='features-row'>
                <Col xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <SearchOutlinedIcon style={{fontSize:'60px'}}></SearchOutlinedIcon>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Description</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">Can't remember the exact name of a recipe or don't know a recipe of an amazing food you have eaten in restaurant? No worry, just describe it.</p>
                        </div>
                    </div>
                </Col>
                <Col  xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <span className="mbr-iconfont mobi-mbri-apple mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)',fontSize:'60px'  }}></span>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Ingredients</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">Have some leftover random ingredients in your pantry, You want the test of some ingredients in your food but don't know the recipe?</p>
                        </div>
                    </div>
                </Col>
                <Col  xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <span className="mbr-iconfont mobi-mbri-edit-2 mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)',fontSize:'60px' }}></span>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Add Your Own Recipe</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">An awesome recipe you want to share with our amazing community? Don't wait further, start writing.&nbsp;</p>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
      </div>

    <div className='home_scroll'>
        <div className="home_scroll_header">
            <h1><strong>Popular Recipes</strong>
            </h1>  
        </div>
        <div>
        <>

      <ScrollCarousel
        autoplaySpeed={0}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
            {recipes.map((recipe,index) => (
            <div key={index} className=''>
                <RecipeCart key={index} recipe={recipe}></RecipeCart>
            </div>
            ))}
      </ScrollCarousel>
    </>
        </div>
        
    </div>
                
    
    <div style={{display:'flex',justifyContent:'center'}}>
        <Container className='m-5' >
            
          
            <Row className="justify-content-center content-row mt-4"  >
                <Col className="p-4 p-md-3" lg={4} md={6} >
                    <div className="card-box" >
                        <div className="title" >
                            <h1 className='title_data'><strong>1,000,000</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Users</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>In Khabo, we have more than 1 million users continuously sharing and receiving recipes</p>
                    </div>
                </Col>
                <Col className="p-4 p-md-3" lg={4} md={6}>
                    <div className="card-box">
                        <div className="title">
                            <h1 className='title_data'><strong>5,000</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Recipes</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>We have more than 5,000 recipes of all kinds. You will always find something you like</p>
                    </div>
                </Col>
                <Col className="p-4 p-md-3" lg={4} md={6}>
                    <div className="card-box">
                        <div className="title">
                            <h1 className='title_data'><strong>100</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Shops</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>We are affiliated with more than 100 shops who will always give you the best ingredient deals</p>
                    </div>
                </Col>
        
            </Row>

        </Container>
    </div>


    

    

    

      </div>
    );
  };
  
  export default Home1;
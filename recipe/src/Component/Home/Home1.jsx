import ScrollCarousel from 'scroll-carousel-react';
import RecipeCart from '../RecipeCart/RecipeCart';
import HomeCarausel from '../HomeCarousel/HomeCarausel';

const Home1 = () => {
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
  
  


    return (

      <div >




    <HomeCarausel></HomeCarausel>


<section data-bs-version="5.1" className="features1 cid-tKwpIvCF03" id="features1-2">

    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-9">
                <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Features</strong>
                </h3>
                
            </div>
        </div>
        <div className="row">
            <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-box align-center">
                        <div className="iconfont-wrapper">
                            <span className="mbr-iconfont mobi-mbri-search mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)' }}></span>
                        </div>
                        <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Description</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">Can't remember the exact name of a recipe or don't know a recipe of an amazing food you have eaten in restaurant? No worry, just describe it.</p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-box align-center">
                        <div className="iconfont-wrapper">
                            <span className="mbr-iconfont mobi-mbri-apple mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)' }}></span>
                        </div>
                        <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Ingredients</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">Have some leftover random ingredients in your pantry, You want the test of some ingredients in your food but don't know the recipe?</p>
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-box align-center">
                        <div className="iconfont-wrapper">
                            <span className="mbr-iconfont mobi-mbri-edit-2 mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)' }}></span>
                        </div>
                        <h5 className="card-title mbr-fonts-style display-7"><strong>Add Your Own Recipe</strong></h5>
                        <p className="card-text mbr-fonts-style display-7">An awesome recipe you want to share with our amazing community? Don't wait further, start writing.&nbsp;</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="slider5 mbr-embla cid-tKwpYNjefB mbr-parallax-background" id="slider5-3">
    
    <div className="mbr-overlay"></div>
    <div className="position-relative">
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Popular Recipes</strong></h4>
            
        </div>
        <div>
        <>
      <h1>This is my component page</h1>
      <p>Now i am showing my creation scroll carousel</p>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
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
        {/* <div className="embla mt-4" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-auto-play-interval="5" data-draggable="true">
            <div className="embla__viewport container-fluid">
                <div className="embla__container">
                    
                    
                    
                    <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <div className="slide-content">
                            <div className="item-img">
                                <div className="item-wrapper">
                                    <img src="assets/images/simply-recipes-veggie-tacos-lead-3-18763af09863424a87a662923de82b5e.webp" alt="Mobirise Website Builder" title="" data-slide-to="0" data-bs-slide-to="0"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-5"><strong>Veggie Tacos</strong></h5>
                                <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">Made with zucchini, tomatoes, green chiles</h6>
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">The key to the overall taste is the addition at the end of cotija cheese, a Mexican cheese that is salty and crumbly, much like Greek feta.<br/></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="details.html" className="btn item-btn btn-black display-7" target="_blank">View Details</a></div>
                        </div>
                    </div>
                    <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <div className="slide-content">
                            <div className="item-img">
                                <div className="item-wrapper">
                                    <img src="assets/images/simply-recipes-fried-green-tomato-lead-4b-7ba7280edfaa462a9ac76863112a973f.webp" alt="Mobirise Website Builder" title="" data-slide-to="1" data-bs-slide-to="1"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-5"><strong>Fried Tomatoes</strong></h5>
                                <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">Fried green tomatoes are a classNameic Southern dish</h6>
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">Curious as usual, we found some big green tomatoes at the farmers market last weekend and just had to try these fried green tomatoes.<br/><br/></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="details.html" className="btn item-btn btn-black display-7" target="_blank">View Details</a></div>
                        </div>
                    </div>
                    <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <div className="slide-content">
                            <div className="item-img">
                                <div className="item-wrapper">
                                    <img src="assets/images/simply-recipes-grilled-meatballs-lead-01-facb584be3124edab764bb77cf30bbef.webp" alt="Mobirise Website Builder" title="" data-slide-to="2" data-bs-slide-to="2"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-5"><strong>Grilled Meatballs</strong></h5>
                                <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">These juicy meatballs take just 10 minutes to cook</h6>
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">To keep the meatballs as moist as possible, I start with a mixture of baking soda and lemon juice. Baking soda, otherwise known as sodium bicarbonate.<br/></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="details.html" className="btn item-btn btn-black display-7" target="_blank">View Details</a></div>
                        </div>
                    </div>
                    <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <div className="slide-content">
                            <div className="item-img">
                                <div className="item-wrapper">
                                    <img src="assets/images/simply-recipes-chicken-provencal-lead-1-3261f35977254266843d379871a9b907.webp" alt="Mobirise Website Builder" title="" data-slide-to="3" data-bs-slide-to="3"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-5"><strong>Chicken Provencal</strong></h5>
                                <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">With tomatoes, capers, olives, white wine, and lemon</h6>
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">Chicken Provencal is a regional French recipe that can take on many forms. There is no one absolute recipe for Chicken Provencal.<br/></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="details.html" className="btn item-btn btn-black display-7" target="_blank">View Details</a></div>
                        </div>
                    </div>
                    <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                        <div className="slide-content">
                            <div className="item-img">
                                <div className="item-wrapper">
                                    <img src="assets/images/simply-recipes-smash-burger-lead-03-f86c429469784ea789e52e3c42f1da37.webp" alt="Mobirise Website Builder" title="" data-slide-to="4" data-bs-slide-to="4"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-5"><strong>Smashburger</strong></h5>
                                <h6 className="item-subtitle mbr-fonts-style mt-1 display-7">All you need is your stovetop to make the perfect Smashburger</h6>
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">The Smashburger is cooked over high heat with a lot of pressure, which helps the beef develop a deep, rich crust.&nbsp;<br/></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="details.html" className="btn item-btn btn-black display-7" target="_blank">View Details</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="embla__button embla__button--prev">
                <span className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden">Previous</span>
            </button>
            <button className="embla__button embla__button--next">
                <span className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden">Next</span>
            </button>
        </div> */}
    </div>
</section>

<section data-bs-version="5.1" className="features23 cid-tKwqlJtm4y" id="features23-4">

    

    
    
    <div className="container">
        <div className="card-wrapper">
            <div className="card-box align-left">
                
                
                
            </div>
        </div>
       
        <div className="row justify-content-center content-row mt-4">
            <div className="card p-4 p-md-3 col-md-6 col-lg-4">
                <div className="card-box">
                    <div className="title">
                        <span className="num mbr-fonts-style display-2"><strong>1,000,000</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5"><strong>Users</strong></h4>
                    <p className="mbr-text card-text mbr-fonts-style display-7">In Khabo, we have more than 1 million users continuously sharing and receiving recipes</p>
                </div>
            </div>
            <div className="card p-4 p-md-3 col-md-6 col-lg-4">
                <div className="card-box">
                    <div className="title">
                        <span className="num mbr-fonts-style display-2"><strong>5,000</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5"><strong>Recipes</strong></h4>
                    <p className="mbr-text card-text mbr-fonts-style display-7">We have more than 5,000 recipes of all kinds. You will always find something you like</p>
                </div>
            </div>
            <div className="card p-4 p-md-3 col-md-6 col-lg-4">
                <div className="card-box">
                    <div className="title">
                        <span className="num mbr-fonts-style display-2"><strong>100</strong></span>
                    </div>
                    <h4 className="card-title mbr-fonts-style display-5"><strong>Shops</strong></h4>
                    <p className="mbr-text card-text mbr-fonts-style display-7">We are affiliated with more than 100 shops who will always give you the best ingredient deals</p>
                </div>
            </div>
            
            
            
            
            
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="footer3 cid-tKwqtlEDrL" once="footers" id="footer3-5">

    

    

    <div className="container">
        <div className="media-container-row align-center mbr-white">
            <div className="row row-links">
                <ul className="foot-menu">
                    
                    
                    
                    
                    
                <li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">About us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Services</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Contact Us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Careers</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Work</a>
                    </li></ul>
            </div>
            <div className="row social-row">
                <div className="social-list align-right pb-2">
                    
                    
                    
                    
                    
                    
                <div className="soc-item">
                        <a href="https://twitter.com/mobirise" target="_blank">
                            <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                            <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.youtube.com/c/mobirise" target="_blank">
                            <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://instagram.com/mobirise" target="_blank">
                            <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                            <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.behance.net/Mobirise" target="_blank">
                            <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div></div>
            </div>
            <div className="row row-copirayt">
                <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                    © Copyright 2023 Team Khabo. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
</section>
      </div>
    );
  };
  
  export default Home1;
import { useState } from 'react';
import axios from 'axios';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
import './SearchByDescription.css'

const SearchByDescription = () => {

  const [description, setDescription] = useState("");
  const [recipeList, setRecipeList] = useState([]);

  // Handle textarea change and update the description state
  const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
  };

  const clearTextarea = () => {
    setDescription(""); // Set the description state to an empty string
  };

  const searchWithDescription = () => {
       console.log(description);

        axios.post("https://khabo.pythonanywhere.com/recipes/search_by_description/",{
            description: description, // Pass the description as a query parameter
          
       })
       .then((response) => {
         console.log(response.data);
         setRecipeList(response.data);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       });
      
      console.log("test")
  };

    return (
      <div>

    <div className="container-fluid recipe-description-container" >
        <div className="row content-wrapper justify-content-center recipe-description-container-left">
            <div className="col-lg-3 offset-lg-1 mbr-form" >
                    <div className="dragArea row">
                        <div className="col-12" style={{textAlign:'start'}}>
                            <div style={{padding:0, margin:0}}>
                                <h1 className="mbr-section-title mb-0  display-2"><strong>Recipe </strong></h1>
                                <h1 className="mbr-section-title  mb-4 display-3"><strong>Description: </strong></h1>

                            </div> 
                            <div>
                              <h5 className='pb-4'>Give a relevant name for the food you want to search for. And give a brief description of the recipe and ingredients.</h5>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12 form-group mb-3" data-for="email">
                            <textarea id="txtid" className="form-control" name="txtname" rows="4" cols="50" maxlength="200" placeholder="Give The Recipe Description"
                            value={description} // Bind the value to the state
                            onChange={handleDescriptionChange} // Handle textarea changes 
                            ></textarea>
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn">
                          <button  onClick={clearTextarea}>Clear</button>
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn">
                          <button  onClick={searchWithDescription}>Search!</button>
                        </div>
                </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
                <div className="image-wrapper">
                    {/* <img className="w-100" src="https://img.freepik.com/premium-photo/different-cooking-ingredients-spices-white-background_185193-88914.jpg" alt="Mobirise Website Builder" /> */}
                </div>
            </div>
        </div>
    </div>

{/* ---------------------------------------------------------------------------------------------------- */}

        <ShowRecipe recipes={recipeList}></ShowRecipe>
{/* ---------------------------------------------------------------------------------------------------- */}

      </div>
    );
  };
  
  export default SearchByDescription;
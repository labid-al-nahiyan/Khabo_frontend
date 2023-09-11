import { useEffect } from 'react';
import { useState } from 'react';
import { Axios } from 'axios';
import axios from 'axios';
import ShowRecipe from '../ShowRecipe/ShowRecipe';

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

        axios.get("https://khabo.pythonanywhere.com/recipes/search_by_description/",{
        params: {
            description: description, // Pass the description as a query parameter
          },
         
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
<section data-bs-version="5.1" className="form4 cid-tKwyqVIccF mbr-fullscreen" id="form4-8">

    <div className="container-fluid">
        <div className="row content-wrapper justify-content-center">
            <div className="col-lg-3 offset-lg-1 mbr-form" >
                <div  className="mbr-form form-with-styler" >
                    <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="mbr-section-title mb-4 display-2"><strong>Recipe Description:</strong></h1>
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="email">
                            <textarea id="txtid" className="form-control" name="txtname" rows="4" cols="50" maxlength="200" placeholder="Give The Recipe Description"
                            value={description} // Bind the value to the state
                            onChange={handleDescriptionChange} // Handle textarea changes 
                            ></textarea>
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn">
                          <button className="btn btn-secondary display-4" onClick={clearTextarea}>Clear</button>
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn">
                          <button className="btn btn-secondary display-4" onClick={searchWithDescription}>Search!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
                <div className="image-wrapper">
                    <img className="w-100" src="assets/images/mbr-3.jpg" alt="Mobirise Website Builder" />
                </div>
            </div>
        </div>
    </div>
</section>

{/* ---------------------------------------------------------------------------------------------------- */}

        <ShowRecipe recipes={recipeList}></ShowRecipe>
{/* ---------------------------------------------------------------------------------------------------- */}

      </div>
    );
  };
  
  export default SearchByDescription;
import './SearchByIngredient.css'
import { useState } from 'react';
import {CancelPresentationSharp} from '@mui/icons-material';
import AddSharpIcon from '@mui/icons-material/AddSharp';

function SearchByIngredient() {

    const ingredients = ['Egg', 'Rice', 'Beef', 'Chicken', 'Fish'];

    const [inputCount, setInputCount] = useState(0); // Initial input field count
    const [selectedItem, setSelectedItem] = useState([]);
    const [inputValues, setInputValues] = useState([""]);
    const [inputFieldIdx, setInputFieldIdx] = useState(0);


   
    const handleAddInput = () => {
        setInputCount(inputCount + 1);
        setInputValues([...inputValues, '']); 
      };
    
      const handleInputChange = (value,index) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
        filteredOptions(value);
      };

    const handleItemClick = (item) => {
        console.log(item)
        const updatedValues = [...inputValues];
        updatedValues[inputFieldIdx] = item;
        setInputValues(updatedValues);
        console.log(inputValues)
    };
    const filteredOptions = (match)=>{
        setSelectedItem(ingredients);
        console.log(match)
        const newSelected = selectedItem.filter(ingredient => ingredient.toLowerCase().includes(match.toLowerCase()));
        console.log(newSelected);
        (match=="")?setSelectedItem(ingredients):setSelectedItem(newSelected);
    }

    const removeItem = (index)=>{
        setInputCount(inputCount-1);
        console.log(inputCount)
        if(inputCount==0){
            setSelectedItem([]);
        }
        const newInputvalue = inputValues;
        newInputvalue.splice(index, 1);
        setInputValues(newInputvalue);
    }

  return (
    <div className='searchByIngredientContainer'>
      <div>

      </div>
      <div className='ingredientListContainer'>
        <h2>Dynamic Input Fields</h2>
        { 
        inputValues.map((value, index) => {
            return  <div key={index} className="added_ingredient_name"> 
                        <input
                            key={index}
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            onClick={()=>setInputFieldIdx(index)}
                            onFocus={(e)=> handleInputChange(e.target.value,index)}
                            onBlur={()=>setSelectedItem([])}
                            placeholder={`Input ${index + 1}`}
                            className='ingredient_input_field'
                        />
                        <div className='ingredient_rm' onClick={()=>removeItem(index)} style={{cursor:"pointer"}}><CancelPresentationSharp  style={{ fontSize:'40px' }}></CancelPresentationSharp></div>
                    </div>

            })
        }     
        <div className='ingredientList'>
            <ul className='ingredient_list'>
                {   
                    selectedItem.map((item, index) => {
                    return <li className='ingredient' key={index}  onClick={() => handleItemClick(item)}>{item}</li>
                    })
                }  
            </ul>
            <button className='ingredientAddBtn' onClick={handleAddInput}><AddSharpIcon></AddSharpIcon></button>
        </div>
        
      </div>
    </div>
  );
}

export default SearchByIngredient;

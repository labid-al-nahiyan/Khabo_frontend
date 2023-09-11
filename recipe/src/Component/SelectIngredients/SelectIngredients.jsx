import { useState } from 'react';
import {CancelPresentationSharp} from '@mui/icons-material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import './SelectIngredients.css'
import { checkPropTypes } from 'prop-types';

const SelectIngredients = ({setIngredients,ingredients}) => {

    const [inputCount, setInputCount] = useState(0) // Initial input field count
    const [selectedItem, setSelectedItem] = useState([])
    const [inputValues, setInputValues] = useState([])
    const [inputFieldIdx, setInputFieldIdx] = useState(0)

    const handleAddInput = () => {
        console.log(ingredients)
        setInputCount(inputCount + 1);
        setInputValues([...inputValues,''])
        console.log(inputValues.length)
    }

    const handleInputChange = (value,index) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);              
        filteredOptions(value);
    }

    const handleItemClick = (item) => {
        const updatedValues = [...inputValues];
        updatedValues[inputFieldIdx] = item;
        setInputValues(updatedValues);
        setSelectedItem([])
    }

    const filteredOptions = (match)=>{
        setSelectedItem(ingredients);
        const newSelected = selectedItem.filter(ingredient => ingredient.name.toLowerCase().includes(match.toLowerCase()));
        (match=="")?setSelectedItem(ingredients):setSelectedItem(newSelected);
    }

    const removeItem = (index)=>{
        setInputCount(inputCount-1);
        console.log(inputCount)
        const newInputvalue = inputValues;
        newInputvalue.splice(index, 1);
        if(inputCount==0){
            setSelectedItem([]);
        }
        setInputValues(newInputvalue);
    }
    const handleSubmit = ()=>{
        console.log(inputValues)
        setIngredients(inputValues)
    }

    return (
        <div className='ingredientListContainer'>
            
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
                            placeholder={`Ingredient ${index + 1}`}
                            className='ingredient_input_field'
                        />
                        <div className='ingredient_rm' onClick={()=>removeItem(index)} style={{cursor:"pointer"}}><CancelPresentationSharp  style={{ fontSize:'40px' }}></CancelPresentationSharp></div>
                    </div>

            })
        }     
        <div className='ingredient_List'>
            <div className='ingredient_list'>
                <ul >
                    {   
                        selectedItem.map((item, index) => {
                            return <li className='ingredient' key={index}  onClick={() => handleItemClick(item.name)}>{item.name}</li>
                        })
                    }  
                </ul>
            </div>
            <button className='ingredientAddBtn' onClick={handleAddInput}><AddSharpIcon></AddSharpIcon></button>
           
            {(inputCount>=1)?<button className='submit_ingredients' onClick={handleSubmit}>Search</button>:""}
            

        </div>
        
      </div>
    );
};
SelectIngredients.propTypes = {
    setIngredients: checkPropTypes.function,
    ingredients : checkPropTypes.array
}

export default SelectIngredients;
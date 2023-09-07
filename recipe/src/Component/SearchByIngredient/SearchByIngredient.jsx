import { useState } from 'react';

function SearchByIngredient() {

    const ingredients = ['Egg', 'Rice', 'Beef', 'Chicken', 'Fish'];

    const [inputCount, setInputCount] = useState(1); // Initial input field count
    const [selectedItem, setSelectedItem] = useState([]);
    const [inputValues, setInputValues] = useState([]);
    const [inputFieldIdx, setInputFieldIdx] = useState(0);


   
    const handleAddInput = () => {
        setInputCount(inputCount + 1);
        setInputValues([...inputValues, '']); // Add an empty value for the new input field
      };
    
      const handleInputChange = (value, index) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);
        filteredOptions(value);
      };

    const handleItemClick = (item) => {
        const updatedValues = [...inputValues];
        updatedValues[inputFieldIdx] = item;
        setInputValues(updatedValues);
    };
    const filteredOptions = (match)=>{
        setSelectedItem(ingredients);
        console.log(match)
        const newSelected = selectedItem.filter(ingredient => ingredient.toLowerCase().includes(match.toLowerCase()));
        console.log(newSelected);
        (match=="")?setSelectedItem(ingredients):setSelectedItem(newSelected);
    }

   

  return (
    <div>
      <h2>Dynamic Input Fields</h2>
      { 
      inputValues.map((value, index) => {
        return   <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    onClick={()=>setInputFieldIdx(index)}
                    placeholder={`Input ${index + 1}`}
                />
        })
      }     
       <ul>
        {   
            selectedItem.map((item, index) => {
              return <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
            })
        }
      </ul>
      <button onClick={handleAddInput}>Add Input Field</button>
    </div>
  );
}

export default SearchByIngredient;

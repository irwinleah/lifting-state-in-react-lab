// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li 
                        key={index}
                        style={{ backgroundColor: ingredient.color, padding: '10px', margin: '10px' }}>
                        <button onClick={() => addToBurger(ingredient)} style={{ margin: "10px" }}>
                            +
                        </button>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default IngredientList;

// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px' }}
                        onClick={() => addToBurger(ingredient)}
                    >
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default IngredientList;

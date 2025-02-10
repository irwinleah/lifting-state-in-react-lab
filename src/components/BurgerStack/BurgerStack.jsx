
const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div>
            <h2>Your Burger</h2>
            <p>{stack.length > 0 ? `Burger has ${stack.length} ingredients` : 'No ingredients yet!'}</p>
            <ul>
                {stack.map((ingredient, index) => (
                    <li
                        key={index}
                        style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px' }}
                    >
                        {ingredient.name}
                    </li>
                ))}
            </ul>
            <button onClick={removeFromBurger} disabled={stack.length === 0} >
                Remove Last Ingredient
            </button>
        </div>
    );
};

export default BurgerStack;
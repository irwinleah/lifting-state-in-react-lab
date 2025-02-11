
const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div>
            <h2>Your Burger</h2>
            <p>{stack.length > 0 ? `Burger has ${stack.length} ingredients` : 'No ingredients'}</p>
            <ul>
                {stack.map((ingredient, index) => (
                    <li key={index}
                        style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px' }}>
                        {ingredient.name}
                        <button
                            onClick={() => removeFromBurger(ingredient)}
                            style={{ marginLeft: "10px", color: "red" }} >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BurgerStack;
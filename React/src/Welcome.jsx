export function Welcome({ name="Fulano Pérez" }) {
    return (
        <p>Welcome, {name}!</p>
    );
}

//Q: What happens if no name prop is passed to the Welcome component?
//A: If no name prop is passed and there's no default value for that prop, it will render an empty string
//But if there's no explicit value and we have a default name prop value, React will render the default value

//Q: Can you set a default value for the name prop?
//A: We can set the default value when creating the Welcome component or using the "Welcome.defaultProps" to set the default values


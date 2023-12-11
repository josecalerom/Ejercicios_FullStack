import { Age } from "./Age";

export function Welcome({ name="Fulano Pérez", age}) {
    return (
        <>
            <p>Welcome, <strong>{name}</strong>!</p>
            <h4>Age component #1</h4>
            <Age age={age} />
            <h4>Age component #2: age greater than 18</h4>
            {age > 18 && <Age age={age} />}
            <h4>Age component #3: age prop is present</h4>
            {Boolean(age) && <Age age={age} />}
            <h4>Age component #4: age greater than 18 and less than 65</h4>
            {age > 18 && age < 65 && <Age age={age} />}
            <h4>Age component #5: same as the last one but also name equals to "John"</h4>
            {age > 18 && age < 65 && name==="John" && <Age age={age} />}
        </>
    );
}

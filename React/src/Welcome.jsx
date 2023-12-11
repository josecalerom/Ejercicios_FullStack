import { Age } from "./Age";

export function Welcome({ name="Fulano Pérez", age}) {
    return (
        <>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
        </>
    );
}

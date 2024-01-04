import { Age } from "../Age/Age";

export function Welcome({ name="Fulano Pérez", age}) {
    return (
        <div className="welcome">
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
        </div>
    );
}

import { Color } from "../Color/Color"

export function Colors({ colors }) {
    return (
        <>
        <ul>
            {colors.map(el => <Color key={el.id} color={el} />)}
        </ul>
        </>
    )
}
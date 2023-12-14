export function MouseClicker() {

    function handleButtonClick(event) {
        console.log(event.target.name)
    }

    return (
        <button onClick={handleButtonClick} name="one">1º button</button>
    )
}
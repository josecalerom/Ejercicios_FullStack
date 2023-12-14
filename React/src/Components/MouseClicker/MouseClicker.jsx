export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  function handleImgClick(event) {
    console.log(event.target.src);
    event.stopPropagation();
  }
// We can use the stopPropagation() to prevent the name
// of the button from being printed on console

  return (
    <button onClick={handleButtonClick} name="one">
      <img
        onClick={handleImgClick}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMiK3bjGFafATYL5fAug9B-D6kP7rrMk95UxJRzaVIA&s"
        width={30}
        height={40}
      />
      1º button
    </button>
  );
}

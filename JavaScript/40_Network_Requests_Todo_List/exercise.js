// THE SAME CODE AS THE ONE INSIDE HTML SCRIPT SECTION

let currentLink = "https://jsonplaceholder.typicode.com/todos";
const finished = document.querySelector(".finished");
const todos = document.querySelector(".todos");

async function recoverToDo(url) {
  let getJSON;
  try {
    let firstCall = await fetch(url);
    getJSON = await firstCall.json();
  } catch (err) {
    console.error(err);
  }
  return getJSON;
}

recoverToDo(currentLink)
  .then((val) =>
    val.forEach((item) => {
      console.log(item.completed);
      if (item.completed === true) {
        const comp = document.createElement("h5");
        comp.innerHTML = `ID: ${item.id} - Title: ${item.title}`;
        finished.appendChild(comp);
      } else if (item.completed === false) {
        const uncomp = document.createElement("h5");
        uncomp.innerHTML = `ID: ${item.id} - Title: ${item.title}`;
        todos.appendChild(uncomp);
      } else {
        console.log(`There's an error with this item: ${item.id}`);
      }
    })
  )
  .catch((err) => console.error(err));

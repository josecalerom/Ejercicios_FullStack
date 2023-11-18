const user = {
  id: 1,
  name: "John",
  age: 25,
};

function savedLocalStorage(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

savedLocalStorage(user);
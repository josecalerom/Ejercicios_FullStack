import "./UncontrolledLogin.scss"

export function UncontrolledLogin() {
  function handleFormSubmit(event) {
    event.preventDefault();

    //Accessing values of the form with FormData API
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    //Accessing values of the form without FormData API
    // const username = event.target.elements.namedItem("username").value;
    // const password = event.target.elements.namedItem("password").value;
    // const remember = event.target.elements.namedItem("remember").checked;
    // const data = {username, password, remember}

    //Attempt to access the values of the form by using the FormData API.
    //Q: What are the advantages? What are the disadvantages?
    //A: It provides a way to easily store key-value pairs in relation to HTML form fields and values
    //However older browsers do not support this feature

    console.log(data);
  }

  return (
    <form className="w-80 flex flex-col justify-center items-center gap-5 border-solid border-2 border-black" onSubmit={handleFormSubmit}>
      <input className="w-60 border-2" placeholder="Your name" name="username" type="text" />
      <input className="w-60 border-2" placeholder="Password" name="password" type="password" />
      <input className="w-60" name="remember" type="checkbox" />
      <button className="w-12 text-green-950 font-bold">Login</button>
      <button className="w-12 text-green-950 font-bold" type="reset">Reset</button>
    </form>
  );
}

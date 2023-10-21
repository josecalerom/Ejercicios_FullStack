function printName () {
    let helloName = "Hello John";
    function inner () {
        setTimeout(() => {
            console.log(helloName)
        }, 1000);
    };
    return inner;
};

printName()();



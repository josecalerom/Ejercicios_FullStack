function repeatHello(callback){
    setInterval(callback, 1000);
}

repeatHello(() => console.log("Hello!"));

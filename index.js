function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    const f = () => console.log("ya");
    return f;
}

function returnsAnAnonymousFunction() {
    return function() {console.log("ey")};
}
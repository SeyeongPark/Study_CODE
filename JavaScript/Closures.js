// An inner function always has access to the variable of its outer function, even after the outer function has returned.

const first = () => {
    let greet = 'Hello';
    const second = () => console.log(greet);
    return second;
}

const newFun = first();
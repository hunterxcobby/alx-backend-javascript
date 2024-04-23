
function divide (a, b) {
    if( b == 0)
    {
        throw "Dvision by zero";
    }
    else
    {
        return a / b;
    }
}

console.log(divide(2, 0));
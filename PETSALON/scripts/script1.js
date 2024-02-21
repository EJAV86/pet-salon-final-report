var globalVariable = "Im in global scope";

function myFunction(){ 
    //This function can acces globalVariable
    console.log(globalVariable);
}
myFunction();

    function myFunction2(){ 
        var localVar="Im in a local scope";
        console.log(localVar)
    }
myFunction2();

if (true){ 
    let blockVariable = "Im in block scope";
    console.log(blockVariable);    
}
// Accesing blockVariable here would result in an error

function planetTicket(destination,price){ 
    console.log(Traveling to... + destination);
    return price*1.11;
}

function calculateProfits(){ 
    
}
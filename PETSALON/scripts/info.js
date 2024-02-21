let salon={//object
    name: "The fasion pet",
    phone: "999-999-999",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"21339"
    },
    pets:[]//array
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p>Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
}

displayFooterInfo();
var services=[];
//similar to window.onload
$(document).ready(function(){
    console.log("Services page");
    //add the hook events
    $("#btnService").click(addService);
    //loading data
    displayItems(services);
});

function Service(description,price){
    this.description=description;
    this.price=price;
}
function addService(){
    let inputService= $("#txtService").val();//similar to value
    let inputPrice= $("#txtPrice").val();
    let newService = new Service(inputService,inputPrice);
    services.push(newService);
    saveItem(newService);//from te LS
    displayItems(services);
}

function displayItems(items){
    let htmlList=$("#services");
    htmlList.html("");
    let li;
    for (let i=0;i<items.length;i++){
        let item = items[i];
        li= `<li>${item.description} - ${item.price}</li>`;
        htmlList.append(li);
    } 
}
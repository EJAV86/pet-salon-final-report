    let petID=0;
    //Constructor
    function Pet(n,a,g,s,b){
        this.name=n;
        this.age=a;
        this.gender=g;    
        this.service=s;    
        this.breed=b; 
        this.id=petID++;//internal id   
    }

    function getE(id){  
        return document.getElementById(id);
    }

    //get elements from HTML
    let inputName= getE("txtName");
    let inputAge= getE("txtAge");
    let inputGender= getE("txtGender");
    let inputService= getE("txtService");
    let inputBreed= getE("txtBreed");

    function isValid(aPet){
        let validation=true;
        //clear the style
        //document.querySelectorAll("inputs")
        getE("txtName").classList.remove("alert-error");
        getE("txtAge").classList.remove("alert-error");
        if(aPet.name==""){
            //the pet is not valid
            validation=false;
            getE("txtName").classlist.add("alert-error");
    }
        if(aPet.age==""){
            validation=false;
            getE("txtAge").classlist.add("alert-error");
        }  
        return validation;
    }

    function showNotifications(msg,type){
        getE("notifications").classList.remove("hidden");
        getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
        
        setTimeout(function(){
            getE("notifications").classList.add("hidden");
        },3000);
    }

    function register(){
        //1) getting value
        //2) create the newPet using the constructor
        let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value);
        console.log(newPet);

        if (isValid (newPet)==true){
            //3) push the new pet to the array
            salon.pets.push(newPet);
            //4) call display function
            displayPetCards(); 
            //5) clear the input
            inputName.value="";
            inputAge.value="";
            inputGender.value="";
            inputService.value="";
            inputBreed.value="";
        
            showNotifications ("succesful registration", "alert succes");
        }else{
            showNotifications ("please fill out all the required fields", "alert succes");
        }  
    }      
    function deletePet(petID){
        let deleteIndex;//to get the index of the array (position of the obj)
        for (let i=0;i<salon.pets.length;i++){
            let pet = salon.pets[i];
            if(pet.id==petID){
                deleteIndex=i;
                break;
            }
        }   
        getE(petID).remove();//remove from HTML
        salon.pets.splice(deleteIndex,1);//remove the pet from the array
    }  

    function init(){ 
    //Creating predefined obj
    let pet1=new Pet("Scooby",60,"Male","Grooming","Chihuahua");
    let pet2=new Pet("Junior",30,"Male","Nails","Blue heeler");
    let pet3=new Pet("Kitty",40,"Female","Hair treatment","Angora");
    let pet4=new Pet("Max",50,"Male","Vaccine","Bull-dog");
    salon.pets.push(pet1,pet2,pet3,pet4);
    //executing functions
    displayPetCards();
    displayFooterInfo();

    }   
    window.onload=init; //wait to render the HTML
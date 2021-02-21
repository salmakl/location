function validation(){

    var Nom=document.getElementById("Nom");
    var CaractereValide=/^[a-zA-Z]+?$/;
    var Prenom=document.getElementById("Prenom");
    var Email=document.getElementById("Email"); 
    var Email_Valide = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    
    var Message=document.getElementById("Message");
    var i=0;
    if(Nom.value==""){
        document.getElementById("ErreurNom").innerHTML="First Name is Required  !";
         i++;
    }
    else if(CaractereValide.test(Nom.value)==false){
        document.getElementById("ErreurNom").innerHTML="First Name and Incorrect  !";
         i++;

    }
    if(Prenom.value==""){
        document.getElementById("ErreurPrenom").innerHTML="Last Name is Required  !";
        i++;
    }
    else if(CaractereValide.test(Prenom.value)==false){
        document.getElementById("ErreurPrenom").innerHTML="Last Name and Incorrect  !";
       i++;
    }
    if(Email.value==""){
        document.getElementById("ErreurEmail").innerHTML="Email is Required !";
       i++;
    }
    else if(Email_Valide.test(Email.value)==false){
        document.getElementById("ErreurEmail").innerHTML="Email is Incorrect  !";
      i++;
    }
 
    if(Message.value==""){
        document.getElementById("ErreurMessage").innerHTML="Please write a message  !";
      i++;
    }
    else if(Message.value.length<10){
    	document.getElementById("ErreurMessage").innerHTML="Short message !";
      	i++;
    }
    if(compteur ==0){
        alert("Votre contenu est bien traite:");
        Nom.value="";
        Prenom.value="";
        Email.value=""; 
        Message.value="";
        document.getElementById("ErreurMessage").innerHTML=document.innerHTML=document.getElementById("ErreurEmail").innerHTML=document.getElementById("ErreurPrenom").innerHTML=document.getElementById("ErreurNom").innerHTML="";
    }
 }

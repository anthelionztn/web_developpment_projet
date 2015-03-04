clear();

/** 
 * addition (nb1,nb2) fait calculer de manière synchrone nb1+nb2 sur le serveur
 */ 
function addition(nb1,nb2) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  nb1=encodeURIComponent(nb1); 
  nb2=encodeURIComponent(nb2); 
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
  xhr.open("GET", "add.php?val1=" + nb1 + "&val2=" + nb2, false);
  // Exécution de la requète 
  xhr.send(); 
  // On retourne la réponse qui revient
  //return(xhr.responseText); 
  echo(xhr.responseText);
};
function soustraction(nb1,nb2) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  nb1=encodeURIComponent(nb1); 
  nb2=encodeURIComponent(nb2); 
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
  xhr.open("GET", "sous.php?val1=" + nb1 + "&val2=" + nb2, false);
  // Exécution de la requète 
  xhr.send(); 
  // On retourne la réponse qui revient
  //return(xhr.responseText); 
  echo(xhr.responseText);
};
function multiplication(nb1,nb2) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  nb1=encodeURIComponent(nb1); 
  nb2=encodeURIComponent(nb2); 
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
  xhr.open("GET", "multi.php?val1=" + nb1 + "&val2=" + nb2, false);
  // Exécution de la requète 
  xhr.send(); 
  // On retourne la réponse qui revient
  //return(xhr.responseText); 
  echo(xhr.responseText);
};
function division(nb1,nb2) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  nb1=encodeURIComponent(nb1); 
  nb2=encodeURIComponent(nb2); 
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
  xhr.open("GET", "div.php?val1=" + nb1 + "&val2=" + nb2, false);
  // Exécution de la requète 
  xhr.send(); 
  // On retourne la réponse qui revient
  //return(xhr.responseText); 
  echo(xhr.responseText);
};


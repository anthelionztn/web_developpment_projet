clear();

/** 
 * addition (nb1,nb2) fait calculer de manière synchrone nb1+nb2 sur le serveur
 */ 
function searche1(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest1.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};      


function searche2(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest2.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche3(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest3.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche4(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest4.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche5(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest5.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche6(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest6.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche7(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest7.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche8(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest8.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche9(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest9.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};

function searche10(mes) {
  var xhr = new XMLHttpRequest(); // Création de XMLHttpRequest
  // Nétoyage des paramètres pour pouvoir être utilisé dans une URI
  // ' ' devient "%20" par exemple
  mes1=encodeURIComponent(mes); 
  
  // On crée une requète GET sur le serveur à l'adresse 
  // http://adresse_serveur/add.php?val1=nb1&val2=nb2 
  // Cette requète sera faire de manière synchrone (3eme param à false)
 
  //xhr.open("GET", "sqltest1.php?val=" + mes, false);
  xhr.open("GET", "sqltest10.php?" + mes, false);
  //xhr.open("GET", "sqltest1.php?" + mes1, false);
  // Exécution de la requète 
  // On retourne la réponse qui revient
  xhr.send();
  var s = xhr.responseText;
  return (s); 
};


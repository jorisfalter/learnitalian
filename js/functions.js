// Affirmations

var myArray = [
  ["to be","essere"],
  ["to have","avere"],
  ["to go","andare"],
  ["to do, make","fare"],
  ["to eat","mangiare"],
  ["to drink","bere"],
  ["to sleep","dormire"],
  ["to speak","parlare"],
  ["to say","dire"],
  ["to live, reside","abitare"],
  ["to live","vivere"],
  ["to work","lavorare"],
  ["to read","leggere"],
  ["to write (something down)","scrivere"],
  ["to play (a game)","giocare"],
  ["to play (an instrument)","suonare"],
  ["to walk (a trail)","camminare"],
  ["to run","correre"],
  ["to give","dare"],
  ["to give as gift","regalare"],
  ["to take","prendere"],
  ["to bring, to carry","portare"],
  ["to wait","aspettare"],
  ["to buy","comprare"],
  ["to pay","pagare"],
  ["to want","volere"],
  ["to must, have to","dovere"],
  ["to can, be able to, be allowed","potere"],
  ["to know, to can (skill)","sapere"],
  ["to know (a person)","conoscere"],
  ["to meet","incontrare"],
  ["to be, stay (temporary)","stare"],
  ["to learn","imparare"],
  ["to study, learn","studiare"],
  ["to hear","sentire"],
  ["to listen","ascoltare"],
  ["to see","vedere"],
  ["to watch, look at","guardare"],
  ["to call","chiamare"],
  ["to cook","cucinare"],
  ["to prepare","preparare"],
  ["to swim","nuotare"],
  ["to clean","pulire"],
  ["to wash","lavare"],
  ["to offer","offrire"],
  ["to go out","uscire"],
  ["to travel","viaggiare"],
  ["to leave, depart","partire"],
  ["to come","venire"],
  ["to arrive","arrivare"]
];

// var randomItemArray = [];
var randomItem;  // dit is de zin zelf
var randomItemNr;


document.querySelector(".btn-core").onclick = function(){
  // toon de oplossing
  $(".p-oplossing").removeClass("hidden-text");

  // toon goed / fout knop
  $(".btn-goed").removeClass("hidden-text");
  $(".btn-fout").removeClass("hidden-text");

  // verberg zie oplossing knop
  $(".btn-core").addClass("hidden-text");

  // verander de text op de fout knop
  var pf = document.querySelector(".btn-fout");
  pf.innerHTML = "Wrong";
  
}

document.querySelector(".btn-goed").onclick = function(){
  // verwijder het huidige woord uit de query
  var removed = myArray.splice(randomItemNr,1);
  console.log(randomItemNr);
  console.log(myArray);
  console.log(removed)
  
  if (myArray.length != 0){
    //
    nextWord();
  } else { alert("Finished Congrats!");}
}

document.querySelector(".btn-fout").onclick = function(){
  nextWord();
}


function nextWord(){
    // toon het volgende woord
    randomItemNr = Math.floor(Math.random()*myArray.length);
    randomItem = myArray[randomItemNr];
    var ps = document.querySelector(".p-vraag");
    ps.innerHTML = randomItem[0];
    var po = document.querySelector(".p-oplossing");
    po.innerHTML = randomItem[1];
  
    // verberg de oplossing
    $(".p-oplossing").addClass("hidden-text");

    // verwijder de goed / fout knop
    $(".btn-goed").addClass("hidden-text");
    $(".btn-fout").addClass("hidden-text");

    // toon de zie oplossing knop
    $(".btn-core").removeClass("hidden-text");

}




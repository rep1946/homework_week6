// ==============================
//       Characters and places
// ==============================

var hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

var lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  var $middleEarthSection = $('<section></section>');
  console.log($middleEarthSection)
  $middleEarthSection.attr('id', 'middle-earth');
  // add the section to the body
  $('body').append($middleEarthSection);

  // add each land to the section as article tags-- try using a loop
  // inside each article tag include an h1 with the name of the land

  for (let i = 0; i < lands.length; i++) {
    // create the article tag
    var $landArticle = $('<article></article>');
    console.log($landArticle);
    // assign the id of the corresponding article tag as the name of the land
    $landArticle.attr('id',lands[i]);
    // add each land to the middle earth
    $middleEarthSection.append($landArticle);

    // create an h1 for each article
    var $landH1 = $('<h1></h1>');
    console.log($landH1)
    // assign the name of the land inside the h1
    $landH1.html(lands[i])
    // add the name of the land to the corresponding land
    $landArticle.append($landH1);
  }
}

function makeHobbits() {
  console.log('Make hobbits');
  $hobbits = hobbits.sort();
  var $hobbitList = $('<ul></ul>');
  $hobbitList.attr('id', 'the_Hobbits');

  console.log($hobbits.length);

  for (let i =0; i < $hobbits.length; i++) {
  
  //create list
    var $singleHobbit = $('<li></li>');
    console.log($singleHobbit);
    $singleHobbit.html($hobbits[i]);
    $singleHobbit.attr('class', 'hobbit')
    $hobbitList.append($singleHobbit);

  }
// add it to the DOM
$('body').append($hobbitList);

// move it to the shire
$('#the-shire').append($hobbitList);


 

  // $hobbit = $('<li></li>')
  // $hobbitList.append($hobbit);
  // $hobbit.append($hobbits);
  // console.log($hobbits);
}




  // for (let i =0; i < hobbits.length; i++) {
  //     var $hobbit = $('<li></li>');
  //     console.log($hobbit);
  //     $hobbit.attr('class', hobbits[i]);
  //     $hobbitList.html($hobbit[i]);
  //     $hobbitList.append($hobbit);


  // document.getElementById("demo").innerHTML = fruits;
// 


//onnline solution

// var mylist = $('ul');
// var listitems = mylist.children('li').get();
// listitems.sort(function(a, b) {
//    var compA = $(a).text().toUpperCase();
//    var compB = $(b).text().toUpperCase();
//    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
// })
// $.each(listitems, function(idx, itm) { mylist.append(itm); });





  // var $hobbits = $('<li></li>');

// first try could produce the list as classes
//     for (let i =0; i < hobbits.length; i++) {
//       var $hobbit = $('<li></li>');
//       console.log($hobbit);
//       $hobbit.attr('class', hobbits[i]);
//       $hobbitList.html($hobbit[i]);
//       $hobbitList.append($hobbit);
//     }
// }






  // list the hobbits alphabetically.  Maybe use the .sort() method.
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"

function keepItSecretKeepItSafe() {

  $theRing = $('<div></div>');
  $theRing.attr('id', 'the-ring');
  $('body').append($theRing);
  $('#the-ring').html('The ring')
  $('.hobbit:first-child').append($theRing);
  // $('the-ring').innerHTML('The ring');

  console.log($theRing);
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
}

function makeBaddies() {

  //create UL Baddie List
  $baddiesList = $('<ul></ul>');
  $baddiesList.attr('id', 'baddie-list');

  console.log(baddies.length);

  for (let i=0; i < baddies.length; i++) {

    //create a list
    $singleBaddie = $('<li></li>');
    $singleBaddie.html(baddies[i]);
    $singleBaddie.attr('class', 'baddy');
    $baddiesList.append($singleBaddie);

  }

$('body').append($baddiesList);


  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
}

function makeBuddies() {

  $buddiesAside = $('<aside></aside>');

  $('body').append($buddiesAside);
  $buddiesAside.attr('id', 'myBuddies');
  $('#mordor:first-child').append($buddiesAside);

  $myBuddies = $('<ul></ul>');
  $myBuddies.attr('id', 'buddy-list');
  console.log($myBuddies);



  console.log(buddies.length);


for (let i = 0; i < buddies.length; i++) {
  $singleBuddy = $('<li></li>');
  $singleBuddy.html(buddies[i]);
  $singleBuddy.attr('class', 'buddy');
  $myBuddies.append($singleBuddy);
  }
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
$('aside').append($myBuddies);
}




function leaveTheShire() {

$('body').append(makeMiddleEarth);
$('body').append(makeHobbits);
$('#rivendell').append($('#the_Hobbits'));
$('#the-shire').remove('#the_Hobbits');




  // grab the hobbits and move them to Rivendell
}

function beautifulStranger() {
  $('body').append(makeBuddies);
  $('.buddy:nth-child(4)').text('Aragorn');



  // change the buddy 'Strider' node to "Aragorn"
}

function forgeTheFellowShip() {

  $('body').append(makeMiddleEarth);
  $('body').append(makeHobbits);
  $('body').append(makeBuddies);
  $theFellowship = $('<div></div>');
  $theFellowship.attr('id', 'the-fellowship');
  $('the-fellowship').append('h1', 'The Fellowship');
  





  // $('#rivendell').append(makeBuddies);


  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

function theBalrog() {
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
}

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};
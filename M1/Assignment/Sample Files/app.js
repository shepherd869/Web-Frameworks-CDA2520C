/*-------------*/
/* PROBLEM ONE */
/*-------------*/
// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:
document.addEventListener('DOMContentLoaded', () => {
 let p1 = document.getElementById('remove-me');
    p1.addEventListener('click', () => {
      problemOne(event);
        // handle the click event
        console.log('clicked');

function problemOne(event) {


  const target = event.target;
  target.parentNode.removeChild(target);
  console.log(event);

}
});
});
/*-------------*/
/* PROBLEM TWO */
/*-------------*/
// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here
document.addEventListener('DOMContentLoaded', () => {
 let p2 = document.getElementById('remove-my-children');
    p2.addEventListener('click', () => {
      problemTwo(event);
        // handle the click event
        console.log('clicked');


function problemTwo(event) {
  const target = event.target;
  if (p2.hasChildNodes()){
     target.remove(target);

}}
});
});

// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here

/*-------------*/
/*PROBLEM THREE*/
/*-------------*/
// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:

document.addEventListener('DOMContentLoaded', () => {
 let p3 = document.getElementById('remove-my-children-then-me');
    p3.addEventListener('click', () => {
      problemThree(event);
        // handle the click event
        console.log('clicked');


function problemThree(event) {
  const target = event.target;
  target.parentNode.removeChild(target);
}

});
});

/*-------------*/
/*PROBLEM FOUR */
/*-------------*/
// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:

document.addEventListener('DOMContentLoaded', () => {
 let p4 = document.getElementById('add-children');
    p4.addEventListener('click', () => {
      problemFour(event);
        // handle the click event
        console.log('clicked');


function problemFour(event) {
  const target = event.target;
  var objTo = document.getElementById('add-children')
  var divtest = document.createElement("div")
  target.classList.add('child')
  divtest.innerHTML = "Click Me"
  objTo.appendChild(divtest)
}

});
});

/*-------------*/
/*PROBLEM FIVE */
/*-------------*/
// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
// your code here:

document.addEventListener('DOMContentLoaded', () => {
 let p5 = document.getElementById('to-the-back');
    p5.addEventListener('click', () => {
      problemFive(event);
        // handle the click event
        console.log('clicked');


function problemFive(event) {
  const target = event.target;
  var p5 = target.childNodes[0];
  target.replaceChild(p5.childNodes[0]);
}

});
});

/*-------------*/
/*PROBLEM SIX  */
/*-------------*/


/*function problemSix({target}) {

  const target = event.target;
  // your code here

}

// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

/*function problemSeven(event) {

  const target = event.target;
  // your code here


}

// reference the elment "#increment-decrement" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */


/*function problemEight(event) {

 const target = event.target;
  // your code here

}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

/*
  event.preventDefault();
  const target = event.target;
  // your code here

}

// reference the elment "#paste-place" and add an eventlistener for the paste event:
// your code here:

/* ---------------------------------------- */

/*function problemTen(event) {
  const target = event.target;
  // your code here
}

// reference the elment "#show-hide" and add an eventlistener for the change event:
// your code here:

/* ---------------------------------------- */


/*function problemEleven( event ) {

  event.preventDefault();

  const target = event.target;
  // your code here

}

// your code here

/* ---------------------------------------- */
/*
function problemTwelve ( ) {

    // your code here
}

// your code here
*/

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

//  >>>>> I Just couldn't get this one functioning <<<<<

/*document.addEventListener('DOMContentLoaded', () => {
 let p5 = document.getElementById('to-the-back');
    p5.addEventListener('click', () => {
      problemFive(event);
        // handle the click event
        console.log('clicked');

        function problemFive(event){
        var items = document.querySelectorAll("to-the-back");
        items.forEach(function(item) {
            item.onclick = function() { // add onClick event
                var item_index = Array.prototype.indexOf.call(items, item);
                // Add 1 to (index+1) until it reaches the clicked item
                var plus = 1;
                items.forEach(function(item,index) {
                    if (index == item_index)
                        plus = 0;
                    item.style.order = index+1+plus;
                });
                // set the order of clicked item to 1
                this.style.order = 1;
              }
            }
        });
})})

/*-------------*/
/*PROBLEM SIX  */
/*-------------*/
// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:

document.addEventListener('DOMContentLoaded', () => {
 let p6 = document.getElementById('increment-child');
    p6.addEventListener('click', () => {
      problemSix(event);
        // handle the click event
        console.log('clicked');


function problemSix(event) {
  const target = event.target;
  var clicks = 0;
  clicks += 1;
  target.innerHTML = clicks;

}
});
;
});

/*-------------*/
/*PROBLEM SEVEN*/
/*-------------*/
// reference the elment "#increment-decrement" and add an eventlistener for the click event:


document.addEventListener('DOMContentLoaded', () => {
 let p7 = document.getElementById('increment-decrement');
    p7.addEventListener('click', () => {
      problemSeven(event);
        // handle the click event
        console.log('clicked');

function problemSeven(event) {

  const target = event.target;
  var clicks = 0;
  clicks += 1;
  target.innerHTML = clicks;
}})})

document.addEventListener('click', () =>  {
  if (event.shiftKey) {
    problemSeven2(event);
    return;



      }})

function problemSeven2(event) {
  const target = event.target;
  var clicks = 0;
  clicks -= 1;
  target.innerHTML = clicks;
}

/*-------------*/
/*PROBLEM EIGHT*/
/*-------------*/
// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

document.addEventListener('DOMContentLoaded', () => {
 let p8 = document.getElementById('type-place');
    p8.addEventListener('keyup', () => {
      problemEight(event);
        // handle the click event
        console.log('keyup');


function problemEight(event) {

 const target = event.target;

 var textbox8 = document.querySelector("user-input-copy");
 var text8 = document.querySelector("type-place");
 textbox8.innerHTML = text8;
 }
  // your code here

})})


/*-------------*/
/*PROBLEM NINE*/
/*-------------*/
// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

/*document.addEventListener('DOMContentLoaded', () => {
 let p9 = document.getElementById('paste-in-reverse');
    p9.addEventListener('keyup', () => {
      problemNine(event);
        // handle the click event
        console.log('keyup');


function problemNine(event) {

 const target = event.target.value;
 arr[]= target;
 arr.reverse(target);

 }
  // your code here

})})
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

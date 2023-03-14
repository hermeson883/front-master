let submit = document.querySelector('#back-bt');
let body = document.querySelector('body');
let rating = document.querySelectorAll('.nr')
console.log(rating)

function submit1(n){

    body.innerHTML = `<div id="container-box">
    <img src="/images/illustration-thank-you.svg" style="margin-left: 65px;top: 35px;">
    <div id="back2"></div>
    <div id="rate">You selected <!-- Add rating here --> ${n} of 5</div>
  <div id="header2">
    Thank you!
  </div>
  <div id="description2">
    <p>We appreciate you taking the time to give a rating.</p>
    <p>If you ever need more support don’t hesitate to</p>
    <p>get in touch!!</p>
  </div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">@bachgen_br</a>.
  </div>`
}
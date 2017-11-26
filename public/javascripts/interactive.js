// (c) 2017, Anduin Web Development. 

// ** Managing  overall layout views **
window.onload = manageView;
window.onhashchange = manageView;

var homeText = document.getElementById('home');
var firstPage = document.getElementById('first-page');
var secondPage = document.getElementById('second-page');
var thirdPage = document.getElementById('third-page');
var fourthPage = document.getElementById('fourth-page');
var fifthPage = document.getElementById('fifth-page');

firstPage.setAttribute('hidden', true);
secondPage.setAttribute('hidden', true);
thirdPage.setAttribute('hidden', true);
fourthPage.setAttribute('hidden', true);
fifthPage.setAttribute('hidden', true);

function manageView() {
  alertMessageSuccess.setAttribute('hidden', true); // TO-DO: reset alert messages.

  $(document).scrollTop(0);

  switch (window.location.hash) {
    case "#home":
      homeText.removeAttribute("hidden");
      firstPage.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);
      thirdPage.setAttribute("hidden", true);
      fifthPage.setAttribute("hidden", true);
      fourthPage.setAttribute("hidden", true);
      break;

    case "#first-page":
      homeText.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);

      thirdPage.setAttribute("hidden", true);
      fifthPage.setAttribute("hidden", true);
      firstPage.removeAttribute("hidden");
      fourthPage.setAttribute("hidden", true);
      break;

    case "#second-page":
      homeText.setAttribute("hidden", true);
      firstPage.setAttribute("hidden", true);
      secondPage.removeAttribute("hidden");
      thirdPage.setAttribute("hidden", true);
      fifthPage.setAttribute("hidden", true);
      fourthPage.setAttribute("hidden", true);
      break;

    case "#third-page":
      homeText.setAttribute("hidden", true);
      firstPage.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);
      fourthPage.setAttribute("hidden", true);
      thirdPage.removeAttribute("hidden");
      fifthPage.setAttribute("hidden", true);
      break;

    case "#fourth-page":
      homeText.setAttribute("hidden", true);
      firstPage.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);
      thirdPage.setAttribute("hidden", true);
      fourthPage.removeAttribute("hidden");
      fifthPage.setAttribute("hidden", true);
      break;

    case "#fifth-page":
      homeText.setAttribute("hidden", true);
      firstPage.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);
      thirdPage.setAttribute("hidden", true);
      fourthPage.setAttribute("hidden", true);
      fifthPage.removeAttribute("hidden");
      break;

    default:
      homeText.removeAttribute("hidden");
      firstPage.setAttribute("hidden", true);
      secondPage.setAttribute("hidden", true);
      thirdPage.setAttribute("hidden", true);
      fifthPage.setAttribute("hidden", true);
      fourthPage.setAttribute("hidden", true);
  }
}

// ** Interactive Functionality **

$(document).ready(function() {
  function checkOffset() {
    if ($(window).scrollTop() > 300) {
      $('.navbar').addClass('awd-nav-collapse');
    } else if ($(window).scrollTop() < 100) {
      $('.navbar').removeClass('awd-nav-collapse');
    }
  }
  checkOffset();

  $(window).scroll(function() {
    checkOffset();
  });

  var userIsHovering = false;

  function handleMouseover(e) {
    userIsHovering === false ? (userIsHovering = true) : (userIsHovering = false);
  }

  function handleMouseout(e) {
    userIsHovering === true ? (userIsHovering = false) : (userIsHovering = true);
  }

});

// ** Contact Page ** 

var clientContactForm = document.getElementById('client-contact-form');
var alertMessageSuccess = document.getElementById('alert-message-success');

function toggleAlertMessageSuccess() {
  alertMessageSuccess.removeAttribute('hidden');
}

function clearForm() {
  var timeStamp = new Date();
  clientContactForm.reset();
  toggleAlertMessageSuccess();
}

clientContactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var $form = $(this);
  var clientFirstName = $('#client-first-name').val();
  var clientLastName = $('#client-last-name').val();
  var clientEmail = $('#client-email').val();
  var clientEmailMessage = $('#client-email-message').val();

  var data = {};
  data.client_first_name = clientFirstName;
  data.client_last_name = clientLastName;
  data.client_email = clientEmail;
  data.client_email_message = clientEmailMessage;
  var url = $form.attr('action');

  $.ajax({
    // success: clearForm(),
    // url: url,
    // data: data,
    // dataType: 'text',
    // type: 'POST'
  });
});
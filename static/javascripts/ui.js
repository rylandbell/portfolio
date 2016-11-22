$(document).ready(function () {

  //mark current page as active in navbar:
  var url = window.location.pathname;
  url = url.substring(1);
  console.log(url);
  $('#' + url).addClass('active');

  //initialize Bootstrap popovers:
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

});


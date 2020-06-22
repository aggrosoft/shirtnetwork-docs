$(document).ready(function () {
  $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank').prepend('<i class="icon icon-link"></i>');
});
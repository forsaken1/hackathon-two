$(document).ready(function() {
  $('.ui.dropdown').dropdown();
});

$('a.sign_out').click(function() {
  $this = $(this)
  $.ajax({
    url: $this.attr('url'),
    type: 'delete',
    complete: function() {
      window.location = '/'
    }
  })
})
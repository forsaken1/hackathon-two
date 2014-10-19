$(document).ready(function() {
  $('.ui.dropdown').dropdown();

  $('#new_task_date').datetimepicker({
    format:'d.m.Y H:i',
    lang:'ru'
  });
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
$(document).ready(function() {
  $('.ui.dropdown').dropdown();

  $('#new_task_date').datetimepicker({
    format:'d.m.Y H:i',
    lang:'ru'
  });

  $('.delete_my_task').click(function(e) {
    if (confirm('Вы действительно хотите удалить эту просьбу?')) {
      document.location.href = $(e.target).attr('dataURL');
    }
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
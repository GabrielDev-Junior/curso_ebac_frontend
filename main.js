$('header #addForm').click(function () {
  $('#formulario').slideDown();
})

$('header #addForm').dblclick(function () {
  $('#formulario').slideUp();
})

$('#formulario').on('submit', function (e) {
  e.preventDefault();
})

$('#enviar').click(function () {

  const tarefaInserida = $('#tarefaInserida').val();

  if (tarefaInserida !== '') {
    let novoItem = $('<li></li>');

    $(`<div class="tarefas">
      <p id="paragrafo">${tarefaInserida}</p>
      <input type="checkbox">
    </div>`).appendTo(novoItem);
    novoItem.appendTo('ul');
    $('ul').css('display', 'block');
    
    $('#tarefaInserida').val('');
  }
  else {
    alert("Informe uma tarefa!");
  }
})
$(document).on('click', 'li', function () {
  $(this).toggleClass('riscando');
});
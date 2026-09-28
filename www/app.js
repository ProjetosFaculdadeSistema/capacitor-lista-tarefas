// Guarda as tarefas em memória e no localStorage do aparelho
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const form = document.getElementById('form-nova-tarefa');
const input = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');
const msgVazio = document.getElementById('msg-vazio');

// Captura o evento de "enviar" o formulário (clicar em Adicionar ou apertar Enter)
form.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === '') return;

  tarefas.push({ texto: texto, feita: false });
  input.value = '';

  salvar();
  renderizar();
});

function renderizar() {
  lista.innerHTML = '';

  if (tarefas.length === 0) {
    msgVazio.style.display = 'block';
  } else {
    msgVazio.style.display = 'none';
  }

  tarefas.forEach(function (tarefa, indice) {
    const item = document.createElement('li');
    if (tarefa.feita) {
      item.classList.add('feita');
    }

    const texto = document.createElement('span');
    texto.textContent = tarefa.texto;

    // Captura o toque/clique no texto para marcar como concluída
    texto.addEventListener('click', function () {
      tarefas[indice].feita = !tarefas[indice].feita;
      salvar();
      renderizar();
    });

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'remover';
    botaoRemover.classList.add('remover');

    // Captura o clique/toque no botão de remover
    botaoRemover.addEventListener('click', function () {
      tarefas.splice(indice, 1);
      salvar();
      renderizar();
    });

    item.appendChild(texto);
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  });
}

function salvar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

renderizar();

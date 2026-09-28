const botaoVibrar = document.getElementById('btn-vibrar');
const msgVibrar = document.getElementById('msg-vibrar');

// Captura o evento de toque no botão e aciona a vibração do aparelho
botaoVibrar.addEventListener('click', function () {
  if (navigator.vibrate) {
    navigator.vibrate(300);
    msgVibrar.textContent = 'Vibrou! (funciona no Android; no navegador de PC pode não fazer nada)';
  } else {
    msgVibrar.textContent = 'Este aparelho/navegador não suporta vibração.';
  }
});

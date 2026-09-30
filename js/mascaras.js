'use strict';

const apenasDigitos = (valor) => valor.replace(/\D/g, '');

// ----- Máscaras -----
function mascaraCPF(valor) {
  return apenasDigitos(valor).slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(valor) {
  const d = apenasDigitos(valor).slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
  }
  return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
}

function mascaraCEP(valor) {
  return apenasDigitos(valor).slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

// ----- Validação do CPF (dígitos verificadores) -----
function cpfValido(cpf) {
  const d = apenasDigitos(cpf);
  if (d.length !== 11 || /^(\d)\1+$/.test(d)) return false;
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) soma += Number(d[i]) * (t + 1 - i);
    if (((soma * 10) % 11) % 10 !== Number(d[t])) return false;
  }
  return true;
}

// ----- Ligação com o formulário -----
const form = document.getElementById('form-cadastro');
const status = document.getElementById('status');

function aplicarMascara(id, mascara) {
  const campo = document.getElementById(id);
  campo.addEventListener('input', () => {
    campo.value = mascara(campo.value);
    if (id === 'cpf') {
      const completo = campo.value.length === 14;
      campo.setCustomValidity(completo && !cpfValido(campo.value) ? 'CPF inválido. Confira os números.' : '');
    }
  });
}

aplicarMascara('cpf', mascaraCPF);
aplicarMascara('telefone', mascaraTelefone);
aplicarMascara('cep', mascaraCEP);

// A validação nativa (required, pattern, type=email) roda antes deste evento.
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  status.textContent = 'Cadastro enviado! Obrigado por ajudar os animais de rua.';
  form.reset();
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  const nome = form.querySelector('input[name="nome"]').value;
  const cpf = form.querySelector('input[name="cpf"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const rg = form.querySelector('input[name="rg"]').value;
  const data = form.querySelector('input[name="data"]').value;
  const sexo = form.querySelector('input[name="opcao"]:checked').value;
  const uf = form.querySelector('select[name="estado"]').value;
  const cidade = form.querySelector('input[name="cidade"]').value;
  const cep = form.querySelector('input[name="cep"]').value;
  const bairro = form.querySelector('input[name="bairro"]').value;
  const rua = form.querySelector('input[name="rua"]').value;
  const numero = form.querySelector('input[name="nu"]').value;
  const complemento = form.querySelector('input[name="comp"]').value;

  if (!nome || !cpf || !email || !rg || !data || !sexo || !uf || !cidade || !cep || !bairro || !rua || !numero) {
    alert('Por favor, preencha todos os campos do formulário.');
    return;
  }

  const cliente = {
    nome,
    cpf,
    email,
    rg,
    data,
    sexo,
    uf,
    cidade,
    cep,
    bairro,
    rua,
    numero,
    complemento
  };

  alert('Cliente cadastrado com sucesso!');
  form.reset();
});
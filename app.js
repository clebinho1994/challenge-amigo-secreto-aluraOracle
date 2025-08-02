let amigos = [];


//Está função agrega amigos a uma array
function adicionarAmigo() {
  const valorInput = document.getElementById('amigo');
  const valor = valorInput.value;

  if(valor.trim() !== ''){
    amigos.push(valor);
    valorInput.value = '';
    mostrarLista();
  } else {
    alert('Por favor, insira um nome.');
  } 

  
}
//Aqui nos mostramos os amigos agregados a lista
function mostrarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  amigos.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}
//Função que sortea um amigo
function sortearAmigo(){
  if(amigos.length === 0){
    alert('Você não tem amigos na lista!');
    return;
  } 
  const sorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[sorteado];
  document.getElementById('resultado').textContent = `O nome sorteado é ${nomeSorteado}`;
  amigos.length = 0;
  mostrarLista();
  
}
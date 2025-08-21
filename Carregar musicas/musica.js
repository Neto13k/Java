async function carregarMusica() {

  const minhaPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("Música compartilhada com sucesso!");
    }, 1500);
  });

  const resultado = await minhaPromise;

  document.getElementById("resultado").innerText = resultado;
}

///// Mesma base da tarefa de rastreamento///
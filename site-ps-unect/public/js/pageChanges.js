function ExibirRelogio() {
  var clock = document.getElementById("clockBlock");
  var vagas = document.getElementById("vagasBlock");
  var edital = document.getElementById("editalHome");
  var inscreva = document.getElementById("inscrevaHome");
  var semVagas = document.getElementById("semVagas");
  var year = document.getElementById("yearHome");

  clock.style.display = "flex";
  vagas.style.display = "none";
  edital.style.width = "100%";
  inscreva.style.display = "none";
  semVagas.style.display = "none";
  year.style.display = "block";
}

function ExibirVagas() {
  var clock = document.getElementById("clockBlock");
  var vagas = document.getElementById("vagasBlock");
  var edital = document.getElementById("editalHome");
  var inscreva = document.getElementById("inscrevaHome");
  var semVagas = document.getElementById("semVagas");

  clock.style.display = "none";
  vagas.style.display = "flex";
  edital.style.display = "block";
  edital.style.width = "49%";
  inscreva.style.display = "block";
  semVagas.style.display = "none";
}

function ExibirMensagem() {
  var clockW = document.getElementById("clockWeb");
  var semVagas = document.getElementById("semVagas");
  var year = document.getElementById("yearHome");

  clockW.style.display = "none";
  semVagas.style.display = "block";
  year.style.display = "none";

  console.log("DEU CERTO");
}

const buttons = document.querySelectorAll(".menu button");
const sections = document.querySelectorAll(".secao");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remover a classe 'ativa' de todos os botões e seções
    buttons.forEach(btn => btn.classList.remove("ativa"));
    sections.forEach(section => section.classList.remove("ativa"));

    // Adicionar a classe 'ativa' ao botão clicado e à seção correspondente
    button.classList.add("ativa");
    document.getElementById(button.getAttribute("data-section")).classList.add("ativa");
  });
});

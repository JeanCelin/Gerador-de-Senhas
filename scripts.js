const rangeInput = document.getElementById("rangeInput")
const rangeValue = document.getElementById("rangeValue")

document.addEventListener("DOMContentLoaded", function () {
  // Exibir o valor ao iniciar a página
  rangeValue.textContent = rangeInput.value
  // Atualizar o valor ao mudar o input range
  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = rangeInput.value
  })
})

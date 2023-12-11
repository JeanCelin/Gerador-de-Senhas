document.addEventListener("DOMContentLoaded", function () {
  // Exibir o valor ao iniciar a página
  rangeValue.textContent = rangeInput.value
  // Atualizar o valor ao mudar o input range
  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = rangeInput.value
  })
})
let valueRange = () => {
  return document.querySelector("#rangeInput").value
}

const generatePassword = () => {
  let password = ""
  const passwordLength = valueRange()

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numberChars = "0123456789"
  const symbolChars = "!@#$%^&*()_-+=[]{}|;:,.<>?"

  const includeLetterLowerCase = document.getElementById("lowerCase").checked
  const includeLetterUpperCase = document.getElementById("upperCase").checked
  const includeNumbers = document.getElementById("numbers").checked
  const includeSymbols = document.getElementById("symbols").checked

  if (
    !includeLetterLowerCase &&
    !includeLetterUpperCase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    return "Selecione pelo menos um tipo de caractere para a senha."
  }

  let availableChars = ""
  let requiredChars = ""

  if (includeLetterLowerCase) {
    availableChars += lowercaseChars
    requiredChars += lowercaseChars.charAt(
      Math.floor(Math.random() * lowercaseChars.length)
    )
  }
  if (includeLetterUpperCase) {
    availableChars += uppercaseChars
    requiredChars += uppercaseChars.charAt(
      Math.floor(Math.random() * uppercaseChars.length)
    )
  }
  if (includeNumbers) {
    availableChars += numberChars
    requiredChars += numberChars.charAt(
      Math.floor(Math.random() * numberChars.length)
    )
  }
  if (includeSymbols) {
    availableChars += symbolChars
    requiredChars += symbolChars.charAt(
      Math.floor(Math.random() * symbolChars.length)
    )
  }

  const remainingLength = passwordLength - requiredChars.length

  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length)
    password += availableChars.charAt(randomIndex)
  }

  password = requiredChars + password

  return password
}

//ATUALIZA A SENHA AO CLICAR NOVAMENTE NO BOTÃO DE GERAR SENHA
function refreshPassword() {
  const valor = document.querySelector("#valor")
  valor.innerHTML = generatePassword()
}

//MOSTRA A SENHA APOS CLICAR NO BOTÃO
function showPassword() {
  const displayPassword = document.querySelector("#password-box")
  displayPassword.style.display = "block"
}

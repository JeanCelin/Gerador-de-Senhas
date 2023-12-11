const generatePassword = () => {
  let password = ""
  const passwordLength = 10

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

  const availableChars = `${includeLetterLowerCase ? lowercaseChars : ""}${
    includeLetterUpperCase ? uppercaseChars : ""
  }${includeNumbers ? numberChars : ""}${includeSymbols ? symbolChars : ""}`

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length)
    password += availableChars.charAt(randomIndex)
  }

  return password
}

console.log(generatePassword())

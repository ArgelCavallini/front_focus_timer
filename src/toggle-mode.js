let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (e) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? "light" : "dark"
  e.currentTarget.querySelect("span").texContent = `${mode} mode ativado!`

  darkMode = !darkMode
})

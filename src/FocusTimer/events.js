import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", (e) => {
    const action = e.target.dataset.action
    if (typeof actions[action] != "function") return

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  // Validar se é número para deixar informar
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  // Limite de tamanho 60
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("conteteditable")
  })
}

import {parse_command} from "./commands.js";

const input = document.querySelector("#input")
const output = document.querySelector("#output")


document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        let command = input.value.toLowerCase()
        parse_command(command, output)
        input.value = ""
    }
})
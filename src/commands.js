const run_command_str = (cmd) => {
    return `<div><span class='user'>anom</span>@<span class='domain'>lgjt.xyz</span> -> <span class='command'>${cmd}</span><div/>`
}

export async function parse_command(command, output) {
    switch (command) {
        case "help":
            execute_command(help, output)
            break
        case "socials":
            execute_command(socials, output)
            break
        case "repos":
            execute_command(await repos(), output)
            break
        case "contact":
            execute_command(contact, output)
            break
        case "about":
            execute_command(about, output)
            break
        case "clear":
            output.innerHTML = ""
    }
}

let help = [
    run_command_str("Help"),
    "<p>LGJT Shell, version 0.1 (html-unknown-www)<br>These commands are internally defined, type 'help' to see this list.</p>",
    "<dl class='help'>" +
    "<dt class='help-command'>Help</dt>" +
    "<dd class='help-command-description'>Shows this screen</dd>" +
    "<dt class='help-command'>Socials</dt>" +
    "<dd class='help-command-description'>Prints all my social media accounts</dd>" +
    "<dt class='help-command'>Repos</dt>" +
    "<dd class='help-command-description'>Gives you a list of all of my Github repositories</dd>" +
    "<dt class='help-command'>Contact</dt>" +
    "<dd class='help-command-description'>Gives you my contact information</dd>" +
    "<dt class='help-command'>About</dt>" +
    "<dd class='help-command-description'>Show the about text of this site and me</dd>" +
    "<dt class='help-command'>Clear</dt>" +
    "<dd class='help-command-description'>Clears the screen</dd>" +
    "</dl>"
]

let socials = [
    run_command_str("Socials"),
    "<br>",
    "<p>This is a list of all my social media accounts, feel free to follow me on your preferred platform</p>",
    "<a href='https://github.com/JohannesThoren'>Github</a> <br>",
    "<a href='https://twitter.com/JT030309'>Twitter</a> <br>"
]

let repos = async () => {
    let repos = [
        run_command_str("Repos"),
        "<p>This is a list of all my public Github repositories</p>",
    ]
    let response = await fetch("https://api.github.com/users/JohannesThoren/repos?per_page=1000")
    let data = await response.json()

    let dl = "<dl class='repos'>"

    for (let i in data) {
        console.log(data[i])
        dl = dl + `<dt><a href=${data[i].html_url}>${data[i].name}</a></dt>`
        if (data[i].description != null) {
            dl = dl + `<dd>- ${data[i].description}</dd>`
        }
    }

    dl = dl + "</dl>"
    repos.push(dl)
    console.log(repos)
    return repos
}

let contact = [
    run_command_str("Contact"),
    "<p>My contact information, feel free to contact me but pleas follow my rules.</p>",
    "<dl>" +
    "<dt>Email</dt>" +
    "<dd><span class='emph'>Johannes@lgjt.xyz</span> - This mail is only for non buissness related questions.</dd>" +
    "<dd><span class='emph'>Buissness@lgjt.xyz</span> - Buissness related questions only.</dd>" +
    "<dt>Social Media</dt>" +
    "<dd><span class='emph'>Krabban/MrCR4B#6604</span> - Discord</dd>" +
    "<dd><span class='emph'>@JT030309</span> - Twitter</dd>"

]

let about = [
    run_command_str("About"),
    "<pre>" +
    "░▒█░░░░▒█▀▀█░░░░▒█░▀▀█▀▀░░░░▀▄░▄▀░▒█░░▒█░▒█▀▀▀█\n" +
    "░▒█░░░░▒█░▄▄░░░░▒█░░▒█░░░▄▄░░▒█░░░▒▀▄▄▄▀░░▄▄▄▀▀\n" +
    "░▒█▄▄█░▒█▄▄▀░▒█▄▄█░░▒█░░░▀▀░▄▀▒▀▄░░░▒█░░░▒█▄▄▄█" +
    "</pre>",
    "<p> <span class='Emph'>Notice: </span>" +
    "This is a small webpage made only for fun and in the porous of testing.<br> " +
    "It is not meant to replace my main page instead <br> " +
    "this should be seen as a fun and interesting alternative" +
    "</p>",
    "<dl>" +
    "<dt>About Me</dt>" +
    "<dd>My name is Johannes Thorén, I am a 19 years old hobby web and software developer living in sweden.<br> " +
    "I have been developing software and websites for about 3-5 years.</dd>" +
    "<dt>My Experience</dt>" +
    "<dd>During my 3-5 years of web and software development I have tried and used alot of differnet laguages and frameworks, <br>" +
    "some more than others. I mainly use rust and/or python when developing desktop application, and react when doing webstuff</dd>" +
    "<dt>My Goal</dt>" +
    "<dd>My main goal when developing software and webpages for a customer is to make simple and understand able code that is easly maintainable.</dd>"
]

function execute_command(command_output, output) {
    for (let line in command_output) {
        output.innerHTML = output.innerHTML + command_output[line]
    }
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

}
negative_keywords = ["sad", "depressed", "unhappy", "angry", "miserable", "fuck", "shit", "pissed", "not vibing"];
positive_keywords = ["gay"];

const classes = ["eight","text"]

const respones = ["My reply is no","Don't count on it","My sources say no","Very doubtful","Outlook not so good","Better not tell you now","Cannot predict now","Ask again later","Reply hazy try again","Concentrate and ask again","Outlook good","Most likely","Signs point to yes","As I see it, yes","Yes","You may rely on it","Without a doubt","Yes, definitely","It is decidedly so","It is certain"]

const query = document.getElementById("text-input")
const submit = document.getElementById("form-submit")
const responseText = document.getElementById("response-text")

function getResponse(evt){
    evt.preventDefault()
    console.log(query)
    let queryText = query.value
    let reply
    if (negative_keywords.some(word => queryText.includes(word))) {
        reply = respones[getWeightedResponse(false)]
        console.log(reply)
    } else if (positive_keywords.some(word => queryText.includes(word))) {
        reply = respones[getWeightedResponse(true)]
        console.log(reply)
    } else {
        reply = respones[Math.floor(Math.random()*respones.length)]
        console.log(reply)
    }
    responseText.innerText = reply
    query.value = ""
}

const getWeightedResponse = (positive) => {
    if (positive) {
        return Math.floor(Math.random()*(.75*respones.length))+(Math.floor(.25*respones.length))
    } else {
        return Math.floor(Math.random()*(.75*respones.length))
    }
}

submit.addEventListener("click", getResponse)
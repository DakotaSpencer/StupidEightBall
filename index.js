const classes = ["eight","text"]

keywords = ["I", "me", "my", "where", "why","do","should","new","does","famous","millionaire","promotion","marry","pass","crush","love","rich"];
gay_keywords = ["gay"]
negative_keywords = ["sad", "mad", "angry", "ever", "never","will","give"];

const responses = ["My reply is no","Don't count on it","My sources say no","Very doubtful","Outlook not so good","Better not tell you now","Cannot predict now","Ask again later","Reply hazy try again","Concentrate and ask again","Outlook good","Most likely","Signs point to yes","As I see it, yes","Yes","You may rely on it","Without a doubt","Yes, definitely","It is decidedly so","It is certain"]

const query = document.getElementById("text-input")
const submit = document.getElementById("form-submit")

const responseText = document.getElementById("response-text")


function getResponse(evt){
    evt.preventDefault()
    console.log(query)
    let queryText = query.value.toLowerCase()
    let reply
    if (negative_keywords.some(word => queryText.includes(word))) {
        reply = responses[getWeightedResponse(false)]
        console.log(reply)
    } else if (gay_keywords.some(word => queryText.includes(word))) {
        reply = responses[getWeightedResponse(true)]
        console.log(reply)
    } else {
        reply = responses[Math.floor(Math.random()*responses.length)]
        console.log(reply)
    }
    responseText.innerText = reply
    query.value = ""
}

const getWeightedResponse = (positive) => {
    if (positive) {
        return Math.floor(Math.random()*(.75*responses.length))+(Math.floor(.25*responses.length))
    } else {
        return Math.floor(Math.random()*(.75*responses.length))
    }
}

submit.addEventListener("click", getResponse)
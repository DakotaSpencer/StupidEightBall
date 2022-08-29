keywords = ["who", "what", "when", "where", "why","do","should","new","does","famous","millionaire","promotion","marry","pass","crush","love","rich","will","give"];
yes_keywords = ["gay"]

const respones = ["My reply is no","Don't count on it","My sources say no","Very doubtful","Outlook not so good","Better not tell you now","Cannot predict now","Ask again later","Reply hazy try again","Concentrate and ask again","Outlook good","Most likely","Signs point to yes","As I see it, yes","Yes","You may rely on it","Without a doubt","Yes, definitely","It is decidedly so","It is certain"]

const query = document.getElementById("text-input")
const submit = document.getElementById("form-submit")
const response = document.getElementById('response')

function getResponse(evt){
    evt.preventDefault()
    console.log(query)
    let queryText = query.value
    if (keywords.some(word => queryText.includes(word))) {
        const Reply = respones[Math.floor(Math.random() * respones.length)]
        console.log(Reply)
        response.innerHTML=Reply
    }
}

submit.addEventListener("click", getResponse)
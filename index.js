negative_keywords = ["sad", "depressed", "unhappy", "angry", "miserable", "fuck", "shit", "pissed", "not vibing"];
positive_keywords = ["sad", "depressed", "unhappy", "angry", "miserable", "fuck", "shit", "pissed", "not vibing"];


const respones = ["My reply is no","Don't count on it","My sources say no","Very doubtful","Outlook not so good","Better not tell you now","Cannot predict now","Ask again later","Reply hazy try again","Concentrate and ask again","Outlook good","Most likely","Signs point to yes","As I see it, yes","Yes","You may rely on it","Without a doubt","Yes, definitely","It is decidedly so","It is certain"]

const query = document.getElementById("text-input")
const submit = document.getElementById("form-submit")

function getResponse(evt){
    evt.preventDefault()
    console.log(query)
    let queryText = query.value
    if (negative_keywords.some(word => queryText.includes(word))) {
        const negativeReply = respones[Math.floor(Math.random() * respones.length)]
        console.log(negativeReply)
    } else if (positive_keywords.some(word => queryText.includes(word))) {

    } else {

    }
}

const getWeightedResponse = (positive) => {
    if (positive) {
        return Math.random()*(.75)
    }
}

submit.addEventListener("click", getResponse)
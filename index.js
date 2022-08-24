negative_keywords = ["sad", "depressed", "unhappy", "angry", "miserable", "fuck", "shit", "pissed", "not vibing"];


const respones = ["My reply is no","Don't count on it","My sources say no","Very doubtful","Outlook not so good","Better not tell you now","Cannot predict now","Ask again later","Reply hazy try again","Concentrate and ask again","Outlook good","Most likely","Signs point to yes","As I see it, yes","Yes","You may rely on it","Without a doubt","Yes, definitely","It is decidedly so","It is certain"]

function getResponse(query)
    if (negative_keywords.some(word => query.includes(word))) {
        const negativeReply = negative_replies[Math.floor(Math.random() * negative_replies.length)]
        console.log(negativeReply)
    }
negative_keywords = ["sad", "depressed", "unhappy", "angry", "miserable", "fuck", "shit", "pissed", "not vibing"];

negative_replies = [
    "Vibes are attrocious.",
    "Yo ur vibes are all off my guy",
    "fix ur vibes at once pls",
    "gwib",
    "no",
    "no <3",
    "yea alright",
    "swiggity swooty fix your fuckin vibes at once"
]

function getResponse(query)
    if (negative_keywords.some(word => query.includes(word))) {
        const negativeReply = negative_replies[Math.floor(Math.random() * negative_replies.length)]
        console.log(negativeReply)
    }
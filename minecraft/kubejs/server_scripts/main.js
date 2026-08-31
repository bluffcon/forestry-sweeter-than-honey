


// lalala look i started working on it


ServerEvents.recipes(e => {
    
})

PlayerEvents.loggedIn(e => {
    
})

PlayerEvents.chat(e => {
    if (e.getMessage() == "a") {
        e.player.tell(e.player.getId())
    }
})



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

ServerEvents.tags("enchantment", e => {
    e.remove("critical_strike:critical_enchantments", "critical_strike:chance")
    e.remove("critical_strike:critical_enchantments", "critical_strike:damage")
})




// lalala look i started working on it


ServerEvents.recipes(e => {
    
})

PlayerEvents.loggedIn(e => {
    e.getPlayer().attributes.getInstance("apothic_attributes:crit_chance").setBaseValue(-5)

    e.getPlayer().attributes.getInstance("ftbultimine:experience_modifier").setBaseValue(1)
})

PlayerEvents.chat(e => {
    if (e.getMessage() == "a") {
        e.player.tell(e.player.getId())
        e.player.tell(e.player.type)
    }
})

ServerEvents.tags("enchantment", e => {
    e.remove("critical_strike:critical_enchantments", "critical_strike:chance")
    e.remove("critical_strike:critical_enchantments", "critical_strike:damage")
})


EntityEvents.spawned(e => {
    let m = e.getEntity()
    if (m.living == false) return
    if (m.persistentData.getBoolean("hped")) return
    if (m.type == "minecraft:player") return

    let Attributes = Java.loadClass("net.minecraft.world.entity.ai.attributes.Attributes")
    
    let attributeModifiers = [
        { attribute: Attributes.MAX_HEALTH, multiplier: 4 }
    ]

    attributeModifiers.forEach(mod => {
        let einstance = m["getAttribute(net.minecraft.core.Holder)"](mod.attribute)
        if (einstance == null) return
        einstance.setBaseValue(einstance.getBaseValue() * mod.multiplier)
    })

    m.setHealth(m.getMaxHealth())
    m.persistentData.putBoolean("hped", true)
})


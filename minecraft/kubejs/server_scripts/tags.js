ServerEvents.tags("enchantment", e => {
    e.remove("critical_strike:critical_enchantments", "critical_strike:chance")
    e.remove("critical_strike:critical_enchantments", "critical_strike:damage")
})

ServerEvents.tags("item", e => {
    e.add("critical_strike:enchantable/weapon", "#c:tools/melee_weapon")
    e.add("critical_strike:enchantable/weapon", "#c:tools/ranged_weapon")
})
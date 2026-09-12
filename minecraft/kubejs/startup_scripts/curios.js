


StartupEvents.registry("mob_effect", e => {
    e.create("fsth:glass_cannon")
        .beneficial()
        .displayName("Glass Cannon")    
        
})



StartupEvents.registry("item", e => {
    e.create("ring_roll")
        .texture("fsth:item/ring_blue")
        .displayName("Gymnastics Ring")
        .maxStackSize(1)
        .tag("curios:ring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttribute(c => {
                    c.modify("combat_roll:count", c.identifier, 1, "add_value")
                })
        )

    e.create("ring_critrate")
        .texture("fsth:item/ring_pink")
        .displayName("Crit Rate Ring")
        .maxStackSize(1)
        .tag("curios:ring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttribute(c => {
                    c.modify("critical_strike:chance", c.identifier, 0.2, "add_multiplied_base")
                })
        )
    e.create("ring_critdmg")
        .texture("fsth:item/ring_red")
        .displayName("Crit Damage Ring")
        .maxStackSize(1)
        .tag("curios:ring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttribute(c => {
                    c.modify("critical_strike:damage", c.identifier, 0.5, "add_multiplied_base")
                })
        )
    e.create("ring_supercritdmg")
        .texture("fsth:item/ring_darkred")
        .displayName("Netherite Crit Damage Ring")
        .maxStackSize(1)
        .tag("curios:ring")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .modifyAttribute(c => {
                    c.modify("critical_strike:damage", c.identifier, 0.25, "add_multiplied_total")
                })
        )
})
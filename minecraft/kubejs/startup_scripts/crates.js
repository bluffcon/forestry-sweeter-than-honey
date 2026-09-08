
global.crates = [
    {
        id: "fsth:bossc",
        name: "Boss",
        tooltip: {
            summary: "Dangerous crate, full of deep anti-bee _evil_ coming from within",
            behavior1: "Summons an Apotheosis _boss_"
        },
        unb: false
    },
    {
        id: "fsth:healc",
        name: "Heal",
        tooltip: {
            summary: "Loving crate, full of _first-aid kits_         and kisses inside",
            behavior1: "Heals the user to _max HP_"
        },
        unb: false
    },
    {
        id: "fsth:rupturingc",
        name: "Rupturing",
        tooltip: {
            summary: "Any crate, it's about to burst open!",
            behavior1: "Will do something"
        },
        unb: true
    }
];

global.crates.forEach(crate => {
    StartupEvents.registry("block", e => {
        if (crate.unb !== true) {
            e.create(crate.id)
            .soundType(SoundType.METAL)
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBoth("fsth:crates")
            .displayName(crate.name + " Crate")
        } else {
            e.create(crate.id)
            .soundType(SoundType.METAL)
            .requiresTool(true)
            .unbreakable()
            .tagBoth("fsth:crates")
            .displayName(crate.name + " Crate")
        }
    });
    CreateTooltipEvents.register(e => {
        e.add(crate.id, "STANDARD_CREATE", {
            tooltip: "",
            summary: crate.tooltip.summary,
            condition1: "When placed and R-Clicked",
            behaviour1: crate.tooltip.behavior1
        });
    });
});

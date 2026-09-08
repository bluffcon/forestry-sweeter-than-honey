

BlockEvents.rightClicked("fsth:bossc", e => {
    const playSound = 'playSound(net.minecraft.world.entity.Entity,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'
    let l = e.getLevel()
    let b = e.block
    b.set("fsth:rupturingc")
    l[playSound](null, b.pos, 'buildinggadgets2:beep', 'master', 2, 1)

    e.getServer().scheduleInTicks(20, () => {
        b.set("minecraft:air")
        
        l[playSound](null, b.pos, 'minecraft:entity.generic.explode', 'master', 1, 0.75)
        l.spawnParticles("large_smoke", true, b.x + 0.5, b.y + 0.5, b.z + 0.5, 0.1, 0.1, 0.1, 50, 0.3)
        l.spawnLightning(b.x, b.y, b.z, true)

        e.level.runCommand("apoth spawn_boss " + b.x + " " + b.y + " " + b.z);
    })
})

BlockEvents.rightClicked("fsth:healc", e => {
    const playSound = 'playSound(net.minecraft.world.entity.Entity,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)'
    let l = e.getLevel()
    let b = e.block
    b.set("fsth:rupturingc")
    l[playSound](null, b.pos, 'buildinggadgets2:beep', 'master', 2, 1)

    e.getServer().scheduleInTicks(20, () => {
        b.set("minecraft:air")
        
        l[playSound](null, b.pos, 'minecraft:block.beacon.power_select', 'master', 1, 0.75)
        l.spawnParticles("poof", true, b.x + 0.5, b.y + 0.5, b.z + 0.5, 0.1, 0.1, 0.1, 50, 0.01)
        l.spawnParticles("heart", true, b.x + 0.5, b.y + 1, b.z + 0.5, 0.2, 0.2, 0.2, 4, 0.01)

        e.player.heal(1000)
    })
})
function poof(item) {
    RecipeViewerEvents.removeEntriesCompletely("item", e => {
        e.remove(item)
    })
    ServerEvents.recipes(e => {
        e.remove({output: item})
    })
    LootJS.lootTables(e => {
        e.modifyLootTables(/.*/).removeItem(item)
    })
}

poof("create:tree_fertilizer")

poof("createdieselgenerators:wood_chip")
poof("createdieselgenerators:chip_wood_beam")
poof("createdieselgenerators:chip_wood_block")
poof("createdieselgenerators:chip_wood_stairs")
poof("createdieselgenerators:chip_wood_slab")

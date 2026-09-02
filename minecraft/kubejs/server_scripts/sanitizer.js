function poof(item) {
    RecipeViewerEvents.removeEntriesCompletely("item", e => {
        e.remove(item)
    })
    ServerEvents.recipes(e => {
        e.remove({output: item})
        e.remove({input: item})
    })
}

poof("create:tree_fertilizer")
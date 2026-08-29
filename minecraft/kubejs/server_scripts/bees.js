


ServerEvents.generateData("after_mods", e => {
    let product = (chance, name) => ({ "chance": chance, "item": name })

    let allele = (chromosome, dominant = true, value) => ({
        [`forestry:${chromosome}`]: { "dominant": dominant, "value": value }
    })

    let hexToDec = (hex) => {
        hex = hex.toString().replace("0x", '');
        return parseInt(hex, 16);
    }
    
    let makebee = (species, genus, authority, dominant, glint, body, outline, products, genomeAlleles) => {
        let genome = {}
        genomeAlleles.forEach(a => Object.assign(genome, a))
        e.json(`fsth:bee_species/${species}`, {
            "body": hexToDec(body),
            "dominant": dominant,
            "authority": authority,
            "genome": genome,
            "genus": genus,
            "outline": hexToDec(outline),
            "products": products,
            "species": species,
            "glint": glint
        })
        e.json(`fsth:taxon/${genus}`, {
            "parent": "apidae",
            "name": genus,
            "rank": "genus"
        })
    }
    let makeflower = (flower, dominant) => {
        e.json(`fsth:flower_type/${flower}`, {
            "type": "forestry:tag_flower_type",
            "dominant": dominant,
            "flowers": flower
        })
    }



    makebee(
        "coagulis", "badass", "bluffcon",
        false, false,       // dom, glint
        14349811, 10551295, // body, outline
        [
            product(0.2, "forestry:frozen_comb"),
            product(0.2, "forestry:ice_shard")
        ],
        [
            allele("lifespan", true, 30),
            allele("speed", true, 0.8),
            allele("fertility", true, 10)
        ]
    )
    makebee(
        "cog", "badass", "bluffcon",
        true, false,       // dom, glint
        "0x928176", "0x7A402E", // body, outline
        [ product(0.2, "create:cogwheel") ],
        [
            allele("speed", true, 1.4),
            allele("activity", true, "forestry:activity_nocturnal")
        ]
    )
})

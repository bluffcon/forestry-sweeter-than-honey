


ServerEvents.generateData("after_mods", e => {
    let product = (name, chance) => ({ "chance": chance, "item": name })

    let allele = (chromosome, value, dominant = true) => ({
        [`forestry:${chromosome}`]: { "dominant": dominant, "value": value }
    })

    let breeds = (a, b, chance, species, conditions = []) => {
        let mut = {
            "type": "forestry:bee_mutation",
            "chance": chance,
            "first": a,
            "second": b,
            "result": `fsth:${species}`,
            "id": `fsth:bee_mutation/${species}`,
            "conditions": conditions
        };
        
        e.json(`fsth:recipe/bee_mutation/${species}`, mut);
    }
    let manualbreeds = (a, b, chance, species, id, conditions = []) => {
        let mut = {
            "type": "forestry:bee_mutation",
            "chance": chance,
            "first": a,
            "second": b,
            "result": `fsth:${species}`,
            "id": `fsth:bee_mutation/${id}`,
            "conditions": conditions
        };
        
        e.json(`fsth:recipe/bee_mutation/${species}`, mut);
    }

    let hexToDec = (hex) => {
        hex = hex.toString().replace("#", '');
        return parseInt(hex, 16);
    }
    
    let makebee = (species, genus, authority, dominant, glint, body, outline, products, genalleles, breeding) => {
        let genome = {}
        genalleles.forEach(a => Object.assign(genome, a))
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
        
        if (breeding !== "none") breeds(breeding.a, breeding.b, breeding.chance, species = species, breeding.conditions);
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
            product("forestry:frozen_comb", 0.2),
            product("forestry:ice_shard", 0.2)
        ],
        [
            allele("lifespan", 30),
            allele("speed", 0.8),
            allele("fertility", 10)
        ],
        "none"
    )
    makebee(
        "cog", "badass", "bluffcon",
        true, false,            // dom, glint
        "#928176", "#7A402E", // body, outline
        [ product("create:cogwheel", 0.2) ],
        [
            allele("speed", 1.4),
            allele("activity", "forestry:activity_nocturnal")
        ],
        {
            a: "forestry:forest", b: "forestry:abyssal", chance: 0.2
        }
    )
})

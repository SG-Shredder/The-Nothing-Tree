addLayer("p", {
    name: "lesser thing", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "LT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Lesser Thing", // Name of prestige currency
    baseResource: "Nothing", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
      let mult = new Decimal(1) // prestige currency or lesser things here!
  if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))       
   if (hasUpgrade('p', 19)) mult = mult.times(upgradeEffect('p', 19))    
   if (hasUpgrade('p', 21)) mult = mult.times(upgradeEffect('p', 21))  
    return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P:Prestige for Lesser Thing. I know it's p but still", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],


    upgrades: {
 11: {
    title: "First Upgrade!",
    description: "Triple your nothing gain. Many other upgrades in part 1 will be very generic. I am very new to js as of 3/24/2026 and while making this upgrade. I'll try to update this game more. I promise the other upgrades won't have so much text. I'm truly sorry you might have read this all. ",
    cost: new Decimal(2),
        },       
  12: {
    title: "Second Upgrade!",
    description: " Of course, we will boost nothing based on lesser thing. How can you make nothing with lesser thing? Couldn't tell you.",
    cost: new Decimal(5),
        effect() {
        return player[this.layer].points.add(1).pow(.8)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },      
    
 13: {
    title: "Second Upgrade!",
    description: " Of course, we will boost lesser thing.",
    cost: new Decimal(20),
        effect() {
        return player[this.layer].points.add(1).pow(.2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },      

14: {
    title: "Lesser thing boost",
    description: "y?",
    cost: new Decimal(200),
    effect() {
        return player.points.add(1).pow(0.45)
    },
},
    
15:{
    title: "Generic Upgrade 1:Small boost",
    description: "Triple your nothing gain. I got a little stuck on milestone so I decided to do upgrades first. Generic upgrades will be less common later on but expect more coming quickly.",
    cost: new Decimal(800),
        },       

16:{
    title: "Generic Upgrade 2:Tiny boost",
    description: "Double nothing gain. I got a little stuck on milestone so I decided to do upgrades first. Generic upgrades will be less common later on but expect more",
    cost: new Decimal(3000),
        },     
17:{
    title: "Generic Upgrade 3:Small boost",
    description: "2.5x nothing gain. I got a little stuck on milestone so I decided to do upgrades first. Generic upgrades will be less common later on but expect more",
    cost: new Decimal(10000),
        },     
18:{
    title: "Generic Upgrade 4:BIIIIIIG BOOST",
    description: "15x nothing gain. I got a little stuck on milestone so I decided to do upgrades first. Generic upgrades will be less common later on but expect more",
    cost: new Decimal(50000),
        },     
19:{
    title: "Generic based on boost 1",
    description: "I got a little stuck on milestone so I decided to do upgrades first. Generic upgrades will not be very common after this.",
    cost: new Decimal(1500000),
 effect() {
        return player[this.layer].points.add(1).pow(.3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
},     
21:{
    title: "Generic based on boost 2",
    description: "SUUUUUUUUUUUUUUUUPER BOOOOOOOOOOOOOOOOOOOST.",
    cost: new Decimal(2e18),
effect() {
        return player[this.layer].points.add(1).pow(.5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
},

    22:{
    title: "Nuclear Inflator uhhhhh",
    description: "So why???????",
    cost: new Decimal(1e100),
effect() {
        return player[this.layer].points.add(1).pow(.6)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },

effect() {
        return player.points.add(1).pow(0.55)
    },


},
   23:{
    title: "Linear Boost Time",
    description: "So why???????",
    cost: new Decimal("1e25000000"),
  },

  24:{
title:" Why did I inflate it so much and it's still layer one?",
description:" I dunno either man!",
cost: new Decimal("1e2e9")
  },


25: {
    title: "Lesser thing boost again",
    description: "Y?",
    cost: new Decimal("1e2e17"),
    effect() {
        return player.points.add(1).pow(0.75)
    },
},

26:{
    title: " Boost Time",
    description: "You may be wondering where milestones, buyables are. Remember bee tree? Yeah this is kinda gonna be like that maybe.",
    cost: new Decimal("1e2e160"),
  },













    

layerShown(){return true}
     

    






},

















    })

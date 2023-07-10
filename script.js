// initializing...
// resources
let kupo = 0;
let wood = 0;
let metal = 0;
let crystal = 0;

// units
let gardeners = 0;
let trees = 0;
let conjures = 0;


// counters
let kupoPerSecond = gardeners + trees;
let woodPerSecond = 0;
let metalPerSecond = 0;
let crystalPerSecond = 0;

let updateValue = (a, b) => {
    document.getElementById(a).textContent = b
}

$(document).ready(function () {
    // Buttons    
    $('#kupoButton').on('click', function() {
        kupo += 1
    })
    $('#gardenerButton').on('click', function() {
        if (kupo >= prices.gardener) {
            kupo -= prices.gardener;
            kupoPerSecond += 1;
            if (kupoPerSecond < 20) {
                prices.gardener += 3;
            } else {
                prices.gardener *= 1.1
            }
            updateValue('gardenerCost', prices.gardener);
            updateValue('kps', kupoPerSecond);
        }
    })
    $('#woodButton').on('click', function() {
        if (kupo >= prices.wood) {
            $('.boughtWood').show();
            woodPerSecond += 1;
            kupo -= prices.wood;
            prices.wood = Math.round(prices.wood * 1.05)
            updateValue('woodCost', prices.wood);
            updateValue('wps', woodPerSecond);
        }
    })
    $('#metalButton').on('click', function() {
        if (kupo >= prices.metal[0] && wood >= prices.metal[1]) {
            $('.boughtMetal').show();
            metalPerSecond += 1;
            kupo -= prices.metal[0];
            wood -= prices.metal[1];
            prices.metal[0] = Math.round(prices.metal[0] * 1.3)
            prices.metal[1] = Math.round(prices.metal[1] * 1.1)
            updateValue('mps', metalPerSecond)
        }
    })
    $('#crystalButton').on('click', function() {
        if (kupo >= prices.crystal[0] && wood >= prices.crystal[1] && metal >= prices.crystal[2]) {
            crystalPerSecond += 1;
            kupo -= prices.crystal[0];
            wood -=prices.crystal[1];
            metal -= prices.crystal[2];
            updateValue('cps', crystalPerSecond);
        }
    })
    $('#treeButton').on('click', function() {
        if (kupo >= prices.tree[0] && wood >= prices.tree[1]) {
            kupo -= prices.tree[0];
            wood -= prices.tree[1];
            kupoPerSecond += 20;
            prices.tree[0] = Math.round(prices.tree[0] * 1.5)
            prices.tree[1] = Math.round(prices.tree[1] * 1.75)
            updateValue('treeCostKupo', prices.tree[0]);
            updateValue('treeCostWood', prices.tree[1]);
            updateValue('kps', kupoPerSecond)

        }
    })
    $('#conjureButton').on('click', function() {
        if (kupo >= prices.conjure[0] && crystal >= prices.conjure[3]) {
          kupo -= prices.conjure[0];
          crystal -= prices.conjure[3];
          kupoPerSecond += 500;
          updateValue('kps', kupoPerSecond);
        }
    })
    $('.row').children().css("display", "inline")

    // Initialize Prices
    updateValue('woodCost', prices.wood);
    updateValue('metalCostKupo', prices.metal[0]);
    updateValue('metalCostWood', prices.metal[1]);
    updateValue('crystalCostKupo', prices.crystal[0]);
    updateValue('crystalCostWood', prices.crystal[1]);
    updateValue('crystalCostMetal', prices.crystal[2]);
    updateValue('treeCostKupo', prices.tree[0]);
    updateValue('treeCostWood', prices.tree[1]);
    updateValue('conjureCostKupo', prices.conjure[0])
    updateValue('conjureCostCrystal', prices.conjure[3]);
    updateValue('primalCostKupo', prices.nutPrimal[0]);
    updateValue('primalCostWood', prices.nutPrimal[1]);
    updateValue('primalCostMetal', prices.nutPrimal[2]);
    updateValue('primalCostCrystal', prices.nutPrimal[3]);

    // Initialize counters
    updateValue('kps', kupoPerSecond)
    updateValue('wps', woodPerSecond)
    updateValue('mps', metalPerSecond)
    updateValue('cps', crystalPerSecond)

    // Set these to hide() once you're done.
    $('.boughtWood').show();
    $('.boughtMetal').show();
    $('.boughtCrystal').show();
});

let prices = {
    gardener: 5,
    wood: 10,
    metal: [200, 10],
    crystal: [10000, 300, 20],
    tree: [1,50],
    conjure: [300, 0, 0, 50],
    nutPrimal: [1000000, 1000, 1000, 10000]
}

function update() {
    kupo += kupoPerSecond/30;
    wood += woodPerSecond/30;
    metal += metalPerSecond/30;
    crystal += crystalPerSecond/30;
    updateValue('kupoCounter', Math.round(kupo));
    updateValue('woodCounter', Math.round(wood));
    updateValue('metalCounter', Math.round(metal));
    updateValue('crystalCounter', Math.round(crystal));
}

setInterval(update, 33);
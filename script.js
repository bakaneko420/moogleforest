// define variables
let kupo = 0;
let wood = 0;
let metal = 0;
let crystal = 0;

// counters
let kupoPerSecond = 0;
let woodPerSecond = 0;
let metalPerSecond = 0;
let crystalPerSecond = 0;

$(document).ready(function () {
    // Buttons    
    $('#kupoButton').on('click', function() {
        kupo += 1
    })
    $('#woodButton').on('click', function() {
        if (kupo >= prices.wood) {
            $('.boughtWood').show();
            woodPerSecond += 1;
            kupo -= prices.wood;
            prices.wood = Math.round(prices.wood * 1.05)
            document.getElementById('woodCost').textContent = prices.wood
            document.getElementById('wps').textContent = woodPerSecond
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
            document.getElementById('mps').textContent = metalPerSecond
        }
    })
    $('#crystalButton').on('click', function() {
        if (kupo >= prices.crystal[0] && wood >= prices.crystal[1] && metal >= prices.crystal[2]) {
            crystalPerSecond += 1;
            kupo -= prices.crystal[0];
            wood -=prices.crystal[1];
            metal -= prices.crystal[2];
            document.getElementById('cps').textContent = crystalPerSecond;
        }
    })
    $('#treeButton').on('click', function() {
        if (kupo >= prices.tree[0] && wood >= prices.tree[1]) {
            kupo -= prices.tree[0];
            wood -= prices.tree[1];
            kupoPerSecond += 20;
            prices.tree[0] = Math.round(prices.tree[0] * 1.5)
            prices.tree[1] = Math.round(prices.tree[1] * 1.75)
            document.getElementById('treeCostKupo').textContent = prices.tree[0];
            document.getElementById('treeCostWood').textContent = prices.tree[1];
            document.getElementById('kps').textContent = kupoPerSecond

        }
    })
    $('#conjureButton').on('click', function() {
        if (kupo >= prices.conjure[0] && crystal >= prices.conjure[3]) {
          kupo -= prices.conjure[0];
          crystal -= prices.conjure[3];
          kupoPerSecond += 500;
          document.getElementById('kps').textContent = kupoPerSecond;
        }
    })
    $('.row').children().css("display", "inline")

    // Initialize Prices
    document.getElementById('woodCost').textContent = prices.wood;
    document.getElementById('metalCostKupo').textContent = prices.metal[0];
    document.getElementById('metalCostWood').textContent = prices.metal[1];
    document.getElementById('crystalCostKupo').textContent = prices.crystal[0];
    document.getElementById('crystalCostWood').textContent = prices.crystal[1];
    document.getElementById('crystalCostMetal').textContent = prices.crystal[2];
    document.getElementById('treeCostKupo').textContent = prices.tree[0];
    document.getElementById('treeCostWood').textContent = prices.tree[1];
    document.getElementById('conjureCostKupo').textContent = prices.conjure[0]
    document.getElementById('conjureCostCrystal').textContent = prices.conjure[3];
    document.getElementById('primalCostKupo').textContent = prices.nutPrimal[0];
    document.getElementById('primalCostWood').textContent = prices.nutPrimal[1];
    document.getElementById('primalCostMetal').textContent = prices.nutPrimal[2];
    document.getElementById('primalCostCrystal').textContent = prices.nutPrimal[3];

    // Initialize counters
    document.getElementById('kps').textContent = kupoPerSecond
    document.getElementById('wps').textContent = woodPerSecond
    document.getElementById('mps').textContent = metalPerSecond
    document.getElementById('cps').textContent = crystalPerSecond

    // Set these to hide() once you're done.
    $('.boughtWood').show();
    $('.boughtMetal').show();
    $('.boughtCrystal').show();
});

let prices = {
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
    document.getElementById('kupoCounter').textContent = Math.round(kupo);
    document.getElementById('woodCounter').textContent = Math.round(wood);
    document.getElementById('metalCounter').textContent = Math.round(metal);
    document.getElementById('crystalCounter').textContent = Math.round(crystal);
}

setInterval(update, 33);
let Diamonds = 0


let clickUpgrades = [
  {
    name: 'Shovel',
    price: 50,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'Pickaxe',
    price: 100,
    quantity: 0,
    bonus: 3
  },
]
let automaticUpgrades = [
  {
    name: 'Miner',
    price: 500,
    quantity: 0,
    bonus: 10
  },
  {
    name: 'Golden-Apple',
    price: 1000,
    quantity: 0,
    bonus: 50

  }
]

function Clickdiamond() {

  Diamonds += 1
  console.log('Diamond Click', Diamonds)
  let totalbonusamount = clickupgradebonus()
  Diamonds += totalbonusamount
  drawDiamonds()

}
function AutoDiamonds() {

  let totalAutobonusamount = autoUpgradesbonus()
  Diamonds += totalAutobonusamount
  drawDiamonds()
}

function drawDiamonds() {
  const DiamondsElem = document.getElementById('Diamonds')
  DiamondsElem.innerText = Diamonds.toString()


}

// TODO make the price of the upgrade increase, make sure to draw the new prcie to the document as well, so you will probably need to update your draw stats functions

function purchaseshovel() {
  const Foundclickupgrade = clickUpgrades.find(diamonditem => diamonditem.name == "Shovel")
  if (Diamonds < Foundclickupgrade.price) {
    window.alert('you cannot afford shovel')

    return
  }
  console.log('purchasing', Foundclickupgrade)
  Diamonds -= Foundclickupgrade.price
  Foundclickupgrade.quantity++

  drawDiamonds()
  drawclickupgradesstats()

}

function purchasepickaxe() {
  const Foundclickupgrade = clickUpgrades.find(clickUpgrades => clickUpgrades.name == "Pickaxe")
  if (Diamonds < Foundclickupgrade.price) {
    window.alert('you cannot afford Pickaxe')

    return
  }

  console.log('purchasing', Foundclickupgrade)
  Diamonds -= Foundclickupgrade.price
  Foundclickupgrade.quantity++


  drawDiamonds()
  drawclickupgradesstats()

}

function purchaseminer() {
  const FoundAutomaticUpgrades = automaticUpgrades.find(automaticUpgrades => automaticUpgrades.name == "Miner")
  if (Diamonds < FoundAutomaticUpgrades.price) {
    window.alert('you cannot afford Miner')
    return
  }
  Diamonds -= FoundAutomaticUpgrades.price
  FoundAutomaticUpgrades.quantity++

  drawDiamonds()
  drawautomaticupgradesstats()
}

function purchasegoldenapple() {
  const Founddiamonditem = automaticUpgrades.find(diamonditem => diamonditem.name == "Golden-Apple")
  if (Diamonds < Founddiamonditem.price) {
    window.alert('you cannot afford Golden-Apple')
    return
  }
  Diamonds -= Founddiamonditem.price
  Founddiamonditem.quantity++

  drawDiamonds()
  drawautomaticupgradesstats()

}

function drawclickupgradesstats() {
  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    const clickUpgradeElem = document.getElementById(clickUpgrade.name)
    const spanElem = clickUpgradeElem.querySelector('span')
    spanElem.innerText = clickUpgrade.quantity.toString()

  }
}

function drawautomaticupgradesstats() {
  for (let i = 0; i < automaticUpgrades.length; i++) {
    const automaticUpgrade = automaticUpgrades[i];
    const automaticUpgradeElem = document.getElementById(automaticUpgrade.name)
    const spanElem = automaticUpgradeElem.querySelector('span')
    spanElem.innerText = automaticUpgrade.quantity.toString()
  }

}




function clickupgradebonus() {
  let totalbonusamount = 0

  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    totalbonusamount += clickUpgrade.bonus * clickUpgrade.quantity
    console.log(clickUpgrade.bonus * clickUpgrade.quantity)

  }

  return totalbonusamount

}

function autoUpgradesbonus() {
  let totalAutobonusamount = 0

  for (let i = 0; i < automaticUpgrades.length; i++) {
    const automaticUpgrade = automaticUpgrades[i];
    totalAutobonusamount += automaticUpgrade.bonus * automaticUpgrade.quantity
    totalAutobonusamount
    console.log(automaticUpgrade.bonus * automaticUpgrade.quantity)

  }


  return totalAutobonusamount

}


// TODO write a function that draws the stats for your total bonus for your auto/click upgrades. You might be able to re-use one of your calculate functions for this. Call these functions whenever someone purchases and upgrade

drawautomaticupgradesstats()
// TODO write a function that totals up my automaticUpgrades (reference calculateSootheAmount OR calculateCartTotal) and applies that total to my Diamonds

// TODO call this function every 3 seconds (reference my setInterval from zoo keeper)

setInterval(AutoDiamonds, 3000)




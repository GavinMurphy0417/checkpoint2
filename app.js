let Diamonds = 0


let clickUpgrades = [
  {
    name: 'Shovel',
    price: 50,
    quantity: 0,
    bonus: 2
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
    quantity: 1,
    bonus: 10
  },
  {
    name: 'Golden-Apple',
    price: 1000,
    quantity: 1,
    bonus: 50

  }
]

function Clickdiamond() {

  Diamonds += 1
  console.log('Diamond Click', Diamonds)
  drawDiamonds()
}



function drawDiamonds() {
  const DiamondsElem = document.getElementById('Diamonds')
  DiamondsElem.innerText = Diamonds.toString()

}



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
  const Founddiamonditem = clickUpgrades.find(diamonditem => diamonditem.name == "Pickaxe")
  if (Diamonds < Founddiamonditem.price) {
    window.alert('you cannot afford Pickaxe')

    return
  }

  console.log('purchasing', Founddiamonditem)
  Diamonds -= Founddiamonditem.price
  Founddiamonditem.quantity++


  drawDiamonds()
  drawclickupgradesstats()

}

function purchaseminer() {
  const Founddiamonditem = automaticUpgrades.find(diamonditem => diamonditem.name == "Miner")
  if (Diamonds < Founddiamonditem.price) {
    window.alert('you cannot afford Miner')

    return
  }

  console.log('purchasing', Founddiamonditem)
  Diamonds -= Founddiamonditem.price
  Founddiamonditem.quantity++

  drawDiamonds()
  drawclickupgradesstats()

}

function purchasegoldenapple() {
  const Founddiamonditem = automaticUpgrades.find(diamonditem => diamonditem.name == "Golden-Apple")
  if (Diamonds < Founddiamonditem.price) {
    window.alert('you cannot afford Golden-Apple')
    return
  }
  console.log('purchasing', Founddiamonditem)
  Diamonds -= Founddiamonditem.price
  Founddiamonditem.quantity++

  drawDiamonds()
  drawclickupgradesstats()
}

function drawclickupgradesstats() {
  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    const clickUpgradeElem = document.getElementById(clickUpgrade.name)
    const spanElem = clickUpgradeElem.querySelector('span')
    spanElem.innerText = clickUpgrade.quantity.toString()

  }
}


setInterval()










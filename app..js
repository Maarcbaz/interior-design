
const nav = document.getElementById('topNav')
const header = document.getElementById('logo')
const list = document.getElementById('list')

function openNav() {
    nav.style.width = '250px';
    list.style.display = 'block'
}

function closeNav() {
    nav.style.width = '0'
}

const overlay = document.getElementById('myNav')
const hList = document.getElementById('hList')

function openNa() {
    overlay.style.width = '250px';
    hList.style.display = 'block'
}

function closeNa() {
    overlay.style.width = '0'
    hList.style.display = 'none'
    hList.style.display = 'none'
}

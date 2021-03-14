function ScrollHeader(){
    const nav = document.getElementById("header")
    if(this.scrollY >= 50){
        nav.classList.add('active-header')
    }else{
        nav.classList.remove('active-header')
    }
}
//Assim  que a página carrega ela observa o scroll e executa a função
window.addEventListener('scroll',ScrollHeader)

//Menu dropdown
const dropdownMenu1 = document.getElementById('dropdown-item-1')
const dropdownMenu2 = document.getElementById('dropdown-item-2')
const dropdownMenu3 = document.getElementById('dropdown-item-3')

const menuItem1 = document.getElementById('menu-item-1')
const menuItem2 = document.getElementById('menu-item-2')
const menuItem3 = document.getElementById('menu-item-3')

function showDrop1(event){
    event.preventDefault()
    dropdownMenu1.classList.toggle('active-dropdown-menu')
    dropdownMenu2.classList.remove('active-dropdown-menu')
    dropdownMenu3.classList.remove('active-dropdown-menu')

}

function showDrop2(event){
    event.preventDefault()
    dropdownMenu1.classList.remove('active-dropdown-menu')
    dropdownMenu2.classList.toggle('active-dropdown-menu')
    dropdownMenu3.classList.remove('active-dropdown-menu')

}

function showDrop3(event){
    event.preventDefault()
    dropdownMenu1.classList.remove('active-dropdown-menu')
    dropdownMenu2.classList.remove('active-dropdown-menu')
    dropdownMenu3.classList.toggle('active-dropdown-menu')

}

 function RemoveDropdown(){
     dropdownMenu1.classList.remove('active-dropdown-menu')
     dropdownMenu2.classList.remove('active-dropdown-menu')
     dropdownMenu3.classList.remove('active-dropdown-menu')

 }
menuItem1.addEventListener("click",showDrop1)
menuItem2.addEventListener("click",showDrop2)
menuItem3.addEventListener("click",showDrop3)


dropdownMenu1.addEventListener("mouseleave",RemoveDropdown)
dropdownMenu2.addEventListener("mouseleave",RemoveDropdown)
dropdownMenu3.addEventListener("mouseleave",RemoveDropdown)

//Menu Mobile

const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('active-menu-mobile')
            toggle.classList.toggle('active-bx')
        })
    }


}

showMenu('bx','menu-mobile')
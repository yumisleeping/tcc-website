function openMenu() {
    let openedMenu = document.getElementById('side-menu');

    if (openedMenu.style.width == "0px"){
        openedMenu.style.width = "auto";
    } else {
        openedMenu.style.width = "0px";
    }
}
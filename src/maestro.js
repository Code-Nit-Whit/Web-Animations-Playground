//still need to handle enabling animations menu once category is chosen
function handleSelectMenuClick(event, menus) {
  const clicked = event.target;
  const parent = clicked.parentElement;
  let selectMenu;
  //has to be list item, change currently-selected and page, hide parent, ignore the rest
  if (
    !clicked.classList.contains("select-menu") &&
    !parent.classList.contains("select-menu")
  ) {
    console.log(
      clicked +
        " is clicked and we are in the right place... now figure out where it breaks."
    );
    const currentlySelected = parent.querySelector(".selected");
    console.log(
      currentlySelected +
        " ...it should say null in front on this text unless you managed to change the currently selected label..."
    );
    //no need to reload display if already selected
    //something wrong with logic here...
    if (currentlySelected && currentlySelected === clicked) {
      parent.style.display === "none";
      return;
    } else if (currentlySelected && !currentlySelected === clicked) {
      console.log(currentlySelected + " is having selected class removed");
      currentlySelected.classList.remove("selected");
    }
    console.log(
      currentlySelected +
        " is null or not us in wich case it should have been removed , so add selected class to " +
        clicked
    );
    clicked.classList.add("selected");
    const optionsList = clicked.parentElement;
    const selectMenu = optionsList.parentElement;
    const currentSelectionLabel =
      selectMenu.querySelector(".current-selection");
    currentSelectionLabel.innerText = clicked.innerText;
    //handle page load/reload once there are pages to load!!!!!!!!!!!!!!!!!!!!!!!!!!
    parent.style.display = "none";
    console.log("");
    parent.style.display = "none";
    return;
  } else {
    //find selectmenu and set variable
    if (parent.classList.contains("select-menu")) {
      selectMenu = parent;
    } else {
      selectMenu = clicked;
    }
    const list = selectMenu.querySelector(".options-list");
    //const clickWrapper=selectMenu.querySelector('.click-wrapper');
    //check if our list is open, if so, close it and return. if not, grabs all lists, close all, and then open ours.
    if (list.style.display === "block") {
      list.style.display = "none";
      //clickWrapper.style.display='none';
      return;
    } else {
      menus.forEach((menu) => {
        const otherList = menu.querySelector(".options-list");
        //const otherClickWrapper=menu.querySelector('.click-wrapper');
        otherList.style.display = "none";
        //otherClickWrapper.style.display='none';
      });
      list.style.display = "block";
      //clickWrapper.style.display='block';
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menus = document.querySelectorAll(".select-menu");
  menus.forEach((menu) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      handleSelectMenuClick(event, menus);
    });
  });

    const checkBoxes = document.querySelectorAll(".toggle-checkbox");
  /*checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener('click',(event) => {
            console.log(checkbox);
        })
    })

    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
        slider.addEventListener('input',(event) => {
            console.log(slider);
        })
    })

   const buttons = document.querySelectorAll(".sb-button");
    buttons.forEach((button) => {
        button.addEventListener('click',(event) => {
            console.log(button);
        })
    })*/

    const HBButton = document.querySelector("#hamburger-menu");
    let open = true;
    const sideMenu = document.querySelector("aside");
    HBButton.addEventListener('click',(event) => {
        console.log("event fired");
        if (open) {
            sideMenu.style.transform = 'translateX(-100%)'; 
            console.log("closed");
            open = false;
        } else {
            sideMenu.style.transform = 'translateX(0)'; 
            console.log("opened");
            open = true;
        }
    })
    
});

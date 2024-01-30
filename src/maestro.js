//  ╔═══╗     ╔╗        ╔╗          ╔╗             ╔═══╗        ╔╗                
//  ║╔═╗║    ╔╝╚╗       ║║         ╔╝╚╗            ║╔══╝       ╔╝╚╗               
//  ║║ ║║╔══╗╚╗╔╝╔╗     ║║   ╔╗╔══╗╚╗╔╝╔══╗╔═╗     ║╚══╗╔══╗╔═╗╚╗╔╝╔═╗╔══╗╔══╗╔══╗
//  ║╚═╝║║╔╗║ ║║ ╠╣╔═══╗║║ ╔╗╠╣║╔╗║ ║║ ║╔╗║║╔╝     ║╔══╝║╔╗║║╔╝ ║║ ║╔╝║╔╗║║══╣║══╣
//  ║╔═╗║║║║║ ║╚╗║║╚═══╝║╚═╝║║║║║║║ ║╚╗║║═╣║║     ╔╝╚╗  ║╚╝║║║  ║╚╗║║ ║║═╣╠══║╠══║
//  ╚╝ ╚╝╚╝╚╝ ╚═╝╚╝     ╚═══╝╚╝╚╝╚╝ ╚═╝╚══╝╚╝     ╚══╝  ╚══╝╚╝  ╚═╝╚╝ ╚══╝╚══╝╚══╝
//
//                         FOR FORMATTED COMMENT BLOCKS
//
/*٩◔̯◔۶ █████████▓▓▓▓▓▓▒▒▒▒▒░░ ░Web Animations Main Script ░░░▒▒▒▒▒▓▓▓▓▓▓▓████████ ఠ ͟ಠ*/                                                              
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░File: maestro.js          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░Version: 0.0.1            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░Author: Code-Nit-Whit     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/         
/*░Creation Date: 01-29-2024 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/        
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/ 
/*░Last Modified By: Code-Nit-Whit ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/                   
/*░Last Modified Date: 02-XX-2024  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░Description: This JavaScript file handles the dynamic population and behavior of   ░*/
/*░░the animation selection menus as well as all other interactions on the website.It ░*/
/*░░fetches data from a JSON file, populates the menus accordingly, and handles user  ░*/
/*░░interactions to filter and select animations. It also populates the DOM with      ░*/
/*░░animation specific markup, styling, and scripting from GitHub Gists formatted to  ░*/
/*░░work with this application.                                                       ░*/
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*░Source: https://github.com/Code-Nit-Whit/Web-Animations/src/maestro.js ░░░░░░░░░░░░░*/                                 
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/                                                              
/*░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░*/
/*¯\_(ツ)_/¯ ████████▓▓▓▓▓▒▒▒Copyright ©️ 2024 Code-Nit-Whit.▒▒▒▓▓▓▓▓▓████████ t(- n -)t*/ 



/* ##  Select Menu/ Content Injection Code ## */

function populateSelectCategories() {// boilerplate. needs to be fleshed out
  fetch('categories.json') // Replace with your actual JSON file path
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('category-select');

      // Clear any existing options
      selectElement.innerHTML = '';

      // Dynamically create list items for each category
      data.forEach(category => {
        const newOption = document.createElement('option');
        newOption.textContent = category.label;
        newOption.value = category.value;
        selectElement.appendChild(newOption);
      });
    });
}

function handleSelectMenuClick(event, menus) {
  const clicked = event.target;
  const parent = clicked.parentElement;
  let selectMenu;

  //fix 1st option selection bug
  //add home page option here? or in the header?
  //add functionality for overlay
  //still need to handle enabling animations menu once category is chosen
  //potential  need to fix 2 click necessity when other select menu is displayed and clickable
  //add function call for updating local storage and populating animation menu when animation menu item is clicked
  function orchestrateSelection() {
    if (
      !clicked.classList.contains("select-menu") &&
      !parent.classList.contains("select-menu")
    ) {
      const currentlySelected = parent.querySelector(".selected");
      //no need to reload display if already selected
      //something wrong with logic here...
      if (currentlySelected && currentlySelected === clicked) {
        parent.style.display === "none";
        return;
      } else if (currentlySelected && !currentlySelected === clicked) {
        currentlySelected.classList.remove("selected");
      }
      clicked.classList.add("selected");
      const optionsList = clicked.parentElement;
      const selectMenu = optionsList.parentElement;
      const currentSelectionLabel =
        selectMenu.querySelector(".current-selection");
      currentSelectionLabel.innerText = clicked.innerText;
      //handle page load/reload once there are pages to load!!!!!!!!!!!!!!!!!!!!!!!!!!
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

  //This function is not ready, it's boilerplate code.
  function populateAnimationList() {
    const selectCategory = document.getElementById("category-select");
    const selectItems = document.getElementById("item-select");
    const selectedCategory = this.value; // Get the selected category

    // Clear the second select menu before populating with new items
    selectItems.innerHTML = "";

    // Access the corresponding list of items based on the selected category
    const itemsList = data[selectedCategory].items;

    // Loop through each item and populate the second select menu
    for (const item of itemsList) {
      const newOption = document.createElement("option");
      newOption.textContent = item.label;
      newOption.value = item.value;
      selectItems.appendChild(newOption);
    }
  }

  //boilerplate code. Needs to be refactored
  async function handleGistContent() {
    // Replace "temp-content.json" with your desired filename
    const tempJsonFile = "temp-content.json";

    //boilerplate code. Needs to be refactored
    async function saveToTempJson(contentObject) {
      const stringifiedContent = JSON.stringify(contentObject);
      try {
        await fetch(tempJsonFile, {
          method: "PUT",
          body: stringifiedContent,
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error saving content to JSON:", error);
      }
    }

    //boilerplate code. Needs to be refactored
    async function populateAndInjectContent(gistContent) {
      if (!gistContent) return; // Check for null content

      // Parse JSON content into object
      const contentObject = JSON.parse(gistContent);

      // Access specific properties from the object for injection (e.g., HTML, CSS)
      const htmlContent = contentObject.html;
      const cssContent = contentObject.css;

      // Select target element(s) in your HTML where to inject content
      const contentContainer = document.getElementById("content-container");
      const styleElement = document.getElementById("style-element");

      // Inject HTML content
      contentContainer.innerHTML = htmlContent;

      // Inject CSS content (assuming you have a style element)
      styleElement.textContent = cssContent;
    }

    //boilerplate code. Needs to be refactored
    try {
      const response = await fetch(gistUrl);
      const data = await response.json();
      return data.files["content.json"].content; // Assuming content is in "content.json" file
      populateAndInjectContent();
      saveToTempJson();
    } catch (error) {
      console.error("Error fetching Gist content:", error);
      // Handle error gracefully (e.g., display message to user)
      return null;
    }
  }

  orchestrateSelection();
}


/* ## Event Listeners ##  */

document.addEventListener("DOMContentLoaded", () => {
  populateSelectCategories();
  const menus = document.querySelectorAll(".select-menu");
  menus.forEach((menu) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      handleSelectMenuClick(event, menus);
    });
  });

  
  /*const checkBoxes = document.querySelectorAll(".toggle-checkbox");
  checkBoxes.forEach((checkbox) => { //boilerplate code. Needs to be refactored
      checkbox.addEventListener('click',(event) => {
          console.log(checkbox);
      });
  });

  const sliders = document.querySelectorAll(".slider");
  sliders.forEach((slider) => {//boilerplate code. Needs to be refactored
      slider.addEventListener('input',(event) => {
          console.log(slider);
      });
  });

  const buttons = document.querySelectorAll(".sb-button");
  buttons.forEach((button) => { //boilerplate code. Needs to be refactored
      button.addEventListener('click',(event) => {
          console.log(button);
      });
  });*/

  const HBButton = document.querySelector("#hamburger-menu");
  let open = true;
  const sideMenu = document.querySelector("aside");
  HBButton.addEventListener('click',(event) => {
      if (open) {
          sideMenu.style.transform = 'translateX(-100%)'; 
          open = false;
      } else {
          sideMenu.style.transform = 'translateX(0)'; 
          open = true;
      }
  });
});

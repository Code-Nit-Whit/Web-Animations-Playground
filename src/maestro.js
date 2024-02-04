/*  Ctrl + K + 0 To Fold all regions,
    Ctrl + K + 9 To Unfold all regions  (VS Code)*/

//#region Header Comment
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
//#endregion 

//#region Global Variables
const sideMenu = document.querySelector("aside");
const popOutScreen = document.getElementById("param-screen-container");
const playbackControls = document.getElementById("controls-container");
const dragHandle = document.getElementById("draggable-handle");
const dragHandleArrow = document.getElementById("popout-arrow");
const dragTexture = document.querySelector("#drag-texture");

let sideMenuOpen = true; //Side Menu
let controlsOpen = false; //Playback Controls
let dragging = false; //Drag Handle -> Popout Screen
let screenDraggable = false; //Drag Handle Arrow -> Popout Screen, also used in side menu toggle funciton
let poppedOut = false;
//#endregion

//*************************************
//#region ANIMATIONS LIST & Variables
/* List
hideSideMenu, hideScreen (currently in related funciton)
slideDragHandleOut, scaleDragHandleDown,
popScreenOut, moveScreen, moveScreenBack,
FUTURE: showPlaybackMenu, shiftScreenForTray(might just popout automaticall for tray display)
*/
const menuHideDuration = 1000;
const menuHideEasing = "ease-out";
const handleScaleDuration = 500;
const handleScaleEasing = "ease-in-out";
const handleSlideDuration = 1000;
const handleSlideEasing = "ease-in";
const screenPopDuration = 500;
const screenPopEasing = "ease-in";
const screenMoveDuration = 1000;
const screenMoveEasing = "ease-out";
//#endregion
//*************************************
//#region Animation Object Definitionsk
    //   #region SideMenu/Screen- Hide 
    const menuHideKeyframes = new KeyframeEffect(
      sideMenu,
      [
        { transform: 'translate(0)' },
        { transform: 'translate(-400px)' }
      ],
      {
        duration: menuHideDuration,
        fill:"both",
        easing: menuHideEasing
      }
    );
    const screenHideKeyframes = new KeyframeEffect(menuHideKeyframes);
    screenHideKeyframes.target = popOutScreen;
    const hideSideMenu = new Animation(menuHideKeyframes);
    const hideScreen = new Animation(screenHideKeyframes);
    //   #endregion

    //   #region Drag Handle- Slide Out (for Dragging) 
    const dragHandleSlideOutKeyframes = new KeyframeEffect (
      dragHandle,
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-40px)' }
      ],
      {
        duration: handleSlideDuration,
        easing: handleSlideEasing,
        fill: 'both'
      }
    );
    const slideDragHandleOut = new Animation(dragHandleSlideOutKeyframes);
    //   #endregion

    //   #region Drag Handle- Scale Down (for Dragging) 
    const dragHandleScaleDownKeyframes = new KeyframeEffect(
      dragHandle,
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.8)' }
      ],
      {
        duration: handleScaleDuration,
        easing: handleScaleEasing,
        fill: 'both'
      }
    );
    const scaleDragHandleDown = new Animation(dragHandleScaleDownKeyframes);
    //   #endregion

    //   #region Screen- Popout (for Dragging)
    const screenPopOutKeyframes = new KeyframeEffect(
      popOutScreen,
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.05)' }
      ],
      {
        duration: screenPopDuration,
        easing: screenPopEasing,
        fill: 'both'
      }
    );
    const popScreenOut = new Animation(screenPopOutKeyframes);
    //   #endregion

    //   #region Screen- Move (Popout -> for Dragging) 
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const currentRect = popOutScreen.getBoundingClientRect();
    const initialTranslateX = currentRect.left;
    const initialTranslateY = currentRect.top;
    const targetTranslateX = (screenWidth - currentRect.width) / 2;
    const targetTranslateY = (screenHeight - currentRect.height) / 2;
    const screenMoveKeyframes = new KeyframeEffect( 
      popOutScreen,
      [
        { transform: `translate(0)` },
        { transform: `translate(${targetTranslateX}px, ${targetTranslateY}px)` }
      ],
      {
        duration: screenMoveDuration,
        easing: screenMoveEasing,
        fill: 'forwards'
      }
    );
    const moveScreen = new Animation(screenMoveKeyframes);
    //   #endregion

    //   #region Screen- Reverse Move (Popout -> for Dragging) 
const reverseScreenMoveKeyframes = new KeyframeEffect(
popOutScreen,
  [
    { transform: `translate(0)` },
    { transform: `translate(${initialTranslateX}px, ${initialTranslateY}px)` }
  ],
  {
    duration: screenMoveDuration,
    easing: screenMoveEasing,
    fill: 'forwards'
  }
);
const moveScreenBack = new Animation(reverseScreenMoveKeyframes);
//   #endregion
//#endregion
//*************************************

//#region Select Menu/Content Injection Functions
/*function populateSelectCategories() {// boilerplate. needs to be fleshed out
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
}*/

function handleSelectMenuClick(event, menus) {
  const clicked = event.target;
  const parent = clicked.parentElement;
  let selectMenu;

  /* ##  Logic for handling select menu clisk and current selection  ## */
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
  /* ## Animation Select Menu Population  ## */
  /*function populateAnimationList() {
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
    }*/

  //boilerplate code. Needs to be refactored
  /* ##  Gist Content/ Injection Management Functions ## */
  /*async function handleGistContent() {
          // Replace "temp-content.json" with your desired filename
          const tempJsonFile = "session.json";

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
          }*/

  //boilerplate code. Needs to be refactored
  /*try {
            const response = await fetch(gistUrl);
            const data = await response.json();
            populateAndInjectContent();
            saveToTempJson();
            return data.files["content.json"].content; // Assuming content is in "content.json" file
          } catch (error) {
            console.error("Error fetching Gist content:", error);
            // Handle error gracefully (e.g., display message to user)
            return null;
          }*/

  orchestrateSelection();
}
//#endregion

//#region Misc Hide/Display
/* ## Side Menu Open/Close  ## */
function toggleSideMenuDisplay() {
    function toggleMenuAndScreen(opening, toggleScreen) {
      if (opening) {
        hideSideMenu.reverse();
        //hideSideMenu.onfinish = function () {hideSideMenu.commitStyles()};
        if (toggleScreen) {hideScreen.reverse();}
      }
      else {
        hideSideMenu.play();
        //hideSideMenu.onfinish = function () {hideSideMenu.commitStyles()};
        if (toggleScreen) {hideScreen.play();}
        console.log("wtf");
      }
      //if(toggleScreen) {hideScreen.onfinished = function () {hideScreen.commitStyles()};}
      sideMenuOpen = !sideMenuOpen;
  }

  if (!sideMenuOpen && !screenDraggable) {
      toggleMenuAndScreen(true, true);
    } else if (!sideMenuOpen && screenDraggable) {
      toggleMenuAndScreen(true, false)
    } else if(sideMenuOpen && !screenDraggable) {
      toggleMenuAndScreen(false, true);
    } else {
      toggleMenuAndScreen(false, false);
    } 
}

/* ##  Playback Controls Open/Close  ## */
function togglePlaybackControlsDisplay() {
  function toggleDisplay(transformValue) {
    playbackControls.style.transform = `translateY(${transformValue})`;
    controlsOpen = !controlsOpen;
  }

  if (!controlsOpen) {
    toggleDisplay("130px");
  } else {
    toggleDisplay("0px");
  }
}
//#endregion

//#region Screen Dragging
/* ##  Handle Screen Draggability/ Pop Out  ## */
function toggleScreenDraggability() {
  /* ##  Pop Out Screen  ## */ //make screen draggable
  function popOut() {
    //dont forget to display extra side menu controls
    scaleDragHandleDown.play();
    scaleDragHandleDown.onfinish = () => {
      slideDragHandleOut.play();
    };
    slideDragHandleOut.onfinish = () => {
      scaleDragHandleDown.reverse();
      scaleDragHandleDown.onfinish = () => {
        popScreenOut.play();
      }; 
      popScreenOut.onfinish = () => {
        moveScreen.play();    
      };
    };
  }

  /* ##  Pop In Screen  ## */
  function popIn() {
    // dont forget to to hide extra side menu controls
    scaleDragHandleDown.play();
    scaleDragHandleDown.onfinish = () => {
      slideDragHandleOut.reverse();
    };
    slideDragHandleOut.onfinish = () => {
      scaleDragHandleDown.reverse();
      scaleDragHandleDown.onfinish = () => {
        moveScreenBack.play();
      }; 
      moveScreenBack.onfinish = () => {
        popScreenOut.reverse();    
      };
    };
  }

  if (!screenDraggable) {
    popOut();
  } else {
    if (!sideMenuOpen) {
      toggleSideMenuDisplay();
    }
    popIn();
  }
}

/* ##  Handle Dragged Popout Screen Position  ## */
function handleScreenDrag() {
  dragTexture.addEventListener("pointerdown", dragStart);

  let initialX, initialY;

  function dragStart(event) {
    if (screenDraggable) {
      dragging = true;
      initialX = event.clientX - popOutScreen.offsetLeft;
      initialY = event.clientY - popOutScreen.offsetTop;
      document.addEventListener("pointermove", drag);
      document.addEventListener("pointerup", dragEnd);
    }
  }

  function dragEnd() {
    dragging = false;
    document.removeEventListener("pointermove", drag);
    document.removeEventListener("pointerup", dragEnd);
  }

  function drag(event) {
    if (dragging && screenDraggable) {
      const deltaX = event.clientX - initialX;
      const deltaY = event.clientY - initialY;
      // Update the position of the handle
      popOutScreen.style.left = `${deltaX}px`;
      popOutScreen.style.top = `${deltaY}px`;
    }
  }
}
//#endregion

/* ## On-Load Setup/ Main Event Listeners  ##  */
document.addEventListener("DOMContentLoaded", () => {
  /* ##  Event Listener Variables  ## */
  const SMHamburgerButton = document.querySelector("#hamburger-menu");
  const SMCollapseButton = document.querySelector("#collapse-button");
  const playbackControlsToggle = document.getElementById("controls-slide-tab");
  const mainBody = document.getElementById("body-container");
  const header = document.querySelector("header");

  /* ##  Setup Function Calls  ## */
  //populateSelectCategories();

  /* ##  Event Listeners to be converted  ## */
  /*const menus = document.querySelectorAll(".select-menu");
  menus.forEach((menu) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
      handleSelectMenuClick(event, menus);
    });
  });

  const checkBoxes = document.querySelectorAll(".toggle-checkbox");
  checkBoxes.forEach((checkbox) => { //boilerplate code. Needs to be refactored
      checkbox.addEventListener('click',(event) => {
          event.stopPropagation();
          console.log(checkbox);
      });
  });

  const zoomSlider = document.querySelector("#zoom-slider");
  const speedSlider = document.querySelector("#speed-slider");
  zoomSlider.addEventListener('input',(event) => {
      event.stopPropagation();
      console.log(zoomSlider);
  });
  speedSlider.addEventListener('input',(event) => {
      event.stopPropagation();
      console.log(zoomSlider);
  })


  const buttons = document.querySelectorAll(".sb-button");
  buttons.forEach((button) => { //boilerplate code. Needs to be refactored
      button.addEventListener('click',(event) => {
          console.log(button);
      });
  });*/

  /* ##  Header Click Events  ## */
  header.addEventListener("click", (event) => {
    if (event.target === SMHamburgerButton) {
      toggleSideMenuDisplay();
    }
  });

  /* ##  Main Body Click Events  ## */
  mainBody.addEventListener("click", (event) => {
    console.log(event.target);
    /* ##  Hamburder Icon Button/ Ellipses Button  ## */
    if (event.target === SMCollapseButton) {
      toggleSideMenuDisplay();
      /* ##  Playback Controls Handle Thingy  ## */
    } else if (event.target === playbackControlsToggle) {
      togglePlaybackControlsDisplay();
      /* ##  Popout Arrow, toggle draggability ## */
    } else if (event.target === dragHandleArrow) {
      toggleScreenDraggability();
    } else {
      return;
    }
  });
});

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
//#endregion

//**************************************************************************
//#region ANIMATION OBJECTS LIST:
/*  
    dragHandleSlideOutAnimation, dragHandleScaleDownAnimation
    screenPopOutAnimation, screenMoveAnimation, reverseScreenMoveAnimation,
    sideMenuHideAnimation, screenHideAnimation
*/
//#endregion
//#region Animation Object Definitions  !!!!NEED TO CHANGE PROPERTY AND CLASS VALUES TO WORK!!!!!
/* Drag Handle- Slide Out */
const computedStyles = window.getComputedStyle(dragHandle);
const keyframes = [
  { transform: computedStyles.getPropertyValue('transform') },
  { transform: 'translateX(40px)' }
];
const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
};
const dragHandleSlideOutAnimation = new Animation(new KeyframeEffect(dragHandle, keyframes, options), document.timeline);

/* Drag Handle- Scale down */
const dragHandleScaleDownStyles = window.getComputedStyle(dragHandle);
const dragHandleScaleDownKeyframes = [
  { transform: dragHandleScaleDownStyles.getPropertyValue('transform') },
  { transform: 'scale(0.8)' }
];
const dragHandleScaleDownOptions = {
  duration: 500,
  easing: 'ease',
  fill: 'forwards'
};
const dragHandleScaleDownAnimation = new Animation(new KeyframeEffect(dragHandle, dragHandleScaleDownKeyframes, dragHandleScaleDownOptions), document.timeline);

/* Screen- Popout*/
const screenPopOutStyles = window.getComputedStyle(popOutScreen);
const screenPopOutKeyframes = [
  { transform: screenPopOutStyles.getPropertyValue('transform') },
  { transform: 'scale(1.05)' }
];
const screenPopOutOptions = {
  duration: 500,
  easing: 'ease',
  fill: 'forwards'
};
const screenPopOutAnimation = new Animation(new KeyframeEffect(popOutScreen, screenPopOutKeyframes, screenPopOutOptions), document.timeline);

/* Screen- Move */
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const currentRect = popOutScreen.getBoundingClientRect();
const initialTranslateX = currentRect.left;
const initialTranslateY = currentRect.top;
const targetTranslateX = (screenWidth - currentRect.width) / 2;
const targetTranslateY = (screenHeight - currentRect.height) / 2;
const screenMoveKeyframes = [
  { transform: `translate(${initialTranslateX}px, ${initialTranslateY}px)` },
  { transform: `translate(${targetTranslateX}px, ${targetTranslateY}px)` }
];
const screenMoveOptions = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
};
const screenMoveAnimation = new Animation(
  new KeyframeEffect(popOutScreen, screenMoveKeyframes, screenMoveOptions),
  document.timeline
);
// Reverse screen move animation
function reverseScreenMoveAnimation() {
  const reverseScreenMoveKeyframes = [
    { transform: `translate(${targetTranslateX}px, ${targetTranslateY}px)` },
    { transform: `translate(${initialTranslateX}px, ${initialTranslateY}px)` }
  ];
  const reverseScreenMoveAnimation = new Animation(
    new KeyframeEffect(popOutScreen, reverseScreenMoveKeyframes, screenMoveOptions),
    document.timeline
  );
}

/* Side Menu- Hide */ 
const sideMenuHideStyles = window.getComputedStyle(sideMenu);
const sideMenuHideKeyframes = [
  { transform: sideMenuHideStyles.getPropertyValue('transform') },
  { transform: 'translate(0)' }
];
const sideMenuHideOptions = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
};
const sideMenuHideAnimation = new Animation(new KeyframeEffect(sideMenu, sideMenuHideKeyframes, sideMenuHideOptions), document.timeline);

/* Screen- Hide */
const screenHideAnimation = new Animation(new KeyframeEffect(popOutScreen, sideMenuHideKeyframes, sideMenuHideOptions), document.timeline);
//#endregion
//***********************************
//#region ANIMATION TIMELINES LIST:
/*  screenPopOutTLine, screenPopInTLine,
    sMenuAndScreenDisplayTLine (<- with screen) (use sideMenuHideAnimation for just the menu)
*/
//#endregion
//#region Animation Timeline Definitions
/* Screen- Pop Out/ Make Draggable */
// Create animation timeline
const screenPopOutTLine = new AnimationTimeline();
screenPopOutTLine.append(animation1, animation2);

/* Screen- Pop In/ Return to Side Menu */
const screenPopInTLine = new AnimationTimeline();
screenPopInTLine.append(animation1, animation2);

/* Side Menu & Screen- Display */ 
const sMenuDisplayTLine1 = new AnimationTimeline();
sMenuDisplayTLine1.append(animation1, animation2);

//#endregion
//***************************************************************************

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
function handleSideMenuDisplay() {
  function toggleDisplay(transformValue) {
    if (!screenDraggable) {
      popOutScreen.style.transform = `translateX(${transformValue})`;
    }
    sideMenu.style.transform = `translateX(${transformValue})`;
    sideMenuOpen = !sideMenuOpen;
    console.log('end of side menu display toggle');
  }

  if (sideMenuOpen) {
    toggleDisplay("-400px");
  } else {
    toggleDisplay("0px");
  }
}

/* ##  Playback Controls Open/Close  ## */
function handlePlaybackControlsDisplay() {
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
function handleScreenDraggability() {
  let originalLeft, originalTop;
  screenDraggable = false;
  let poppedOut = true; //set true before popout, false before popin
  let readyPopin = false; //controls animation listeners for popin

  /* ##  Pop Out Screen  ## */ //make screen draggable
  function paramScreenPopOut() {
    poppedOut = false;
    originalLeft = popOutScreen.getBoundingClientRect().left;
    originalTop = popOutScreen.getBoundingClientRect().top;
    dragHandle.classList.add("slid-out"); //animates the revealing of drag handle w/ keyframes css
    dragHandle.classList.remove("slid-in");
    dragHandleArrow.classList.add("popped-out-arrow"); //roates arrow 180 no transition/animation
    dragHandleArrow.classList.remove("popped-in-arrow");
    popOutScreen.classList.remove("popped-in-screen");
    popOutScreen.classList.add("popped-out-screen"); //transitioned scaling up to simulate popping out of side menu
    handleScreenDrag();
    screenDraggable = true;
  }

  /* ##  Close Draggable Handle  ## */ //make screen not draggable
  function dragHandleClose() {
    console.log("drag handle close funciton fired");
    dragHandle.classList.add("slid-in"); //animates the hiding of drag handle w/ keyframes css
    dragHandle.classList.remove("slid-out");
    dragHandleArrow.classList.add("popped-in-arrow"); //torates it back- no transition/animation
    dragHandleArrow.classList.remove("popped-out-arrow");
  }

  /* ##  Pop In Screen  ## */
  function paramScreenMove() {
    //transitoned move back to original position
    const currentLeft = popOutScreen.getBoundingClientRect().left;
    const currentTop = popOutScreen.getBoundingClientRect().top;
    const deltaX = originalLeft - currentLeft;
    const deltaY = originalTop - currentTop;
    popOutScreen.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    readyPopin = true;
  }

  function paramScreenPopIn() {
    popOutScreen.classList.add("popped-in-screen"); //animates scaling down to simulate popping into side menu
    popOutScreen.classList.remove("popped-out-screen");
    dragHandle.removeEventListener("animationend", handleAnimation);
    popOutScreen.removeEventListener("transitionend", handleAnimation); //removes these until next function call
    screenDraggable = false;
    readyPopin = false;
  }

  dragHandle.addEventListener("animationend", handleAnimation);
  popOutScreen.addEventListener("transitionend", handleAnimation);
  function handleAnimation(event) {
    // Check if the specific animation you're interested in has ended
    if (event.animationName && event.animationName === "slide-in") {
      console.log("slide-in animation ended, event triggered");
      paramScreenMove(); // waits until popoutscreen's dragHandle is put away to move back home in case the child elem affects positioning.
    } else if (event.propertyName === "transform" && readyPopin ) {
      console.log("screenmove transition ended, event triggered");
      paramScreenPopIn(); //waits until the screen is back in home position until simulating pop into side menu
    }
  }

  if (!screenDraggable) {
    poppedOut = true;
    paramScreenPopOut();
    handleSideMenuDisplay();
  } else {
    poppedOut = false;
     //removes these until next function call
    if (!sideMenuOpen) {
      handleSideMenuDisplay();
    }
    console.trace();
    dragHandleClose();
    console.log("got to end of conditional without triggering closing draghanddle?");
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

/* ## Global Event Listeners/ On-Load Setup  ##  */
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
      handleSideMenuDisplay();
    }
  });

  /* ##  Main Body Click Events  ## */
  mainBody.addEventListener("click", (event) => {
    console.log(event.target);
    /* ##  Hamburder Icon Button/ Ellipses Button  ## */
    if (event.target === SMCollapseButton) {
      handleSideMenuDisplay();
      /* ##  Playback Controls Handle Thingy  ## */
    } else if (event.target === playbackControlsToggle) {
      handlePlaybackControlsDisplay();
      /* ##  Popout Arrow, toggle draggability ## */
    } else if (event.target === dragHandleArrow) {
      handleScreenDraggability();
    } else {
      return;
    }
  });
});

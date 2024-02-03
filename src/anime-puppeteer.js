/*
Future Plans:
- Explore how the use of the Web Animations API and libraries might affect the information gathered.
- Discuss how the Web Animations API can be applied to the animated elements gathered and manipulated.
- Investigate methods to determine if individual animations are part of a larger animation timeline object or other grouping of animations.
- Reflecting larger animation groupings (and all levels of nested groupings) in the data stored, allowing selection of the grouping (or nested grouping) or the individual animation

Additional Considerations to Explore:
- Consideration of browser compatibility and fallbacks for animations within the web app.
- Optimization techniques for smoother imported animation performance within the app.
- Integration with other JavaScript libraries or frameworks for enhanced capabilities on imported animations.
- Strategies for handling complex animation sequences and interactions.
- Best practices for accessibility and ensuring imported animations and controls are inclusive.
*/


// #region Gathering Animations from Imported Animations
// Function to gather details about all elements within a Shadow DOM
function gatherDetailsForAllElements(shadowRoot) {
    const allElements = shadowRoot.querySelectorAll('*');
    const elementsInfo = {}; // Object to store element details

    allElements.forEach((element, index) => {
        const elementName = `Element${index + 1}`;
        // Add data-element-key attribute and set its value
        element.setAttribute('data-element-key', elementName);

        // Gather information about the element
        const elementInfo = {
            dataElementKey: elementName, // Add data-element-key attribute
            id: element.id || "Not Provided",
            tagType: element.tagName,
            classes: Array.from(element.classList).length > 0 ? Array.from(element.classList) : ["Not Provided"],
            animations: {} // Object to store animations/transitions
        };

        // Store element information in the object
        elementsInfo[elementName] = elementInfo;

        // Gather animation details for the element
        gatherAnimationDetails(element, elementInfo.animations);
    });

    // Return the object containing details about all elements and their animations
    return elementsInfo;
}

// Function to gather animation details for an element
function gatherAnimationDetails(element, animations) {
    const computedStyles = window.getComputedStyle(element);
    const animationProperties = computedStyles.animation || "Not Provided";
    const transitionProperties = computedStyles.transition || "Not Provided";

    // Extract animation details
    if (animationProperties !== "none" && animationProperties !== "Not Provided") {
        const animationsArray = animationProperties.split(',').map((animation, index) => {
            const animationDetails = animation.trim().split(' ');
            return {
                type: "Animation",
                name: animationDetails[0] || "Not Provided",
                duration: animationDetails[1] || "Not Provided",
                timingFunction: animationDetails[2] || "Not Provided",
                delay: animationDetails[3] || "Not Provided",
                iterationCount: animationDetails[4] || "Not Provided",
                direction: animationDetails[5] || "Not Provided",
                fillMode: animationDetails[6] || "Not Provided",
                playState: animationDetails[7] || "Not Provided"
            };
        });
        animations[`Animation${Object.keys(animations).length + 1}`] = animationsArray;
    }

    // Extract transition details
    if (transitionProperties !== "Not Provided") {
        const transitionDetails = transitionProperties.split(',').map((transition, index) => {
            const transitionDetails = transition.trim().split(' ');
            return {
                type: "Transition",
                property: transitionDetails[0] || "Not Provided",
                duration: transitionDetails[1] || "Not Provided",
                timingFunction: transitionDetails[2] || "Not Provided",
                delay: transitionDetails[3] || "Not Provided"
            };
        });
        animations[`Animation${Object.keys(animations).length + 1}`] = transitionDetails;
    }
}

// Example usage: Gather details for all elements within a shadow root
const shadowRoot = document.querySelector('#your-shadow-root-id');
const elementsInfo = gatherDetailsForAllElements(shadowRoot);
console.log(elementsInfo); // Display the gathered information

//Example of returned obj
const exmampleAnimatedElementsObject = 
{
    "Element1": {
        "dataElementKey": "Element1", 
        "id": "myElement1",
        "tagType": "DIV",
        "classes": ["class1", "class2"],
        "animations": {
            "Animation1-1": {
                "type": "Animation",
                "name": "fadeIn",
                "duration": "1s",
                "timingFunction": "ease-in",
                "delay": "Not Provided",
                "iterationCount": "Not Provided",
                "direction": "Not Provided",
                "fillMode": "Not Provided",
                "playState": "Not Provided"
            }
        }
    },
    "Element2": {
        "dataElementKey": "Element2",
        "id": "myElement2",
        "tagType": "BUTTON",
        "classes": ["btn", "btn-primary"],
        "animations": {
            "Animation2-1": {
                "type": "Animation",
                "name": "slideDown",
                "duration": "0.5s",
                "timingFunction": "ease-out",
                "delay": "Not Provided",
                "iterationCount": "Not Provided",
                "direction": "Not Provided",
                "fillMode": "Not Provided",
                "playState": "Not Provided"
            },
            "Animation2-2": {
                "type": "Transition",
                "property": "opacity",
                "duration": "1s",
                "timingFunction": "linear",
                "delay": "Not Provided"
            }
        }
    }
}
// #endregion

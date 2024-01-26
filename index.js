  function revealLabel(iconLabelClass) {
      const iconLabel=document.querySelector(iconLabelClass);
      if(window.getComputedStyle(iconLabel).display==='none') {
        iconLabel.style.display='block';
        iconLabel.style.opacity='0';
        anime({
          targets: iconLabel,
          opacity: 1,
          duration: 3000,
          easing: 'easeOutQuad'
        })
      }
      checkLabels();
    }

    function scrambleIcon(icon) {
      const paths=icon.querySelectorAll("path");
      const originalDValues=[];
      const iconID=icon.getAttribute("id");
      const iconLabelClass="."+iconID+"-label";

      paths.forEach((path,i) => {
        const className=`path${i+1}`;
        path.classList.add(className);
        if(path.getAttribute("d")) {
          originalDValues.push(path.getAttribute("d"));
          path.setAttribute("transform","translate(0, 0)");
        }
      });

      paths.forEach((path,i) => {
        const randomX=Math.random()*50-25;
        const randomY=Math.random()*50-25;
        const randomCoordinates=randomX+","+randomY;

        if(path.getAttribute("d")) {
          const pathDValue=path.getAttribute("d");
          const regexPattern=/^([Mm]\s*)([^A-Za-z].*?)(?=[A-Za-z])/;
          const match=pathDValue.match(regexPattern);

          if(match) {
            let coordinatesString;
            if(match[0][0]===match[0][0].toUpperCase()) {
              coordinatesString=match[0][0].toLowerCase()+randomCoordinates;
            } else {
              coordinatesString=match[0][0].toUpperCase()+randomCoordinates;
            }
            const newDValue=pathDValue.replace(regexPattern,coordinatesString);
            path.setAttribute("d",newDValue);
          }
        }
      })

      // Reassemble on hover (using original "d" values)
      icon.addEventListener("mouseenter",() => {
        paths.forEach((path,i) => {
          const className=`path${i+1}`;
          if(path.getAttribute("d")) {
            anime({
              targets: path,
              d: originalDValues[i],
              duration: 500,
              easing: "easeOutElastic",
            });
            setTimeout(() => {
              revealLabel(iconLabelClass);
            },300);
          }
        });
      });
    }

    function checkLabels() {
      const labels=document.querySelectorAll(".icon-label");
      let allVisible=true;
      labels.forEach((label) => {
        if(window.getComputedStyle(label).display==='none') {
          allVisible=false;
        }
      })
      if(allVisible) {
        //this is where i want to call the new animation function for the anime icon. this should be done dynamically based on the current state of all four icons.
        // if thery are reassembled, call the new animation function.
        animateOrbit();
      }
    }

    //animateWordUnscramble
    function animateWordUnscramble() {

    }

    //Animate Anime.js logo appearance
    function animateAnime() {

    }

    //NEEEED TO FINISH
    function animateOrbit() {
      // Select the two SVG elements using their IDs or classes
      const svg1=document.getElementById('javascript-icon');
      const svg2=document.getElementById('html-icon');
      const svg3=document.getElementById('css-icon');
      const svg4=document.getElementById('inkscape-icon');
      const svg1Label=document.querySelector('.javascript-label');
      const svg2Label=document.querySelector('.html-label');
      const svg3Label=document.querySelector('.css-label');
      const svg4Label=document.querySelector('.inkscape-label');
      const windowWidth=window.innerWidth;
      const windowHeight=window.innerHeight;
      const svg1Rect=svg1.getBoundingClientRect();
      const svg1Left=iconRect.left;
      const svg1Top=iconRect.top;

      // Set initial positions
      //anime.set([svg1,svg2,svg3,svg4],{ translateX: '-100%',translateY: '100%' });

      // Configure the animation timeline
      const animationOptions={
        targets: svg1,
        translateX: ['0%','100%','0%'], // Move from left to right and back to left
        easing: 'easeOutCubic', // Slow down at the middle
        duration: 2000, // Adjust animation duration
        loop: true, // Loop indefinitely
      };
      anime(animationOptions);
    }

    document.addEventListener("DOMContentLoaded",() => {
      const icons=document.querySelectorAll("div div div a svg.icon");
      icons.forEach((icon) => {
        scrambleIcon(icon);
      });
    });
    document.addEventListener("DOMContentLoaded",() => {
      const dropdown=document.querySelector('.wrapper-dropdown-1');
      const toggle=document.querySelector('.dropdown-toggle');
      const options=document.querySelector('.dropdown');
      const anime=document.querySelector('#anime-icon');
      const animeLabel=document.querySelector('.special-label');
      anime.style.visibility="hidden";
      animeLabel.style.display="none";
      const labels=document.querySelectorAll(".icon-label");
      labels.forEach(label => {
        label.style.display="none";
      });
      // Add event listener to toggle dropdown
      toggle.addEventListener('click',() => {
        options.classList.toggle('hidden');
      });
    });
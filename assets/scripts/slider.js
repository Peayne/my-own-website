if (document.body.classList.contains("home") == false) {
    var slider = document.querySelector(".slider"); // récup' le UL
    var sliderEl = slider.children; // récup' les LI
    var sliderSize = sliderEl.length; // récup' le nombre d'éléments
    var prev = document.querySelector(".slide__left");
    var next = document.querySelector(".slide__right");
    var value = slider.style.width = 100 * sliderSize;
    var sliderWidth = value + "%";
    var initialPosition = slider.style.transform = 0;
    var calculPosition;
    var index = 1;
}

if (document.body.classList.contains("illus")) {

    var x = window.matchMedia("(max-width: 499px)")
    x.addListener(sliderElement) // Attach listener function on state changes
    sliderElement(x) // Call listener function at run time

    function sliderElement(x) {
        if (x.matches) { // If media query matches
            next.addEventListener("click", function() {
            if (index < sliderSize) {
                calculPosition = initialPosition - 100;
                initialPosition = calculPosition;
                slider.style.transform = "translateX("+ initialPosition + "%)" ;
                index++;
            } else if (index == sliderSize) {
                index = 1;
                initialPosition = slider.style.transform = 0;
                slider.style.transform = "translateX("+ initialPosition + "%)";
                calculPosition = 0;
            }
        });
        
            prev.addEventListener("click", function() {
                if (index > 1) {
                    calculPosition = initialPosition + 100;
                    initialPosition = calculPosition;
                    slider.style.transform = "translateX("+ initialPosition + "%)";
                    index--;
                } else if (index == 1) {
                    initialPosition = -(value - 100);
                    slider.style.transform = "translateX("+ initialPosition + "%)";
                    index = sliderSize;
                    calculPosition = -(value - 100);
                }
            });
        } else {
            sliderSize = 3;
            next.addEventListener("click", function() {
            if (index < sliderSize) {
                calculPosition = initialPosition - 100;
                initialPosition = calculPosition;
                slider.style.transform = "translateX("+ initialPosition + "%)" ;
                index++;
            } else if (index == sliderSize) {
                index = 1;
                initialPosition = slider.style.transform = 0;
                slider.style.transform = "translateX("+ initialPosition + "%)";
                calculPosition = 0;
            }
        });
        
            prev.addEventListener("click", function() {
                value = slider.style.width = 100 * sliderSize;
                if (index > 1) {
                    calculPosition = initialPosition + 100;
                    initialPosition = calculPosition;
                    slider.style.transform = "translateX("+ initialPosition + "%)";
                    index--;
                } else if (index == 1) {
                    initialPosition = -(value - 100);
                    slider.style.transform = "translateX("+ initialPosition + "%)";
                    index = sliderSize;
                    calculPosition = -(value - 100);
                }
            });
        }
    }

} else if (document.body.classList.contains("projets")) {
    next.addEventListener("click", function() {
        if (index < sliderSize) {
            calculPosition = initialPosition - 100;
            initialPosition = calculPosition;
            slider.style.transform = "translateX("+ initialPosition + "%)" ;
            index++;
        } else if (index == sliderSize) {
            index = 1;
            initialPosition = slider.style.transform = 0;
            slider.style.transform = "translateX("+ initialPosition + "%)";
            calculPosition = 0;
        }
    });
    
    prev.addEventListener("click", function() {
        if (index > 1) {
            calculPosition = initialPosition + 100;
            initialPosition = calculPosition;
            slider.style.transform = "translateX("+ initialPosition + "%)";
            index--;
        } else if (index == 1) {
            initialPosition = -(value - 100);
            slider.style.transform = "translateX("+ initialPosition + "%)";
            index = sliderSize;
            calculPosition = -(value - 100);
        }
    });
}
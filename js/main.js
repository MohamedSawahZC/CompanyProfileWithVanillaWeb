console.log('Mohamed')
//-------------Adjust Slider Height----------------
let upper = document.querySelector('.upper-bar'),
    nav = document.querySelector('.navbar'),
    slider = document.querySelector('.slider'),
    inner = document.querySelectorAll('.carousel-item'),
    winH = window.innerHeight,
    getH = (winH - (upper.offsetHeight + nav.offsetHeight)),
    lis = document.querySelectorAll('.featured-work ul li');
slider.style.height = `${getH}px`;
for (var i = 0; i < 3; i++)
    inner[i].style.height = `${getH}px`;
//---------------------------Featured Work shuffle----------------------
var ALL = (allDiv) => {
    allDiv.forEach((dv) => {
        dv.style.opacity = 1;
    });
}
lis.forEach((li) => {
    console.log(li);
    li.addEventListener('click', (e) => {
        lis.forEach((li) => {
            li.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        var cls = e.currentTarget.classList[0],
            AllDiv = document.querySelectorAll('.shuffle-images .row div');
        if (cls === "all") {
            ALL(AllDiv);
        } else {
            ALL(AllDiv);
            AllDiv.forEach((dv) => {
                if (cls !== dv.classList[1])
                    dv.style.opacity = 0.2;
            });
        }
    });
});

//-------------Start Testimonial---------------------

'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    //------------Testim Script--------------
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    //----------------keyboard shortcuts--------------
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}

//-----------End Testimonials---------------
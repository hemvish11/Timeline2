gsap.registerPlugin(ScrollTrigger);
// ----------------------------------------------zoom-in out------------------------------------------------------------
function addZoomIn1() {
    const caseStudy = document.querySelector(".case1");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut1() {
    const caseStudy = document.querySelector(".case1");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn2() {
    const caseStudy = document.querySelector(".case2");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut2() {
    const caseStudy = document.querySelector(".case2");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn3() {
    const caseStudy = document.querySelector(".case3");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut3() {
    const caseStudy = document.querySelector(".case3");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn4() {
    const caseStudy = document.querySelector(".case4");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut4() {
    const caseStudy = document.querySelector(".case4");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn5() {
    const caseStudy = document.querySelector(".case5");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut5() {
    const caseStudy = document.querySelector(".case5");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn6() {
    const caseStudy = document.querySelector(".case6");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut6() {
    const caseStudy = document.querySelector(".case6");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}
function addZoomIn7() {
    const caseStudy = document.querySelector(".case7");
    caseStudy.classList.remove("zoomOut");
    caseStudy.classList.remove("hide");
    caseStudy.classList.add("zoomIn");

}
function addZoomOut7() {
    const caseStudy = document.querySelector(".case7");
    caseStudy.classList.remove("zoomIn");
    caseStudy.classList.add("zoomOut");
    caseStudy.classList.add("hide");
}

// --------------------------------------------------------------------------------------------------------------------------
ScrollTrigger.create({
    trigger: ".section1",
    start: "top 150%",
    // end: "top 0%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot7();
        toggleClass7();
        updateRingLength7();
        addZoomIn7();
        showAward2();
    },

    onLeave: () => {
        toggleClass7();
        addZoomOut7();
        hideAward2();
    },
    onEnterBack: () => {
        updateRingLength7();
        toggleClass7();
        addZoomIn7();
        showAward2();
    },
    onLeaveBack: () => {
        cleanDot7();
        toggleClass7();
        addZoomOut7();
        hideAward2();
    }

})
ScrollTrigger.create({
    trigger: ".section1",
    start: "top 250%",
    end: "top 150%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot6();
        toggleClass6();
        updateRingLength6();
        addZoomIn6();
    },
    onLeave: () => {
        toggleClass6();
        addZoomOut6();
    },
    onEnterBack: () => {
        updateRingLength6();
        toggleClass6();
        addZoomIn6();

    },
    onLeaveBack: () => {
        cleanDot6();
        toggleClass6();
        addZoomOut6();

    }
})
ScrollTrigger.create({
    trigger: ".section1",
    start: "top 350%",
    end: "top 250%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot5();
        toggleClass5();
        updateRingLength5();
        addZoomIn5();
    },
    onLeave: () => {
        toggleClass5();
        addZoomOut5();
    },
    onEnterBack: () => {
        updateRingLength5();
        toggleClass5();
        addZoomIn5();

    },
    onLeaveBack: () => {
        cleanDot5();
        toggleClass5();
        addZoomOut5();

    }


})
ScrollTrigger.create({
    trigger: ".section1",
    start: "top 450%",
    end: "top 350%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot4();
        toggleClass4();
        updateRingLength4();
        addZoomIn4();
    },
    onLeave: () => {
        toggleClass4();
        addZoomOut4();
    },
    onEnterBack: () => {
        updateRingLength4();
        toggleClass4();
        addZoomIn4();
    },
    onLeaveBack: () => {
        cleanDot4();
        toggleClass4();
        addZoomOut4();
    }
})

ScrollTrigger.create({
    trigger: ".section1",
    start: "top 550%",
    end: "top 450%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot3();
        toggleClass3();
        updateRingLength3();
        addZoomIn3();
    },
    onLeave: () => {
        toggleClass3();
        addZoomOut3();
    },
    onEnterBack: () => {
        updateRingLength3();
        toggleClass3();
        addZoomIn3();
    },
    onLeaveBack: () => {
        cleanDot3();
        toggleClass3();
        addZoomOut3();
    }
})



ScrollTrigger.create({
    trigger: ".section1",
    start: "top 650%",
    end: "top 550%",
    // scrub: 2,
    // 
    onEnter: () => {
        fillDot2();
        toggleClass2();
        updateRingLength2();
        addZoomIn2();
    },
    onLeave: () => {
        toggleClass2();
        addZoomOut2();
    },
    onEnterBack: () => {
        updateRingLength2();
        toggleClass2();
        addZoomIn2();
    },
    onLeaveBack: () => {
        cleanDot2();
        toggleClass2();
        addZoomOut2();
    }
})
ScrollTrigger.create({
    trigger: ".section1",
    start: "top 710%",
    end: "top 650%",
    // scrub: 2,
    // 
    onEnter: () => {
        toggleClass1();
        showAward1();
        updateRingLength1();
        addZoomIn1();
    },
    onLeave: () => {
        toggleClass1();
        hideAward1();
        addZoomOut1();
    },
    onEnterBack: () => {
        updateRingLength1();
        toggleClass1();
        showAward1();
        addZoomIn1();
    },
    onLeaveBack: () => {
        // cleanDot1();
        toggleClass1();
        showAward1();
        addZoomOut1();
    }
})
// ------------------------------------------------------------------------------------------------------------------
function fillDot2() {
    const dot = document.querySelector(".dot2");
    const shell = document.querySelector(".shell2");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot2() {
    const dot = document.querySelector(".dot2");
    const shell = document.querySelector(".shell2");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
function fillDot3() {
    const dot = document.querySelector(".dot3");
    const shell = document.querySelector(".shell3");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot3() {
    const dot = document.querySelector(".dot3");
    const shell = document.querySelector(".shell3");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
function fillDot4() {
    const dot = document.querySelector(".dot4");
    const shell = document.querySelector(".shell4");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot4() {
    const dot = document.querySelector(".dot4");
    const shell = document.querySelector(".shell4");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
function fillDot5() {
    const dot = document.querySelector(".dot5");
    const shell = document.querySelector(".shell5");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot5() {
    const dot = document.querySelector(".dot5");
    const shell = document.querySelector(".shell5");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
function fillDot6() {
    const dot = document.querySelector(".dot6");
    const shell = document.querySelector(".shell6");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot6() {
    const dot = document.querySelector(".dot6");
    const shell = document.querySelector(".shell6");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
function fillDot7() {
    const dot = document.querySelector(".dot7");
    const shell = document.querySelector(".shell7");
    dot.classList.add("filled-dot");
    shell.classList.add("dot-stroke");
}
function cleanDot7() {
    const dot = document.querySelector(".dot7");
    const shell = document.querySelector(".shell7");
    dot.classList.remove("filled-dot");
    shell.classList.remove("dot-stroke");
}
// ------------------------------------------------------------------------------------------------------------------

function updateRingLength1() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "0, 1000");
}
function updateRingLength2() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "142, 1000");
}
function updateRingLength3() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "284, 1000");
}
function updateRingLength4() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "416, 1000");
}
function updateRingLength5() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "535, 1000");
}
function updateRingLength6() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "670, 1000");
}
function updateRingLength7() {
    const ringLength = document.querySelector(".ring-length");
    ringLength.setAttribute("stroke-dasharray", "1000, 1000");
}
// ------------------------------------------------------------------------------------------------------------------
function showAward1() {
    const award1 = document.querySelector(".award1");
    award1.classList.remove("hide");
}
function hideAward1() {
    const award1 = document.querySelector(".award1");
    award1.classList.add("hide");
}

function showAward2() {
    const award1 = document.querySelector(".award2");
    award1.classList.remove("hide");
}
function hideAward2() {
    const award1 = document.querySelector(".award2");
    award1.classList.add("hide");
}
// ------------------------------------------------------------------------------------------------------------------


function toggleClass1() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["firstRight", "first", "firstLower"];
    const ring = document.querySelector("#transring");

    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);
    });
}


function toggleClass2() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["secondRight", "second", "secondLower"];
    const ring = document.querySelector("#transring");


    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);

    });

}
function toggleClass3() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["thirdRight", "third", "thirdLower"];
    const ring = document.querySelector("#transring");
    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);

    });
}
function toggleClass4() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["fourthRight", "fourth", "fourthLower"];
    const ring = document.querySelector("#transring");
    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);

    });
}
function toggleClass5() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["fifthRight", "fifth", "fifthLower"];
    const ring = document.querySelector("#transring");
    ring.classList.toggle("fifthCircle");

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);

    });
}
function toggleClass6() {
    const targets = [".changeImage", ".left", ".left-lower"];
    const className = ["sixthRight", "sixth", "sixthLower"];
    const ring = document.querySelector("#transring");
    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);
    });
    // const bg = document.querySelector(".changeImage");
    // element.style.backgroundImage = "url('/assets/6a.jpg')";


}
function toggleClass7() {
    const targets = [".right", ".left", ".left-lower"];
    const className = ["seventhRight", "seventh", "seventhLower"];
    const ring = document.querySelector("#transring");

    ring.classList.toggle(className[2]);

    targets.forEach((target, index) => {
        const item = document.querySelector(target);
        item.classList.toggle(className[index]);

    });
}

// ---------------------------------------------------------------GSAP---------------------------------------------------------------------------



// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// -----------------------------------------------------------other props animation-----------------------------------------------------------------------
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================


// --------------------------------------------------------------slide2------------------------------------------------------------------
gsap.to(".view1", {
    y: "-91vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 750%",
        end: "top 650%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});


// --------------------------------------------------------------slide2------------------------------------------------------------------


gsap.to(".view2a", {
    y: "-62vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 650%",
        end: "top 550%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",


    }
});

gsap.to(".view2b", {
    y: "88vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 650%",
        end: "top 550%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});

// --------------------------------------------------------------slide3------------------------------------------------------------------

gsap.to(".view3a", {
    y: "-85vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 550%",
        end: "top 450%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});

gsap.to(".view3b", {
    y: "85vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 550%",
        end: "top 450%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});
// --------------------------------------------------------------slide4------------------------------------------------------------------
// left-right
gsap.to(".view4a", {
    x: "100vw",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});
// bottom-up
gsap.to(".view4b", {
    y: "-48vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});
// top-bottom
gsap.to(".view4c", {
    y: "112vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});
// top-bottom

gsap.to(".view4d", {
    y: "82vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});
// north-west diagonal
gsap.to(".view4e", {
    x: "-68vw",
    y: "-25vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});









// --------------------------------------------------------------slide5------------------------------------------------------------------
// top-bottom

gsap.to(".view5a", {
    y: "83vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});
// top-bottom

gsap.to(".view5b", {
    y: "-44vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});
// bottom-up

gsap.to(".view5c", {
    y: "96vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});
// bottom-up

gsap.to(".view5d", {
    y: "-30vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});
// right-left
gsap.to(".view5e", {
    x: "-58vw",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack

        toggleActions: "restart reverse restart reverse",
    }
});

// --------------------------------------------------------------slide6------------------------------------------------------------------

gsap.to(".view6", {
    y: "-103vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 250%",
        end: "top 150%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});
// --------------------------------------------------------------slide7------------------------------------------------------------------

gsap.to(".view7a", {
    y: "-65vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 150%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});

gsap.to(".view7b", {
    y: "-74vh",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".section1",
        start: "top 150%",
        // 
        //              onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart reverse restart reverse",
    }
});









// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// -----------------------------------------------------------center-text animation-----------------------------------------------------------------------
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================


gsap.to(".text1", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 750%",
        end: "top 650%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text1", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text1", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text1", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text1", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        // If needed, define onLeaveBack if there is a specific behavior when leaving the section scrolling back
        toggleActions: "play pause resume resume" // Adjust this line according to the desired behavior for each phase
    }
});
// })

gsap.to(".text2", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 650%",
        end: "top 550%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text2", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text2", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text2", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text2", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".text3", {
    y: "10%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 550%",
        end: "top 450%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text3", {
                y: "10%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text3", {
                y: "10%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text3", {
                y: "-110%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text3", {
                y: "110%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});



gsap.to(".text4", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text4", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text4", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text4", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text4", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});


gsap.to(".text5", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text5", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text5", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text5", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text5", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".text6", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 250%",
        end: "top 150%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text6", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text6", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text6", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text6", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});
gsap.to(".text7", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 150%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".text7", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".text7", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".text7", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".text7", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});


// gsap.to(".text2", {
//     y: "0%",
//     duration: 0.5,
//     // stagger: 0.3,
//     delay: 0.5,
//     defaults: { ease: "SlowMo.easeOut" },
//     scrollTrigger: {
//         trigger: ".section1",
//         start: "top 650%",
//         end: "top 550%",
//         // 
//         //              onEnter onLeave onEnterBack onLeaveBack
//         toggleActions: "restart reverse restart reverse",
//     }
// });



// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// -----------------------------------------------------------left-bottom-text animation-----------------------------------------------------------------------
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================
// =================================================================================================================================================






gsap.to(".left-text1", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 750%",
        end: "top 650%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text1", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text1", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text1", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text1", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".left-text2", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 650%",
        end: "top 550%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text2", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text2", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text2", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text2", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});


gsap.to(".left-text3", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 550%",
        end: "top 450%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text3", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text3", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text3", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text3", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".left-text4", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 450%",
        end: "top 350%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text4", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text4", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text4", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text4", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});


gsap.to(".left-text5", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 350%",
        end: "top 250%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text5", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text5", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text5", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text5", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".left-text6", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 250%",
        end: "top 150%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text6", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text6", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text6", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text6", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});

gsap.to(".left-text7", {
    y: "0%", // Initially set or reset position
    duration: 0.5,
    // delay: 0.5,
    ease: "SlowMo.easeOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "top 150%",
        // Uncomment to see the start and end points during development
        onEnter: () => {
            gsap.to(".left-text7", {
                y: "0%", // Potentially redundant unless you want to reset or change something else here
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onEnterBack: () => {
            gsap.to(".left-text7", {
                y: "0%", // Reset the text to its original position when scrolling back into view from the bottom
                duration: 0.5,
                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        onLeave: () => {
            gsap.to(".left-text7", {
                y: "-100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,

                ease: "SlowMo.easeOut",
            });
        },
        onLeaveBack: () => {
            gsap.to(".left-text7", {
                y: "100%", // Moves the text upward by 100% of its height when the trigger leaves through the top
                duration: 0.5,

                // delay: 0.5,
                ease: "SlowMo.easeOut",
            });
        },
        toggleActions: "play pause resume resume"
    }
});


// ---------------------------------------mobile js------------------------------------------------------
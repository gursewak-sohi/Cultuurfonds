(function() {
    // JS loaded
    setTimeout(() => {
        let body = document.body;
        body.classList.add('loaded');

        // gsap animations
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({
            toggleActions: "play none none none",
            start: "top 70%",
        });

        gsap.to(".hero-canvas", 5, { scale: 1, ease: "power4.out" }, 0)

        const animationUp = document.querySelectorAll('.animate-up');
        if (animationUp) {
            ScrollTrigger.batch(".animate-up", {
                onEnter: elements => {
                    gsap.to(elements, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power4.out",
                        stagger: 0.15
                    });
                },
                once: false
            });
        }

        const animationDown = document.querySelectorAll('.animate-down');
        if (animationDown) {
            ScrollTrigger.batch(".animate-down", {
                onEnter: elements => {
                    gsap.to(elements, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.4,
                        ease: "power4.out",
                        stagger: 0.15
                    });
                },
                once: false
            });
        }

        const animationScale = document.querySelectorAll('.animate-scale');
        if (animationScale) {
            ScrollTrigger.batch(".animate-scale", {
                onEnter: elements => {
                    gsap.to(elements, {
                        autoAlpha: 1,
                        css: { scale: 1, opacity: 1 },
                        duration: 3,
                        ease: "power4.out",
                        stagger: 0.1
                    });
                },
                once: false
            });
        }

        const animationLeft = document.querySelectorAll('.animate-left');
        if (animationLeft) {
            ScrollTrigger.batch(".animate-left", {
                onEnter: elements => {
                    gsap.to(elements, {
                        delay: 0,
                        autoAlpha: 1,
                        css: { marginLeft: 0 },
                        duration: 5,
                        ease: "power4.out",
                        stagger: 0.1
                    });
                },
                once: false
            });
        }

        const animationFade = document.querySelectorAll('.animate-fade');
        if (animationFade) {
            ScrollTrigger.batch(".animate-fade", {
                onEnter: elements => {
                    gsap.to(elements, {
                        delay: 0.4,
                        autoAlpha: 1,
                        duration: 2,
                        ease: "power4.out",
                        stagger: 0.15
                    });
                },
                once: false
            });
        }

    }, "500")


    // Close Cart Outside Click
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.onclick = (e) => {
            if (e.target.id == "cartItem") {
                cartItemID.classList.remove("active");
            }
        }
    }

    // Close Menu Outside Click
    let menuItemID = document.querySelector("#menuItem");
    if (menuItemID) {
        menuItemID.onclick = (e) => {
            if (e.target.id == "menuItem") {
                menuItemID.classList.remove("active");
            }
        }
    }
})();

// Open Cart
const openCart = () => {
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.classList.add("active");
    }
}

// Close Cart
const closeCart = () => {
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.classList.remove("active");
    }
}



// Open Menu
const openMenu = () => {
    let menuOpenID = document.querySelector("#menuItem");
    if (menuOpenID) {
        menuOpenID.classList.add("active");
    }
}


// Close Menu
const closeMenu = () => {
    let menuOpenID = document.querySelector("#menuItem");
    if (menuOpenID) {
        menuOpenID.classList.remove("active");
    }
}
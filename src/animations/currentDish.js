const imgVarients = {
    hidden:{
    rotateZ:"-159deg",
    originX:"left",
    originY:"top",
    opacity:0
    },
    visible:{
    rotateZ:"0deg",
    position:"absolute",
    opacity:1,
    transition:{
        delay:0.4,
        duration:1,
        ease:"easeInOut"
    }
    },
    leave:{
    rotateZ:"200deg",
    position:"absolute",
    transition:{
        delay:0.3,
        duration:1,
        ease:"easeInOut"
    }
    }
}

const textVarients = {
    hidden:{
    opacity:0,
    x:100
    },
    visible:{
    opacity:1,
    x:0,
    transition:{
        delay:0.2,
        duration:0.7,
        ease:"easeInOut"
    }},
    leave:{
    x:-100,
    opacity:0,
    transition:{
        duration:0.7,
        ease:"easeInOut"
    }
    }
}

const dishSpanVarients = {
    hidden:{
    y:-300
    },
    visible:{
    y:0,
    transition:{
        delay:0.5
    }
    },
    leave:{
    y:-300,
    transition:{
        delay:0.4
    }
    }
}

const optionsContainer = {
    hidden:{
    opacity:0,
    x:50
    },
    visible:{
    opacity:1,
    x:0,
    transition:{
        duration:1,
        delay:0.4
    }
    }
}

const optionsVarients = {
    onHover:{
    scale:1.1
    },
    onClick:{
    scale:0.9
    }
}

export {imgVarients,textVarients,dishSpanVarients,optionsContainer,optionsVarients}
const listContainerVarients = {
    hidden:{
        opacity:0,
        x:50
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            delay:0.7
        }
    }
}
const chevronVarients = (dir)=>{
    if (dir === "Left"){
        return(
            {x:-10,color:"white",scale:1.3,transition:{repeat:Infinity,repeatType:"reverse"}}
        )
    }
    else if (dir === "Right"){
            return(
                {x:10,color:"white",scale:1.3,transition:{repeat:Infinity,repeatType:"reverse"}}
            )
        }
    
}
const dishesInListVarients = {
    onClick:{
        scale:0.9,
        y:-15
    }
}
const dishesInListOnHover = (dish)=>{
    return(
        {
            scale:1.2,
            y:-50,
            transition:{
                duration:0.5
            },
            backgroundColor:`rgba(${dish.color},0.5)`
        }
    )
}

export {listContainerVarients,chevronVarients,dishesInListVarients,dishesInListOnHover}
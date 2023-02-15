import React,{useRef, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import useMeasure from 'react-use-measure'
import {AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike} from 'react-icons/ai'
import {FaStar} from 'react-icons/fa'
import {ratingContainerVarients,textVarients,ratingNumberVarients,usersRatesVarients,IngredientsVarients, ratingNumberInfoContainerVarients} from "../animations/rating"
export const Rating = ({dishes, Current}) => {
  const [Ingredients,showIngredients] = useState(false)
  const [liked,setLiked]= useState(false)
  const [disliked,setDisliked]= useState(false)
  const [ref, bounds] = useMeasure()
  const [ref2, bounds2] = useMeasure()  
  const handleRating = (type)=>{
    if(type==="like"){
      !liked?setLiked(true) & setDisliked(false):setLiked(false)
    }else if(type==="dislike"){
      !disliked?setDisliked(true) & setLiked(false):setDisliked(false)
    }
  }
  const setLikedAndDisliked = ()=>{
    setLiked(false)
    setDisliked(false)
  }
  const changeSection = (change)=>{
    change?showIngredients(true):showIngredients(false);
  }
  return (
    <motion.div  animate='visible' whileHover={{backgroundColor:`rgba(${Current.color},0.5)`}} variants={ratingContainerVarients} initial='hidden' className='rating d-flex flex-column col-3 rounded py-4 px-3 row mt-5 order-2 order-xl-1'> 
        <div className='tabs d-flex justify-content-around'>
            <button onClick={()=>changeSection(false)}  className={`border-0 bg-transparent ${!Ingredients?'text-black':'text-black-50'}`}>Overview</button>
            <button onClick={()=>changeSection(true)} className={`border-0 bg-transparent ${Ingredients?'text-black':'text-black-50'}`}>Ingredients</button>
        </div>
        {!Ingredients&&(
          <AnimatePresence exitBeforeEnter onExitComplete={()=>setLikedAndDisliked()}>{
            dishes.map((dish,i)=>{
              return(Current.rating.dishInfo === dish.rating.dishInfo && <motion.div ref={ref} initial={{height:bounds2.height>0? bounds2.height:360}} variants={ratingNumberInfoContainerVarients} animate='visible' key={i} >
              <div  style={{backgroundColor:`rgba(${dish.color})`}} className='rating-number d-flex flex-column col-3 rounded-4 mt-3'>
              <motion.span key={dish.rating.number} variants={ratingNumberVarients} initial='hidden' animate='visible' exit='leave' className='number fw-bold text-center text-xl-start'>{dish.rating.number}</motion.span>
              <span className='fs-5 mb-2 text-center'><FaStar/></span>
              </div>
              <motion.div variants={textVarients} initial="hidden" animate="visible" exit="leave" key={dish.rating.chefName} className='che-info my-3'>
              <motion.h4 className='m-0'>{dish.rating.chefName}</motion.h4>
              <motion.span>{dish.rating.chefInfo}</motion.span>
              <motion.p className='py-2 mb-0'>{dish.rating.dishInfo}</motion.p>
              </motion.div>
              <div className='user-rate d-flex gap-3'>
                  <motion.div initial='hidden' animate='visible' transition ={{delay:0.2,duration:0.5}} onClick={(e)=>handleRating("like")} variants={usersRatesVarients}  whileHover='onHover' className='vote up bg-light fs-4 position-relative'>
                  {liked?<AiFillLike/>:<AiOutlineLike/>}
                  <p className='votes'>{liked? +dish.rating.likes + 1 : dish.rating.likes} likes</p>
                  </motion.div>
                  <motion.div initial='hidden' animate='visible' transition = {{delay:0.3,duration:0.5}} onClick={(e)=>handleRating("dislike")} variants={usersRatesVarients}  whileHover='onHover'  className='vote up bg-light fs-4 position-relative'>
                  {disliked?<AiFillDislike/>:<AiOutlineDislike/>}
                  <p className='votes'>{disliked? +dish.rating.disLikes + 1 : dish.rating.disLikes} dislikes</p>
                  </motion.div>
              </div>
              </motion.div>)
            })
          }
          </AnimatePresence>
        )}
        {
          Ingredients&& (
            <AnimatePresence exitBeforeEnter>{
              dishes.map((dish,i)=>{
                return(Current.rating.dishInfo === dish.rating.dishInfo && 
                <motion.div ref={ref2} key={i}>
                <motion.div variants={IngredientsVarients} initial={{height:bounds.height>0? bounds.height- 50:150,x:20,opacity:0}} animate='visible' exit='leave' key={dish.rating.chefName} className='che-info my-3'>
                <motion.h4 className='m-0'>{dish.rating.chefName}</motion.h4>
                <motion.span>{dish.rating.chefInfo}</motion.span>
                <motion.p className='py-2 mb-0'>{dish.rating.dishInfo}</motion.p>
                </motion.div>
                </motion.div>)
              })
            }
            </AnimatePresence>
          )
        }
    </motion.div>
  )
}

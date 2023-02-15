import React,{useState} from 'react'
import {imgVarients,textVarients,dishSpanVarients,optionsContainer,optionsVarients} from '../animations/currentDish'
import { AnimatePresence, motion } from 'framer-motion'
import { FaPlay, FaConciergeBell } from 'react-icons/fa';
export const CurrentDish = ({dishes , Current}) => {
  return (
    <div className='dish col-xl-9 row mt-5 mx-0'>
        
          <div className='dish-img-holder col-lg-5'>
          <AnimatePresence exitBeforeEnter>
          {
            dishes.map((dish,i)=>{
              return(
                Current.color === dish.color && <motion.span key={i} variants={dishSpanVarients} initial='hidden' animate='visible' exit='leave' style={{borderColor:`rgba(${dish.color})`,opacity:0.5}}></motion.span>
              )
                        })
          }
          </AnimatePresence>    
          <AnimatePresence>
              {
                dishes.map((dish)=>{
                return(Current.img === dish.img && <motion.img key={dish.img} variants={imgVarients} initial="hidden" animate="visible" exit="leave"  className='img-fluid' src={dish.img}/>)
                })
              } 
              </AnimatePresence>
          </div>
        <div className='dish-info overflow-hidden d-flex flex-column col-lg-7 mt-3 align-items-center align-items-lg-start'>
        <AnimatePresence exitBeforeEnter> 
            {
              dishes.map((dish)=>{
                return(Current.index === dish.index && <motion.span key={dish.index}  initial="hidden" animate="visible" exit="leave" variants={textVarients}  className='ordering-dish'>#{Current.index} Most loved dish</motion.span>)
                })
              }
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
            {
              dishes.map((dish)=>{
                return(Current.dishH1Name === dish.dishH1Name && <motion.h1 key={dish.dishH1Name} initial="hidden" animate="visible" exit="leave"  variants={textVarients} className='fw-bold text-uppercase text-center text-lg-start'>
                <motion.span key={dish.dishSpanName} variants={textVarients} exit={{opacity:0,x:100,transition:{duration:0.7,ease:"easeInOut"}}}  initial={{opacity:0,x:-100}} animate="visible"  className='fw-normal d-block'>{dish.dishSpanName}</motion.span>
                {dish.dishH1Name}
            </motion.h1>)
                })
            }
        </AnimatePresence>
            <motion.div variants={optionsContainer} initial='hidden' animate='visible' className='dish-options d-flex flex-column flex-md-row gap-5 mx-4 my-4 my-md-2 align-items-center'>
            <motion.button variants={optionsVarients} whileHover='onHover' whileTap='onClick' className='video-button d-flex gap-2 align-items-center bg-transparent border-0'>
            <FaPlay/>
            <span>Show video</span>
            </motion.button>
            <motion.button variants={optionsVarients} whileHover='onHover' whileTap='onClick' className='video-button d-flex gap-2 align-items-center bg-transparent border-0'>
            <FaConciergeBell/>
            <span>Order food</span>
            </motion.button>
        </motion.div>
        </div>
    </div>
  )
}

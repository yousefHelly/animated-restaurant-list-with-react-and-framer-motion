import React from 'react'
import {motion} from 'framer-motion'
import {listContainerVarients,chevronVarients,dishesInListVarients,dishesInListOnHover} from '../animations/SelectDish'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
export const SelectDish = ({dishes, selectedDish}) => {
    const selectDish = (dish)=>{
        selectedDish(dish)
        window.scrollTo({
            left:0,
            top:0,
            behavior:'smooth'
        })
    }
    return (
    <div className='col-xl-9 order-1 order-xl-2 overflow-hidden'>
        <motion.div variants={listContainerVarients} initial='hidden' animate='visible' className='select-nav mt-5 pt-5 d-flex gap-3 justify-content-center'>
            <motion.button whileHover={chevronVarients("Left")} className='prev-btn border-0 bg-transparent fs-3 d-none d-md-block'>
                <FaChevronLeft/>
            </motion.button>
                <div className='dishes-list row gap-3 gap-md-5'>
                    {
                        dishes.map((dish,i)=>{
                            return(
                                <motion.div key={i} variants={dishesInListVarients} whileTap='onClick' whileHover={dishesInListOnHover(dish)}  onClick={()=>selectDish(dish)} className='d-flex flex-column align-items-center rounded p-1 px-2 col-9 col-md-2 mx-auto'>
                                    <img className='img-fluid' src={dish.img}/>
                                    <p className='text-center'>{dish.dishSpanName}<span className='d-block'>{dish.dishH1Name}</span></p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            <motion.button whileHover={chevronVarients("Right")} className='next-btn border-0 bg-transparent fs-3 d-none d-md-block'>
                <FaChevronRight/>
            </motion.button>
        </motion.div>
    </div>
  )
}

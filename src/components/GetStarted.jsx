import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer bg-blue-gradient`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-18 leading-23">
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrow"className="w-[23px] h-[23] object-contain" />
      </div>
      <p className="font-poppins font-medium text-18 leading-23">
          <span className='text-gradient'>Started</span>
        </p>
    </div>
  </div>
)
export default GetStarted
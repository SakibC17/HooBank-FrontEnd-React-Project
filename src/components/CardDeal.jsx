import React from 'react'
import {card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'
 
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in a few steps.</h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles='mt-10'></Button>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="card" className='w-[100%]'/>
    </div>
  </section>
)


export default CardDeal
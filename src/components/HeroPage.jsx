import React from 'react';
import { motion } from 'framer-motion';
import tradingSchema from '../assets/Group 133.svg';
import buttonEllipse from '../assets/button_ellipse.svg';

const HeroPage = () => {
  return (
    <div className='bg-hero'>
      <div className='flex justify-between items-center md:block'>
        <div className='mb-[67px] px-[85px] sm:px-0 custom_xs:px-0'>
          <div>
            <motion.h2
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className='uppercase text-[19px] md:text-center'
            >
              crypto trading
            </motion.h2>
          </div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className='leading-[89px] my-[32px] font-semibold text-[96px]  md:text-center sm:text-[52px] sm:leading-[60px]'
          >
            <span>Engineers Meet</span> <br />
            <span className='text-gradient'>Traders __</span>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className='md:text-center  md:px-4'
          >
            <span className='text-[25px] font-normal sm:text-[18px] sm:leading-[25px]'>
              Advanced crypto algorithmic trading and efficient <br />{' '}
              cross-chain execution, at scale.
            </span>
          </motion.div>
          <div className='justify-center items-center hidden md:flex md:py-10'>
            <a href={'/'}>
              <button className='flex justify-between items-center bg-[rgb(69,122,222)] text-white py-[15px] px-[20px] text-lg font-medium rounded-[10px] w-[220px]'>
                <span>Learn More</span>
                <img src={buttonEllipse} alt='button ellipse' />
              </button>
            </a>
          </div>
        </div>
        <div className='mt-20 flex justify-end md:justify-center'>
          <img
            className='sm:w-[350px]'
            src={tradingSchema}
            alt='trading schema'
          />
        </div>
      </div>
      <div className='flex justify-center items-center md:hidden'>
        <a href={'/'}>
          <button className='flex justify-between items-center bg-[rgb(69,122,222)] text-white py-[15px] px-[20px] text-lg font-medium rounded-[10px] w-[220px]'>
            <span>Learn More</span>
            <img src={buttonEllipse} alt='button ellipse' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroPage;

import React from 'react';
import aboutusHeaderIcon from '../assets/aboutus_icon.svg';
import aboutusChart from '../assets/Chart.svg';
import aboutusSchema from '../assets/aboutus_schema.svg';
import mobileAboutusSchema from '../assets/mobile_aboutus_schema.svg';
import blueArrow from '../assets/blue_arrow.svg';
import purpleArrow from '../assets/purple_arrow.svg';
import AboutusCardPage from './AboutusCardPage';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className='bg_aboutus'>
      <div className='container mx-auto md:p-[40px]'>
        <div className='flex justify-center items-center pt-[120px] md:hidden'>
          <img src={aboutusHeaderIcon} alt='aboutusicon' />
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
          className='mt-[143px] sm:mt-[80px] mb-10'
        >
          <h6 className='text-center uppercase text-[#AAAAAA] font-medium'>
            about us
          </h6>
          <h2 className='text-center  text-[40px] font-medium'>
            Global technologies
          </h2>
        </motion.div>
        <div className='flex justify-between items-center md:block'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className='w-1/2 mr-12 md:w-full sm:mr-0 md:mb-8'
          >
            <img src={aboutusChart} alt={'chart'} />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className='w-1/2  md:w-full'
          >
            <div className='flex'>
              <span className='font-semibold text-3xl ml-2'>Level 1</span>
            </div>
            <div className='flex items-start mt-[33px] w-1/2 md:w-4/5 custom-responsive-sm'>
              <img src={blueArrow} alt='blue arrow' />
              <span className='font-medium text-lg'>
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </span>
            </div>
            <div className='flex items-start mt-[33px] w-1/2 md:w-4/5 custom-responsive-sm'>
              <img src={purpleArrow} alt='purple arrow' />
              <span className='font-medium text-lg'>
                Place and manage orders based on the Level 2 order book, which
                provides a live display of all bids and offers waiting to be
                executed.
              </span>
            </div>
            <a href='/'>
              <button className='flex justify-center items-center bg-button-gradient text-white py-[15px] px-[20px] text-lg font-medium w-[205px] mt-11 ml-3'>
                Start Now
              </button>
            </a>
          </motion.div>
        </div>
        <div className='flex justify-between items-center mt-56 md:block md:mt-[100px]'>
          <div className='w-1/2 mr-12 md:hidden'>
            <img src={aboutusSchema} alt={'aboutus Schema'} />
          </div>
          <div className='w-1/2 md:w-full custom-responsive-sm md:text-center sm:text-left'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className='font-medium text-[40px] md:text-[35px] leading-[120%]'
            >
              <span>
                The future{' '}
                <span className='text-gray-400'>
                  of <br />{' '}
                </span>{' '}
                Cryptocurrency <br /> trading{' '}
              </span>
              <span className='aboutus-gb-gradient'>platform</span>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className='my-5'
            >
              <span className='opacity-80 text-lg leading-[150%]'>
                Take advantage of time and sales, futures <br /> spread orders
                and depth trader — plus, <br /> trade directly from charts.
              </span>
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className='mb-20'
            >
              <a href='/'>
                <button className='text-[#7B93FF] text-[15px] font-normal'>
                  learn more
                </button>
              </a>
            </motion.div>
            <div className='hidden md:flex md:justify-center custom-responsive-image'>
              <img src={mobileAboutusSchema} alt='responsive schema' />
            </div>
          </div>
        </div>
        <AboutusCardPage />
      </div>
    </div>
  );
};

export default AboutUsPage;

import React from 'react';

const AboutusCardPage = () => {
  return (
    <>
      <div className='mt-[180px] grid grid-cols-3 grid-rows-2 gap-[30px] md:grid-cols-1 md:justify-items-center'>
        <div className='flex justify-end  flex-col row-span-2	items-start px-8 md:py-8 h-full big-bg-card rounded-[46px] border-4 border-[#3d3e42] md:h-[476px] md:w-[350px] md:justify-start'>
          <div>
            <span className='font-medium text-base text-[#AAAAAA] uppercase'>
              Spot & Margin
            </span>
          </div>
          <div className='mt-8 mb-16 md:mb-0'>
            <span className='font-normal text-[40px] leading-[48px]'>
              Trade <span className='card-bg-gradient'>200+</span> <br /> pairs
              with up <br /> to 10x leverage
            </span>
          </div>
          <div className='text-[#AAAAAA] py-9 md:py-[26px]'>
            <a href='/'>
              <button>Learn more</button>
            </a>
          </div>
        </div>

        <div className='px-[30px] py-[30px] col-span-1 rounded-[46px] border-4 border-[#3d3e42] md:h-[305px] md:w-[350px]'>
          <div>
            <span className='font-medium text-base text-[#AAAAAA] uppercase'>
              Derivatives
            </span>
          </div>
          <div className='flex justify-between flex-col	h-full'>
            <div className='mt-8'>
              <span className='font-normal opacity-90	 text-[30px] leading-[48px]'>
                <span className='font-medium opacity-100 text-white'>40+</span>{' '}
                quarterly futures and contracts
              </span>
            </div>
            <div className='text-[#AAAAAA] pb-[30px]'>
              <a href='/'>
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>

        <div className='px-[30px] col-span-1 py-[30px] rounded-[46px] border-4 border-[#3d3e42] md:h-[305px] md:w-[350px]'>
          <div>
            <span className='font-medium text-base text-[#AAAAAA] uppercase'>
              Trading Arena
            </span>
          </div>
          <div className='flex justify-between flex-col	h-full'>
            <div className='mt-8'>
              <span className='font-normal opacity-90	 text-[30px] leading-[48px]'>
                Prize pools <br /> worth up to <br />
                <span className='font-medium opacity-100 text-white '>
                  USD 1,000,000
                </span>{' '}
              </span>
            </div>
            <div className='text-[#AAAAAA] pb-[30px]'>
              <a href='/'>
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
        <div className='bg-small-card px-[30px] col-span-2 md:col-span-1 py-[30px] rounded-[46px] border-4 border-[#3d3e42] md:h-[426px] md:w-[350px]'>
          <div>
            <span className='font-medium text-base  text-[#AAAAAA] uppercase'>
              mobile app
            </span>
          </div>
          <div className='flex justify-between flex-col	h-full md:justify-start'>
            <div className='mt-8'>
              <span className='font-normal opacity-90	 text-[30px] leading-[48px]'>
                Trade anytime, <br />
                <span className='font-medium opacity-100 text-white '>
                  anywhere
                </span>{' '}
              </span>
            </div>
            <div className='text-[#AAAAAA] pb-[30px] md:mt-[26px]'>
              <a href='/'>
                <button>Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusCardPage;

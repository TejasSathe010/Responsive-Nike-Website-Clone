import React, { useState } from 'react';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';

import { arrowRight } from '../assets/icons';
import { statistics } from '../constants/index';
import { shoes } from '../constants/index';
import { bigShoe1 } from '../assets/images';


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-blue'>All Weather Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative lg:z-10 md:z-10 pr-10'>The Most Latest</span>

          <br />
          <span className='text-coral-blue inline-block mt-3'>Nike </span> Shoes
        </h1>
          <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-lg'>Explore Nike's world of premium sportswear and athletic footwear. Discover top-quality products designed to enhance your athletic performance and style. Shop the latest collections and enjoy unbeatable comfort and style. Join the Nike community today.
          </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.key}>
              <p className='text-4xl font-bold font-palanquin'>{stat.value} </p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label} </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b from-blue-200 to-teal-50 bg-cover bg-center'>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className='object-contain relative z-10' />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={image.key}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;
"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {data_product} from '../../interfaces/products'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductCard from '../products/page'
import './style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App({data}:any) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
         {
          data?.map((e:data_product, i:number) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard datas={e}/>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </>
  );
}

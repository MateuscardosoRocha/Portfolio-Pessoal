/* eslint-disable react/jsx-key */

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link';


// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/petshop.png',
          link: 'https://petshop-flame.vercel.app'
        },
        {
          title: 'title',
          path: '/tatto.png',
          link: 'https://tatto-studio-beta.vercel.app'

        },
        {
          title: 'title',
          path: '/photo.png',
          link: 'https://fotografia-red.vercel.app'

        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: '/'

        },
      ],
    },
    // {
      // images: [
      //   // {
      //   //   title: 'title',
      //   //   path: '/thumb4.jpg',
          
      //   // },
      //   // {
      //   //   title: 'title',
      //   //   path: '/thumb1.jpg',
      //   // },
      //   // {
      //   //   title: 'title',
      //   //   path: '/thumb2.jpg',
      //   // },
      //   // {
      //   //   title: 'title',
      //   //   path: '/thumb3.jpg',
      //   // },
      // ],
    // },
  ],
};



import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';


const WorkSlider = () => {
  return <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
  >

    {
      workSlides.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer' >{slide.images.map((image, index) => {
            return (
              
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index} >
           
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  <Image src={image.path} width={500} height={300} alt='work' />

                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>

                      {/* title 1 */}
                      <div className='delay-100'><Link target='_blank' href={image.link}>Visitar</Link></div>
                      {/* title 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'><Link target='_blank' href={image.link}>Site</Link></div>
                      {/* ícone */}
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>

                    </div>




                  </div>
                </div>
              </div>
            );

          })}</div>



        </SwiperSlide>
      })
    }

  </Swiper>;
};

export default WorkSlider;

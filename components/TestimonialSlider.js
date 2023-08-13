// testimonial data
const testimonialData = [
  {
    image: '/296989.svg',
    name: 'Mariane Ferraz',
    position: 'Tech Lead',
    message:
      'Achei ele experiente e profissional e a considerarei para futuros projetos relacionados a programação.',
  },
  {
    image: '/296989.svg',
    name: 'Renata Schwingen',
    position: 'Analista de Sistemas',
    message:
      'Mateus fez uma grande contribuição para o nosso projeto. Obrigado e que possamos continuar a brilhar através de nossos esforços futuros juntos.',
  },
  {
    image: '/312160.svg',
    name: 'Fabiano Broto',
    position: 'CEO',
    message:
      'A qualidade é, realmente incrivel. Além disso, o suporte é excelente! Estou muito satisfeito. Está de parabéns!!! Obrigado e um grande abraço :)',
  },
];

/* eslint-disable react/jsx-key */

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'




import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image';


const TestimonialSlider = () => {
  return <Swiper
  navigation={true}
    pagination={{
      clickable: true
    }}
    modules={[Navigation,Pagination]}
    className='h-[400px]'
  >

    {
      testimonialData.map((person, index) => {
        return <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* avatar, nome, posição */}
            <div className='w-full  max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* Avatar */}
                <div className='m-2 mx-auto '>
                  <Image src={person.image} width={50} height={50} alt='profile'/>
                </div>

                {/* nome */}
                <div className='text-lg'>{person.name}</div>

                {/* position */}
                <div className=' text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            {/*quote  */}
            <div className='  flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
  
                <div className='mb-4'>
                  <FaQuoteLeft className='text-2xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* Message */}
                <div className='xl:text-lg text-center md:text-left '>{person.message}</div>
              </div>
            </div>
       

        </SwiperSlide>
      })
    }

  </Swiper>;
};

export default TestimonialSlider;

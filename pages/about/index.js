/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaAngular } from 'react-icons/fa';
import {  SiAdobeillustrator, SiAdobephotoshop, SiTailwindcss } from 'react-icons/si';


//  data
const aboutData = [
  {
    title: 'Tecnologias',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiTailwindcss/>,
          <FaJs />,
          <FaReact />,
          <FaAngular/>,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobeillustrator />, <SiAdobephotoshop />],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'Experiência',
    info: [
      {
        title: 'Estágio de Desenvolvimento Web - Two Dogs',
        stage: '2022 - 2023',
      },
     
    ],
  },
  {
    title: 'Formação',
    info: [
      {
        title: 'Ensino Médio',
        stage: '2021',
      },
      {
        title: 'Análise e Desenvolvimento de Sistemas - PUCPR',
        stage: '2024',
      }
    
    ],
  },
];


//Componentes
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>


      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 mt-12'>Era Uma Vez <span className='text-accent'> ...</span> </motion.h2>



        <motion.p
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Há 2 anos, dei início a jornada na área da Tecnologia.  Desde então, tenho mergulhado em estudos, buscando dominar esse mundo.
          <br/>Tenho me desenvolvido na área através da criação de aplicações freelancer. <br/>Cada projeto é uma oportunidade para encontrar soluções inovadoras para os problemas.
        </motion.p>

        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={2} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Anos de experiência</div>
            </div>
            {/* clients */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={11} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Clientes Satisfeitos</div>
            </div>

            {/* Projects */}
            <div className='relative flex-1 after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={16} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projetos concluídos </div>
            </div>
       
          </div>
        </motion.div>


      </div>

      {/* Info */}


      <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bgwhite after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>{item.title}</div>
            )
          })}
        </div>
        <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* Title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>

                {/* Icones */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div className='text-2xl text-white'>{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;

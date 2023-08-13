
//Componentes
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import Link from 'next/link';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'


const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"

            className='h2 xl:mt-12'>
            Meus Trabalhos<span className='text-accent'>.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Aqui estão os meus principais projetos de desenvolvimentos Web, <Link target='_blank' href='https://api.whatsapp.com/send/?phone=5541987742206&text=Ola%20Mateus,%20vim%20pelo%20seu%20Portfólio!!%20Poderia%20me%20mostrar%20mais%20projetos?'><span className='text-accent'>Quer ver mais?</span></Link></motion.p>
        </div>
        <motion.div

          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='w-full xl:max-w-[65%]'>

          {/* slider */}
          <WorkSlider />

        </motion.div>

      </div>
    </div>
    <Bulb />
  </div>;
};

export default Work;

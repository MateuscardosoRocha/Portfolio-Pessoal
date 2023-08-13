import  TestimonialSlider  from '../../components/TestimonialSlider'

import {motion} from 'framer-motion'
import { fadeIn } from '../../variants'

const Testimonials = () => {
  return <div className='h-full bg-primary/30 py-32 text-center'>
    <div className='container mx-auto flex flex-col justify-center h-full'>
      <motion.h2 
      variants={fadeIn('up', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"  
      className='h2 mt-12 xl:mb-0'>O que os Clientes <span className='text-accent'>Dizem.</span></motion.h2>

      <motion.div  
      variants={fadeIn('up', 0.4)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"  >
        <TestimonialSlider/> </motion.div>
    </div>
  </div>;
};

export default Testimonials;

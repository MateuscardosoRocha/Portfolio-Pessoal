import Link from "next/link";

import {RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiWhatsappLine, RiGitBranchFill } from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link target="_blank" href={'https://www.facebook.com/mateus.cardoso.96155'} className="hover:text-accent transition-all duration-300"><RiFacebookLine /></Link>
    <Link target="_blank" href={'https://www.instagram.com/mateuss.cardosoo/'} className="hover:text-accent transition-all duration-300"><RiInstagramLine /></Link>
    <Link target="_blank" href={'https://www.linkedin.com/in/mateusscardosoodev/'} className="hover:text-accent transition-all duration-300"><RiLinkedinLine /></Link>
    <Link target="_blank" href={'https://github.com/MateuscardosoRocha'} className="hover:text-accent transition-all duration-300"><RiGitBranchFill /></Link>
    <Link target="_blank" href={'https://api.whatsapp.com/send/?phone=5541987742206&text=Ola%20Mateus,%20vim%20pelo%20seu%20Portfólio!!'} className="hover:text-accent transition-all duration-300"><RiWhatsappLine /></Link>



  </div>;
};

export default Socials;

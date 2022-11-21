import React from 'react';
import {BsTelephoneOutbound} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {
  FaGithub,
  FaLinkedin,
  
 
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='w-full  flex flex-col md:flex-row justify-between p-4 bg-[#0a192f] text-white'>
            <div className=' flex flex-col items-center md:flex-row gap-4  justify-center p-2'>
                <div className='flex gap-2 items-center'>
                     <BsTelephoneOutbound size={20}/> +46 72 842 45 95
                </div>
                <div className='flex gap-2'>
                   <AiOutlineMail size={20}  /> ovi92ahmed@gmail.com
                </div> 
                 
            </div>
            <div className='flex gap-4 items-center justify-center p-2'>
               
                    <a href='https://www.linkedin.com/in/sadman-ahmed-15aba1175' target="_blank"
                    className='flex  gap-2  '><FaLinkedin size={20} /> LinkedIn</a>
                
                 
                 <a href='https://github.com/Sadman-Ahmed-Ovi' target="_blank" className='flex  gap-2'><FaGithub size={20}/> Github</a>
            </div>
        </div>
    );
};

export default Footer;
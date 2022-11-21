import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full  bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center px-4 pt-20 text-white'>
        <form method='POST' action="https://getform.io/f/e4e27712-8a12-4290-987d-e5fe4e546768" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8 flex flex-col items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500 '>Contact</p>
                <p className=' py-4'>Contact me by submitting the form below </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 hover:font-bold rounded-md px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    );
};

export default Contact;
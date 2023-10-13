import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function Stories() {
  return (
    
    <>
    <Navbar/>
    

    <div className='w-full flex justify-center my-16 font-weedy flex-wrap'>

        <div className='md:w-80 flex mt-5 px-4 md:px-0 flex-wrap'>
                    <img className='w-full stories_class ' src="DSC09777.jpg" alt="" />
                    <span className='  mt-4 text-light-text w-full  text-2xl stories_span'>Nishtha and Shyam</span>
                    <span>8 October 2023</span>
        </div>
        <div className='md:w-80 px-4 md:px-0 flex mt-10 flex-wrap'>
                    <img className='w-full stories_class' src="DSC09703.jpg" alt="" />
                    <span className='  mt-4 text-light-text w-full  text-2xl stories_span'>Nishtha and Shyam</span>
                    <span>8 October 2023</span>
        </div>
        <div className='md:w-80  px-4 md:px-0 flex mt-10 flex-wrap'>
                    <img className='w-full stories_class' src="\DSC00663.jpg" alt="" />
                    <span className='  mt-4 text-light-text w-full  text-2xl stories_span'>Nishtha and Shyam</span>
                    <span>8 October 2023</span>
        </div>
        <div className='md:w-80  px-4 md:px-0 flex mt-10 flex-wrap'>
                    <img className='w-full stories_class' src="\_A3A8379 (1).jpg" alt="" />
                    <span className='  mt-4 text-light-text w-full  text-2xl stories_span'>Nishtha and Shyam</span>
                    <span>8 October 2023</span>
        </div>

    </div>

    

    <Footer/>
    </>
  )
}

export default Stories
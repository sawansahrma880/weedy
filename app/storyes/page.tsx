import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

function Stories() {
  return (
    
    <>
    <Navbar/>
    

    {/* <div className='w-full flex justify-center my-16 font-weedy flex-wrap'>

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

    </div> */}


<div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
  <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-1 flex-col">
              <img className="object-cover h-full" src="\_64I8739 .jpg"/>
          </div>
          <div className="hidden md:flex flex-1 flex-row gap-2">
              <div className="flex flex-1 flex-col">
                <img className="object-cover h-full" src="\_64I8742.jpg"/>
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                <img className="object-cover h-full" src="\card_3.jpg"/>
              </div>
          </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
          <div className="hidden md:flex flex-1 flex-row gap-2">
              <div className="flex flex-1 flex-col">
                <img className="object-cover h-full" src="\DSC00722.jpg"/>  
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                <img className="object-cover h-full" src="\_A3A7866.jpg"/>
              </div>
          </div>                        
          <div className="flex flex-1 flex-col">
            <img className="object-cover h-full" src="\DSC00663.jpg"/>
          </div>
      </div>
  </div>
</div>



<div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
  <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col">
              <img className="object-cover h-full" src='\_A3A8343.jpg' alt=''/>
          </div>
      </div>
      <div className="flex flex-1">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img className="object-cover h-full" src='\DSC09403.jpg' alt=''/>
            </div>
            <div>
              <img className="object-cover h-full" src='\mandhi.jpg' alt=''/>
            </div>
            <div>
              <img className="object-cover h-full" src='\_64I8825.jpg' alt=''/>
            </div>
            <div>
              <img className="object-cover h-full" src='\DSC00789.jpg' alt=''/>
            </div>
          </div>
      </div>
  </div>
</div>

    

    <Footer/>
    </>
  )
}

export default Stories

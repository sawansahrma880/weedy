import React from 'react'
import Image from "next/image";


function Footer() {
  return (
   <>
<a href="https://wa.me/+919625528213">
<Image
      src="/whatsapp.png"
      width={60}
      height={60}
      alt="Picture of the author"
      style={{position:'fixed' , right:5 , bottom:30 , zIndex:100}}
      

    />

</a>

    
   
   <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-gray-200">

        <div className="text-gray-600">+91-9625528213  and  <a href="mailto: theweddybea@gmail.com" className='ft_mail'>mail@</a> </div>

<div className='text-end'>
 @mukulsharma
</div>
       

      </div>
   
   </>
  )
}

export default Footer
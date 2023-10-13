import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


function Navbar() {
  return (
    <>


    <main className=' font-serif font-light '>

        <div className='flex justify-center  '>

     <Link href={'/'}>

<img src="/logo.png" height="20px" width="240px" alt="" />

     </Link>


        </div>

        <div className='hidden md:flex justify-center'>

<div className='w-7/12 lg:flex justify-evenly font-light  mainNavbar'>

  <Link href={'/'}>
 HOME
  </Link>  
    <Link href={'/about'}>ABOUT</Link>
    <Link href={'storyes'}>STORIES</Link>
    {/* <Link href={''}>STORE</Link>
    <Link href={''}>TESTIMONIAL</Link> */}
    <Link href={'/enquire'}>ENQUIRE</Link>
</div>
</div>

<div className='lg:hidden flex justify-around '>

<Link href={'/'}>
 HOME
  </Link>  
    <Link href={'/about'}>ABOUT</Link>
    <Link href={'storyes'}>STORIES</Link>
    {/* <Link href={''}>STORE</Link>
    <Link href={''}>TESTIMONIAL</Link> */}
    <Link href={'/enquire'}>ENQUIRE</Link>

</div>

    </main>
    
    </>
  )
}

export default Navbar

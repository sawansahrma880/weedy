"use client";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import type { NextPage } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-grid-carousel"



export default function Home() {
  
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

  return (
    <>
      <Navbar />

      

     







      <div className="flex justify-center flex-wrap">
        {/* first carousel section start here  */}
        <div className="md:w-8/12 hidden md:block my-16">
        <div className="relative overflow-hidden">
  <div className="carousel">
    <div className="carousel-inner">
      <div className="carousel-slide">
        <img src="\_A3A8343.jpg" alt="Image 1" />
      </div>
      <div className="carousel-slide">
        <img src="\DSC00663.jpg" alt="Image 2"/>
      </div>
      <div className="carousel-slide">
        <img src="\DSC00557.jpg" alt="Image 3" />
      </div>
      
    </div>
  </div>
</div>

{/* <div>
        <Slider {...settings}>
          <div className="home_slider">
            <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />

          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
        </Slider>
      </div> */}

        </div>


        {/* ................  */}

        <div className="md:w-8/12  md:hidden my-16">
        <div className="relative overflow-hidden">
  <div className="carousel">
    <div className="carousel-inner">
      <div className="carousel-slide">
        <img src="\DSC00722.jpg" alt="Image 1" />
      </div>
      <div className="carousel-slide">
        <img src="\DSC00729.jpg" alt="Image 2"/>
      </div>
      <div className="carousel-slide">
        <img src="\_64I8763.jpg" alt="Image 3" />
      </div>
      
    </div>
  </div>
</div>

{/* <div>
        <Slider {...settings}>
          <div className="home_slider">
            <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />

          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
        </Slider>
      </div> */}

        </div>


        {/* .................  */}

          {/* first carousel section end here  */}

          <div className="w-8/12 flex justify-center ">

            <div className="md:w-8/12 mb-6">
              <h2 className="text-center text-4xl font-light text-light-black">YOU FEEL. I FOCUS. WE FRAME</h2>
              <p className="text-center font-light text-light-black mt-4">A wedding is a validation coupled with the showcase of Love inclusive of 
various events with exotic venues, food, guests, dresses, jewellery and so on- 
What if it could never be recorded?</p>
              <p className="text-center font-light text-light-black mt-2">A chronology of a couple’s journey where they vow together to be One.</p>
              <p className="text-center font-light text-light-black mt-4">A wedding is a validation coupled with the showcase of Love inclusive of 
various events with exotic venues, food, guests, dresses, jewellery and so on- 
What if it could never be recorded?</p>
            </div>

          </div>


          {/* second carousel start here  */}

          <div className="md:w-80  hidden md:flex justify-center">
          <div className="relative overflow-hidden">
  <div className="carousel">
    <div className="carousel-inner">
      <div className="carousel-slide">
        <img src="\_64I8739 .jpg" alt="Image 1" height={50}/>
      </div>
      <div className="carousel-slide">
        <img src="DSC09703.jpg" alt="Image 2"/>
      </div>
      <div className="carousel-slide">
        <img src="mandhi.jpg" alt="Image 3" height={50}/>
      </div>
    </div>
  </div>
</div>
            

          </div>

         {/* ......................  */}


         <div className="md:w-80  md:hidden my-16">
        <div className="relative overflow-hidden">
  <div className="carousel">
    <div className="carousel-inner">
      <div className="carousel-slide">
        <img src="\_64I8825.jpg" alt="Image 1" />
      </div>
      <div className="carousel-slide">
        <img src="\_64I8781.jpg" alt="Image 2"/>
      </div>
      <div className="carousel-slide">
        <img src="\_64I8742.jpg" alt="Image 3" />
      </div>
      
    </div>
  </div>
</div>

{/* <div>
        <Slider {...settings}>
          <div className="home_slider">
            <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />

          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
          <div>
          <img src="\_A3A8343.jpg" alt="" />
          </div>
        </Slider>
      </div> */}

        </div>



         {/* .......................  */}




      </div>

      <div className="w-full flex justify-center flex-wrap">
      <div className="w-80 md:full flex mt-14 justify-center flex-wrap">
            <h2 className="text-center w-full text-4xl">REAL LOVE STORIES</h2>
            <p className="text-center mt-4">like a river flows surely to the sea, so it goes some things are meant to be.</p>
          </div>

          <div className="w-80 mt-10 flex justify-between flex-wrap">

            <div className="lg:w-28 w-full flex flex-wrap">

              <img src="card-1.jpg" alt="" className="w-full h-96" />
              <span className="mt-4 w-full">10 March 2023</span>
              <span className="mt-2" > Shyam and Nishtha</span>

            </div>
            <div className="lg:w-28 w-full flex flex-wrap">

              <img src="\_64I8781.jpg" alt="" className="w-full h-96" />
              <span className="mt-4 w-full">5 September 2023</span>
              <span className="mt-2" > Shyam and Nishtha</span>

            </div>
            <div className="lg:w-28 w-full flex flex-wrap">

              <img src="\card_3.jpg" alt="" className="w-full h-96" />
              <span className="mt-4 w-full">7 january 2023</span>
              <span className="mt-2" > Krishna and Samiksha</span>

            </div>

          </div>
      </div>

       <Footer/>
    </>
  );
}

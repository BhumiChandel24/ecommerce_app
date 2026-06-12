import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
          <p>Welcome to our store, your one-stop destination for quality products at affordable prices. We are dedicated to providing our customers with the best shopping experience by offering a wide range of carefully selected items. Our goal is to combine quality, convenience, and trust, ensuring that every purchase you make is satisfying and reliable.</p>
          <p>We are passionate about bringing you the best products with great quality and prices. Our mission is to make your shopping experience smooth, secure, and enjoyable every time.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to revolutionize the way people shop online by combining innovation, quality, and convenience into one powerful platform.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards. </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>We make your shopping experience simple and hassle-free with an easy-to-use platform, secure checkout, and fast delivery right to your doorstep. </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Our dedicated support team is always ready to assist you with any queries or concerns, ensuring a smooth and satisfying shopping experience every time. </p>
          </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About

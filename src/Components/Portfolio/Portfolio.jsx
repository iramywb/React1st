import { useState } from 'react'
import port1 from './../../assets/port1.png'
import port2 from './../../assets/port2.png'
import port3 from './../../assets/port3.png'
import './Portfolio.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function Portfolio() {
  const [image, setImage] = useState(port1);


  function displayImage (img) {
    setImage(img);
    document.querySelector('#modal').classList.remove('hidden');
  }
  return (
    <div className="container mx-auto text-[#2c3e50] text-center p-8 mt-[104px]">
      <SectionHeader title="portfolio section" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port1} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port2} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port3} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port1} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port2} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="content relative group">
            <div className='imageOverlay'><i className='fa-solid fa-plus fa-6x'></i></div>
            <img className='cursor-pointer' onClick={(e) => displayImage(e.target.src)} src={port3} alt="" />
          </div>
        </div>
      </div>
      <div id='modal' className='fixed inset-0 bg-blue-500 bg-opacity-25 flex justify-center items-center hidden z-50' onClick={(e) => { e.currentTarget == e.target && e.currentTarget.classList.add('hidden') }}>
        <img src={image} className='w-[600px]' alt="" />
      </div>
    </div>
  )
}

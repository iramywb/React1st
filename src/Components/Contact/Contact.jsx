import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Contact() {
  const [values, setValues] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  })

  function handleChange(name, value) {
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className="container mx-auto text-[#2c3e50] text-center p-8 mt-[104px]">
      <SectionHeader title="contact section" />
      <form className="mt-12 p-4 md:w-1/2 mx-auto grid grid-cols-1 gap-y-10">
        <div className="relative">
          <input type="text" placeholder="userName" id="userName" name='userName' onChange={(e) => { handleChange(e.target.name, e.target.value) }} />
          <label className={values.userName.length > 0 ? '-top-3' : ''} htmlFor="userName">userName :</label>
        </div>
        <div className="relative">
          <input type="text" placeholder="userAge" id="userAge" name='userAge' onChange={(e) => { handleChange(e.target.name, e.target.value) }} />
          <label className={values.userAge.length > 0 ? '-top-3' : ''} htmlFor="userAge">userAge :</label>
        </div>
        <div className="relative">
          <input type="text" placeholder="userEmail" id="userEmail" name='userEmail' onChange={(e) => { handleChange(e.target.name, e.target.value) }} />
          <label className={values.userEmail.length > 0 ? '-top-3' : ''} htmlFor="userEmail">userEmail :</label>
        </div>
        <div className="relative">
          <input type="text" placeholder="userPassword" id="userPassword" name='userPassword' onChange={(e) => { handleChange(e.target.name, e.target.value) }} />
          <label className={values.userPassword.length > 0 ? '-top-3' : ''} htmlFor="userPassword">userPassword :</label>
        </div>
        <div className='flex'>
          <button type="button" className="btn btn-green">Send Message</button>
        </div>
      </form>
    </div>
  )
}

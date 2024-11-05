import React from 'react'
import logo from '../assets/logo.png'
import logo_dark from '../assets/logo_dark.png'
import mail_icon from '../assets/mail_icon.png'
import mail_icon_dark from '../assets/mail_icon_dark.png'

const Footer = () => {
  return (
    <div className="mt-20">
    <div className="text-center">
       


        <div className="w-max flex items-center gap-2 mx-auto">
            <img src={mail_icon} alt="" className="w-6 dark:hidden"/>
            <img src={mail_icon_dark} alt="" className="w-6 hidden dark:block"/>

            ammupriyanka48@gmail.com
        </div>
    </div>
    <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2024 Priyanka Elango. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target='_blank' href="https://instagram.com/_.priyuu_era">Instagram</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/priyanka-e-48b68529b">LinkedIn</a></li>
            <li><a target='_blank' href="https://github.com/priyankaoffi">Github</a></li>
        </ul>
    </div>
 </div>
  )
}

export default Footer

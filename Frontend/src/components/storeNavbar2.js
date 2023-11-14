import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdLocalOffer } from 'react-icons/md'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { RiStore2Fill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'

export default function storeNavbar2() {
  return (
    <>
    <div id="storeNav">
     <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-center mx-auto">

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="flex items-center block py-2 pl-3 pr-4 text-white bg-blue-700 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white">
                <AiFillHome className="mr-2" />
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <AiOutlineInfoCircle className="mr-2" />
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <MdLocalOffer className="mr-2" />
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <BsFillCameraVideoFill className="mr-2" />
                GALLERY
              </Link>
            </li>
    

      <li>
        <Link to="/appointment" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> <FaRegCalendarAlt className="mr-2"/> BOOK AN APPOINTMENT</Link>
      </li>
      <li>
        <Link to="/quotation" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> <HiOutlineClipboardCheck className="mr-2"/> GET A QUOTE</Link>
      </li>
      <li>
        <Link to="/store" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><RiStore2Fill className="mr-2"/>STORE</Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><FiMail className="mr-2"/>CONTACT</Link>
      </li>
      <li>
        <Link to="/login" className="flex items-center block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><FaUserAlt className="mr-2"/>LOGIN</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
    </>
  )
}

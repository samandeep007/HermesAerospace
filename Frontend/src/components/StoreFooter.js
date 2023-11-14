import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaLock, FaShieldAlt } from 'react-icons/fa';

export default function footer() {
  return (
    <>
    
    <footer className="p-6 bg-black">
  <div className="flex flex-col md:flex-row md:justify-between">
    <div className="mb-6 md:mb-0">
      <a href="/" className="flex items-center">
        <span className="text-2xl font-semibold text-white">Hermes Aerospace</span>
      </a>
      <p className="text-sm text-gray-400 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis accumsan.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:self-center">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
        <ul className="text-white">
          <li className="mb-4">
            <a href="/" className="hover:text-gray-400">Flowbite</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400">Tailwind CSS</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
        <ul className="text-white">
          <li className="mb-4">
            <a href="/" className="hover:text-gray-400">Github</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400">Discord</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
        <ul className="text-white">
          <li className="mb-4">
            <a href="/" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-400">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  <div className="flex flex-col md:flex-row md:justify-between">
    <span className="text-sm text-gray-400">&copy; 2023 Hermes Aerospace. All Rights Reserved.</span>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <div className="flex items-center">
        <FaCcVisa className="text-white text-2xl" />
        <FaCcMastercard className="text-white text-2xl ml-2" />
        <FaCcPaypal className="text-white text-2xl ml-2" />
      </div>
      <div className="flex items-center">
        <FaLock className="text-white text-2xl" />
        <span className="text-white text-sm ml-2">Secure Payment</span>
      </div>
      <div className="flex items-center">
        <FaShieldAlt className="text-white text-2xl" />
        <span className="text-white text-sm ml-2">Secure Transactions</span>
        </div>
        </div>
        </div>
      </footer>
    </>
  )
}

import React, { useState } from 'react';
import IC_Logo from '../assets/image/Logo-Cubmu.png';
import IC_Search from '../assets/image/ic_search.png';
import IC_Notif from '../assets/image/ic_notification.png';
import IC_Premium from '../assets/image/ic_premium.png';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full bg-[#1E1F26] shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-24">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <a href="/">
                <img src={IC_Logo} alt="Icon Logo" className="h-[36px]" />
              </a>
              <div className="lg:hidden">
                <ul className="items-center justify-center flex space-x-4 sm:space-x-8">
                  <li className="text-gray-600 ">
                    <button className="cursor-pointer my-auto">
                      <img src={IC_Search} alt="" />
                    </button>
                  </li>
                  <li className="text-gray-600 ">
                    <button className="cursor-pointer">
                      <img src={IC_Notif} alt="" />
                    </button>
                  </li>
                  <li className="text-white">
                    <button
                      className="cursor-pointer inline-flex w-full justify-center py-2 my-auto items-center "
                      onClick={() => setNavbar(!navbar)}
                    >
                      <img src={IC_Premium} alt="" />
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {/* Menu */}
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
                <li className="text-[#B1B2B3] hover:text-white text-sm font-semibold">
                  <a href="/">HOME</a>
                </li>
                <li className="text-[#B1B2B3] hover:text-white text-sm font-semibold">
                  <a href="/">LIVE TV</a>
                </li>
                <li className="text-[#B1B2B3] hover:text-white text-sm font-semibold">
                  <a href="/" className="inline-flex">
                    KATEGORI
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li className="text-[#B1B2B3] hover:text-white text-sm font-semibold">
                  <a href="/">CATCH UP</a>
                </li>
                <li className="text-[#B1B2B3] hover:text-white text-sm font-semibold">
                  <a href="/">MY LIST</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="avatar-icon hidden lg:block">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-8 lg:space-y-0">
                <li className="text-gray-600 ">
                  <button className="cursor-pointer my-auto">
                    <img src={IC_Search} alt="" />
                  </button>
                </li>
                <li className="text-gray-600 ">
                  <button className="cursor-pointer">
                    <img src={IC_Notif} alt="" />
                  </button>
                </li>
                <li className="text-white">
                  <button className="cursor-pointer inline-flex w-full justify-center px-4 py-2 my-auto items-center  ">
                    <img src={IC_Premium} alt="" />
                    <p className="text-sm font-semibold mx-2">BERUANGAIR</p>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

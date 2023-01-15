import React from 'react';
import IC_Logo from '../assets/image/Logo-Cubmu.png';

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-[#1E1F26] py-4">
        <div className="justify-between items-center align-middle px-4 py-5 mx-auto space-x-0 lg:space-x-8 lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div className="footer-left basis-1/2 mr-4 mb-8">
            <img src={IC_Logo} alt="" className="h-[52px] mb-[29px]" />
            <p className="text-sm text-[#C1C1C2] mb-8">
              CubMu adalah layanan streaming dari Transvision yang menyediakan
              berbagai konten VOD menarik dan menghibur. Nikmati semua konten
              dari CubMu di berbagai platform media Android, IOS, TV, dan
              Website
            </p>
            <ul className="items-center  space-y-2 lg:flex lg:space-x-6 lg:space-y-0 text-[#C1C1C2]">
              <li>
                <a href="/" className="text-sm hover:text-white">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li className="hidden lg:block">
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="2" fill="currentColor" />
                </svg>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-white">
                  FAQ
                </a>
              </li>
              <li className="hidden lg:block">
                <svg height="10" width="10">
                  <circle cx="5" cy="5" r="2" fill="currentColor" />
                </svg>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-white">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-right basis-1/2 flex justify-center md:justify-center flex-wrap">
            <div className="bg-auto bg-no-repeat bg-center h-[110px] w-[165px] relative facebook m-2">
              <div className="absolute left-5 bottom-4">
                <p className="text-xs text-[#8A8F9F]">Follow us on</p>
                <a className="text-white text-lg font-bold hover:text-[#C1C1C2]" href='/'>facebook</a>
              </div>
            </div>
            <div className="bg-auto bg-no-repeat bg-center h-[110px] w-[165px] relative twitter m-2">
              <div className="absolute left-5 bottom-4">
                <p className="text-xs text-[#8A8F9F]">Follow us on</p>
                <a className="text-white text-lg font-bold hover:text-[#C1C1C2]" href='/'>Twitter</a>
              </div>
            </div>
            <div className="bg-auto bg-no-repeat bg-center h-[110px] w-[165px] relative instagram m-2">
              <div className="absolute left-5 bottom-4">
                <p className="text-xs text-[#8A8F9F]">Follow us on</p>
                <a className="text-white text-lg font-bold hover:text-[#C1C1C2]" href='/'>Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <p className="text-sm text-[#C1C1C1] text-center">
            © 2022, CubMu All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

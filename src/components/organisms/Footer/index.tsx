import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import Facebook from '@/assets/svg/facebook.svg'
import Instagram from '@/assets/svg/instagram.svg'
import Telegram from '@/assets/svg/telegram.svg'
import LogoFooter from '@/assets/svg/logo.svg'
export default function Footer() {
  return (
    <section className="pb-32 relative overflow-hidden">
      <div className="absolute w-80 h-80 bottom-0 right-0 overflow-hidden">
        <div className="w-60 h-60 rounded-full blur-3xl absolute z-10 -bottom-10 -right-10 bg-accent-4/20 "></div>
      </div>
      <div className="max-w-full lg:max-w-7xl mx-auto relative px-4 ">
        <div className="flex flex-wrap mb-12">
          <div className="w-full lg:w-3/12 px-4">
            <LogoFooter className="mb-3" />
            <p className="text-sm text-gray-500 pr-8">
              &quot;Tingkatkan Kesehatanmu dengan Kebiasaan Makan Sehat Bersama
              Yuk Makan! 💚&quot;
            </p>
          </div>
          <div className="w-full lg:w-2/12 px-4">
            <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">
              Company
            </h6>
            <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/12 px-4">
            <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-7">
              Contact
            </h6>
            <ul className="text-lg text-gray-500 flex flex-col gap-y-2">
              <li>
                <Link href="/">Nomor</Link>
              </li>
              <li>
                <Link href="/">Email</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/12 px-4">
            <h6 className="text-xl tracking-tight text-gray-900 mt-2 mb-2">
              More
            </h6>
            <ul className="text-lg text-gray-500 flex gap-x-5 ">
              <li>
                <a
                  href=""
                  className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                  <span className="relative z-20">
                    <Facebook className="fill-black group-hover:fill-white transition-color duration-300" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="w-10 h-10 bg-white group overflow-hidden relative shadow-lg flex items-center justify-center rounded-full"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="group-hover:opacity-100 opacity-0 z-10 transform rotate-0 group-hover:rotate-180 transition-all duration-300 bg-gradient-social absolute inset-0"></span>
                  <span className="relative z-20">
                    <Instagram className="fill-black group-hover:fill-white transition-color duration-300" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          All rights yukmakan@yukma.com
        </div>
      </div>
    </section>
  )
}

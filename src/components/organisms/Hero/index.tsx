import React from 'react'
import Image from 'next/legacy/image'
import DecoreIntersec from '@/assets/svg/decore-intersect.svg'
import DecoreTextUnderline from '@/assets/svg/text-decore-hero.svg'
import Link from 'next/link'
export default function Hero() {
  return (
    <section className="relative mb-28">
      <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 ">
        <DecoreIntersec className="fill-accent-4" />
      </span>
      <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          {/* sebelah kiri hero */}
          <div
            className="w-full lg:w-6/12 pt-60 "
            data-aos="zoom-in-left"
            data-aos-delay="800"
          >
            <h2 className="w-2/3 lg:w-full text-gray-900 font-serif text-3xl lg:text-[80px] leading-tight lg:leading-[84px] tracking-tighter mb-8">
              <span className="relative">
                YUK MAKAN
                <span className="absolute left-0 top-full lg:-mt-8 -ml-4 -z-10 transform -translate-y-1 lg:translate-y-4">
                  <DecoreTextUnderline className="w-[200px] h-1 lg:w-[730px]  lg:h-4 fill-accent-4" />
                </span>
                {''}
              </span>
              <div className="w-2/3 lg:w-full text-gray-900 font-serif text-xl lg:text-[46px] leading-tight lg:leading-[70px] tracking-tighter mb-8 mt-1">
                <div>
                  {''}cari tahu makanan terbaik{''}
                </div>
                <div>untuk mu</div>
              </div>
            </h2>
            <p className="text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8">
              Yuk Makan cari makanan terbaikmu dan tingkatkan kesehatan
              makananmu dengan kami
            </p>
            <div className="flex">
              <Link
                href="#section-category"
                className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl"
              >
                Jelajahi
              </Link>
            </div>
          </div>
          {/* sebelah kanan hero */}
          <div
            className="hidden lg:block w-[783px] h-[764px] pt-24 relative"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <div className="relative z-20 transform translate-x-20 translate-y-32">
              <Image
                priority
                layout="responsive"
                width={750}
                height={500}
                src="/png/food-2.png"
                alt="logo yuk makan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

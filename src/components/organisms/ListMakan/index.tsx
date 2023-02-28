import React from 'react'
import Image from 'next/legacy/image'
import DecoreSwirl from '@/assets/svg/decore-swirel-style-1.svg'
import Date from '@/assets/svg/date.svg'
import Time from '@/assets/svg/time.svg'
import Map from '@/assets/svg/map.svg'
import Link from 'next/link'
export default function ListMakan() {
  return (
    <section className="mb-28 scroll-mt-20" id="acara">
      <div className="max-w-7xl mx-auto relative px-4">
        <div
          className="text-center flex flex-col mb-16"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3 className="uppercase text-lg mb-2 text-gray-500">List Makanan</h3>
          <h3 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug">
            List Makanan Sehat
          </h3>
        </div>
        <div className="flex flex-wrap relative pr-0 lg:pr-10">
          <div className="absolute w-[96px] h-[252px] bottom-10 right-0">
            <DecoreSwirl className="stroke-gray-500" />
          </div>
          <div
            className="mb-10 lg:mb-0 w-full lg:w-6/12 px-6 relative z-20"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
              <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96">
                <Image
                  layout="fill"
                  className="object-cover"
                  src="/jpg/tipe-food-1.jpg"
                  alt=""
                />
              </div>
              <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                <div className="pt-7 px-4 flex justify-between">
                  <h6 className="text-lg w-1/2">
                    Gado-Gado dengan sedikit kalori
                  </h6>
                  <div className="flex">
                    <span className="material-icons text-green-500 mx-2">
                      star
                    </span>
                    <h6 className="text-lg text-green-500">4,5</h6>
                  </div>
                </div>
                <div className="pt-4 px-5 flex items-center">
                  <Link
                    href="#section-category"
                    className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl w-auto "
                  >
                    <span className="flex items-center">Detail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-10 lg:mb-0 w-full lg:w-6/12 px-6 relative z-20"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="rounded-3xl pb-10 shadow-great bg-white flex flex-col">
              <div className="rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-white relative h-96">
                <Image
                  layout="fill"
                  className="object-cover"
                  src="/jpg/tipe-food-2.jpg"
                  alt=""
                />
              </div>
              <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                <div className="pt-7 px-5 flex justify-between">
                  <h6 className="text-lg w-1/2">
                    Pecel sayur untuk menjaga metabolisme tubuh
                  </h6>
                  <div className="flex">
                    <span className="material-icons text-green-500 mx-2">
                      star
                    </span>
                    <h6 className="text-lg text-green-500">4,1</h6>
                  </div>
                </div>
                <div className="pt-4 px-5 flex items-center">
                  <Link
                    href="#section-category"
                    className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl w-auto "
                  >
                    <span className="flex items-center">Detail</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

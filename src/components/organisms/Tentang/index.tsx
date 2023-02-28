import React from 'react'
import Image from 'next/legacy/image'
export default function Tentang() {
  return (
    <section className="mb-28 scroll-mt-20" id="tentangkami">
      <div className="max-w-7xl mx-auto relative px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-0 lg:pl-8 pr-0 lg:pr-20">
            <div className="flex flex-col mb-16">
              <h3
                className="uppercase text-lg mb-2 text-gray-500"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                apasih yang ada di yuk makan
              </h3>
              <h3
                className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight lg:leading-snug mb-10"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                Tentang
                <p
                  className="break-words"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                >
                  Yuk Makan
                </p>
              </h3>
              <ul
                className="flex flex-col gap-y-10 pr-0 lg:pr-10"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <li className="flex items-center">
                  <span className="bg-accent-1 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12">
                    <span className="material-icons">map</span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Pencarian Cepat
                    </h6>
                    <p className="font-[400] text-gray-500">
                      Anda dapat menemukan makanan yang cepat dan sehat dengan
                      Yuk Makan
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-accent-2 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12">
                    <span className="material-icons">volunteer_activism</span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Menu Makanan Sehat dan Variatif
                    </h6>
                    <p className="font-[400] text-gray-500">
                      Yuk Makan menyediakan berbagai pilihan menu makanan sehat
                      dan variatif yang dapat memenuhi kebutuhan nutrisi harian
                      Anda.
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-accent-6 rounded-xl flex flex-none text-white justify-center items-center w-12 h-12">
                    <span className="material-icons">co_present</span>
                  </span>
                  <div className="flex flex-col ml-4 leading-5">
                    <h6 className="font-bold mb-1 text-gray-500">
                      Jaminan Resep kesehatan makanan
                    </h6>
                    <p className="font-[400] text-gray-500">
                      Yuk Makan menjamin setiap makanan yang tampilkan memiliki
                      nilai kesehatan dari pakar kesehatan gizi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <div className="w-[370px] relative">
              <div className="absolute rounded-full blur-2xl h-80 w-96 top-10 -right-2 lg:-right-10 flex items-center justify-center overflow-hidden">
                <div className="w-80 h-80 rounded-full blur-2xl z-10 bg-accent-4/40"></div>
              </div>
              <div
                className="mx-8 lg:mx-4 rounded-3xl h-72 w-72 lg:h-96 lg:w-96 top-5 -right-0 lg:-right-16 relative overflow-hidden mb-6"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <Image width={400} height={400} src="/png/food-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

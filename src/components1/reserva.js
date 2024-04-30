import Suite from "../assets/imagenes/habitaciones/habitación_suite.jpg"
import Doble from "../assets/imagenes/habitaciones/habitacion_doble.jpg"
import King from "../assets/imagenes/habitaciones/habitacion_king.jpg"


function Reserva(){
    return(
        <section

        class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                    <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-[#0D3B66]">Reservar habitaciones</h2>
                        <h2 class="font-manrope font-bold text-xl leading-8 text-[#275E92]">Habitaciones disponibles</h2>
                    </div>
                    <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                        <div class="col-span-12 md:col-span-7">
                            <p class="font-normal text-lg leading-8 text-gray-400">Detalles de la habitación</p>
                        </div>
                        <div class="col-span-12 md:col-span-5">
                            <div class="grid grid-cols-5">
                                <div class="col-span-3">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Cantidad</p>
                                </div>
                                <div class="col-span-2">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={Suite} alt="Suite"
                                class="mx-auto"/>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Habitación Suite</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Television, sillones ducha y jacuzzi</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                <div class="flex items-center h-full">
                                    <button
                                        class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                        placeholder="1"/>
                                    <button
                                        class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={Doble} alt="Doble"
                                class="mx-auto"/>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Habitación doble</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">2 camas, televisión y 1 baño</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$100.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                <div class="flex items-center h-full">
                                    <button
                                        class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                        placeholder="2"/>
                                    <button
                                        class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$200.00</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={King} alt="perfume bottle image"
                                class="mx-auto"/>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Habitación King</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">1 Cama tamaño King, 1 baño, AC y televisión</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$150.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                <div class="flex items-center h-full">
                                    <button
                                        class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                                stroke-linecap="round" />
                                        </svg>
                                    </button>
                                    <input type="text"
                                        class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                                        placeholder="1"/>
                                    <button
                                        class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                                        <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 22 22" fill="none">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                                stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$150.00</p>
                            </div>
                        </div>
                    </div>


                    <div class="flex items-center justify-end mt-8">
                        <button
                            class="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-[#5E8C61] shadow-sm shadow-transparent transition-all duration-500 hover:text-[#0D3B66]">
                            Revisar hotel
                            <svg class="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path
                                    d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                                    stroke="#0D3B66" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-[#0D3B66] pb-8 border-b border-gray-300">
                        Resumen de la reservación</h2>
                    <div class="mt-8">
                        <div class="flex items-center justify-between pb-6">
                            <p class="font-normal text-lg leading-8 text-black">Reserva activa: </p>
                            <p class="font-medium text-lg leading-8 text-black">$470.00</p>
                        </div>
                        <form>
                            <div class="flex pb-4 w-full">
                                <div class="relative w-full ">
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                                    </div>
                                    
                                    <p>Habitación Suite</p>
                                    <p>Habitación Doble</p>
                                    <p>Habitación King</p>
                                    <div id="dropdown"
                                        class="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdown-button">
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center border-b border-gray-200">
                                <button
                                    class="rounded-lg w-full bg-[#0D3B66] py-2.5 px-4 text-white text-md font-semibold text-center mb-8 transition-all duration-500 hover:bg-[#275E92]">Revisar reservación</button>
                            </div>
                            <div class="flex items-center justify-between py-8">
                                <p class="font-medium text-xl leading-8 text-black">Total a pagar</p>
                                <p class="font-semibold text-xl leading-8 text-[#5E8C61]">$470.00</p>
                            </div>
                            <button
                                class="w-full text-center bg-[#0D3B66] rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-[#275E92]">Efectuar pago</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </section>
                                            
    )
}

export default Reserva
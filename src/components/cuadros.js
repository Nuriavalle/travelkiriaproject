import numero1 from "../images/1.jpg"
import numero2 from "../images/2.jpg"
import numero3 from "../images/3.jpg"
import numero4 from "../images/4.jpg"
import { Link } from "react-router-dom"

function Cuadros() {
  return (
    <div class="container flex justify-center w-full  mx-auto text-center mb-2 mt-4 pb-3">
      <Link type="button" class="py-6 px-6 me-2 mb-2 text-lg pe-10 border border-4 text-end font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <div class="flex justify-center items-center">
          <img src={numero1} class="w-16 h-16" />
          <span class="px-2">HOTEL</span>
        </div>
      </Link>
      <Link to="/HabitacionHotel" class="py-6 px-6 me-2 mb-2 text-lg pe-10 border border-4 text-end font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <div class="flex justify-center items-center">
          <img src={numero2} class=" w-16 h-16" />
          <span class="px-2">HABITACIONES</span>
        </div>
      </Link>
      <Link to="/ReservaHabi" type="button" class="py-6 px-6 me-2 mb-2 text-lg pe-10 border border-4 text-end font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <div class="flex justify-center items-center">
          <img src={numero3} class=" w-16 h-16" />
          <span class="px-2">RESERVA</span>
        </div>
      </Link>
      <Link to="/MetododePago" type="button" class="py-6 px-6 me-2 mb-2 text-lg pe-10 border border-4 text-end font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <div class="flex justify-center items-center">
          <img src={numero4} class=" w-16 h-16" />
          <span class="px-2">PAGO</span>
        </div>
      </Link>
    </div>
  );
};
export default Cuadros;
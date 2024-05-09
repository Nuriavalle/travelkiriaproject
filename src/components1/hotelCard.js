import Hotel1 from "../assets/imagenes/hoteles/hotel 1.jpg";
import Hotel2 from "../assets/imagenes/hoteles/hotel 2.jpg";
import Hotel3 from "../assets/imagenes/hoteles/hotel 3.jpg";
import Hotel4 from "../assets/imagenes/hoteles/hotel 4.jpg";
import Ubicacion from "../assets/imagenes/hoteles/ubicacion.png";
import Cama from "../assets/imagenes/hoteles/cama.png";
import RatingExcelente from "./excelente";
import { Link } from "react-router-dom";

function HotelCard() {
  return (
    <div class="lg:w-2/3 sm:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 bg-[#FAF0CA] overflow-y-auto h-[600px]">
      <div class="container px-2 mx-auto flex flex-wrap">
        {/* Este va  a ser el que se repite */}
        <div class="border-[3px] bg-[#F8F8F8] my-4 rounded-full border-gray-300 border-opacity-40 p-4 flex items-center shadow-xl">
          <div class="lg:w-1/3 sm:w-1/2 w-full mx-8">
            <img src={Hotel1} class="rounded-xl w-full h-[160px]"></img>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full mr-8">
            <h1 class="font-bold text-xl mb-2">Hotel "Las Tunas"</h1>
            <p class="text-gray-700 text-base">
              Encantador hotel frente al mar con tres habitaciones y una terraza
              espectacular. Con vistas panorámicas
            </p>
            <div class="lg:w-1/3 sm:w-1/2 w-full mr-4 flex items-center">
              <p class="mr-2 text-[#0D3B66]">Calificación:</p>
              <RatingExcelente />
              <p class="ml-2 text-[#0D3B66] font-bold">Excelente.</p>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full border-l-4 border-gray-600 border-opacity-50 pl-4 ml-4">
            <div class="flex items-center mb-4">
              <img src={Cama} class="w-8 h-8 mr-2"></img>
              <p>2 Camas king</p>
            </div>
            <div class="flex items-center">
              <img src={Ubicacion} class="w-8 h-8 mr-2"></img>
              <p>Las Tunas, Sonsonate.</p>
            </div>
            <div class="mt-4">
              <button class="bg-[#0D3B66] text-white w-[190px] p-4 px-8 py-1 hover:bg-[#1D588F] rounded-lg">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="border-[3px] bg-[#F8F8F8] my-4 rounded-full border-gray-300 border-opacity-40 p-4 flex items-center shadow-xl">
          <div class="lg:w-1/3 sm:w-1/2 w-full mx-8">
            <img src={Hotel2} class="rounded-xl w-full h-[160px]"></img>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full mr-8">
            <h1 class="font-bold text-xl mb-2">Hotel "Holiday Inn"</h1>
            <p class="text-gray-700 text-base">
              Hotel céntrico y acogedor brinda habitaciones encantadoras y una
              ubicación privilegiada en el corazón de la ciudad.
            </p>
            <div class="lg:w-1/3 sm:w-1/2 w-full mr-4 flex items-center">
              <p class="mr-2 text-[#0D3B66]">Calificación:</p>
              <RatingExcelente />
              <p class="ml-2 text-[#0D3B66] font-bold">Excelente.</p>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full border-l-4 border-gray-600 border-opacity-50 pl-4 ml-4">
            <div class="flex items-center mb-4">
              <img src={Cama} class="w-8 h-8 mr-2"></img>
              <p>3 Camas king</p>
            </div>
            <div class="flex items-center">
              <img src={Ubicacion} class="w-8 h-8 mr-2"></img>
              <p>Santa Elena, San Salvador.</p>
            </div>
            <div class="mt-4">
              <Link to="/VistaHoliday" class="bg-[#0D3B66] text-white w-[190px] p-4 px-16 py-1 hover:bg-[#1D588F] rounded-lg">
                Reservar</Link>
            </div>
          </div>
        </div>
        <div class="border-[3px] bg-[#F8F8F8] my-4 rounded-full border-gray-300 border-opacity-40 p-4 flex items-center shadow-xl">
          <div class="lg:w-1/3 sm:w-1/2 w-full mx-8">
            <img src={Hotel3} class="rounded-xl w-full h-[160px]"></img>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full mr-8">
            <h1 class="font-bold text-xl mb-2">Hotel "Los Mangos"</h1>
            <p class="text-gray-700 text-base">
              Hotel tranquilo, ubicado en un acantilado con vista al océano Pacífico
            </p>
            <div class="lg:w-1/3 sm:w-1/2 w-full mr-4 flex items-center">
              <p class="mr-2 text-[#0D3B66]">Calificación:</p>
              <RatingExcelente />
              <p class="ml-2 text-[#0D3B66] font-bold">Excelente.</p>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full border-l-4 border-gray-600 border-opacity-50 pl-4 ml-4">
            <div class="flex items-center mb-4">
              <img src={Cama} class="w-8 h-8 mr-2"></img>
              <p>4 camas dobles</p>
            </div>
            <div class="flex items-center">
              <img src={Ubicacion} class="w-8 h-8 mr-2"></img>
              <p>Punta mango, Usulutan.</p>
            </div>
            <div class="mt-4">
              <button class="bg-[#0D3B66] text-white w-[190px] p-4 px-8 py-1 hover:bg-[#1D588F] rounded-lg">
                Reservar
              </button>
            </div>
          </div>
        </div>
        <div class="border-[3px] bg-[#F8F8F8] my-4 rounded-full border-gray-300 border-opacity-40 p-4 flex items-center shadow-xl">
          <div class="lg:w-1/3 sm:w-1/2 w-full mx-8">
            <img src={Hotel4} class="rounded-xl w-full h-[160px]"></img>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full mr-8">
            <h1 class="font-bold text-xl mb-2">Hotel "Finca Campo Bello"</h1>
            <p class="text-gray-700 text-base">
              hotel boutique y finca de cafés especiales en las faldas del volcán Santa Ana en El Salvador.
            </p>
            <div class="lg:w-1/3 sm:w-1/2 w-full mr-4 flex items-center">
              <p class="mr-2 text-[#0D3B66]">Calificación:</p>
              <RatingExcelente />
              <p class="ml-2 text-[#0D3B66] font-bold">Excelente.</p>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 w-full border-l-4 border-gray-600 border-opacity-50 pl-4 ml-4">
            <div class="flex items-center mb-4">
              <img src={Cama} class="w-8 h-8 mr-2"></img>
              <p>4 Camas individuales</p>
            </div>
            <div class="flex items-center">
              <img src={Ubicacion} class="w-8 h-8 mr-2"></img>
              <p>Cerro verde, Santa Ana.</p>
            </div>
            <div class="mt-4">
              <button class="bg-[#0D3B66] text-white w-[190px] p-4 px-8 py-1 hover:bg-[#1D588F] rounded-lg">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;

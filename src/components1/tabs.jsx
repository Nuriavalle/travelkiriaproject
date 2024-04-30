import { useState } from "react";
import InfoGeneral from "../components1/infoGeneral";
import GaleriaFotos from "../components1/galeriaFotos";
import Ubicacion from "../components1/ubicacion";
import Fotos from "../assets/imagenes/perfilHotel/galeria.png"
import Direccion from "../assets/imagenes/perfilHotel/ubicacion.png"
import Info from "../assets/imagenes/perfilHotel/info.png"


function Tabs() {
  const [mostrarContenido, setMostrarContenido] = useState(1);

  console.log("mostrarContenido ==>", mostrarContenido);

  const cambiarContenido = (idContenido) => {
    setMostrarContenido(idContenido);
  };

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 mx-auto flex flex-wrap flex-col">
        <div class="flex mx-auto flex-wrap mb-20">
          <a
            onClick={() => cambiarContenido(1)}
            // className={${()? 'TRUE agregar' : 'FALSE'} default}

            className={` ${
              mostrarContenido == 1
                ? "bg-gray-100 border-[#0D3B66] text-[#0D3B66]"
                : ""
            } sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
            </svg>
            <img src={Info} class="w-auto h-10 pr-4"></img>
            Información general
          </a>

          <a
            onClick={() => cambiarContenido(2)}
            className={` ${
              mostrarContenido == 2
                ? "bg-gray-100 border-[#0D3B66] text-[#0D3B66]"
                : ""
            } sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
            </svg>
            <img src={Fotos} class="w-auto h-10 pr-4"></img>
            Galeria de fotos
          </a>

          <a
            onClick={() => cambiarContenido(3)}
            className={` ${
              mostrarContenido == 3
                ? "bg-gray-100 border-[#0D3B66] text-[#0D3B66]"
                : ""
            } sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
            </svg>
            <img src={Direccion} class="w-auto h-10 pr-4"></img>
            Ubicación
          </a>
        </div>

        {mostrarContenido == 1 && <InfoGeneral />}
        {mostrarContenido == 2 && <GaleriaFotos />}
        {mostrarContenido == 3 && <Ubicacion />}
      </div>
    </section>
  );
}

export default Tabs;

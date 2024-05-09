import PortadaH from "../assets/imagenes/perfilHotel/portada.jpg"
import PerfilH from "../assets/imagenes/perfilHotel/perfil.png"
import Tabs from "./tabs";

function PerfilHotel() {
    return (
        <>
            <section class="relative pt-36 pb-8">
                <img src={PortadaH} alt="cover-image" class="w-full absolute top-0 left-0 z-0 h-60 object-cover" />

                <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
                    <div class="flex items-center justify-center relative z-10 mb-2.5">
                        <img src={PerfilH} alt="user-avatar-image" class="border-4 border-solid border-white rounded-full" />
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <Tabs />
            </div>
        </>
    )
}
export default PerfilHotel;

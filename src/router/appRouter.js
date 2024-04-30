import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrodeUsuario from '../page/RegistrodeUsuario';
import IniciodeSesion from '../page/IniciodeSesion';
import Footer from '../components/footer';
import VistaHoliday from '../page/vistaHoliday';
import Landing from '../page/Landing1';
import RegistrodeHotel from '../page/RegistrodeHotel';
import HabitacionHotel from '../page/HabitacionHotel';
import Terminos from '../page/Terminos';
import ReservaHabi from '../page/Reserva';
import MetodoDePago from '../page/metododePago';
import PerfildelHotel1 from '../page/PerfildelHotel';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/RegistrodeHotel" element={<RegistrodeHotel />} />
                <Route path="/RegistrodeUsuario" element={<RegistrodeUsuario />} />
                <Route path="/IniciodeSesion" element={<IniciodeSesion />} />
                <Route path="/VistaHoliday" element={<VistaHoliday />} />
                <Route path="/HabitacionHotel" element={<HabitacionHotel />} />
                <Route path="/Terminos" element={<Terminos/>}/>
                <Route path="/ReservaHabi" element={<ReservaHabi/>}/>
                <Route path="/metododePago" element={<MetodoDePago/>}/>
                <Route path="/PerfildelHotel" element={<PerfildelHotel1/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
};
export default AppRouter;
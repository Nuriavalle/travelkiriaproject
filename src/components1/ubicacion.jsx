
function Ubicacion() {
    return (
        <section class="bg-gray-100">
            <div class="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold text-gray-900">Detalles de la ubicación del hotel</h2>
                    <p class="mt-4 text-lg text-gray-500">Especificar correctamente en el mapa</p>
                </div>
                <div class="mt-16 lg:mt-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                                width="100%" height="480" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div>
                            <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div class="px-6 py-4">
                                    <h3 class="text-lg font-medium text-gray-900">Definir locación específica</h3>
                                    <input type="text" placeholder="Cerro verde, Santa Ana" class="py-2 w-full rounded-lg"></input>
                                </div>
                                <div class="border-t border-gray-200 px-6 py-4">
                                    <h3 class="text-lg font-medium text-gray-900">Definir rutas cercanas</h3>
                                    <input type="text" placeholder="Calle rumbo Cerro verde" class="py-2 w-full mt-4 rounded-lg"></input>
                                    <input type="text" placeholder="5ta avenida, Santa Ana" class="py-2 w-full mt-4 rounded-lg"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Ubicacion;
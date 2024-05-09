function GaleriaFotos() {
    return (
        <section>
            <div class="flex items-center justify-center">
                <div class="mx-auto w-full max-w-[550px] bg-white">
                    <form class="py-4 px-9">
                        <div class="mb-6 pt-4">
                            <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                                Subir imágenes del hotel
                            </label>
                            <div class="mb-8">
                                <input type="file" name="file" id="file" class="sr-only" />
                                <label for="file"
                                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    <div>
                                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Suelta archivos aqui
                                        </span>
                                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                            O
                                        </span>
                                        <span
                                            class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                            Buscar
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Seleccionar el tipo de habitación
                                </label>
                                <select class="py-2 px-40 border-2 border-gray-200">
                                    <option>Habitación Suite</option>
                                    <option>Habitación Doble</option>
                                    <option>Habitación Individual</option>
                                    <option>Habitación King</option>
                                    <option>Habitación Queen</option>
                                </select>
                            </div>
                            <div class="mb-8">
                                <input type="file" name="file" id="file" class="sr-only" />
                                <label for="file"
                                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
                                    <div>
                                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Suelta archivos aqui
                                        </span>
                                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                            O
                                        </span>
                                        <span
                                            class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                                            Buscar
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form w-full rounded-md bg-[#0D3B66] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Guardar cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default GaleriaFotos;
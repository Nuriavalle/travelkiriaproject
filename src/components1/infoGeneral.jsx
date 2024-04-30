function InfoGeneral() {
  return (

        <div class="">

            <div class="mx-14 mt-2 border-2 border-gray-300 rounded-lg mb-20">
            <div class="mt-10 text-center font-bold">Agregue la Información de su</div>
            <div class="mt-3 text-center text-4xl font-bold">Hotel</div>
            <div class="p-8">
                <div class="flex gap-4">
                <input type="Name" name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Número de teléfono o celular" />
                <input type="email" name="email" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Correo electrónico" />
                </div>
                <div class="my-6 flex gap-4">
                <select name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                    <option  class="font-semibold text-slate-400">Seleccione el departamento</option>
                    <option  class="font-semibold text-slate-400">San Salvador</option>
                    <option  class="font-semibold text-slate-400">Santa Ana</option>
                    <option  class="font-semibold text-slate-400">San Miguel</option>
                    <option  class="font-semibold text-slate-400">Sonsonate</option>
                    <option  class="font-semibold text-slate-400">La libertad</option>
                    <option  class="font-semibold text-slate-400">La Unión</option>
                    <option  class="font-semibold text-slate-400">Usulutan</option>
                    <option  class="font-semibold text-slate-400">San Vicente</option>
                    <option  class="font-semibold text-slate-400">Morazan</option>
                    <option  class="font-semibold text-slate-400">Ahuachapan</option>
                    <option  class="font-semibold text-slate-400">Chalatenango</option>
                </select>
                <select name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
                    <option  class="font-semibold text-gray-500">Seleccione el municipio o distrito</option>
                </select>
                </div>
                <input type="text" name="web" class="mt-1 mb-8 block rounded-md border border-slate-300 bg-white w-[1100px] px-3 py-4 placeholder-slate-500 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Agregue el enlace al sitio web" />
                <div class="">
                <textarea name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500">Agregue una breve descripción del hotel</textarea>
                </div>
                
                <div class="text-center">
                <a class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Guardar cambios</a>
                </div>
            </div>
            </div>

        </div>

    
  );
}

export default InfoGeneral;

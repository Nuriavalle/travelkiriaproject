import termsYconditions from "../assets/imagenes/footer/terminos.png"

function TerminosYcondiciones() {
  return (
    <section id="Terminos">
      <div class="flex items-center">
        <div>
          <h2 class="text-5xl pt-8 p-4 text-[#0D3B66] font-bold">
            Términos y condiciones para la Plataforma Travelkiria, Gestión
            Hotelera y Reservas en Línea:
          </h2>
          <hr class="terms" />
          <p class="p-8 text-justify text-gray-600">
            Bienvenido a la Plataforma de Gestión Hotelera y Reservas en Línea
            "Travelkiria". Estos términos y condiciones rigen el uso de nuestra
            aplicación web progresiva y todos los servicios relacionados
            ofrecidos por nosotros. Al acceder y utilizar nuestra plataforma,
            aceptas estar legalmente vinculado por estos Términos. Si no estás
            de acuerdo con alguno de los siguientes términos, por favor no
            utilices nuestra plataforma.
          </p>
          <ul class="viñetas p-2 pl-10">
            <li><a href="#Uso">Uso de la plataforma</a></li>
            <li><a href="#registro">Registro de usuarios</a></li>
            <li><a href="#reservas">Reservas de habitaciones</a></li>
            <li><a href="#pagos">Pagos y transacciones</a></li>
            <li><a href="#cancelacion">Política de cancelación y reembolso</a></li>
            <li><a href="#reembolso">Precios y políticas de reembolso</a></li>
            <li><a href="#comentarios">Comentarios y valoraciones</a></li>
            <li><a href="#privacidad">Privacidad y seguridad</a></li>
            <li><a href="#propiedad">Propiedad intelectual</a></li>
            <li><a href="#modificaciones">Modificaciones de los Términos</a></li>
            <li><a href="#ley">Ley Aplicable</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div class="p-4 mr-10">
          <img src={termsYconditions} alt="#" class=""/>
        </div>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="Uso">Uso de la plataforma</h1>
      
      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        1.1. La Plataforma de Gestión Hotelera y Reservas en Línea es una
        aplicación web progresiva diseñada para facilitar la reserva y gestión
        de habitaciones de hotel tanto para clientes como para hoteles.
      </p>
      <p>
        1.2. Al acceder a nuestra plataforma, aceptas utilizarla únicamente con
        fines legales y de acuerdo con estos Términos.
      </p>
      <p>
        1.3. Nos reservamos el derecho de modificar, suspender o interrumpir
        cualquier parte de la plataforma en cualquier momento y sin previo
        aviso.
      </p>
      </div>
      

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="registro">Registro de Usuarios</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        2.1. Algunas funciones de la plataforma pueden requerir que los usuarios
        se registren y creen una cuenta.
      </p>
      <p>
        2.2. Los usuarios son responsables de mantener la confidencialidad de
        sus credenciales de inicio de sesión y de todas las actividades que
        ocurran bajo su cuenta.
      </p>
      <p>
        2.3. Los usuarios se comprometen a proporcionar información precisa y
        actualizada durante el proceso de registro.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="reservas">Reservas de Habitaciones</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        3.1. Los usuarios pueden explorar y buscar habitaciones disponibles en
        los hoteles sin necesidad de registrarse en la plataforma.
      </p>
      <p>
        3.1. Los usuarios pueden explorar y buscar habitaciones disponibles en
        los hoteles sin necesidad de registrarse en la plataforma.
      </p>
      <p>
        3.2. Para realizar reservas de habitaciones y acceder a funciones
        avanzadas de gestión, los usuarios deben registrarse e iniciar sesión en
        la plataforma.
      </p>
      <p>
        3.3. Todas las reservas están sujetas a disponibilidad y confirmación
        por parte del hotel correspondiente.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="pagos">Pagos y Transacciones</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        4.1. Nuestra plataforma ofrece un sistema de procesamiento de pagos
        seguro y eficiente para confirmar las reservas de habitaciones.
      </p>
      <p>
        4.2. Los usuarios deben proporcionar información de pago precisa y
        válida para completar las transacciones.
      </p>
      <p>
        4.3. Nosotros no almacenamos ni tenemos acceso a la información
        financiera sensible de los usuarios.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="cancelacion">Política de Cancelación y Reembolso</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        5.1 Las reservas realizadas a través de nuestra Plataforma de Gestión
        Hotelera y Reservas en Línea son vinculantes y no pueden ser canceladas
        una vez confirmadas.
      </p>
      <p>
        5.2 Al realizar una reserva, el usuario acepta los términos y
        condiciones establecidos en nuestra política de cancelación y reembolso.
      </p>
      <p>
        5.3 No se realizarán reembolsos por cancelaciones de reservas, cambios
        en las fechas de estancia, salidas anticipadas o cualquier otra
        modificación en las reservas confirmadas.
      </p>
      <p>
        5.4 En caso de que el usuario no se presente en el hotel en la fecha de
        llegada programada, se considerará una cancelación y no se emitirá
        ningún reembolso.
      </p>
      <p>
        5.5 En situaciones excepcionales, como emergencias médicas o desastres
        naturales, se puede considerar la posibilidad de reembolsos parciales o
        créditos para futuras reservas, a discreción de la administración del
        hotel.
      </p>
      <p>
        5.6 Los usuarios pueden comunicarse directamente con el hotel para
        solicitar cambios en las reservas o cualquier otra consulta relacionada
        con su estancia.
      </p>
      <p>
        5.7 Nos reservamos el derecho de modificar esta política de cancelación
        y reembolso en cualquier momento y sin previo aviso. Los cambios
        entrarán en vigor inmediatamente después de su publicación en la
        plataforma.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="reembolso">Precios y Políticas de Reembolso</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        6.1 Los precios de las habitaciones y las políticas de reembolso están
        determinados por cada hotel individualmente y pueden variar según la
        ubicación, la temporada y otros factores.
      </p>
      <p>
        6.2 La Plataforma de Gestión Hotelera y Reservas en Línea actúa
        únicamente como un intermediario para facilitar las reservas entre los
        usuarios y los hoteles.
      </p>
      <p>
        6.3 Los usuarios deben revisar y aceptar las políticas de precios y
        reembolso de cada hotel antes de confirmar una reserva a través de
        nuestra plataforma.
      </p>
      <p>
        6.4 Nos esforzamos por proporcionar información precisa y actualizada
        sobre los precios y las políticas de reembolso de cada hotel, pero no
        podemos garantizar la exactitud de esta información en todo momento.
      </p>
      <p>
        6.5 En caso de discrepancia entre la información proporcionada en
        nuestra plataforma y la información proporcionada por el hotel,
        prevalecerán los términos y condiciones establecidos por el hotel.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="comentarios">Comentarios y valoraciones</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        7.1. Los usuarios pueden dejar comentarios y valoraciones sobre su
        experiencia en los hoteles después de completar una estancia.
      </p>
      <p>
        7.2. Nos reservamos el derecho de moderar y eliminar cualquier
        comentario que consideremos inapropiado o que viole estos Términos.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="privacidad">Privacidad y seguridad</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        8.1. Nos comprometemos a proteger la privacidad y seguridad de la
        información personal de nuestros usuarios de acuerdo con nuestra
        Política de Privacidad.
      </p>
      <p>
        8.2. Los usuarios son responsables de mantener la seguridad de sus
        cuentas y de informarnos de cualquier actividad no autorizada.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="propiedad">Propiedad intelectual</h1>
      
      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        9.1 Todos los derechos de propiedad intelectual relacionados con la plataforma
        y su contenido son propiedad de sus respectivos propietarios.
      </p>
      <p>
        9.2 Los usuarios aceptan no copiar, modificar, distribuir, transmitir, mostrar, 
        vender, licenciar ni utilizar de ninguna manera el contenido de la plataforma 
        sin nuestro consentimiento previo por escrito.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="modificaciones">Modificaciones de los Términos</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        10.1 Nos reservamos el derecho de modificar estos Términos en cualquier momento y sin previo aviso.
      </p>
      <p>
        10.2 Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="ley">Ley Aplicable</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        11.1 Estos Términos están sujetos a las leyes vigentes de El Salvador.
      </p>
      </div>

      <h1 class="text-3xl text-[#2B6DAB] pt-8 pl-8" id="contacto">Contacto</h1>

      <div class="p-8 text-justify text-gray-600 pr-20">
      <p>
        12.1. Si tienes alguna pregunta o inquietud sobre estos Términos, por favor
        contáctanos a través de los canales de soporte proporcionados en la plataforma.
      </p>
      </div>

    </section>
  );
}

export default TerminosYcondiciones;

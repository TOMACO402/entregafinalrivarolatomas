const Politicas = () => {
    return(
        <div className="container my-5"> 
        <div className="col">
            <div className="row">
                <div className="container my-5">
                    <div className="row">
                    <h1 className="itemnombre">Políticas de Compra y Devolución</h1>
                    </div>
                    <div className="compra">
                    <button className="itemprecio btn mt-5 ">Políticas de Compra</button>
                        <p className="muted"> <a className="Inicio btn mt-3" href={"/"} data-bs-toggle="tooltip" data-bs-title="Default tooltip">Inicio </a>
                            <p className="ms-4 mt-3">En esta página te sugerimos que indiques todas las instrucciones para realizar una compra en tu tienda. Por ejemplo:</p>
                        <ol class="list-group list-group-numbered">
                        <li class="list-group-item">Elige el producto que deseas comprar.</li>
                        <li class="list-group-item">Haz clic en el botón de "Agregar al carrito". Esto agregará el producto a tu carrito y te llevará al mismo.</li>
                        <li class="list-group-item">Puedes seguir agregando otros productos al carrito o sino haz clic en "Iniciar Compra".</li>
                        <li class="list-group-item">Completa tus datos de contacto y haz clic en "Continuar".</li>
                        <li class="list-group-item">Ingresa la dirección a donde deseas recibir el producto. Luego haz clic en "Continuar".</li>
                        <li class="list-group-item">Selecciona el método de envío que desees y haz clic en "Continuar".</li>
                        <li class="list-group-item">Elige el medio de pago.</li>
                        <li class="list-group-item">Una vez que hayas elegido el medio de pago, haz clic en "Continuar".</li>
                        <li class="list-group-item">Finalmente en la página de Confirmación de compra puedes revisar toda la información de la compra. Luego haz clic en "Continuar".</li>
                        <li class="list-group-item">Ahí serás redirigido a otra pantalla para que completes los datos sobre la forma de pago elegida. Después de confirmar la compra recibirás un correo de nuestra parte, ese no será un comprobante de pago.</li>
                        <li class="list-group-item">Una vez acreditado el pago, haremos el envío correspondiente de los productos que hayas comprado.</li>
                        </ol></p>
                        </div>
                    <div className="compra my-5">
                    <p className="itemprecio btn mb-3">Políticas de Devolución</p>
                    <ol class="list-group">
                        <li class="list-group-item">Si no estás conforme con nuestro producto, puedes realizar un cambio del mismo de alguna de las siguientes formas: En cualquiera de nuestras tiendas podrás cambiarlo por un artículo del mismo valor. Desde tu domicilio. Para eso ponete en contacto a lacresta@yahoo.com.ar o a nuestro WhatsApp y nosotros nos encargaremos de que la empresa de Correo pase a retirar el producto. Este podrás cambiarlo por otro del mismo valor, que también será enviado a tu domicilio. Las devoluciones sólo pueden ser realizadas durante los 15 días siguientes a la compra. Los costos del envío estará a cargo del comprador.</li>
                    </ol>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
export default Politicas;




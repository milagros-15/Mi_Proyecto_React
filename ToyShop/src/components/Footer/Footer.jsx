import React from 'react'

const Footer = () => {
  return (
    <>
      
      <section className="f_main">
        <section className="f_main_left">
          <form action="" method="">
            <h2>Consultas</h2>
            <div className="content_inp">
              <input className="text_inp" type="text" name='nombre' id="mail" placeholder="Nombre" />
              <label className="label" htmlFor="nombre">Nombre</label>
            </div>
            <div className="content_inp">
              <input className="text_inp" type="email" name="email" id="mail" placeholder="Email" />
              <label className="label" htmlFor="email">Email</label>
            </div>
            <div className="content_inp">
              <textarea className="text_inp" name="consulta" id="consulta" placeholder="Consultanos"></textarea>
              <label className="label" htmlFor="consulta">Consulta</label>
            </div>
            <input className="enviar_form" type="submit" value="enviar" />
          </form>
        </section>
        <section className="f_main_right">
          <div className="mapa">
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.458996149996!2d-71.30957451952561!3d-41.13389604197415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b907b50d90b%3A0xfa53d8e07bd9784c!2sArea21%20BRC!5e0!3m2!1ses-419!2sar!4v1669789025549!5m2!1ses-419!2sar' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </section>
      </section>
      <section className="f_main_bottom">
        <div className="caja_f_b">
          <section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="shield-checkmark-outline" role="img" className="md hydrated" aria-label="shield checkmark outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>Pagos 100% seguros</a></h2>
              <p>Envío de datos encriptados a través de certificación SSL.</p>
            </div>
          </section><section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="wallet-outline" role="img" className="md hydrated" aria-label="wallet outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>Formas de Pago</a></h2>
              <p>Aceptamos Mercadoo pago, PayPal, Tarjetas y Transferencias.</p>
            </div>
          </section><section className="cont_faq">
            <div className="icon">
              <a>
                <ion-icon name="rocket-outline" role="img" className="md hydrated" aria-label="rocket outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>Entregas rápidas</a></h2>
              <p>Entregas en 24hs en la mayoría de los artículos.</p>
            </div>

          </section><section className="cont_faq">

            <div className="icon">
              <a>
                <ion-icon name="send-outline" role="img" className="md hydrated" aria-label="send outline"></ion-icon>
              </a>
            </div>
            <div className="textos">
              <h2><a>Envíos gratis</a></h2>
              <p>Gratis a partir de los $5000. O estando suscripto.</p>
            </div>

          </section>
        </div>
      </section>
      <section className="f_footer">
        <section className="footer_bot">
          <p>&#169; 2024, Página creada por <strong>Anabel de los Milagros Artista Piragine.</strong></p>
        </section>
      </section>
    </>
  )
}

export default Footer
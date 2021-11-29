import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      <section
        className="
          d-flex
          justify-content-center justify-content-lg-between
          p-4
          border-bottom
        "
      ></section>

      <section className="justify-content-center">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Universidad Tecnologica de
                Xicotepec de Juarez
              </h6>
              <p>
                Muchas gracias por las pruebas realizadas, en este texto se
                utilizan palabras al azar para poder maquetar de manera correcta
                el footer.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactame</h6>
              <p>
                <i className="oi oi-phone"></i> Xicotepec de Juarez, Puebla
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                deysigeraldine.leon@utxicotepec.edu.mx
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +52 764 123 1234
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        2021|
        <a className="text-reset fw-bold" href="">
          Deysi Geraldine Leon Cabrera
        </a>
      </div>
    </footer>
  );
}

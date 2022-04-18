import React from "react";
import "../components/Footer.css";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import PaymentsTwoToneIcon from "@mui/icons-material/PaymentsTwoTone";
import ContactlessTwoToneIcon from "@mui/icons-material/ContactlessTwoTone";
import AccountBalanceTwoToneIcon from "@mui/icons-material/AccountBalanceTwoTone";
import WhatsappTwoToneIcon from "@mui/icons-material/WhatsappTwoTone";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

const Footer = () => {
  return (
    <footer>
      <table>
        <tbody>
          <tr>
            <td className="nosotros">
              <h3>Sobre Nosotros</h3>
            </td>
            <td className="categoria">
              <h3>Categorias</h3>
            </td>
            <td className="informacion">
              <h3>Informacion</h3>
            </td>
            <td className="contactos">
              <h3>Contactanos</h3>
            </td>
          </tr>
          <tr>
            <td className="nosotros">
              <tr>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Congue nisi vitae suscipit tellus mauris. Elementum nibh
                  tellus molestie nunc non blandit massa.
                </p>
              </tr>
              <tr>
                <ul className="tarjetas">
                  <PaymentTwoToneIcon />
                  <PaymentsTwoToneIcon />
                  <ContactlessTwoToneIcon />
                  <AccountBalanceTwoToneIcon />
                </ul>
              </tr>
            </td>
            <td className="categorias">
              <ul>
                <li>Ropa</li>
                <li>Lenceria</li>
                <li>Zapatillas</li>
                <li>Mochilas</li>
              </ul>
            </td>
            <td className="informacion">
              <ul>
                <li>Sobre Nosotros</li>
                <li>Contactanos</li>
                <li>Terminos y Condiciones</li>
                <li>Devoluciones y Cambios</li>
                <li>Envios y Entrega</li>
                <li>Politicas de Privacidad</li>
              </ul>
            </td>
            <td className="contactos">
              <tr>Direccion: calle x n° yz, Cordoba, Argentina.</tr>
              <tr>Telefono: 351-xxxxxxx</tr>
              <tr>
                <WhatsappTwoToneIcon />
                <FacebookTwoToneIcon />
                <EmailTwoToneIcon />
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;

import Image from "next/image"
import Logo from "@/assets/img/LogoCom.png";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <footer>
        <section className="section2 section-footer">
          <div className="footer-section-content">
            <p className="text-dancing text-footer ">Con más de 15 años de experiencia, nos dedicamos a cuidar tu vehículo con responsabilidad, compromiso y pasión por lo que hacemos.<br/>
            Gracias por elegirnos...</p>
          </div>
        </section>
        <section className="section1 section-footer">
          <div className="footer-section-content">
          <Image
          loading="lazy"
            src={Logo}
            alt="Logo"
            className="section-footer-footer-logo"
          />
         </div>
        </section>
        <section className="section3 section-footer">
          <div className="footer-section-content">
            <h1 className="title footer-section-title">contactanos</h1>
              <SocialIcons  />
          </div>
        </section>
    </footer>
  )
}

export default Footer
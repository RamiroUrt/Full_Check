import Image from 'next/image'
import './CardServices.css' 
import Alineacion from '../../../assets/img/Services/alineacion/alineacion.jpg'
import Logo from '../../../assets/img/ContenedorLogo.png'
const CardServices = () => {
  return (
    <main className="card-services-container">
      <Image
      loading="lazy"
       src={Logo}
        alt="Icono"
         className='logo-image-card'/>
        <div className="card-rotate-bg">
          {/*image*/ }
          <Image
          loading="lazy"
           src={Alineacion}
          alt="fondo" 
          className='bg-image'/>
        </div>
        <div className="card-content">
          <h1 className='title'>SERVICIO</h1>
            <div className="card-description-services text-secondary">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
            <div className="card-footer">
            <button className='button'><span className='button-text title'>VER MÁS</span></button>
            </div>
    </main>
  )
}

export default CardServices
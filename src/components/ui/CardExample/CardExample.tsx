import Image from 'next/image';
import './CardExample.css';
import Logo from '../../../assets/img/LogoCom.png';

const CardExample = () => {
  return (
    <main className="card-container">
        <section className='card-example-content'>
            <div className="card-content-example">
                <div className="svg-example">
                  <Image
                    loading="lazy"
                    src="/svg/break-svgrepo-com.svg"
                    alt="Icono"
                    width={80}
                    height={80}
                  />
                </div>
                <h1 className="title card-title">SEVICIO</h1>
                <div className="card-description">
                    <p className='text-secondary'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
                <div className="card-footer-image">
                    <Image 
                    loading="lazy"
                    src={Logo} alt="Logo" />
                </div>
        </section>
    </main>
  )
}

export default CardExample 
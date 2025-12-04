import Image from 'next/image';
import './CardExample.css';
import Logo from '../../../assets/img/LogoCom.png';
import { CardExampleProps } from '@/types/CardExample.Types';

const CardExample: React.FC<CardExampleProps> = ({ ico, service, description }) => {
  return (
    <main className="card-container">
        <section className='card-example-content'>
            <div className="card-content-example">
                <div className="svg-example">
                  <Image
                    loading="lazy"
                    src={ico}
                    alt="Icono"
                    width={80}
                    height={80}
                  />
                </div>
                <h1 className="title card-title">{service}</h1>
                <div className="card-description">
                    <p className='text-secondary'>
                       {description}
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
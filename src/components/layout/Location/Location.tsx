import DotGroup from "@/components/ui/DotGroup"
import Image from "next/image"
import LocationLogo from "../../../assets/img/Pets/Location.png"
import LocationSvg from '../../../../public/svg/location-pin-svgrepo-com.svg'
import Link from "next/link"
import routes from "../../../lib/routes"

const Location = () => {
  return (
    <section className="location-container">
              <div className="location-container-img">
                <div className="content-location">
                  <div className="dot-group-location">
                    <DotGroup />
                  </div>
                  <div className="location-container-location flex">
                    <div className="button-location">
                      <div className="location">
                        <Image loading="lazy" src={LocationSvg} alt="location" />
                      </div>
                      <button className="button"><Link href={routes.sucursales}>Buscar Taller mas cercano</Link></button>
                    </div>
                          <div className="image-location">
                              <Image loading="lazy" src={LocationLogo} alt="LogoLocation" className="location-image" />
                          </div>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default Location
import CardServices from "@/components/ui/CardServices/CardServices"
import {CardServicesConstant} from "@/constants/CardServicesonstant"

const Services = () => {
  return (
    <section className="services dot-group-example">
        <main className="services-container">
          <div className="services-card-contain">
            {CardServicesConstant.map((service, index) => (
              <CardServices 
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </main>
    </section>
  )
}

export default Services
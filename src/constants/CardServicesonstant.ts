import { CardServices } from '@/types/CardServices.Types';


//images
import Alineacion from '../assets/img/Services/alineacion/alineacion.jpg'
import Neumaricos from '../assets/img/Services/Cambio de neumáticos/Cuando-cambiar-neumaticos.jpeg'
import DiagnosticoElectronico from '../assets/img/Services/Diagnóstico electrónico/Diagnostico-automotriz-en-Quilpue.jpg'
import MantenimientoPreventivo from '../assets/img/Services/Mantenimiento preventivo/1634173129018.jpg'
import ReparacionFrenos from '../assets/img/Services/rep de frenos/frenos.jpg'
import ReparacionMotor from '../assets/img/Services/Reparación de motor/manos-sosteniendo-parte-de-un-motor.jpg'
import Transmision from '../assets/img/Services/Reparación de transmisión/que-es-mejor-reparar-una-transmision-automatica-o-cambiarla.jpg'
import AireAcondicionado from '../assets/img/Services/Servicio de aire acondicionado/Recarga-de-Gas.jpg'
import SistemaEscape from '../assets/img/Services/Sistema de escape/m3_exhaust_1.jpg'
import Bateria from '../assets/img/Services/ServicioBaterias/pexels-vladimirsrajber-32282233.jpg'
import Correa from '../assets/img/Services/CorreaDistribucion/coche-cambio-correa-distribucion-rodi.jpg'

export const CardServicesConstant: CardServices[] = [
    {
        image: Alineacion,
        title: "Servicio de Alineación y Balanceo",
        description: "Alineación y balanceo para un manejo seguro",
    },
    {
        image: Neumaricos,
        title: "Cambio de neumáticos",
        description: "Venta e instalación de neumáticos",
    },
    {
        image: DiagnosticoElectronico,
        title: "Diagnostrico electrónico",
        description: "Revisión y diagnóstico de sistemas electrónicos",
    },
    {
        image: MantenimientoPreventivo,
        title: "Mantenimiento preventivo",
        description: "Revisión y mantenimiento general del vehículo",
    },
    {
        image: ReparacionFrenos,
        title: "Reparación de frenos",
        description: "Servicio de reparación y mantenimiento de frenos",
    },
    {
        image: ReparacionMotor,
        title: "reparación de motor",
        description: "Servicio de reparación y mantenimiento de motor",
    },
    {
        image: Transmision,
        title: "Reparacion de transmisión",
        description: "Servicio de reparación y mantenimiento de transmisión",
    },
    {
        image: AireAcondicionado,
        title: "Servicio de aire acondicionado",
        description: "Revisión y mantenimiento de aire acondicionado",
    },
    {
        image: SistemaEscape,
        title: "Sistema de escape",
        description: "Revisión y reparación del sistema de escape",
    },
    {
        image: Bateria,
        title: "Servicio de baterías",
        description: "Venta, instalación y carga de baterías",
    },
    {
        image: Correa,
        title: "Cambio de Correa de Distribución",
        description: "Sustitución y mantenimiento de la correa de distribución para evitar daños en el motor.",
    }
]
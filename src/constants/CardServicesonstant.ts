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
        details: {
            intro: "Alineación y balanceo de ruedas para garantizar un manejo estable, seguro y un desgaste uniforme de los neumáticos. Nuestros equipos de precisión aseguran que las ruedas mantengan el ángulo correcto y giren sin vibraciones.",
            features: [
                "Alineación computarizada con equipos de última generación",
                "Balanceo dinámico de las cuatro ruedas",
                "Ajuste de ángulos de alineación (camber, caster y toe)",
                "Verificación de presión y estado de los neumáticos",
                "Prueba de manejo para confirmar la correcta alineación"
            ]
        }
    },
    {
        image: Neumaricos,
        title: "Cambio de neumáticos",
        description: "Venta e instalación de neumáticos",
        details: {
            intro: "Venta e instalación de neumáticos de las principales marcas. Renovamos tus neumáticos para asegurar tracción, seguridad y confort en cada viaje, con la mejor asesoría según tu vehículo y estilo de conducción.",
            features: [
                "Asesoría en la elección del neumático ideal para tu vehículo",
                "Instalación y montaje con equipos modernos",
                "Balanceo de ruedas incluido",
                "Alineación recomendada tras la instalación",
                "Reciclaje responsable de neumáticos usados"
            ]
        }
    },
    {
        image: DiagnosticoElectronico,
        title: "Diagnostico electrónico",
        description: "Revisión y diagnóstico de sistemas electrónicos",
        details: {
            intro: "Revisión y diagnóstico de los sistemas electrónicos de tu vehículo con escáneres de última generación, para detectar fallas a tiempo y prevenir averías mayores en el sistema eléctrico y de control del motor.",
            features: [
                "Escaneo computarizado de la central electrónica (ECU)",
                "Lectura y borrado de códigos de error",
                "Revisión de sensores, inyectores y módulos de control",
                "Diagnóstico de luces de advertencia del tablero",
                "Informe detallado con recomendaciones de reparación"
            ]
        }
    },
    {
        image: MantenimientoPreventivo,
        title: "Mantenimiento preventivo",
        description: "Revisión y mantenimiento general del vehículo",
        details: {
            intro: "Revisión y mantenimiento general para mantener tu vehículo en óptimas condiciones y prevenir fallas costosas. Un mantenimiento programado prolonga la vida útil de tu vehículo y mejora su rendimiento.",
            features: [
                "Cambio de aceite y filtros",
                "Revisión de niveles de fluidos (frenos, refrigerante, dirección)",
                "Inspección de frenos, suspensión y dirección",
                "Revisión de correas y mangueras",
                "Chequeo general de luces y sistema eléctrico"
            ]
        }
    },
    {
        image: ReparacionFrenos,
        title: "Reparación de frenos",
        description: "Servicio de reparación y mantenimiento de frenos",
        details: {
            intro: "Servicio de reparación y mantenimiento de frenos para garantizar una frenada segura y efectiva en todo momento. Mantener el sistema de frenos en buen estado es clave para tu seguridad y la de tus acompañantes.",
            features: [
                "Inspección de pastillas, discos y sistema de frenos",
                "Reemplazo de pastillas y discos de freno",
                "Rectificado de discos cuando sea necesario",
                "Servicio completo del sistema: líquido, mangueras y pinzas",
                "Prueba de frenado al finalizar la reparación"
            ]
        }
    },
    {
        image: ReparacionMotor,
        title: "Reparación de motor",
        description: "Servicio de reparación y mantenimiento de motor",
        details: {
            intro: "Servicio de reparación y mantenimiento de motor para recuperar el rendimiento y la potencia original de tu vehículo. Contamos con personal especializado para resolver cualquier falla mecánica.",
            features: [
                "Diagnóstico completo del estado del motor",
                "Reparación de fallas mecánicas y eléctricas",
                "Cambio de juntas, empaques y sellos",
                "Rectificación y reparaciones mayores de motor",
                "Pruebas de funcionamiento y control de emisiones"
            ]
        }
    },
    {
        image: Transmision,
        title: "Reparación de transmisión",
        description: "Servicio de reparación y mantenimiento de transmisión",
        details: {
            intro: "Servicio de reparación y mantenimiento de transmisión, tanto manual como automática, para lograr un cambio de marchas suave, silencioso y seguro. Diagnosticamos y corregimos cualquier falla de la caja de cambios.",
            features: [
                "Diagnóstico de fallas en la caja de cambios",
                "Cambio de aceite de transmisión",
                "Reparación de embragues y sincronizados",
                "Reparación de transmisión automática: caja, convertidor y válvulas",
                "Prueba de funcionamiento en ruta"
            ]
        }
    },
    {
        image: AireAcondicionado,
        title: "Servicio de aire acondicionado",
        description: "Revisión y mantenimiento de aire acondicionado",
        details: {
            intro: "Revisión y mantenimiento de aire acondicionado para disfrutar de un clima confortable en cualquier temporada. Mantenemos tu sistema de climatización limpio, eficiente y sin fugas.",
            features: [
                "Revisión de fugas en el sistema de refrigeración",
                "Recarga de gas refrigerante",
                "Cambio de filtros de cabina",
                "Limpieza y desinfección de conductos de ventilación",
                "Revisión del compresor y ventiladores"
            ]
        }
    },
    {
        image: SistemaEscape,
        title: "Sistema de escape",
        description: "Revisión y reparación del sistema de escape",
        details: {
            intro: "Revisión y reparación del sistema de escape para reducir ruidos, controlar las emisiones y mantener el buen rendimiento del motor. Un sistema de escape en buen estado también protege el medio ambiente.",
            features: [
                "Inspección del tubo de escape, silenciador y catalizador",
                "Reparación o reemplazo de componentes dañados",
                "Soldadura de tuberías, bridas y soportes",
                "Revisión de niveles de emisiones contaminantes",
                "Reducción de ruidos y vibraciones"
            ]
        }
    },
    {
        image: Bateria,
        title: "Servicio de baterías",
        description: "Venta, instalación y carga de baterías",
        details: {
            intro: "Venta, instalación y carga de baterías para asegurar un arranque confiable en cualquier momento. Te asesoramos para elegir la batería adecuada según tu vehículo y verificar el sistema de carga.",
            features: [
                "Test de carga y estado de la batería",
                "Venta de baterías de las mejores marcas",
                "Instalación rápida y segura",
                "Carga y recuperación de baterías descargadas",
                "Revisión del sistema de carga del alternador"
            ]
        }
    },
    {
        image: Correa,
        title: "Cambio de Correa de Distribución",
        description: "Sustitución y mantenimiento de la correa de distribución para evitar daños en el motor.",
        details: {
            intro: "Sustitución y mantenimiento de la correa de distribución para evitar daños graves y costosos en el motor. Realizar el cambio en el kilometraje indicado por el fabricante es esencial para proteger tu inversión.",
            features: [
                "Cambio de correa de distribución y tensores",
                "Cambio de bomba de agua (recomendado)",
                "Revisión y reemplazo de poleas y guías",
                "Alineación correcta de los tiempos del motor",
                "Prueba de arranque y funcionamiento final"
            ]
        }
    }
]
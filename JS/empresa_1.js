/**
 * Datos del quiz de Empresa e Iniciativa Emprendedora - 1º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "Al conjunto de cualidades, habilidades y conocimientos necesarios que poseen los individuos para poder gestionar su propio proyecto o itinerario profesional, o crear su propio negocio como alternativa (no como última salida) al trabajo por cuenta ajena, lo llamamos:",
        a: "Capacidad creativa.",
        b: "Self-ignition",
        c: "Cultura emprendedora.",
        d: "Cualidades del empresario.",
        correct: "c",
    },
    {
        question: "Una empresa tendrá mayores posibilidades de éxito si la idea generadora del proyecto empresarial:",
        a: "Introduce un factor diferenciador en su producto o servicio que ejerza una atracción sobre la clientela.",
        b: "Las demás respuestas son correctas",
        c: "Satisface necesidades no cubiertas de los futuros clientes.",
        correct: "b",
    },
    {
        question: "La imagen corporativa es:",
        a: "Lo que se percibe de la empresa, su personalidad.",
        b: "La persona que representa a la empresa.",
        c: "Todas las demás son correctas.",
        d: "El logotipo de la empresa.",
        correct: "a",
    },
    {
        question: "¿En qué se diferencian creatividad e innovación?",
        a: "Creatividad es la generación de ideas nuevas e innovación es la implantación de ideas nuevas",
        b: "La creatividad es propia de los empresarios, y la innovación, de los trabajadores.",
        c: "Son la misma cosa.",
        d: "Pueden ser interpretadas de la misma forma.",
        correct: "a",
    },
    {
        question: "¿Qué entiendes por «cultura empresarial»?",
        a: "La formación cultural de los integrantes de la empresa.",
        b: "Lo que se percibe de una empresa, lo que significa.",
        c: "Lo que identifica la forma de ser de una empresa, su forma de pensar, vivir y actuar.",
        correct: "c",
    },
    {
        question: "En función de las características de los cambios que se originan en los diferentes factores a lo largo del tiempo, distinguimos las siguientes clases de entorno:",
        a: "Entorno general y específico.",
        b: "Ninguna de las demás es correcta",
        c: "Entorno estable/dinámico, simple/complejo, hostil/favorable.",
        d: "Entorno dinámico y complejo.",
        correct: "c",
    },
    {
        question: "La capacidad de un empresario para asumir riesgos aumenta si:",
        a: "Está dispuesto a poner en juego toda su capacidad para incrementar al máximo sus probabilidades de éxito y tiene confianza en sí mismo.",
        b: "Sabe evaluar con realismo tanto los riesgos como su propia capacidad para influir en dichas probabilidades.",
        c: "Todas las demás son correctas",
        correct: "c",
    },
    {
        question: "Las fases del ciclo de vida de un producto son:",
        a: "Introducción, crecimiento, declive, madurez.",
        b: "Introducción, crecimiento, decrecimiento y cierre",
        c: "Introducción, crecimiento, madurez, declive.",
        d: "Introducción, madurez, declive.",
        correct: "c",
    },
    {
        question: "Las variables que componen el Marketing Mix (las 4 pes) son:",
        a: "Producto, Precio, Publicidad, Promoción",
        b: "Producto, Precio, Distribución y Promoción",
        c: "Ninguna de las demás es correcta",
        d: "Producto, Publicidad, Periodicidad y Promoción",
        correct: "b",
    },
    {
        question: "¿Qué consideras que es la innovación de producto?",
        a: "La aplicación del conocimiento científico a la actividad de la empresa.",
        b: "Cualquiera de las demás",
        c: "La que introduce una manera diferente de realizar las cosas.",
        d: "La creación de un nuevo producto o añade a los ya existentes una característica que haga que los consumidores lo perciban como novedoso.",
        correct: "d",
    },
    {
        question: "¿Cuáles son los niveles del producto?",
        a: "Básico, medio y alto.",
        b: "Básico, formal y ampliado.",
        c: "Básico, normal y ampliado.",
        d: "Bajo, medio y alto.",
        correct: "b",
    },
    {
        question: "El balance social es:",
        a: "Todas las demás son correctas.",
        b: "Es una herramienta fundamental para la toma de decisiones relacionadas con la responsabilidad social libremente asumida.",
        c: "Un instrumento de gestión que permite a las empresas planificar, organizar, dirigir, controlar y evaluar en términos cuantitativos y cualitativos el cumplimiento de su responsabilidad social, en un periodo determinado y de acuerdo con unas metas preestablecidas.",
        correct: "a",
    },
    {
        question: "La definición de «competencia» es:",
        a: "La concurrencia en el mismo mercado de distintos oferentes del mismo bien o servicio.",
        b: "La concurrencia en distintos mercados de distintos oferentes del mismo bien o servicio.",
        c: "La concurrencia en el mismo mercado de los mismos oferentes del mismo bien o servicio.",
        correct: "a",
    },
    {
        question: "Di cuál de las siguientes respuestas NO es una actitud propia del empresario:",
        a: "La capacidad de asumir riesgos.",
        b: "Capacidad Creativa",
        c: "La perseverancia.",
        d: "Los conocimientos profesionales.",
        correct: "d",
    },
    {
        question: "¿Qué consideras que es la innovación de proceso?",
        a: "La creación de un nuevo producto o añade a los ya existentes una característica que haga que los consumidores lo perciban como novedoso.",
        b: "La aplicación del conocimiento científico a la actividad de la empresa.",
        c: "Todas las demás son correctas",
        d: "La que introduce una manera diferente de realizar las cosas.",
        correct: "d",
    },
    {
        question: "¿Qué significa «sistema empresarial»?",
        a: "Conjunto de elementos interrelacionados entre sí y con el sistema económico global, diseñados para alcanzar un objetivo específico.",
        b: "Ninguna de las demás es correcta.",
        c: "Conjunto de departamentos de la empresa.",
        d: "El modo de actuar sistemáticamente una empresa dentro de su entorno.",
        correct: "a",
    },
    {
        question: "¿Cuáles son los métodos que existen para la fijación de precios?",
        a: "El método basado en la renta de los consumidores, el basado en la competencia y el basado en el precio que pagaría el comprador.",
        b: "El método basado en la calidad del producto, el basado en la demanda del mismo y el basado en el precio que pagaría el comprador.",
        c: "El basado en los costes, el basado en la competencia y el basado en el precio que pagaría el comprador.",
        correct: "c",
    },
    {
        question: "Si dentro de la cartera de productos de una empresa hablamos de un bajo crecimiento del mercado y una alta participación de la empresa, según la matriz BCG nos estaremos refiriendo a un producto:",
        a: "Perro",
        b: "Estrella",
        c: "Interrogante",
        d: "Vaca",
        correct: "d",
    },
    {
        question: "En función de la naturaleza del entorno en el que se desenvuelve la empresa, distinguimos las siguientes clases de entorno:",
        a: "Entorno estable/dinámico, simple/complejo, hostil/favorable.",
        b: "Ninguna de las demás es correcta",
        c: "Entorno general y específico.",
        d: "Entorno dinámico y complejo.",
        correct: "c",
    },
    {
        question: "¿Cómo se halla la cuota de mercado?",
        a: "Mercado actual competencia / mercado actual de la empresa x 100",
        b: "Mercado actual de una empresa x 100 / mercado actual total",
        c: "Mercado actual total × 100 / mercado actual de una empresa.",
        d: "Mercado actual total / mercado actual de una empresa × 100.",
        correct: "b",
    },
    {
        question: "Si una empresa no puede pagar a un proveedor por haberse quedado, circunstancialmente, sin efectivo, ¿Cuál sería la alternativa más idónea?",
        a: "Acudir a una sociedad de garantía recíproca.",
        b: "Recurrir a un business angel.",
        c: "Abrir una línea de crédito.",
        correct: "c",
    },
    {
        question: "Las empresas de factoring:",
        a: "Se dedican al alquiler de cualquier tipo de bien mueble y, al finalizar el plazo de alquiler, lo ofrecen por una pequeña cantidad a quien lo alquilaba.",
        b: "A cambio de una comisión, adelantan el importe de las facturas que sus clientes deben cobrar.",
        c: "Ninguna de las respuestas es correcta.",
        correct: "b",
    },
    {
        question: "Una sociedad de capital-riesgo:",
        a: "Se asocia con otra, que considera que tiene mucho potencial, y cuando esta triunfa, vende su participación y recoge los beneficios.",
        b: "Avalan a las pymes.",
        c: "Ninguna de las respuestas anteriores es correcta.",
        correct: "a",
    },
    {
        question: "Señala la proposición correcta:",
        a: "El confirming son fondos públicos que la Administración concede para realizar inversiones en actividades empresariales.",
        b: "El factoring es el importe máximo de letras de cambio que el banco permite descontar.",
        c: "El leasing consiste en el alquiler de maquinaria y, al final del plazo, se puede adquirir por el valor residual.",
        correct: "c",
    },
    {
        question: "¿Cuál es la mejor opción para pagar puntualmente a los proveedores?",
        a: "El renting.",
        b: "El leasing.",
        c: "El confirming.",
        correct: "c",
    }
];;

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
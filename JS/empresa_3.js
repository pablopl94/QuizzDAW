/**
 * Datos del quiz de Empresa e Iniciativa Emprendedora - Tema 1: Iniciativa Emprendedora
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "¿Qué es un emprendedor según lo definido en el tema?",
        a: "Persona con capacidad creativa y de liderazgo.",
        b: "Persona capaz de convertir en realidad una idea concreta (no sólo crear empresas).",
        c: "Trabajador por cuenta ajena que desarrolla proyectos para otras personas.",
        d: "Persona que asume riesgos financieros exclusivamente.",
        correct: "b",
    },
    {
        question: "El espíritu emprendedor se define como:",
        a: "La capacidad de ganar dinero con nuevos negocios.",
        b: "La capacidad innovadora para probar cosas nuevas o hacerlas de una manera diferente.",
        c: "La capacidad de administrar múltiples empresas simultáneamente.",
        d: "La capacidad de obtener financiación para proyectos empresariales.",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes NO es una característica de los emprendedores según el material estudiado?",
        a: "Creatividad.",
        b: "Autonomía.",
        c: "Necesidad de supervisión constante.",
        d: "Tenacidad.",
        correct: "c",
    },
    {
        question: "¿Qué significa la capacidad para asumir riesgos en el contexto emprendedor?",
        a: "Es un aspecto consustancial a cualquier decisión empresarial.",
        b: "Es una característica innecesaria si se tiene suficiente capital inicial.",
        c: "Es exclusiva de emprendedores en sectores de alta tecnología.",
        d: "Es solo relevante en momentos de crisis económica.",
        correct: "a",
    },
    {
        question: "¿Qué es un intraemprendedor o emprendedor corporativo?",
        a: "Un empresario que crea múltiples empresas simultáneamente.",
        b: "Un trabajador por cuenta ajena que desarrolla y lleva a cabo proyectos con espíritu de innovación, creatividad y autonomía.",
        c: "Un empresario que trabaja exclusivamente en el sector tecnológico.",
        d: "Un consultor externo que ofrece servicios a diferentes empresas.",
        correct: "b",
    },
    {
        question: "Para que aparezcan intraemprendedores en una empresa es necesario:",
        a: "Que la empresa esté en situación de crisis.",
        b: "Que la empresa sea de gran tamaño.",
        c: "Tener implantada una cultura emprendedora en la empresa.",
        d: "Que los trabajadores tengan estudios superiores.",
        correct: "c",
    },
    {
        question: "¿Cuál de estas opciones NO se considera una ventaja de ser empresario según el material estudiado?",
        a: "Ser tu propio jefe.",
        b: "Obtener beneficios.",
        c: "Tener horarios limitados y predecibles.",
        d: "Prestigio social.",
        correct: "c",
    },
    {
        question: "La diferencia fundamental entre creatividad e innovación es que:",
        a: "La creatividad es menos importante que la innovación para el éxito empresarial.",
        b: "La creatividad es la generación de nuevas ideas y la innovación es la implantación de nuevas ideas.",
        c: "La creatividad es exclusiva de artistas mientras que la innovación es propia de empresarios.",
        d: "La creatividad requiere recursos económicos mientras que la innovación no.",
        correct: "b",
    },
    {
        question: "¿Cuáles son las principales aptitudes que debe poseer un empresario?",
        a: "Conocimientos profesionales sobre la actividad que va a desarrollar y conocimientos de organización y gestión empresarial.",
        b: "Capacidad de liderazgo y elevado capital inicial.",
        c: "Habilidades sociales y capacidad creativa.",
        d: "Experiencia previa y contactos en el sector.",
        correct: "a",
    },
    {
        question: "El punto de partida de todo proyecto empresarial es:",
        a: "El capital inicial.",
        b: "El plan de marketing.",
        c: "La idea.",
        d: "El estudio de mercado.",
        correct: "c",
    },
    {
        question: "La innovación de producto puede ser:",
        a: "Únicamente la creación de algo totalmente nuevo.",
        b: "Cambios en la forma de producción exclusivamente.",
        c: "Mejoras en la presentación o el embalaje.",
        d: "Innovación total, innovaciones que aportan algo nuevo al producto, o innovaciones que no aportan nada nuevo.",
        correct: "d",
    },
    {
        question: "Un ejemplo de innovación de proceso sería:",
        a: "La invención de la televisión.",
        b: "La aplicación del concepto de línea de producción en McDonald's.",
        c: "El envase azul de Solán de Cabras.",
        d: "La creación de una página web para una empresa.",
        correct: "b",
    },
    {
        question: "La innovación tecnológica consiste en:",
        a: "Usar exclusivamente nuevas tecnologías digitales.",
        b: "La aplicación del conocimiento científico a la actividad de la empresa.",
        c: "Crear productos tecnológicos.",
        d: "Sustituir trabajadores por máquinas.",
        correct: "b",
    },
    {
        question: "¿Qué tipo de innovación representa el cambio en el envase de Solán de Cabras con su botella azul?",
        a: "Innovación de producto.",
        b: "Innovación de proceso.",
        c: "Innovación tecnológica.",
        d: "Innovación en marketing.",
        correct: "d",
    },
    {
        question: "Al conjunto de cualidades, habilidades y conocimientos necesarios que poseen los individuos para poder gestionar su propio proyecto o itinerario profesional, o crear su propio negocio como alternativa al trabajo por cuenta ajena, lo llamamos:",
        a: "Capacidad empresarial.",
        b: "Cultura emprendedora.",
        c: "Innovación empresarial.",
        d: "Aptitud profesional.",
        correct: "b",
    },
    {
        question: "En el proceso de valoración de una idea de negocio, ¿qué aspecto es fundamental considerar?",
        a: "El coste de implementación únicamente.",
        b: "La novedad de la idea exclusivamente.",
        c: "Que la idea satisfaga alguna necesidad y/o añada algún factor diferenciador a los productos o servicios existentes.",
        d: "Solamente los aspectos tecnológicos.",
        correct: "c",
    },
    {
        question: "¿Cuál de estas fuentes para buscar ideas de negocio NO aparece en el material estudiado?",
        a: "Repetir experiencias ajenas.",
        b: "Aprovechar la propia experiencia como trabajador.",
        c: "La innovación en productos, servicios o procesos.",
        d: "Analizar los informes financieros de la competencia.",
        correct: "d",
    },
    {
        question: "Según el material estudiado, el emprendedor es una persona que:",
        a: "Solo se dedica a crear empresas.",
        b: "Es capaz de identificar una necesidad, reunir los recursos necesarios y emprender una acción para satisfacer la necesidad identificada.",
        c: "Trabaja exclusivamente por cuenta propia.",
        d: "Invierte grandes cantidades de dinero en nuevos negocios.",
        correct: "b",
    },
    {
        question: "¿Cuál es la frase que mejor define al emprendedor según el contenido del tema?",
        a: "El que inventa productos revolucionarios.",
        b: "El que nunca fracasa en sus negocios.",
        c: "VE lo que todos han visto, PIENSA lo que nadie más ha pensado, HACE lo que nadie más ha hecho.",
        d: "El que tiene gran capacidad de inversión.",
        correct: "c",
    },
    {
        question: "¿Qué tipo de empresas son mayoría en España según los datos presentados en el tema?",
        a: "Medianas empresas.",
        b: "Microempresas (0-9 trabajadores).",
        c: "Grandes empresas.",
        d: "Empresas de tamaño mixto.",
        correct: "b",
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
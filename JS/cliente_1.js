/**
 * Datos del quiz de Programación en Entorno Cliente - 1º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "El software cliente más utilizado es el navegador su función principal es:",
        a: "Generar requerimientos de bases de datos y recibir/formatear los resultados del servidor.",
        b: "Solicitar al servidor los recursos elegidos por el usuario y mostrarlos.",
        c: "Todas son correctas.",
        d: "Procesar la lógica de la aplicación y hacer validaciones locales.",
        correct: "b",
    },
    {
        question: "En la arquitectura cliente - servidor:",
        a: "El cliente: solicita y responde a solicitud.",
        b: "El servidor solicita la información.",
        c: "Todas son incorrectas.",
        d: "El servidor solicita y responde a la solicitud.",
        correct: "d",
    },
    {
        question: "Consorcio W3C (World Wide Web Consortium) se dedica:",
        a: "A la formación de los usuarios de internet.",
        b: "Crear aplicaciones de validación.",
        c: "Organización de estándares de internet.",
        d: "Todas son correctas.",
        correct: "c",
    },
    {
        question: "¿Cuál de estos lenguajes es un lenguaje de programación?",
        a: "HTML y XHTML",
        b: "JavaScript",
        c: "JavaScript y XML.",
        d: "HTML y JavaScript",
        correct: "b",
    },
    {
        question: "Typescript:",
        a: "Está creciendo en popularidad debido al uso en frameworks como Angular y React.",
        b: "Es un lenguaje de programación fuertemente tipado.",
        c: "Todas son correctas.",
        d: "Se basa en JavaScript.",
        correct: "c",
    },
    {
        question: "Al evaluar en Javascript la instrucción '12' <= 12 ¿Qué ocurriría?",
        a: "Devolvería el resultado True.",
        b: "Daría un error por intentar comparar una cadena con un número.",
        c: "Devolvería el resultado False.",
        d: "Daría un error porque <= no es un operador.",
        correct: "a",
    },
    {
        question: "El array numeros = [10, 20, 33] ¿qué elemento tendrá en el índice 3 (numeros[3])?",
        a: "null",
        b: "33",
        c: "undefined.",
        d: "20",
        correct: "c",
    },
    {
        question: "Si queremos buscar un conjunto de elementos en un array que cumplan una condición ¿Qué método deberíamos usar?",
        a: "Map.",
        b: "Find.",
        c: "Reduce.",
        d: "Filter.",
        correct: "d",
    },
    {
        question: "Si necesito eliminar el primer elemento de un array en JavaScript ¿Qué método debería usar?",
        a: "pop().",
        b: "unshift()",
        c: "shift().",
        d: "push().",
        correct: "c",
    },
    {
        question: "¿Qué significa que una variable tenga un tipo 'implícito' en TypeScript?",
        a: "La variable puede cambiar de tipo.",
        b: "La variable tiene un tipo desconocido.",
        c: "El tipo de la variable es inferido automáticamente.",
        d: "La variable no tiene tipo.",
        correct: "c",
    },
    {
        question: "¿Qué es el DOM en JavaScript?",
        a: "Un método para hacer peticiones HTTP.",
        b: "Una representación en memoria de un documento HTML.",
        c: "Un lenguaje de programación.",
        d: "Una estructura de datos de Java.",
        correct: "b",
    },
    {
        question: "¿Qué método de eventos es más recomendado para suscribirse a eventos en JavaScript?",
        a: "OnClick.",
        b: "bindEvent.",
        c: "addEventListener.",
        d: "attachEvent.",
        correct: "c",
    },
    {
        question: "¿Cuál es el estado inicial de una promesa en JavaScript?",
        a: "Incomplete.",
        b: "Pending.",
        c: "Rejected.",
        d: "FullFilled.",
        correct: "b",
    },
    {
        question: "¿Qué hace el método fetch en JavaScript?",
        a: "Modifica el DOM.",
        b: "Realiza peticiones HTTP.",
        c: "Cargar archivos del sistema local.",
        d: "Genera eventos de usuario.",
        correct: "b",
    },
    {
        question: "¿Qué significa que una variable tenga un tipo 'implícito' en TypeScript?",
        a: "La variable puede cambiar de tipo.",
        b: "La variable tiene un tipo desconocido.",
        c: "El tipo de la variable es inferido automáticamente.",
        d: "La variable no tiene tipo.",
        correct: "c",
    },
    {
        question: "¿Cuál es la principal ventaja de usar TypeScript sobre JavaScript?",
        a: "Tipado fuerte y detección de errores en tiempo de desarrollo.",
        b: "Menor tamaño de archivos.",
        c: "Mayor velocidad de ejecución.",
        d: "Compatibilidad con todos los navegadores.",
        correct: "a",
    },
    {
        question: "¿Qué significa la etiqueta <app-root></app-root> en Angular?",
        a: "Es la etiqueta que marca donde se cargan los componentes definidos en las rutas.",
        b: "Es la etiqueta principal, carga el componente principal, dentro del index.html.",
        c: "La etiqueta que inicializa todo el proyecto de angular.",
        d: "Es la etiqueta que se carga en el componente principal del sistema.",
        correct: "b",
    },
    {
        question: "¿Qué significa SPA en el contexto de Angular?",
        a: "Single Path Application",
        b: "Sistema de Página Adaptativa",
        c: "Sistema de Pagos Automatizado",
        d: "Single Page Application.",
        correct: "d",
    },
    {
        question: "¿Qué tipo de Data Binding en Angular permite modificar tanto el DOM como la lógica del componente?",
        a: "Property Binding.",
        b: "One Way Data Binding.",
        c: "Two Way Data Binding.",
        d: "Class Binding.",
        correct: "c",
    },
    {
        question: "¿Cuál es el propósito del evento $event en Angular?",
        a: "Proteger datos sensibles.",
        b: "Cargar componentes dinámicamente.",
        c: "Capturar errores.",
        d: "Obtener detalles del evento que ha ocurrido, como el elemento que lo desencadenó.",
        correct: "d",
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
} 
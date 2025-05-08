/**
 * Datos del quiz de Diseño de Interfaces - 2º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "¿Qué es un documento HTML?",
        a: "Un lenguaje de programación para crear aplicaciones móviles",
        b: "Un lenguaje de base de datos.",
        c: "Un formato de texto plano que define la estructura de una página web.",
        d: "Un tipo de archivo de imagen.",
        correct: "c"
    },
    {
        question: "¿Dónde se colocan normalmente los enlaces a archivos CSS en un documento HTML?",
        a: "Dentro de la etiqueta <body>",
        b: "Dentro de la etiqueta <head>",
        c: "Dentro de la etiqueta <title>",
        d: "Dentro de la etiqueta <footer>",
        correct: "b"
    },
    {
        question: "¿Qué atributo se utiliza para definir el idioma en HTML5?",
        a: "doctype",
        b: "charset",
        c: "lang",
        d: "meta",
        correct: "c"
    },
    {
        question: "¿Cuál es el propósito del atributo charset en HTML?",
        a: "definir el título de la página",
        b: "Determinar la codificación de caracter",
        c: "Especificar el idioma del documento",
        d: "Enlazar un archivo CSS externo",
        correct: "b"
    },
    {
        question: "¿Qué es el DOM (Document Object Model) en el contexto de HTML y CSS?",
        a: "Un lenguaje de programación para crear animaciones.",
        b: "Un formato de archivo para almacenar datos.",
        c: "Una representación en memoria de la estructura de un documento HTML",
        d: "Un tipo de archivo de imagen.",
        correct: "c"
    },
    {
        question: "¿Cuál es la sintaxis correcta para seleccionar un elemento que tiene la clase 'miclase'?",
        a: "#miclase { ... }",
        b: "class='miclase' { ... }",
        c: "miclase { ... }",
        d: ".miclase { ... }",
        correct: "d"
    },
    {
        question: "¿Qué selector se utiliza para seleccionar un elemento con el ID específico miId?",
        a: "#miId { ... }",
        b: "*miId { ... }",
        c: "miId { ... }",
        d: ".miId { ... }",
        correct: "a"
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir la transparencia de un elemento?",
        a: "alpha",
        b: "opacity",
        c: "visibility",
        d: "transparency",
        correct: "b"
    },
    {
        question: "¿Cuál de las siguientes unidades en CSS es absoluta?",
        a: "rem",
        b: "%",
        c: "em",
        d: "px",
        correct: "d"
    },
    {
        question: "¿Qué unidad se basa en el tamaño de fuente del elemento padre?",
        a: "cm",
        b: "px",
        c: "pt",
        d: "em",
        correct: "d"
    },
    {
        question: "¿Qué propiedad CSS se usa para definir el color de fondo de una caja?",
        a: "Box-shadow",
        b: "Border-color",
        c: "Color",
        d: "Background-color",
        correct: "d"
    },
    {
        question: "Si queremos que una imagen de fondo cubra toda la caja sin deformarse, ¿qué propiedad usamos?",
        a: "Background-position",
        b: "Object-fit",
        c: "Background-repeat",
        d: "Background-size: cover",
        correct: "d"
    },
    {
        question: "¿Cuál es la función principal de la etiqueta <nav> en HTML?",
        a: "Mostrar imágenes o videos en la página.",
        b: "Representar el pie de página de la página web",
        c: "Crear una sección de contenido adicional.",
        d: "Definir un conjunto de enlaces de navegación.",
        correct: "d"
    },
    {
        question: "¿Cuál es la diferencia entre border y margin en CSS?",
        a: "No hay ninguna diferencia",
        b: "Margin está dentro del borde",
        c: "Margin rodea la caja, Border la separa de otros elementos",
        d: "Border rodea la caja, Margin la separa de otros elementos",
        correct: "d"
    },
    {
        question: "¿Qué sucede si aplicamos background-image a un div sin definir un tamaño específico?",
        a: "La imagen desaparece",
        b: "La imagen se ajusta automáticamente",
        c: "La imagen puede repetirse",
        d: "El div se adapta al tamaño de la imagen",
        correct: "c"
    },
    {
        question: "¿Cómo harías que una caja tenga bordes de color rojo, 2px de grosor y estilo punteado?",
        a: "border: 2px solid red;",
        b: "border-color: red; border-width: 2px;",
        c: "border: 2px dashed blue;",
        d: "border: 2px dotted red;",
        correct: "d"
    },
    {
        question: "¿Qué valor de la propiedad animation hace que una animación alterne su dirección?",
        a: "linear",
        b: "infinite",
        c: "reverse",
        d: "alternate",
        correct: "d"
    },
    {
        question: "¿Qué propiedad CSS se utiliza para definir una animación personalizada?",
        a: "@keyanimation",
        b: "@keyframes",
        c: "@animation",
        d: "@import",
        correct: "b"
    },
    {
        question: "¿Qué ocurre con una imagen vectorial al ampliarla o reducirla?",
        a: "Pierde nitidez y definición.",
        b: "Mantiene su calidad sin importar el tamaño.",
        c: "Se distorsiona debido a los píxeles.",
        d: "Depende de la resolución de la pantalla.",
        correct: "b"
    },
    {
        question: "¿Qué es un píxel en una imagen de mapa de bits?",
        a: "La unidad mínima que compone una imagen raster",
        b: "La unidad que determina la posición de los colores",
        c: "Una fórmula matemática que define líneas y colores.",
        d: "Un filtro que mejora la nitidez de la imagen.",
        correct: "a"
    }
];;

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
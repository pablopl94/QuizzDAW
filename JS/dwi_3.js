const quizData = [
    {
        question: "¿Cuál es el objetivo principal de la accesibilidad web?",
        a: "Aumentar la velocidad de carga de las páginas web",
        b: "Garantizar la seguridad en el acceso a la información",
        c: "Hacer que las webs y aplicaciones sean utilizables por el mayor número de personas posible",
        d: "Mejorar el posicionamiento SEO",
        correct: "c",
    },
    {
        question: "¿Qué principio de las WCAG 2.0 establece que la información debe presentarse de forma comprensible para todos los usuarios?",
        a: "Operable",
        b: "Perceptible",
        c: "Comprensible",
        d: "Robusto",
        correct: "c",
    },
    {
        question: "¿Cuál de las siguientes acciones NO contribuye a la accesibilidad web?",
        a: "Usar el atributo alt en las imágenes",
        b: "Emplear encabezados y listas bien estructurados",
        c: "Justificar el texto para mejorar la estética",
        d: "Asegurar contraste suficiente entre texto y fondo",
        correct: "c",
    },
    {
        question: "¿Qué norma estadounidense exige que las tecnologías de información de las agencias federales sean accesibles para personas con discapacidad?",
        a: "Ley de Igualdad Digital (DED)",
        b: "Americans with Disabilities Act (ADA)",
        c: "Ley de Inclusión Web (WIA)",
        d: "Ley General de Servicios Electrónicos (LGSE)",
        correct: "b",
    },
    {
        question: "¿Qué niveles de conformidad existen en las WCAG 2.0?",
        a: "A, AA y AAA",
        b: "Bajo, Medio y Alto",
        c: "Nivel 1, Nivel 2 y Nivel 3",
        d: "Inicial, Intermedio y Avanzado",
        correct: "a",
    },
    {
        question: "¿Cuál es el objetivo principal del Consorcio World Wide Web (W3C)?",
        a: "Controlar los contenidos publicados en internet",
        b: "Desarrollar tecnologías para sistemas operativos",
        c: "Crear estándares web para guiar el desarrollo de la web hacia su máximo potencial",
        d: "Gestionar dominios y direcciones web",
        correct: "c",
    },
    {
        question: "¿Quién es el creador del W3C y también considerado el padre de la World Wide Web?",
        a: "Steve Jobs",
        b: "Larry Page",
        c: "Tim Berners-Lee",
        d: "Vint Cerf",
        correct: "c",
    },
    {
        question: "¿Qué principio del W3C busca que la web esté disponible independientemente del dispositivo utilizado?",
        a: "Web de Confianza",
        b: "Web desde cualquier dispositivo",
        c: "Web de Datos",
        d: "Web Móvil para Todos",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes organizaciones participa en la gestión del W3C?",
        a: "Facebook",
        b: "Laboratorio de Ciencias de la Computación e Inteligencia Artificial del MIT",
        c: "Apple",
        d: "Microsoft Research",
        correct: "b",
    },
    {
        question: "¿Qué tipo de entidades pueden formar parte del W3C como miembros?",
        a: "Solo universidades e instituciones públicas",
        b: "Cualquier individuo interesado en la programación",
        c: "Organizaciones que invierten en tecnologías web y desarrollo de productos basados en estándares W3C",
        d: "Únicamente empresas de telecomunicaciones",
        correct: "c",
    },
    {
        question: "¿Cuál es el enfoque principal de las pautas WCAG 2.1?",
        a: "Evaluar el rendimiento de un servidor web",
        b: "Evaluar la seguridad de los formularios",
        c: "Evaluar una única página web, no un sitio completo",
        d: "Medir la velocidad de navegación en sitios accesibles",
        correct: "c",
    },
    {
        question: "¿Qué herramienta permite analizar automáticamente una web y validar código JavaScript según WCAG 2.0?",
        a: "Tenon",
        b: "Web Developer Toolbar",
        c: "TAW",
        d: "Markup Validation Service",
        correct: "c",
    },
    {
        question: "¿Cuál es una limitación de las herramientas automáticas de evaluación de accesibilidad?",
        a: "Solo funcionan con HTML5",
        b: "No ofrecen resultados inmediatos",
        c: "No proporcionan informes",
        d: "No detectan todos los problemas y deben complementarse con evaluación manual",
        correct: "d",
    },
    {
        question: "¿Qué herramienta está diseñada para simular el uso del ratón mediante un joystick convencional?",
        a: "HeadMouse",
        b: "Mouse Joystick",
        c: "NVDA",
        d: "JAWS",
        correct: "b",
    },
    {
        question: "¿Cuál es el primer paso en la Metodología de Evaluación de Conformidad con la Accesibilidad en sitios Web (WCAG-EM)?",
        a: "Auditar la muestra seleccionada",
        b: "Reportar los resultados",
        c: "Definir el alcance de la evaluación",
        d: "Seleccionar una muestra representativa",
        correct: "c",
    },
    {
        question: "¿Cuál de las siguientes ventajas NO se asocia directamente con la usabilidad en una aplicación o sitio web?",
        a: "Aumento en la productividad",
        b: "Mejora del posicionamiento SEO automáticamente",
        c: "Reducción del estrés en los usuarios",
        d: "Disminución de los costes de asistencia",
        correct: "b",
    },
    {
        question: "¿Qué herramienta permite evaluar cómo los usuarios agruparían los contenidos de un sitio web?",
        a: "Prueba A/B",
        b: "Focus Group",
        c: "Card Sorting",
        d: "Test de velocidad",
        correct: "c",
    },
    {
        question: "¿Qué atributo se considera cuantificable de forma subjetiva según la ISO 9241-11 en usabilidad?",
        a: "Tiempo de carga",
        b: "Satisfacción de uso",
        c: "Número de errores cometidos",
        d: "Tasa de clics",
        correct: "b",
    },
    {
        question: "¿Cuál es un principio básico en el diseño de interfaces para usuarios mayores de 65 años?",
        a: "Uso de fuentes ornamentadas y decoradas",
        b: "Evitar la navegación secuencial",
        c: "Contraste fuerte entre texto y fondo",
        d: "Diseños minimalistas sin etiquetas textuales",
        correct: "c",
    },
    {
        question: "¿Qué tipo de interfaz suele tener una jerarquía de directorios, campo de búsqueda y noticias internas como elementos clave en su página de inicio?",
        a: "Portal de e-commerce",
        b: "Intranet",
        c: "E-learning",
        d: "Sitio institucional",
        correct: "b",
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

loadQuiz();

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    options[0].innerText = currentQuizData.a;
    options[1].innerText = currentQuizData.b;
    options[2].innerText = currentQuizData.c;
    options[3].innerText = currentQuizData.d;
}

function deselectOptions() {
    options.forEach(option => {
        option.classList.remove("correct", "incorrect");
        option.disabled = false;
    });
}

options.forEach(option => {
    option.addEventListener("click", () => {
        const answer = option.id;
        const currentQuizData = quizData[currentQuestionIndex];

        if (answer === currentQuizData.correct) {
            option.classList.add("correct");
            score++;
        } else {
            option.classList.add("incorrect");
        }

        options.forEach(opt => opt.disabled = true);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuiz();
            } else {
                showResults();
            }
        }, 1000);
    });
});

function showResults() {
    quizContainer.innerHTML = `
        <div class="result-box">
            <h2>Resultados</h2>
            <p>Respuestas correctas: <strong>${score}</strong></p>
            <p>Respuestas incorrectas: <strong>${quizData.length - score}</strong></p>
            <button onclick="goToMenu()" class="btn-return">Volver al Menú</button>
        </div>
    `;
}

function goToMenu() {
    window.location.href = "index.html";
}
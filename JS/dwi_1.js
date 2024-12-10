const quizData = [
    {
        question: "¿Qué significa UX en diseño?",
        a: "Experiencia del Usuario",
        b: "Usabilidad Externa",
        c: "Experiencia Unificada",
        d: "Experiencia Visual",
        correct: "a",
    },
    {
        question: "¿Qué concepto introdujo Jakob Nielsen en el diseño de UX?",
        a: "Leyes UX",
        b: "Principios de usabilidad",
        c: "Puertas de Norman",
        d: "Ley de Fitts",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes es una ventaja de una buena experiencia de usuario?",
        a: "Aumenta los costos de soporte",
        b: "Disminuye la satisfacción del usuario",
        c: "Retiene a los usuarios",
        d: "Reduce la velocidad de carga",
        correct: "c",
    },
    {
        question: "¿Qué representan las 'Puertas de Norman'?",
        a: "Un ejemplo de buen diseño",
        b: "Un ejemplo de diseño confuso",
        c: "Un tipo de puerta automática",
        d: "Una teoría de UX",
        correct: "b",
    },
    {
        question: "¿Cuál es el enfoque principal de UX en una interfaz?",
        a: "Crear elementos visualmente atractivos",
        b: "Mejorar la experiencia de interacción del usuario",
        c: "Usar colores llamativos",
        d: "Reducir el tamaño de las imágenes",
        correct: "b",
    },
    {
        question: "¿Qué se busca en la fase de Empatizar (Observar) en Design Thinking?",
        a: "Generar ideas",
        b: "Probar prototipos",
        c: "Explorar necesidades, problemas y factores clave mediante análisis y observación para entender a los usuarios y su entorno",
        d: "Diseñar la interfaz final",
        correct: "c",
    },
    {
        question: "¿Cuál de estos factores NO es clave en el diseño de experiencia de usuario?",
        a: "Velocidad de carga",
        b: "Tamaño de la empresa",
        c: "Facilidad de búsqueda y navegación",
        d: "Consistencia visual",
        correct: "b",
    },
    {
        question: "¿Qué ley de UX establece que el tiempo para tomar una decisión aumenta con el número de opciones?",
        a: "Ley de Hick",
        b: "Efecto Von Restorff",
        c: "Ley de Fitts",
        d: "Ley de Norman",
        correct: "a",
    },
    {
        question: "¿Qué es la usabilidad en una interfaz?",
        a: "La apariencia visual de la interfaz",
        b: "La facilidad con que el usuario puede alcanzar sus objetivos",
        c: "La cantidad de contenido en la interfaz",
        d: "La velocidad de carga del sitio",
        correct: "b",
    },
    {
        question: "¿Qué significa 'arquitectura de la información' en usabilidad?",
        a: "La disposición de los colores y las imágenes",
        b: "La organización de la información para que sea fácil de encontrar y entender",
        c: "El tamaño de los textos en la interfaz",
        d: "La estructura del código del sitio",
        correct: "b",
    },
    {
        question: "¿Qué heurística de Jakob Nielsen se refiere a mantener a los usuarios informados del estado de la interfaz?",
        a: "Visibilidad del estado del sistema",
        b: "Ayuda y documentación",
        c: "Flexibilidad y eficiencia de uso",
        d: "Control de errores",
        correct: "a",
    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de control y libertad del usuario?",
        a: "Un menú de ayuda extenso",
        b: "Un botón de retroceso o deshacer",
        c: "Un fondo colorido",
        d: "Instrucciones detalladas",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes opciones describe una interfaz con buen diseño estético y minimalista?",
        a: "Contiene muchos colores y gráficos sin relación",
        b: "Presenta solo la información necesaria para la tarea del usuario",
        c: "Tiene una variedad de botones y enlaces en cada sección",
        d: "Es completamente monocromática",
        correct: "b",
    },
    {
        question: "¿Cuál es el objetivo principal de la accesibilidad web?",
        a: "Hacer la web más atractiva visualmente",
        b: "Asegurar que todas las personas puedan acceder al contenido, sin importar sus capacidades o limitaciones",
        c: "Mejorar la velocidad de carga del sitio web",
        d: "Optimizar el diseño para dispositivos móviles",
        correct: "b",
    },
    {
        question: "¿Qué significa el nivel de conformidad 'AAA' en WCAG?",
        a: "Es el nivel mínimo de accesibilidad",
        b: "Es el nivel más alto y exigente de accesibilidad",
        c: "No es un nivel de conformidad en WCAG",
        d: "Es el nivel recomendado por la W3C",
        correct: "b",
    },
    {
        question: "¿Qué elemento ayuda a los usuarios a saber en qué parte del sitio web se encuentran?",
        a: "Color de fondo",
        b: "Migas de pan",
        c: "Subtítulos",
        d: "Enlaces destacados",
        correct: "b",
    },
    {
        question: "¿Qué significa 'perceptible' en las pautas WCAG?",
        a: "El contenido debe ser presentado de forma que los usuarios puedan percibirlo con alguno de sus sentidos",
        b: "El sitio debe ser visualmente atractivo",
        c: "Los usuarios deben poder hacer zoom en el contenido",
        d: "El contenido debe ser fácil de entender",
        correct: "a",
    },
    {
        question: "¿Qué es un modelo mental en el contexto del diseño?",
        a: "Una representación gráfica del producto final",
        b: "Las ideas preconcebidas que los usuarios tienen sobre cómo funciona un sistema o producto",
        c: "Un prototipo inicial para pruebas de usuario",
        d: "Un esquema de la interfaz",
        correct: "b",
    },
    {
        question: "¿Cuál es la primera fase del proceso de Design Thinking?",
        a: "Idear",
        b: "Prototipar",
        c: "Observar",
        d: "Definir",
        correct: "c",
    },
    {
        question: "¿Cuál de estas características describe el Design Thinking?",
        a: "Un proceso lineal y secuencial",
        b: "Un enfoque centrado en el usuario y no lineal",
        c: "Una metodología que solo se usa en diseño gráfico",
        d: "Un método exclusivamente para programadores",
        correct: "b",
    }
];


// Mezclar las preguntas y seleccionar 30 al azar
const shuffledQuizData = quizData.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

loadQuiz();

function loadQuiz() {
    deselectOptions();
    const currentQuizData = shuffledQuizData[currentQuestionIndex];
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
        if (answer === shuffledQuizData[currentQuestionIndex].correct) {
            option.classList.add("correct");
            score++;
        } else {
            option.classList.add("incorrect");
            incorrect++;
        }

        options.forEach(opt => opt.disabled = true);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuizData.length) {
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
            <p>Respuestas incorrectas: <strong>${incorrect}</strong></p>
            <button onclick="goToMenu()" class="btn-return">Volver al Menú</button>
        </div>
    `;
}

function goToMenu() {
    window.location.href = "index.html";
}
const quizData = [
    {
        question: "¿Cuál es uno de los principales errores al presentar los resultados de un test de usabilidad?",
        a: "Usar gráficos y estadísticas",
        b: "Presentar resultados con storytelling",
        c: "Mostrar resultados en el mismo orden del cuestionario",
        d: "Resumir los hallazgos clave al principio",
        correct: "c",
    },
    {
        question: "¿Qué tipo de prueba de usabilidad se realiza cuando un producto ya está en producción para medir tiempos y errores?",
        a: "Prueba formativa",
        b: "Prueba de campo",
        c: "Prueba remota moderada",
        d: "Prueba sumativa",
        correct: "d",
    },
    {
        question: "¿Qué herramienta permite probar sitios web en más de 1.500 navegadores y dispositivos móviles reales?",
        a: "Google Forms",
        b: "BrowserStack",
        c: "IE Netrenderer",
        d: "Google Play Console",
        correct: "b",
    },
    {
        question: "Según Jakob Nielsen, ¿cuántos usuarios suelen ser suficientes para detectar la mayoría de problemas de usabilidad?",
        a: "15",
        b: "2",
        c: "5",
        d: "10",
        correct: "c",
    },
    {
        question: "¿Qué ley establece que cuanto más cerca y grande sea un objetivo visual, más rápido será alcanzarlo?",
        a: "Ley de Nielsen",
        b: "Ley de Gestalt",
        c: "Ley de Hick",
        d: "Ley de Fitts",
        correct: "d",
    },
    {
        question: "¿Cuál de los siguientes NO es un atributo visual pre-atentivo?",
        a: "Color",
        b: "Movimiento",
        c: "Tipografía",
        d: "Tamaño",
        correct: "c",
    },
    {
        question: "¿Qué representa un color primario en el círculo cromático?",
        a: "Un color que se obtiene de mezclar dos secundarios",
        b: "Un color que se obtiene mezclando primario y secundario",
        c: "Un color que no puede obtenerse mediante mezcla",
        d: "Un color que se usa solo en impresión",
        correct: "c",
    },
    {
        question: "¿Cuál es una de las características clave de los iconos bien diseñados?",
        a: "Uso de muchos colores",
        b: "Alta resolución",
        c: "Reconocimiento por parte del usuario",
        d: "Formas complejas y abstractas",
        correct: "c",
    },
    {
        question: "¿Qué tipo de fuente es más adecuada para transmitir una imagen moderna y elegante en una interfaz digital?",
        a: "Manuscrita",
        b: "Serif",
        c: "Sans-serif",
        d: "Vintage",
        correct: "c",
    },
    {
        question: "¿Qué ley de la Gestalt explica que los elementos cercanos entre sí se perciben como parte de un mismo grupo?",
        a: "Ley de continuidad",
        b: "Ley de destino común",
        c: "Ley de simetría",
        d: "Ley de proximidad",
        correct: "d",
    },
    {
        question: "¿Cuál es el principal objetivo de la programación por capas en una aplicación web?",
        a: "Aumentar el número de servidores",
        b: "Mejorar la estética de la interfaz",
        c: "Separar la lógica de negocios de la presentación",
        d: "Hacer más atractiva la navegación",
        correct: "c",
    },
    {
        question: "¿Qué elemento de la interfaz web permite al usuario saber dónde se encuentra dentro del sitio?",
        a: "Pie de página",
        b: "Sistema de navegación",
        c: "Zona de contenido",
        d: "CTA (Call to Action)",
        correct: "b",
    },
    {
        question: "¿Cuál es una ventaja de la arquitectura cliente-servidor?",
        a: "No requiere mantenimiento",
        b: "No hay congestión de tráfico",
        c: "Centralización del control",
        d: "No necesita servidores",
        correct: "c",
    },
    {
        question: "¿Qué principio básico de diseño UI establece que cada pantalla debe soportar solo una acción primaria?",
        a: "Ayuda en línea",
        b: "Acción secundaria = Acción secundaria",
        c: "1 pantalla = 1 acción primaria",
        d: "Paso siguiente natural",
        correct: "c",
    },
    {
        question: "¿Cuál de estas arquitecturas permite que cada nodo funcione como cliente y servidor al mismo tiempo?",
        a: "Modelo cliente-servidor",
        b: "Arquitectura en dos niveles",
        c: "Arquitectura en tres niveles",
        d: "Peer to Peer (P2P)",
        correct: "d",
    },
    {
        question: "¿Qué es un wireframe en el contexto del diseño web?",
        a: "Un diseño final del sitio web con interactividad",
        b: "Un esquema funcional y visual con colores y tipografías",
        c: "Una estructura simple en escala de grises que muestra la disposición de elementos",
        d: "Un mapa conceptual interactivo del sitio",
        correct: "c",
    },
    {
        question: "¿Qué elemento NO suele incluir un wireframe?",
        a: "Botones simulados con funcionalidad",
        b: "Recuadros para contenido",
        c: "Zonas de navegación",
        d: "Anotaciones sobre interacción",
        correct: "a",
    },
    {
        question: "¿Cuál de los siguientes bloques forma parte de la estructura básica de una página web?",
        a: "Artículo",
        b: "Carrusel",
        c: "Encabezado",
        d: "Comentarios",
        correct: "c",
    },
    {
        question: "¿Qué es un sitemap en formato XML?",
        a: "Una imagen gráfica del sitio web",
        b: "Una herramienta para crear mapas mentales",
        c: "Un archivo con enlaces estructurados del sitio para buscadores",
        d: "Un programa para diseñar maquetas",
        correct: "c",
    },
    {
        question: "¿Cuál de estos programas permite crear mapas conceptuales colaborativos?",
        a: "Photoshop",
        b: "Creately",
        c: "Visual Studio",
        d: "GitHub",
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
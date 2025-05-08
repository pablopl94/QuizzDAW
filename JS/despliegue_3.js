const quizData = [
    {
        question: "¿Aproximadamente cuántos usuarios de Internet hay actualmente a nivel mundial?",
        a: "2 mil millones",
        b: "3 mil millones",
        c: "5 mil millones",
        d: "8 mil millones",
        correct: "c",
    },
    {
        question: "¿Cuál de estas NO es una forma de acceso a Internet?",
        a: "Fibra óptica",
        b: "Red móvil 5G",
        c: "Línea eléctrica",
        d: "RDMI (Red Digital de Mensajería Integrada)",
        correct: "d",
    },
    {
        question: "¿Cuáles son los dos modelos principales de arquitectura de red?",
        a: "Modelo cliente-servidor y modelo punto a punto (P2P)",
        b: "Modelo 2 capas y modelo 3 capas",
        c: "Modelo OSI y modelo TCP/IP",
        d: "Modelo centralizado y modelo descentralizado",
        correct: "a",
    },
    {
        question: "Según el RFC 1856, ¿cuál NO es una función básica del cliente en el modelo cliente-servidor?",
        a: "Recuperar datos del servidor",
        b: "Aceptar las peticiones del usuario",
        c: "Realizar una serie de acciones basadas en los comandos",
        d: "Transmitir las peticiones al servidor",
        correct: "c",
    },
    {
        question: "¿Cuál NO es una función básica del servidor en el modelo cliente-servidor?",
        a: "Aceptar conexiones de un cliente",
        b: "Aceptar una serie de comandos del cliente",
        c: "Traducir peticiones al protocolo común de recuperación",
        d: "Cerrar la conexión con el cliente",
        correct: "c",
    },
    {
        question: "¿Cuál es una ventaja del modelo cliente-servidor?",
        a: "Mayor robustez frente a fallos",
        b: "Centralización del control",
        c: "Menor congestión de tráfico",
        d: "Independencia del hardware y software del servidor",
        correct: "b",
    },
    {
        question: "¿Cuál es un inconveniente del modelo cliente-servidor?",
        a: "Escalabilidad reducida",
        b: "Difícil mantenimiento",
        c: "Cuando un servidor está caído, las peticiones no pueden ser satisfechas",
        d: "Descentralización excesiva",
        correct: "c",
    },
    {
        question: "Una red P2P (Peer to Peer) se caracteriza por:",
        a: "Tener un servidor central que coordina todas las actividades",
        b: "Los nodos actúan tanto como suministradores como clientes de recursos",
        c: "Depender de un sistema de DNS centralizado",
        d: "Utilizar exclusivamente conexiones por cable",
        correct: "b",
    },
    {
        question: "En una red P2P, ¿qué recursos pueden compartir los nodos?",
        a: "Solo ancho de banda",
        b: "Solo almacenamiento",
        c: "CPU, almacenamiento y ancho de banda",
        d: "Solo capacidad de procesamiento",
        correct: "c",
    },
    {
        question: "¿Cuál de las siguientes plataformas utiliza principalmente una arquitectura P2P?",
        a: "YouTube",
        b: "Netflix",
        c: "Torrent",
        d: "WhatsApp",
        correct: "c",
    },
    {
        question: "¿Cuál es una ventaja de la arquitectura P2P?",
        a: "Centralización del control",
        b: "Descentralización: ningún nodo es imprescindible",
        c: "Garantía de fiabilidad de los recursos",
        d: "Fácil mantenimiento",
        correct: "b",
    },
    {
        question: "El modelo de arquitectura de aplicaciones web de 2 capas consiste en:",
        a: "Presentación y datos",
        b: "Cliente y servidor",
        c: "Interfaz y lógica",
        d: "Aplicación y base de datos",
        correct: "b",
    },
    {
        question: "En el modelo de arquitectura de aplicaciones web de 3 capas, ¿cuál es la capa adicional respecto al modelo de 2 capas?",
        a: "Capa de seguridad",
        b: "Capa de respaldo",
        c: "Capa de base de datos",
        d: "Capa de presentación",
        correct: "c",
    },
    {
        question: "¿Qué es un servidor web?",
        a: "Un dispositivo hardware especializado",
        b: "Un programa especial que responde a peticiones HTTP",
        c: "Un sistema operativo optimizado",
        d: "Un tipo de conexión a Internet",
        correct: "b",
    },
    {
        question: "¿Cuáles son los principales métodos HTTP que un servidor web espera recibir?",
        a: "SEND, RECEIVE, UPDATE, DELETE",
        b: "READ, WRITE, MODIFY, ERASE",
        c: "GET, POST, PUT, DELETE",
        d: "CONNECT, REQUEST, MODIFY, DISCONNECT",
        correct: "c",
    },
    {
        question: "Cuando un servidor web recibe una petición, ¿qué tipo de código devuelve junto con los datos?",
        a: "Códigos de operación (101, 202, 303)",
        b: "Códigos de respuesta (200, 404, 503)",
        c: "Códigos de seguridad (001, 002, 003)",
        d: "Códigos binarios (0101, 1010, 1100)",
        correct: "b",
    },
    {
        question: "¿Cuál de estos NO es un servidor web?",
        a: "Apache",
        b: "Nginx",
        c: "MariaDB",
        d: "LiteSpeed",
        correct: "c",
    },
    {
        question: "¿A qué hace referencia un servidor de aplicaciones?",
        a: "A cualquier servidor que aloje aplicaciones",
        b: "A un servidor de aplicaciones Java EE",
        c: "A un servidor que solo alberga Servlets",
        d: "A un servidor web con capacidades avanzadas",
        correct: "b",
    },
    {
        question: "¿Qué es un contenedor de aplicaciones?",
        a: "Es exactamente lo mismo que un servidor de aplicaciones",
        b: "Un software que solo alberga Servlets (aplicaciones Java)",
        c: "Un dispositivo físico donde se almacenan aplicaciones",
        d: "Un espacio virtual similar a una máquina virtual",
        correct: "b",
    },
    {
        question: "¿Qué es JEE?",
        a: "Java Enterprise Edition, un lenguaje de programación",
        b: "Una especificación que determina las APIs para construir aplicaciones corporativas",
        c: "Un servidor de aplicaciones específico",
        d: "Un protocolo de comunicación entre servidores",
        correct: "b",
    },
    {
        question: "¿Cuál de estos es un ejemplo de servidor de aplicaciones Java?",
        a: "MySQL",
        b: "Apache HTTP Server",
        c: "JBoss",
        d: "PHP",
        correct: "c",
    },
    {
        question: "¿Qué componentes son necesarios para desplegar una aplicación web básica?",
        a: "Servidor web, lenguaje del lado del servidor, sistema gestor de base de datos",
        b: "Solo un servidor web y una base de datos",
        c: "Un host, un dominio y un certificado SSL",
        d: "Un sistema operativo Linux, Apache y MySQL",
        correct: "a",
    },
    {
        question: "En el contexto de aplicaciones web, PHP es:",
        a: "Un servidor web",
        b: "Un sistema gestor de base de datos",
        c: "Un lenguaje del lado del servidor",
        d: "Un contenedor de aplicaciones",
        correct: "c",
    },
    {
        question: "¿Qué significa XAMPP?",
        a: "X (Sistema operativo), Apache, MySQL, PHP, Perl",
        b: "XML, Apache, MySQL, PHP, Python",
        c: "X (Multiplataforma), Apache, MariaDB, PHP, Perl",
        d: "X-treme, Apache, MySQL, PHP, Perl",
        correct: "a",
    },
    {
        question: "¿Cuál de estas suites NO se utiliza comúnmente para implementar aplicaciones web en local?",
        a: "XAMPP",
        b: "LAMP",
        c: "MAMP",
        d: "XTML",
        correct: "d",
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
const quizData = [
    {
        question: "¿Qué es un servidor de aplicaciones?",
        a: "Un servidor donde va a funcionar una aplicación escrita en un lenguaje de programación específico",
        b: "Un tipo de servidor web que solo sirve archivos HTML",
        c: "Un servidor que almacena únicamente bases de datos",
        d: "Un servidor virtual que simula aplicaciones",
        correct: "a",
    },
    {
        question: "¿Qué servidor de aplicaciones Java se estudia en el módulo de Despliegue de aplicaciones web?",
        a: "GlassFish",
        b: "Apache Tomcat",
        c: "WildFly",
        d: "Payara",
        correct: "b",
    },
    {
        question: "¿Por qué puerto escucha Apache Tomcat por defecto?",
        a: "80",
        b: "443",
        c: "8080",
        d: "3306",
        correct: "c",
    },
    {
        question: "¿Qué componente es necesario instalar para poder ejecutar aplicaciones Java en un servidor?",
        a: "JDK (Kit de Desarrollo de Java)",
        b: "MySQL",
        c: "PHP",
        d: "Node.js",
        correct: "a",
    },
    {
        question: "¿Qué contiene el JDK que es necesario para ejecutar programas Java?",
        a: "Solo JVM (Máquina Virtual Java)",
        b: "Solo Java Compiler",
        c: "JVM y Java Compiler",
        d: "Solo bibliotecas Java",
        correct: "c",
    },
    {
        question: "¿Cuál es la característica principal de Apache Tomcat?",
        a: "Está desarrollado en C++",
        b: "Es de pago",
        c: "Está desarrollado en Java",
        d: "Solo funciona en Windows",
        correct: "c",
    },
    {
        question: "¿En qué carpeta se instalan las aplicaciones web en Tomcat?",
        a: "/var/www/html",
        b: "webapps",
        c: "deploy",
        d: "applications",
        correct: "b",
    },
    {
        question: "¿Qué herramienta proporciona Tomcat para administrar aplicaciones desde su página por defecto?",
        a: "Admin Console",
        b: "Control Panel",
        c: "Manager App",
        d: "Tomcat Dashboard",
        correct: "c",
    },
    {
        question: "¿En qué archivo se gestionan los usuarios de Apache Tomcat?",
        a: "users.conf",
        b: "tomcat-users.xml",
        c: "security.xml",
        d: "web.xml",
        correct: "b",
    },
    {
        question: "¿Qué carpeta contiene los archivos de registro (logs) en Tomcat?",
        a: "logs",
        b: "register",
        c: "log-files",
        d: "debug",
        correct: "a",
    },
    {
        question: "¿Qué es un servlet en las aplicaciones web Java?",
        a: "Un tipo de base de datos",
        b: "Un archivo HTML con código Java insertado",
        c: "El componente fundamental de las aplicaciones web Java que procesa peticiones",
        d: "Un protocolo de comunicación",
        correct: "c",
    },
    {
        question: "¿Qué métodos están definidos en los servlets para procesar peticiones HTTP?",
        a: "run() y execute()",
        b: "doGet() y doPost()",
        c: "process() y handle()",
        d: "init() y destroy()",
        correct: "b",
    },
    {
        question: "¿Dónde se ubican los servlets en la estructura de una aplicación web Java?",
        a: "En la carpeta /root",
        b: "En la carpeta /classes",
        c: "En la carpeta /html",
        d: "En la carpeta /lib",
        correct: "b",
    },
    {
        question: "¿Qué función principal realiza un servlet cuando recibe una petición?",
        a: "Redirige al usuario a otra página",
        b: "Genera un archivo HTML como respuesta",
        c: "Modifica la base de datos",
        d: "Cierra la conexión automáticamente",
        correct: "b",
    },
    {
        question: "¿Qué archivo de configuración es el principal en Apache Tomcat?",
        a: "web.xml",
        b: "server.xml",
        c: "tomcat.conf",
        d: "apache.properties",
        correct: "b",
    },
    {
        question: "¿Por qué puerto se accede por defecto a una aplicación segura (HTTPS) en Tomcat?",
        a: "443",
        b: "8080",
        c: "8443",
        d: "9090",
        correct: "c",
    },
    {
        question: "¿Qué se debe implementar para habilitar HTTPS en un servidor Tomcat?",
        a: "Un certificado SSL/TLS",
        b: "Un firewall adicional",
        c: "Un proxy inverso",
        d: "Un módulo de PHP",
        correct: "a",
    },
    {
        question: "¿Cuál de estas carpetas es importante en la estructura de Tomcat?",
        a: "content",
        b: "website",
        c: "public_html",
        d: "conf",
        correct: "d",
    },
    {
        question: "¿Qué significa que Java sea un lenguaje multiplataforma?",
        a: "Que solo funciona en plataformas Windows",
        b: "Que puede funcionar en distintos sistemas operativos",
        c: "Que necesita diferentes compiladores para cada sistema operativo",
        d: "Que genera diferentes archivos ejecutables para cada plataforma",
        correct: "b",
    },
    {
        question: "¿Qué tipo de archivo ejecutable genera Java?",
        a: ".exe",
        b: ".jar",
        c: ".deb",
        d: ".bat",
        correct: "b",
    },
    {
        question: "¿Qué entorno permite que las aplicaciones Java funcionen en diferentes sistemas operativos?",
        a: "JVM (Java Virtual Machine)",
        b: "JDK (Java Development Kit)",
        c: "Tomcat",
        d: "JSP (Java Server Pages)",
        correct: "a",
    },
    {
        question: "¿Qué extensión tienen los archivos de páginas web dinámicas en Java?",
        a: ".html",
        b: ".java",
        c: ".jsp",
        d: ".jhtml",
        correct: "c",
    },
    {
        question: "¿En qué directorio de Apache Tomcat se guardan las bibliotecas Java?",
        a: "bin",
        b: "lib",
        c: "webapps",
        d: "work",
        correct: "b",
    },
    {
        question: "¿Cómo se controla el acceso a las aplicaciones web en Tomcat?",
        a: "Modificando el archivo .htaccess",
        b: "Instalando un módulo de seguridad adicional",
        c: "A través del archivo tomcat-users.xml y roles de usuario",
        d: "Solo a través de un cortafuegos externo",
        correct: "c",
    },
    {
        question: "¿Cuál es la ventaja principal de configurar SSL/TLS en un servidor de aplicaciones?",
        a: "Aumenta la velocidad de carga de las páginas",
        b: "Cifra las comunicaciones para proteger la confidencialidad de los datos",
        c: "Reduce el consumo de recursos del servidor",
        d: "Permite ejecutar más aplicaciones simultáneamente",
        correct: "b",
    }
];


// Mezclar las preguntas y seleccionar 20 al azar
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
    
    // Obtener solo el texto de la opción, sin la letra del índice
    options.forEach((option, index) => {
        const optionLetter = String.fromCharCode(97 + index); // 'a', 'b', 'c', 'd'
        const optionText = option.querySelector(".option-text");
        if (optionText) {
            optionText.innerText = currentQuizData[optionLetter];
        } else {
            option.innerText = currentQuizData[optionLetter];
        }
    });
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
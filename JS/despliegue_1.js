const quizData = [
    {
        question: "¿Dónde podemos cambiar la prioridad de carga de un nombre de archivo de una web, es decir, que una página dependiendo del nombre se cargue antes que otra?",
        a: "priority.conf",
        b: "dir.conf",
        c: "pages.conf",
        d: "load.conf",
        correct: "a",
    },
    {
        question: "¿Qué directiva del Virtual Host se indica el correo de contacto del administrador?",
        a: "DocumentRoot",
        b: "ServerName",
        c: "ServerAdmin",
        d: "AdminContact",
        correct: "c",
    },
    {
        question: "¿Qué orden permite crear un vínculo en los módulos activados que hacen referencia a los módulos disponibles en un servidor web Apache?",
        a: "a2enmod",
        b: "a2ensite",
        c: "a2dismod",
        d: "a2addmod",
        correct: "a",
    },
    {
        question: "¿Cómo se denomina al modelo de arquitectura de red en el que los nodos que lo componen están al mismo nivel, no hay ninguna figura jerárquica?",
        a: "Modelo Cliente-Cliente",
        b: "Modelo P2P, Peer to Peer",
        c: "Modelo Cliente-Servidor",
        d: "Modelo de red jerárquica",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes funciones es considerada básica para el servidor?",
        a: "Recuperar datos del servidor",
        b: "Aceptar conexiones con el cliente",
        c: "Enviará respuesta al usuario",
        d: "Asegurar la conexión con la base de datos",
        correct: "b",
    },
    {
        question: "¿Cuál de las siguientes plataformas sigue un modelo P2P?",
        a: "YouTube",
        b: "Spotify",
        c: "PeerTube",
        d: "Vimeo",
        correct: "c",
    },
    {
        question: "¿Cuál de los siguientes servidores Web es de Microsoft?",
        a: "Apache Web Server",
        b: "Nginx",
        c: "Internet Information Server",
        d: "LiteSpeed",
        correct: "c",
    },
    {
        question: "¿Cuál de los siguientes servidores permite la ejecución de aplicaciones en Java?",
        a: "Apache Tomcat",
        b: "thttpd",
        c: "Apache",
        d: "Node.js",
        correct: "a",
    },
    {
        question: "¿Cuál es el código de respuesta de un servidor web, cuando se hace una petición incorrecta, bad request?",
        a: "401",
        b: "402",
        c: "400",
        d: "403",
        correct: "c",
    },
    {
        question: "¿Cuál es el archivo principal de configuración del servidor web Apache?",
        a: "apache.conf",
        b: "ssl.conf",
        c: "apache2.conf",
        d: "httpd.conf",
        correct: "c",
    },
    {
        question: "Comando que permite desactivar módulos en Apache",
        a: "a2dismod modulo_apache",
        b: "adismod modulo_apache",
        c: "a2enmod modulo_apache",
        d: "a2deactivate modulo_apache",
        correct: "a",
    },
    {
        question: "¿En qué carpeta se encuentran los módulos disponibles del Apache?",
        a: "/etc/apace2/mods-available",
        b: "/etc/apache2/mods-disponibles",
        c: "/etc/apache2/mods-enabled",
        d: "/etc/apache2/modules-available",
        correct: "a",
    },
    {
        question: "¿En qué carpeta se encuentran las páginas disponibles del Apache (Virtual Host)?",
        a: "/etc/apache2/sites-available",
        b: "/etc/apache2/sites-enabled",
        c: "/etc/apache2/sites",
        d: "/etc/apache2/virtual-hosts",
        correct: "a",
    },
    {
        question: "El cifrado SSL con respecto a TLS",
        a: "TLS es una versión más antigua que SSL",
        b: "TLS y SSL son lo mismo, trabajan al mismo nivel",
        c: "SSL es una versión más antigua que TLS",
        d: "TLS es más rápido que SSL",
        correct: "c",
    },
    {
        question: "La última versión de SSL (Secure Socket Layer) es",
        a: "SSL 4.0",
        b: "SSL 2.5",
        c: "SSL 3.0",
        d: "SSL 3.1",
        correct: "c",
    },
    {
        question: "El principio básico de seguridad de la información que permite la privacidad de los datos se llama",
        a: "Confidencialidad",
        b: "Integridad",
        c: "Autenticación",
        d: "Autorización",
        correct: "a",
    },
    {
        question: "Mediante qué herramienta a nivel digital podemos garantizar la identidad de las partes",
        a: "Certificados digitales",
        b: "Criptografía asimétrica",
        c: "No se puede garantizar",
        d: "Firmas electrónicas",
        correct: "a",
    },
    {
        question: "El principio básico de seguridad de la información que permite que las partes no se desdigan se llama",
        a: "No repudio",
        b: "Repudio",
        c: "Autenticidad",
        d: "Confianza",
        correct: "a",
    },
    {
        question: "¿Cómo se llama al tercero de confianza responsable de autenticar las partes en una comunicación?",
        a: "Entidad Certificadora",
        b: "Entidad Verificación",
        c: "Entidad Registradora",
        d: "Autoridad Certificadora",
        correct: "a",
    },
    {
        question: "¿Cuál es el nombre por defecto del archivo de configuración del Virtual Host del Apache2?",
        a: "000default.conf",
        b: "000-default.html",
        c: "000-default.conf",
        d: "000-default-vhost.conf",
        correct: "c",
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
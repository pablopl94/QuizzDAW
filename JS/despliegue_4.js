const quizData = [
    {
        question: "¿Cuál es el archivo de configuración principal del servidor Apache?",
        a: "httpd.conf",
        b: "apache2.conf",
        c: "apache.conf",
        d: "apache2.ini",
        correct: "b",
    },
    {
        question: "¿Qué comando se utiliza para activar un módulo en Apache?",
        a: "apache2 mod-on",
        b: "apache2 enable-mod",
        c: "a2enmod",
        d: "mod-activate",
        correct: "c",
    },
    {
        question: "¿Qué comando se utiliza para desactivar un módulo en Apache?",
        a: "apache2 mod-off",
        b: "apache2 disable-mod",
        c: "a2dismod",
        d: "mod-deactivate",
        correct: "c",
    },
    {
        question: "¿Qué permite configurar un host virtual en Apache?",
        a: "Mejorar la velocidad del servidor",
        b: "Gestionar distintos dominios desde un mismo servidor sin conflictos",
        c: "Crear una red privada virtual",
        d: "Limitar el ancho de banda por dominio",
        correct: "b",
    },
    {
        question: "¿Qué significan las siglas HTTPS?",
        a: "High Text Transfer Protocol System",
        b: "Hypertext Transport Protocol Secure",
        c: "Hyper Text Transfer Protocol Secure",
        d: "High Transport Text Protocol System",
        correct: "c",
    },
    {
        question: "¿Qué elemento visual indica que un sitio web está protegido con un certificado SSL?",
        a: "Un icono de escudo en la página",
        b: "El nombre del sitio en negrita",
        c: "Un símbolo de candado en la barra del navegador",
        d: "Una marca de verificación verde",
        correct: "c",
    },
    {
        question: "¿Qué significa SSL?",
        a: "Security Socket Layer",
        b: "Secure System Link",
        c: "System Secure Lock",
        d: "Secure Sockets Layer",
        correct: "d",
    },
    {
        question: "¿Qué es TLS en relación con SSL?",
        a: "Una versión más antigua de SSL",
        b: "Un protocolo complementario a SSL",
        c: "Una versión actualizada y más segura de SSL",
        d: "Un tipo de certificado digital diferente",
        correct: "c",
    },
    {
        question: "¿Qué método de control de acceso NO se menciona en el documento para Apache?",
        a: "Autenticación básica",
        b: "Autenticación con PAM",
        c: "Autenticación con LDAP",
        d: "Autenticación con JWT",
        correct: "d",
    },
    {
        question: "¿Qué tipo de criptosistema utiliza dos claves distintas para cifrar y descifrar?",
        a: "Criptosistema simétrico",
        b: "Criptosistema asimétrico",
        c: "Criptosistema de clave privada",
        d: "Sistema de cifrado clásico",
        correct: "b",
    },
    {
        question: "¿Cuál de los siguientes NO es un ejemplo de criptosistema de clave privada o simétrico?",
        a: "DES",
        b: "AES",
        c: "RSA",
        d: "Blowfish",
        correct: "c",
    },
    {
        question: "¿Cuál es el principal problema de los criptosistemas de clave privada o simétricos?",
        a: "Son demasiado lentos para aplicaciones web",
        b: "No son suficientemente seguros",
        c: "El número y gestión de claves",
        d: "No pueden utilizarse para firmas digitales",
        correct: "c",
    },
    {
        question: "En un sistema de clave pública, ¿quién conoce la clave privada?",
        a: "Todo el mundo",
        b: "Solo su propietario",
        c: "La Autoridad de Certificación",
        d: "Todos los usuarios autorizados",
        correct: "b",
    },
    {
        question: "¿Qué característica proporciona la función hash en criptografía?",
        a: "Cifrado rápido de archivos grandes",
        b: "Transformación de mensajes de longitud arbitraria en mensajes de longitud fija",
        c: "Autenticación biométrica",
        d: "Gestión de claves privadas",
        correct: "b",
    },
    {
        question: "Cuando se envía un mensaje cifrado y firmado, ¿qué se utiliza para cifrar el mensaje?",
        a: "La clave privada del emisor",
        b: "La clave pública del emisor",
        c: "La clave privada del receptor",
        d: "La clave pública del receptor",
        correct: "d",
    },
    {
        question: "¿Qué se utiliza para firmar digitalmente un mensaje?",
        a: "La clave privada del emisor",
        b: "La clave pública del emisor",
        c: "La clave privada del receptor",
        d: "La clave pública del receptor",
        correct: "a",
    },
    {
        question: "¿Cuál es el problema que resuelve la certificación digital?",
        a: "La lentitud de los algoritmos de cifrado",
        b: "Garantizar la identidad de las partes",
        c: "El tamaño de los archivos cifrados",
        d: "La falta de confidencialidad en las comunicaciones",
        correct: "b",
    },
    {
        question: "¿Qué significa PKI?",
        a: "Public Key Infrastructure",
        b: "Private Key Installation",
        c: "Protected Key Interface",
        d: "Public Key Integration",
        correct: "a",
    },
    {
        question: "¿Qué tipo de certificado se utiliza comúnmente en los servidores web?",
        a: "Certificados personales",
        b: "Certificados de entidad",
        c: "Certificados de servidor",
        d: "Certificados de software",
        correct: "c",
    },
    {
        question: "¿Qué formato de certificado es comúnmente usado en la web?",
        a: "X.500",
        b: "X.509v3",
        c: "SSL.cert",
        d: "Web.509",
        correct: "b",
    },
    {
        question: "¿Cuál es el estado de un certificado cuando su clave privada se ha visto comprometida?",
        a: "Expirado",
        b: "Suspendido",
        c: "Revocado",
        d: "Emitido",
        correct: "c",
    },
    {
        question: "¿Qué significa CRL en el contexto de certificados digitales?",
        a: "Certificate Request List",
        b: "Certificate Revocation List",
        c: "Certified Root License",
        d: "Critical Resource Link",
        correct: "b",
    },
    {
        question: "¿Qué herramienta se usa comúnmente para controlar los puertos entrantes y salientes en un servidor web?",
        a: "WAF",
        b: "Firewall",
        c: "IDS",
        d: "SSL",
        correct: "b",
    },
    {
        question: "¿Qué significa WAF?",
        a: "Web Access Firewall",
        b: "Web Application Firewall",
        c: "Wide Area Firewall",
        d: "Web Authentication Framework",
        correct: "b",
    },
    {
        question: "¿Qué combinación de software es comúnmente utilizada para desplegar aplicaciones web según el documento?",
        a: "Nginx, PostgreSQL, Python",
        b: "Apache, MariaDB, PHP",
        c: "IIS, SQL Server, ASP.NET",
        d: "Tomcat, Oracle, Java",
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
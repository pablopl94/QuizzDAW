const quizData = [
    {
        question: "¿Qué código de respuesta en un servidor FTP indica que la acción no se ha terminado, que debe obtenerse otra nueva respuesta para poder enviar otro comando?",
        a: "3XX",
        b: "2XX",
        c: "1XX",
        d: "4XX",
        correct: "c"
    },
    {
        question: "El puerto por defecto de conexión en un servicio ftp…",
        a: "Es el 20",
        b: "Es el 21",
        c: "Es el 22",
        d: "Es el 23",
        correct: "b"
    },
    {
        question: "En una transferencia FTP, ¿cuál es la orden que le envía el cliente para establecer una comunicación en modo activo?",
        a: "PORT",
        b: "PASV",
        c: "ACT",
        d: "LIST",
        correct: "a"
    },
    {
        question: "En un servidor FTP, es necesario que el cliente y el servidor…",
        a: "Puede tener distinta plataforma, puede ser de Windows a Linux y viceversa",
        b: "Es independiente de la plataforma, es un servicio que va por TCP",
        c: "Tengan la misma plataforma, Linux-Linux, Windows-Windows, …",
        d: "Deban estar en la misma red local",
        correct: "b"
    },
    {
        question: "¿Hace cuántos años de publicó el primer concepto de FTP, protocolo de transferencia de archivos?",
        a: "entre 10 y 20 años",
        b: "más de 50 años",
        c: "entre 21 y 45 años",
        d: "menos de 10 años",
        correct: "b"
    },
    {
        question: "¿Cuál de los siguientes programas es un servidor FTP?",
        a: "proftpd",
        b: "pureftpd y proftpd",
        c: "pureftpd",
        d: "vsftpd",
        correct: "b"
    },
    {
        question: "¿Cuál es el puerto por defecto del Apache Tomcat?",
        a: "80",
        b: "8080",
        c: "8082",
        d: "443",
        correct: "b"
    },
    {
        question: "¿Cuál de los siguientes servidores de aplicaciones web utilizan también Java?",
        a: "GlassFish",
        b: "GlassFish y WildFly",
        c: "WildFly",
        d: "Apache Tomcat",
        correct: "b"
    },
    {
        question: "¿Cuál es la extensión de un archivo ejecutable de Java?",
        a: ".exe",
        b: ".deb",
        c: ".jar",
        d: ".class",
        correct: "c"
    },
    {
        question: "¿Cuál es el código de respuesta de un servidor web, si no se tiene acceso a esa página solicitada?",
        a: "403",
        b: "200",
        c: "301",
        d: "404",
        correct: "a"
    },
    {
        question: "¿Cuál es el apartado de Apache Tomcat para gestionar las aplicaciones publicadas?",
        a: "Manager App",
        b: "Host Manager",
        c: "Server Status",
        d: "Admin Console",
        correct: "a"
    },
    {
        question: "¿Qué significan las siglas JDK en el mundo de Java?",
        a: "Java Development Kellogs",
        b: "Java Documentation Kit",
        c: "Java Development Kit",
        d: "Java Deployment Kit",
        correct: "c"
    },
    {
        question: "El sistema nombres DNS tiene un sistema tipo...",
        a: "lista",
        b: "árbol",
        c: "grafo",
        d: "tabla",
        correct: "b"
    },
    {
        question: "En un servidor de DNS el registro A, asocia a un dominio...",
        a: "la dirección IPV8",
        b: "la dirección IPV4",
        c: "la dirección IPV6",
        d: "un nombre de dominio",
        correct: "b"
    },
    {
        question: "En un servidor de DNS el registro MX, asocia a un dominio...",
        a: "la dirección ip asociada al servidor ftp",
        b: "la dirección ip asociada al servidor de correo",
        c: "la dirección ip asociada al servidor web",
        d: "la dirección ip asociada al servidor DNS",
        correct: "b"
    },
    {
        question: "En un servidor de DNS el registro CNAME...",
        a: "Las respuestas b y c son correctas",
        b: "Es el nombre canónico, canonical name",
        c: "Se utiliza para asociar alias para nombres de dominio",
        d: "Solo se utiliza para alias de subdominios",
        correct: "a"
    },
    {
        question: "En un servidor de DNS el registro NS..",
        a: "Es el registro inverso",
        b: "Dice dónde está el servidor de nombres que tiene asociado el dominio",
        c: "No existe ese registro",
        d: "Define los servidores de correo de un dominio",
        correct: "b"
    },
    {
        question: "En un servidor de DNS el registro PTR",
        a: "Es el registro inverso o también llamado indicador (puntero)",
        b: "Las tres respuestas anteriores son correctas",
        c: "Se encarga de traducir los registros de tipo A a dominio",
        d: "Se utiliza para resolver direcciones IPv6",
        correct: "a"
    },
    {
        question: "¿Qué compañía que proporciona servicio de DNS te protege frente a amenazas y cuida tu privacidad?",
        a: "Google",
        b: "La que te proporciona el ISP",
        c: "Quad9",
        d: "Cloudflare",
        correct: "c"
    },
    {
        question: "En un servidor de DNS el registro CNAME...",
        a: "Es el nombre canónico, canonical name",
        b: "Las respuestas a y c son correctas",
        c: "Se utiliza para asociar alias para nombres de dominio",
        d: "Se usa para asociar alias a direcciones IP",
        correct: "b"
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

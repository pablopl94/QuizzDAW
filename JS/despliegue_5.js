const quizData = [
    {
        question: "¿Cuál es el puerto TCP que utilizan los servidores FTP para atender las conexiones de control?",
        a: "Puerto 20",
        b: "Puerto 21",
        c: "Puerto 22",
        d: "Puerto 23",
        correct: "b",
    },
    {
        question: "¿Qué puerto suele utilizar el servidor FTP para las conexiones de datos en modo activo?",
        a: "Puerto 20",
        b: "Puerto 21",
        c: "Puerto 22",
        d: "Puerto 23",
        correct: "a",
    },
    {
        question: "¿Cuáles son los dos tipos de conexiones que se establecen en una sesión FTP?",
        a: "Conexión de envío y conexión de recepción",
        b: "Conexión de usuario y conexión de servidor",
        c: "Conexión de control y conexión de datos",
        d: "Conexión de archivos y conexión de directorios",
        correct: "c",
    },
    {
        question: "¿Cuáles son los objetivos principales del FTP según el documento?",
        a: "Promover el intercambio de archivos y proteger al usuario",
        b: "Compartir archivos y comprimir datos",
        c: "Promover intercambio de archivos, fomentar uso de ordenadores remotos, proteger al usuario y transferir datos de forma fiable",
        d: "Comprimir archivos y cifrar la comunicación",
        correct: "c",
    },
    {
        question: "¿Qué indican los códigos de respuesta FTP que comienzan con 2XX?",
        a: "La acción no se ha terminado",
        b: "La acción se realizó con éxito",
        c: "Se está esperando que el cliente envíe información adicional",
        d: "La acción solicitada no se puede realizar",
        correct: "b",
    },
    {
        question: "¿Qué tipo de usuarios pueden acceder al servicio FTP en vsftpd?",
        a: "Solo usuarios locales",
        b: "Usuarios locales y anónimos",
        c: "Usuarios locales, anónimos y virtuales",
        d: "Solo usuarios virtuales",
        correct: "c",
    },
    {
        question: "¿Cuál de estos modos NO es un modo de conexión del cliente FTP?",
        a: "Modo activo",
        b: "Modo pasivo",
        c: "Modo híbrido",
        d: "Todos son modos de conexión válidos",
        correct: "c",
    },
    {
        question: "En el modo activo de FTP, ¿quién inicia la conexión de datos?",
        a: "El cliente",
        b: "El servidor",
        c: "Ambos al mismo tiempo",
        d: "Depende de la configuración",
        correct: "b",
    },
    {
        question: "En el modo pasivo de FTP, ¿quién inicia la conexión de datos?",
        a: "El cliente",
        b: "El servidor",
        c: "Ambos al mismo tiempo",
        d: "Depende de la configuración",
        correct: "a",
    },
    {
        question: "¿Cuál es el directorio remoto por defecto para los usuarios anónimos en vsftpd?",
        a: "/home/anonymous",
        b: "/home/ftp",
        c: "/srv/ftp",
        d: "/var/ftp",
        correct: "c",
    },
    {
        question: "¿Qué directiva de vsftpd permite mantener enjaulados a los usuarios locales en su directorio de trabajo?",
        a: "local_jail",
        b: "chroot_local_user",
        c: "jail_user",
        d: "local_chroot",
        correct: "b",
    },
    {
        question: "¿Qué significa que un código de respuesta FTP comience con 5XX?",
        a: "La acción no se ha terminado",
        b: "La acción se realizó con éxito",
        c: "Se está esperando que el cliente envíe información adicional",
        d: "La acción solicitada no se puede realizar",
        correct: "d",
    },
    {
        question: "¿Qué es un usuario virtual en el contexto de un servidor FTP?",
        a: "Un usuario que solo puede hacer operaciones de lectura",
        b: "Un usuario que no tiene cuenta en el sistema servidor pero puede acceder al servicio FTP",
        c: "Un usuario temporal que se elimina después de cada sesión",
        d: "Un usuario que se conecta a través de una VPN",
        correct: "b",
    },
    {
        question: "¿Qué comando envía el cliente FTP para solicitar una conexión en modo pasivo?",
        a: "PORT",
        b: "PASV",
        c: "PASSIVE",
        d: "MODE",
        correct: "b",
    },
    {
        question: "¿Qué tipos de transferencia existen en FTP?",
        a: "Transferencia simple y compuesta",
        b: "Transferencia unidireccional y bidireccional",
        c: "Transferencia ASCII y binaria",
        d: "Transferencia segura e insegura",
        correct: "c",
    },
    {
        question: "¿Qué son las cuotas en un servidor FTP?",
        a: "Limitaciones sobre la cantidad de conexiones simultáneas",
        b: "Limitaciones sobre la cantidad de información que los usuarios pueden subir al servidor",
        c: "Limitaciones sobre la velocidad de transferencia",
        d: "Limitaciones sobre el número de usuarios que pueden conectarse",
        correct: "b",
    },
    {
        question: "¿Qué significa WebDAV?",
        a: "Web Directory and Virtual Access",
        b: "Web Distributed Authoring and Versioning",
        c: "Web Development and Validation",
        d: "Website Directory Access Verification",
        correct: "b",
    },
    {
        question: "¿Qué funcionalidad permite WebDAV?",
        a: "Solo permite ver archivos en servidores web",
        b: "Permite guardar, editar, copiar, mover y compartir archivos desde servidores web",
        c: "Permite solo transferir archivos binarios",
        d: "Permite conectarse a varios servidores FTP simultáneamente",
        correct: "b",
    },
    {
        question: "En el contexto de FTP, ¿qué se refiere como 'directorio remoto'?",
        a: "Un directorio que está en una ubicación física diferente",
        b: "Un directorio en el equipo del cliente",
        c: "Un directorio que el servidor FTP pone a disposición de los clientes",
        d: "Un directorio que requiere autenticación especial",
        correct: "c",
    },
    {
        question: "¿Qué directiva de vsftpd permite configurar los permisos con los que se crean los archivos subidos por usuarios anónimos?",
        a: "anon_permissions",
        b: "anon_umask",
        c: "anon_file_mode",
        d: "anon_upload_permissions",
        correct: "b",
    },
    {
        question: "¿Qué método de conexión FTP es más recomendable cuando el cliente está detrás de un firewall?",
        a: "Modo activo",
        b: "Modo pasivo",
        c: "Modo híbrido",
        d: "Modo seguro",
        correct: "b",
    },
    {
        question: "¿Qué permite hacer la directiva write_enable en vsftpd?",
        a: "Permite a los usuarios anónimos escribir en el servidor",
        b: "Permite a los usuarios locales escribir en el servidor",
        c: "Configura los permisos de escritura para todos los usuarios",
        d: "Activa la escritura en el log del servidor",
        correct: "b",
    },
    {
        question: "¿Qué tipo de transferencia es más adecuada para archivos de texto plano?",
        a: "Transferencia binaria",
        b: "Transferencia ASCII",
        c: "Transferencia hexadecimal",
        d: "Transferencia Unicode",
        correct: "b",
    },
    {
        question: "¿Cuál es la ventaja principal de usar WebDAV frente a FTP?",
        a: "WebDAV es más rápido que FTP",
        b: "WebDAV permite trabajar con archivos directamente en un servidor web como si fuera una unidad de red",
        c: "WebDAV usa menos ancho de banda",
        d: "WebDAV es más seguro por defecto",
        correct: "b",
    },
    {
        question: "¿Qué código de respuesta FTP indica que la acción no se ha terminado y debe obtenerse otra respuesta antes de enviar otro comando?",
        a: "1XX",
        b: "2XX",
        c: "3XX",
        d: "4XX",
        correct: "a",
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
const quizData = [
    {
        question: "¿Qué tipo de sistema es el DNS?",
        a: "Un sistema plano sin jerarquía",
        b: "Un sistema jerárquico con estructura de árbol",
        c: "Un sistema radial con estructura de estrella",
        d: "Un sistema lineal con estructura secuencial",
        correct: "b",
    },
    {
        question: "¿Qué característica tienen los nombres NetBIOS que usa Windows?",
        a: "Son un espacio de nombres jerárquico",
        b: "Son un espacio de nombres plano",
        c: "Son un espacio de nombres circular",
        d: "Son un espacio de nombres híbrido",
        correct: "b",
    },
    {
        question: "En un espacio de nombres planos, ¿qué característica deben tener los nombres?",
        a: "Pueden repetirse si están en diferentes dominios",
        b: "Deben ser absolutamente únicos",
        c: "Pueden tener diferentes niveles",
        d: "Deben estar en minúsculas",
        correct: "b",
    },
    {
        question: "En un sistema de nombres jerárquicos, ¿qué información adicional aporta el nombre de un host?",
        a: "Solo la identificación del host",
        b: "El sistema operativo que utiliza",
        c: "La pertenencia del host a determinada categoría",
        d: "La velocidad de conexión",
        correct: "c",
    },
    {
        question: "¿Cuál de estos NO es un uso habitual del DNS?",
        a: "Resolución de nombres (búsqueda directa)",
        b: "Autenticación de usuarios",
        c: "Resolución inversa de direcciones",
        d: "Resolución de servidores de correo",
        correct: "b",
    },
    {
        question: "¿Qué tipo de zona DNS posee permisos de lectura y escritura en el conjunto de registros que contiene?",
        a: "Zona secundaria",
        b: "Zona primaria",
        c: "Zona de rutas internas",
        d: "Zona de transferencia",
        correct: "b",
    },
    {
        question: "Una zona secundaria en DNS es:",
        a: "Una zona con permisos de escritura y lectura",
        b: "Una zona independiente de la primaria",
        c: "Una simple copia de una zona primaria con permisos solo de lectura",
        d: "Una zona que contiene solo registros MX",
        correct: "c",
    },
    {
        question: "¿Qué es una zona de rutas internas en DNS?",
        a: "Una zona que solo contiene registros para identificar el servidor DNS con autoridad",
        b: "Una zona que contiene todas las rutas de red internas",
        c: "Una zona que gestiona el tráfico de red interno",
        d: "Una zona que conecta redes privadas",
        correct: "a",
    },
    {
        question: "¿Qué es una transferencia de zona DNS (AXFR)?",
        a: "Un mecanismo para trasladar dominios entre proveedores",
        b: "Un mecanismo para replicar bases de datos DNS a través de un conjunto de servidores DNS",
        c: "Un sistema para verificar la integridad de los registros DNS",
        d: "Un protocolo para actualizar registros DNS automáticamente",
        correct: "b",
    },
    {
        question: "¿Para qué se utiliza un registro DNS de tipo A?",
        a: "Para traducir nombres de hosts a direcciones IPv4",
        b: "Para asociar un servidor de correo a un dominio",
        c: "Para crear alias de un dominio",
        d: "Para traducir direcciones IP a nombres de dominio",
        correct: "a",
    },
    {
        question: "¿Qué tipo de registro DNS se utiliza para IPv6?",
        a: "A",
        b: "AAAA",
        c: "CNAME",
        d: "MX",
        correct: "b",
    },
    {
        question: "¿Para qué se utiliza un registro CNAME?",
        a: "Para definir el servidor de nombres autoritativo",
        b: "Para traducir direcciones IPv4 a nombres",
        c: "Para crear alias para servidores de alojamiento",
        d: "Para indicar el servidor de correo de un dominio",
        correct: "c",
    },
    {
        question: "¿Qué significa NS en los registros DNS?",
        a: "Network Service",
        b: "Name Server (Servidor de nombres)",
        c: "New System",
        d: "Network System",
        correct: "b",
    },
    {
        question: "¿Qué tipo de registro DNS se utiliza para definir servidores de correo?",
        a: "A",
        b: "CNAME",
        c: "MX",
        d: "SOA",
        correct: "c",
    },
    {
        question: "El registro PTR en DNS se utiliza para:",
        a: "Traducir nombres de dominio en direcciones IP",
        b: "Traducir direcciones IP en nombres de dominio (registro inverso)",
        c: "Definir servidores de correo alternativos",
        d: "Crear alias para un dominio",
        correct: "b",
    },
    {
        question: "¿Qué registro DNS proporciona información sobre el servidor DNS primario de la zona?",
        a: "NS",
        b: "MX",
        c: "SOA",
        d: "A",
        correct: "c",
    },
    {
        question: "¿Qué consulta DNS devuelve toda la información de todos los tipos que exista?",
        a: "ALL",
        b: "ANY",
        c: "EVERY",
        d: "FULL",
        correct: "b",
    },
    {
        question: "¿Cuál es la principal diferencia entre un sistema de nombres plano y jerárquico?",
        a: "Los sistemas planos son más seguros",
        b: "Los sistemas jerárquicos solo funcionan en intranets",
        c: "Los sistemas planos no tienen relaciones entre nombres, mientras que los jerárquicos establecen una estructura",
        d: "Los sistemas jerárquicos solo admiten direcciones IPv4",
        correct: "c",
    },
    {
        question: "¿Qué se denomina Zona en un servidor DNS?",
        a: "El área geográfica que cubre el servidor",
        b: "La configuración de un dominio dentro del DNS con un conjunto de entradas llamadas Resource Records",
        c: "La velocidad de respuesta del servidor",
        d: "La cantidad de dominios que gestiona",
        correct: "b",
    },
    {
        question: "En DNS, ¿qué son los Resource Records (RR)?",
        a: "Los dispositivos físicos donde se almacena la información",
        b: "Los protocolos de comunicación entre servidores DNS",
        c: "Las entradas o registros que forman parte de una zona DNS",
        d: "Los mecanismos de seguridad del servidor DNS",
        correct: "c",
    },
    {
        question: "Al desplegar una aplicación web, ¿qué registro DNS sería más adecuado configurar para dirigir www.ejemplo.com a un servidor web en la IP 192.168.1.10?",
        a: "MX",
        b: "SOA",
        c: "A",
        d: "PTR",
        correct: "c",
    },
    {
        question: "Si quieres configurar un subdominio como 'app.ejemplo.com' que apunte al mismo servidor que 'www.ejemplo.com', ¿qué tipo de registro DNS sería más eficiente usar?",
        a: "A",
        b: "MX",
        c: "CNAME",
        d: "SOA",
        correct: "c",
    },
    {
        question: "¿Cuál es la principal ventaja de usar un sistema de nombres jerárquico como DNS?",
        a: "Requiere menos servidores para funcionar",
        b: "Es más rápido en las consultas",
        c: "Permite organizar y delegar la administración de dominios",
        d: "Consume menos recursos de red",
        correct: "c",
    },
    {
        question: "¿Por qué se utilizan las transferencias de zona entre servidores DNS?",
        a: "Para aumentar la seguridad de las consultas",
        b: "Para replicar la información y proporcionar redundancia",
        c: "Para reducir el tráfico de red",
        d: "Para cifrar la comunicación entre servidores",
        correct: "b",
    },
    {
        question: "¿Qué ocurre si un registro CNAME apunta a otro registro CNAME?",
        a: "Se crea un bucle infinito y el DNS falla",
        b: "Es una práctica recomendada para mejorar la resolución",
        c: "Está permitido pero puede añadir retrasos en la resolución",
        d: "Solo funciona en intranets locales",
        correct: "c",
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
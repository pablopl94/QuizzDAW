const quizData = [
    {
        question: "¿Cuál es la principal diferencia entre las amortizaciones y las provisiones?",
        a: "Las amortizaciones reducen los beneficios de cada ejercicio económico y las provisiones proceden de las reservas de la empresa.",
        b: "Las provisiones forman parte de la autofinanciación por enriquecimiento y las amortizaciones, de la autofinanciación por mantenimiento.",
        c: "Las amortizaciones son pérdidas de valor de una inversión y las provisiones de fondos pueden convertirse en pérdidas o no.",
        correct: "b",
    },
    {
        question: "Cuando se compra un elemento amortizable, ¿qué se anota como gasto en la cuenta de resultados?",
        a: "La amortización que corresponde a ese año.",
        b: "El valor total del elemento amortizable.",
        c: "Ninguna de las otras respuestas es correcta.",
        correct: "a",
    },
    {
        question: "El resultado de explotación se calcula como:",
        a: "La diferencia entre ingresos de explotación y gastos financieros.",
        b: "La diferencia entre ingresos y gastos de explotación.",
        c: "La diferencia entre ingresos financieros y gastos financieros.",
        correct: "b",
    },
    {
        question: "Si compras y consumes materias primas por valor de 850€, pagas 600€ al contado y el resto el próximo año, ¿qué anotarás como gasto en la cuenta de resultados?",
        a: "250€",
        b: "600€",
        c: "850€",
        correct: "c",
    },
    {
        question: "Si compras un elemento amortizable por 60.000€ y pagas 40.000€ al contado y el resto el próximo año, y sabiendo que se amortiza en 12 años, ¿qué anotarás como gasto en la cuenta de resultados?",
        a: "5.000€",
        b: "60.000€",
        c: "40.000€",
        correct: "a",
    },
    {
        question: "La fianza por alquiler que depositas cuando alquilas un local comercial:",
        a: "Es un gasto que se anotará en la cuenta de resultados.",
        b: "No es un gasto, y por tanto no se anotará en la cuenta de resultados.",
        c: "Unas veces se anotará y otras veces no, dependiendo de la cuantía.",
        correct: "b",
    },
    {
        question: "Si vendemos productos por valor de 1.200€ y nos dejan a deber 300€, ¿qué anotarás como ingreso en la cuenta de resultados?",
        a: "1.200€",
        b: "300€",
        c: "900€",
        correct: "a",
    },
    {
        question: "Cuando compras un elemento amortizable, ¿qué anotarás como salida en el plan de tesorería?",
        a: "La amortización que corresponde a ese año.",
        b: "El valor del elemento amortizable que pagas en ese momento.",
        c: "Las demás respuestas son falsas.",
        correct: "b",
    },
    {
        question: "Las aportaciones que hacen los socios (capital social):",
        a: "Son un ingreso que se anota en la cuenta de resultados.",
        b: "No son un ingreso y por tanto no se anotan en la cuenta de resultados.",
        c: "Unas veces se anotarán y otras veces no, dependiendo de la cuantía.",
        correct: "b",
    },
    {
        question: "Si el Fondo de Maniobra de una empresa es negativo, esta se encuentra:",
        a: "En una situación normal de equilibrio.",
        b: "En peligro de suspensión de pagos.",
        c: "En una situación de máxima estabilidad financiera.",
        correct: "b",
    },
    {
        question: "La responsabilidad limitada significa:",
        a: "Que los socios responden con todos sus bienes.",
        b: "Que los socios responden solo con su aportación a la sociedad.",
        c: "Que los límites a la responsabilidad de los socios los marcan los estatutos de la sociedad.",
        correct: "b",
    },
    {
        question: "De las siguientes formas jurídicas, señala cuál tiene responsabilidad patrimonial ilimitada:",
        a: "Empresario individual.",
        b: "Sociedad anónima.",
        c: "Sociedad limitada.",
        correct: "a",
    },
    {
        question: "Respecto a las participaciones de una sociedad limitada:",
        a: "Se pueden transmitir libremente.",
        b: "Se pueden transmitir a otros socios, pero no libremente a terceros.",
        c: "No se pueden transmitir bajo ninguna circunstancia.",
        correct: "b",
    },
    {
        question: "Las empresas individuales están sometidas a los siguientes impuestos:",
        a: "Únicamente al IVA e IRPF.",
        b: "IRPF, IVA e IAE.",
        c: "IS, IVA e IAE.",
        correct: "b",
    },
    {
        question: "El Impuesto de Sociedades recae sobre:",
        a: "Las comunidades de bienes y las sociedades.",
        b: "Las sociedades mercantiles.",
        c: "Las sociedades y las empresas individuales.",
        correct: "b",
    },
    {
        question: "Las sociedades civiles tienen personalidad jurídica:",
        a: "Sólo si sus pactos son públicos.",
        b: "Siempre, ya que son sociedades.",
        c: "Nunca. Son personas físicas.",
        correct: "a",
    },
    {
        question: "¿Qué es la Ventanilla Única Empresarial?",
        a: "Un sitio en el que el empresario paga sus impuestos.",
        b: "Un sitio o centro integrado de tramitación y asesoramiento al emprendedor.",
        c: "Un sitio en el que se depositan las cuentas anuales.",
        correct: "b",
    },
    {
        question: "La afiliación y alta de los trabajadores se hace en:",
        a: "El ayuntamiento.",
        b: "La Tesorería General de la Seguridad Social.",
        c: "Las oficinas de empleo.",
        correct: "b",
    },
    {
        question: "El préstamo que nos hace una entidad de crédito, ¿se considera un ingreso que debe anotarse en la cuenta de resultados?",
        a: "A veces.",
        b: "Sí.",
        c: "No.",
        correct: "c",
    },
    {
        question: "Compras y pagas mercaderías por valor de 120€, pero solo consumes por valor de 95€, ¿qué anotarás como salida en el plan de tesorería?",
        a: "95€",
        b: "120€",
        c: "25€",
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
    if (currentQuizData.d) {
        options[3].style.display = "block";
        options[3].innerText = currentQuizData.d;
    } else {
        options[3].style.display = "none";
    }
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
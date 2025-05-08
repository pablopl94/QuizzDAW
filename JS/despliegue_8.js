const quizData = [
    {
        question: "¿Cuál es el objetivo principal de las herramientas de generación de documentación?",
        a: "Enseñar a programar a nuevos usuarios",
        b: "Ayudar a los programadores (documentación API) o usuarios finales",
        c: "Traducir el código fuente a otros lenguajes",
        d: "Optimizar el rendimiento del código",
        correct: "b",
    },
    {
        question: "¿Qué herramienta se usa para generar documentación en Java?",
        a: "JavaDoc",
        b: "PHPDocumentor",
        c: "Doxygen",
        d: "JSDoc",
        correct: "a",
    },
    {
        question: "¿Cuál de estas herramientas se utiliza para documentar código PHP?",
        a: "PHPDoc",
        b: "PHPDocumentor",
        c: "PHPComment",
        d: "PHPInfo",
        correct: "b",
    },
    {
        question: "¿Qué tipo de comentarios se utilizan para documentar código en JavaDoc?",
        a: "// Comentarios",
        b: "/* Comentarios */",
        c: "/** Comentarios */",
        d: "# Comentarios",
        correct: "c",
    },
    {
        question: "¿Qué etiqueta permite identificar en una documentación el nombre del desarrollador?",
        a: "@developer",
        b: "@dev",
        c: "@author",
        d: "@desarrollador",
        correct: "c",
    },
    {
        question: "¿Qué etiqueta se utiliza para documentar los parámetros de un método?",
        a: "@param",
        b: "@parameter",
        c: "@arg",
        d: "@input",
        correct: "a",
    },
    {
        question: "¿Qué etiqueta se utiliza para indicar lo que devuelve un método?",
        a: "@devolver",
        b: "@output",
        c: "@response",
        d: "@return",
        correct: "d",
    },
    {
        question: "¿Qué etiqueta se utiliza para indicar que un método o clase es antigua y no se recomienda su uso?",
        a: "@old",
        b: "@obsolete",
        c: "@deprecated",
        d: "@noUse",
        correct: "c",
    },
    {
        question: "¿Qué es un sistema de control de versiones?",
        a: "Un sistema de copias de seguridad automáticas",
        b: "Un sistema que registra los cambios realizados en archivos a lo largo del tiempo",
        c: "Un sistema de organización del código por versiones",
        d: "Un sistema de actualización de software",
        correct: "b",
    },
    {
        question: "¿Cuáles son los tres tipos de sistemas de control de versiones?",
        a: "VCS, DVCS, JVCS",
        b: "Local, Remoto, Híbrido",
        c: "VCS (Locales), CVCS (Centralizados), DVCS (Distribuidos)",
        d: "GIT, SVN, Mercurial",
        correct: "c",
    },
    {
        question: "¿Cuál de los siguientes NO es una ventaja de un sistema de control de versiones?",
        a: "Permite regresar a versiones anteriores de archivos",
        b: "Permite saber quién modificó algo que causa problemas",
        c: "Permite recuperar archivos fácilmente",
        d: "Permite comprimir automáticamente el código",
        correct: "d",
    },
    {
        question: "¿Cuál de estos es un sistema de control de versiones distribuido?",
        a: "CVS",
        b: "Git",
        c: "Subversion",
        d: "Perforce",
        correct: "b",
    },
    {
        question: "¿Qué característica tienen los nombres NetBIOS que usa Windows?",
        a: "Son un espacio de nombres jerárquico",
        b: "Son un espacio de nombres plano",
        c: "Son un espacio de nombres distribuido",
        d: "Son un espacio de nombres centralizado",
        correct: "b",
    },
    {
        question: "¿Cuál es una desventaja de los sistemas de control de versiones centralizados?",
        a: "Ocupan mucho espacio en cada cliente",
        b: "Son complejos de configurar",
        c: "Tienen un punto único de fallo (el servidor central)",
        d: "No permiten trabajar en equipo",
        correct: "c",
    },
    {
        question: "En Git, ¿qué son las ramas o branches?",
        a: "Diferentes versiones del proyecto que evolucionan de forma independiente",
        b: "Diferentes desarrolladores trabajando en el proyecto",
        c: "Diferentes lenguajes de programación en el mismo proyecto",
        d: "Estructuras para organizar el código en carpetas",
        correct: "a",
    },
    {
        question: "¿Cuáles son los tres estados principales en los que se pueden encontrar los archivos en Git?",
        a: "Creado, modificado, eliminado",
        b: "Confirmado (committed), modificado (modified), preparado (staged)",
        c: "Local, remoto, compartido",
        d: "Fusionado, bifurcado, actualizado",
        correct: "b",
    },
    {
        question: "¿Cuáles son las tres secciones principales de un proyecto de Git?",
        a: "El directorio local, el directorio remoto y el directorio compartido",
        b: "La rama principal, las ramas secundarias y las ramas experimentales",
        c: "El directorio de Git, el directorio de trabajo y el área de preparación",
        d: "El área de desarrollo, el área de pruebas y el área de producción",
        correct: "c",
    },
    {
        question: "¿Cuál es el flujo de trabajo básico en Git?",
        a: "Modificar, confirmar, preparar",
        b: "Preparar, modificar, confirmar",
        c: "Confirmar, modificar, preparar",
        d: "Modificar, preparar, confirmar",
        correct: "d",
    },
    {
        question: "¿Qué comando se utiliza para ver el historial de un repositorio Git?",
        a: "git status",
        b: "git log",
        c: "git history",
        d: "git show",
        correct: "b",
    },
    {
        question: "¿Qué significa DVCS?",
        a: "Distributed Version Control System (Sistema de Control de Versiones Distribuido)",
        b: "Development Version Control System (Sistema de Control de Versiones de Desarrollo)",
        c: "Digital Version Control Software (Software de Control de Versiones Digital)",
        d: "Direct Version Control System (Sistema de Control de Versiones Directo)",
        correct: "a",
    },
    {
        question: "En un DVCS como Git, ¿qué ocurre cuando se clona un repositorio?",
        a: "Se copia solo la última versión de los archivos",
        b: "Se copia solo la rama principal",
        c: "Se replica completamente el repositorio con todo su historial",
        d: "Se copia solo la estructura de directorios",
        correct: "c",
    },
    {
        question: "¿Cuál NO es una característica de Git?",
        a: "Distribuido",
        b: "Seguridad frente a corrupción",
        c: "Gran rendimiento",
        d: "Necesita un servidor central para funcionar",
        correct: "d",
    },
    {
        question: "¿Qué significa cuando ocurre un 'conflicto' en un sistema de control de versiones?",
        a: "El servidor está caído",
        b: "Dos usuarios han modificado el mismo archivo y el sistema no puede fusionar automáticamente los cambios",
        c: "Un archivo está corrupto",
        d: "Se ha perdido la conexión con el repositorio",
        correct: "b",
    },
    {
        question: "¿Cuál de estas NO es una herramienta visual para trabajar con Git?",
        a: "GitKraken",
        b: "SourceTree",
        c: "GitHub Desktop",
        d: "GitSQL",
        correct: "d",
    },
    {
        question: "¿Qué significa 'ramificar' (branch) en un sistema de control de versiones?",
        a: "Crear una copia de seguridad del proyecto",
        b: "Bifurcar un módulo para desarrollarlo de forma independiente",
        c: "Fusionar diferentes versiones",
        d: "Etiquetar una versión específica",
        correct: "b",
    },
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
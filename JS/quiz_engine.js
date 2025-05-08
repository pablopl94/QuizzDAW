/**
 * Quiz Engine - Lógica común para todos los quizzes
 * Este archivo contiene la funcionalidad base que comparten todos los quizzes
 */

// Variables globales del quiz
let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;
let quizData = []; // Será llenado por el archivo específico

// Referencias DOM - ahora como variables (let) en lugar de constantes
let questionEl;
let options;
let resultEl;
let quizContainer;

/**
 * Actualiza las referencias a los elementos DOM
 * Esta función es crucial para mantener las referencias actualizadas después de manipular el DOM
 */
function updateDOMReferences() {
    questionEl = document.getElementById("question");
    options = document.querySelectorAll(".option");
    resultEl = document.getElementById("result");
    quizContainer = document.getElementById("quiz-container");
}

/**
 * Inicializa el quiz con los datos proporcionados
 * @param {Array} data - Datos del quiz (preguntas, opciones, respuestas)
 */
function initializeQuiz(data) {
    // Obtener referencias iniciales
    updateDOMReferences();
    
    // Guardar los datos y mezclarlos
    quizData = data.sort(() => Math.random() - 0.5);
    
    // Resetear contadores
    currentQuestionIndex = 0;
    score = 0;
    incorrect = 0;
    
    // Cargar la primera pregunta
    loadQuiz();
    
    // Configurar eventos de opciones con la funcionalidad de mostrar respuesta correcta
    setupOptionsEvents();
}

/**
 * Configura los eventos de clic para las opciones
 */
function setupOptionsEvents() {
    // Actualizar referencias para asegurarnos de tener las actuales
    updateDOMReferences();
    
    options.forEach(option => {
        // Eliminar eventos anteriores para evitar duplicados
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
    });
    
    // Obtener referencias actualizadas después de reemplazar los elementos
    updateDOMReferences();
    
    options.forEach(option => {
        option.addEventListener("click", function() {
            handleOptionClick(this);
        });
    });
}

/**
 * Maneja el clic en una opción
 * @param {Element} selectedOption - La opción seleccionada
 */
function handleOptionClick(selectedOption) {
    // Asegurar que tenemos las referencias más recientes
    updateDOMReferences();
    
    const answer = selectedOption.id;
    const correctAnswer = quizData[currentQuestionIndex].correct;
    
    if (answer === correctAnswer) {
        // Respuesta correcta
        selectedOption.classList.add("correct");
        score++;
        
        // Para respuestas correctas, tiempo establecido a 1.5 segundos
        setTimeout(() => {
            goToNextQuestion();
        }, 1500);
    } else {
        // Respuesta incorrecta
        selectedOption.classList.add("incorrect");
        incorrect++;
        
        // Mostrar cuál era la respuesta correcta
        const correctOption = document.getElementById(correctAnswer);
        if (correctOption) { // Verificamos que exista para evitar errores
            correctOption.classList.add("correct-answer");
        }
        
        // Para respuestas incorrectas, tiempo establecido a 1.5 segundos
        setTimeout(() => {
            goToNextQuestion();
        }, 1500);
    }
    
    // Deshabilitar todas las opciones con referencias actualizadas
    options.forEach(opt => {
        opt.disabled = true;
        opt.classList.add("option-disabled"); // Añadir clase para estilo visual
    });
}

/**
 * Función para ir a la siguiente pregunta
 */
function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
        
        // Actualizar contador de preguntas si existe la función
        if (typeof updateQuestionCounter === 'function') {
            updateQuestionCounter(currentQuestionIndex + 1, quizData.length);
        }
    } else {
        showResults();
    }
}

/**
 * Carga la pregunta actual en la interfaz
 */
function loadQuiz() {
    // Asegurarnos de tener referencias actualizadas
    updateDOMReferences();
    
    deselectOptions();
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    
    // Mostrar opciones, detectando si tienen estructura de letras o no
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

/**
 * Limpia las clases y estados de las opciones
 */
function deselectOptions() {
    // Asegurarnos de tener referencias actualizadas
    updateDOMReferences();
    
    options.forEach(option => {
        option.classList.remove("correct", "incorrect", "correct-answer", "option-disabled");
        option.disabled = false;
    });
}

/**
 * Muestra los resultados del quiz
 */
function showResults() {
    // Asegurarnos de tener referencias actualizadas
    updateDOMReferences();
    
    quizContainer.innerHTML = `
        <div class="result-box">
            <h2>Resultados</h2>
            <p>Respuestas correctas: <strong>${score}</strong></p>
            <p>Respuestas incorrectas: <strong>${incorrect}</strong></p>
            <button onclick="goToMenu()" class="btn-return">Volver al Menú</button>
        </div>
    `;
} 
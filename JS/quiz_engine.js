/**
 * Quiz Engine - Lógica común para todos los quizzes
 * Este archivo contiene la funcionalidad base que comparten todos los quizzes
 */

// Variables globales del quiz
let currentQuestionIndex = 0;
let score = 0;
let incorrect = 0;
let quizData = []; // Será llenado por el archivo específico

// Referencias DOM
const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

/**
 * Inicializa el quiz con los datos proporcionados
 * @param {Array} data - Datos del quiz (preguntas, opciones, respuestas)
 */
function initializeQuiz(data) {
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
    options.forEach(option => {
        // Eliminar eventos anteriores para evitar duplicados
        const newOption = option.cloneNode(true);
        option.parentNode.replaceChild(newOption, option);
    });
    
    // Obtener referencias actualizadas
    const updatedOptions = document.querySelectorAll(".option");
    
    updatedOptions.forEach(option => {
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
    const answer = selectedOption.id;
    const correctAnswer = quizData[currentQuestionIndex].correct;
    
    if (answer === correctAnswer) {
        // Respuesta correcta
        selectedOption.classList.add("correct");
        score++;
    } else {
        // Respuesta incorrecta
        selectedOption.classList.add("incorrect");
        incorrect++;
        
        // Mostrar cuál era la respuesta correcta
        const correctOption = document.getElementById(correctAnswer);
        correctOption.classList.add("correct-answer");
    }
    
    // Deshabilitar todas las opciones
    options.forEach(opt => opt.disabled = true);
    
    // Esperar y luego avanzar a la siguiente pregunta
    setTimeout(() => {
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
    }, 1500);
}

/**
 * Carga la pregunta actual en la interfaz
 */
function loadQuiz() {
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
    options.forEach(option => {
        option.classList.remove("correct", "incorrect", "correct-answer");
        option.disabled = false;
    });
}

/**
 * Muestra los resultados del quiz
 */
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
/**
 * Inicializa el comportamiento común de todos los quizzes
 * Esta función se llama después de cargar el script específico del quiz
 */
function initializeQuizBehavior() {
    // Obtener referencias a elementos del DOM
    const options = document.querySelectorAll(".option");
    
    // Reemplazar los event listeners originales con los nuevos
    options.forEach(option => {
        // Eliminar eventos anteriores (si es necesario)
        option.replaceWith(option.cloneNode(true));
    });
    
    // Obtener las referencias actualizadas
    const updatedOptions = document.querySelectorAll(".option");
    
    // Añadir los nuevos event listeners que mostrarán la respuesta correcta
    updatedOptions.forEach(option => {
        option.addEventListener("click", () => {
            const answer = option.id;
            const correctAnswer = getCorrectAnswer();
            
            if (answer === correctAnswer) {
                // Si la respuesta es correcta
                option.classList.add("correct");
                score++;
            } else {
                // Si la respuesta es incorrecta
                option.classList.add("incorrect");
                incorrect++;
                
                // Marcar también la respuesta correcta
                const correctOption = document.getElementById(correctAnswer);
                if (correctOption) {
                    correctOption.classList.add("correct-answer");
                }
            }

            // Deshabilitar todas las opciones
            updatedOptions.forEach(opt => opt.disabled = true);

            // Esperar antes de cargar la siguiente pregunta
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < getQuestionsData().length) {
                    loadQuiz();
                } else {
                    showResults();
                }
            }, 1500); // Aumentado a 1.5 segundos para dar tiempo a ver la respuesta correcta
        });
    });
}

/**
 * Obtiene la respuesta correcta para la pregunta actual
 */
function getCorrectAnswer() {
    // Determinar la fuente de datos según el quiz cargado
    if (typeof quizData !== 'undefined' && quizData.length > 0) {
        return quizData[currentQuestionIndex].correct;
    } else if (typeof shuffledQuizData !== 'undefined' && shuffledQuizData.length > 0) {
        return shuffledQuizData[currentQuestionIndex].correct;
    } else if (typeof empresaTest2 !== 'undefined' && empresaTest2.preguntas) {
        return empresaTest2.preguntas[currentQuestionIndex].correct;
    }
    
    // Si no se encuentra ninguna fuente de datos conocida
    console.error("No se pudo determinar la respuesta correcta");
    return "";
}

/**
 * Obtiene el array de preguntas según el quiz cargado
 */
function getQuestionsData() {
    if (typeof quizData !== 'undefined' && quizData.length > 0) {
        return quizData;
    } else if (typeof shuffledQuizData !== 'undefined' && shuffledQuizData.length > 0) {
        return shuffledQuizData;
    } else if (typeof empresaTest2 !== 'undefined' && empresaTest2.preguntas) {
        return empresaTest2.preguntas;
    }
    
    // Si no se encuentra ninguna fuente de datos conocida
    console.error("No se pudieron encontrar las preguntas");
    return [];
} 
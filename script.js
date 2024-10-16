const quizData = [
    {
        question: "¿Qué significa UX?",
        a: "User Expectation",
        b: "Universal Experience",
        c: "User eXperience",
        d: "Unified eXperience",
        correct: "c"
    },
    {
        question: "¿Quién es conocido como el 'padre del diseño UX'?",
        a: "Jakob Nielsen",
        b: "Jon Yablonski",
        c: "Don Norman",
        d: "Steve Krug",
        correct: "c"
    },
    {
        question: "¿Cuál es una de las leyes de UX de Jon Yablonski?",
        a: "Ley de proximidad",
        b: "Ley de gravedad",
        c: "Ley de la relatividad",
        d: "Ley de acción y reacción",
        correct: "a"
    },
    {
        question: "¿Cuál de los siguientes es un factor clave para el diseño UX?",
        a: "Velocidad de carga",
        b: "Precio del producto",
        c: "Diseño exclusivo",
        d: "Cantidad de colores usados",
        correct: "a"
    },
    {
        question: "¿Qué es la 'Puerta de Norman'?",
        a: "Una puerta de fácil acceso",
        b: "Una puerta que indica lo contrario a lo que se debe hacer",
        c: "Una puerta sin manija",
        d: "Una puerta con llave electrónica",
        correct: "b"
    },
    {
        question: "¿Qué mide la usabilidad?",
        a: "La apariencia de la interfaz",
        b: "La facilidad de uso de una herramienta",
        c: "El costo de desarrollo",
        d: "La duración de la carga",
        correct: "b"
    },
    {
        question: "¿Qué porcentaje de problemas de usabilidad está relacionado con el mal diseño de la Arquitectura de la Información?",
        a: "25%",
        b: "50%",
        c: "75%",
        d: "100%",
        correct: "c"
    },
    {
        question: "¿Cuál es uno de los principios de usabilidad de Jakob Nielsen?",
        a: "Flexibilidad y eficiencia de uso",
        b: "Diseño minimalista",
        c: "Uso de colores brillantes",
        d: "Focalización en el hardware",
        correct: "a"
    },
    {
        question: "¿Qué se debe hacer cuando ocurre un error en la interfaz?",
        a: "Mostrar una pantalla en blanco",
        b: "Proporcionar mensajes de error claros y constructivos",
        c: "Reiniciar la página automáticamente",
        d: "Ignorar el error",
        correct: "b"
    },
    {
        question: "¿Cuál es una característica de una web accesible?",
        a: "Solo funciona en dispositivos modernos",
        b: "Utiliza exclusivamente texto para su contenido",
        c: "Es utilizable por el mayor número de personas posible",
        d: "No necesita ser compatible con navegadores antiguos",
        correct: "c"
    },
    {
        question: "Según WCAG, ¿cuál de los siguientes es un principio de accesibilidad?",
        a: "Estético",
        b: "Robustez",
        c: "Exclusivo",
        d: "Costoso",
        correct: "b"
    },
    {
        question: "¿Qué problema de accesibilidad se asocia con la falta de texto alternativo en imágenes?",
        a: "Discapacidad auditiva",
        b: "Discapacidad visual",
        c: "Discapacidad motora",
        d: "Discapacidad cognitiva",
        correct: "b"
    },
    {
        question: "¿Cuál de las siguientes afirmaciones sobre accesibilidad es falsa?",
        a: "La accesibilidad es solo para personas con discapacidad",
        b: "La accesibilidad mejora la experiencia de usuario",
        c: "Las páginas accesibles ayudan al posicionamiento",
        d: "La accesibilidad puede beneficiar a todos los usuarios",
        correct: "a"
    },
    {
        question: "¿Qué técnica ayuda a establecer la ubicación del usuario en un sitio web?",
        a: "Barra de búsqueda",
        b: "Breadcrumbs",
        c: "Menú lateral",
        d: "Anuncios emergentes",
        correct: "b"
    },
    {
        question: "¿Cuál es un ejemplo de diseño estético y minimalista?",
        a: "Usar tantos colores como sea posible",
        b: "Incluir solo la información esencial",
        c: "Utilizar imágenes complejas",
        d: "Sobrecargar de elementos visuales",
        correct: "b"
    },
    {
        question: "¿Qué es un affordance?",
        a: "La capacidad de interactuar intuitivamente con un componente",
        b: "Una técnica para reducir errores",
        c: "Un método de diseño centrado en los costos",
        d: "Un estándar de programación",
        correct: "a"
    },
    {
        question: "¿Qué significa que una web sea 'operable' según WCAG?",
        a: "Que el contenido esté visible",
        b: "Que se pueda interactuar por teclado o ratón",
        c: "Que tenga buenos gráficos",
        d: "Que sea compatible con todos los idiomas",
        correct: "b"
    },
    {
        question: "¿Qué atributo de usabilidad es subjetivo?",
        a: "Tiempo empleado para completar la tarea",
        b: "Satisfacción del usuario",
        c: "Número de errores cometidos",
        d: "Funcionalidades disponibles",
        correct: "b"
    },
    {
        question: "¿Cuál es el propósito de la accesibilidad web?",
        a: "Reducir los costos de desarrollo",
        b: "Hacer la web utilizable para todos, independientemente de sus capacidades",
        c: "Crear versiones diferentes según el dispositivo",
        d: "Aumentar la complejidad de la interfaz",
        correct: "b"
    },
    {
        question: "¿Qué significa 'consistencia y estándares' en usabilidad?",
        a: "Mantener elementos visuales iguales en todas las plataformas",
        b: "Usar colores brillantes en todas las páginas",
        c: "Cambiar el diseño en cada pantalla",
        d: "Eliminar la posibilidad de personalización",
        correct: "a"
    },
    {
        question: "¿Qué ayuda a los usuarios con discapacidad cognitiva en una web?",
        a: "Uso de imágenes que complementen el texto",
        b: "Evitar subtítulos en videos",
        c: "Incluir contenido solo en formato de texto",
        d: "Mantener el diseño sin cambios",
        correct: "a"
    },
    {
        question: "¿Qué debe proporcionar un sistema según el principio de 'control y libertad del usuario'?",
        a: "Un botón para desactivar la página",
        b: "Una 'salida de emergencia' en caso de error",
        c: "Un menú oculto",
        d: "Acceso limitado a opciones",
        correct: "b"
    },
    {
        question: "¿Qué se recomienda usar para describir imágenes en sitios web accesibles?",
        a: "Hover",
        b: "Atributo alt",
        c: "Texto de color",
        d: "Videos explicativos",
        correct: "b"
    },
    {
        question: "¿Qué es el diseño centrado en el usuario?",
        a: "Diseñar sin tener en cuenta al usuario",
        b: "Diseñar por y para el usuario",
        c: "Diseñar enfocado en el producto",
        d: "Diseñar solo para expertos",
        correct: "b"
    },
    {
        question: "¿Qué significa 'robusto' en términos de accesibilidad?",
        a: "Que la interfaz sea estéticamente atractiva",
        b: "Que sea interpretado por una variedad de aplicaciones de usuario",
        c: "Que el diseño sea complejo",
        d: "Que use los últimos estándares de programación",
        correct: "b"
    },
    {
        question: "¿Cuál es un ejemplo de ayuda reactiva en usabilidad?",
        a: "Tutoriales interactivos",
        b: "FAQs",
        c: "Superposiciones instructivas",
        d: "Diagramas de flujo",
        correct: "b"
    },
    {
        question: "¿Qué es una recomendación para mejorar la accesibilidad en formularios?",
        a: "No validar datos de entrada",
        b: "Validar los datos en el cliente y servidor",
        c: "Utilizar siempre campos ocultos",
        d: "No dar información al usuario",
        correct: "b"
    },
    {
        question: "¿Qué significa que el sistema debe tener una 'alta compatibilidad estímulo-respuesta'?",
        a: "Mostrar todos los errores al final de la página",
        b: "Colocar los mensajes de error cerca del campo correspondiente",
        c: "No informar sobre errores",
        d: "Mostrar respuestas tardías",
        correct: "b"
    },
    {
        question: "¿Qué aspecto se debe evitar en sitios accesibles?",
        a: "Altos contrastes",
        b: "Uso de parpadeos con altas frecuencias",
        c: "Imágenes descriptivas",
        d: "Formularios cortos",
        correct: "b"
    },
    {
        question: "¿Cuál es un beneficio de hacer la web accesible?",
        a: "Mejorar solo para usuarios con discapacidad",
        b: "Mejorar la experiencia general para todos los usuarios",
        c: "Solo mejorar el SEO",
        d: "Reducir la cantidad de usuarios",
        correct: "b"
    }
];

let currentQuestion = 0;
let score = 0;
let incorrect = 0;

const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultEl = document.getElementById('result');

loadQuiz();

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    options[0].innerText = currentQuizData.a;
    options[1].innerText = currentQuizData.b;
    options[2].innerText = currentQuizData.c;
    options[3].innerText = currentQuizData.d;
}

function deselectOptions() {
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
        option.disabled = false;
    });
}

options.forEach(option => {
    option.addEventListener('click', () => {
        const answer = option.id;
        if (answer === quizData[currentQuestion].correct) {
            option.classList.add('correct');
            score++;
        } else {
            option.classList.add('incorrect');
            incorrect++;
        }

        options.forEach(opt => opt.disabled = true);

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuiz();
            } else {
                showResults();
            }
        }, 1000);
    });
});

function showResults() {
    resultEl.innerHTML = `<h2>Respuestas correctas: ${score}<br>Respuestas incorrectas: ${incorrect}</h2>`;
}

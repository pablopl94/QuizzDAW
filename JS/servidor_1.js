const quizData = [
    {
        question: "Qué anotación es necesaria para que el controlador inyecte a partir de un tipo de interface, la clase que implementan ese interface de acceso a datos",
        a: "@Controller",
        b: "@Autowired",
        c: "@Repository",
        d: "@Component",
        correct: "b",
    },
    {
        question: "En qué lugar del proyecto configuramos los enlaces a la base de datos",
        a: "en un fichero anotado con @Configuration",
        b: "En la carpeta templates",
        c: "En el controlador",
        d: "en el fichero application.properties",
        correct: "d",
    },
    {
        question: "Cuando los datos vienen de un formulario lo normal es que la ruta del método venga anotada con",
        a: "@Controller",
        b: "@GetMapping",
        c: "@PostMapping",
        d: "@RestController",
        correct: "c",
    },
    {
        question: "Qué motor de Persistencia usa Spring Data Jpa?",
        a: "JDBC",
        b: "Ibatis",
        c: "EclipseLink",
        d: "Hibernate",
        correct: "d",
    },
    {
        question: "Qué anotación se usa para las clases que implementan los interfaces del Dao",
        a: "@Repository",
        b: "@GetMapping",
        c: "@RestController",
        d: "@Controller",
        correct: "a",
    },
    {
        question: "De qué clase se hereda para obtener los métodos de persistencia en los repositorios",
        a: "Repository",
        b: "CrudRepository",
        c: "SortingRepository",
        d: "PagingRepository",
        correct: "b",
    },
    {
        question: "Si tengo este atributo en Thymeleaf <tr th:each = 'cliente : ${clientes}'>, qué expresión es correcta para el atributo de cliente categoria",
        a: "${cliente.categoria}",
        b: "${item.categoria}",
        c: "*{cliente.categoria}",
        d: "${categoria}",
        correct: "a",
    },
    {
        question: "Para trabajar con JPA la clase la debemos anotar con",
        a: "@Repository",
        b: "@Id",
        c: "@Table",
        d: "@Entity",
        correct: "d",
    },
    {
        question: "La arquitectura sobre la que se construyen las aplicaciones Web se denomina",
        a: "Ninguna de las anteriores",
        b: "Modelo, Vista, Controlador",
        c: "Modelo, Dao, Controlador",
        d: "Modelo, Versión, Componentes",
        correct: "b",
    },
    {
        question: "Para cerrar una sesión se usa el método de HttpSession",
        a: "invalidate()",
        b: "close()",
        c: "removeAttribute()",
        d: "flush()",
        correct: "a",
    },
    {
        question: "Qué anotación en Spring MVC permite obtener un parámetro de la URL?",
        a: "@PathVariable",
        b: "@RequestParam",
        c: "@QueryParam",
        d: "@UrlParam",
        correct: "a",
    },
    {
        question: "Cuál de los siguientes archivos es fundamental para configurar las dependencias de un proyecto Spring Boot?",
        a: "pom.xml",
        b: "spring.properties",
        c: "dependencies.xml",
        d: "persistence.xml",
        correct: "a",
    },
    {
        question: "Cuál es el puerto predeterminado de un servidor Spring Boot al iniciar?",
        a: "3000",
        b: "8085",
        c: "9000",
        d: "8080",
        correct: "d",
    },
    {
        question: "Qué anotación se utiliza para especificar el identificador principal de una entidad en JPA?",
        a: "@Column",
        b: "@PrimaryKey",
        c: "@GeneratedValue",
        d: "@Id",
        correct: "d",
    },
    {
        question: "Cuál es la anotación que se usa para definir una consulta personalizada en Spring Data JPA?",
        a: "@Query",
        b: "@CustomQuery",
        c: "@SQL",
        d: "@NativeQuery",
        correct: "a",
    },
    {
        question: "Cuantos atributos de instancia se pueden asignar a la anotación @Id en una entidad?",
        a: "Más de uno",
        b: "Uno",
        c: "Esta anotación no existe",
        d: "Ninguno",
        correct: "b",
    },
    {
        question: "Cómo se puede definir una búsqueda por propiedades de entidad en un repositorio de Spring Data JPA?",
        a: "Usando el método 'findBy' seguido del nombre de la propiedad (por ejemplo, 'findByNombre')",
        b: "Implementando el método manualmente",
        c: "Usando @EntityManager y realizando la búsqueda",
        d: "Con @Query, haciendo la select y poniendo un método que lo sustente.",
        correct: "a",
    },
    {
        question: "Cuál es la expresión correcta en Thymeleaf para mostrar una variable de contexto en una plantilla?",
        a: "{variable}",
        b: "${variable}",
        c: "#{variable}",
        d: "*{variable}",
        correct: "b",
    },
    {
        question: "Qué opción describe mejor el uso de 'th:each' en Thymeleaf?",
        a: "Para mostrar el valor de una variable",
        b: "Para definir condiciones",
        c: "Para iterar sobre una lista o colección",
        d: "Para insertar una plantilla dentro de otra",
        correct: "c",
    },
    {
        question: "Las clases que implementan un Dao de acceso a datos y que se ponen en contacto con un Repositorio de Datos, estén donde estén esos datos de anota con?",
        a: "@Repository",
        b: "@Configuration",
        c: "@RequestMapping",
        d: "@Controller",
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

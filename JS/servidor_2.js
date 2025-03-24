const quizData = [
    {
        question: "Cuál es el propósito de Spring Security en una aplicación web",
        a: "Agregar estilos CSS a las páginas web",
        b: "Facilitar la conexión con bases de datos",
        c: "Gestionar la seguridad, autenticación y autorización",
        d: "Mejorar el rendimiento de la aplicación",
        correct: "c"
    },
    {
        question: "Cómo se protege una URL en Spring Security 3 para que solo los usuarios autenticados puedan acceder",
        a: "Usando “@Autowired SecurityManager” en el “Controller”",
        b: "Agregando “@EnableSecurity” en la clase principal de Spring Boot",
        c: "Configurando “httpSecurity.authorizeHttpRequests().requestMatchers(“/admin”).authenticated()”",
        d: "Especificando “spring.security.protected.urls=/admin” en “application.properties”",
        correct: "c"
    },
    {
        question: "Cómo se deshabilita la autenticación en una ruta específica en Spring Security 3",
        a: "“httpSecurity.authorizeHttpRequests().requestMatchers(“/public”).permitAll();”",
        b: "“httpSecurity.disableSecurity(“/public”);”",
        c: "“@Unsecured(“/public”)” en el “Controller”",
        d: "Agregando “spring.security.permitAll=/public” en “application.properties”",
        correct: "a"
    },
    {
        question: "Cómo se configura un formulario de inicio de sesión en Spring Security con Thymeleaf",
        a: "“<form sec:login='/login'>”",
        b: "“<form action='/authenticate' sec:method=“post”>”",
        c: "“<form th:action=“@{/login}” method=“post”>”",
        d: "“<form th:href=“@{/auth}” method=“post”>”",
        correct: "c"
    },
    {
        question: "¿Cómo se define una página de login personalizada en Spring Security 3?",
        a: "“httpSecurity.formLogin().loginPage(“/my-login”)”",
        b: "“httpSecurity.customLogin(“/my-login”)”",
        c: "“spring.security.login.custom=/my-login” en “application.properties”",
        d: "“@LoginPage(“/my-login”)” en la clase de seguridad",
        correct: "a"
    },
    {
        question: "¿Qué pasa si no se define una configuración de seguridad en Spring Boot 3 Security?",
        a: "Spring Boot bloquea todas las rutas y requiere autenticación con un usuario generado",
        b: "No se aplica ninguna seguridad y todas las rutas son públicas",
        c: "Se lanza una excepción de seguridad al iniciar la aplicación",
        d: "Spring Boot redirige todas las peticiones a “/error”",
        correct: "a"
    },
    {
        question: "¿Cuál es la forma correcta de deshabilitar la seguridad CSRF en Spring Boot 3 Security?",
        a: "“spring.security.csrf.disable=true” en “application.properties”",
        b: "“csrf().disable()” en la configuración de seguridad",
        c: "“@DisableCSRF” en la clase de configuración",
        d: "“EnableCSRF” en el controlador",
        correct: "b"
    },
    {
        question: "¿Cómo se protege una plantilla Thymeleaf con Spring Security para que solo usuarios autenticados puedan verla?",
        a: "Usando “sec:authorize=“isAuthenticated()”” en el HTML",
        b: "Usando “@EnableThymeleafSecurity” en la clase de configuración",
        c: "Con “@Secured(“ROLE_USER”)” en el “Controller”",
        d: "Definiendo la seguridad en “application.properties”",
        correct: "a"
    },
    {
        question: "¿Cuál es el propósito de “@Bean PasswordEncoder passwordEncoder()” en una configuración de seguridad?",
        a: "Permite el uso de contraseñas en texto plano",
        b: "Evita que se almacenen contraseñas en la base de datos",
        c: "Define un codificador para las contraseñas de los usuarios",
        d: "Habilita la autenticación basada en JWT",
        correct: "c"
    },
    {
        question: "¿Cómo se redirige un usuario autenticado a una página específica después del login en Spring Security 3?",
        a: "Especificando “spring.security.success.url=/dashboard” en “application.properties”",
        b: "Usando “@EnableRedirect” en la configuración de seguridad",
        c: "Configurando “DefaultSuccessHandler” en la seguridad",
        d: "Usando “httpSecurity.formLogin().defaultSuccessUrl(“/dashboard”)”",
        correct: "d"
    },
    {
        question: "¿Cuál de las siguientes dependencias es obligatoria para crear una API REST en Spring Boot 3?",
        a: "“spring-boot-starter-web”",
        b: "“spring-boot-starter-data-jpa”",
        c: "“spring-boot-starter-mail”",
        d: "“spring-boot-starter-thymeleaf”",
        correct: "a"
    },
    {
        question: "¿Qué anotación se usa para definir un controlador REST en Spring Boot?",
        a: "@RestController",
        b: "RestfulService",
        c: "@Service",
        d: "@Controller",
        correct: "a"
    },
    {
        question: "¿Cómo se define un método que recibe un parámetro en la URL?",
        a: "“@GetMapping(“/users?id={id}”)” y “@RequestParam Long id”",
        b: "“@GetMapping(“/users”)” y “@QueryParam Long id”",
        c: "“@GetMapping(“/users/{id}”)” y “@PathVariable Long id”",
        d: "“@GetMapping(“/users/{id}”)” y “@RequestBody Long id”",
        correct: "c"
    },
    {
        question: "¿Qué hace la anotación “@RequestBody” en un controlador REST?",
        a: "Sirve para manejar parámetros de consulta (“query parameters”)",
        b: "Extrae datos del cuerpo de la solicitud y los convierte en un objeto Java",
        c: "Define el tipo de contenido de la respuesta",
        d: "Asigna valores de la URL a los parámetros del método",
        correct: "b"
    },
    {
        question: "¿Cuál de las siguientes respuestas HTTP indica que una solicitud “POST” se procesó correctamente y se creó un nuevo recurso?",
        a: "“201 Created”",
        b: "“204 No Content”",
        c: "“200 OK”",
        d: "“400 Bad Request”",
        correct: "a"
    },
    {
        question: "¿Qué hace “ResponseEntity” en Spring Boot?",
        a: "Convierte automáticamente objetos Java en JSON",
        b: "Se usa solo para devolver errores",
        c: "Define los encabezados de una solicitud",
        d: "Envuelve una respuesta HTTP personalizada con cuerpo, estado y cabeceras.",
        correct: "d"
    },
    {
        question: "¿Cómo se habilita CORS en un controlador REST en Spring Boot 3?",
        a: "@EnableCORS",
        b: "@CrossOrigin",
        c: "@RestCORS",
        d: "@CORSAllowed",
        correct: "b"
    },
    {
        question: "¿Cómo se convierte un objeto Java en JSON en Spring Boot 3?",
        a: "Con “@JsonConvert” en la clase",
        b: "Con “ObjectMapper.toJson()”",
        c: "Spring Boot lo hace automáticamente con Jackson",
        d: "Usando “@SerializeToJson”",
        correct: "c"
    },
    {
        question: "¿Cuál de las siguientes herramientas se usa comúnmente para documentar una API REST en Spring Boot 3?",
        a: "Swagger / OpenAPI",
        b: "JDBC API",
        c: "Thymeleaf",
        d: "GraphQL",
        correct: "a"
    },
    {
        question: "¿Qué anotación se usa para indicar que un controlador devuelve datos en formato JSON por defecto?",
        a: "@ResponseBody",
        b: "@Controller",
        c: "@JsonResponse",
        d: "@RestController",
        correct: "d"
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

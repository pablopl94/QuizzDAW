const quizData = [
    {
        question: "¿Qué directiva se utiliza para aplicar estilos en línea dinámicamente?",
        a: "ngStyle",
        b: "ngClass",
        c: "ngFor",
        d: "ngIf",
        correct: "a",
    },
    {
        question: "¿Qué directiva permite realizar bucles desde Angular 17?",
        a: "@for",
        b: "ngFor",
        c: "ngIf",
        d: "ngSwitch",
        correct: "a",
    },
    {
        question: "¿Qué diferencia existe entre $index y $count en un bloque @for?",
        a: "$index representa la posición actual, mientras $count es el número total de elementos",
        b: "Ambos representan la cantidad total de elementos",
        c: "$count es solo para atributos",
        d: "$index y $count no tienen relación",
        correct: "a",
    },
    {
        question: "¿Qué es la inyección de dependencias en Angular?",
        a: "Un patrón que permite a las clases recibir sus dependencias de fuentes externas",
        b: "Un sistema de diseño de componentes",
        c: "Un método para crear directivas",
        d: "Una forma de vincular datos",
        correct: "a",
    },
    {
        question: "¿Qué decorador se utiliza en Angular para definir un servicio como inyectable?",
        a: "Permitir el manejo de formularios en Angular, incluyendo Two Way Data Binding",
        b: "Definir servicios",
        c: "Crear componentes",
        d: "Conectar APIs externas",
        correct: "a",
    },
    {
        question: "¿Para qué se usa ngModel en un formulario?",
        a: "Enlazar datos bidireccionales entre el modelo y la vista",
        b: "Crear nuevos campos",
        c: "Ejecutar validaciones",
        d: "Estilizar el formulario",
        correct: "a",
    },
    {
        question: "¿Cuál es la ventaja de los formularios de tipo model en Angular?",
        a: "Permiten una mayor personalización y validaciones complejas en el componente",
        b: "Son más fáciles de configurar",
        c: "No requieren validación",
        d: "Funcionan sin ReactiveFormsModule",
        correct: "a",
    },
    {
        question: "¿Qué clase en Angular se usa para definir un grupo de controles en un formulario reactivo?",
        a: "FormGroup",
        b: "FormControl",
        c: "Validators",
        d: "TemplateGroup",
        correct: "a",
    },
    {
        question: "¿Qué módulo se utiliza para gestionar rutas en Angular?",
        a: "RouterModule",
        b: "FormsModule",
        c: "HttpClientModule",
        d: "BrowserModule",
        correct: "a",
    },
    {
        question: "¿Qué directiva se usa para renderizar componentes dinámicos basados en rutas?",
        a: "router-outlet",
        b: "ngIf",
        c: "@for",
        d: "ngFor",
        correct: "a",
    },
    {
        question: "¿Qué directiva se utiliza para enlazar rutas directamente desde una plantilla HTML?",
        a: "routerLink",
        b: "router-outlet",
        c: "ngLink",
        d: "routerActive",
        correct: "a",
    },
    {
        question: "¿Qué permite la directiva routerLinkActive?",
        a: "Aplicar estilos CSS al enlace activo",
        b: "Definir rutas hijas",
        c: "Redirigir automáticamente",
        d: "Deshabilitar rutas",
        correct: "a"
    },
    {
        question: "¿Qué clase se inyecta para acceder a parámetros dinámicos en una ruta activa?",
        a: "ActivatedRoute",
        b: "RouteSnapshot",
        c: "Router",
        d: "CanActivate",
        correct: "a"
    },
    {
        question: "¿Qué guard se usa para verificar si un usuario puede acceder a una ruta?",
        a: "CanActivate",
        b: "CanDeactivate",
        c: "CanActivateChild",
        d: "CanLoad",
        correct: "a"
    },
    {
        question: "¿Qué finalidad tiene el servicio?",
        a: "Conectar a los componentes entre sí y pasarles los datos conectándose a la API externas.",
        b: "Conectar componentes entre sí.",
        c: "Conectarse con las API externas para poder recibir los datos que luego le pasaremos a los demás componentes.",
        d: "Sirve para almacenar nuestros datos de una aplicación para poder trabajar con ellos.",
        correct: "a"
    },
    {
        question: "¿Qué patrón sigue Angular para gestionar instancias únicas de servicios?",
        a: "Singleton",
        b: "MVC",
        c: "Factory",
        d: "Observer",
        correct: "a"
    },
    {
        question: "¿Qué módulo permite realizar peticiones HTTP en Angular?",
        a: "HttpClientModule",
        b: "RouterModule",
        c: "FormsModule",
        d: "ReactiveFormsModule",
        correct: "a"
    },
    {
        question: "¿Qué tipo de objeto retorna una función que realiza una petición HTTP con Angular?",
        a: "Observable",
        b: "Promesa",
        c: "Callback",
        d: "Función sincrónica",
        correct: "a"
    },
    {
        question: "¿Qué método transforma un observable en una promesa en Angular?",
        a: "lastValueFrom",
        b: "transformObservable",
        c: "promiseFrom",
        d: "observableToPromise",
        correct: "a"
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
} 
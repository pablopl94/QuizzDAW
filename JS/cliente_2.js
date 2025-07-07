/**
 * Datos del quiz de Programación en Entorno Cliente - 2º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "¿Qué directiva se utiliza para aplicar estilos en línea dinámicamente?",
        a: "ngClass",
        b: "ngStyle",
        c: "ngFor",
        d: "ngIf",
        correct: "b",
    },
    {
        question: "¿Qué directiva permite realizar bucles desde Angular 17?",
        a: "ngIf",
        b: "ngFor",
        c: "@for",
        d: "ngSwitch",
        correct: "c",
    },
    {
        question: "¿Qué diferencia existe entre $index y $count en un bloque @for?",
        a: "Ambos representan la cantidad total de elementos",
        b: "$count es solo para atributos",
        c: "$index y $count no tienen relación",
        d: "$index representa la posición actual, mientras $count es el número total de elementos",
        correct: "d",
    },
    {
        question: "¿Qué es la inyección de dependencias en Angular?",
        a: "Una forma de vincular datos",
        b: "Un sistema de diseño de componentes",
        c: "Un patrón que permite a las clases recibir sus dependencias de fuentes externas",
        d: "Un método para crear directivas",
        correct: "c",
    },
    {
        question: "¿Qué decorador se utiliza en Angular para definir un servicio como inyectable?",
        a: "@Component",
        b: "@Directive",
        c: "@Injectable",
        d: "@NgModule",
        correct: "c",
    },
    {
        question: "¿Para qué se usa ngModel en un formulario?",
        a: "Estilizar el formulario",
        b: "Crear nuevos campos",
        c: "Enlazar datos bidireccionales entre el modelo y la vista",
        d: "Ejecutar validaciones",
        correct: "c",
    },
    {
        question: "¿Cuál es la ventaja de los formularios de tipo model en Angular?",
        a: "Son más fáciles de configurar",
        b: "Permiten una mayor personalización y validaciones complejas en el componente",
        c: "No requieren validación",
        d: "Funcionan sin ReactiveFormsModule",
        correct: "b",
    },
    {
        question: "¿Qué clase en Angular se usa para definir un grupo de controles en un formulario reactivo?",
        a: "TemplateGroup",
        b: "FormControl",
        c: "FormGroup",
        d: "Validators",
        correct: "c",
    },
    {
        question: "¿Qué módulo se utiliza para gestionar rutas en Angular?",
        a: "FormsModule",
        b: "RouterModule",
        c: "HttpClientModule",
        d: "BrowserModule",
        correct: "b",
    },
    {
        question: "¿Qué directiva se usa para renderizar componentes dinámicos basados en rutas?",
        a: "ngFor",
        b: "@for",
        c: "router-outlet",
        d: "ngIf",
        correct: "c",
    },    {
        question: "¿Qué directiva se utiliza para enlazar rutas directamente desde una plantilla HTML?",
        a: "router-outlet",
        b: "routerActive",
        c: "routerLink",
        d: "ngLink",
        correct: "c",
    },
    {
        question: "¿Qué permite la directiva routerLinkActive?",
        a: "Redirigir automáticamente",
        b: "Deshabilitar rutas",
        c: "Definir rutas hijas",
        d: "Aplicar estilos CSS al enlace activo",
        correct: "d"
    },
    {
        question: "¿Qué clase se inyecta para acceder a parámetros dinámicos en una ruta activa?",
        a: "Router",
        b: "CanActivate",
        c: "RouteSnapshot",
        d: "ActivatedRoute",
        correct: "d"
    },
    {
        question: "¿Qué guard se usa para verificar si un usuario puede acceder a una ruta?",
        a: "CanLoad",
        b: "CanActivate",
        c: "CanDeactivate",
        d: "CanActivateChild",
        correct: "b"
    },
    {
        question: "¿Qué finalidad tiene el servicio?",
        a: "Conectarse con las API externas para poder recibir los datos que luego le pasaremos a los demás componentes.",
        b: "Sirve para almacenar nuestros datos de una aplicación para poder trabajar con ellos.",
        c: "Conectar a los componentes entre sí y pasarles los datos conectándose a la API externas.",
        d: "Conectar componentes entre sí.",
        correct: "c"
    },
    {
        question: "¿Qué patrón sigue Angular para gestionar instancias únicas de servicios?",
        a: "Observer",
        b: "Factory",
        c: "Singleton",
        d: "MVC",
        correct: "c"
    },
    {
        question: "¿Qué módulo permite realizar peticiones HTTP en Angular?",
        a: "ReactiveFormsModule",
        b: "HttpClientModule",
        c: "RouterModule",
        d: "FormsModule",
        correct: "b"
    },
    {
        question: "¿Qué tipo de objeto retorna una función que realiza una petición HTTP con Angular?",
        a: "Promesa",
        b: "Función sincrónica",
        c: "Observable",
        d: "Callback",
        correct: "c"
    },
    {
        question: "¿Qué método transforma un observable en una promesa en Angular?",
        a: "observableToPromise",
        b: "lastValueFrom",
        c: "transformObservable",
        d: "promiseFrom",
        correct: "b"
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
} 
/**
 * Datos del quiz de Despliegue de Aplicaciones Web - 10º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    // Tema 1: Arquitecturas Web
    {
        question: "¿Qué tipo de arquitectura es aquella donde la lógica de la aplicación y la interfaz de usuario están integradas?",
        a: "Arquitectura de dos capas",
        b: "Arquitectura monolítica",
        c: "Arquitectura distribuida",
        d: "Arquitectura de microservicios",
        correct: "b",
    },
    {
        question: "En el modelo cliente/servidor, el cliente es:",
        a: "La máquina con mayor capacidad de procesamiento",
        b: "El programa que solicita servicios",
        c: "El programa que ofrece servicios",
        d: "Siempre un navegador web",
        correct: "b",
    },
    {
        question: "En el patrón MVC, ¿qué componente maneja la lógica de negocio?",
        a: "Vista",
        b: "Modelo",
        c: "Controlador",
        d: "Middleware",
        correct: "b",
    },
    
    // Tema 2: Servidores Web
    {
        question: "¿Qué servidor web tiene mayor cuota de mercado actualmente?",
        a: "IIS",
        b: "Nginx",
        c: "Apache",
        d: "Lighttpd",
        correct: "c",
    },
    {
        question: "¿Qué archivo se utiliza para configurar los hosts virtuales en Apache?",
        a: "apache.conf",
        b: "httpd.conf",
        c: "vhosts.conf",
        d: "hosts.conf",
        correct: "b",
    },
    {
        question: "¿Qué módulo de Apache se utiliza para procesar PHP?",
        a: "mod_php",
        b: "mod_perl",
        c: "mod_wsgi",
        d: "mod_python",
        correct: "a",
    },
    
    // Tema 3: Servidores FTP
    {
        question: "¿Cómo funciona el modo pasivo en FTP?",
        a: "El servidor inicia la conexión de datos",
        b: "El cliente inicia la conexión de datos",
        c: "No hay transferencia de datos, solo comandos",
        d: "Se utiliza un tercer servidor como intermediario",
        correct: "b",
    },
    {
        question: "¿Qué diferencia principal existe entre FTP y SFTP?",
        a: "SFTP es más rápido",
        b: "FTP permite más conexiones simultáneas",
        c: "SFTP usa cifrado para proteger los datos",
        d: "SFTP solo funciona en sistemas Linux",
        correct: "c",
    },
    {
        question: "¿Qué puerto utiliza SFTP por defecto?",
        a: "21",
        b: "22",
        c: "23",
        d: "25",
        correct: "b",
    },
    
    // Tema 4: Servidores de Aplicaciones
    {
        question: "¿Qué servidor de aplicaciones Java se estudia en el módulo de Despliegue de aplicaciones web?",
        a: "GlassFish",
        b: "Apache Tomcat",
        c: "WildFly",
        d: "Payara",
        correct: "b",
    },
    {
        question: "¿Por qué puerto se accede por defecto a una aplicación segura (HTTPS) en Tomcat?",
        a: "443",
        b: "8080",
        c: "8443",
        d: "9090",
        correct: "c",
    },
    {
        question: "¿En qué carpeta se instalan las aplicaciones web en Tomcat?",
        a: "/var/www/html",
        b: "webapps",
        c: "deploy",
        d: "applications",
        correct: "b",
    },
    
    // Tema 5: Servicios de Red
    {
        question: "¿Qué significa DNS?",
        a: "Domain Network System",
        b: "Domain Name System",
        c: "Digital Network Service",
        d: "Data Name Service",
        correct: "b",
    },
    {
        question: "¿Qué característica tienen los nombres NetBIOS que usa Windows?",
        a: "Son un espacio de nombres jerárquico",
        b: "Son un espacio de nombres plano",
        c: "Son un espacio de nombres circular",
        d: "Son un espacio de nombres híbrido",
        correct: "b",
    },
    {
        question: "¿Para qué se utiliza un registro CNAME?",
        a: "Para definir el servidor de nombres autoritativo",
        b: "Para traducir direcciones IPv4 a nombres",
        c: "Para crear alias para servidores de alojamiento",
        d: "Para indicar el servidor de correo de un dominio",
        correct: "c",
    },
    
    // Tema 6: Documentación y Control de Versiones
    {
        question: "¿Cuál de estas herramientas se utiliza para documentar código PHP?",
        a: "PHPDoc",
        b: "PHPDocumentor",
        c: "PHPComment",
        d: "PHPInfo",
        correct: "b",
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
        question: "¿Cuáles son los tres tipos de sistemas de control de versiones?",
        a: "VCS, DVCS, JVCS",
        b: "Local, Remoto, Híbrido",
        c: "VCS (Locales), CVCS (Centralizados), DVCS (Distribuidos)",
        d: "GIT, SVN, Mercurial",
        correct: "c",
    },
    
    // Preguntas adicionales de diferentes temas
    {
        question: "¿Qué componente es necesario instalar para poder ejecutar aplicaciones Java en un servidor?",
        a: "JDK (Kit de Desarrollo de Java)",
        b: "MySQL",
        c: "PHP",
        d: "Node.js",
        correct: "a",
    },
    {
        question: "¿Qué registro DNS proporciona información sobre el servidor DNS primario de la zona?",
        a: "NS",
        b: "MX",
        c: "SOA",
        d: "A",
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
        question: "¿Qué significa CVCS?",
        a: "Centralized Version Control System (Sistema de Control de Versiones Centralizado)",
        b: "Common Version Control System (Sistema de Control de Versiones Común)",
        c: "Collaborative Version Control System (Sistema de Control de Versiones Colaborativo)",
        d: "Complete Version Control System (Sistema de Control de Versiones Completo)",
        correct: "a",
    },
    {
        question: "¿Qué métodos están definidos en los servlets para procesar peticiones HTTP?",
        a: "run() y execute()",
        b: "doGet() y doPost()",
        c: "process() y handle()",
        d: "init() y destroy()",
        correct: "b",
    },
    {
        question: "¿Qué es una transferencia de zona DNS (AXFR)?",
        a: "Un mecanismo para trasladar dominios entre proveedores",
        b: "Un mecanismo para replicar bases de datos DNS a través de un conjunto de servidores DNS",
        c: "Un sistema para verificar la integridad de los registros DNS",
        d: "Un protocolo para actualizar registros DNS automáticamente",
        correct: "b",
    },
    {
        question: "¿Qué contiene el JDK que es necesario para ejecutar programas Java?",
        a: "Solo JVM (Máquina Virtual Java)",
        b: "Solo Java Compiler",
        c: "JVM y Java Compiler",
        d: "Solo bibliotecas Java",
        correct: "c",
    },
    {
        question: "¿Qué significa 'ramificar' (branch) en un sistema de control de versiones?",
        a: "Crear una copia de seguridad del proyecto",
        b: "Bifurcar un módulo para desarrollarlo de forma independiente",
        c: "Fusionar diferentes versiones",
        d: "Etiquetar una versión específica",
        correct: "b",
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
        question: "¿Qué archivo controla qué páginas pueden ser vistas por los usuarios en Apache?",
        a: ".htaccess",
        b: "httpd.conf",
        c: "mime.types",
        d: "apache.xml",
        correct: "a",
    },
    {
        question: "¿Qué significa la sigla MVC?",
        a: "Modelo Vista Controlador",
        b: "Método Virtual de Computación",
        c: "Máquina Virtual Compilada",
        d: "Módulo de Visualización Caché",
        correct: "a",
    },
    {
        question: "¿Qué se debe implementar para habilitar HTTPS en un servidor Tomcat?",
        a: "Un certificado SSL/TLS",
        b: "Un firewall adicional",
        c: "Un proxy inverso",
        d: "Un módulo de PHP",
        correct: "a",
    }
];;

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
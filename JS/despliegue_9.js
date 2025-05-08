/**
 * Datos del quiz de Despliegue de Aplicaciones Web - 9º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    // Tema 1: Arquitecturas Web
    {
        question: "¿Qué es el modelo cliente/servidor?",
        a: "Un tipo de aplicación web",
        b: "Un paradigma que estructura las tareas entre proveedores de recursos y servicios (servidores) y los solicitantes (clientes)",
        c: "Un protocolo de transferencia de datos",
        d: "Una arquitectura exclusiva para aplicaciones móviles",
        correct: "b",
    },
    {
        question: "¿Qué es la arquitectura de tres capas?",
        a: "Una arquitectura que separa la aplicación en capa de presentación, capa de negocio y capa de datos",
        b: "Una arquitectura que separa el hardware en tres partes",
        c: "Una arquitectura exclusiva para bases de datos",
        d: "Una arquitectura que separa la aplicación en frontend, middleware y backend",
        correct: "a",
    },
    {
        question: "En el modelo MVC, ¿qué representa la 'V'?",
        a: "Versión",
        b: "Variable",
        c: "Vista",
        d: "Validación",
        correct: "c",
    },
    
    // Tema 2: Servidores Web
    {
        question: "¿Qué es un servidor web?",
        a: "Un ordenador dedicado a alojar sitios web",
        b: "Un programa que entrega contenido mediante el protocolo HTTP a clientes",
        c: "Un dispositivo de red para conectar ordenadores",
        d: "Un tipo de sistema operativo especializado en servicios web",
        correct: "b",
    },
    {
        question: "¿Cuál de estos NO es un servidor web?",
        a: "Apache",
        b: "Nginx",
        c: "MySQL",
        d: "IIS",
        correct: "c",
    },
    {
        question: "¿Cuál es el puerto por defecto utilizado por HTTP?",
        a: "21",
        b: "22",
        c: "80",
        d: "443",
        correct: "c",
    },
    
    // Tema 3: Servidores FTP
    {
        question: "¿Qué significa FTP?",
        a: "File Transfer Protocol",
        b: "File Treatment Process",
        c: "File Transmission Protocol",
        d: "File Transference Process",
        correct: "a",
    },
    {
        question: "¿Cuál es el puerto por defecto para FTP?",
        a: "20",
        b: "21",
        c: "22",
        d: "23",
        correct: "b",
    },
    {
        question: "¿Qué modo de FTP permite la encriptación?",
        a: "FTP activo",
        b: "FTP pasivo",
        c: "FTPS",
        d: "Ninguno, FTP siempre es inseguro",
        correct: "c",
    },
    
    // Tema 4: Servidores de Aplicaciones
    {
        question: "¿Qué es un servidor de aplicaciones?",
        a: "Un servidor donde va a funcionar una aplicación escrita en un lenguaje de programación específico",
        b: "Un tipo de servidor web que solo sirve archivos HTML",
        c: "Un servidor que almacena únicamente bases de datos",
        d: "Un servidor virtual que simula aplicaciones",
        correct: "a",
    },
    {
        question: "¿Por qué puerto escucha Apache Tomcat por defecto?",
        a: "80",
        b: "443",
        c: "8080",
        d: "3306",
        correct: "c",
    },
    {
        question: "¿Qué es un servlet en las aplicaciones web Java?",
        a: "Un tipo de base de datos",
        b: "Un archivo HTML con código Java insertado",
        c: "El componente fundamental de las aplicaciones web Java que procesa peticiones",
        d: "Un protocolo de comunicación",
        correct: "c",
    },
    
    // Tema 5: Servicios de Red
    {
        question: "¿Qué tipo de sistema es el DNS?",
        a: "Un sistema plano sin jerarquía",
        b: "Un sistema jerárquico con estructura de árbol",
        c: "Un sistema radial con estructura de estrella",
        d: "Un sistema lineal con estructura secuencial",
        correct: "b",
    },
    {
        question: "¿Para qué se utiliza un registro DNS de tipo A?",
        a: "Para traducir nombres de hosts a direcciones IPv4",
        b: "Para asociar un servidor de correo a un dominio",
        c: "Para crear alias de un dominio",
        d: "Para traducir direcciones IP a nombres de dominio",
        correct: "a",
    },
    {
        question: "¿Qué tipo de zona DNS posee permisos de lectura y escritura en el conjunto de registros que contiene?",
        a: "Zona secundaria",
        b: "Zona primaria",
        c: "Zona de rutas internas",
        d: "Zona de transferencia",
        correct: "b",
    },
    
    // Tema 6: Documentación y Control de Versiones
    {
        question: "¿Qué herramienta se usa para generar documentación en Java?",
        a: "JavaDoc",
        b: "PHPDocumentor",
        c: "Doxygen",
        d: "JSDoc",
        correct: "a",
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
        question: "¿Qué es un sistema de control de versiones?",
        a: "Un sistema de copias de seguridad automáticas",
        b: "Un sistema que registra los cambios realizados en archivos a lo largo del tiempo",
        c: "Un sistema de organización del código por versiones",
        d: "Un sistema de actualización de software",
        correct: "b",
    },
    
    // Preguntas adicionales de diferentes temas
    {
        question: "¿Qué archivo se utiliza para gestionar los usuarios en Apache Tomcat?",
        a: "users.conf",
        b: "tomcat-users.xml",
        c: "security.xml",
        d: "web.xml",
        correct: "b",
    },
    {
        question: "¿Qué registro DNS se utiliza para IPv6?",
        a: "A",
        b: "AAAA",
        c: "CNAME",
        d: "MX",
        correct: "b",
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
        question: "¿Cuál es el protocolo principal utilizado por los servidores web?",
        a: "FTP",
        b: "HTTP",
        c: "SMTP",
        d: "SSH",
        correct: "b",
    },
    {
        question: "¿Qué significa MVC en desarrollo web?",
        a: "Most Valued Component",
        b: "Model View Controller",
        c: "Multiple Virtual Connections",
        d: "Main Virtual Container",
        correct: "b",
    },
    {
        question: "¿Qué puerto por defecto se usa para HTTPS?",
        a: "80",
        b: "443",
        c: "22",
        d: "8080",
        correct: "b",
    },
    {
        question: "¿Qué significa SFTP?",
        a: "Secure File Transfer Protocol",
        b: "Standard File Transfer Protocol",
        c: "Simple File Transfer Protocol",
        d: "System File Transfer Protocol",
        correct: "a",
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
        question: "¿Qué elemento es necesario instalar para ejecutar aplicaciones Java en un servidor?",
        a: "JDK (Kit de Desarrollo de Java)",
        b: "MySQL",
        c: "PHP",
        d: "Node.js",
        correct: "a",
    },
    {
        question: "¿Qué tipo de registro DNS se utiliza para definir servidores de correo?",
        a: "A",
        b: "CNAME",
        c: "MX",
        d: "SOA",
        correct: "c",
    },
    {
        question: "¿Cuál es la característica principal de Apache Tomcat?",
        a: "Está desarrollado en C++",
        b: "Es de pago",
        c: "Está desarrollado en Java",
        d: "Solo funciona en Windows",
        correct: "c",
    }
];;

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
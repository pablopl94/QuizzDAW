/**
 * Datos del quiz de Inglés Técnico - Web Hosting
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "What is a dedicated server?",
        a: "A server with multiple users",
        b: "A single computer exclusively reserved for hosting a website",
        c: "A virtual machine",
        d: "A network of computers",
        correct: "b",
    },
    {
        question: "What is a shared server?",
        a: "A computer used for hosting multiple websites",
        b: "A peer-to-peer network",
        c: "A server that divides files equally between users",
        d: "A computer exclusively used by one company",
        correct: "a",
    },
    {
        question: "What does 'uptime' refer to in web hosting?",
        a: "The time it takes to upload files",
        b: "The time during which a server is in operation",
        c: "The time it takes to update software",
        d: "The time it takes to install an operating system",
        correct: "b",
    },
    {
        question: "What does 'downtime' mean in web hosting?",
        a: "The time during which a server is not in operation",
        b: "The time it takes to download files",
        c: "The time it takes to back up data",
        d: "The maintenance period",
        correct: "a",
    },
    {
        question: "What are 'backups' in the context of web hosting?",
        a: "Additional servers for load balancing",
        b: "Secondary bandwidth sources",
        c: "Copies of data in case the original is lost or damaged",
        d: "Emergency power supplies",
        correct: "c",
    },
    {
        question: "What is 'bandwidth' in web hosting?",
        a: "The physical space on a server",
        b: "The number of websites on a server",
        c: "The speed of a server's processor",
        d: "Data transfer capacity",
        correct: "d",
    },
    {
        question: "According to the HostElite webpage, what uptime do they guarantee?",
        a: "95%",
        b: "97%",
        c: "99.9%",
        d: "100%",
        correct: "c",
    },
    {
        question: "What feature of HostElite plans allows hosting multiple websites?",
        a: "All plans have unlimited websites and databases",
        b: "Only the Premium plan allows multiple websites",
        c: "Multiple websites require additional payment",
        d: "Only dedicated servers can host multiple websites",
        correct: "a",
    },
    {
        question: "How long is the minimum contract period for HostElite?",
        a: "One month",
        b: "Three months",
        c: "Six months",
        d: "One year",
        correct: "c",
    },
    {
        question: "What does HostElite offer regarding operating systems?",
        a: "They only offer Linux",
        b: "They only offer Windows",
        c: "You can choose between operating systems, which they install using your license or you can purchase one from them",
        d: "You must provide your own operating system",
        correct: "c",
    },
    {
        question: "What is the setup fee for HostElite's hosting plans?",
        a: "$100",
        b: "$150",
        c: "$200",
        d: "$300",
        correct: "c",
    },
    {
        question: "How many CPUs does the Premier server plan have?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        question: "What is the monthly fee for the Standard server plan?",
        a: "$100",
        b: "$200",
        c: "$300",
        d: "$500",
        correct: "c",
    },
    {
        question: "What is the monthly bandwidth for the Basic server plan?",
        a: "1 TB",
        b: "2 TB",
        c: "5 TB",
        d: "25 TB",
        correct: "b",
    },
    {
        question: "How many dedicated IP addresses come with the Premier server plan?",
        a: "10",
        b: "25",
        c: "50",
        d: "100",
        correct: "d",
    },
    {
        question: "What type of support does HostElite provide?",
        a: "Email support only",
        b: "9-5 support",
        c: "24-7 support",
        d: "Weekday support",
        correct: "c",
    },
    {
        question: "How much memory (RAM) does the Standard server plan have?",
        a: "8 GB",
        b: "12 GB",
        c: "16 GB",
        d: "24 GB",
        correct: "b",
    },
    {
        question: "Which CPU specification is correct for the Basic server plan?",
        a: "Quad core, 3.0 GHz",
        b: "8 core, 3.2 GHz",
        c: "16 core, 3.2 GHz",
        d: "Dual core, 2.8 GHz",
        correct: "a",
    },
    {
        question: "What happens if there is a hardware problem with a HostElite server?",
        a: "You need to fix it yourself",
        b: "They will replace hardware within 24 hours of any problem",
        c: "You need to pay extra for hardware replacements",
        d: "They will advise you on how to fix it",
        correct: "b",
    },
    {
        question: "What disk size does the Premier server plan offer?",
        a: "2 x 500 GB",
        b: "2 x 2 TB",
        c: "4 x 2 TB",
        d: "8 x 1 TB",
        correct: "c",
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
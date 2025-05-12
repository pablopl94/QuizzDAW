/**
 * Datos del quiz de Inglés Técnico - 2º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "What does LAN stand for?",
        a: "Linked area network",
        b: "Local Area Network",
        c: "Local Open Network",
        d: "None of them",
        correct: "b",
    },
    {
        question: "Which of these is not a type of network?",
        a: "Mesh",
        b: "Ring",
        c: "Star",
        d: "Browser",
        correct: "d",
    },
    {
        question: "VPN stands for...",
        a: "Virtual Private Network",
        b: "Very Private Network",
        c: "Virtual Portable Network",
        d: "Virtual peripherical network",
        correct: "a",
    },
    {
        question: "If you don't install a firework your network will be very...",
        a: "seamless",
        b: "clunky",
        c: "vulnerable",
        d: "sophisticated",
        correct: "c",
    },
    {
        question: "The ability of finding a problem and solving it is called...",
        a: "fault-finding",
        b: "troubleshooting",
        c: "error shooting",
        d: "mistake shooting",
        correct: "b",
    },
    {
        question: "Choose the one odd out",
        a: "Trojan",
        b: "Worm",
        c: "Spyware",
        d: "VPN",
        correct: "d",
    },
    {
        question: "Choose the best definition for Trojan:",
        a: "A trojan is a backdoor program that creates an entryway for malicious users to access the computer system by using what looks like a real program, but quickly turns out to be harmful.",
        b: "It is s a computer virus that gathers information about a person or organization without their express knowledge and may send the information gathered to a third party without the consumer's consent",
        c: "Can slow down computer networks by eating up bandwidth as well as the slow the efficiency of your computer to process data.",
        d: "Can redirect your search requests to advertising websites and collect marketing data about you",
        correct: "a",
    },
    {
        question: "What is understood by Ransomware?",
        a: "A type of trojan cyberware that is designed to gain money from the person or organization's computer",
        b: "A malicious, downloadable file that can lay dormant that replicates itself by changing other computer programs with its own code.",
        c: "A backdoor program that creates an entryway for malicious users to access the computer system by using what looks like a real program",
        d: "Can slow down computer networks by eating up bandwidth as well as slow the efficiency of your computer to process data",
        correct: "a",
    },
    {
        question: "We need a programmer to develop our web based",
        a: "applications",
        b: "appliances",
        c: "applauses",
        d: "codifications",
        correct: "a",
    },
    {
        question: "What is understood by the term \"buzzword\"?",
        a: "A word or expression related to mobile apps",
        b: "A word or expression related to network security",
        c: "A word or expression related to web developing",
        d: "A word or expression that has come into fashion and it is being overused",
        correct: "d",
    },
    {
        question: "Choose the correct definition for \"LOOP\"",
        a: "the user interface of a computer or any device",
        b: "a sequence of instructions that repeat the same process over and over until a condition is met and it receives the order to stop",
        c: "collections of prewritten code that users can use to optimize tasks.",
        d: "a set of rules, routines, and protocols to build software applications.",
        correct: "b",
    },
    {
        question: "\"A block of organized, reusable code that is used to perform a single, related action.\" This refers to:",
        a: "Function",
        b: "Variable",
        c: "Constant",
        d: "Loop",
        correct: "a",
    },
    {
        question: "API refers to...",
        a: "Application Programming Interface",
        b: "Application Programming Individual",
        c: "Advanced Programming Interface",
        d: "Advanced Perfect Interface.",
        correct: "a",
    },
    {
        question: "When we say that we have \"A location that stores temporary data within a program which can be modified, store and display whenever need\" we refer to…",
        a: "Constant",
        b: "Variable",
        c: "Loop",
        d: "Library",
        correct: "b",
    },
    {
        question: "\"Libraries\" in programming languages refer to…",
        a: "A set of instructions or rules designed to solve a definite problem.",
        b: "A value that should not be altered by the program during normal execution",
        c: "The smallest individual unit in a program",
        d: "Collections of prewritten code that users can use to optimize tasks.",
        correct: "d",
    },
    {
        question: "Which can be a good definition of framework?",
        a: "A block of organized, reusable code that is used to perform a single, related action.",
        b: "A foundation with a specified level of complexity that may be altered by the programmer, making use of their code",
        c: "A task is the one that is performed in the background with the user's direct interaction.",
        d: "A set of instructions or rules designed to solve a definite problem.",
        correct: "b",
    },
    {
        question: "What does \"Front End\" mean?",
        a: "A task that is performed in the background without the user's direct interaction.",
        b: "A task that is performed in the background with the user's direct interactio",
        c: "The user interface of a computer or any device",
        d: "All the answers are correct.",
        correct: "c",
    },
    {
        question: "\"Compilation\" means…",
        a: "The process of creating an executable program through a code written by which the computer can understand and run the program without using the programming software used to create it.",
        b: "the user interface of a computer or any device. For example, any operating system provides users with the ease of navigation.",
        c: "a sequence of instructions that repeat the same process over and over until a condition is met and it receives the order to stop.",
        d: "is a set of rules, routines, and protocols to build software applications",
        correct: "a",
    },
    {
        question: "A \"token\" is…",
        a: "a set of rules, routines, and protocols to build software applications.",
        b: "the smallest individual unit in a program, often referring to a portion of a much larger data piece",
        c: "is a relatively simple language that consists of easily understood keywords and tags.",
        d: "a value that should not be altered by the program during normal execution",
        correct: "b",
    },
    {
        question: "When a website is full of information with few white spaces we say it is...",
        a: "Buggy",
        b: "Efficient",
        c: "Cluttered",
        d: "user friendly",
        correct: "c",
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
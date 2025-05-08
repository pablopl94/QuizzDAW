/**
 * Datos del quiz de Inglés Técnico - 1º Trimestre
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "Choose the correct definition for 'Hardware'",
        a: "The machines, wiring, and other physical components of a computer or other electronic system",
        b: "The programs and other operating information used by a computer",
        c: "A device used to put information into and get information out of the computer",
        d: "All of them are correct",
        correct: "a",
    },
    {
        question: "Choose the best definition for 'peripheral'",
        a: "A part or element of a larger whole, especially a part of a machine or vehicle.",
        b: "A peripheral is an input or output device that gives a computer additional functionality",
        c: "The programs and other operating information used by a computer.",
        d: "None of the answers are correct",
        correct: "b",
    },
    {
        question: "Which of the following can be considered peripherals?",
        a: "External drive, hard disk drive and optical drive",
        b: "Printer, keyboard and SSD",
        c: "External drive, hard disk drive and optical drive",
        d: "Mouse, monitor and keyboard",
        correct: "d",
    },
    {
        question: "What does a web administrator do?",
        a: "He/she is an IT professional who develops the software code for applications",
        b: "He/she is someone who manages any kind of technological system",
        c: "He/She is responsible for all aspects of keeping website content and design fresh, backed up, and fully functional",
        d: "He/she is an executive title given to the most senior IT professional within an Enterprise",
        correct: "c",
    },
    {
        question: "What does an application developer do?",
        a: "He/ She is an IT professional who develops (designs and writes) the software code for applications",
        b: "He/she is an IT professional in charge of implementing and maintaining a company’s network of computer",
        c: "He/she is an IT professional in charge of planning a company’s network of computer",
        d: "He/ She is someone who manages any kind of technological system",
        correct: "a",
    },
    {
        question: "A dedicating hosting is…",
        a: "A shared hosting",
        b: "A system in which each server has only one client’s website on It",
        c: "A free hosting",
        d: "None of them",
        correct: "b",
    },
    {
        question: "In which of the following areas can we consider proprietary source software the best option?",
        a: "Graphic design",
        b: "Office software",
        c: "Personal blogs",
        d: "Spreadsheets and Word processors",
        correct: "a",
    },
    {
        question: "Which of the following is not a feature of open source software?",
        a: "They can be free",
        b: "You can add features",
        c: "Companies have less control of their data",
        d: "Vendor controls software updates",
        correct: "c",
    },
    {
        question: "What do we understand by 'BIOS'?",
        a: "A set of computer instructions in firmware which control input and output operations",
        b: "The electronic circuit that executes instructions",
        c: "It is a kind of random Access memory",
        d: "It is a type of storage medium that permanently stores data on personal computers (PCs) and other electronic devices",
        correct: "a",
    },
    {
        question: "Which of these is a characteristic of a dedicated server?",
        a: "It is a type of virtual hosting",
        b: "Lower prices",
        c: "Many clients at the same time, it provides a fixed IP",
        d: "A server for each client",
        correct: "d",
    },
    {
        question: "A computer used for hosting multiple websites is called…",
        a: "A shared hosting",
        b: "A dedicated hosting",
        c: "A proprietary hosting",
        d: "All the answers are correct",
        correct: "a",
    },
    {
        question: "What does IP stand for?",
        a: "An International protocol for the transfer of compressed files.",
        b: "An Internet protocol formed by a string of numbers separated by periods between 0 and 255.",
        c: "An address used in an interconnection protocol between computer.",
        d: "All the answers are correct",
        correct: "b",
    },
    {
        question: "Choose the best definition for 'error'",
        a: "An incorrect action attributable to poor judgment, ignorance or inattention.",
        b: "Private developed and owned technology",
        c: "Something a computer program is supposed to do, often a reason to buy or upgrade software",
        d: "An incorrect action attributable to a mistake in the code.",
        correct: "a",
    },
    {
        question: "Choose the best definition for 'bug'",
        a: "A computer failure that aborts an application or freezes an operating system.",
        b: "Something a computer program is supposed to do, often a reason to buy or upgrade software",
        c: "An error or glitch on a computer program caused by a programmer’s mistake",
        d: "An incorrect action attributable to poor judgement, ignorance or inattention.",
        correct: "c",
    },
    {
        question: "Which of the following is not a feature of proprietary source software?",
        a: "You can add different features.",
        b: "You have to follow software vendor decisions",
        c: "Companies have more control of their data",
        d: "Vendor controls software updates",
        correct: "a",
    }
];;

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
/**
 * Datos del quiz de Inglés Técnico - Tema 1
 * Archivo convertido al nuevo formato
 */

// Definir los datos del quiz
const quizQuestions = [
    {
        question: "What's the salary difference between a Hardware Engineer and a Software Engineer?",
        a: "Software Engineers earn more money than Hardware Engineers",
        b: "Hardware Engineers earn $4,920 more than Software Engineers",
        c: "They earn exactly the same salary",
        d: "Software Engineers earn $10,000 more than Hardware Engineers",
        correct: "b",
    },
    {
        question: "Which IT professional earns the highest salary according to the infographics?",
        a: "Web Developer",
        b: "Computer Engineer",
        c: "Computer Scientist",
        d: "Hardware Engineer",
        correct: "c",
    },
    {
        question: "What kind of education is required for a Computer Scientist?",
        a: "Bachelor's Degree",
        b: "Computer Science or Computer Engineering Degree",
        c: "Doctoral or Professional Degree",
        d: "Electrical & Computer Engineering Degree",
        correct: "c",
    },
    {
        question: "Which of these professionals focuses on 'the look and feel of a website'?",
        a: "Web Developer",
        b: "Web Designer",
        c: "Software Engineer",
        d: "Computer Engineer",
        correct: "b",
    },
    {
        question: "What's the main focus of a Computer Scientist according to the job description?",
        a: "Developing and operating computer systems",
        b: "Developing programs & computers, focusing on data and algorithms",
        c: "Creating the inner workings of a website",
        d: "Developing, designing and testing software",
        correct: "b",
    },
    {
        question: "Which IT role has the most job opportunities available?",
        a: "Web Designer",
        b: "Software Engineer",
        c: "Computer Engineer",
        d: "Hardware Engineer",
        correct: "b",
    },
    {
        question: "What programming languages are commonly used by Web Developers?",
        a: "HTML, CSS, and JavaScript",
        b: "PHP, .NET, Python, C, Ruby",
        c: "Java, C++, and Python",
        d: "SQL, NoSQL, and MongoDB",
        correct: "b",
    },
    {
        question: "Which professional is described as having 'Right-brain: Strong intuition, creativity and imagination'?",
        a: "Web Developer",
        b: "Computer Scientist",
        c: "Web Designer",
        d: "Software Engineer",
        correct: "c",
    },
    {
        question: "What skill sets are required for a Software Engineer?",
        a: "Troubleshooting, Problem Solving, Systems Evaluation",
        b: "Technology Design, Complex Problem Solving, Critical Thinking",
        c: "HTML, CSS, and JavaScript",
        d: "Logic, linear thinking and technical abilities",
        correct: "b",
    },
    {
        question: "What's the salary of a Web Developer?",
        a: "$64,110",
        b: "$70,120",
        c: "$102,450",
        d: "$107,840",
        correct: "b",
    },
    {
        question: "Which two IT careers can work as freelancers according to the infographics?",
        a: "Software Engineer and Hardware Engineer",
        b: "Computer Engineer and Computer Scientist",
        c: "Web Designer and Web Developer",
        d: "Software Engineer and Web Designer",
        correct: "c",
    },
    {
        question: "What is the main job description of a Hardware Engineer?",
        a: "Research, develop and test hardware or computer equipment",
        b: "Develop and operate computer systems, focus on link between hardware and software",
        c: "Develop, design and test software or construct networks and programs",
        d: "Creates the inner workings of a website",
        correct: "a",
    },
    {
        question: "Which professional is described as having 'Left-brain: Logic, linear thinking and technical' skills?",
        a: "Web Designer",
        b: "Web Developer",
        c: "Computer Engineer",
        d: "Software Engineer",
        correct: "b",
    },
    {
        question: "What's the approximate salary difference between the highest and lowest paid IT professionals shown in the infographics?",
        a: "Around $40,000",
        b: "Around $30,000",
        c: "Around $50,000",
        d: "Around $60,000",
        correct: "c",
    },
    {
        question: "How many jobs are available for Hardware Engineers according to the infographic?",
        a: "More than 1,128,000",
        b: "More than 87,000",
        c: "Less than 87,000",
        d: "Exactly 87,000",
        correct: "b",
    }
];

// Inicializar el quiz con los datos
if (typeof initializeQuiz === 'function') {
    initializeQuiz(quizQuestions);
} else {
    console.error("Error: El motor del quiz no está cargado correctamente");
}
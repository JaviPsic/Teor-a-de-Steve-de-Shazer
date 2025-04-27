// Datos del quiz
const questions = [
    {
        question: "¿Cuál fue la principal actividad de Steve de Shazer durante su primera fase de desarrollo teórico?",
        options: [
            "Desarrollar sus propias técnicas de terapia familiar sistémica.",
            "Imitar y tratar de comprender el trabajo de Milton Erickson.",
            "Estudiar en detalle las teorías psicoanalíticas."
        ],
        correctAnswerIndex: 1,
        justification: "Durante esta fase, de Shazer comenzó imitando lo que creía que Milton Erickson hacía con sus clientes, basándose en la lectura de sus casos. Posteriormente, se dio cuenta de que había malinterpretado el trabajo de Erickson.",
        phase: 1
    },
    {
        question: "¿Cuál fue un cambio conceptual clave que surgió durante la fase inicial del Brief Family Therapy Center (BFTC)?",
        options: [
            "Un mayor énfasis en el diagnóstico detallado de los problemas familiares.",
            "La distinción entre el estudio de la familia como sistema y la terapia familiar como sistema.",
            "La adopción de la teoría de la homeostasis como principio organizador."
        ],
        correctAnswerIndex: 1,
        justification: "En estos años, de Shazer articuló la diferencia crucial entre estudiar a la familia como un sistema aislado y estudiar la terapia familiar como un sistema que incluye al terapeuta y al cliente interactuando con el objetivo del cambio. Esto llevó a cuestionar conceptos como la homeostasis y la resistencia.",
        phase: 2
    },
    {
        question: "¿Qué evento se considera un punto de inflexión importante que llevó al desarrollo de la Terapia Breve Centrada en Soluciones (SFBT)?",
        options: [
            "La publicación del primer libro de de Shazer sobre terapia familiar ecosistémica.",
            "El caso de una familia con 27 problemas que respondió positivamente a una tarea vaga al final de la primera sesión.",
            "La adopción formal de la teoría de los estados de expectativa de Berger en la práctica clínica."
        ],
        correctAnswerIndex: 1,
        justification: "El caso de la familia con 27 problemas, donde la aplicación de una tarea vaga (\"formula first session task\" - FFST) generó cambios significativos sin que el terapeuta conociera qué problema específico se había abordado, llevó a cuestionar la necesidad de un análisis profundo del problema y a enfocarse más en las soluciones.",
        phase: 3
    },
    {
        question: "¿Qué influencia filosófica se volvió particularmente importante para de Shazer en su última fase de desarrollo teórico?",
        options: [
            "La fenomenología de Husserl.",
            "La filosofía del lenguaje de Ludwig Wittgenstein.",
            "El pragmatismo de William James."
        ],
        correctAnswerIndex: 1,
        justification: "Desde principios de la década de 1990 hasta su fallecimiento, de Shazer se basó en la obra de Ludwig Wittgenstein para desarrollar su comprensión de cómo los significados de las palabras en las sesiones de terapia no son fijos y cómo esto impacta en el cambio del cliente.",
        phase: 4
    },
    {
        question: "¿Cuál de los siguientes enunciados describe mejor el Axioma 1 de de Shazer acerca del objetivo central de la terapia?",
        options: [
            "La terapia se centra principalmente en comprender la historia del problema del cliente.",
            "La terapia es un proceso interaccional observable, es decir, una conversación.",
            "El objetivo principal de la terapia es identificar y resolver los conflictos intrapsíquicos del cliente."
        ],
        correctAnswerIndex: 1,
        justification: "El Axioma 1 establece que la terapia es fundamentalmente una conversación observable entre el terapeuta y el cliente, marcando una diferencia con las terapias que se centran en procesos internos no observables.",
        phase: 5
    },
    {
        question: "¿Cuál es la unidad mínima de análisis en la terapia, según el Axioma 2?",
        options: [
            "El individuo y su mundo interno.",
            "La dinámica familiar completa.",
            "El terapeuta interactuando con el cliente en el entorno terapéutico."
        ],
        correctAnswerIndex: 2,
        justification: "El Axioma 2 define que la unidad básica e indivisible para el análisis teórico es la interacción entre el terapeuta y el cliente en la sesión, lo que limita la teorización sobre lo que sucede dentro del cliente o en su familia fuera de esta interacción.",
        phase: 5
    },
    {
        question: "¿Cuál es la principal finalidad del encuentro entre el terapeuta y el cliente según el Axioma 3?",
        options: [
            "Comprender la naturaleza y las causas del problema del cliente.",
            "El cambio.",
            "Proporcionar apoyo emocional y validación al cliente."
        ],
        correctAnswerIndex: 1,
        justification: "El Axioma 3 enfatiza que el propósito central de la terapia es promover el cambio en la vida del cliente, diferenciándose de las terapias que se enfocan en la evaluación del problema como un precursor necesario del tratamiento.",
        phase: 5
    },
    {
        question: "¿Cómo ocurre el cambio del cliente a través de la terapia, de acuerdo con el Axioma 4?",
        options: [
            "Principalmente a través de la insight y la comprensión de patrones inconscientes.",
            "A través de la aplicación de técnicas terapéuticas directivas por parte del terapeuta.",
            "A través de interacciones observables en las que el terapeuta encuentra formas de cooperar con el cliente."
        ],
        correctAnswerIndex: 2,
        justification: "El Axioma 4 destaca que el cambio se produce mediante la colaboración observable entre el terapeuta y el cliente, cuestionando la noción de \"resistencia\" del cliente y enfocándose en la cooperación para generar el cambio.",
        phase: 5
    },
    {
        question: "¿Cuál es el enfoque principal de la terapia breve según el Axioma 5?",
        options: [
            "Resolver los problemas profundamente arraigados del cliente.",
            "Desarrollar soluciones con el cliente.",
            "Analizar en detalle la historia del problema y sus causas."
        ],
        correctAnswerIndex: 1,
        justification: "El Axioma 5 define que la terapia breve se centra en la construcción activa de soluciones junto con el cliente, aprovechando los cambios ya en curso y visualizando un futuro más positivo.",
        phase: 5
    },
    {
        question: "¿Qué aspecto central de la interacción terapéutica resalta el Axioma 6?",
        options: [
            "La aplicación de técnicas específicas de SFBT para resolver problemas.",
            "La interpretación experta del terapeuta sobre los significados del cliente.",
            "Un proceso dialógico interaccional visible que negocia los significados del lenguaje del cliente."
        ],
        correctAnswerIndex: 2,
        justification: "El Axioma 6 subraya que el cambio ocurre a través de la negociación de los significados que el cliente trae a la terapia, donde las palabras no tienen significados fijos sino que se construyen a través de la conversación entre terapeuta y cliente.",
        phase: 5
    }
];

const quizContainer = document.getElementById('quiz-container');
// answeredQuestions solo contendrá los índices de las preguntas respondidas *correctamente*
let answeredQuestions = [];
let unlockedPhases = [1]; // Fases desbloqueadas inicialmente

// Función para crear una tarjeta de pregunta
function createQuestionCard(question, index) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.id = `card-container-${index}`;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index; // Guarda el índice de la pregunta

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerHTML = `
        <p>${question.question}</p>
        <div class="options-container">
            ${question.options.map((option, optionIndex) => `
                <div class="answer-option" data-index="${optionIndex}">${String.fromCharCode(65 + optionIndex)}. ${option}</div>
            `).join('')}
        </div>
    `;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerHTML = ''; // Inicialmente vacío

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    // >>>>>>>>>>>> ELIMINADA: La llamada a flipCard ya no se hace al hacer clic en el card
    // card.addEventListener('click', () => flipCard(card, index));
    // <<<<<<<<<<<<

    return cardContainer;
}

// Función para voltear la tarjeta y verificar la respuesta
// Esta función ahora se llama *desde* el listener de la opción de respuesta
function flipCard(card, questionIndex) {
    // No necesitamos verificar si el contenedor está deshabilitado aquí,
    // porque la lógica de la opción ya lo hizo antes de llamar a flipCard.
    // No necesitamos verificar si ya está volteada aquí,
    // porque la lógica de la opción no llamará a flipCard si ya está volteada.
    // No necesitamos verificar si hay una opción seleccionada,
    // porque la lógica de la opción garantiza que una esté seleccionada antes de llamar.

    const question = questions[questionIndex];
    const cardBack = card.querySelector('.card-back');
    // Obtenemos la opción seleccionada DENTRO de esta tarjeta específica
    const selectedOption = card.querySelector('.answer-option.selected');
    const selectedAnswerIndex = parseInt(selectedOption.dataset.index); // Ahora selectedOption siempre existe aquí
    const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;

    // Voltear la tarjeta
    card.classList.add('flipped');

    // Mostrar la retroalimentación
    let feedbackContent = `<div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">`;
    if (isCorrect) {
        feedbackContent += `✔ Correcto<p>${question.justification}</p>`;
    } else {
        // Para respuesta incorrecta, solo mostramos el icono y texto "Incorrecto"
        feedbackContent += `✖ Incorrecto`;
    }
    feedbackContent += `</div>`;
    cardBack.innerHTML = feedbackContent;

    // Lógica después de mostrar la respuesta
    if (isCorrect) {
        // Si es correcta:
        // 1. Marcar como respondida (para que no se pueda interactuar más con ella)
        if (!answeredQuestions.includes(questionIndex)) {
             answeredQuestions.push(questionIndex);
             // Deshabilitar el contenedor de la tarjeta para evitar más clics
             const cardContainer = card.closest('.card-container'); // Obtener el contenedor aquí
             if (cardContainer) { // Asegurarse de que existe
                 cardContainer.classList.add('disabled');
             }
        }

        // 2. Desbloquear la siguiente fase si aplica
        unlockNextPhase(question.phase + 1);

    } else {
        // Si es incorrecta:
        // 1. NO marcar como respondida
        // 2. NO deshabilitar la tarjeta
        // 3. Quitar la clase 'selected' de la opción y voltear de nuevo después de un breve retraso

        // Quitar la clase 'selected' de todas las opciones (aunque solo haya una con ella)
        card.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        setTimeout(() => {
            // Voltear la tarjeta de nuevo al frente
            card.classList.remove('flipped');
            // Limpiar el contenido del reverso
            cardBack.innerHTML = '';
             // La tarjeta sigue habilitada porque la clase 'disabled' nunca se agregó al contenedor
        }, 3000); // 3000 ms = 3 segundos
    }
}


// Función para desbloquear la siguiente fase
function unlockNextPhase(phaseNumber) {
    // Solo desbloquear si la fase existe (hasta 5 en este caso) y aún no está desbloqueada
    if (phaseNumber <= 5 && !unlockedPhases.includes(phaseNumber)) {
        unlockedPhases.push(phaseNumber);
        console.log(`Fase ${phaseNumber} desbloqueada.`); // Log para depuración

        // Encontrar las tarjetas de la fase recién desbloqueada y habilitarlas
        questions.forEach((question, index) => {
            if (question.phase === phaseNumber) {
                const cardContainer = document.getElementById(`card-container-${index}`);
                 if (cardContainer) { // Asegurarse de que la tarjeta exista
                    // Solo quitar la clase disabled si la tarjeta no ha sido ya respondida correctamente
                    if (!answeredQuestions.includes(index)) {
                         cardContainer.classList.remove('disabled');
                         // Los estilos de opacidad, cursor, pointer-events se manejan por CSS con la clase disabled
                    }
                 }
            }
        });
         // Opcional: agregar algún feedback visual general de que una fase fue desbloqueada
    }
}


// Función para renderizar las preguntas
function renderQuestions() {
    quizContainer.innerHTML = ''; // Limpiar el contenedor
    questions.forEach((question, index) => {
        const cardContainer = createQuestionCard(question, index);
        quizContainer.appendChild(cardContainer);

        // Deshabilitar tarjetas si su fase no está desbloqueada O si ya han sido respondidas CORRECTAMENTE
        if (!unlockedPhases.includes(question.phase) || answeredQuestions.includes(index)) {
            cardContainer.classList.add('disabled');

            // Si ya está respondida correctamente, voltearla al cargar y mostrar justificación
            if (answeredQuestions.includes(index)) {
                 const card = cardContainer.querySelector('.card');
                 const questionData = questions[index];
                 const cardBack = card.querySelector('.card-back');

                 // Encontrar la opción correcta para marcarla como seleccionada si se vuelve a renderizar
                 const correctOption = card.querySelector(`.answer-option[data-index="${questionData.correctAnswerIndex}"]`);
                 if (correctOption) {
                     correctOption.classList.add('selected');
                 }

                 // Mostrar la justificación
                 cardBack.innerHTML = `
                    <div class="feedback correct">
                        ✔ Correcto
                        <p>${questionData.justification}</p>
                    </div>
                 `;
                 card.classList.add('flipped');
            }
        }
    });
    setupAnswerOptionListeners(); // Asigna los event listeners a las opciones después de crear las tarjetas
}

// Función para asignar event listeners a las opciones de respuesta
function setupAnswerOptionListeners() {
     document.querySelectorAll('.answer-option').forEach(option => {
        // Remover listeners existentes (seguridad) antes de añadir uno nuevo
        const oldListener = option.dataset.listener;
        if (oldListener) {
            option.removeEventListener('click', oldListener);
        }

        // Crear nuevo listener
        const newListener = function(event) {
             // >>>>>>>>>> DETENER PROPAGACIÓN <<<<<<<<<<
             // Esto es CRUCIAL para que el clic en la opción NO llegue al contenedor de la tarjeta
             // y cause un comportamiento inesperado si hubiera otros listeners allí.
             event.stopPropagation();

             // Obtener el card y cardContainer
            const card = this.closest('.card');
            const cardContainer = card.closest('.card-container');

            // --- NUEVA VERIFICACIÓN ---
            // Solo permite interactuar si:
            // 1. La tarjeta no está deshabilitada (por fase o ya respondida correctamente)
            // 2. La tarjeta NO está actualmente volteada (mostrando feedback)
            if (cardContainer.classList.contains('disabled') || card.classList.contains('flipped')) {
                return; // No hacer nada si deshabilitada o ya mostrando feedback
            }
            // --------------------------


            // Remover la clase "selected" de todas las opciones en la tarjeta actual
            card.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Agregar la clase "selected" a la opción clickeada
            this.classList.add('selected');

            // >>>>>>>>>> LLAMAR A flipCard AQUÍ <<<<<<<<<<
            // Esto voltea la tarjeta INMEDIATAMENTE después de seleccionar la opción
            const questionIndex = parseInt(card.dataset.index);
            flipCard(card, questionIndex);
            // <<<<<<<<<<<<
        };

        // Añadir el nuevo listener
        option.addEventListener('click', newListener);
        // Guardar referencia al listener (útil si necesitas removerlo después, aunque en este caso quizás no sea estrictamente necesario)
        option.dataset.listener = newListener;
     });
}


// Iniciar el juego
renderQuestions();

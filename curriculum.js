/**
 * Vitruvius - Core Curriculum Database
 * Restructured for 10-year-olds with Theory-First pedagogical approach.
 */

const VITRUVIUS_CURRICULUM = [
  {
    id: "m1",
    title_en: "GenAI Foundations",
    title_es: "Fundamentos de IA Gen",
    description_en: "Learn how the robot brain thinks, reads, and remembers!",
    description_es: "¡Aprende cómo el cerebro robot piensa, lee y recuerda!",
    icon: "🧠",
    lessons: [
      {
        id: "l1_1",
        title_en: "What is an LLM?",
        title_es: "¿Qué es un LLM?",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Imagine a giant robot brain that has read almost every book in the world. When you talk to it, it isn't 'thinking' like a human. Instead, it is playing a super-fast guessing game! It uses math to guess what the next word should be, just like when your friend says 'Once upon a...' and you guess '...time'. This robot brain is called an LLM (Large Language Model).",
            theory_es: "Imagina un cerebro robot gigante que ha leído casi todos los libros del mundo. Cuando le hablas, no está 'pensando' como un humano. ¡Está jugando a adivinar súper rápido! Usa matemáticas para adivinar cuál debería ser la siguiente palabra, igual que cuando tu amigo dice 'Había una...' y tú adivinas '...vez'. A este cerebro robot le llamamos LLM (Modelo de Lenguaje Grande).",
            question_en: "What is the robot brain (LLM) actually doing when you talk to it?",
            question_es: "¿Qué está haciendo realmente el cerebro robot (LLM) cuando le hablas?",
            options_en: [
              "Reading my mind with magic.",
              "Guessing the next logical word super fast.",
              "Secretly searching on Google.",
              "Writing a brand new book from scratch."
            ],
            options_es: [
              "Leyendo mi mente con magia.",
              "Adivinando súper rápido la siguiente palabra lógica.",
              "Buscando en Google en secreto.",
              "Escribiendo un libro nuevo desde cero."
            ],
            answer: 1,
            explanation_en: "That's right! An LLM uses math to predict and guess the next word, just like predicting the end of a sentence.",
            explanation_es: "¡Así es! Un LLM usa matemáticas para predecir y adivinar la siguiente palabra, igual que cuando predices el final de una oración."
          }
        ]
      },
      {
        id: "l1_2",
        title_en: "Tokens (Word Legos)",
        title_es: "Tokens (Legos de Palabras)",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Robots don't read words exactly like we do. Instead, they break words into smaller pieces called 'Tokens', kind of like Lego blocks. For example, the word 'unbelievable' might be broken into three Lego blocks: 'un', 'believ', and 'able'. This helps the robot understand spelling and roots of words better!",
            theory_es: "Los robots no leen las palabras exactamente como nosotros. En su lugar, rompen las palabras en piezas más pequeñas llamadas 'Tokens', casi como bloques de Lego. Por ejemplo, la palabra 'increíble' podría romperse en 'incre' e 'íble'. ¡Esto ayuda al robot a entender mejor cómo se forman las palabras!",
            question_en: "How does the robot read a big word like 'unbelievable'?",
            question_es: "¿Cómo lee el robot una palabra grande como 'increíble'?",
            options_en: [
              "It breaks it into smaller pieces (Tokens) like Lego blocks.",
              "It asks a human to read it out loud.",
              "It ignores big words completely.",
              "It translates every letter into a color."
            ],
            options_es: [
              "La rompe en piezas más pequeñas (Tokens) como bloques de Lego.",
              "Le pide a un humano que la lea en voz alta.",
              "Ignora las palabras grandes por completo.",
              "Traduce cada letra a un color."
            ],
            answer: 0,
            explanation_en: "Correct! Tokens are like Lego blocks that make up words, helping the AI understand text efficiently.",
            explanation_es: "¡Correcto! Los tokens son como bloques de Lego que forman palabras, ayudando a la IA a entender el texto eficientemente."
          }
        ]
      },
      {
        id: "l1_3",
        title_en: "The Context Window",
        title_es: "La Ventana de Contexto",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Have you ever tried to remember a really long list of groceries, but you forgot the first items by the time you reached the end? The robot has a memory limit too, called a 'Context Window'. If your conversation gets too long and fills up the window, the robot will start forgetting the oldest messages you sent!",
            theory_es: "¿Alguna vez has intentado recordar una lista muy larga de compras, pero olvidaste lo primero al llegar al final? El robot también tiene un límite de memoria, llamado 'Ventana de Contexto'. Si tu conversación se hace muy larga y llena la ventana, ¡el robot empezará a olvidar los mensajes más antiguos!",
            question_en: "What happens if your chat is longer than the 'Context Window'?",
            question_es: "¿Qué pasa si tu chat es más largo que la 'Ventana de Contexto'?",
            options_en: [
              "The robot explodes.",
              "The robot starts forgetting the oldest messages.",
              "The robot gets angry and stops talking.",
              "The robot's memory becomes permanent forever."
            ],
            options_es: [
              "El robot explota.",
              "El robot empieza a olvidar los mensajes más antiguos.",
              "El robot se enoja y deja de hablar.",
              "La memoria del robot se vuelve permanente para siempre."
            ],
            answer: 1,
            explanation_en: "Exactly! The context window is like a short-term memory box. When it's full, old things fall out to make room for new things.",
            explanation_es: "¡Exacto! La ventana de contexto es como una caja de memoria a corto plazo. Cuando se llena, las cosas viejas se caen para hacer espacio a las nuevas."
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title_en: "Gemini Mastery",
    title_es: "Maestría en Gemini",
    description_en: "Learn how to give great instructions to your AI robot!",
    description_es: "¡Aprende a darle geniales instrucciones a tu robot IA!",
    icon: "✨",
    lessons: [
      {
        id: "l2_1",
        title_en: "Talking to the Robot",
        title_es: "Hablando con el Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Telling an AI what to do is called 'Prompting'. Imagine giving instructions to a friendly alien who has never visited Earth. If you just say 'Make food', it might cook rocks! You have to be specific: 'Make a peanut butter sandwich using two slices of bread.' Good prompts are clear, specific, and give examples.",
            theory_es: "Decirle a una IA qué hacer se llama 'Prompting'. Imagina darle instrucciones a un alien amigable que nunca ha visitado la Tierra. Si solo dices 'Haz comida', ¡podría cocinar rocas! Tienes que ser específico: 'Haz un sándwich de crema de maní usando dos rebanadas de pan.' Los buenos prompts son claros, específicos y dan ejemplos.",
            question_en: "What is the best way to ask the AI to do something?",
            question_es: "¿Cuál es la mejor manera de pedirle a la IA que haga algo?",
            options_en: [
              "Use just one or two words to save time.",
              "Be clear, specific, and give examples, like talking to an alien.",
              "Shout at it using ALL CAPS.",
              "Ask it to guess what you are thinking."
            ],
            options_es: [
              "Usar solo una o dos palabras para ahorrar tiempo.",
              "Ser claro, específico y dar ejemplos, como al hablar con un alien.",
              "Gritarle usando MAYÚSCULAS.",
              "Pedirle que adivine lo que estás pensando."
            ],
            answer: 1,
            explanation_en: "Spot on! The AI is super smart but needs exact instructions (Prompts) to know exactly what you want.",
            explanation_es: "¡En el blanco! La IA es súper inteligente pero necesita instrucciones exactas (Prompts) para saber justo lo que quieres."
          }
        ]
      },
      {
        id: "l2_2",
        title_en: "Super Senses",
        title_es: "Súper Sentidos",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Did you know Gemini isn't just a text robot? It is 'Multimodal'. That's a fancy word meaning it has super senses! It can see pictures, listen to sounds, watch videos, and read text all at the same time. You can show it a drawing of a monster and ask it to write a story about it!",
            theory_es: "¿Sabías que Gemini no es solo un robot de texto? Es 'Multimodal'. ¡Es una palabra elegante que significa que tiene súper sentidos! Puede ver fotos, escuchar sonidos, ver videos y leer texto, todo al mismo tiempo. ¡Puedes mostrarle un dibujo de un monstruo y pedirle que escriba una historia sobre él!",
            question_en: "What does it mean when we say Gemini is 'Multimodal'?",
            question_es: "¿Qué significa cuando decimos que Gemini es 'Multimodal'?",
            options_en: [
              "It can only talk in multiple languages.",
              "It can see, hear, watch, and read all at the same time.",
              "It can drive multiple cars at once.",
              "It has multiple robot friends."
            ],
            options_es: [
              "Que solo puede hablar en múltiples idiomas.",
              "Que puede ver, escuchar, mirar videos y leer, todo a la vez.",
              "Que puede conducir múltiples autos a la vez.",
              "Que tiene múltiples amigos robots."
            ],
            answer: 1,
            explanation_en: "Yes! Multimodal means 'multiple modes', like vision, audio, and text, making the AI understand the world just like we do.",
            explanation_es: "¡Sí! Multimodal significa 'múltiples modos', como visión, audio y texto, haciendo que la IA entienda el mundo como nosotros."
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title_en: "NotebookLM",
    title_es: "NotebookLM",
    description_en: "Turn your boring notes into a magical study guide and podcast!",
    description_es: "¡Convierte tus notas aburridas en una guía mágica y podcast!",
    icon: "🎙️",
    lessons: [
      {
        id: "l3_1",
        title_en: "The Smart Parrot",
        title_es: "El Loro Inteligente",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "NotebookLM is like a super smart parrot that ONLY knows how to talk about the books or notes you give it. This is called 'Grounding'. Because it's 'grounded' in your notes, it won't make up fake stories (which we call hallucinations). It acts like an open-book test!",
            theory_es: "NotebookLM es como un loro súper inteligente que SOLO sabe hablar sobre los libros o notas que tú le das. Esto se llama 'Grounding' (Anclaje). Como está 'anclado' a tus notas, no inventará historias falsas (a lo que llamamos alucinaciones). ¡Actúa como un examen a libro abierto!",
            question_en: "Why doesn't NotebookLM make up fake stories (hallucinate)?",
            question_es: "¿Por qué NotebookLM no inventa historias falsas (alucina)?",
            options_en: [
              "Because it is grounded and only allowed to talk about the notes you gave it.",
              "Because robots cannot tell lies.",
              "Because it searches Wikipedia for everything.",
              "Because it is afraid of getting in trouble."
            ],
            options_es: [
              "Porque está anclado y solo se le permite hablar sobre las notas que tú le diste.",
              "Porque los robots no pueden decir mentiras.",
              "Porque busca todo en Wikipedia.",
              "Porque tiene miedo de meterse en problemas."
            ],
            answer: 0,
            explanation_en: "Awesome! Grounding keeps the AI focused strictly on your facts, making it the perfect study buddy.",
            explanation_es: "¡Asombroso! El anclaje mantiene a la IA enfocada estrictamente en tus datos, haciéndola el compañero de estudio perfecto."
          }
        ]
      },
      {
        id: "l3_2",
        title_en: "Robot Podcasts",
        title_es: "Podcasts de Robots",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Reading long documents can be boring. NotebookLM has a magical feature called 'Audio Overviews'. With one click, it turns your notes into a super fun radio show (a podcast) where two AI hosts joke, chat, and explain your homework out loud so you can listen while you play!",
            theory_es: "Leer documentos largos puede ser aburrido. NotebookLM tiene una función mágica llamada 'Audio Overviews' (Resúmenes de Audio). Con un clic, convierte tus notas en un programa de radio súper divertido (un podcast) donde dos presentadores IA bromean, charlan y explican tu tarea en voz alta para que escuches mientras juegas.",
            question_en: "What do 'Audio Overviews' do to your notes?",
            question_es: "¿Qué le hacen los 'Resúmenes de Audio' a tus notas?",
            options_en: [
              "They delete your notes completely.",
              "They translate your notes to alien languages.",
              "They turn your notes into a fun conversational podcast with two AI hosts.",
              "They print your notes on paper."
            ],
            options_es: [
              "Borran tus notas por completo.",
              "Traducen tus notas a idiomas alienígenas.",
              "Convierten tus notas en un divertido podcast conversacional con dos presentadores IA.",
              "Imprimen tus notas en papel."
            ],
            answer: 2,
            explanation_en: "Yes! Audio Overviews are amazing because they make learning auditory and entertaining.",
            explanation_es: "¡Sí! Los Resúmenes de Audio son increíbles porque hacen que el aprendizaje sea auditivo y entretenido."
          }
        ]
      }
    ]
  },
  {
    id: "m4",
    title_en: "Google AI Studio",
    title_es: "Google AI Studio",
    description_en: "The secret laboratory where you build your own AI!",
    description_es: "¡El laboratorio secreto donde construyes tu propia IA!",
    icon: "🧪",
    lessons: [
      {
        id: "l4_1",
        title_en: "API Keys (The Secret Key)",
        title_es: "API Keys (La Llave Secreta)",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "To build apps with AI, you need a secret password called an 'API Key'. It's like a golden ticket to the robot factory. You must NEVER share your API Key on the internet or put it in public code, because bad guys could use it to control your robots and you would have to pay the bill!",
            theory_es: "Para hacer apps con IA, necesitas una contraseña secreta llamada 'API Key' (Clave API). Es como un boleto dorado a la fábrica de robots. NUNCA debes compartir tu API Key en internet ni ponerla en código público, porque los villanos podrían usarla para controlar a tus robots ¡y tú tendrías que pagar la cuenta!",
            question_en: "Why should you keep your API Key a secret?",
            question_es: "¿Por qué debes mantener tu API Key en secreto?",
            options_en: [
              "Because it looks ugly.",
              "So bad guys don't use your robots and run up your bill.",
              "Because the robot will get sad if people see it.",
              "Because it is a magical spell."
            ],
            options_es: [
              "Porque se ve fea.",
              "Para que los villanos no usen tus robots y suban tu factura.",
              "Porque el robot se pondrá triste si la gente la ve.",
              "Porque es un hechizo mágico."
            ],
            answer: 1,
            explanation_en: "Right! API Keys are like your credit card for AI; always keep them hidden in safe environments like a server.",
            explanation_es: "¡Correcto! Las Claves API son como tu tarjeta de crédito para IA; siempre mantenlas ocultas en entornos seguros como un servidor."
          }
        ]
      },
      {
        id: "l4_2",
        title_en: "The Temperature Slider",
        title_es: "El Control de Temperatura",
        xp: 15,
        cards: [
          {
            type: "slider",
            theory_en: "In AI Studio, there is a fun slider called 'Temperature'. It doesn't make the robot hot or cold! If you set Temperature to 0, the robot is serious and always gives the same exact predictable answer. If you set it to 1 or higher, the robot gets crazy, creative, and tells wild stories!",
            theory_es: "En AI Studio, hay un control deslizante divertido llamado 'Temperatura'. ¡No hace que el robot tenga frío o calor! Si pones la Temperatura en 0, el robot es serio y siempre da la misma respuesta predecible. Si la pones en 1 o más, el robot se vuelve loco, creativo y cuenta historias salvajes.",
            param: "temperature",
            target: 0.0,
            question_en: "Move the slider to make the robot super serious, mathematical, and predictable (No creativity).",
            question_es: "Mueve el control para que el robot sea súper serio, matemático y predecible (Cero creatividad).",
            options_en: {
              min_label: "0.0 (Serious)",
              max_label: "1.0 (Crazy)"
            },
            explanation_en: "Correct! A temperature of 0 makes the AI completely deterministic and logical.",
            explanation_es: "¡Correcto! Una temperatura de 0 hace que la IA sea completamente determinista y lógica."
          }
        ]
      },
      {
        id: "l4_3",
        title_en: "System Instructions",
        title_es: "Instrucciones del Sistema",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "You can give the AI a permanent personality using 'System Instructions'. It's like putting a costume on the robot before it wakes up. If you give it a System Instruction that says 'You are a pirate', it will talk like a pirate forever, no matter what questions the user asks it later!",
            theory_es: "Puedes darle a la IA una personalidad permanente usando 'Instrucciones del Sistema'. Es como ponerle un disfraz al robot antes de que despierte. Si le das una Instrucción del Sistema que dice 'Eres un pirata', hablará como un pirata para siempre, sin importar qué le pregunten los usuarios después.",
            question_en: "What does a 'System Instruction' do?",
            question_es: "¿Qué hace una 'Instrucción del Sistema'?",
            options_en: [
              "It turns off the computer system.",
              "It gives the robot a permanent costume or personality before chatting starts.",
              "It makes the robot speak only in math.",
              "It changes the volume of the speakers."
            ],
            options_es: [
              "Apaga el sistema de la computadora.",
              "Le da al robot un disfraz o personalidad permanente antes de que inicie el chat.",
              "Hace que el robot hable solo en matemáticas.",
              "Cambia el volumen de los parlantes."
            ],
            answer: 1,
            explanation_en: "Spot on! System instructions rule above everything else, keeping the AI character consistent.",
            explanation_es: "¡En el blanco! Las instrucciones del sistema dominan sobre todo lo demás, manteniendo el personaje de la IA constante."
          }
        ]
      }
    ]
  }
];

// If in Node module scope, export, otherwise bind to global window
if (typeof module !== "undefined" && module.exports) {
  module.exports = VITRUVIUS_CURRICULUM;
} else {
  window.VITRUVIUS_CURRICULUM = VITRUVIUS_CURRICULUM;
}

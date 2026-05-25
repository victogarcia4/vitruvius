/**
 * Vitruvius - Core Curriculum Database
 * Restructured for 10-year-olds with a Theory-First pedagogical approach.
 * Contains exactly 10 lessons per module across 4 modules (40 lessons total).
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
      },
      {
        id: "l1_4",
        title_en: "Pre-training",
        title_es: "Pre-entrenamiento",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Before a robot brain can talk to you, it must go to the ultimate 'Giant School'. In Pre-training, engineers let the robot read billions of pages from the internet, books, and articles. It doesn't memorize them, but it learns how words connect together, like a toddler listening to adults talk for years!",
            theory_es: "Antes de que un cerebro robot pueda hablarte, debe ir a la 'Gran Escuela Gigante'. En el Pre-entrenamiento, los ingenieros leen al robot miles de millones de páginas de internet, libros y artículos. No se los memoriza, pero aprende cómo se conectan las palabras entre sí, ¡como un bebé escuchando hablar a los adultos por años!",
            question_en: "What happens during the 'Pre-training' phase of an AI?",
            question_es: "¿Qué sucede durante la fase de 'Pre-entrenamiento' de una IA?",
            options_en: [
              "It gets plugged into a charger.",
              "It reads vast amounts of text to learn word patterns.",
              "It learns to do physical robot chores.",
              "It is given a secret username."
            ],
            options_es: [
              "Se le conecta a un cargador de batería.",
              "Lee enormes cantidades de texto para aprender patrones de palabras.",
              "Aprende a hacer tareas físicas del hogar.",
              "Se le asigna un nombre de usuario secreto."
            ],
            answer: 1,
            explanation_en: "Spot on! Pre-training is the massive reading school that teaches the AI how grammar and broad human facts work.",
            explanation_es: "¡En el blanco! El pre-entrenamiento es la gran escuela de lectura que enseña a la IA cómo funciona la gramática y los datos generales de la humanidad."
          }
        ]
      },
      {
        id: "l1_5",
        title_en: "Fine-tuning",
        title_es: "Ajuste Fino",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "After reading the whole internet, the robot knows a lot, but it is wild! It might talk rudely or share bad secrets. To make it a good citizen, we do 'Fine-tuning'. This is like a parent or coach teaching the robot manners, safety rules, and how to give helpful, polite answers to your questions.",
            theory_es: "Después de leer todo el internet, el robot sabe mucho, ¡pero es muy salvaje! Podría hablar con groserías o revelar secretos malos. Para convertirlo en un buen ciudadano, hacemos el 'Ajuste Fino'. Esto es como un padre o entrenador enseñando al robot modales, reglas de seguridad y cómo dar respuestas amables y útiles.",
            question_en: "Why do we need 'Fine-tuning' after pre-training?",
            question_es: "¿Por qué necesitamos el 'Ajuste Fino' después del pre-entrenamiento?",
            options_en: [
              "To make the robot run faster on your laptop.",
              "To teach the robot manners, safety, and helpful behaviors.",
              "To make the robot color-blind.",
              "To delete the robot's memory completely."
            ],
            options_es: [
              "Para hacer que el robot corra más rápido en tu laptop.",
              "Para enseñar al robot modales, seguridad y comportamientos útiles.",
              "Para hacer que el robot sea daltónico.",
              "Para borrar la memoria del robot por completo."
            ],
            answer: 1,
            explanation_en: "Excellent! Fine-tuning guides the raw, wild knowledge of the AI into a safe, helpful virtual assistant.",
            explanation_es: "¡Excelente! El ajuste fino guía el conocimiento salvaje de la IA hacia un asistente virtual seguro y útil."
          }
        ]
      },
      {
        id: "l1_6",
        title_en: "Hallucinations",
        title_es: "Alucinaciones",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Sometimes, the robot brain is asked a question it doesn't know. Instead of saying 'I don't know', it wants to please you so much that it makes up a fake story with extreme confidence! We call these confident lies 'Hallucinations' (or robot dreams). Always double-check important facts!",
            theory_es: "A veces, se le pregunta al robot algo que no sabe. En lugar de decir 'no sé', quiere complacerte tanto que ¡inventa una historia falsa con muchísima seguridad! A estas mentiras seguras las llamamos 'Alucinaciones' (o sueños de robot). ¡Siempre verifica los datos importantes!",
            question_en: "What is an AI 'Hallucination'?",
            question_es: "¿Qué es una 'Alucinación' en la IA?",
            options_en: [
              "When the robot falls asleep and shuts down.",
              "When the robot confidently makes up a fake fact or story.",
              "When the screen flashes multiple neon colors.",
              "When the robot translates text into sound waves."
            ],
            options_es: [
              "Cuando el robot se queda dormido y se apaga.",
              "Cuando el robot inventa con mucha seguridad un hecho o historia falsa.",
              "Cuando la pantalla parpadea con múltiples colores neón.",
              "Cuando el robot traduce texto a ondas de sonido."
            ],
            answer: 1,
            explanation_en: "Precisely! Hallucinations occur because LLMs predict words based on probability rather than checking a database of absolute truths.",
            explanation_es: "¡Precisamente! Las alucinaciones ocurren porque los LLMs predicen palabras basadas en probabilidades en lugar de verificar una base de datos de verdades absolutas."
          }
        ]
      },
      {
        id: "l1_7",
        title_en: "Embeddings (Word Maps)",
        title_es: "Embeddings (Mapas de Palabras)",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "How do robots understand what words mean? They draw a secret 'Word Island Map' called Embeddings! In this mathematical map, words with similar meanings are placed close together. For example, 'cat' and 'kitten' are placed on Pet Island, while 'astronaut' and 'galaxy' are on Space Island!",
            theory_es: "¿Cómo entienden los robots el significado de las palabras? ¡Dibujan un 'Mapa de Islas de Palabras' secreto llamado Embeddings! En este mapa matemático, las palabras con significados similares se colocan muy cerca. Por ejemplo, 'gato' y 'gatito' se ubican en la Isla Mascota, mientras que 'astronauta' y 'galaxia' están en la Isla Espacio.",
            question_en: "What do Embeddings do in an AI system?",
            question_es: "¿Qué hacen los Embeddings en un sistema de IA?",
            options_en: [
              "They delete duplicate files to save drive space.",
              "They map words mathematically so similar meanings sit close together.",
              "They paint colored borders around paragraph boxes.",
              "They turn passwords into star symbols."
            ],
            options_es: [
              "Borran archivos duplicados para ahorrar espacio en disco.",
              "Mapean palabras matemáticamente para que significados similares estén cerca.",
              "Pintan bordes de colores alrededor de las cajas de párrafos.",
              "Convierten las contraseñas en símbolos de estrellas."
            ],
            answer: 1,
            explanation_en: "Fantastic! Embeddings convert words into long lists of numbers that represent coordinates on a conceptual map.",
            explanation_es: "¡Fantástico! Los embeddings convierten las palabras en largas listas de números que representan coordenadas en un mapa conceptual."
          }
        ]
      },
      {
        id: "l1_8",
        title_en: "Neural Networks",
        title_es: "Redes Neuronales",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Inside the robot, there is a giant digital spiderweb called a 'Neural Network'. It is inspired by the tiny neurons in your human brain! Each point in the web receives a tiny piece of information, does a small math puzzle, and passes the result along. Together, millions of these points solve massive prompts!",
            theory_es: "Dentro del robot hay una telaraña digital gigante llamada 'Red Neuronal'. ¡Está inspirada en las diminutas neuronas de tu cerebro humano! Cada punto en la red recibe una pequeña pieza de información, resuelve un pequeño acertijo matemático y pasa el resultado. ¡Juntos, millones de estos puntos resuelven prompts gigantes!",
            question_en: "What is a Neural Network?",
            question_es: "¿Qué es una Red Neuronal?",
            options_en: [
              "A real spider web made of smart steel.",
              "A digital math web inspired by human brain connections.",
              "A group of computers connected by standard blue cables.",
              "A secret radio signal sent from satellites."
            ],
            options_es: [
              "Una telaraña real hecha de acero inteligente.",
              "Una red matemática digital inspirada en las conexiones del cerebro humano.",
              "Un grupo de computadoras conectadas por cables azules estándar.",
              "Una señal de radio secreta enviada desde los satélites."
            ],
            answer: 1,
            explanation_en: "Correct! Neural networks consist of layers of simulated node neurons that train mathematically to recognize complex patterns.",
            explanation_es: "¡Correcto! Las redes neuronales consisten en capas de neuronas nodo simuladas que se entrenan matemáticamente para reconocer patrones complejos."
          }
        ]
      },
      {
        id: "l1_9",
        title_en: "Artist vs Detective",
        title_es: "Artista vs Detective",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "There are two main types of AI: 'Generative' (The Artist) and 'Discriminative' (The Detective). The Detective AI looks at a picture of a pet and classifies it: 'Yes, that is a dog!' The Artist AI (Generative AI) does something magical: it picks up a digital brush and paints a brand-new, never-before-seen puppy from its imagination!",
            theory_es: "Hay dos tipos principales de IA: la 'Generativa' (El Artista) y la 'Discriminativa' (El Detective). El Detective IA mira una foto de una mascota y la clasifica: '¡Sí, es un perro!'. La IA Artista (IA Generativa) hace algo mágico: toma un pincel digital y ¡pinta un perrito nuevo nunca antes visto usando su imaginación!",
            question_en: "What is the superpower of Generative AI (The Artist)?",
            question_es: "¿Cuál es el superpoder de la IA Generativa (El Artista)?",
            options_en: [
              "It classifies files into folders very cleanly.",
              "It creates brand-new content like text, images, or music from scratch.",
              "It checks if your password has spelling mistakes.",
              "It counts how many items are in a photo."
            ],
            options_es: [
              "Clasifica archivos en carpetas muy limpiamente.",
              "Crea contenido totalmente nuevo como texto, imágenes o música desde cero.",
              "Verifica si tu contraseña tiene errores de ortografía.",
              "Cuenta cuántos objetos hay en una foto."
            ],
            answer: 1,
            explanation_en: "Spot on! Generative AI generates new conceptual outputs instead of just analyzing or classifying existing datasets.",
            explanation_es: "¡En el blanco! La IA generativa genera nuevos resultados conceptuales en lugar de solo analizar o clasificar conjuntos de datos existentes."
          }
        ]
      },
      {
        id: "l1_10",
        title_en: "The Prompt Magic",
        title_es: "La Magia del Prompt",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "If the robot brain is a magical genie inside a computer lamp, the words you type are the magic spell! In the AI world, we call these spells 'Prompts'. If you write a sloppy prompt, you get a sloppy response. If you write a perfect prompt, the robot will perform incredible feats like summarizing books or coding games!",
            theory_es: "Si el cerebro robot es un genio mágico dentro de una lámpara de computadora, ¡las palabras que escribes son el hechizo mágico! En el mundo de la IA, a estos hechizos los llamamos 'Prompts'. Si escribes un prompt descuidado, obtendrás una respuesta descuidada. ¡Si escribes un prompt perfecto, el robot hará hazañas increíbles!",
            question_en: "What is a 'Prompt' in Generative AI?",
            question_es: "¿Qué es un 'Prompt' en IA Generativa?",
            options_en: [
              "The speed at which the computer loads web pages.",
              "The instructions or text input you give to the AI to get a result.",
              "A hardware plug in the back of the device.",
              "A security password used to login to Google."
            ],
            options_es: [
              "La velocidad a la que la computadora carga las páginas web.",
              "Las instrucciones o texto de entrada que le das a la IA para obtener un resultado.",
              "Un enchufe de hardware en la parte trasera del dispositivo.",
              "Una contraseña de seguridad utilizada para iniciar sesión en Google."
            ],
            answer: 1,
            explanation_en: "Hooray! Prompts are the interface of the generative era—guiding the AI's math toward the exact output you need.",
            explanation_es: "¡Hurra! Los prompts son la interfaz de la era generativa—guiando las matemáticas de la IA hacia el resultado exacto que necesitas."
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
      },
      {
        id: "l2_3",
        title_en: "Flash vs Pro",
        title_es: "Flash vs Pro",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Gemini has two main siblings: Gemini 1.5 'Flash' and Gemini 1.5 'Pro'. Flash is like a super speedy runner—it responds in milliseconds, uses less battery, and is very cheap. Pro is like a wise wizard—it takes a bit longer to think, but it can solve extremely hard riddles, code software, and write complex math formulas!",
            theory_es: "Gemini tiene dos hermanos principales: Gemini 1.5 'Flash' y Gemini 1.5 'Pro'. Flash es como un corredor veloz: responde en milisegundos, consume menos recursos y es muy económico. Pro es como un mago sabio: tarda un poco más en pensar, ¡pero resuelve acertijos súper difíciles y matemáticas complejas!",
            question_en: "When should you choose Gemini 1.5 'Pro' over 'Flash'?",
            question_es: "¿Cuándo deberías elegir Gemini 1.5 'Pro' sobre 'Flash'?",
            options_en: [
              "When you need a quick simple response in a split second.",
              "When you need to solve a highly complex coding or math puzzle.",
              "When your internet connection is completely offline.",
              "When you want to display green buttons instead of cyan ones."
            ],
            options_es: [
              "Cuando necesitas una respuesta simple y rápida en una fracción de segundo.",
              "Cuando necesitas resolver un problema complejo de programación o matemáticas.",
              "Cuando tu conexión a internet está desconectada por completo.",
              "Cuando quieres mostrar botones verdes en lugar de cian."
            ],
            answer: 1,
            explanation_en: "Correct! Pro offers advanced reasoning and higher complexity processing, while Flash is optimized for speed and cost-efficiency.",
            explanation_es: "¡Correcto! Pro ofrece un razonamiento avanzado para alta complejidad, mientras que Flash está optimizado para velocidad y economía."
          }
        ]
      },
      {
        id: "l2_4",
        title_en: "Temperature Dial",
        title_es: "Control de Temperatura",
        xp: 15,
        cards: [
          {
            type: "slider",
            theory_en: "Inside Gemini's control panel, there is a slider called 'Temperature'. If you turn it down to 0, the robot becomes a serious scientist who always chooses the safest, most logical answer. If you turn it up to 1 or higher, the robot puts on party glasses and becomes a wild, highly creative storyteller!",
            theory_es: "Dentro del panel de Gemini hay un control llamado 'Temperatura'. Si lo bajas a 0, el robot se vuelve un científico serio que siempre elige la respuesta más lógica y segura. Si lo subes a 1 o más, el robot se pone lentes de fiesta ¡y se vuelve un narrador de historias súper loco y creativo!",
            param: "temperature",
            target: 0.0,
            question_en: "Set the slider to make the robot super serious, mathematical, and predictable (No creativity).",
            question_es: "Mueve el control para que el robot sea súper serio, matemático y predecible (Cero creatividad).",
            options_en: {
              min_label: "0.0 (Serious)",
              max_label: "1.0 (Crazy)"
            },
            options_es: {
              min_label: "0.0 (Serio)",
              max_label: "1.0 (Creativo)"
            },
            explanation_en: "A temperature of 0 ensures high consistency and predictability, ideal for programming and data queries.",
            explanation_es: "Una temperatura de 0 asegura alta consistencia y predictibilidad, ideal para programación y consultas de datos."
          }
        ]
      },
      {
        id: "l2_5",
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
      },
      {
        id: "l2_6",
        title_en: "Prompt Guardrails",
        title_es: "Cajas de Prompts",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When users type text into your app, the robot can get confused about what is your instruction and what is the user's input. To prevent this, we use 'Delimiters' like Triple Quotes `\"\"\"` or triple dashes `---` to act as guardrails, enclosing the user content in a secure cage!",
            theory_es: "Cuando los usuarios escriben en tu app, el robot puede confundir tu instrucción con el texto del usuario. Para evitar esto, usamos 'Delimitadores' como comillas triples `\"\"\"` o guiones triples `---` que actúan como barandillas, ¡encerrando el contenido del usuario en una jaula segura!",
            question_en: "Why do we use delimiters like triple quotes `\"\"\"` in prompts?",
            question_es: "¿Por qué usamos delimitadores como comillas triples `\"\"\"` en los prompts?",
            options_en: [
              "To make the code look pretty.",
              "To isolate user content so the AI doesn't mix instructions and data.",
              "To unlock hidden premium features in Gemini.",
              "To convert letters into capital letters automatically."
            ],
            options_es: [
              "Para que el código se vea bonito.",
              "Para aislar el contenido del usuario y que la IA no confunda instrucciones con datos.",
              "Para desbloquear funciones premium ocultas en Gemini.",
              "Para convertir letras a mayúsculas automáticamente."
            ],
            answer: 1,
            explanation_en: "Perfect! Delimiters separate prompt engineering structure from raw variable inputs, preventing prompt injections.",
            explanation_es: "¡Perfecto! Los delimitadores separan la estructura de ingeniería del prompt de las entradas crudas, evitando inyecciones de prompts."
          }
        ]
      },
      {
        id: "l2_7",
        title_en: "Top-P (Word Raffle)",
        title_es: "Top-P (Rifa de Palabras)",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When choosing the next word, Gemini does a mathematical raffle. 'Top-P' controls which word raffle tickets are allowed! If Top-P is low (like 0.1), Gemini only allows the absolute best, most popular tickets to enter the draw. If Top-P is high (like 0.95), Gemini allows less common, surprise tickets to win, giving you more creative answers!",
            theory_es: "Al elegir la siguiente palabra, Gemini hace una rifa matemática. ¡'Top-P' controla qué boletos de palabras pueden entrar! Si Top-P es bajo (como 0.1), Gemini solo permite que participen los mejores boletos y más populares. Si Top-P es alto (como 0.95), permite que boletos poco comunes ganen, ¡dándote respuestas creativas!",
            question_en: "What happens when you set the 'Top-P' value very low?",
            question_es: "¿Qué pasa cuando configuras el valor de 'Top-P' muy bajo?",
            options_en: [
              "The robot chooses only from the most highly predictable words.",
              "The robot ignores all spelling rules.",
              "The robot stops responding completely.",
              "The robot speaks only in numbers."
            ],
            options_es: [
              "El robot elige únicamente entre las palabras más altamente predecibles.",
              "El robot ignora todas las reglas de ortografía.",
              "El robot deja de responder por completo.",
              "El robot habla solo en números."
            ],
            answer: 0,
            explanation_en: "Exactly! A low Top-P cuts off the long tail of word possibilities, keeping choices restricted to high-probability options.",
            explanation_es: "¡Exacto! Un Top-P bajo recorta la cola larga de palabras posibles, restringiendo las opciones a las de alta probabilidad."
          }
        ]
      },
      {
        id: "l2_8",
        title_en: "Top-K (The Top List)",
        title_es: "Top-K (La Lista de Mejores)",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Similar to Top-P, 'Top-K' sets a strict limit on the number of word competitors allowed! If Top-K is 40, the robot only looks at the absolute top 40 best words in its dictionary to guess next, ignoring all other millions of words. It's like only letting the top 40 athletes run in a race!",
            theory_es: "Similar a Top-P, ¡'Top-K' establece un límite estricto en el número de palabras competidoras permitidas! Si Top-K es 40, el robot solo mirará las 40 mejores palabras de su diccionario para adivinar la siguiente, ignorando todas las demás. ¡Es como dejar correr en la carrera únicamente a los 40 mejores atletas!",
            question_en: "What does a Top-K setting of 40 mean?",
            question_es: "¿Qué significa una configuración de Top-K de 40?",
            options_en: [
              "The robot can only generate 40 characters in its output.",
              "The robot only samples the next word from the top 40 most probable words.",
              "The model requires 40 CPU cores to run.",
              "The app will cost 40 dollars a month."
            ],
            options_es: [
              "El robot solo puede generar 40 caracteres en su respuesta.",
              "El robot solo selecciona la siguiente palabra de entre las 40 más probables.",
              "El modelo requiere 40 núcleos de CPU para funcionar.",
              "La aplicación costará 40 dólares al mes."
            ],
            answer: 1,
            explanation_en: "Brilliant! Top-K places a hard count limit on the vocabulary selection pool before sampling the word token.",
            explanation_es: "¡Brillante! Top-K coloca un límite de conteo duro en el pool de selección de vocabulario antes de muestrear el token de la palabra."
          }
        ]
      },
      {
        id: "l2_9",
        title_en: "The Robot Backpack",
        title_es: "La Mochila Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Sometimes the robot doesn't know what the weather is today or what video was posted on YouTube 5 minutes ago. To fix this, Gemini puts on a 'Robot Backpack' called Gemini Extensions! These extensions allow Gemini to jump out of its brain and search YouTube, Google Flights, Google Maps, or your Gmail in real-time!",
            theory_es: "A veces el robot no sabe qué clima hace hoy o qué video se subió a YouTube hace 5 minutos. Para solucionarlo, ¡Gemini se pone una 'Mochila Robot' llamada Extensiones de Gemini! Estas permiten a Gemini saltar de su cerebro y buscar en YouTube, Google Vuelos, Google Maps o tu Gmail en tiempo real.",
            question_en: "How do Gemini Extensions help the AI?",
            question_es: "¿Cómo ayudan las Extensiones de Gemini a la IA?",
            options_en: [
              "They make the robot speak in funny robotic sound waves.",
              "They let the AI connect to real-time external tools and Google services dynamically.",
              "They download a copy of the internet onto your phone storage.",
              "They automatically charge your phone battery."
            ],
            options_es: [
              "Hacen que el robot hable con ondas de sonido robóticas y graciosas.",
              "Permiten a la IA conectarse dinámicamente con herramientas externas y servicios de Google en tiempo real.",
              "Descargan una copia de internet en el almacenamiento de tu teléfono.",
              "Cargan la batería de tu teléfono automáticamente."
            ],
            answer: 1,
            explanation_en: "Excellent! Extensions give Gemini agency to call real external APIs, bridging offline reasoning with live digital actions.",
            explanation_es: "¡Excelente! Las extensiones le otorgan a Gemini la capacidad de llamar a APIs externas reales, uniendo el razonamiento con acciones digitales en vivo."
          }
        ]
      },
      {
        id: "l2_10",
        title_en: "Show and Tell",
        title_es: "Mostrar y Contar",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "If you want the robot to write a poem or format data in a very specific way, don't just explain the rules. Use 'Show and Tell' (Few-shot prompting)! Show the robot two or three examples of input and output first. When you show it examples, the math brain instantly understands the pattern and copies it perfectly!",
            theory_es: "Si quieres que el robot escriba un poema o le dé formato a tus datos de forma muy específica, no solo le expliques las reglas. ¡Usa 'Mostrar y Contar' (Few-shot prompting)! Primero muéstrale dos o tres ejemplos resueltos de entrada y salida. ¡El cerebro matemático entenderá al instante el patrón y lo copiará!",
            question_en: "What is the key technique of 'Few-shot' prompting?",
            question_es: "¿Cuál es la técnica clave en el prompting de 'Pocos Pasos' (Few-shot)?",
            options_en: [
              "Giving the AI only a few words in your instruction.",
              "Providing two or three completed examples of input/output in your prompt.",
              "Shouting at the robot until it understands your instructions.",
              "Asking the robot to solve the problem in few seconds."
            ],
            options_es: [
              "Darle a la IA pocas palabras en tu instrucción.",
              "Proporcionar dos o tres ejemplos resueltos de entrada/salida dentro de tu prompt.",
              "Gritarle al robot hasta que entienda tus instrucciones.",
              "Pedirle al robot que resuelva el problema en pocos segundos."
            ],
            answer: 1,
            explanation_en: "Hooray! Few-shot prompting is highly robust, using in-context learning to teach formatting without weight-tuning.",
            explanation_es: "¡Hurra! El prompting few-shot es altamente robusto, usando aprendizaje en el contexto para enseñar formatos sin necesidad de reentrenar."
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
      },
      {
        id: "l3_3",
        title_en: "Magic Cheat Sheet",
        title_es: "La Guía Mágica",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When you upload messy files to NotebookLM, it doesn't just store them. It creates a 'Magic Cheat Sheet' called a Study Guide! With one click, it organizes all your random notes into a neat timeline of events, a list of definitions for key terms, and a set of practice questions to test your knowledge!",
            theory_es: "Cuando subes notas desordenadas a NotebookLM, no solo las guarda. ¡Crea una 'Guía Mágica' llamada Guía de Estudio! Con un clic, organiza tus notas aleatorias en una línea de tiempo ordenada, una lista de definiciones de términos clave y una serie de preguntas de práctica para ponerte a prueba.",
            question_en: "What is a NotebookLM Study Guide?",
            question_es: "¿Qué es una Guía de Estudio de NotebookLM?",
            options_en: [
              "A hardback physical textbook delivered by mail.",
              "An automatically generated study sheet with definitions, timelines, and quiz questions.",
              "An app that blocks you from playing games.",
              "A system that grades your homework with points."
            ],
            options_es: [
              "Un libro físico de tapa dura enviado por correo.",
              "Una guía de estudio generada automáticamente con definiciones, líneas de tiempo y autoevaluaciones.",
              "Una aplicación que te bloquea jugar videojuegos.",
              "Un sistema que califica tu tarea con puntos."
            ],
            answer: 1,
            explanation_en: "Splendid! The study guide synthesizes scattered inputs into cohesive pedagogical aids, speeding up revision.",
            explanation_es: "¡Espléndido! La guía de estudio sintetiza entradas dispersas en ayudas pedagógicas cohesivas, acelerando la revisión."
          }
        ]
      },
      {
        id: "l3_4",
        title_en: "The Robot Feed",
        title_es: "La Comida del Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "NotebookLM loves to eat information! The documents you upload are its favorite 'Robot Feed'. You can feed it PDF schoolbooks, Google Docs, copy-pasted text, or even public website links. Once it eats them, it knows everything inside them, ready to answer your questions instantly!",
            theory_es: "¡A NotebookLM le encanta comer información! Los documentos que subes son su 'Comida Robot' favorita. Puedes alimentarlo con libros escolares en PDF, Google Docs, texto copiado o enlaces a páginas web. Una vez que se los come, sabe todo lo que hay dentro, ¡listo para responder tus dudas!",
            question_en: "What kind of information can you feed into NotebookLM?",
            question_es: "¿Qué tipo de información puedes darle a NotebookLM?",
            options_en: [
              "Physical books placed next to the screen.",
              "Digital sources like PDFs, Google Docs, website links, and pasted text.",
              "Voice commands shouted into the microphone.",
              "Encrypted zip files containing system software."
            ],
            options_es: [
              "Libros físicos colocados al lado de la pantalla.",
              "Fuentes digitales como PDFs, Google Docs, enlaces web y texto pegado.",
              "Comandos de voz gritados al micrófono.",
              "Archivos zip encriptados que contienen software del sistema."
            ],
            answer: 1,
            explanation_en: "Spot on! NotebookLM ingests standard digital text layers from files and URLs, compiling them into a local study corpus.",
            explanation_es: "¡En el blanco! NotebookLM ingiere capas de texto digital estándar de archivos y URLs, compilándolas en un corpus de estudio local."
          }
        ]
      },
      {
        id: "l3_5",
        title_en: "The Truth Stamps",
        title_es: "Los Sellos de la Verdad",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When NotebookLM answers a question about your science notes, it doesn't ask you to just trust it. It prints a 'Truth Stamp' called a Citation! Next to its answer, you will see a little number box. If you click it, it opens your notes and highlights the exact sentence where it found the answer, proving it is telling the absolute truth!",
            theory_es: "Cuando NotebookLM responde a una pregunta sobre tus notas de ciencias, no te pide que confíes a ciegas. ¡Imprime un 'Sello de la Verdad' llamado Cita! Al lado de su respuesta verás un número pequeño. Si haces clic en él, abrirá tus notas y resaltará la oración exacta de donde sacó la respuesta.",
            question_en: "What do 'Citations' (Truth Stamps) do in NotebookLM?",
            question_es: "¿Qué hacen las 'Citas' (Sellos de la Verdad) en NotebookLM?",
            options_en: [
              "They delete incorrect notes from your folder.",
              "They link directly to the exact source sentences, proving where the AI got its facts.",
              "They generate random stories to fill the screen.",
              "They correct your spelling mistakes automatically."
            ],
            options_es: [
              "Borran notas incorrectas de tu carpeta.",
              "Enlazan directamente a las oraciones de la fuente, demostrando de dónde sacó la IA los datos.",
              "Generan historias aleatorias para llenar la pantalla.",
              "Corrigen tus faltas de ortografía automáticamente."
            ],
            answer: 1,
            explanation_en: "Brilliant! Citations are clickable anchor links mapping the AI's generation directly back to source grounding tokens.",
            explanation_es: "¡Brillante! Las citas son enlaces de anclaje clicables que mapean la generación de la IA directamente a los tokens de la fuente."
          }
        ]
      },
      {
        id: "l3_6",
        title_en: "The Book Interview",
        title_es: "La Entrevista al Libro",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Imagine if your history textbook could talk! With NotebookLM, you can conduct a 'Book Interview'. Instead of scanning through 200 pages to find out when the Pyramids were built, you simply chat with your notebook like a wise teacher and say: 'Tell me about the Pyramids', and it will read and summarize it for you instantly!",
            theory_es: "¡Imagina que tu libro de historia pudiera hablar! Con NotebookLM, puedes hacer una 'Entrevista al Libro'. En lugar de hojear 200 páginas para saber cuándo se construyeron las Pirámides, chateas con tus fuentes como con un maestro sabio: 'Háblame de las Pirámides' ¡y te lo resumirá al instante!",
            question_en: "How does chatting with your sources in NotebookLM save study time?",
            question_es: "¿Cómo te ahorra tiempo de estudio chatear con tus fuentes en NotebookLM?",
            options_en: [
              "It writes your school homework and turns it in automatically.",
              "It lets you ask questions and get instant summaries from your uploaded documents.",
              "It locks down the screen so you can't get distracted.",
              "It teaches you how to read faster by flashing words."
            ],
            options_es: [
              "Escribe tu tarea escolar y la entrega automáticamente.",
              "Te permite hacer preguntas y obtener resúmenes instantáneos de tus documentos subidos.",
              "Bloquea la pantalla para que no te distraigas.",
              "Te enseña a leer más rápido mostrando palabras rápidas."
            ],
            answer: 1,
            explanation_en: "Exactly! Direct Q&A with your grounded sources eliminates the need for manually searching and skim-reading giant textbooks.",
            explanation_es: "¡Exacto! El chat de preguntas y respuestas directo con fuentes ancladas elimina la necesidad de buscar y ojear manualmente libros gigantes."
          }
        ]
      },
      {
        id: "l3_7",
        title_en: "The Magic Notebook",
        title_es: "La Libreta Mágica",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "While reading your sources and chatting with the AI, you might find amazing sentences. NotebookLM has a 'Magic Notebook' feature where you can click 'Save Note'. This places the cool facts into neat virtual sticky notes. You can write your own notes next to them, creating a perfect master study guide!",
            theory_es: "Mientras lees tus fuentes y chateas con la IA, puedes encontrar datos asombrosos. NotebookLM tiene una función de 'Libreta Mágica' donde puedes hacer clic en 'Guardar Nota'. Esto coloca los datos geniales en notas adhesivas virtuales limpias, donde puedes escribir tus ideas.",
            question_en: "What is the purpose of 'Notes' in NotebookLM?",
            question_es: "¿Cuál es el propósito de las 'Notas' en NotebookLM?",
            options_en: [
              "To chat with other students online.",
              "To save important facts, summaries, and your own thoughts in a neat personal dashboard.",
              "To test your microphone volume.",
              "To send emails to your teacher."
            ],
            options_es: [
              "Chatear con otros estudiantes en línea.",
              "Guardar datos importantes, resúmenes e ideas propias en un panel personal y limpio.",
              "Probar el volumen de tu micrófono.",
              "Enviar correos electrónicos a tu profesor."
            ],
            answer: 1,
            explanation_en: "Fantastic! Saved notes act as a collaborative canvas where you can build, edit, and consolidate study material.",
            explanation_es: "¡Fantástico! Las notas guardadas actúan como un lienzo colaborativo donde puedes construir, editar y consolidar material de estudio."
          }
        ]
      },
      {
        id: "l3_8",
        title_en: "The Robot Quizmaster",
        title_es: "El Robot Preguntón",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Before you take a big test at school, you need practice! NotebookLM can act as your personal 'Robot Quizmaster'. Because it knows your study notes, you can ask it: 'Quiz me on my notes!' It will instantly generate a custom practice test, grading your answers and explaining what you got wrong!",
            theory_es: "¡Antes de hacer un examen real en la escuela, necesitas practicar! NotebookLM puede actuar como tu 'Robot Preguntón' personal. Como conoce tus notas de estudio, puedes pedirle: '¡Hazme un cuestionario!' Generará una prueba de práctica personalizada, calificando y explicando tus respuestas.",
            question_en: "How can NotebookLM act as a 'Robot Quizmaster'?",
            question_es: "¿Cómo puede NotebookLM actuar como un 'Robot Preguntón'?",
            options_en: [
              "By generating dynamic practice quizzes and grading your answers based on your notes.",
              "By writing the answers on your hand.",
              "By emailing the school to cancel your test.",
              "By talking directly to your teacher."
            ],
            options_es: [
              "Generando cuestionarios de práctica dinámicos y calificando tus respuestas basadas en tus notas.",
              "Escribiendo las respuestas en tu mano.",
              "Enviando un correo a la escuela para cancelar tu examen.",
              "Hablando directamente con tu profesor."
            ],
            answer: 0,
            explanation_en: "Perfect! Generating interactive quiz sets helps active recall, which is scientifically proven to boost memory retention.",
            explanation_es: "¡Perfecto! Generar cuestionarios interactivos ayuda al recuerdo activo, lo cual está comprobado científicamente para aumentar la retención."
          }
        ]
      },
      {
        id: "l3_9",
        title_en: "The Secret Vault",
        title_es: "La Bóveda Secreta",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Are you worried about other people reading your private diary or school essays? NotebookLM is like a 'Secret Vault'! Every document you upload is kept completely private. Google does NOT share your notes with other users, and public AI models are never trained on your files. Your secrets are safe!",
            theory_es: "¿Te preocupa que otras personas lean tu diario privado o tus ensayos escolares? ¡NotebookLM es como una 'Bóveda Secreta'! Cada documento que subes es totalmente privado. Google NO comparte tus notas con otros y los modelos públicos de IA nunca entrenan con tus archivos.",
            question_en: "Who can read the files you upload into your NotebookLM?",
            question_es: "¿Quién puede leer los archivos que subes a tu NotebookLM?",
            options_en: [
              "Any user searching on Google.",
              "Only you—your documents are private and never used to train public AI.",
              "Google's public AI robot engineers.",
              "Anyone who knows your computer's name."
            ],
            options_es: [
              "Cualquier usuario que busque en Google.",
              "Solo tú: tus documentos son privados y nunca se usan para entrenar la IA pública.",
              "Los ingenieros de robots de IA pública de Google.",
              "Cualquiera que sepa el nombre de tu computadora."
            ],
            answer: 1,
            explanation_en: "Excellent! Enterprise-level data privacy guarantees that user documents in NotebookLM remain strictly siloed and confidential.",
            explanation_es: "¡Excelente! La privacidad de datos garantiza que los documentos del usuario en NotebookLM permanezcan estrictamente aislados y confidenciales."
          }
        ]
      },
      {
        id: "l3_10",
        title_en: "The Robot Coach",
        title_es: "El Entrenador Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Have you ever looked at a giant biology book and felt too tired to start? NotebookLM is your personal 'Robot Coach'! You can ask it: 'Make a 5-day study plan from these notes.' It will break the massive textbook down into 5 small, friendly daily goals so you can study without stress!",
            theory_es: "¿Alguna vez has visto un libro de biología gigante y te sentiste muy cansado para empezar? ¡NotebookLM es tu 'Entrenador Robot' personal! Puedes pedirle: 'Hazme un plan de estudio de 5 días'. Dividirá el libro en 5 pequeñas metas diarias para que estudies sin estrés.",
            question_en: "How does the 'Robot Coach' (NotebookLM) help you study big books?",
            question_es: "¿Cómo te ayuda el 'Entrenador Robot' (NotebookLM) a estudiar libros grandes?",
            options_en: [
              "It translates the book into cartoon drawings.",
              "It structures large notes into smaller, step-by-step daily study schedules.",
              "It reads the entire book in 1 second out loud.",
              "It deletes the hardest pages of the book."
            ],
            options_es: [
              "Traduce el libro a dibujos animados.",
              "Estructura notas grandes en cronogramas diarios de estudio más pequeños paso a paso.",
              "Lee todo el libro en voz alta en 1 segundo.",
              "Borra las páginas más difíciles del libro."
            ],
            answer: 1,
            explanation_en: "Bravo! Task decomposition simplifies cognitive load, making large-scale study topics manageable and less overwhelming.",
            explanation_es: "¡Bravo! La descomposición de tareas simplifica la carga cognitiva, haciendo que temas de estudio grandes sean manejables y menos abrumadores."
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
        title_en: "API Keys (The Golden Ticket)",
        title_es: "API Keys (El Boleto Dorado)",
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
        title_en: "The Vault Lock",
        title_es: "El Candado de la Bóveda",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When coding an app, how do you keep your golden ticket API Key safe? You use a 'Vault Lock' called environment variables! Instead of writing the key directly in your JavaScript code (where hackers can easily grab it), you hide it in a secret safe file (`process.env.GEMINI_KEY`) on a backend server!",
            theory_es: "Al programar una app, ¿cómo mantienes seguro tu Boleto Dorado (API Key)? ¡Usas un 'Candado de Bóveda' llamado variables de entorno! En lugar de escribir la clave directamente en tu código JavaScript de la web, la ocultas en un archivo secreto seguro (`process.env.GEMINI_KEY`) en un servidor backend.",
            question_en: "Where is the safest place to store your API Key when building a web app?",
            question_es: "¿Cuál es el lugar más seguro para guardar tu API Key al hacer una app web?",
            options_en: [
              "Hardcoded inside your main HTML index page.",
              "Secure environment variables on a backend server, never client-side.",
              "Written down in a text comment in public code.",
              "In a public GitHub repository readme file."
            ],
            options_es: [
              "Escrita directamente en tu página principal HTML index.",
              "Variables de entorno seguras en un servidor backend, nunca del lado del cliente.",
              "Escrita como un comentario de texto en el código público.",
              "En el archivo readme de un repositorio público de GitHub."
            ],
            answer: 1,
            explanation_en: "Correct! Keeping keys server-side prevents malicious actors from downloading your credentials and abusing your API quota.",
            explanation_es: "¡Correcto! Mantener las claves del lado del servidor evita que actores maliciosos descarguen tus credenciales y abusen de tu cuota de API."
          }
        ]
      },
      {
        id: "l4_3",
        title_en: "The Robot Playground",
        title_es: "El Patio de Juegos",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Google AI Studio is a magical web 'Playground' for developers! Before you write any complicated code on your computer, you can enter the playground to chat with Gemini, adjust temperature sliders, test system instructions, and verify results live. It's like building Lego models before ordering real bricks!",
            theory_es: "¡Google AI Studio es un 'Patio de Juegos' web mágico para desarrolladores! Antes de escribir código complicado en tu computadora, entras al playground para chatear con Gemini, mover controles de temperatura y ver resultados en vivo. ¡Es como construir modelos a escala antes de programar!",
            question_en: "What is the primary purpose of Google AI Studio for developers?",
            question_es: "¿Cuál es el propósito principal de Google AI Studio para desarrolladores?",
            options_en: [
              "To play high-resolution video games.",
              "To test prompts and configure parameters in a live web dashboard before coding.",
              "To check your email inbox.",
              "To buy hardware computer parts."
            ],
            options_es: [
              "Jugar videojuegos de alta resolución.",
              "Probar prompts y configurar parámetros en un panel web en vivo antes de escribir código.",
              "Revisar tu bandeja de entrada de correo electrónico.",
              "Comprar partes físicas de computadoras."
            ],
            answer: 1,
            explanation_en: "Exactly! AI Studio provides a graphical workbench to prototype prompt engineering logic rapidly before API integration.",
            explanation_es: "¡Exacto! AI Studio proporciona una mesa de trabajo gráfica para prototipar rápidamente la lógica de ingeniería de prompts antes de integrarla."
          }
        ]
      },
      {
        id: "l4_4",
        title_en: "The Lego Blueprint",
        title_es: "El Plano de Lego",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Usually, robots talk in long paragraphs. But computers don't like paragraphs—they love highly organized data sheets! In AI Studio, you can use a 'Lego Blueprint' called Structured Output (JSON Mode). This forces the robot to reply strictly in tidy lists so other programs can read the values instantly!",
            theory_es: "Por lo general, los robots hablan en párrafos largos. Pero a las computadoras no les gustan los párrafos: ¡les encantan las listas de datos organizados! En AI Studio puedes usar un 'Plano de Lego' llamado Salida Estructurada (Modo JSON). ¡Esto obliga al robot a responder estrictamente en listas limpias!",
            question_en: "Why do developers configure 'Structured Output' (JSON Mode)?",
            question_es: "¿Por qué los desarrolladores configuran la 'Salida Estructurada' (Modo JSON)?",
            options_en: [
              "To make the text color change to magenta.",
              "To force the AI to return data in rigid, program-friendly list formats.",
              "To lock the temperature slider permanently.",
              "To make the robot respond faster."
            ],
            options_es: [
              "Para hacer que el color del texto cambie a magenta.",
              "Para obligar a la IA a devolver datos en formatos de lista rígidos y amigables para programas.",
              "Para bloquear el control de temperatura permanentemente.",
              "Para hacer que el robot responda más rápido."
            ],
            answer: 1,
            explanation_en: "Awesome! JSON Mode ensures the response adheres to a strict schema, preventing parsers from failing on irregular string layouts.",
            explanation_es: "¡Asombroso! El modo JSON asegura que la respuesta se adhiera a un esquema estricto, evitando fallas al leer formatos de texto irregulares."
          }
        ]
      },
      {
        id: "l4_5",
        title_en: "The Robot Shield",
        title_es: "El Escudo Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Sometimes, the internet has mean, scary, or unsafe words. To make sure your custom AI application never speaks rudely or shares dangerous tricks, Google AI Studio has a 'Robot Shield' called Safety Settings! You can adjust these slider shields to block bad topics before they ever reach the user's screen!",
            theory_es: "A veces en internet hay palabras groseras, asustadizas o inseguras. Para asegurar que tu aplicación de IA nunca hable con groserías ni comparta trucos peligrosos, ¡Google AI Studio tiene un 'Escudo Robot' llamado Ajustes de Seguridad! Puedes ajustar estos escudos para bloquear temas malos.",
            question_en: "What do 'Safety Settings' control in Google AI Studio?",
            question_es: "¿Qué controlan los 'Ajustes de Seguridad' en Google AI Studio?",
            options_en: [
              "The strength of the laptop battery charger.",
              "The blocking thresholds for toxic, harmful, or unsafe AI generations.",
              "The password complexity requirement for users.",
              "The network data speed of the server."
            ],
            options_es: [
              "La potencia del cargador de la laptop.",
              "Los umbrales de bloqueo para generaciones de IA tóxicas, dañinas o inseguras.",
              "El requisito de complejidad de contraseña para los usuarios.",
              "La velocidad de red del servidor de datos."
            ],
            answer: 1,
            explanation_en: "Spot on! Safety settings filter input prompts and output responses based on probability vectors for hate speech, harassment, and dangerous content.",
            explanation_es: "¡En el blanco! Los ajustes de seguridad filtran prompts de entrada y respuestas de salida según vectores de probabilidad de acoso y contenido peligroso."
          }
        ]
      },
      {
        id: "l4_6",
        title_en: "Robot Hands",
        title_es: "Las Manos del Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Gemini is very smart, but it cannot touch the real world. In AI Studio, you can give the robot 'Digital Hands' using Function Calling! If the user says 'Turn on the lights', Gemini cannot push the physical switch, but it can write a neat code order telling your smart home app to turn the light bulb on!",
            theory_es: "Gemini es muy inteligente, pero no puede tocar el mundo real. En AI Studio, ¡puedes darle al robot 'Manos Digitales' usando Llamadas a Funciones! Si el usuario dice 'Enciende las luces', Gemini no puede presionar el switch, pero escribe una orden en código que le indica a tu app encender el foco.",
            question_en: "What is the role of 'Function Calling' (Robot Hands)?",
            question_es: "¿Cuál es el rol de las 'Llamadas a Funciones' (Manos del Robot)?",
            options_en: [
              "To let the robot type letters on the keyboard automatically.",
              "To let the AI output structural commands so your app can execute real-world tasks.",
              "To charge your credit card for API usage.",
              "To translate code into Spanish language."
            ],
            options_es: [
              "Permitir al robot escribir letras en el teclado automáticamente.",
              "Permitir a la IA emitir comandos estructurados para que tu app ejecute tareas del mundo real.",
              "Cobrar a tu tarjeta de crédito por el uso de la API.",
              "Traducir código de programación al idioma español."
            ],
            answer: 1,
            explanation_en: "Splendid! Function calling allows Gemini to act as an orchestrator, outputting arguments that match your local code declarations.",
            explanation_es: "¡Espléndido! Las llamadas a funciones permiten a Gemini actuar como orquestador, emitiendo argumentos que coinciden con tu código local."
          }
        ]
      },
      {
        id: "l4_7",
        title_en: "The Robot Family",
        title_es: "La Familia Robot",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "In the Google AI Studio lab, models change over time as they learn more facts. Choosing a model is like choosing a member of the 'Robot Family'! You can choose stable family members that stay consistent for a long time, or try experimental experimental updates that are highly creative but change frequently!",
            theory_es: "En el laboratorio de Google AI Studio, los modelos cambian a medida que aprenden. ¡Elegir un modelo es como elegir a un miembro de la 'Familia Robot'! Puedes elegir miembros estables que no cambian en meses, o probar actualizaciones experimentales súper creativas pero cambiantes.",
            question_en: "Why do developers choose stable model versions in production?",
            question_es: "¿Por qué los desarrolladores eligen versiones de modelos estables en producción?",
            options_en: [
              "To save battery power on the client side.",
              "To ensure identical, predictable behavior and performance over time.",
              "To make the code compile faster.",
              "To hide system messages from the console."
            ],
            options_es: [
              "Para ahorrar batería del lado del cliente.",
              "Para asegurar un comportamiento y rendimiento idénticos y predecibles a lo largo del tiempo.",
              "Para hacer que el código se compile más rápido.",
              "Para ocultar los mensajes del sistema de la consola."
            ],
            answer: 1,
            explanation_en: "Hooray! Stable model snapshots guarantee that your prompt engineering logic does not break due to sudden backend changes.",
            explanation_es: "¡Hurra! Las versiones estables de modelos garantizan que tu lógica de prompts no se rompa por cambios repentinos en los servidores de Google."
          }
        ]
      },
      {
        id: "l4_8",
        title_en: "The Robot Queue",
        title_es: "La Fila de Espera",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "When you build apps using the free tier of Google AI Studio, you have to share the robot with developers all over the world. To be fair, Google sets up a 'Robot Queue' called Rate Limits! If your app asks too many questions in a single minute, the robot will politely ask you to wait a short moment before asking more.",
            theory_es: "Cuando haces apps gratis en Google AI Studio, compartes el robot con creadores de todo el mundo. Para ser justos, ¡Google tiene una 'Fila de Espera' llamada Límites de Velocidad! Si tu app hace demasiadas preguntas en un minuto, el robot te pedirá amablemente esperar un momento.",
            question_en: "What is an API 'Rate Limit'?",
            question_es: "¿Qué es un 'Límite de Velocidad' (Rate Limit) de la API?",
            options_en: [
              "The maximum length of a system instruction prompt.",
              "The maximum number of API requests allowed within a specific timeframe (e.g. per minute).",
              "The price scale charged for each word generated.",
              "The network connection speed to Google servers."
            ],
            options_es: [
              "La longitud máxima de un prompt de instrucción del sistema.",
              "El número máximo de solicitudes API permitidas dentro de un tiempo específico (ej. por minuto).",
              "La escala de precios cobrada por cada palabra generada.",
              "La velocidad de conexión de red a los servidores de Google."
            ],
            answer: 1,
            explanation_en: "Perfect! Rate limits prevent denial-of-service and allocate infrastructure fairly among developers on the free tier.",
            explanation_es: "¡Perfecto! Los límites de velocidad previenen sobrecargas y asignan la infraestructura de forma justa entre los desarrolladores del nivel gratuito."
          }
        ]
      },
      {
        id: "l4_9",
        title_en: "Memory Savepoint",
        title_es: "Punto de Guardado",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "Feeding a giant textbook to Gemini takes time and costs money every single time. To solve this, Google AI Studio has a 'Memory Savepoint' called Context Caching! This saves the massive book in the robot's active memory. When you ask questions later, it reads the saved memory cache instantly, saving time and money!",
            theory_es: "Darle un libro de texto gigante a Gemini toma tiempo y cuesta dinero cada vez. Para solucionarlo, ¡Google AI Studio tiene un 'Punto de Guardado de Memoria' llamado Context Caching! Guarda el libro en la memoria activa del robot para leerlo al instante en futuras preguntas sin costo extra.",
            question_en: "How does 'Context Caching' help developers save costs?",
            question_es: "¿Cómo ayuda el 'Context Caching' (Caché de Contexto) a ahorrar costos?",
            options_en: [
              "It deletes older notes automatically.",
              "It stores massive context inputs in memory so you don't pay to re-upload them on every turn.",
              "It disables the temperature settings to save energy.",
              "It runs the API offline without server connection."
            ],
            options_es: [
              "Borra notas antiguas automáticamente.",
              "Guarda contextos masivos en memoria para no pagar por subirlos en cada pregunta del chat.",
              "Desactiva los ajustes de temperatura para ahorrar energía.",
              "Ejecuta la API de forma local sin conexión a servidores."
            ],
            answer: 1,
            explanation_en: "Excellent! Context caching keeps large tokens active in cache, letting you query massive reference texts at a fraction of the standard prompt cost.",
            explanation_es: "¡Excelente! El caché de contexto mantiene activos en memoria los tokens grandes, permitiéndote hacer consultas de textos masivos a una fracción del costo común."
          }
        ]
      },
      {
        id: "l4_10",
        title_en: "The Strict Language",
        title_es: "El Idioma Estricto",
        xp: 15,
        cards: [
          {
            type: "mcq",
            theory_en: "JSON stands for JavaScript Object Notation, which is the ultimate 'Strict Language' for computer systems. In AI Studio, setting JSON Mode ensures that Gemini strictly formats its responses using keys, colons, and curly braces `{ }`, keeping its text completely organized so that apps can build high-score lists automatically!",
            theory_es: "JSON significa JavaScript Object Notation, el 'Idioma Estricto' definitivo para las computadoras. En AI Studio, activar el modo JSON asegura que Gemini responda usando llaves `{ }`, comillas y comas, organizando su texto para que las apps lean puntuaciones de juegos automáticamente.",
            question_en: "What does JSON Mode guarantee in Google AI Studio responses?",
            question_es: "¿Qué garantiza el Modo JSON en las respuestas de Google AI Studio?",
            options_en: [
              "The response will always be written in strict JavaScript language code.",
              "The response will adhere to clean, standardized data structure arrays enclosed in `{ }` braces.",
              "The response will be twice as long.",
              "The response will contain zero numbers."
            ],
            options_es: [
              "La respuesta siempre estará escrita en código de lenguaje JavaScript estricto.",
              "La respuesta se adherirá a estructuras de datos limpias y estandarizadas encerradas entre llaves `{ }`.",
              "La respuesta será el doble de larga.",
              "La respuesta no contendrá ningún número."
            ],
            answer: 1,
            explanation_en: "Hooray! JSON Mode guarantees syntax validity for JSON structures, enabling robust program-to-program deserialization.",
            explanation_es: "¡Hurra! El Modo JSON garantiza la validez sintáctica para las estructuras JSON, permitiendo una deserialización robusta de programa a programa."
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

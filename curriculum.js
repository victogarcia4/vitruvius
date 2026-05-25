/**
 * Vitruvius - Core Curriculum Database
 * Contains modules, skills, lessons, and interactive quiz challenges
 * Supporting bilingual toggles (EN / ES) dynamically.
 */

const VITRUVIUS_CURRICULUM = [
  {
    id: "m1",
    title_en: "GenAI Foundations",
    title_es: "Fundamentos de IA Gen",
    description_en: "Demystify LLMs, Byte-Pair Tokenization, and Context Windows.",
    description_es: "Desmitifica los LLMs, la tokenización Byte-Pair y las ventanas de contexto.",
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
            question_en: "What is the core underlying mechanism of a Large Language Model (LLM)?",
            question_es: "¿Cuál es el mecanismo principal de un Modelo de Lenguaje Grande (LLM)?",
            options_en: [
              "Parsing logical database rules and searching index matrices.",
              "Predicting the probability of the next word/token in a sequence based on training patterns.",
              "Directly reading human thoughts through an operating system interface.",
              "Connecting to live API calls to copy web documentation."
            ],
            options_es: [
              "Analizar reglas lógicas de bases de datos y buscar matrices de índices.",
              "Predecir la probabilidad del siguiente token/palabra en una secuencia basada en patrones de entrenamiento.",
              "Leer directamente el pensamiento humano mediante una interfaz del sistema operativo.",
              "Conectarse a llamadas de API en vivo para copiar documentación web."
            ],
            answer: 1,
            explanation_en: "LLMs are fundamentally probabilistic engines that predict the most likely next token based on weight patterns learned during training.",
            explanation_es: "Los LLMs son fundamentalmente motores probabilísticos que predicen el token siguiente más probable basándose en patrones de peso aprendidos durante el entrenamiento."
          },
          {
            type: "mcq",
            question_en: "What is the key difference between Pre-training and Fine-tuning?",
            question_es: "¿Cuál es la diferencia clave entre Pre-entrenamiento (Pre-training) y Ajuste Fino (Fine-tuning)?",
            options_en: [
              "Pre-training makes the model small, Fine-tuning makes it larger.",
              "Pre-training teaches broad grammar/facts from vast text; Fine-tuning aligns it to safety and specific task instructions (RLHF).",
              "Fine-tuning must be done in Assembly code, while Pre-training uses Python.",
              "There is no difference; they are alternative names for training."
            ],
            options_es: [
              "El pre-entrenamiento hace al modelo pequeño, el ajuste fino lo hace más grande.",
              "El pre-entrenamiento enseña gramática y datos generales de textos masivos; el ajuste fino lo alinea con directivas de seguridad y tareas específicas (RLHF).",
              "El ajuste fino debe hacerse en código Ensamblador, mientras que el pre-entrenamiento usa Python.",
              "No hay diferencia; son nombres alternativos para el mismo entrenamiento."
            ],
            answer: 1,
            explanation_en: "Pre-training builds the raw linguistic baseline on raw internet data. Fine-tuning uses Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) to turn it into an obedient assistant.",
            explanation_es: "El pre-entrenamiento construye la base lingüística cruda sobre datos masivos. El ajuste fino usa entrenamiento supervisado (SFT) y aprendizaje por refuerzo con feedback humano (RLHF) para convertirlo en un asistente obediente."
          }
        ]
      },
      {
        id: "l1_2",
        title_en: "Anatomy of a Token",
        title_es: "Anatomía de un Token",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "Why is a word not always equivalent to a single token in an LLM?",
            question_es: "¿Por qué una palabra no siempre es equivalente a un solo token en un LLM?",
            options_en: [
              "Tokens are only used for security encryption.",
              "LLMs use Byte-Pair Encoding (BPE), breaking words into common sub-word character sequences (e.g., 'helpful' to 'help' and 'ful').",
              "A token must always contain exactly 10 letters.",
              "Models only translate words into hexadecimal numbers."
            ],
            options_es: [
              "Los tokens solo se utilizan para el cifrado de seguridad.",
              "Los LLMs usan codificación de pares de bytes (BPE), dividiendo las palabras en secuencias comunes de subpalabras (ej., 'increíble' en 'incre' e 'íble').",
              "Un token siempre debe contener exactamente 10 letras.",
              "Los modelos solo traducen palabras en números hexadecimales."
            ],
            answer: 1,
            explanation_en: "Byte-Pair Encoding represents text as sub-word fragments, enabling models to understand typos, root words, and multilingual symbols efficiently.",
            explanation_es: "Byte-Pair Encoding (BPE) representa el texto en fragmentos de subpalabras, permitiendo al modelo procesar errores ortográficos, raíces de palabras y símbolos de múltiples idiomas eficientemente."
          },
          {
            type: "code",
            question_en: "Complete this python calculation to estimate the average tokens in a body of English text (usually 100 words ≈ 130 tokens):",
            question_es: "Completa este cálculo en Python para estimar los tokens promedio en un texto en inglés (normalmente 100 palabras ≈ 130 tokens):",
            code: "def estimate_tokens(word_count):\n    return word_count * [____]",
            options: ["1.3", "0.7", "4.0", "10"],
            answer: "1.3",
            explanation_en: "As a rule of thumb, English texts consume about 30% more tokens than the total word count, hence multiplying by 1.3 is an accurate heuristic.",
            explanation_es: "Como regla general, los textos en inglés consumen cerca de un 30% más de tokens que el conteo de palabras, por lo que multiplicar por 1.3 es una buena heurística."
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
            question_en: "What happens when an conversation length exceeds the model's Context Window limit?",
            question_es: "¿Qué sucede cuando la longitud de una conversación supera el límite de la Ventana de Contexto del modelo?",
            options_en: [
              "The model crashes completely and deletes the user's active API keys.",
              "The model starts 'forgetting' the earliest messages in the chat because they slip out of active memory.",
              "The model automatically updates its training weights permanently.",
              "The model switches to Spanish automatically."
            ],
            options_es: [
              "El modelo se bloquea por completo y elimina las claves API activas del usuario.",
              "El modelo empieza a 'olvidar' los mensajes más antiguos del chat porque salen de la memoria activa.",
              "El modelo actualiza automáticamente sus pesos de entrenamiento de forma permanente.",
              "El modelo cambia a español de forma automática."
            ],
            answer: 1,
            explanation_en: "The context window represents the maximum input capacity the attention mechanism can evaluate. Text exceeding this is truncated or 'forgotten' dynamically.",
            explanation_es: "La ventana de contexto representa la capacidad de entrada máxima que el mecanismo de atención puede evaluar. El texto que exceda este límite se trunca o se 'olvida' dinámicamente."
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title_en: "Gemini Mastery",
    title_es: "Maestría en Gemini",
    description_en: "Advanced prompt design, direct extensions, and rich multimodal workflows.",
    description_es: "Diseño avanzado de prompts, extensiones directas y flujos multimodales enriquecidos.",
    icon: "✨",
    lessons: [
      {
        id: "l2_1",
        title_en: "Prompt Engineering 101",
        title_es: "Prompt Engineering 101",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "What are the four fundamental components of a highly resilient, enterprise prompt?",
            question_es: "¿Cuáles son los cuatro componentes fundamentales de un prompt altamente resiliente y profesional?",
            options_en: [
              "Username, Password, Domain name, API key.",
              "Instruction, Context, Input Data, and Output Indicator (Format specifier).",
              "Intro, Outro, Body, and Greeting signatures.",
              "HTML structure, CSS rules, JavaScript scripts, and Server endpoints."
            ],
            options_es: [
              "Nombre de usuario, Contraseña, Nombre de dominio, Clave API.",
              "Instrucción, Contexto, Datos de Entrada e Indicador de Salida (Especificador de Formato).",
              "Firma de Introducción, Firma de Cierre, Cuerpo del mensaje y Saludo.",
              "Estructura HTML, Reglas CSS, Scripts de JavaScript y Endpoints de Servidor."
            ],
            answer: 1,
            explanation_en: "Providing clear (1) Instructions, (2) Grounding Context, (3) Input delimiters, and (4) Structured output guides results in deterministic responses.",
            explanation_es: "Proporcionar con claridad (1) Instrucciones, (2) Contexto, (3) Datos de entrada delimitados y (4) Guías estructuradas de salida ofrece resultados deterministas."
          },
          {
            type: "code",
            question_en: "Complete this prompt using delimiters to safely isolate untrusted user content:",
            question_es: "Completa este prompt usando delimitadores para aislar de forma segura el contenido del usuario:",
            code: "Translate the following user comment into English.\nUser comment:\n[____]\n{user_input}\n[____]",
            options: ["\"\"\"", "###", "<xml>", "==="],
            answer: "\"\"\"",
            explanation_en: "Triple quotes (or custom XML tags like <user_comment>) are standard delimiters that prevent prompt injection by isolating external data from instructions.",
            explanation_es: "Las triples comillas (o etiquetas XML personalizadas como <user_comment>) son delimitadores estándar que previenen inyecciones de prompt al aislar los datos externos de las instrucciones."
          }
        ]
      },
      {
        id: "l2_2",
        title_en: "Gemini Extensions",
        title_es: "Extensiones de Gemini",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "How do Gemini Extensions expand the usability of the base LLM?",
            question_es: "¿Cómo expanden las Extensiones de Gemini la utilidad del LLM base?",
            options_en: [
              "By compiling the model directly into hardware chips.",
              "By dynamically connecting Gemini to external real-time data sources (YouTube, Flights, Maps, Workspace) to fetch fresh or private files.",
              "By translating offline PDFs to binary code.",
              "By automatically adding visual emojis to all outgoing responses."
            ],
            options_es: [
              "Compilando el modelo directamente en chips de hardware.",
              "Al conectar dinámicamente a Gemini con fuentes externas de datos en tiempo real (YouTube, Vuelos, Mapas, Workspace) para obtener archivos frescos o privados.",
              "Traduciendo PDFs sin conexión a código binario.",
              "Agregando automáticamente emojis visuales a todas las respuestas salientes."
            ],
            answer: 1,
            explanation_en: "Extensions let the model securely make live calls to APIs and user directories, pulling relevant grounding data before crafting its final response.",
            explanation_es: "Las extensiones permiten al modelo realizar de manera segura llamadas en vivo a APIs y directorios del usuario, recopilando datos relevantes de base antes de redactar su respuesta final."
          }
        ]
      },
      {
        id: "l2_3",
        title_en: "Practical Multimodality",
        title_es: "Multimodalidad Práctica",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "What makes Gemini's native multimodality unique compared to early multi-model setups?",
            question_es: "¿Qué hace única a la multimodalidad nativa de Gemini frente a configuraciones multi-modelo anteriores?",
            options_en: [
              "It runs image filters on raw text inputs.",
              "It was trained as a single network across text, image, audio, and video from the start, enabling direct audio-to-video conceptual translations.",
              "It is only accessible from android devices.",
              "It converts every video upload into a static PDF."
            ],
            options_es: [
              "Aplica filtros de imagen sobre entradas de texto plano.",
              "Fue entrenado desde el inicio como una red única sobre texto, imagen, audio y video, permitiendo traducciones conceptuales directas de audio a video.",
              "Solo es accesible desde dispositivos Android.",
              "Convierte cada carga de video en un PDF estático."
            ],
            answer: 1,
            explanation_en: "Instead of concatenating separate image taggers to a text model, Gemini is natively multimodal, allowing it to process interleaving frames, audio scripts, and text effortlessly.",
            explanation_es: "En lugar de concatenar etiquetadores de imágenes separados a un modelo de texto, Gemini es nativamente multimodal, lo que le permite procesar fotogramas de video, pistas de audio y texto entrelazados sin esfuerzo."
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title_en: "NotebookLM",
    title_es: "NotebookLM",
    description_en: "Knowledge curations, automated synthesis, and advanced Audio Overviews.",
    description_es: "Curadurías de conocimiento, síntesis automatizada y resúmenes de audio avanzados.",
    icon: "🎙️",
    lessons: [
      {
        id: "l3_1",
        title_en: "Source Grounding",
        title_es: "Ingesta de Fuentes",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "What does the term 'Grounding' mean inside a NotebookLM workflow?",
            question_es: "¿Qué significa el término 'Grounding' (Anclaje) dentro de un flujo en NotebookLM?",
            options_en: [
              "Turning off active servers to save cost.",
              "Restricting the model's responses strictly to the facts present in your uploaded source files (PDFs, URLs, Notes).",
              "Translating files into local machine languages.",
              "Creating offline backups on desktop hard drives."
            ],
            options_es: [
              "Apagar servidores activos para ahorrar costes.",
              "Restringir las respuestas del modelo estrictamente a los hechos presentes en tus archivos fuentes subidos (PDFs, URLs, Notas).",
              "Traducir archivos a lenguajes locales de la máquina.",
              "Crear copias de seguridad sin conexión en discos duros de escritorio."
            ],
            answer: 1,
            explanation_en: "NotebookLM relies on Retrieval-Augmented Generation (RAG). By grounding responses in your sources, it virtually eliminates hallucinations.",
            explanation_es: "NotebookLM se basa en la Generación Aumentada por Recuperación (RAG). Al anclar las respuestas en tus fuentes, elimina virtualmente las alucinaciones."
          }
        ]
      },
      {
        id: "l3_2",
        title_en: "Audio Overviews",
        title_es: "Resúmenes de Audio",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "What is an Audio Overview in NotebookLM?",
            question_es: "¿Qué es un 'Audio Overview' (Resumen de Audio) en NotebookLM?",
            options_en: [
              "A simple robotic text-to-speech voice reading an uploaded doc.",
              "A dynamic, dual-host conversational AI podcast that debates, simplifies, and jokes about your source materials.",
              "An automated audio recorder that records system meetings.",
              "A audio track generator that creates synth music."
            ],
            options_es: [
              "Una simple voz robótica de texto a voz leyendo un documento cargado.",
              "Un podcast de IA conversacional y dinámico con dos presentadores que debaten, simplifican e ironizan sobre tus fuentes de estudio.",
              "Un grabador automático que registra reuniones del sistema.",
              "Un generador de pistas de audio que crea música sintetizada."
            ],
            answer: 1,
            explanation_en: "Audio Overviews convert complex reading lists into an engaging talk-show chat, making abstract technical documents accessible as synthetic audio scripts.",
            explanation_es: "Los Audio Overviews convierten complejas listas de lectura en un chat de programa de entrevistas interactivo, facilitando la comprensión de documentos técnicos abstractos."
          }
        ]
      }
    ]
  },
  {
    id: "m4",
    title_en: "Google AI Studio",
    title_es: "Google AI Studio",
    description_en: "Provision credentials, calibrate temperatures, and engineer system prompts.",
    description_es: "Aprovisiona credenciales, calibra temperaturas y diseña prompts del sistema.",
    icon: "🧪",
    lessons: [
      {
        id: "l4_1",
        title_en: "API Key Security",
        title_es: "Seguridad de Claves API",
        xp: 15,
        cards: [
          {
            type: "mcq",
            question_en: "Where is the safest place to store your Google AI Studio API key in an application?",
            question_es: "¿Cuál es el lugar más seguro para almacenar tu clave API de Google AI Studio en una aplicación?",
            options_en: [
              "Directly in a public GitHub JavaScript file.",
              "Secure environment variables on a backend server (`process.env.GEMINI_KEY`), never hardcoded in client-side mobile/web code.",
              "In a shared Google Doc accessible to the public.",
              "Inside a text box on the registration screen."
            ],
            options_es: [
              "Directamente en un archivo JavaScript público de GitHub.",
              "Variables de entorno seguras en un servidor backend (`process.env.GEMINI_KEY`), nunca hardcodeada en el código web/móvil del cliente.",
              "En un Google Doc compartido accesible al público.",
              "Dentro de un cuadro de texto en la pantalla de registro."
            ],
            answer: 1,
            explanation_en: "Client-side applications can be decompiled, revealing raw strings. Using a secure backend proxy ensures credentials stay hidden.",
            explanation_es: "Las aplicaciones del lado del cliente pueden ser descompiladas, revelando cadenas de texto crudas. Usar un proxy de backend seguro oculta las credenciales."
          }
        ]
      },
      {
        id: "l4_2",
        title_en: "Tuning Model Parameters",
        title_es: "Calibración de Parámetros",
        xp: 15,
        cards: [
          {
            type: "slider",
            question_en: "To build a highly deterministic code evaluator, what Temperature slider configuration is best?",
            question_es: "Para construir un evaluador de código altamente determinista, ¿qué configuración de la barra deslizante de Temperatura es la mejor?",
            param: "temperature",
            target: 0.0,
            options_en: {
              min_label: "Low (Deterministic) / Bajo",
              max_label: "High (Creative) / Alto"
            },
            explanation_en: "Setting Temperature to 0.0 forces the model to select the highest-probability tokens, ensuring repeatable and consistent logical reasoning.",
            explanation_es: "Establecer la Temperatura en 0.0 obliga al modelo a seleccionar los tokens de mayor probabilidad, garantizando razonamiento reproducible y consistente."
          },
          {
            type: "mcq",
            question_en: "What do the Top-P and Top-K parameters control inside Google AI Studio?",
            question_es: "¿Qué controlan los parámetros Top-P y Top-K dentro de Google AI Studio?",
            options_en: [
              "The cost tier and speeds of servers.",
              "The mathematical vocabulary pools the model samples tokens from at each step.",
              "The amount of concurrent users allowed to call the model.",
              "The volume levels of the synthesized text reader."
            ],
            options_es: [
              "El nivel de costo y la velocidad de los servidores.",
              "El pool de vocabulario matemático del cual el modelo muestrea tokens en cada paso.",
              "La cantidad de usuarios simultáneos permitidos para llamar al modelo.",
              "Los niveles de volumen del lector de texto sintetizado."
            ],
            answer: 1,
            explanation_en: "Top-K restricts sampling to the top 'K' most likely words. Top-P (Nucleus) restricts it to a cumulative probability percentage 'P', clipping highly unlikely words.",
            explanation_es: "Top-K restringe el muestreo a las 'K' palabras más probables. Top-P (núcleo) lo limita a un porcentaje acumulativo de probabilidad 'P', recortando opciones altamente improbables."
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
            question_en: "What is the primary role of a 'System Instruction' relative to user chat history?",
            question_es: "¿Cuál es el rol principal de una 'Instrucción del Sistema' frente al historial de chat del usuario?",
            options_en: [
              "To change the font color of the terminal display.",
              "To act as a permanent, high-priority directive that locks the model's behavior, rules, and persona before user conversation starts.",
              "To translate all inputs into binary structures.",
              "To calculate the total cost of API sessions."
            ],
            options_es: [
              "Cambiar el color de la fuente en la pantalla del terminal.",
              "Actuar como una directiva permanente y de máxima prioridad que define el comportamiento, reglas y personaje del modelo antes de iniciar la charla del usuario.",
              "Traducir todas las entradas a estructuras binarias.",
              "Calcular el costo total de las sesiones de API."
            ],
            answer: 1,
            explanation_en: "System Instructions reside outside standard chat flows. They cannot be easily overridden by user comments, enforcing reliable application parameters.",
            explanation_es: "Las Instrucciones del Sistema residen fuera de los flujos de chat normales. No pueden ser fácilmente anuladas por comentarios de usuarios, reforzando parámetros estables."
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

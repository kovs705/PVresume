const translations = {
  en: {
    meta: {
      title: "Eugene Rozhkov | iOS Developer",
    },
    brand: {
      role: "iOS Developer",
    },
    nav: {
      experience: "Experience",
      skills: "Skills",
      journey: "Journey",
      gallery: "Gallery",
      contact: "Contact",
    },
    theme: {
      toggleToDark: "Dark mode",
      toggleToLight: "Light mode",
    },
    hero: {
      eyebrow: "SwiftUI, UIKit, Kotlin Multiplatform",
      title: "I build iOS apps that stay usable under real-world pressure.",
      summary:
        "Healthcare, logistics, and product work. I care about shipping clean interfaces, stable code, and mobile experiences people can actually trust.",
      primaryCta: "Explore experience",
      secondaryCta: "Open profile brief",
      stats: [
        { value: "4+", label: "years of professional mobile work" },
        { value: "3", label: "countries lived in and adapted to" },
        { value: "4", label: "human languages studied or used" },
      ],
      availability: {
        eyebrow: "Current situation",
        title: "Based in Argentina, open to serious remote teams.",
        copy: "I have already relocated across countries with my family. I adapt quickly, communicate directly, and work well in distributed environments.",
        pills: ["Healthcare apps", "KMP aware", "Async collaboration"],
      },
    },
    experience: {
      eyebrow: "Work",
      title: "Experience that is closer to production than portfolio theater.",
      intro:
        "The important part is not the job title. It is whether the work survived real users, real constraints, and real delivery pressure.",
      viewDetails: "View details",
      items: [
        {
          modal: "lhpc",
          role: "iOS Developer",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Feb 2024 - Present",
          summary:
            "Built and released an iOS app for a medical startup in India.",
          tags: ["iOS", "Medical", "Remote"],
        },
        {
          modal: "reshenie",
          role: "iOS Developer",
          company: "Reshenie LLC",
          period: "Summer 2023 - Spring 2024",
          summary:
            "Worked on medical KMP products: an iPad tool for optometrists and a patient cabinet app.",
          tags: ["KMP", "iPadOS", "Healthcare"],
        },
        {
          modal: "contract",
          role: "Contract iOS Developer",
          company: "Individual Entrepreneur",
          period: "Spring 2022 - Fall 2022",
          summary:
            "Modernized a logistics app, introduced SwiftUI into UIKit, and moved desktop tasks to mobile.",
          tags: ["UIKit", "SwiftUI", "Logistics"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Technical focus",
      intro:
        "The stack matters, but only if it leads to a better product and a codebase people can keep shipping.",
      groups: [
        {
          title: "iOS core",
          text: "Main mobile platform and UI work.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Product delivery",
          text: "The part where features become usable software.",
          items: [
            "Feature implementation",
            "API integration",
            "UI refinement",
            "Release work",
          ],
        },
        {
          title: "Cross-platform awareness",
          text: "Useful when mobile work meets a shared stack.",
          items: [
            "Kotlin Multiplatform",
            "Distributed teams",
            "Git workflows",
            "Existing codebases",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Approach",
      title: "How I work",
      intro:
        "This is the part that usually matters after the stack filter is gone.",
      items: [
        "I bias toward clear product decisions, stable flows, and interfaces that do not fight the user.",
        "I can join an existing codebase and improve it without treating a full rewrite as the default answer.",
        "I work well with remote teams, async communication, and practical constraints instead of idealized ones.",
        "Relocation and adaptation are already part of my life, so change does not derail me.",
      ],
    },
    languages: {
      eyebrow: "Languages",
      title: "Human languages",
      items: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Japanese", level: "Intermediate" },
        { name: "Finnish", level: "Beginner" },
      ],
    },
    journey: {
      eyebrow: "Relocation",
      title: "Career context and life moves",
      intro:
        "The resume is cleaner when the actual life timeline is visible too.",
      items: [
        {
          period: "May 2025 - Present",
          place: "Argentina",
          text: "Moved with my wife to build long-term family stability and continue growing internationally.",
        },
        {
          period: "Jun 2024 - May 2025",
          place: "Japan",
          text: "First long-term international move. Strong learning period, new routines, new environment.",
        },
        {
          period: "Before 2024",
          place: "Russia",
          text: "Built the foundation: contract work, team work, and the transition from learning to shipping.",
        },
      ],
    },
    interests: {
      eyebrow: "Interests",
      title: "Outside work",
      intro:
        "Useful because interests reveal how someone learns, not because hobbies need to look decorative.",
      items: [
        "Language learning",
        "Musical instruments",
        "Science books",
        "Personal app ideas",
        "Type racing",
        "Writing IT articles",
        "Horror manga",
      ],
    },
    gallery: {
      eyebrow: "Snapshots",
      title: "Additional context",
      intro:
        "Not every useful signal fits into a bullet list. These cards add some texture without cluttering the main flow.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Coding mobile applications",
          label: "Work",
          text: "The obvious one: mobile development is not just a job line, it is still where I spend focused time.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Games",
          text: "A reminder that good product design should feel understandable before it feels technical.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "Printed CV",
          label: "Career",
          text: "I still like seeing work translated into something tangible and direct.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Argentina",
          label: "Base",
          text: "Current base and the practical center of the next stage.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "NAS storage",
          label: "Systems",
          text: "I like tools that reduce chaos and keep data under control.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Japan",
          label: "Relocation",
          text: "A major growth phase, not just a destination.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Kyoto",
          label: "Perspective",
          text: "The mix of discipline, history, and precision is hard not to respect.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If the team is serious, contact me.",
      copy: "Email is best for role discussions. GitHub shows code. Telegram is fastest for direct conversation.",
      actions: {
        email: "Send email",
        github: "View GitHub",
        telegram: "Open Telegram",
      },
    },
    footer: {
      copy: "Built by Eugene Rozhkov",
    },
    facts: [
      {
        index: "01",
        title: "Practical product shipping",
        text: "Not design theater. I work on production apps, migrations, and features that have to survive release.",
        button: "Why it matters",
        modal: "profile",
      },
      {
        index: "02",
        title: "Health and service domains",
        text: "Most of my work sits in medical and operational products where clarity matters more than decoration.",
        button: "Open details",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "Relocation story",
        text: "Japan and Argentina were not tourism. They were long-term moves, learning cycles, and proof of adaptability.",
        button: "Read more",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Close",
    },
    modals: {
      profile: {
        kicker: "Profile brief",
        title: "What this page is really saying",
        summary:
          "I am an iOS developer with practical product experience, a bias for shipping, and a work style that fits distributed teams better than empty presentation does.",
        meta: ["SwiftUI", "UIKit", "Remote work", "Argentina"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Core value",
            body: "The main selling point is not being flashy. It is being useful: understandable UI, stable delivery, and a calm approach to real constraints.",
          },
          {
            title: "Current fit",
            items: [
              "Remote or distributed product teams",
              "iOS-heavy roles with real ownership",
              "Products where reliability matters more than showmanship",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Domain fit",
        title: "Why healthcare and service work matters",
        summary:
          "These products punish sloppy thinking. That is useful. It forces clearer decisions, clearer UI, and better communication with non-engineering stakeholders.",
        meta: ["Healthcare", "Operational UX", "Trust"],
        sections: [
          {
            title: "What the domain changes",
            items: [
              "Flows need to be clear under pressure",
              "Ambiguity wastes time and trust",
              "Shipping matters, but mistakes matter too",
            ],
          },
          {
            title: "What I bring",
            body: "I am comfortable in products where clean behavior is more important than showing off technical cleverness.",
          },
        ],
      },
      relocation: {
        kicker: "Life context",
        title: "Relocation is already real, not hypothetical",
        summary:
          "I have already moved across countries with my family. That matters because adaptation, communication, and long-term planning are already tested in real life.",
        meta: ["Argentina", "Japan", "Family move"],
        sections: [
          {
            title: "Why it matters professionally",
            items: [
              "Fast adaptation to new environments",
              "Comfort with asynchronous communication",
              "Lower friction when teams are international",
            ],
          },
          {
            title: "Personal context",
            body: "The move to Argentina was tied to family stability and the future. This is not a temporary experiment.",
          },
        ],
      },
      lhpc: {
        kicker: "Current role",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "Developed and released an iOS app for a medical startup organization in India.",
        meta: ["Feb 2024 - Present", "iOS", "Medical startup"],
        sections: [
          {
            title: "Work focus",
            items: [
              "Production iOS development",
              "Healthcare product delivery",
              "Remote collaboration across teams",
            ],
          },
          {
            title: "Why it matters",
            body: "This is recent, practical work tied to an actual release, not a learning project.",
          },
        ],
      },
      reshenie: {
        kicker: "Medical KMP work",
        title: "Reshenie LLC",
        summary:
          "Worked on several KMP products for medical organizations: an iPadOS app for optometrists and a personal cabinet for patients.",
        meta: ["Summer 2023 - Spring 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Product range",
            items: [
              "Tooling for specialists",
              "Patient-facing cabinet app",
              "Shared-stack environment with Kotlin Multiplatform",
            ],
          },
          {
            title: "What it proved",
            body: "I can work across different product surfaces without pretending one architecture style solves every problem.",
          },
        ],
      },
      contract: {
        kicker: "Contract work",
        title: "Logistics app modernization",
        summary:
          "Modernized a logistics application, introduced SwiftUI into a UIKit codebase, and helped shift part of the workflow from desktop to mobile.",
        meta: ["2022", "UIKit", "SwiftUI", "Logistics"],
        sections: [
          {
            title: "Main contribution",
            items: [
              "Added SwiftUI components into an existing UIKit app",
              "Supported modernization without a rewrite fantasy",
              "Moved useful business actions onto the phone",
            ],
          },
          {
            title: "Why it matters",
            body: "This is the kind of work many real products need: targeted improvement inside an imperfect existing system.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Work habit",
        title: "Coding mobile applications",
        summary:
          "The image is obvious, but the point is still relevant: I spend serious time building, not just talking about building.",
        meta: ["Swift", "KMP", "Mobile"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Why it is here",
            body: "Some portfolios hide the actual work behind decoration. I would rather make the work visible.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Product taste",
        title: "Nintendo Switch",
        summary:
          "A simple reminder that product design wins when it feels understandable and useful before it feels clever.",
        meta: ["Games", "Product design"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Good consumer products teach a lot about feedback loops, ergonomics, and how people forgive complexity only when the experience earns it.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Career material",
        title: "Printed CV",
        summary:
          "I still like seeing work translated into something direct and concrete.",
        meta: ["Resume", "Presentation"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Why it belongs",
            body: "A page should be clear enough that it survives both a screen and a printed sheet. If it only works with animation, it is weak.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "Current base",
        title: "Argentina",
        summary: "Current home base and a serious chapter, not a random stop.",
        meta: ["Argentina", "Family move"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Location affects work rhythm, future planning, and what kind of opportunities make sense next.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Systems thinking",
        title: "NAS storage",
        summary:
          "I like tools that reduce chaos and keep important things organized.",
        meta: ["Systems", "Reliability"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Why it belongs",
            body: "That preference shows up in software too: predictable systems beat clever messes.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Growth phase",
        title: "Japan",
        summary:
          "A major growth period tied to learning, adaptation, and rebuilding routines in a new environment.",
        meta: ["Japan", "Relocation"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Long-term moves change how you think about work, planning, and what resilience actually means.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Perspective",
        title: "Kyoto",
        summary:
          "The mix of discipline, precision, and history leaves an impression for obvious reasons.",
        meta: ["Kyoto", "Observation"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Taste matters. Places shape the kind of products and interfaces you start respecting.",
          },
        ],
      },
    },
  },
  es: {
    meta: {
      title: "Eugene Rozhkov | Desarrollador iOS",
    },
    brand: {
      role: "Desarrollador iOS",
    },
    nav: {
      experience: "Experiencia",
      skills: "Habilidades",
      journey: "Recorrido",
      gallery: "Galería",
      contact: "Contacto",
    },
    theme: {
      toggleToDark: "Modo oscuro",
      toggleToLight: "Modo claro",
    },
    hero: {
      eyebrow: "SwiftUI, UIKit, Kotlin Multiplatform",
      title: "Construyo apps iOS que siguen siendo útiles bajo presión real.",
      summary:
        "Salud, logística y trabajo de producto. Me importa lanzar interfaces limpias, código estable y experiencias móviles en las que la gente realmente pueda confiar.",
      primaryCta: "Ver experiencia",
      secondaryCta: "Abrir resumen",
      stats: [
        { value: "3+", label: "años de trabajo profesional en mobile" },
        { value: "3", label: "países donde ya viví y me adapté" },
        { value: "4", label: "idiomas humanos estudiados o usados" },
      ],
      availability: {
        eyebrow: "Situación actual",
        title: "Basado en Argentina, abierto a equipos remotos serios.",
        copy: "Ya me relocalicé entre países con mi familia. Me adapto rápido, me comunico de forma directa y trabajo bien en entornos distribuidos.",
        pills: ["Apps de salud", "Conozco KMP", "Colaboración async"],
      },
    },
    experience: {
      eyebrow: "Trabajo",
      title: "Experiencia más cerca de producción que del teatro de portfolio.",
      intro:
        "Lo importante no es el cargo. Lo importante es si el trabajo sobrevivió usuarios reales, restricciones reales y presión real de entrega.",
      viewDetails: "Ver detalles",
      items: [
        {
          modal: "lhpc",
          role: "Desarrollador iOS",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Feb 2024 - Actualidad",
          summary:
            "Desarrollé y lancé una app iOS para una startup médica en India.",
          tags: ["iOS", "Salud", "Remoto"],
        },
        {
          modal: "reshenie",
          role: "Desarrollador iOS",
          company: "Reshenie LLC",
          period: "Verano 2023 - Primavera 2024",
          summary:
            "Trabajé en productos médicos con KMP: una herramienta para optometristas en iPad y una app para pacientes.",
          tags: ["KMP", "iPadOS", "Salud"],
        },
        {
          modal: "contract",
          role: "Desarrollador iOS por contrato",
          company: "Emprendedor individual",
          period: "Primavera 2022 - Otoño 2022",
          summary:
            "Modernicé una app logística, introduje SwiftUI en UIKit y moví tareas de escritorio al móvil.",
          tags: ["UIKit", "SwiftUI", "Logística"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Enfoque técnico",
      intro:
        "El stack importa, pero solo si lleva a un mejor producto y a una base de código que se pueda seguir entregando.",
      groups: [
        {
          title: "Base iOS",
          text: "Plataforma móvil principal y trabajo de interfaz.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Entrega de producto",
          text: "La parte donde las funciones se convierten en software usable.",
          items: [
            "Implementación de features",
            "Integración de APIs",
            "Refinamiento de UI",
            "Lanzamientos",
          ],
        },
        {
          title: "Visión cross-platform",
          text: "Útil cuando mobile convive con un stack compartido.",
          items: [
            "Kotlin Multiplatform",
            "Equipos distribuidos",
            "Git workflows",
            "Codebases existentes",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Enfoque",
      title: "Cómo trabajo",
      intro:
        "Esta parte suele importar más una vez que el filtro de stack desaparece.",
      items: [
        "Priorizo decisiones claras de producto, flujos estables e interfaces que no peleen con el usuario.",
        "Puedo entrar en un codebase existente y mejorarlo sin fingir que reescribir todo es la respuesta normal.",
        "Trabajo bien con equipos remotos, comunicación async y restricciones prácticas en vez de ideales.",
        "La relocalización y la adaptación ya son parte de mi vida, así que el cambio no me desordena.",
      ],
    },
    languages: {
      eyebrow: "Idiomas",
      title: "Idiomas humanos",
      items: [
        { name: "Ruso", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" },
        { name: "Japonés", level: "Intermedio" },
        { name: "Finés", level: "Inicial" },
      ],
    },
    journey: {
      eyebrow: "Relocalización",
      title: "Contexto profesional y mudanzas",
      intro:
        "El CV se entiende mejor cuando también se ve la línea de vida real.",
      items: [
        {
          period: "May 2025 - Actualidad",
          place: "Argentina",
          text: "Me mudé con mi esposa para construir estabilidad familiar a largo plazo y seguir creciendo internacionalmente.",
        },
        {
          period: "Jun 2024 - May 2025",
          place: "Japón",
          text: "Primer traslado internacional de largo plazo. Etapa intensa de aprendizaje, nuevas rutinas y nuevo entorno.",
        },
        {
          period: "Antes de 2024",
          place: "Rusia",
          text: "Ahí construí la base: trabajo por contrato, trabajo en equipo y el paso de aprender a entregar.",
        },
      ],
    },
    interests: {
      eyebrow: "Intereses",
      title: "Fuera del trabajo",
      intro:
        "Sirve porque los intereses muestran cómo aprende alguien, no porque los hobbies deban verse bonitos.",
      items: [
        "Aprendizaje de idiomas",
        "Instrumentos musicales",
        "Libros de ciencia",
        "Ideas de apps personales",
        "Type racing",
        "Escribir artículos de IT",
        "Manga de horror",
      ],
    },
    gallery: {
      eyebrow: "Snapshots",
      title: "Contexto adicional",
      intro:
        "No toda señal útil cabe en una lista de bullets. Estas tarjetas agregan contexto sin ensuciar el flujo principal.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Programando apps móviles",
          label: "Trabajo",
          text: "La más obvia: desarrollo mobile no es solo una línea del CV, sigue siendo donde pongo tiempo serio.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Juegos",
          text: "Recordatorio de que un buen producto debe sentirse entendible antes que técnico.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "CV impreso",
          label: "Carrera",
          text: "Todavía me gusta ver el trabajo convertido en algo tangible y directo.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Argentina",
          label: "Base",
          text: "Base actual y centro práctico de la siguiente etapa.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "Almacenamiento NAS",
          label: "Sistemas",
          text: "Me gustan las herramientas que reducen el caos y mantienen los datos bajo control.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Japón",
          label: "Relocalización",
          text: "Una etapa fuerte de crecimiento, no solo un destino.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Kioto",
          label: "Perspectiva",
          text: "La mezcla de disciplina, historia y precisión deja una impresión por razones obvias.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Si el equipo va en serio, contactame.",
      copy: "El email es mejor para hablar de roles. GitHub muestra código. Telegram es lo más rápido para una conversación directa.",
      actions: {
        email: "Enviar email",
        github: "Ver GitHub",
        telegram: "Abrir Telegram",
      },
    },
    footer: {
      copy: "Hecho por Eugene Rozhkov",
    },
    facts: [
      {
        index: "01",
        title: "Entrega práctica de producto",
        text: "Nada de teatro visual. Trabajo en apps de producción, migraciones y features que tienen que sobrevivir al release.",
        button: "Por qué importa",
        modal: "profile",
      },
      {
        index: "02",
        title: "Dominios de salud y servicios",
        text: "La mayor parte de mi trabajo está en productos médicos y operativos donde la claridad vale más que la decoración.",
        button: "Abrir detalles",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "Historia de relocalización",
        text: "Japón y Argentina no fueron turismo. Fueron mudanzas reales, ciclos de aprendizaje y prueba de adaptación.",
        button: "Leer más",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Cerrar",
    },
    modals: {
      profile: {
        kicker: "Resumen",
        title: "Lo que esta página realmente está diciendo",
        summary:
          "Soy un desarrollador iOS con experiencia práctica de producto, sesgo por entregar y una forma de trabajo que encaja mejor con equipos distribuidos que con la presentación vacía.",
        meta: ["SwiftUI", "UIKit", "Trabajo remoto", "Argentina"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Valor principal",
            body: "El punto fuerte no es ser llamativo. Es ser útil: UI entendible, entrega estable y una forma tranquila de lidiar con restricciones reales.",
          },
          {
            title: "Encaje actual",
            items: [
              "Equipos de producto remotos o distribuidos",
              "Roles iOS con responsabilidad real",
              "Productos donde la confiabilidad importa más que el show",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Dominio",
        title: "Por qué importan salud y servicios",
        summary:
          "Estos productos castigan el pensamiento descuidado. Eso es útil. Obliga a decisiones más claras, UI más clara y mejor comunicación con perfiles no técnicos.",
        meta: ["Salud", "UX operativa", "Confianza"],
        sections: [
          {
            title: "Qué cambia el dominio",
            items: [
              "Los flujos deben ser claros bajo presión",
              "La ambigüedad hace perder tiempo y confianza",
              "Entregar importa, pero equivocarse también",
            ],
          },
          {
            title: "Qué aporto",
            body: "Me siento cómodo en productos donde el comportamiento limpio importa más que mostrar ingenio técnico.",
          },
        ],
      },
      relocation: {
        kicker: "Contexto de vida",
        title: "La relocalización ya es real, no hipotética",
        summary:
          "Ya me mudé entre países con mi familia. Eso importa porque adaptación, comunicación y planificación de largo plazo ya fueron probadas en la vida real.",
        meta: ["Argentina", "Japón", "Mudanza familiar"],
        sections: [
          {
            title: "Por qué importa profesionalmente",
            items: [
              "Adaptación rápida a entornos nuevos",
              "Comodidad con comunicación async",
              "Menor fricción en equipos internacionales",
            ],
          },
          {
            title: "Contexto personal",
            body: "La mudanza a Argentina estuvo ligada a estabilidad familiar y futuro. No es un experimento temporal.",
          },
        ],
      },
      lhpc: {
        kicker: "Rol actual",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "Desarrollé y lancé una app iOS para una startup médica de India.",
        meta: ["Feb 2024 - Actualidad", "iOS", "Startup médica"],
        sections: [
          {
            title: "Foco del trabajo",
            items: [
              "Desarrollo iOS de producción",
              "Entrega de producto de salud",
              "Colaboración remota entre equipos",
            ],
          },
          {
            title: "Por qué importa",
            body: "Es trabajo reciente y práctico ligado a un release real, no un proyecto de aprendizaje.",
          },
        ],
      },
      reshenie: {
        kicker: "Trabajo médico con KMP",
        title: "Reshenie LLC",
        summary:
          "Trabajé en varios productos médicos con KMP: una app iPadOS para optometristas y un gabinete personal para pacientes.",
        meta: ["Verano 2023 - Primavera 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Rango de producto",
            items: [
              "Herramientas para especialistas",
              "App para pacientes",
              "Entorno de stack compartido con Kotlin Multiplatform",
            ],
          },
          {
            title: "Qué demostró",
            body: "Puedo trabajar sobre distintas superficies de producto sin fingir que un solo estilo de arquitectura resuelve todo.",
          },
        ],
      },
      contract: {
        kicker: "Trabajo por contrato",
        title: "Modernización de app logística",
        summary:
          "Modernicé una aplicación logística, introduje SwiftUI en un codebase UIKit y ayudé a mover parte del flujo del escritorio al móvil.",
        meta: ["2022", "UIKit", "SwiftUI", "Logística"],
        sections: [
          {
            title: "Contribución principal",
            items: [
              "Agregué componentes SwiftUI dentro de una app UIKit",
              "Apoyé una modernización sin fantasear con un rewrite",
              "Moví acciones útiles del negocio al teléfono",
            ],
          },
          {
            title: "Por qué importa",
            body: "Este es el tipo de trabajo que muchos productos reales necesitan: mejora puntual dentro de un sistema existente e imperfecto.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Hábito de trabajo",
        title: "Programando apps móviles",
        summary:
          "La imagen es obvia, pero el punto sigue siendo válido: paso tiempo serio construyendo, no solo hablando de construir.",
        meta: ["Swift", "KMP", "Mobile"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Por qué está acá",
            body: "Algunos portfolios esconden el trabajo real detrás de decoración. Prefiero que el trabajo se vea.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Criterio de producto",
        title: "Nintendo Switch",
        summary:
          "Un recordatorio simple de que el diseño de producto gana cuando se entiende y se usa bien antes de sentirse ingenioso.",
        meta: ["Juegos", "Diseño de producto"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "Los buenos productos de consumo enseñan mucho sobre feedback, ergonomía y cómo la gente solo tolera la complejidad cuando la experiencia se la gana.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Material profesional",
        title: "CV impreso",
        summary:
          "Todavía me gusta ver el trabajo convertido en algo concreto y directo.",
        meta: ["CV", "Presentación"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "Una página debería ser tan clara que sobreviva tanto en pantalla como en papel. Si solo funciona con animación, es débil.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "Base actual",
        title: "Argentina",
        summary: "Base actual y capítulo serio, no una escala aleatoria.",
        meta: ["Argentina", "Mudanza familiar"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "La ubicación afecta el ritmo de trabajo, la planificación futura y qué oportunidades realmente tienen sentido.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Pensamiento en sistemas",
        title: "Almacenamiento NAS",
        summary:
          "Me gustan las herramientas que reducen el caos y mantienen lo importante organizado.",
        meta: ["Sistemas", "Confiabilidad"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "Esa preferencia también aparece en software: los sistemas predecibles le ganan a los desórdenes ingeniosos.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Etapa de crecimiento",
        title: "Japón",
        summary:
          "Un período fuerte de crecimiento ligado a aprendizaje, adaptación y reconstrucción de rutinas en un entorno nuevo.",
        meta: ["Japón", "Relocalización"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "Las mudanzas largas cambian cómo pensás el trabajo, la planificación y lo que de verdad significa resiliencia.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Perspectiva",
        title: "Kioto",
        summary:
          "La mezcla de disciplina, precisión e historia deja marca por razones evidentes.",
        meta: ["Kioto", "Observación"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Por qué pertenece",
            body: "El criterio importa. Los lugares moldean el tipo de productos e interfaces que uno empieza a respetar.",
          },
        ],
      },
    },
  },
  ru: {
    meta: {
      title: "Eugene Rozhkov | iOS-разработчик",
    },
    brand: {
      role: "iOS-разработчик",
    },
    nav: {
      experience: "Опыт",
      skills: "Навыки",
      journey: "Путь",
      gallery: "Галерея",
      contact: "Контакты",
    },
    theme: {
      toggleToDark: "Темная тема",
      toggleToLight: "Светлая тема",
    },
    hero: {
      eyebrow: "SwiftUI, UIKit, Kotlin Multiplatform",
      title:
        "Я делаю iOS-приложения, которые не разваливаются при реальной нагрузке.",
      summary:
        "Медицина, логистика и продуктовая разработка. Для меня важны чистый интерфейс, стабильный код и мобильный опыт, которому можно доверять.",
      primaryCta: "Посмотреть опыт",
      secondaryCta: "Открыть профиль",
      stats: [
        { value: "3+", label: "года профессиональной mobile-разработки" },
        { value: "3", label: "страны, где я уже жил и адаптировался" },
        { value: "4", label: "естественных языка изучал или использовал" },
      ],
      availability: {
        eyebrow: "Сейчас",
        title: "Живу в Аргентине, открыт к сильным удаленным командам.",
        copy: "Я уже переезжал между странами вместе с семьей. Быстро адаптируюсь, говорю прямо и нормально работаю в распределенной среде.",
        pills: ["Медицинские приложения", "Понимаю KMP", "Async-работа"],
      },
    },
    experience: {
      eyebrow: "Работа",
      title: "Опыт, который ближе к продакшену, чем к показному портфолио.",
      intro:
        "Важно не название должности. Важно, выдержала ли работа реальных пользователей, реальные ограничения и реальное давление по срокам.",
      viewDetails: "Подробнее",
      items: [
        {
          modal: "lhpc",
          role: "iOS-разработчик",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Фев 2024 - сейчас",
          summary:
            "Разработал и выпустил iOS-приложение для медицинского стартапа из Индии.",
          tags: ["iOS", "Медицина", "Remote"],
        },
        {
          modal: "reshenie",
          role: "iOS-разработчик",
          company: "Reshenie LLC",
          period: "Лето 2023 - весна 2024",
          summary:
            "Работал над медицинскими KMP-продуктами: iPad-инструментом для оптометристов и приложением для пациентов.",
          tags: ["KMP", "iPadOS", "Healthcare"],
        },
        {
          modal: "contract",
          role: "Контрактный iOS-разработчик",
          company: "Индивидуальный предприниматель",
          period: "Весна 2022 - осень 2022",
          summary:
            "Модернизировал логистическое приложение, внедрил SwiftUI в UIKit и перенес часть desktop-сценариев на телефон.",
          tags: ["UIKit", "SwiftUI", "Логистика"],
        },
      ],
    },
    skills: {
      eyebrow: "Стек",
      title: "Технический фокус",
      intro:
        "Стек важен только тогда, когда он ведет к лучшему продукту и кодовой базе, которую можно дальше нормально развивать.",
      groups: [
        {
          title: "iOS-основа",
          text: "Главная мобильная платформа и UI-работа.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Доставка продукта",
          text: "Та часть, где фичи превращаются в рабочий софт.",
          items: ["Реализация фич", "Интеграция API", "Доработка UI", "Релизы"],
        },
        {
          title: "Понимание cross-platform",
          text: "Полезно, когда mobile живет рядом с shared-стеком.",
          items: [
            "Kotlin Multiplatform",
            "Distributed teams",
            "Git workflows",
            "Существующие codebase",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Подход",
      title: "Как я работаю",
      intro:
        "Обычно именно это начинает иметь значение после первого фильтра по стеку.",
      items: [
        "Я тяготею к понятным продуктовым решениям, стабильным сценариям и интерфейсам, которые не мешают пользователю.",
        "Могу войти в существующий codebase и улучшать его, не pretending, что полный rewrite — это нормальный ответ на все.",
        "Нормально работаю с удаленными командами, async-коммуникацией и практическими ограничениями вместо идеальных условий.",
        "Переезды и адаптация уже часть моей жизни, поэтому перемены меня не выбивают.",
      ],
    },
    languages: {
      eyebrow: "Языки",
      title: "Естественные языки",
      items: [
        { name: "Русский", level: "Родной" },
        { name: "Английский", level: "Продвинутый" },
        { name: "Японский", level: "Средний" },
        { name: "Финский", level: "Начальный" },
      ],
    },
    journey: {
      eyebrow: "Переезды",
      title: "Контекст карьеры и жизни",
      intro: "Резюме выглядит честнее, когда видно и реальную жизненную линию.",
      items: [
        {
          period: "Май 2025 - сейчас",
          place: "Аргентина",
          text: "Переехал с женой, чтобы строить семейную стабильность в долгую и продолжать развиваться международно.",
        },
        {
          period: "Июн 2024 - май 2025",
          place: "Япония",
          text: "Первый долгий международный переезд. Сильный этап обучения, новых привычек и новой среды.",
        },
        {
          period: "До 2024",
          place: "Россия",
          text: "Здесь сформировалась база: контрактная работа, командная работа и переход от обучения к реальным поставкам.",
        },
      ],
    },
    interests: {
      eyebrow: "Интересы",
      title: "Вне работы",
      intro:
        "Это полезно не ради красоты, а потому что интересы показывают, как человек учится и на что у него хватает внимания.",
      items: [
        "Изучение языков",
        "Музыкальные инструменты",
        "Научные книги",
        "Идеи для личных приложений",
        "Type racing",
        "IT-статьи",
        "Хоррор-манга",
      ],
    },
    gallery: {
      eyebrow: "Визуальный контекст",
      title: "Дополнительная информация",
      intro:
        "Не все полезные сигналы помещаются в список буллетов. Эти карточки добавляют контекст без лишнего шума.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Разработка мобильных приложений",
          label: "Работа",
          text: "Самое очевидное: мобильная разработка для меня не просто строка в резюме, а место, куда реально уходит внимание.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Игры",
          text: "Напоминание о том, что хороший продукт сначала должен быть понятным и удобным, а уже потом технически интересным.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "Печатное CV",
          label: "Карьера",
          text: "Мне все еще нравится видеть работу в прямой и осязаемой форме.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Аргентина",
          label: "База",
          text: "Текущая база и практический центр следующего этапа.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "NAS-хранилище",
          label: "Системы",
          text: "Мне нравятся инструменты, которые убирают хаос и держат важные данные под контролем.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Япония",
          label: "Переезд",
          text: "Большой этап роста, а не просто точка на карте.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Киото",
          label: "Впечатление",
          text: "Сочетание дисциплины, истории и точности трудно не уважать.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Если команда настроена серьезно, пишите.",
      copy: "Для обсуждения ролей лучше email. GitHub показывает код. Telegram — самый быстрый канал для прямого общения.",
      actions: {
        email: "Написать email",
        github: "Открыть GitHub",
        telegram: "Открыть Telegram",
      },
    },
    footer: {
      copy: "Сделано Eugene Rozhkov",
    },
    facts: [
      {
        index: "01",
        title: "Практическая доставка продукта",
        text: "Без визуального театра. Я работаю с продакшен-приложениями, миграциями и фичами, которые должны пережить релиз.",
        button: "Почему это важно",
        modal: "profile",
      },
      {
        index: "02",
        title: "Медицина и сервисные продукты",
        text: "Большая часть моей работы — в медицинских и операционных продуктах, где ясность важнее украшений.",
        button: "Открыть детали",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "История переездов",
        text: "Япония и Аргентина — это не туризм. Это долгие переезды, циклы обучения и доказанная адаптивность.",
        button: "Читать дальше",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Закрыть",
    },
    modals: {
      profile: {
        kicker: "Кратко",
        title: "Что эта страница на самом деле говорит",
        summary:
          "Я iOS-разработчик с практическим продуктовым опытом, сильным уклоном в delivery и рабочим стилем, который лучше подходит распределенным командам, чем пустая презентационность.",
        meta: ["SwiftUI", "UIKit", "Remote", "Аргентина"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Главная ценность",
            body: "Моя сильная сторона не в эффектности. Она в полезности: понятный UI, стабильная доставка и спокойное отношение к реальным ограничениям.",
          },
          {
            title: "Хорошее совпадение",
            items: [
              "Удаленные или распределенные продуктовые команды",
              "iOS-роли с реальной ответственностью",
              "Продукты, где надежность важнее показухи",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Домены",
        title: "Почему медицина и сервисные продукты важны",
        summary:
          "Эти продукты наказывают за небрежное мышление. Это полезно. Они вынуждают принимать более ясные решения, делать более понятный UI и лучше общаться с неинженерными стейкхолдерами.",
        meta: ["Медицина", "Operational UX", "Доверие"],
        sections: [
          {
            title: "Что меняется в таком домене",
            items: [
              "Сценарии должны быть понятны под давлением",
              "Неясность тратит время и доверие",
              "Релиз важен, но ошибки тоже дорого стоят",
            ],
          },
          {
            title: "Что я привношу",
            body: "Мне комфортно в продуктах, где чистое поведение важнее демонстрации технической изобретательности.",
          },
        ],
      },
      relocation: {
        kicker: "Жизненный контекст",
        title: "Переезд уже проверен жизнью, а не на словах",
        summary:
          "Я уже переезжал между странами с семьей. Это важно, потому что адаптация, коммуникация и долгосрочное планирование уже проверены на практике.",
        meta: ["Аргентина", "Япония", "Семья"],
        sections: [
          {
            title: "Почему это важно профессионально",
            items: [
              "Быстрая адаптация к новой среде",
              "Комфорт с async-коммуникацией",
              "Меньше трения в международных командах",
            ],
          },
          {
            title: "Личный контекст",
            body: "Переезд в Аргентину связан с семейной стабильностью и будущим. Это не временный эксперимент.",
          },
        ],
      },
      lhpc: {
        kicker: "Текущая роль",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "Разработал и выпустил iOS-приложение для медицинского стартапа из Индии.",
        meta: ["Фев 2024 - сейчас", "iOS", "Medical startup"],
        sections: [
          {
            title: "Фокус работы",
            items: [
              "Продакшен iOS-разработка",
              "Доставка медицинского продукта",
              "Удаленное взаимодействие между командами",
            ],
          },
          {
            title: "Почему это важно",
            body: "Это свежая практическая работа, связанная с реальным релизом, а не учебный проект.",
          },
        ],
      },
      reshenie: {
        kicker: "Медицинские KMP-проекты",
        title: "Reshenie LLC",
        summary:
          "Работал над несколькими медицинскими продуктами на KMP: iPadOS-приложением для оптометристов и личным кабинетом пациента.",
        meta: ["Лето 2023 - весна 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Диапазон продуктов",
            items: [
              "Инструменты для специалистов",
              "Приложение для пациентов",
              "Shared-stack среда с Kotlin Multiplatform",
            ],
          },
          {
            title: "Что это показало",
            body: "Я могу работать с разными типами продукта, не pretending, что один архитектурный подход решает вообще все.",
          },
        ],
      },
      contract: {
        kicker: "Контрактная работа",
        title: "Модернизация логистического приложения",
        summary:
          "Модернизировал логистическое приложение, внедрил SwiftUI в UIKit-кодовую базу и помог перенести часть desktop-процессов на телефон.",
        meta: ["2022", "UIKit", "SwiftUI", "Логистика"],
        sections: [
          {
            title: "Главный вклад",
            items: [
              "Добавил SwiftUI-компоненты в существующее UIKit-приложение",
              "Поддержал модернизацию без фантазий про rewrite",
              "Перенес полезные бизнес-сценарии на мобильное устройство",
            ],
          },
          {
            title: "Почему это важно",
            body: "Это тот тип работы, который нужен многим реальным продуктам: точечное улучшение внутри несовершенной существующей системы.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Рабочая привычка",
        title: "Разработка мобильных приложений",
        summary:
          "Картинка очевидная, но смысл все еще важен: я трачу серьезное время на создание, а не только на разговоры о создании.",
        meta: ["Swift", "KMP", "Mobile"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Некоторые портфолио прячут саму работу за декорацией. Я предпочитаю, чтобы работа была видна.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Вкус к продукту",
        title: "Nintendo Switch",
        summary:
          "Простое напоминание: продукт выигрывает тогда, когда сначала ощущается понятным и удобным, а уже потом умным.",
        meta: ["Игры", "Product design"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Хорошие потребительские продукты многое учат про обратную связь, эргономику и то, почему люди терпят сложность только когда опыт это заслужил.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Карьерные материалы",
        title: "Печатное CV",
        summary:
          "Мне до сих пор нравится видеть работу в прямой, понятной и осязаемой форме.",
        meta: ["Резюме", "Подача"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Страница должна быть настолько ясной, чтобы работать и на экране, и на бумаге. Если она держится только на анимации, значит основа слабая.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "Текущая база",
        title: "Аргентина",
        summary:
          "Текущий дом и серьезная следующая глава, а не случайная точка.",
        meta: ["Аргентина", "Семья"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Локация влияет на рабочий ритм, долгосрочное планирование и на то, какие возможности реально подходят дальше.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Системное мышление",
        title: "NAS-хранилище",
        summary:
          "Мне нравятся инструменты, которые убирают хаос и держат важное организованным.",
        meta: ["Системы", "Надежность"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "То же предпочтение видно и в софте: предсказуемые системы лучше, чем хитро запутанный беспорядок.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Этап роста",
        title: "Япония",
        summary:
          "Большой этап роста, связанный с обучением, адаптацией и перестройкой жизни в новой среде.",
        meta: ["Япония", "Переезд"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Долгие переезды меняют то, как ты думаешь о работе, планировании и о реальном смысле устойчивости.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Впечатление",
        title: "Киото",
        summary:
          "Сочетание дисциплины, точности и истории оставляет след по очевидным причинам.",
        meta: ["Киото", "Наблюдение"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Вкус важен. Места формируют то, какие продукты и интерфейсы начинаешь по-настоящему уважать.",
          },
        ],
      },
    },
  },
};

const localeMap = {
  en: "en",
  es: "es",
  ru: "ru",
};

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = themeToggle.querySelector(".theme-label");
const languageButtons = document.querySelectorAll(".lang-button");
const modalShell = document.getElementById("detail-modal");
const modalTitle = document.getElementById("modal-title");
const modalKicker = document.getElementById("modal-kicker");
const modalSummary = document.getElementById("modal-summary");
const modalMeta = document.getElementById("modal-meta");
const modalSections = document.getElementById("modal-sections");
const modalImage = document.getElementById("modal-image");
const factGrid = document.getElementById("about");
const experienceGrid = document.getElementById("experience-grid");
const skillGroups = document.getElementById("skill-groups");
const strengthList = document.getElementById("strength-list");
const spokenLanguages = document.getElementById("spoken-languages");
const journeyTrack = document.getElementById("journey-track");
const interestCloud = document.getElementById("interest-cloud");
const galleryGrid = document.getElementById("gallery-grid");

let activeLocale = getInitialLocale();
let activeTheme = getInitialTheme();

function getInitialLocale() {
  try {
    const saved = localStorage.getItem("pvresume-locale");
    if (saved && translations[saved]) {
      return saved;
    }
  } catch (error) {
    // Ignore storage access failures and fall back to browser language.
  }

  const preferred = navigator.language.toLowerCase();
  if (preferred.startsWith("es")) {
    return "es";
  }
  if (preferred.startsWith("ru")) {
    return "ru";
  }
  return "en";
}

function getInitialTheme() {
  const preset = document.documentElement.dataset.theme;
  if (preset === "light" || preset === "dark") {
    return preset;
  }

  try {
    const saved = localStorage.getItem("pvresume-theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch (error) {
    // Ignore storage access failures and fall back to system preference.
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function getNestedValue(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function updateThemeToggleText() {
  const copy = translations[activeLocale]?.theme || translations.en.theme;
  const label = activeTheme === "dark" ? copy.toggleToLight : copy.toggleToDark;

  themeToggle.dataset.theme = activeTheme;
  themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
  themeToggle.setAttribute("aria-label", label);
  themeLabel.textContent = label;
}

function translateStaticContent(locale) {
  const current = translations[locale];
  document.documentElement.lang = localeMap[locale];
  document.title = current.meta.title;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getNestedValue(current, node.dataset.i18n);
    if (value !== undefined) {
      node.textContent = value;
    }
  });

  const closeButton = modalShell.querySelector(".modal-close");
  closeButton.setAttribute("aria-label", current.modalLabels.close);
}

function renderFacts(locale) {
  const items = translations[locale].facts
    .map(
      (fact) => `
        <article class="fact-card">
            <span class="fact-index">${fact.index}</span>
            <h3>${fact.title}</h3>
            <p>${fact.text}</p>
            <button class="fact-button" type="button" data-modal="${fact.modal}">${fact.button}</button>
        </article>
    `,
    )
    .join("");

  factGrid.innerHTML = items;
}

function renderExperience(locale) {
  const data = translations[locale].experience;
  experienceGrid.innerHTML = data.items
    .map(
      (item) => `
        <article class="experience-card">
            <div class="experience-top">
                <div>
                    <h3>${item.role}</h3>
                    <p>${item.company}</p>
                </div>
                <span class="experience-period">${item.period}</span>
            </div>
            <p>${item.summary}</p>
            <div class="card-tags">
                ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <button class="experience-button" type="button" data-modal="${item.modal}">${data.viewDetails}</button>
        </article>
    `,
    )
    .join("");
}

function renderSkillGroups(locale) {
  skillGroups.innerHTML = translations[locale].skills.groups
    .map(
      (group) => `
        <article class="skill-group">
            <h3>${group.title}</h3>
            <p>${group.text}</p>
            <ul>
                ${group.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </article>
    `,
    )
    .join("");
}

function renderStrengths(locale) {
  strengthList.innerHTML = translations[locale].strengths.items
    .map(
      (item) => `
        <article class="strength-item">
            <p>${item}</p>
        </article>
    `,
    )
    .join("");
}

function renderLanguages(locale) {
  spokenLanguages.innerHTML = translations[locale].languages.items
    .map(
      (item) => `
        <article class="language-row">
            <strong>${item.name}</strong>
            <span>${item.level}</span>
        </article>
    `,
    )
    .join("");
}

function renderJourney(locale) {
  journeyTrack.innerHTML = translations[locale].journey.items
    .map(
      (item) => `
        <article class="journey-item">
            <span class="journey-period">${item.period}</span>
            <h3>${item.place}</h3>
            <p>${item.text}</p>
        </article>
    `,
    )
    .join("");
}

function renderInterests(locale) {
  interestCloud.innerHTML = translations[locale].interests.items
    .map(
      (item) => `
        <div class="interest-pill">${item}</div>
    `,
    )
    .join("");
}

function renderGallery(locale) {
  galleryGrid.innerHTML = translations[locale].gallery.items
    .map(
      (item) => `
        <button class="gallery-card" type="button" data-modal="${item.modal}" data-size="${item.size}">
            <img class="gallery-image" src="${item.image}" alt="${item.title}">
            <div class="gallery-content">
                <span class="gallery-label">${item.label}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        </button>
    `,
    )
    .join("");
}

function renderModal(key) {
  const modalData = translations[activeLocale].modals[key];
  if (!modalData) {
    return;
  }

  modalKicker.textContent = modalData.kicker;
  modalTitle.textContent = modalData.title;
  modalSummary.textContent = modalData.summary;
  modalMeta.innerHTML = (modalData.meta || [])
    .map((item) => `<span>${item}</span>`)
    .join("");
  modalSections.innerHTML = (modalData.sections || [])
    .map((section) => {
      const list = section.items
        ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : `<p>${section.body}</p>`;

      return `
            <section class="modal-section">
                <h3>${section.title}</h3>
                ${list}
            </section>
        `;
    })
    .join("");

  if (modalData.image) {
    modalImage.hidden = false;
    modalImage.src = modalData.image;
    modalImage.alt = modalData.title;
  } else {
    modalImage.hidden = true;
    modalImage.removeAttribute("src");
    modalImage.alt = "";
  }
}

function openModal(key) {
  renderModal(key);
  modalShell.dataset.activeModal = key;
  modalShell.hidden = false;
  modalShell.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalShell.hidden = true;
  modalShell.setAttribute("aria-hidden", "true");
  modalShell.dataset.activeModal = "";
  document.body.classList.remove("modal-open");
}

function setTheme(theme) {
  if (theme !== "light" && theme !== "dark") {
    return;
  }

  activeTheme = theme;
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem("pvresume-theme", theme);
  } catch (error) {
    // Ignore storage access failures in restricted environments.
  }

  updateThemeToggleText();
}

function setLanguage(locale) {
  if (!translations[locale]) {
    return;
  }

  activeLocale = locale;
  try {
    localStorage.setItem("pvresume-locale", locale);
  } catch (error) {
    // Ignore storage access failures in restricted environments.
  }
  translateStaticContent(locale);
  renderFacts(locale);
  renderExperience(locale);
  renderSkillGroups(locale);
  renderStrengths(locale);
  renderLanguages(locale);
  renderJourney(locale);
  renderInterests(locale);
  renderGallery(locale);
  updateThemeToggleText();

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const openKey = modalShell.dataset.activeModal;
  if (openKey) {
    renderModal(openKey);
  }
}

function closeMenu() {
  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const willOpen = !siteHeader.classList.contains("menu-open");
  siteHeader.classList.toggle("menu-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
});

themeToggle.addEventListener("click", () => {
  setTheme(activeTheme === "dark" ? "light" : "dark");
  closeMenu();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (
    siteHeader.classList.contains("menu-open") &&
    !event.target.closest(".header-inner")
  ) {
    closeMenu();
  }

  const trigger = event.target.closest("[data-modal]");
  if (trigger) {
    openModal(trigger.dataset.modal);
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }

  const anchor = event.target.closest('a[href^="#"]');
  if (anchor) {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalShell.hidden) {
    closeModal();
  }
});

setLanguage(activeLocale);
setTheme(activeTheme);

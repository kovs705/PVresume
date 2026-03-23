const translations = {
  en: {
    meta: {
      title: "Eugene Rozhkov | Apple Platform Developer",
    },
    brand: {
      role: "Apple Platform Developer",
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
      eyebrow: "SwiftUI, UIKit, Apple Platforms, Kotlin Multiplatform",
      title: "I build for Apple platforms and think beyond ticket execution.",
      summary:
        "iOS is my base, not my limit. I work across product, interface, and delivery problems, and I prefer building useful software over waiting for instructions.",
      primaryCta: "See my work",
      secondaryCta: "Profile brief",
      stats: [
        { value: "4+", label: "years in professional mobile development" },
        { value: "3", label: "countries I have lived and adapted in" },
        { value: "4", label: "spoken languages studied or used" },
      ],
      availability: {
        eyebrow: "Current situation",
        title: "Based in Argentina, open to strong product teams.",
        copy: "I have already relocated across countries with my family, so I am comfortable with change, async collaboration, and long-term commitments.",
        pills: ["Apple platforms", "Healthcare", "Product mindset"],
      },
    },
    experience: {
      eyebrow: "Work",
      title: "I work best where product thinking matters as much as code.",
      intro:
        "These roles are different, but the pattern is the same: ship useful software, improve the product, and do more than just implement the obvious request.",
      viewDetails: "View details",
      items: [
        {
          modal: "lhpc",
          role: "iOS Developer",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Feb 2024 - Present",
          summary:
            "Built and released an iOS app for a medical startup in India.",
          tags: ["iOS", "Healthcare", "Remote"],
        },
        {
          modal: "reshenie",
          role: "iOS Developer",
          company: "Reshenie LLC",
          period: "Summer 2023 - Spring 2024",
          summary:
            "Worked on medical KMP products, including an iPad app for optometrists and a patient cabinet app.",
          tags: ["KMP", "iPadOS", "Medical"],
        },
        {
          modal: "contract",
          role: "Contract iOS Developer",
          company: "Individual Entrepreneur",
          period: "Spring 2022 - Fall 2022",
          summary:
            "Modernized a logistics app, brought SwiftUI into UIKit, and moved useful desktop flows to mobile.",
          tags: ["UIKit", "SwiftUI", "Logistics"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "What I actually bring",
      intro:
        "The stack matters, but only if it helps build a better product and keeps the codebase moving forward.",
      groups: [
        {
          title: "Apple platform work",
          text: "iOS is the center. I also think in terms of the wider Apple product surface.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Product and delivery",
          text: "I care about how a feature fits the product, not only how it compiles.",
          items: [
            "Feature implementation",
            "API integration",
            "Interface refinement",
            "Release work",
          ],
        },
        {
          title: "Range across domains",
          text: "I have worked across healthcare, logistics, and shared-stack environments.",
          items: [
            "Healthcare products",
            "Kotlin Multiplatform",
            "Existing codebases",
            "Remote collaboration",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Approach",
      title: "How I work",
      intro:
        "This is the part that matters once the basic stack filter is over.",
      items: [
        "I try to understand the product problem first, not just the ticket.",
        "I am comfortable improving an existing codebase without turning every problem into a rewrite.",
        "I move between interface work, implementation, and delivery details when the product needs it.",
        "I adapt quickly to new countries, teams, and working environments.",
      ],
    },
    languages: {
      eyebrow: "Languages",
      title: "Spoken languages",
      items: [
        { name: "Russian", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Japanese", level: "Intermediate" },
        { name: "Finnish", level: "Beginner" },
      ],
    },
    journey: {
      eyebrow: "Relocation",
      title: "Career context and relocation",
      intro: "The work makes more sense when the life timeline is visible too.",
      items: [
        {
          period: "May 2025 - Present",
          place: "Argentina",
          text: "I moved with my wife to build long-term stability and keep growing internationally.",
        },
        {
          period: "Jun 2024 - May 2025",
          place: "Japan",
          text: "My first long-term international move. Strong period of adaptation, learning, and new routines.",
        },
        {
          period: "Before 2024",
          place: "Russia",
          text: "This is where the base was built: contract work, team work, and the shift from learning into shipping.",
        },
      ],
    },
    interests: {
      eyebrow: "Interests",
      title: "Outside work",
      intro:
        "I keep this section because it says something about how I learn and what holds my attention.",
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
      eyebrow: "Context",
      title: "A few signals outside resume bullets",
      intro:
        "These cards are here to add context, not decoration. They explain what I pay attention to and how I think.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Building apps",
          label: "Work",
          text: "This is still where most of my focused time goes: building Apple-platform software and improving product details.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Product",
          text: "I pay attention to products that handle complexity without making the user feel it.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "Printed CV",
          label: "Career",
          text: "Clear presentation matters. If I cannot explain my work directly, it is not framed well enough.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Argentina",
          label: "Base",
          text: "This is my current base and the place from which I am building the next stage of my career.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "NAS storage",
          label: "Systems",
          text: "I like systems that stay organized, predictable, and under control.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Japan",
          label: "Relocation",
          text: "This was a serious period of adaptation and growth, not just a location change.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Kyoto",
          label: "Taste",
          text: "Places like this sharpen my taste for precision, structure, and restraint.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title:
        "If your team needs an Apple-platform developer who thinks like a product engineer, contact me.",
      copy: "Email is best for hiring conversations. GitHub shows public code. Telegram is fastest for direct contact.",
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
        title: "Apple platforms, not only iOS",
        text: "iOS is my main platform, but I think wider: product quality, interfaces, and how the work fits the Apple ecosystem.",
        button: "More",
        modal: "profile",
      },
      {
        index: "02",
        title: "More than ticket execution",
        text: "I try to understand why a feature matters and how it should work, not just implement what was written.",
        button: "Details",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "International move, steady work",
        text: "Japan and Argentina matter because they show adaptation, long-term thinking, and the ability to keep moving.",
        button: "Read",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Close",
    },
    modals: {
      profile: {
        kicker: "Profile",
        title: "How I position myself",
        summary:
          "I am an Apple-platform developer with iOS at the center, but I do not want to be limited to pure ticket execution. I care about product decisions, interface quality, and shipping useful work.",
        meta: ["Apple platforms", "SwiftUI", "UIKit", "Argentina"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Core value",
            body: "My main value is not just writing iOS code. It is being useful across product, interface, and delivery decisions while keeping the implementation clean.",
          },
          {
            title: "Best fit",
            items: [
              "Product teams building real Apple-platform software",
              "Roles with room for ownership, not only execution",
              "Teams that value clear thinking and direct communication",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Domain",
        title: "Why healthcare shaped my approach",
        summary:
          "Healthcare and service products forced me to care about clarity, trust, and calm decision-making. That changed how I think about interfaces and product quality.",
        meta: ["Healthcare", "Operational UX", "Trust"],
        sections: [
          {
            title: "What it changed",
            items: [
              "Flows need to stay clear under pressure",
              "Ambiguity wastes time and trust",
              "Product decisions matter as much as implementation",
            ],
          },
          {
            title: "What I take from it",
            body: "I am comfortable in products where the goal is not showing off, but making the software dependable and easy to use.",
          },
        ],
      },
      relocation: {
        kicker: "Relocation",
        title: "Why the international timeline matters",
        summary:
          "I have already moved across countries with my family. That matters because adaptation, long-term planning, and working through change are already part of real life for me.",
        meta: ["Argentina", "Japan", "Family move"],
        sections: [
          {
            title: "Professional impact",
            items: [
              "Fast adaptation to new environments",
              "Comfort with async communication",
              "Steady work through major life changes",
            ],
          },
          {
            title: "Personal context",
            body: "The move to Argentina is part of a long-term life decision, not a short experiment. I want the work path to be just as serious.",
          },
        ],
      },
      lhpc: {
        kicker: "Current role",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "I built and released an iOS app for a medical startup in India.",
        meta: ["Feb 2024 - Present", "iOS", "Healthcare"],
        sections: [
          {
            title: "What I handled",
            items: [
              "Production iOS development",
              "Medical product delivery",
              "Remote team collaboration",
            ],
          },
          {
            title: "Why it matters",
            body: "This is recent product work tied to an actual release. It reflects how I work now, not only what I learned earlier.",
          },
        ],
      },
      reshenie: {
        kicker: "KMP work",
        title: "Reshenie LLC",
        summary:
          "I worked on medical KMP products, including an iPad app for optometrists and a patient cabinet app.",
        meta: ["Summer 2023 - Spring 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Range of work",
            items: [
              "Specialist-facing product work",
              "Patient-facing app work",
              "Shared-stack development with Kotlin Multiplatform",
            ],
          },
          {
            title: "Why it matters",
            body: "This role showed that I can work across different product surfaces and different technical constraints without losing focus.",
          },
        ],
      },
      contract: {
        kicker: "Contract work",
        title: "Logistics app modernization",
        summary:
          "I modernized a logistics app, brought SwiftUI into a UIKit codebase, and helped move useful desktop workflows to mobile.",
        meta: ["2022", "UIKit", "SwiftUI", "Logistics"],
        sections: [
          {
            title: "Main contribution",
            items: [
              "Added SwiftUI inside an existing UIKit app",
              "Improved the product without relying on a rewrite",
              "Moved practical business actions onto the phone",
            ],
          },
          {
            title: "Why it matters",
            body: "A lot of real work looks like this: improve what exists, keep it moving, and make the product more useful instead of chasing a perfect reset.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Work",
        title: "Building apps",
        summary:
          "This belongs here because building Apple-platform software is still where I spend serious, focused time.",
        meta: ["Swift", "KMP", "Apple platforms"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Why it belongs",
            body: "I did not want this page to sound abstract. The work itself should stay visible.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Product",
        title: "Nintendo Switch",
        summary:
          "I pay attention to products that make complexity feel lighter for the user.",
        meta: ["Games", "Product design"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Consumer products are useful study material. They show how clarity, feedback, and restraint make complicated systems feel easy.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Career",
        title: "Printed CV",
        summary:
          "I care about presenting work clearly, without hiding behind effects or vague language.",
        meta: ["Resume", "Communication"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Why it belongs",
            body: "If I cannot explain the work directly, the presentation is weak. The same rule applies to products.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "Base",
        title: "Argentina",
        summary:
          "This is my current base and the place from which I am building the next stage of my work.",
        meta: ["Argentina", "Current base"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Location matters because it shapes daily work rhythm, future planning, and what long-term opportunities make sense.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Systems",
        title: "NAS storage",
        summary:
          "I like systems that stay organized, predictable, and under control.",
        meta: ["Systems", "Reliability"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Why it belongs",
            body: "That preference shows up in software too. I trust predictable structure more than clever chaos.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Relocation",
        title: "Japan",
        summary:
          "This was a serious period of adaptation, learning, and rebuilding routines in a new environment.",
        meta: ["Japan", "Growth"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Long moves change how you think about work, stability, and what it means to keep progressing under change.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Taste",
        title: "Kyoto",
        summary:
          "Places like this sharpen my taste for precision, structure, and restraint.",
        meta: ["Kyoto", "Observation"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Why it belongs",
            body: "Taste is part of product work. The environments I respect affect the kind of interfaces and products I want to build.",
          },
        ],
      },
    },
  },
  es: {
    meta: {
      title: "Eugene Rozhkov | Desarrollador para Apple Platforms",
    },
    brand: {
      role: "Desarrollador Apple Platforms",
    },
    nav: {
      experience: "Experiencia",
      skills: "Skills",
      journey: "Recorrido",
      gallery: "Galería",
      contact: "Contacto",
    },
    theme: {
      toggleToDark: "Modo oscuro",
      toggleToLight: "Modo claro",
    },
    hero: {
      eyebrow: "SwiftUI, UIKit, Apple Platforms, Kotlin Multiplatform",
      title:
        "Desarrollo para Apple platforms y pienso más allá de ejecutar tickets.",
      summary:
        "iOS es mi base, pero no mi límite. Me muevo entre producto, interfaz y entrega, y prefiero construir software útil antes que esperar instrucciones cerradas.",
      primaryCta: "Ver trabajo",
      secondaryCta: "Perfil",
      stats: [
        { value: "4+", label: "años en desarrollo mobile profesional" },
        { value: "3", label: "países donde viví y me adapté" },
        { value: "4", label: "idiomas que estudié o uso" },
      ],
      availability: {
        eyebrow: "Situación actual",
        title: "Basado en Argentina, abierto a equipos de producto fuertes.",
        copy: "Ya me mudé entre países con mi familia, así que estoy cómodo con el cambio, la colaboración async y los planes de largo plazo.",
        pills: ["Apple platforms", "Salud", "Mentalidad de producto"],
      },
    },
    experience: {
      eyebrow: "Trabajo",
      title:
        "Rindo mejor donde el criterio de producto importa tanto como el código.",
      intro:
        "Los roles son distintos, pero el patrón se repite: entregar software útil, mejorar el producto y hacer más que solo implementar lo obvio.",
      viewDetails: "Detalles",
      items: [
        {
          modal: "lhpc",
          role: "Desarrollador iOS",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Feb 2024 - Hoy",
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
            "Trabajé en productos médicos con KMP, incluyendo una app de iPad para optometristas y una app para pacientes.",
          tags: ["KMP", "iPadOS", "Medical"],
        },
        {
          modal: "contract",
          role: "Desarrollador iOS por contrato",
          company: "Emprendedor individual",
          period: "Primavera 2022 - Otoño 2022",
          summary:
            "Modernicé una app logística, llevé SwiftUI a UIKit y pasé flujos útiles de escritorio a mobile.",
          tags: ["UIKit", "SwiftUI", "Logística"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Lo que realmente aporto",
      intro:
        "El stack importa solo si ayuda a construir mejor producto y a mantener el codebase en movimiento.",
      groups: [
        {
          title: "Trabajo Apple",
          text: "iOS es el centro, pero pienso en una superficie Apple más amplia.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Producto y entrega",
          text: "Me importa cómo encaja una feature en el producto, no solo que compile.",
          items: [
            "Implementación de features",
            "Integración de APIs",
            "Refinamiento de interfaz",
            "Releases",
          ],
        },
        {
          title: "Rango entre dominios",
          text: "Trabajé en salud, logística y entornos con stack compartido.",
          items: [
            "Productos de salud",
            "Kotlin Multiplatform",
            "Codebases existentes",
            "Trabajo remoto",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Enfoque",
      title: "Cómo trabajo",
      intro:
        "Esta parte importa más una vez que termina el filtro básico por stack.",
      items: [
        "Primero intento entender el problema de producto, no solo el ticket.",
        "Puedo mejorar un codebase existente sin convertir cada problema en una reescritura total.",
        "Me muevo entre interfaz, implementación y detalles de entrega cuando el producto lo necesita.",
        "Me adapto rápido a nuevos países, equipos y entornos de trabajo.",
      ],
    },
    languages: {
      eyebrow: "Idiomas",
      title: "Idiomas hablados",
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
        "El trabajo se entiende mejor cuando también se ve la línea de vida.",
      items: [
        {
          period: "May 2025 - Hoy",
          place: "Argentina",
          text: "Me mudé con mi esposa para construir estabilidad a largo plazo y seguir creciendo internacionalmente.",
        },
        {
          period: "Jun 2024 - May 2025",
          place: "Japón",
          text: "Mi primera mudanza internacional larga. Etapa fuerte de adaptación, aprendizaje y nuevas rutinas.",
        },
        {
          period: "Antes de 2024",
          place: "Rusia",
          text: "Ahí se armó la base: trabajo por contrato, trabajo en equipo y el paso de aprender a entregar.",
        },
      ],
    },
    interests: {
      eyebrow: "Intereses",
      title: "Fuera del trabajo",
      intro: "Lo dejo porque muestra cómo aprendo y qué mantiene mi atención.",
      items: [
        "Aprendizaje de idiomas",
        "Instrumentos musicales",
        "Libros de ciencia",
        "Ideas de apps personales",
        "Type racing",
        "Artículos de IT",
        "Manga de horror",
      ],
    },
    gallery: {
      eyebrow: "Contexto",
      title: "Señales fuera del CV",
      intro:
        "Estas tarjetas no están para decorar. Están para explicar qué me importa y cómo pienso.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Construyendo apps",
          label: "Trabajo",
          text: "Acá sigue yendo gran parte de mi tiempo serio: software para Apple platforms y detalles de producto.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Producto",
          text: "Me fijo en productos que manejan la complejidad sin cargársela al usuario.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "CV impreso",
          label: "Carrera",
          text: "La presentación clara importa. Si no puedo explicar mi trabajo directo, está mal contado.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Argentina",
          label: "Base",
          text: "Mi base actual y el lugar desde donde construyo la próxima etapa.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "NAS storage",
          label: "Sistemas",
          text: "Me gustan los sistemas ordenados, predecibles y bajo control.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Japón",
          label: "Relocalización",
          text: "Fue una etapa seria de adaptación y crecimiento, no solo un cambio de lugar.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Kioto",
          label: "Criterio",
          text: "Lugares así afinan mi gusto por la precisión, la estructura y la sobriedad.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title:
        "Si tu equipo necesita un desarrollador Apple-platform con mirada de producto, escribime.",
      copy: "El email es mejor para conversaciones de contratación. GitHub muestra código público. Telegram es lo más rápido para contacto directo.",
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
        title: "Apple platforms, no solo iOS",
        text: "iOS es mi plataforma principal, pero pienso más amplio: calidad de producto, interfaces y encaje dentro del ecosistema Apple.",
        button: "Más",
        modal: "profile",
      },
      {
        index: "02",
        title: "Más que ejecutar tickets",
        text: "Intento entender por qué importa una feature y cómo debería funcionar, no solo implementar lo escrito.",
        button: "Detalles",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "Mudanza internacional, trabajo estable",
        text: "Japón y Argentina importan porque muestran adaptación, visión de largo plazo y capacidad para seguir avanzando.",
        button: "Leer",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Cerrar",
    },
    modals: {
      profile: {
        kicker: "Perfil",
        title: "Cómo me posiciono",
        summary:
          "Soy un desarrollador Apple-platform con iOS en el centro, pero no quiero quedar limitado a ejecutar tickets. Me importan producto, interfaz y entrega útil.",
        meta: ["Apple platforms", "SwiftUI", "UIKit", "Argentina"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Valor principal",
            body: "Mi valor no es solo escribir código iOS. Es ser útil entre producto, interfaz y decisiones de entrega, manteniendo una implementación limpia.",
          },
          {
            title: "Encaje",
            items: [
              "Equipos de producto que construyen software real para Apple",
              "Roles con margen para ownership",
              "Equipos que valoran claridad y comunicación directa",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Dominio",
        title: "Por qué salud moldeó mi enfoque",
        summary:
          "Los productos médicos y de servicio me obligaron a cuidar claridad, confianza y decisiones calmas. Eso cambió cómo pienso interfaz y calidad de producto.",
        meta: ["Salud", "UX operativa", "Confianza"],
        sections: [
          {
            title: "Qué cambia",
            items: [
              "Los flujos deben seguir claros bajo presión",
              "La ambigüedad hace perder tiempo y confianza",
              "Las decisiones de producto importan tanto como la implementación",
            ],
          },
          {
            title: "Qué me dejo",
            body: "Me siento cómodo en productos donde la meta no es lucirse, sino hacer software confiable y fácil de usar.",
          },
        ],
      },
      relocation: {
        kicker: "Relocalización",
        title: "Por qué importa la línea internacional",
        summary:
          "Ya me mudé entre países con mi familia. Importa porque adaptación, planificación y trabajo sostenido en medio del cambio ya son parte de la vida real.",
        meta: ["Argentina", "Japón", "Familia"],
        sections: [
          {
            title: "Impacto profesional",
            items: [
              "Adaptación rápida a entornos nuevos",
              "Comodidad con comunicación async",
              "Trabajo estable durante cambios grandes",
            ],
          },
          {
            title: "Contexto personal",
            body: "La mudanza a Argentina es parte de una decisión seria de largo plazo, no una prueba temporal.",
          },
        ],
      },
      lhpc: {
        kicker: "Rol actual",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "Construí y lancé una app iOS para una startup médica de India.",
        meta: ["Feb 2024 - Hoy", "iOS", "Salud"],
        sections: [
          {
            title: "Qué manejé",
            items: [
              "Desarrollo iOS de producción",
              "Entrega de producto médico",
              "Colaboración remota",
            ],
          },
          {
            title: "Por qué importa",
            body: "Es trabajo reciente ligado a un release real. Muestra cómo trabajo hoy, no solo lo que aprendí antes.",
          },
        ],
      },
      reshenie: {
        kicker: "Trabajo KMP",
        title: "Reshenie LLC",
        summary:
          "Trabajé en productos médicos con KMP, incluyendo una app de iPad para optometristas y una app para pacientes.",
        meta: ["Verano 2023 - Primavera 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Rango del trabajo",
            items: [
              "Producto para especialistas",
              "Producto para pacientes",
              "Desarrollo con stack compartido y Kotlin Multiplatform",
            ],
          },
          {
            title: "Por qué importa",
            body: "Este rol mostró que puedo moverme entre superficies de producto y restricciones técnicas distintas sin perder foco.",
          },
        ],
      },
      contract: {
        kicker: "Contrato",
        title: "Modernización de app logística",
        summary:
          "Modernicé una app logística, llevé SwiftUI a un codebase UIKit y ayudé a mover flujos útiles de escritorio al móvil.",
        meta: ["2022", "UIKit", "SwiftUI", "Logística"],
        sections: [
          {
            title: "Contribución principal",
            items: [
              "Sumé SwiftUI dentro de una app UIKit existente",
              "Mejoré el producto sin depender de una reescritura total",
              "Pasé acciones útiles del negocio al teléfono",
            ],
          },
          {
            title: "Por qué importa",
            body: "Mucho trabajo real se ve así: mejorar lo que existe, mantenerlo en movimiento y volver el producto más útil.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Trabajo",
        title: "Construyendo apps",
        summary:
          "Está acá porque el software para Apple platforms sigue siendo donde pongo tiempo serio y concentrado.",
        meta: ["Swift", "KMP", "Apple platforms"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Por qué está",
            body: "No quería que la página sonara abstracta. El trabajo mismo tiene que seguir visible.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Producto",
        title: "Nintendo Switch",
        summary:
          "Me interesan los productos que vuelven más liviana la complejidad para el usuario.",
        meta: ["Juegos", "Diseño de producto"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Por qué está",
            body: "Los productos de consumo enseñan mucho sobre claridad, feedback y cómo hacer que un sistema complejo se sienta simple.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Carrera",
        title: "CV impreso",
        summary:
          "Me importa presentar el trabajo con claridad, sin esconderlo detrás de efectos ni frases vacías.",
        meta: ["CV", "Comunicación"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Por qué está",
            body: "Si no puedo explicar el trabajo de forma directa, la presentación es débil. Lo mismo vale para los productos.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "Base",
        title: "Argentina",
        summary:
          "Mi base actual y el lugar desde donde construyo la próxima etapa del trabajo.",
        meta: ["Argentina", "Base actual"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Por qué está",
            body: "La ubicación afecta ritmo, planificación y qué oportunidades de largo plazo realmente tienen sentido.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Sistemas",
        title: "NAS storage",
        summary:
          "Me gustan los sistemas ordenados, predecibles y bajo control.",
        meta: ["Sistemas", "Confiabilidad"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Por qué está",
            body: "Esa preferencia también aparece en software. Confío más en la estructura predecible que en el caos ingenioso.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Relocalización",
        title: "Japón",
        summary:
          "Fue una etapa seria de adaptación, aprendizaje y reconstrucción de rutinas.",
        meta: ["Japón", "Crecimiento"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Por qué está",
            body: "Las mudanzas largas cambian cómo pensás trabajo, estabilidad y progreso bajo cambio.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Criterio",
        title: "Kioto",
        summary:
          "Lugares así afinan mi gusto por la precisión, la estructura y la sobriedad.",
        meta: ["Kioto", "Observación"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Por qué está",
            body: "El criterio forma parte del trabajo de producto. Los lugares que respeto afectan el tipo de interfaces que quiero construir.",
          },
        ],
      },
    },
  },
  ru: {
    meta: {
      title: "Eugene Rozhkov | Разработчик под Apple Platform",
    },
    brand: {
      role: "Разработчик под Apple Platform",
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
      eyebrow: "SwiftUI, UIKit, Apple Platforms, Kotlin Multiplatform",
      title:
        "Я делаю продукты под Apple platforms и думаю шире, чем просто исполнение тикетов.",
      summary:
        "iOS для меня база, но не предел. Я смотрю на продукт, интерфейс и delivery вместе и предпочитаю делать полезный софт, а не ждать точных указаний.",
      primaryCta: "Смотреть опыт",
      secondaryCta: "Профиль",
      stats: [
        { value: "4+", label: "года в профессиональной mobile-разработке" },
        { value: "3", label: "страны, где я жил и адаптировался" },
        { value: "4", label: "языка, которые я использую или учу" },
      ],
      availability: {
        eyebrow: "Сейчас",
        title: "Живу в Аргентине, открыт к сильным продуктовым командам.",
        copy: "Я уже проходил переезды между странами с семьей, поэтому мне привычны изменения, async-работа и долгий горизонт планирования.",
        pills: ["Apple platforms", "Healthcare", "Product mindset"],
      },
    },
    experience: {
      eyebrow: "Работа",
      title: "Мне лучше всего там, где продукт важен не меньше, чем код.",
      intro:
        "Роли были разными, но суть одна: выпускать полезный софт, улучшать продукт и делать больше, чем просто выполнять очевидный запрос.",
      viewDetails: "Подробнее",
      items: [
        {
          modal: "lhpc",
          role: "iOS-разработчик",
          company: "Lifetime Health Plus Care Pvt Ltd",
          period: "Фев 2024 - сейчас",
          summary:
            "Сделал и выпустил iOS-приложение для медицинского стартапа из Индии.",
          tags: ["iOS", "Медицина", "Remote"],
        },
        {
          modal: "reshenie",
          role: "iOS-разработчик",
          company: "Reshenie LLC",
          period: "Лето 2023 - весна 2024",
          summary:
            "Работал над медицинскими KMP-продуктами, включая iPad-приложение для оптометристов и приложение для пациентов.",
          tags: ["KMP", "iPadOS", "Medical"],
        },
        {
          modal: "contract",
          role: "Контрактный iOS-разработчик",
          company: "Индивидуальный предприниматель",
          period: "Весна 2022 - осень 2022",
          summary:
            "Модернизировал логистическое приложение, добавил SwiftUI в UIKit и перенес полезные desktop-сценарии на телефон.",
          tags: ["UIKit", "SwiftUI", "Логистика"],
        },
      ],
    },
    skills: {
      eyebrow: "Стек",
      title: "Что я реально приношу",
      intro:
        "Стек важен только если он помогает делать продукт лучше и не тормозит развитие codebase.",
      groups: [
        {
          title: "Работа под Apple",
          text: "iOS в центре, но я думаю в рамках более широкой Apple-среды.",
          items: ["Swift", "SwiftUI", "UIKit", "iPadOS"],
        },
        {
          title: "Продукт и delivery",
          text: "Мне важно, как фича вписывается в продукт, а не только то, что она собирается.",
          items: [
            "Реализация фич",
            "Интеграция API",
            "Доработка интерфейса",
            "Релизы",
          ],
        },
        {
          title: "Работа в разных доменах",
          text: "У меня есть опыт в медицине, логистике и shared-stack среде.",
          items: [
            "Медицинские продукты",
            "Kotlin Multiplatform",
            "Существующие codebase",
            "Удаленная работа",
          ],
        },
      ],
    },
    strengths: {
      eyebrow: "Подход",
      title: "Как я работаю",
      intro:
        "Вот эта часть становится важной, когда базовый фильтр по стеку уже пройден.",
      items: [
        "Я сначала стараюсь понять продуктовую задачу, а не только текст тикета.",
        "Могу улучшать существующий codebase, не превращая каждую проблему в повод для полного переписывания.",
        "Если продукту нужно, я нормально двигаюсь между интерфейсом, реализацией и delivery-деталями.",
        "Я быстро адаптируюсь к новым странам, командам и рабочей среде.",
      ],
    },
    languages: {
      eyebrow: "Языки",
      title: "Разговорные языки",
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
      intro: "Рабочий путь понятнее, когда видна и реальная жизненная линия.",
      items: [
        {
          period: "Май 2025 - сейчас",
          place: "Аргентина",
          text: "Переехал с женой, чтобы строить долгую стабильность и продолжать расти международно.",
        },
        {
          period: "Июн 2024 - май 2025",
          place: "Япония",
          text: "Первый долгий международный переезд. Сильный период адаптации, обучения и новых привычек.",
        },
        {
          period: "До 2024",
          place: "Россия",
          text: "Здесь сформировалась база: контрактная работа, работа в команде и переход от обучения к реальным релизам.",
        },
      ],
    },
    interests: {
      eyebrow: "Интересы",
      title: "Вне работы",
      intro:
        "Я оставляю этот блок, потому что он показывает, как я учусь и что надолго держит мое внимание.",
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
      eyebrow: "Контекст",
      title: "Несколько сигналов вне резюме",
      intro:
        "Эти карточки нужны не для украшения. Они показывают, что для меня важно и как я смотрю на работу.",
      items: [
        {
          modal: "gallery-coding",
          image: "Resources/Gallery/coding.png",
          title: "Разработка приложений",
          label: "Работа",
          text: "Именно сюда до сих пор уходит большая часть моего серьезного внимания: Apple-platform софт и продуктовые детали.",
          size: "wide",
        },
        {
          modal: "gallery-switch",
          image: "Resources/Gallery/nintendo-switch.png",
          title: "Nintendo Switch",
          label: "Продукт",
          text: "Мне интересны продукты, которые умеют скрывать сложность от пользователя.",
          size: "normal",
        },
        {
          modal: "gallery-cv",
          image: "Resources/Gallery/cv-paper.png",
          title: "Печатное CV",
          label: "Карьера",
          text: "Понятная подача важна. Если я не могу объяснить работу прямо, значит она плохо оформлена.",
          size: "normal",
        },
        {
          modal: "gallery-argentina",
          image: "Resources/Gallery/argentina-flag.png",
          title: "Аргентина",
          label: "База",
          text: "Моя текущая база и точка, из которой я строю следующий этап карьеры.",
          size: "normal",
        },
        {
          modal: "gallery-nas",
          image: "Resources/Gallery/nas-storage.png",
          title: "NAS storage",
          label: "Системы",
          text: "Мне нравятся системы, которые остаются организованными, предсказуемыми и под контролем.",
          size: "normal",
        },
        {
          modal: "gallery-japan",
          image: "Resources/Gallery/japan.png",
          title: "Япония",
          label: "Переезд",
          text: "Это был серьезный этап адаптации и роста, а не просто смена локации.",
          size: "wide",
        },
        {
          modal: "gallery-kyoto",
          image: "Resources/Gallery/kyoto.png",
          title: "Киото",
          label: "Вкус",
          text: "Такие места точнее настраивают мой вкус к структуре, точности и сдержанности.",
          size: "tall",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title:
        "Если вашей команде нужен Apple-platform разработчик с продуктовым мышлением, напишите мне.",
      copy: "Для разговора о найме лучше email. GitHub показывает открытый код. Telegram быстрее всего для прямой связи.",
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
        title: "Apple platforms, не только iOS",
        text: "iOS для меня основная платформа, но я думаю шире: о качестве продукта, интерфейсе и месте работы внутри Apple-экосистемы.",
        button: "Еще",
        modal: "profile",
      },
      {
        index: "02",
        title: "Больше, чем исполнение тикетов",
        text: "Я стараюсь понять, зачем нужна фича и как она должна работать, а не только сделать то, что уже написано.",
        button: "Детали",
        modal: "healthcare",
      },
      {
        index: "03",
        title: "Международный переезд и стабильная работа",
        text: "Япония и Аргентина важны как доказательство адаптации, длинного горизонта и способности продолжать движение.",
        button: "Читать",
        modal: "relocation",
      },
    ],
    modalLabels: {
      close: "Закрыть",
    },
    modals: {
      profile: {
        kicker: "Профиль",
        title: "Как я себя позиционирую",
        summary:
          "Я разработчик под Apple platforms, у которого iOS в центре, но я не хочу быть ограничен ролью простого исполнителя тикетов. Мне важны продукт, интерфейс и полезный delivery.",
        meta: ["Apple platforms", "SwiftUI", "UIKit", "Аргентина"],
        image: "Resources/hello.png",
        sections: [
          {
            title: "Главная ценность",
            body: "Моя ценность не только в том, что я пишу iOS-код. Я полезен на стыке продукта, интерфейса и delivery-решений, при этом сохраняя реализацию чистой.",
          },
          {
            title: "Где я полезнее всего",
            items: [
              "Продуктовые команды, которые делают реальный софт под Apple",
              "Роли, где есть пространство для ownership",
              "Команды, которым важны ясность и прямое общение",
            ],
          },
        ],
      },
      healthcare: {
        kicker: "Домен",
        title: "Почему медицина повлияла на мой подход",
        summary:
          "Медицинские и сервисные продукты заставили меня серьезнее относиться к ясности, доверию и спокойным решениям. Это изменило мой взгляд на интерфейсы и качество продукта.",
        meta: ["Медицина", "Operational UX", "Доверие"],
        sections: [
          {
            title: "Что это меняет",
            items: [
              "Сценарии должны оставаться понятными под давлением",
              "Неясность тратит время и доверие",
              "Продуктовые решения важны не меньше реализации",
            ],
          },
          {
            title: "Что я из этого беру",
            body: "Мне комфортно в продуктах, где цель не производить впечатление, а делать софт надежным и понятным.",
          },
        ],
      },
      relocation: {
        kicker: "Переезд",
        title: "Почему международная линия важна",
        summary:
          "Я уже проходил переезды между странами с семьей. Это важно, потому что адаптация, длинный горизонт и работа через изменения для меня уже не теория.",
        meta: ["Аргентина", "Япония", "Семья"],
        sections: [
          {
            title: "Профессиональный эффект",
            items: [
              "Быстрая адаптация к новой среде",
              "Комфорт с async-коммуникацией",
              "Стабильная работа во время больших перемен",
            ],
          },
          {
            title: "Личный контекст",
            body: "Переезд в Аргентину - это часть долгого жизненного решения, а не временный эксперимент. Я хочу того же уровня серьезности и от работы.",
          },
        ],
      },
      lhpc: {
        kicker: "Текущая роль",
        title: "Lifetime Health Plus Care Pvt Ltd",
        summary:
          "Я сделал и выпустил iOS-приложение для медицинского стартапа из Индии.",
        meta: ["Фев 2024 - сейчас", "iOS", "Healthcare"],
        sections: [
          {
            title: "Что я делал",
            items: [
              "Продакшен iOS-разработка",
              "Delivery медицинского продукта",
              "Удаленная работа с командой",
            ],
          },
          {
            title: "Почему это важно",
            body: "Это свежая продуктовая работа, привязанная к реальному релизу. Она показывает, как я работаю сейчас.",
          },
        ],
      },
      reshenie: {
        kicker: "KMP-работа",
        title: "Reshenie LLC",
        summary:
          "Я работал над медицинскими KMP-продуктами, включая iPad-приложение для оптометристов и приложение для пациентов.",
        meta: ["Лето 2023 - весна 2024", "KMP", "iPadOS"],
        sections: [
          {
            title: "Диапазон работы",
            items: [
              "Продукт для специалистов",
              "Продукт для пациентов",
              "Разработка в shared-stack среде с Kotlin Multiplatform",
            ],
          },
          {
            title: "Почему это важно",
            body: "Эта роль показала, что я могу работать с разными типами продукта и разными техническими ограничениями без потери фокуса.",
          },
        ],
      },
      contract: {
        kicker: "Контракт",
        title: "Модернизация логистического приложения",
        summary:
          "Я модернизировал логистическое приложение, добавил SwiftUI в UIKit-codebase и помог перенести полезные desktop-сценарии на мобильное устройство.",
        meta: ["2022", "UIKit", "SwiftUI", "Логистика"],
        sections: [
          {
            title: "Главный вклад",
            items: [
              "Добавил SwiftUI в существующее UIKit-приложение",
              "Улучшал продукт без зависимости от полного переписывания",
              "Перенес полезные бизнес-сценарии на телефон",
            ],
          },
          {
            title: "Почему это важно",
            body: "Очень много реальной работы выглядит именно так: улучшать существующее, не останавливать движение и делать продукт полезнее.",
          },
        ],
      },
      "gallery-coding": {
        kicker: "Работа",
        title: "Разработка приложений",
        summary:
          "Этот блок здесь потому, что софт под Apple platforms по-прежнему занимает у меня серьезное и сфокусированное время.",
        meta: ["Swift", "KMP", "Apple platforms"],
        image: "Resources/Gallery/coding.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Я не хотел, чтобы страница звучала слишком абстрактно. Сама работа должна быть видна.",
          },
        ],
      },
      "gallery-switch": {
        kicker: "Продукт",
        title: "Nintendo Switch",
        summary:
          "Мне интересны продукты, которые умеют делать сложность легче для пользователя.",
        meta: ["Игры", "Product design"],
        image: "Resources/Gallery/nintendo-switch.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Потребительские продукты хорошо учат ясности, обратной связи и тому, как сложная система может ощущаться простой.",
          },
        ],
      },
      "gallery-cv": {
        kicker: "Карьера",
        title: "Печатное CV",
        summary:
          "Мне важно уметь подать работу ясно, без эффектов и пустых формулировок.",
        meta: ["Резюме", "Коммуникация"],
        image: "Resources/Gallery/cv-paper.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Если я не могу объяснить работу прямо, значит подача слабая. С продуктами правило то же самое.",
          },
        ],
      },
      "gallery-argentina": {
        kicker: "База",
        title: "Аргентина",
        summary:
          "Моя текущая база и точка, из которой я строю следующий рабочий этап.",
        meta: ["Аргентина", "Текущая база"],
        image: "Resources/Gallery/argentina-flag.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Локация влияет на ритм, планирование и на то, какие долгие возможности действительно имеют смысл.",
          },
        ],
      },
      "gallery-nas": {
        kicker: "Системы",
        title: "NAS storage",
        summary:
          "Мне нравятся системы, которые остаются организованными, предсказуемыми и под контролем.",
        meta: ["Системы", "Надежность"],
        image: "Resources/Gallery/nas-storage.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "То же предпочтение видно и в софте. Я больше доверяю предсказуемой структуре, чем умному хаосу.",
          },
        ],
      },
      "gallery-japan": {
        kicker: "Переезд",
        title: "Япония",
        summary:
          "Это был серьезный период адаптации, обучения и перестройки жизни.",
        meta: ["Япония", "Рост"],
        image: "Resources/Gallery/japan.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Долгие переезды меняют взгляд на работу, устойчивость и то, как продолжать расти в условиях перемен.",
          },
        ],
      },
      "gallery-kyoto": {
        kicker: "Вкус",
        title: "Киото",
        summary:
          "Такие места точнее настраивают мой вкус к структуре, точности и сдержанности.",
        meta: ["Киото", "Наблюдение"],
        image: "Resources/Gallery/kyoto.png",
        sections: [
          {
            title: "Почему это здесь",
            body: "Вкус - часть продуктовой работы. Среда, которую я уважаю, влияет на то, какие интерфейсы я хочу делать.",
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

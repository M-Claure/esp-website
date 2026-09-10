export interface Club {
  slug: string
  name: string
  city: string
  region: string
  initials: string
  tagline: string
  footballAnchor: string
  pillars: [string, string, string]
  trainCaption: string
  facilitiesCaption: string
  cityCaption: string
  quote: string
  quoteAttribution: string
  clubDescription: string[]
  trainingBase: string
  identity: string
  coaches: string
  placeDescription: string[]
}

export const clubs: Club[] = [
  {
    slug: "real-sociedad",
    name: "Real Sociedad",
    city: "San Sebastián",
    region: "Basque Country",
    initials: "RS",
    tagline: "Elite football. Unique culture. Unforgettable city.",
    footballAnchor: "Zubieta (training center) + development culture",
    pillars: ["San Sebastián", "Zubieta Training Center", "Basque football culture"],
    trainCaption: "Learn the Real Sociedad methodology, known for developing top talent.",
    facilitiesCaption: "State-of-the-art Zubieta Training Center.",
    cityCaption: "Beaches. Food. Culture. One of Europe's most beautiful cities.",
    quote: "“Discipline. Talent. Humility. A club with values on and off the field.”",
    quoteAttribution: "— Real Sociedad",
    clubDescription: [
      "Real Sociedad is one of Spain's most respected development clubs. Their Zubieta academy has produced generations of top-level talent, built on a philosophy that values technique, intelligence and team play.",
      "Players train inside the same system that develops first-team professionals — learning the methodology, experiencing the culture and competing the way Real Sociedad players compete.",
      "The coaching staff bring La Liga and international experience to every session, challenging players to grow technically and tactically in a professional European environment."
    ],
    trainingBase: "Zubieta Training Center",
    identity: "Development culture & Basque football identity",
    coaches: "La Liga–experienced coaching staff",
    placeDescription: [
      "San Sebastián is one of Europe's most beautiful cities — a coastal gem in the Basque Country known for its beaches, food and vibrant culture. La Concha bay, the Old Town and the surrounding mountains create an unforgettable setting.",
      "Players experience pintxos, Basque traditions and a city where football is woven into everyday life. The culture around the club is as powerful as the training inside it."
    ],
  },
  {
    slug: "girona-fc",
    name: "Girona FC",
    city: "Girona",
    region: "Catalonia",
    initials: "GFC",
    tagline: "Ambition. Innovation. A global club.",
    footballAnchor: "Modern academy methodology, global-club feel",
    pillars: ["Girona", "First-team methodology", "Barcelona (optional)"],
    trainCaption: "Develop your game with Girona's modern, attacking style.",
    facilitiesCaption: "World-class training facilities.",
    cityCaption: "Medieval charm. Vibrant culture. Close to Barcelona.",
    quote: "“Dream. Compete. Belong. A club on the rise.”",
    quoteAttribution: "— Girona FC",
    clubDescription: [
      "Girona FC has emerged as one of European football's most exciting stories — a club built on ambition, innovation and a modern approach to player development.",
      "Players experience first-team methodology in a professional environment that emphasizes attacking football, technical development and tactical intelligence.",
      "The coaching staff bring a global perspective, challenging players to develop their game in ways that translate across competitions and cultures."
    ],
    trainingBase: "Girona FC Training Center",
    identity: "Modern methodology & Catalan football culture",
    coaches: "First-team aligned coaching staff",
    placeDescription: [
      "Girona is a medieval city in Catalonia with colorful riverside houses, ancient streets and a vibrant food scene — all within easy reach of Barcelona and the Mediterranean coast.",
      "Players discover Catalan culture, explore a city that blends history with modern life, and experience the passion that makes football in this region unique."
    ],
  },
  {
    slug: "real-oviedo",
    name: "Real Oviedo",
    city: "Oviedo",
    region: "Asturias",
    initials: "RO",
    tagline: "Tradition. Passion. A bright future.",
    footballAnchor: "El Requexón (training center) + club identity",
    pillars: ["Oviedo", "El Requexón Training Center", "Asturias & nature"],
    trainCaption: "Learn from Oviedo's experienced coaching staff.",
    facilitiesCaption: "El Requexón Training Center.",
    cityCaption: "Mountains. Nature. Authentic Spain.",
    quote: "“Historia, pasión y futuro. Más que un club.”",
    quoteAttribution: "— Real Oviedo",
    clubDescription: [
      "Real Oviedo is a club steeped in tradition — a proud institution in Asturias with a passionate fanbase and a football identity rooted in resilience and commitment.",
      "Players train at El Requexón, experiencing the methodology and competitive culture that define professional football in northern Spain.",
      "The coaching staff bring decades of experience in Spanish football, providing players with tactical depth and a professional training environment."
    ],
    trainingBase: "El Requexón Training Center",
    identity: "Tradition & Asturian football identity",
    coaches: "Experienced Spanish football coaching staff",
    placeDescription: [
      "Oviedo sits in the heart of Asturias — surrounded by mountains, nature and some of Spain's most authentic culture. The city is known for its cathedral, cider culture and warm hospitality.",
      "Players experience a side of Spain most visitors never see — authentic food, mountain landscapes and a city where football passion runs deep."
    ],
  },
  {
    slug: "sporting-de-gijon",
    name: "Sporting de Gijón",
    city: "Gijón",
    region: "Asturias",
    initials: "SG",
    tagline: "Passion. People. A proud football tradition.",
    footballAnchor: "Mareo (sports city) — live and train inside the club environment",
    pillars: ["Gijón", "Mareo Sports City", "Coast & culture"],
    trainCaption: "Develop your game in a competitive environment.",
    facilitiesCaption: "Mareo Training Center.",
    cityCaption: "Beaches. Sidra. A true football city.",
    quote: "“Sentimiento rojiblanco. Una forma de vivir el fútbol.”",
    quoteAttribution: "— Real Sporting de Gijón",
    clubDescription: [
      "Sporting de Gijón is one of Spanish football's most passionate clubs — with Mareo Sports City providing one of the strongest 'live and train inside the club' experiences in our program.",
      "Players train and live within the club environment, experiencing the competitive culture, tactical approach and daily rhythms of a professional Spanish football club.",
      "The coaching staff are rooted in Sporting's proud tradition, bringing a demanding but supportive approach to player development."
    ],
    trainingBase: "Mareo Sports City",
    identity: "Rojiblanco passion & competitive culture",
    coaches: "Club-embedded coaching staff",
    placeDescription: [
      "Gijón is a coastal city on the Bay of Biscay — known for its beaches, sidra (cider) culture and deep football passion. San Lorenzo beach, the old fishing quarter and the vibrant food scene make it unforgettable.",
      "Players experience the Asturian coast, local traditions and a city where football is a way of life."
    ],
  },
  {
    slug: "racing-de-santander",
    name: "Racing de Santander",
    city: "Santander",
    region: "Cantabria",
    initials: "RdS",
    tagline: "Character. Community. Cantabrian spirit.",
    footballAnchor: "Nando Yosu sports city (La Albericia) + Racing's history",
    pillars: ["Santander", "Nando Yosu Sports City", "Beaches & nature"],
    trainCaption: "Improve your game with Racing's player development approach.",
    facilitiesCaption: "La Albericia Training Center.",
    cityCaption: "Coastal beauty. Nature. Great food.",
    quote: "“Orgullo. Tradición. Futuro.”",
    quoteAttribution: "— Racing de Santander",
    clubDescription: [
      "Racing de Santander is a historic club on Spain's north coast — with a passionate community and a football identity built on character, resilience and pride.",
      "Players train at the Nando Yosu sports city (La Albericia), experiencing the methodology and competitive standards of professional Spanish football.",
      "The coaching staff bring Racing's development philosophy to every session, focusing on tactical intelligence, competitive mentality and technical growth."
    ],
    trainingBase: "Nando Yosu Sports City (La Albericia)",
    identity: "Historic pride & Cantabrian football culture",
    coaches: "Racing development coaching staff",
    placeDescription: [
      "Santander sits on one of Spain's most beautiful bays — surrounded by beaches, mountains and Cantabrian culture. El Sardinero beach, the Magdalena Peninsula and the vibrant food scene define the city.",
      "Players experience the north coast of Spain, where the sea meets the mountains and football culture runs deep."
    ],
  },
  {
    slug: "deportivo-de-la-coruna",
    name: "Deportivo de La Coruña",
    city: "A Coruña",
    region: "Galicia",
    initials: "RC",
    tagline: "History. Resilience. A great football city.",
    footballAnchor: "Abegondo (training center) / Método Dépor",
    pillars: ["A Coruña", "Abegondo Training Center", "Culture & coastline"],
    trainCaption: "Learn from Depor's experienced coaching staff.",
    facilitiesCaption: "Abegondo Training Center.",
    cityCaption: "Atlantic coast. History. Incredible food.",
    quote: "“Unha cidade, un sentimento.”",
    quoteAttribution: "— Deportivo de La Coruña",
    clubDescription: [
      "Deportivo de La Coruña is one of Spanish football's great historic clubs — with a passionate city behind them and a training methodology (Método Dépor) that reflects their identity.",
      "Players train at Abegondo, experiencing the methodology, facilities and competitive culture of a club that has competed at the highest levels of European football.",
      "The coaching staff bring Depor's development philosophy to every session, with a focus on tactical discipline, technical quality and competitive resilience."
    ],
    trainingBase: "Abegondo Training Center",
    identity: "Método Dépor & Galician football culture",
    coaches: "Depor development coaching staff",
    placeDescription: [
      "A Coruña is a historic port city on Spain's Atlantic coast — known for the Tower of Hercules, incredible seafood, Galician culture and a passionate football community.",
      "Players experience the Atlantic coast, Galician traditions and a city where football history is everywhere you look."
    ],
  },
  {
    slug: "levante-ud",
    name: "Levante UD",
    city: "Valencia",
    region: "Comunidad Valenciana",
    initials: "LUD",
    tagline: "Courage. Talent. Mediterranean spirit.",
    footballAnchor: "International-training orientation and methodology; Ciutat de València / Ciudad Deportiva de Buñol",
    pillars: ["Valencia", "Ciutat de València", "City & beaches"],
    trainCaption: "Develop your game in a professional environment.",
    facilitiesCaption: "Ciudad Deportiva de Buñol.",
    cityCaption: "Beaches. Culture. Mediterranean life.",
    quote: "“Coratge, orgull i futur.”",
    quoteAttribution: "— Levante UD",
    clubDescription: [
      "Levante UD brings an international orientation to professional football in Valencia — with a methodology designed for player development and a strong tradition of producing talent.",
      "Players train in professional facilities, experiencing the methodology, competitive culture and international perspective that define Levante's approach to development.",
      "The coaching staff bring La Liga experience and an international outlook, challenging players to develop technically and tactically in a Mediterranean football environment."
    ],
    trainingBase: "Ciudad Deportiva de Buñol",
    identity: "International orientation & Mediterranean football culture",
    coaches: "La Liga–experienced coaching staff",
    placeDescription: [
      "Valencia is one of Spain's most vibrant cities — known for the City of Arts and Sciences, Mediterranean beaches, paella and a culture that blends ancient traditions with modern energy.",
      "Players experience one of Europe's great Mediterranean cities, where beach life, incredible food and football passion come together."
    ],
  },
]

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find(c => c.slug === slug)
}

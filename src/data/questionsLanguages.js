// Language Acquisition practice, pitched at MYP Phase 3-4 (the level assessed
// in the Year 5 on-screen examination). French and Spanish deliberately cover
// the same MYP topic areas so the two courses stay parallel.
//
// These test vocabulary the way the exam does: meaning in context, false
// friends, register, connectives and opinion structures. Isolated single-word
// recall (colours, days, numbers) is Phase 1 material and is not included.

export const LANGUAGE_QUESTIONS = [
  /* ==================== FRENCH ==================== */

  /* --- Environment and sustainability --- */
  {
    id: 'frV-1', subject: 'french', criterion: 'V', topic: 'Environment',
    prompt: 'In an article on sustainability, "le gaspillage alimentaire" refers to…',
    options: ['food waste', 'food poisoning', 'the food industry', 'a food festival'],
    answer: 0,
    explanation:
      '"Le gaspillage" means waste in the sense of wasting something, and "alimentaire" relates to food. Distinguish it from "les déchets", which means rubbish or physical waste.',
  },
  {
    id: 'frV-2', subject: 'french', criterion: 'V', topic: 'Environment',
    prompt: 'What does "le covoiturage" mean?',
    options: ['car sharing', 'car racing', 'a car park', 'car insurance'],
    answer: 0,
    explanation:
      '"Covoiturage" combines "co-" (together) with "voiture" (car): sharing a car journey. It appears often in texts on reducing emissions.',
  },
  {
    id: 'frV-3', subject: 'french', criterion: 'V', topic: 'Environment',
    prompt: 'Which phrase means "to sort waste for recycling"?',
    options: ['trier les déchets', 'jeter les déchets', 'produire les déchets', 'brûler les déchets'],
    answer: 0,
    explanation:
      '"Trier" means to sort. "Jeter" is to throw away, "produire" to produce and "brûler" to burn, so only the first describes recycling behaviour.',
  },
  {
    id: 'frV-4', subject: 'french', criterion: 'V', topic: 'Environment',
    prompt: '"Les énergies renouvelables" would include…',
    options: [
      'l’énergie solaire et éolienne',
      'le charbon et le pétrole',
      'le gaz naturel',
      'l’énergie nucléaire uniquement',
    ],
    answer: 0,
    explanation:
      '"Éolienne" comes from wind and "solaire" from sun, so both are renewable. Coal, oil and gas are "les énergies fossiles".',
  },

  /* --- Identity and relationships --- */
  {
    id: 'frV-5', subject: 'french', criterion: 'V', topic: 'Relationships',
    prompt: '"Je m’entends bien avec ma sœur" means…',
    options: [
      'I get on well with my sister',
      'I hear my sister well',
      'I understand my sister',
      'I look like my sister',
    ],
    answer: 0,
    explanation:
      '"S’entendre bien avec" is a reflexive idiom meaning to get on well with. Translating it literally as "to hear" is a common error.',
  },
  {
    id: 'frV-6', subject: 'french', criterion: 'V', topic: 'Relationships',
    prompt: 'In a text about school life, "le harcèlement" refers to…',
    options: ['bullying or harassment', 'homework', 'a school trip', 'a timetable'],
    answer: 0,
    explanation:
      '"Le harcèlement" means harassment or bullying, and "le harcèlement scolaire" is bullying at school. It is standard vocabulary for the fairness and development context.',
  },
  {
    id: 'frV-7', subject: 'french', criterion: 'V', topic: 'Relationships',
    prompt: 'Which sentence expresses a disagreement most politely?',
    options: [
      'Je ne suis pas tout à fait d’accord.',
      'Tu as complètement tort.',
      'C’est n’importe quoi.',
      'Absolument pas.',
    ],
    answer: 0,
    explanation:
      '"Je ne suis pas tout à fait d’accord" (I do not entirely agree) softens the disagreement. The others are blunt and unsuitable for a formal written response.',
  },

  /* --- False friends --- */
  {
    id: 'frV-8', subject: 'french', criterion: 'V', topic: 'False friends',
    prompt: '"Actuellement" means…',
    options: ['currently', 'actually', 'accurately', 'eventually'],
    answer: 0,
    explanation:
      'A classic false friend: "actuellement" means currently or at present. "Actually" is "en fait" or "en réalité".',
  },
  {
    id: 'frV-9', subject: 'french', criterion: 'V', topic: 'False friends',
    prompt: 'In "j’ai fait un stage dans une entreprise", "un stage" means…',
    options: ['a work placement', 'a stage in a theatre', 'a stage of a journey', 'a performance'],
    answer: 0,
    explanation:
      '"Un stage" is a work placement or internship. A theatre stage is "une scène", and a stage of a process is "une étape".',
  },
  {
    id: 'frV-10', subject: 'french', criterion: 'V', topic: 'False friends',
    prompt: '"Il est très sensible" describes someone who is…',
    options: ['sensitive', 'sensible', 'reasonable', 'practical'],
    answer: 0,
    explanation:
      '"Sensible" in French means sensitive or easily affected emotionally. English "sensible" is "raisonnable".',
  },
  {
    id: 'frV-11', subject: 'french', criterion: 'V', topic: 'False friends',
    prompt: '"J’ai assisté à la conférence" means…',
    options: [
      'I attended the conference',
      'I helped at the conference',
      'I organised the conference',
      'I missed the conference',
    ],
    answer: 0,
    explanation:
      '"Assister à" means to attend. To assist someone is "aider". Getting this wrong reverses the meaning of the sentence.',
  },

  /* --- Connectives and opinion --- */
  {
    id: 'frV-12', subject: 'french', criterion: 'V', topic: 'Connectives',
    prompt: 'Which connective introduces a contrasting idea?',
    options: ['en revanche', 'de plus', 'par exemple', 'c’est-à-dire'],
    answer: 0,
    explanation:
      '"En revanche" means on the other hand. "De plus" adds, "par exemple" illustrates and "c’est-à-dire" clarifies. Using a precise connective lifts Criterion C and D marks.',
  },
  {
    id: 'frV-13', subject: 'french', criterion: 'V', topic: 'Connectives',
    prompt: '"Bien qu’il pleuve, je vais sortir" means…',
    options: [
      'Although it is raining, I am going out',
      'Because it is raining, I am going out',
      'If it rains, I will go out',
      'When it rains, I go out',
    ],
    answer: 0,
    explanation:
      '"Bien que" means although and is followed by the subjunctive ("pleuve" rather than "pleut"). Recognising the subjunctive trigger is a Phase 4 skill.',
  },
  {
    id: 'frV-14', subject: 'french', criterion: 'V', topic: 'Connectives',
    prompt: 'Which phrase means "despite the difficulties"?',
    options: [
      'malgré les difficultés',
      'grâce aux difficultés',
      'à cause des difficultés',
      'selon les difficultés',
    ],
    answer: 0,
    explanation:
      '"Malgré" means despite. "Grâce à" means thanks to (positive cause), "à cause de" means because of (negative cause) and "selon" means according to.',
  },
  {
    id: 'frV-15', subject: 'french', criterion: 'V', topic: 'Opinions',
    prompt: 'Which expression introduces a justified opinion most strongly?',
    options: [
      'Je pense que… parce que…',
      'Je pense que…',
      'C’est bien.',
      'J’aime ça.',
    ],
    answer: 0,
    explanation:
      'A Phase 4 response states an opinion and justifies it. Adding "parce que" or "puisque" and a reason is what moves an answer beyond a bare statement.',
  },

  /* --- Register --- */
  {
    id: 'frV-16', subject: 'french', criterion: 'V', topic: 'Register',
    prompt: 'Writing a formal email to a company, which opening is appropriate?',
    options: [
      'Madame, Monsieur,',
      'Salut !',
      'Coucou,',
      'Ça va ?',
    ],
    answer: 0,
    explanation:
      '"Madame, Monsieur" is the standard formal opening when the recipient is unknown. The others are informal and would be penalised for inappropriate register.',
  },
  {
    id: 'frV-17', subject: 'french', criterion: 'V', topic: 'Register',
    prompt: 'When should you use "vous" rather than "tu"?',
    options: [
      'With adults you do not know, or more than one person',
      'Only with children',
      'Only with close friends',
      'Only in writing',
    ],
    answer: 0,
    explanation:
      '"Vous" is both the plural and the formal singular. Using "tu" with an unknown adult is a register error that examiners notice immediately.',
  },

  /* --- Work and future plans --- */
  {
    id: 'frV-18', subject: 'french', criterion: 'V', topic: 'Future plans',
    prompt: '"Je voudrais poursuivre mes études" means…',
    options: [
      'I would like to continue my studies',
      'I would like to leave school',
      'I used to study',
      'I have finished studying',
    ],
    answer: 0,
    explanation:
      '"Poursuivre" means to pursue or continue, and "je voudrais" is the polite conditional. This structure is expected when discussing future plans.',
  },
  {
    id: 'frV-19', subject: 'french', criterion: 'V', topic: 'Work',
    prompt: 'Someone described as "au chômage" is…',
    options: ['unemployed', 'retired', 'self-employed', 'on holiday'],
    answer: 0,
    explanation:
      '"Le chômage" is unemployment, so "au chômage" means out of work. "À la retraite" is retired.',
  },
  {
    id: 'frV-20', subject: 'french', criterion: 'V', topic: 'Work',
    prompt: 'In a careers text, "la formation" most likely means…',
    options: ['training', 'a formation of people', 'a form to fill in', 'a uniform'],
    answer: 0,
    explanation:
      '"La formation" means training or education for a role. A form is "un formulaire".',
  },

  /* --- Technology and media --- */
  {
    id: 'frV-21', subject: 'french', criterion: 'V', topic: 'Technology',
    prompt: '"Les réseaux sociaux" refers to…',
    options: ['social media', 'social classes', 'rail networks', 'social services'],
    answer: 0,
    explanation:
      '"Un réseau" is a network, so "les réseaux sociaux" is social media. It is core vocabulary for the scientific and technical innovation context.',
  },
  {
    id: 'frV-22', subject: 'french', criterion: 'V', topic: 'Technology',
    prompt: 'What does "une fausse information" (or "une infox") describe?',
    options: ['fake news', 'a private message', 'a news channel', 'a data breach'],
    answer: 0,
    explanation:
      '"Infox" blends "information" and "intoxication" and is the accepted French term for fake news, alongside "une fausse information".',
  },

  /* --- Health and lifestyle --- */
  {
    id: 'frV-23', subject: 'french', criterion: 'V', topic: 'Health',
    prompt: '"Une alimentation équilibrée" means…',
    options: ['a balanced diet', 'an expensive meal', 'a food shortage', 'a cookery lesson'],
    answer: 0,
    explanation:
      '"L’alimentation" is diet in the nutritional sense and "équilibrée" means balanced. Note that "un régime" specifically means a weight-loss diet.',
  },
  {
    id: 'frV-24', subject: 'french', criterion: 'V', topic: 'Health',
    prompt: 'Which phrase expresses obligation most strongly?',
    options: [
      'Il faut faire du sport.',
      'On peut faire du sport.',
      'On pourrait faire du sport.',
      'J’aime faire du sport.',
    ],
    answer: 0,
    explanation:
      '"Il faut" expresses necessity (it is necessary to). "On peut" is can, "on pourrait" is could, and the last simply expresses preference.',
  },

  /* --- Culture and travel --- */
  {
    id: 'frV-25', subject: 'french', criterion: 'V', topic: 'Culture',
    prompt: '"Le patrimoine culturel" refers to…',
    options: [
      'cultural heritage',
      'a cultural centre',
      'a patriotic movement',
      'a cultural exchange',
    ],
    answer: 0,
    explanation:
      '"Le patrimoine" means heritage, what is inherited from previous generations. It appears frequently in texts on identity and cultural expression.',
  },
  {
    id: 'frV-26', subject: 'french', criterion: 'V', topic: 'Culture',
    prompt: 'A text describing "le dépaysement" felt by a traveller is describing…',
    options: [
      'a sense of disorientation in unfamiliar surroundings',
      'homesickness for one’s own country',
      'the cost of travelling',
      'the paperwork required to travel',
    ],
    answer: 0,
    explanation:
      '"Le dépaysement" is the feeling of being removed from familiar surroundings. It can be positive or negative depending on context, which is why context matters at Phase 4.',
  },

  /* ==================== SPANISH ==================== */

  /* --- Environment and sustainability --- */
  {
    id: 'spV-1', subject: 'spanish', criterion: 'V', topic: 'Environment',
    prompt: 'In an article on sustainability, "el desperdicio de alimentos" refers to…',
    options: ['food waste', 'food poisoning', 'the food industry', 'a food festival'],
    answer: 0,
    explanation:
      '"El desperdicio" means waste in the sense of wasting something. Physical rubbish is "los residuos" or "la basura".',
  },
  {
    id: 'spV-2', subject: 'spanish', criterion: 'V', topic: 'Environment',
    prompt: 'What does "el efecto invernadero" mean?',
    options: ['the greenhouse effect', 'the winter season', 'an investment fund', 'an indoor garden'],
    answer: 0,
    explanation:
      '"Un invernadero" is a greenhouse, so "el efecto invernadero" is the greenhouse effect. Core vocabulary for the globalization and sustainability context.',
  },
  {
    id: 'spV-3', subject: 'spanish', criterion: 'V', topic: 'Environment',
    prompt: 'Which phrase means "to reduce your carbon footprint"?',
    options: [
      'reducir la huella de carbono',
      'aumentar la huella de carbono',
      'medir la contaminación',
      'reciclar el plástico',
    ],
    answer: 0,
    explanation:
      '"La huella" means footprint or trace, and "reducir" means to reduce. "Aumentar" is to increase, which reverses the meaning.',
  },
  {
    id: 'spV-4', subject: 'spanish', criterion: 'V', topic: 'Environment',
    prompt: '"Las energías renovables" would include…',
    options: [
      'la energía solar y eólica',
      'el carbón y el petróleo',
      'el gas natural',
      'solo la energía nuclear',
    ],
    answer: 0,
    explanation:
      '"Eólica" relates to wind and "solar" to the sun, so both are renewable. Coal, oil and gas are "los combustibles fósiles".',
  },

  /* --- Identity and relationships --- */
  {
    id: 'spV-5', subject: 'spanish', criterion: 'V', topic: 'Relationships',
    prompt: '"Me llevo bien con mi hermana" means…',
    options: [
      'I get on well with my sister',
      'I take my sister with me',
      'I carry things for my sister',
      'I look like my sister',
    ],
    answer: 0,
    explanation:
      '"Llevarse bien con" is an idiom meaning to get on well with. Translating "llevar" literally as to carry misses the idiomatic meaning.',
  },
  {
    id: 'spV-6', subject: 'spanish', criterion: 'V', topic: 'Relationships',
    prompt: 'In a text about school life, "el acoso escolar" refers to…',
    options: ['bullying at school', 'school homework', 'a school trip', 'the school timetable'],
    answer: 0,
    explanation:
      '"El acoso" means harassment, so "el acoso escolar" is school bullying. Standard vocabulary for the fairness and development context.',
  },
  {
    id: 'spV-7', subject: 'spanish', criterion: 'V', topic: 'Relationships',
    prompt: 'Which sentence expresses disagreement most politely?',
    options: [
      'No estoy del todo de acuerdo.',
      'Estás totalmente equivocado.',
      'Eso es una tontería.',
      'De ninguna manera.',
    ],
    answer: 0,
    explanation:
      '"No estoy del todo de acuerdo" (I do not entirely agree) softens the disagreement, which suits a formal written response.',
  },

  /* --- False friends --- */
  {
    id: 'spV-8', subject: 'spanish', criterion: 'V', topic: 'False friends',
    prompt: '"Actualmente" means…',
    options: ['currently', 'actually', 'accurately', 'eventually'],
    answer: 0,
    explanation:
      'A classic false friend: "actualmente" means currently. English "actually" is "en realidad" or "de hecho".',
  },
  {
    id: 'spV-9', subject: 'spanish', criterion: 'V', topic: 'False friends',
    prompt: '"Tuvo mucho éxito" means the person…',
    options: [
      'was very successful',
      'left quickly',
      'found the exit',
      'was very excited',
    ],
    answer: 0,
    explanation:
      '"El éxito" means success, not exit. An exit is "la salida". This is one of the most frequently confused pairs.',
  },
  {
    id: 'spV-10', subject: 'spanish', criterion: 'V', topic: 'False friends',
    prompt: '"Asistí a la reunión" means…',
    options: [
      'I attended the meeting',
      'I helped at the meeting',
      'I organised the meeting',
      'I missed the meeting',
    ],
    answer: 0,
    explanation:
      '"Asistir a" means to attend. To assist someone is "ayudar". Confusing them reverses your role in the sentence.',
  },
  {
    id: 'spV-11', subject: 'spanish', criterion: 'V', topic: 'False friends',
    prompt: '"Es una persona muy sensible" describes someone who is…',
    options: ['sensitive', 'sensible', 'reasonable', 'practical'],
    answer: 0,
    explanation:
      '"Sensible" in Spanish means sensitive. English "sensible" is "sensato" or "razonable".',
  },

  /* --- Connectives and opinion --- */
  {
    id: 'spV-12', subject: 'spanish', criterion: 'V', topic: 'Connectives',
    prompt: 'Which connective introduces a contrasting idea?',
    options: ['sin embargo', 'además', 'por ejemplo', 'es decir'],
    answer: 0,
    explanation:
      '"Sin embargo" means however. "Además" adds, "por ejemplo" illustrates and "es decir" clarifies. Precise connectives raise the level of written work.',
  },
  {
    id: 'spV-13', subject: 'spanish', criterion: 'V', topic: 'Connectives',
    prompt: '"Aunque llueva, voy a salir" means…',
    options: [
      'Even if it rains, I am going out',
      'Because it is raining, I am going out',
      'When it rains, I go out',
      'If it rains, I will stay in',
    ],
    answer: 0,
    explanation:
      '"Aunque" followed by the subjunctive ("llueva" rather than "llueve") expresses even if, referring to something hypothetical. Spotting the subjunctive is a Phase 4 skill.',
  },
  {
    id: 'spV-14', subject: 'spanish', criterion: 'V', topic: 'Connectives',
    prompt: 'Which phrase means "despite the difficulties"?',
    options: [
      'a pesar de las dificultades',
      'gracias a las dificultades',
      'a causa de las dificultades',
      'según las dificultades',
    ],
    answer: 0,
    explanation:
      '"A pesar de" means despite. "Gracias a" is thanks to, "a causa de" is because of and "según" is according to.',
  },
  {
    id: 'spV-15', subject: 'spanish', criterion: 'V', topic: 'Opinions',
    prompt: 'Which structure correctly expresses disagreement in Spanish?',
    options: [
      'No creo que sea justo.',
      'No creo que es justo.',
      'No creo que fue justo hoy.',
      'No creo que será justo.',
    ],
    answer: 0,
    explanation:
      '"No creer que" expresses doubt and therefore triggers the subjunctive: "sea", not "es". This is a standard Phase 4 accuracy point.',
  },

  /* --- Register --- */
  {
    id: 'spV-16', subject: 'spanish', criterion: 'V', topic: 'Register',
    prompt: 'Writing a formal letter, which opening is appropriate?',
    options: [
      'Estimado señor / Estimada señora:',
      '¡Hola!',
      '¿Qué tal?',
      'Oye,',
    ],
    answer: 0,
    explanation:
      '"Estimado/a" is the standard formal opening. Note that Spanish letters use a colon after the greeting, not a comma.',
  },
  {
    id: 'spV-17', subject: 'spanish', criterion: 'V', topic: 'Register',
    prompt: 'When should you use "usted" rather than "tú"?',
    options: [
      'With adults you do not know, or to show respect',
      'Only with children',
      'Only with close friends',
      'Only when writing to family',
    ],
    answer: 0,
    explanation:
      '"Usted" is the formal form and takes third-person verb endings. Using "tú" with an unfamiliar adult is a register error.',
  },

  /* --- Work and future plans --- */
  {
    id: 'spV-18', subject: 'spanish', criterion: 'V', topic: 'Future plans',
    prompt: '"Me gustaría seguir estudiando" means…',
    options: [
      'I would like to continue studying',
      'I would like to stop studying',
      'I used to study',
      'I have finished studying',
    ],
    answer: 0,
    explanation:
      '"Seguir" plus a gerund means to continue doing something. "Me gustaría" is the conditional, the polite way to state ambitions.',
  },
  {
    id: 'spV-19', subject: 'spanish', criterion: 'V', topic: 'Work',
    prompt: 'Someone described as "en paro" is…',
    options: ['unemployed', 'retired', 'self-employed', 'on strike'],
    answer: 0,
    explanation:
      '"El paro" means unemployment in Spain (also "el desempleo"). Retired is "jubilado" and on strike is "en huelga".',
  },
  {
    id: 'spV-20', subject: 'spanish', criterion: 'V', topic: 'Work',
    prompt: 'In a careers text, "las prácticas" most likely means…',
    options: ['a work placement', 'practice exercises', 'practical skills', 'rehearsals'],
    answer: 0,
    explanation:
      '"Las prácticas" refers to a work placement or internship. Practice in the sense of repetition is "la práctica" in the singular.',
  },

  /* --- Technology and media --- */
  {
    id: 'spV-21', subject: 'spanish', criterion: 'V', topic: 'Technology',
    prompt: '"Las redes sociales" refers to…',
    options: ['social media', 'social classes', 'road networks', 'social services'],
    answer: 0,
    explanation:
      '"Una red" is a network or net, so "las redes sociales" is social media. Core vocabulary for technology topics.',
  },
  {
    id: 'spV-22', subject: 'spanish', criterion: 'V', topic: 'Technology',
    prompt: 'What does "las noticias falsas" (or "los bulos") describe?',
    options: ['fake news', 'a private message', 'a news channel', 'a data breach'],
    answer: 0,
    explanation:
      '"Un bulo" is a hoax or false rumour, used alongside "noticias falsas" for fake news in Spanish media coverage.',
  },

  /* --- Health and lifestyle --- */
  {
    id: 'spV-23', subject: 'spanish', criterion: 'V', topic: 'Health',
    prompt: '"Una dieta equilibrada" means…',
    options: ['a balanced diet', 'an expensive meal', 'a food shortage', 'a cookery course'],
    answer: 0,
    explanation:
      '"Equilibrada" means balanced. Note that "estar a dieta" specifically means to be on a weight-loss diet.',
  },
  {
    id: 'spV-24', subject: 'spanish', criterion: 'V', topic: 'Health',
    prompt: 'Which phrase expresses obligation most strongly?',
    options: [
      'Hay que hacer ejercicio.',
      'Se puede hacer ejercicio.',
      'Se podría hacer ejercicio.',
      'Me gusta hacer ejercicio.',
    ],
    answer: 0,
    explanation:
      '"Hay que" expresses general necessity (one must). "Se puede" is one can, "se podría" is one could, and the last expresses preference.',
  },

  /* --- Culture and travel --- */
  {
    id: 'spV-25', subject: 'spanish', criterion: 'V', topic: 'Culture',
    prompt: '"El patrimonio cultural" refers to…',
    options: [
      'cultural heritage',
      'a cultural centre',
      'a patriotic movement',
      'a cultural exchange',
    ],
    answer: 0,
    explanation:
      '"El patrimonio" means heritage, what is inherited from earlier generations. It appears often in texts on identity and cultural expression.',
  },
  {
    id: 'spV-26', subject: 'spanish', criterion: 'V', topic: 'Culture',
    prompt: 'A text describing someone who is "bilingüe y bicultural" is describing a person who…',
    options: [
      'speaks two languages and belongs to two cultures',
      'has lived in two countries briefly',
      'is studying a second language',
      'has two nationalities on paper only',
    ],
    answer: 0,
    explanation:
      '"Bicultural" goes beyond language to belonging within two cultures. Distinguishing it from simply learning a language is the kind of nuance Phase 4 reading questions test.',
  },
]

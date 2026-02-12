// ============================================================
// KSB "Echt oder KI?" – Quiz-Datenbank
// Bilder: Unsplash (echte Fotos) + generierte Platzhalter-URLs
// ============================================================

const IMAGE_QUIZ_DATA = [
  // --- ECHTE BILDER (Unsplash – frei nutzbar) ---
  {
    id: "real_01",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    type: "real",
    category: "Landschaft",
    difficulty: 1,
    explanation: "Dieses Foto zeigt natürliche Unregelmässigkeiten in den Wolken und authentische Lichtreflexionen auf den Bergen, die KI oft nicht perfekt nachbilden kann.",
    tips: ["Achte auf natürliche Wolkenformationen", "Echte Fotos haben oft kleine Unregelmässigkeiten im Hintergrund"]
  },
  {
    id: "real_02",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    type: "real",
    category: "Architektur",
    difficulty: 1,
    explanation: "Eine echte Stadtansicht mit konsistenter Architektur von New York. Natürliche Lichtverhältnisse und korrekte Perspektivlinien.",
    tips: ["Gebäudefenster sollten ein gleichmässiges Muster haben", "KI verdoppelt manchmal Gebäude oder erzeugt unmögliche Strukturen"]
  },
  {
    id: "real_03",
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
    type: "real",
    category: "Tiere",
    difficulty: 1,
    explanation: "Ein echtes Foto eines Hundes mit natürlichem Fell, korrekten Proportionen und einer authentischen Umgebung.",
    tips: ["Fell und Haare sind bei KI oft zu gleichmässig", "Achte auf die Pfoten – KI hat Mühe mit Details"]
  },
  {
    id: "real_04",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    type: "real",
    category: "Alltag",
    difficulty: 2,
    explanation: "Ein echtes Food-Foto mit natürlichen Texturen, realistischem Geschirr und authentischer Beleuchtung.",
    tips: ["Essen hat in echt unregelmässige Texturen", "Achte auf Besteck und Tellerränder"]
  },
  {
    id: "real_05",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    type: "real",
    category: "Landschaft",
    difficulty: 2,
    explanation: "Ein echtes Strandfoto mit authentischem Farbverlauf und natürlichen Wellenmustern. Die Sandkörner und das Wasser zeigen echte Unregelmässigkeiten.",
    tips: ["KI-Strände sehen oft zu perfekt aus", "Achte auf die Schaumkronen der Wellen – sind sie natürlich?"]
  },
  {
    id: "real_06",
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
    type: "real",
    category: "Tiere",
    difficulty: 2,
    explanation: "Eine echte Katze mit korrekten Augenreflexionen, natürlichem Fell und realistischem Blick.",
    tips: ["Augen bei echten Fotos haben natürliche Reflexionen", "Schnurrhaare sind bei KI oft unregelmässig"]
  },
  {
    id: "real_07",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    type: "real",
    category: "Person",
    difficulty: 2,
    explanation: "Ein echtes Portrait mit natürlichen Gesichtszügen, leicht asymmetrischen Augenbrauen und realistischer Haut.",
    tips: ["Echte Gesichter sind leicht asymmetrisch", "Haarsträhnen fallen natürlich und unregelmässig"]
  },
  {
    id: "real_08",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    type: "real",
    category: "Alltag",
    difficulty: 2,
    explanation: "Ein echtes Geschäftsfoto mit natürlicher Beleuchtung, realistischen Materialien und echten Produkten.",
    tips: ["Echte Geschäfte zeigen natürliche Unordnung", "Achte auf Textdetails auf Preisschildern"]
  },
  {
    id: "real_09",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    type: "real",
    category: "Landschaft",
    difficulty: 3,
    explanation: "Ein echtes Waldfoto mit natürlich wachsenden Bäumen, unregelmässigem Blattwerk und authentischem Waldboden.",
    tips: ["KI-Wälder haben oft zu symmetrische Bäume", "Achte auf den Boden – Wurzeln und Blätter sind komplex"]
  },
  {
    id: "real_10",
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80",
    type: "real",
    category: "Person",
    difficulty: 3,
    explanation: "Ein echtes Portrait mit natürlichen Hautdetails, asymmetrischen Gesichtszügen und realistischen Augendetails.",
    tips: ["Echte Gesichter haben Poren und kleine Unebenheiten", "Haarsträhnen fallen natürlich und unregelmässig"]
  },
  {
    id: "real_11",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    type: "real",
    category: "Alltag",
    difficulty: 2,
    explanation: "Ein echtes Foto eines Arbeitsplatzes mit natürlichem Code auf dem Bildschirm, realistischer Tastatur und authentischer Beleuchtung.",
    tips: ["Text auf Bildschirmen ist bei KI oft unleserlich", "Achte auf die Tastaturbeschriftung"]
  },
  {
    id: "real_12",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    type: "real",
    category: "Architektur",
    difficulty: 2,
    explanation: "Ein echtes Architekturfoto mit korrekter Perspektive, realistischen Materialien und natürlicher Vegetation.",
    tips: ["Achte auf Fensterreflexionen – stimmen sie überein?", "Pflanzen im Vordergrund sollten natürlich aussehen"]
  },

  // --- KI-GENERIERTE BILDER (Platzhalter mit künstlichem Look) ---
  {
    id: "ai_01",
    src: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80",
    type: "ai",
    category: "Landschaft",
    difficulty: 1,
    explanation: "Dieses Bild hat typische KI-Merkmale: zu perfekte Symmetrie, traumartige Farbgebung und unwirklich gleichmässige Wolken.",
    tips: ["Zu perfekte Landschaften sind oft KI-generiert", "Achte auf unnatürliche Farbverläufe"]
  },
  {
    id: "ai_02",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    type: "ai",
    category: "Person",
    difficulty: 1,
    explanation: "KI-generiertes Portrait: extrem glatte Haut, perfekt symmetrisches Gesicht und ein unscharfer Übergang zwischen Haaren und Hintergrund.",
    tips: ["Zu perfekte Haut ohne Poren ist verdächtig", "Schau dir die Ohren genau an – KI vergisst oft Details"]
  },
  {
    id: "ai_03",
    src: "https://images.unsplash.com/photo-1425082661507-6af0db74ab07?w=800&q=80",
    type: "ai",
    category: "Tiere",
    difficulty: 1,
    explanation: "Dieses Tierbild ist KI-generiert: zu weiche Fellstruktur, unwirklich perfekter Hintergrund und übermässig detaillierte Augen.",
    tips: ["Zu niedliche Tiere mit überdimensionalen Augen sind verdächtig", "Achte auf die Pfoten und Krallen"]
  },
  {
    id: "ai_04",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    type: "ai",
    category: "Architektur",
    difficulty: 1,
    explanation: "Eine KI-generierte Szene: unwirkliche Beleuchtung, zu perfekte Spiegelungen und surreale Atmosphäre.",
    tips: ["Unmögliche Lichtsituationen deuten auf KI hin", "Achte auf wiederkehrende Muster in der Szene"]
  },
  {
    id: "ai_05",
    src: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=800&q=80",
    type: "ai",
    category: "Person",
    difficulty: 2,
    explanation: "KI-generiertes Bild: Achte auf ungewöhnlich perfekte Gesichtszüge und gleichmässige Beleuchtung ohne natürliche Schatten.",
    tips: ["Zähle immer die Finger!", "Achte auf Schmuck und Accessoires – sind sie logisch?"]
  },
  {
    id: "ai_06",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    type: "ai",
    category: "Alltag",
    difficulty: 2,
    explanation: "Dieses Food-Bild ist KI-generiert: die Pizza sieht zu perfekt aus, mit unrealistischen Glanzeffekten und zu gleichmässigem Belag.",
    tips: ["Zu perfektes Essen ist verdächtig", "Achte auf den Hintergrund – verschwimmt er unnatürlich?"]
  },
  {
    id: "ai_07",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    type: "ai",
    category: "Tiere",
    difficulty: 2,
    explanation: "Ein KI-generierter Hund: leicht unrealistische Fellstruktur, zu perfekte Pose und ein weichgezeichneter Hintergrund.",
    tips: ["KI-Fell hat oft eine seidige, zu gleichmässige Textur", "Hundenasen haben in echt eine einzigartige Textur"]
  },
  {
    id: "ai_08",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    type: "ai",
    category: "Architektur",
    difficulty: 2,
    explanation: "Ein KI-generierter Raum: zu perfekte Symmetrie, unrealistische Materialübergänge und fehlende Gebrauchsspuren.",
    tips: ["Zu aufgeräumte, perfekte Räume sind oft KI", "Achte auf Steckdosen, Schalter und andere kleine Details"]
  },
  {
    id: "ai_09",
    src: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
    type: "ai",
    category: "Landschaft",
    difficulty: 3,
    explanation: "Ein KI-generiertes Naturbild: zu perfekte Blütenblätter, unrealistische Schärfentiefe und zu symmetrische Anordnung.",
    tips: ["Natur ist nie perfekt symmetrisch", "Achte auf Wassertropfen – sind sie zu rund und perfekt?"]
  },
  {
    id: "ai_10",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    type: "ai",
    category: "Person",
    difficulty: 3,
    explanation: "Hochwertiges KI-Portrait: unrealistische Hautstruktur bei genauem Hinsehen, zu perfekter Haaransatz und unnatürlicher Iris-Rand.",
    tips: ["Zoome auf die Augen – KI-Iris hat oft einen zu scharfen Rand", "Achte auf den Haaransatz – oft zu perfekt bei KI"]
  },
  {
    id: "ai_11",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    type: "ai",
    category: "Person",
    difficulty: 3,
    explanation: "Schwer zu erkennende KI-generierte Person: fast perfekt, aber bei genauem Hinsehen zeigen sich Unstimmigkeiten in den Augenreflexionen.",
    tips: ["Achte auf Spiegelungen in den Augen – bei KI stimmen sie oft nicht überein", "Ohren sind manchmal unterschiedlich detailliert"]
  },
  {
    id: "ai_12",
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    type: "ai",
    category: "Landschaft",
    difficulty: 3,
    explanation: "Schwer zu erkennende KI-Landschaft: Bäume wirken zu gleichmässig, Farben sind etwas zu intensiv und einheitlich.",
    tips: ["Wasserreflexionen sind bei KI oft zu perfekt", "Achte auf wiederholende Muster bei Blättern"]
  },
  {
    id: "ai_13",
    src: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    type: "ai",
    category: "Alltag",
    difficulty: 3,
    explanation: "Ein KI-generiertes Produktfoto: zu perfekte Oberfläche, unrealistische Spiegelungen und fehlende natürliche Abnutzung.",
    tips: ["Produktfotos ohne echtes Logo oder Markenname sind verdächtig", "Achte auf Spiegelungen – stimmen sie mit der Umgebung überein?"]
  }
];

// ============================================================
// TEXT-QUIZ DATEN
// ============================================================

const TEXT_QUIZ_DATA = [
  {
    id: "text_real_01",
    content: "Die Schweizer Bundesbahnen (SBB) haben angekündigt, dass ab dem Fahrplanwechsel im Dezember 2025 auf der Strecke Zürich–St. Gallen zusätzliche Verbindungen eingeführt werden. Dies soll die Kapazitäten während der Stosszeiten um rund 15 Prozent erhöhen. «Wir reagieren damit auf die steigende Nachfrage», sagte SBB-Sprecherin Sabine Müller.",
    type: "real",
    category: "Nachricht",
    difficulty: 1,
    explanation: "Dieser Text enthält spezifische Details (konkreter Prozentsatz, Name der Sprecherin, Datum), die typisch für echte Nachrichtenartikel sind.",
    tips: ["Echte Nachrichtenartikel nennen konkrete Quellen mit Namen", "Spezifische Zahlen und Daten sind ein gutes Zeichen"]
  },
  {
    id: "text_real_02",
    content: "Gestern war echt ein komischer Tag. Zuerst hab ich den Bus verpasst, dann hat's angefangen zu regnen und natürlich – klar – hatte ich keinen Schirm dabei. Im Unterricht bei Frau Keller war ich dann auch noch total unkonzentriert. Naja, wenigstens war die Mittagspause lustig, weil Joel seinen Pudding fallen gelassen hat 😂",
    type: "real",
    category: "Social Media",
    difficulty: 2,
    explanation: "Dieser Text hat typische Merkmale von echten Social-Media-Posts: Umgangssprache, Emoji-Nutzung, spezifische persönliche Details und eine natürliche, ungezwungene Schreibweise.",
    tips: ["Echte Posts haben natürliche Tippfehler und Umgangssprache", "Spezifische Details über reale Personen und Orte sind typisch"]
  },
  {
    id: "text_real_03",
    content: "Die Kantonsschule am Brühl bietet drei verschiedene Bildungsgänge an: die Fachmittelschule (FMS), die Informatikmittelschule (IMS) und die Wirtschaftsmittelschule (WMS). Alle drei Ausbildungen dauern vier Jahre und schliessen mit einem eidgenössisch anerkannten Abschluss ab. Die Schule blickt auf eine über 100-jährige Geschichte zurück und befindet sich im Herzen von St. Gallen.",
    type: "real",
    category: "Informationstext",
    difficulty: 2,
    explanation: "Ein sachlicher, informierender Text mit überprüfbaren Fakten über die KSB. Die Sprache ist korrekt, aber natürlich und die Informationen sind präzise.",
    tips: ["Texte über existierende Institutionen können überprüft werden", "Sachliche Sprache ≠ automatisch KI"]
  },
  {
    id: "text_real_04",
    content: "Sehr geehrte Eltern\n\nWir möchten Sie darüber informieren, dass am Freitag, 14. März 2025, der Unterricht aufgrund einer schulinternen Weiterbildung bereits um 12:15 Uhr endet. Die Mittagsbetreuung findet wie gewohnt statt. Bitte stellen Sie sicher, dass Ihr Kind abgeholt wird oder selbstständig nach Hause gelangen kann.\n\nFreundliche Grüsse\nDie Schulleitung",
    type: "real",
    category: "E-Mail",
    difficulty: 2,
    explanation: "Ein typischer Elternbrief mit konkretem Datum, spezifischer Uhrzeit und klaren Handlungsanweisungen. Der formelle Ton ist für offizielle Schulkommunikation normal.",
    tips: ["Offizielle Kommunikation hat einen formellen, aber nicht übertriebenen Ton", "Konkrete Daten und Uhrzeiten sprechen für Echtheit"]
  },
  {
    id: "text_real_05",
    content: "Also ich finde die neue Mensa mega. Das Angebot ist viel besser als vorher und die Preise sind okay. Nur die Schlange ist halt immer noch viel zu lang in der grossen Pause. Gestern musste ich 15 Minuten anstehen und dann war das Poulet schon aus. Voll nervig. Aber die neuen Desserts sind fire 🔥",
    type: "real",
    category: "Social Media",
    difficulty: 1,
    explanation: "Authentischer Schülerkommentar mit Jugendsprache, konkreten Erfahrungen und einer Mischung aus positiver und negativer Kritik.",
    tips: ["Echte Kommentare sind selten nur positiv oder nur negativ", "Jugendsprache und Slang deuten auf echte Schüler hin"]
  },
  {
    id: "text_real_06",
    content: "BREAKING: Grossbrand in Lagerhalle in Gossau SG – Die Kantonspolizei St. Gallen meldet einen Grossbrand in einer Lagerhalle an der Industriestrasse. Die Feuerwehr ist mit einem Grossaufgebot vor Ort. Die Strasse ist gesperrt. Verletzt wurde gemäss ersten Informationen niemand. Die Brandursache ist noch unklar. Update folgt.",
    type: "real",
    category: "Nachricht",
    difficulty: 2,
    explanation: "Typische Eilmeldung: kurze Sätze, konkrete Ortsangabe, Nennung der Quelle (Kantonspolizei), Eingeständnis von Unsicherheit («noch unklar», «gemäss ersten Informationen»).",
    tips: ["Echte Eilmeldungen geben zu, was sie noch nicht wissen", "Spezifische Quellenangaben sprechen für Echtheit"]
  },
  {
    id: "text_real_07",
    content: "Protokoll der Schülerratssitzung, 22. Januar 2025\n\nAnwesend: 14 von 18 Mitgliedern\nEntschuldigt: L. Meier, T. Nguyen, A. Schmidt, F. Yilmaz\n\nTraktandum 1: Planung Frühlingsfest\n- Datum: 4. April 2025\n- Budget: CHF 2'800 (davon CHF 1'500 vom Schulbudget)\n- OK: Auf Antrag von M. Bühler wurde die Genehmigung einstimmig erteilt\n\nTraktandum 2: Wunsch nach Getränkeautomat\n- Diskussion: Mehrheitlich dafür, aber Bedenken wegen Littering\n- Entscheid: Anfrage an Schulleitung wird formuliert (Verantwortlich: R. Petrovic)",
    type: "real",
    category: "Dokument",
    difficulty: 3,
    explanation: "Authentisches Protokoll mit typischen Merkmalen: konkrete Namen, Abstimmungsergebnisse, Budget-Details und klare Zuständigkeiten.",
    tips: ["Protokolle haben eine sehr spezifische Struktur", "Konkrete Namen und Budget-Zahlen sprechen für Echtheit"]
  },
  {
    id: "text_ai_01",
    content: "Die Digitalisierung stellt unsere Gesellschaft vor vielfältige Herausforderungen und Chancen zugleich. Einerseits ermöglicht sie eine beispiellose Vernetzung und den Zugang zu Informationen, andererseits birgt sie Risiken wie Datenschutzbedenken und die Verbreitung von Falschinformationen. Es ist daher von entscheidender Bedeutung, dass wir einen ausgewogenen und reflektierten Umgang mit digitalen Technologien pflegen.",
    type: "ai",
    category: "Informationstext",
    difficulty: 1,
    explanation: "Typischer KI-Text: sehr allgemein, keine konkreten Beispiele, ausgewogene «Einerseits-Andererseits»-Struktur, und übertrieben formelle Sprache ohne persönliche Note.",
    tips: ["KI-Texte sind oft zu ausgewogen ohne eigene Meinung", "Fehlende konkrete Beispiele sind verdächtig", "Übermässig formelle Sprache ohne persönliche Note"]
  },
  {
    id: "text_ai_02",
    content: "St. Gallen, eine wunderschöne Stadt im Herzen der Ostschweiz, besticht durch ihre malerische Altstadt und die berühmte Stiftsbibliothek, die zum UNESCO-Weltkulturerbe gehört. Die Stadt bietet eine perfekte Mischung aus Tradition und Moderne, mit einer lebendigen Kulturszene, erstklassigen Gastronomie und atemberaubenden Ausblicken auf den Bodensee und die Alpen. Ob Geschichte, Kunst oder Natur – St. Gallen hat für jeden etwas zu bieten.",
    type: "ai",
    category: "Informationstext",
    difficulty: 2,
    explanation: "KI-generierter Werbetext: übertrieben positiv, Verwendung von Superlativen («wunderschöne», «erstklassigen», «atemberaubenden»), klischeehafte Formulierungen und keine persönliche Erfahrung.",
    tips: ["Übermässig viele Superlative deuten auf KI hin", "KI-Texte klingen oft wie Werbetexte", "Klischeehafte Beschreibungen sind verdächtig"]
  },
  {
    id: "text_ai_03",
    content: "Hey, ich wollte dir nur sagen, dass der Ausflug heute wirklich grossartig war. Die Wanderung war angenehm und die Aussicht war einfach atemberaubend. Es war ein perfekter Tag mit perfektem Wetter und perfekter Gesellschaft. Ich bin dankbar für diese wundervolle Erfahrung und freue mich schon auf das nächste Mal.",
    type: "ai",
    category: "Social Media",
    difficulty: 1,
    explanation: "KI-generierte Nachricht: zu perfekt formuliert für eine informelle Nachricht, übermässig positiv, wiederholende Satzstruktur («perfekter Tag, perfektes Wetter, perfekte Gesellschaft»), keine echten Details oder Umgangssprache.",
    tips: ["Echte Nachrichten sind selten durchgehend positiv", "Wiederholende Satzstrukturen sind typisch für KI", "Fehlende Umgangssprache in informellen Texten ist verdächtig"]
  },
  {
    id: "text_ai_04",
    content: "Liebe Schülerinnen und Schüler,\n\nDas Erlernen einer neuen Sprache ist eine bereichernde Erfahrung, die viele Vorteile mit sich bringt. Es fördert nicht nur die kognitiven Fähigkeiten, sondern erweitert auch den kulturellen Horizont und schafft neue Möglichkeiten in der beruflichen Laufbahn. Jede Sprache öffnet ein Fenster zu einer neuen Welt des Verstehens und der Kommunikation. Bleiben Sie motiviert und nutzen Sie jede Gelegenheit zum Üben!",
    type: "ai",
    category: "E-Mail",
    difficulty: 2,
    explanation: "KI-generierter Motivationstext: allgemeine Aussagen ohne konkrete Anweisungen, keine spezifische Sprache genannt, übertrieben inspirierende Sprache und abgedroschene Metaphern.",
    tips: ["Echte Lehrkräfte geben konkrete Anweisungen", "Allgemeine Motivationssprüche ohne Kontext sind oft KI", "Fehlende spezifische Details (welche Sprache? welches Fach?)"]
  },
  {
    id: "text_ai_05",
    content: "Die Schweiz ist ein faszinierendes Land, das für seine atemberaubende Natur, seine reiche Geschichte und seine vielfältige Kultur bekannt ist. Von den majestätischen Alpen bis hin zu den malerischen Seen bietet die Schweiz eine einzigartige Kombination aus natürlicher Schönheit und kultureller Vielfalt. Die Schweizer Bevölkerung zeichnet sich durch ihre Mehrsprachigkeit, ihre Gastfreundschaft und ihren Innovationsgeist aus.",
    type: "ai",
    category: "Informationstext",
    difficulty: 1,
    explanation: "Typischer KI-Text über die Schweiz: enthält nur Klischees und Allgemeinplätze, keine persönliche Perspektive, übertrieben positive Sprache mit vielen Adjektiven.",
    tips: ["Texte voller Klischees ohne neue Informationen sind verdächtig", "KI nutzt oft übertrieben viele Adjektive", "Fehlende persönliche oder kritische Perspektive"]
  },
  {
    id: "text_ai_06",
    content: "Sehr geehrte Damen und Herren,\n\nIch schreibe Ihnen, um meine Gedanken über die bemerkenswerte Entwicklung der modernen Technologie zu teilen. In einer Welt, die sich ständig weiterentwickelt, ist es von grösster Bedeutung, dass wir die Chancen nutzen, die uns die digitale Revolution bietet, während wir gleichzeitig die damit verbundenen Herausforderungen verantwortungsbewusst angehen.\n\nMit freundlichen Grüssen",
    type: "ai",
    category: "E-Mail",
    difficulty: 2,
    explanation: "KI-generierte E-Mail: kein konkreter Anlass genannt, allgemeine Phrasen, kein Absender, Thema bleibt vage. Eine echte E-Mail hätte einen konkreten Grund.",
    tips: ["Echte E-Mails haben immer einen konkreten Grund", "Fehlender Absendername ist verdächtig", "Allgemeine Phrasen ohne konkreten Inhalt deuten auf KI"]
  },
  {
    id: "text_ai_07",
    content: "Die Herbstferien nähern sich mit grossen Schritten und viele Familien freuen sich bereits auf eine wohlverdiente Auszeit vom Alltag. Ob man nun in die Berge fährt, einen Städtetrip plant oder einfach die Zeit zu Hause geniesst – die Herbstferien bieten eine ideale Gelegenheit, neue Energie zu tanken und gemeinsame Erinnerungen zu schaffen. Besonders für Schülerinnen und Schüler sind die Ferien eine wichtige Phase der Erholung.",
    type: "ai",
    category: "Informationstext",
    difficulty: 2,
    explanation: "KI-generierter Allgemeinplatz: keine konkreten Jahreszahlen, keine spezifischen Empfehlungen, übermässig positive und allgemeine Sprache.",
    tips: ["Fehlende Jahreszahlen und spezifische Daten sind verdächtig", "KI listet gerne Optionen auf ohne sich festzulegen («ob... oder... oder»)"]
  }
];

// ============================================================
// TIPPS & TRICKS DATEN
// ============================================================

const TIPS_DATA = {
  images: {
    title: "KI-Bilder erkennen",
    icon: "🖼️",
    sections: [
      {
        title: "Hände & Finger",
        icon: "✋",
        content: "KI hat nach wie vor Schwierigkeiten mit Händen. Zähle die Finger – oft sind es zu viele oder zu wenige. Fingergelenke können unnatürlich gebogen oder verschmolzen erscheinen.",
        difficulty: "Leicht erkennbar"
      },
      {
        title: "Augen & Gesichter",
        icon: "👁️",
        content: "KI-Gesichter sind oft zu symmetrisch. Echte Gesichter haben leichte Asymmetrien. Achte auf die Iris – bei KI hat sie oft einen zu scharfen oder unnatürlichen Rand. Ohrringe oder Ohren sind manchmal nicht identisch.",
        difficulty: "Mittel"
      },
      {
        title: "Text im Bild",
        icon: "📝",
        content: "Text auf Schildern, Büchern oder Bildschirmen ist oft der grösste Schwachpunkt von KI. Die Buchstaben sehen aus wie echte Schrift, ergeben aber keinen Sinn oder enthalten Fehler.",
        difficulty: "Leicht erkennbar"
      },
      {
        title: "Hintergrund & Details",
        icon: "🔍",
        content: "Schau dir den Hintergrund genau an: verschwimmen Objektränder unnatürlich? Gibt es wiederholende Muster? Sind Personen im Hintergrund verzerrt oder haben sie seltsame Proportionen?",
        difficulty: "Mittel"
      },
      {
        title: "Texturen & Materialien",
        icon: "🧶",
        content: "KI-Bilder haben oft eine zu glatte, makellose Textur. Echte Fotos zeigen natürliche Unregelmässigkeiten in Haut, Stoff, Holz oder anderen Materialien.",
        difficulty: "Schwer"
      },
      {
        title: "Beleuchtung & Schatten",
        icon: "💡",
        content: "Achte auf die Lichtquelle: Kommen alle Schatten aus der gleichen Richtung? KI verwechselt manchmal Schattenwürfe oder erzeugt unmögliche Lichtverhältnisse.",
        difficulty: "Schwer"
      }
    ]
  },
  texts: {
    title: "KI-Texte erkennen",
    icon: "📝",
    sections: [
      {
        title: "Zu perfekt & ausgewogen",
        icon: "⚖️",
        content: "KI-Texte präsentieren oft beide Seiten eines Arguments gleich stark, ohne eigene Position. «Einerseits... andererseits...» ist ein typisches Muster. Echte Menschen haben meist eine klare Meinung.",
        difficulty: "Leicht erkennbar"
      },
      {
        title: "Allgemeinplätze",
        icon: "🌍",
        content: "KI-Texte bleiben oft vage und allgemein. Sie verwenden Phrasen wie «vielfältige Herausforderungen», «enormes Potenzial» oder «von entscheidender Bedeutung», ohne konkrete Beispiele.",
        difficulty: "Leicht erkennbar"
      },
      {
        title: "Übertriebene Adjektive",
        icon: "✨",
        content: "KI nutzt gerne Superlative und übertrieben positive Beschreibungen: «wunderschön», «atemberaubend», «einzigartig», «bemerkenswert». Echte Texte sind oft nüchterner.",
        difficulty: "Mittel"
      },
      {
        title: "Fehlende persönliche Note",
        icon: "👤",
        content: "KI-Texte klingen oft unpersönlich und steril. Echte Texte enthalten persönliche Erfahrungen, Emotionen, Humor oder auch Unsicherheit.",
        difficulty: "Mittel"
      },
      {
        title: "Wiederholende Struktur",
        icon: "🔄",
        content: "KI neigt dazu, Sätze ähnlich zu strukturieren. Achte auf wiederholende Muster in der Satzlänge und im Aufbau.",
        difficulty: "Schwer"
      },
      {
        title: "Fehlende Quellenangaben",
        icon: "📚",
        content: "Wenn ein angeblich faktenbasierter Text keine konkreten Quellen, Daten oder Studien nennt, könnte er KI-generiert sein. Echte Fachtexte verweisen auf Quellen.",
        difficulty: "Mittel"
      }
    ]
  },
  general: {
    title: "Allgemeine Tipps",
    icon: "🛡️",
    sections: [
      {
        title: "Kritisch bleiben",
        icon: "🧠",
        content: "Der wichtigste Tipp: Hinterfrage alles, was du online siehst oder liest. Frage dich: Wer hat das erstellt? Warum? Gibt es eine Quelle?"
      },
      {
        title: "Reverse Image Search",
        icon: "🔎",
        content: "Nutze die Google-Bildersuche oder TinEye, um zu prüfen, ob ein Bild schon anderswo im Internet existiert. KI-Bilder haben normalerweise keine Quelle."
      },
      {
        title: "Metadaten prüfen",
        icon: "📊",
        content: "Echte Fotos haben EXIF-Daten (Kameramodell, Datum, Ort). KI-generierte Bilder haben diese Metadaten nicht. Online-Tools können dir helfen, diese zu prüfen."
      },
      {
        title: "KI-Detektoren",
        icon: "🤖",
        content: "Es gibt Online-Tools wie «AI or Not», «Hive Moderation» oder «GPTZero» (für Texte), die helfen können. Aber Vorsicht: Kein Detektor ist 100% zuverlässig!"
      }
    ]
  }
};

// ============================================================
// AUSWERTUNGS-STUFEN
// ============================================================

const RESULT_LEVELS = [
  {
    minPercent: 90,
    title: "🏆 KI-Profi!",
    color: "#7a9a01",
    description: "Hervorragend! Du erkennst KI-generierte Inhalte sehr zuverlässig. Du bist bestens gewappnet für die digitale Welt.",
    advice: "Teile dein Wissen mit anderen und bleibe weiterhin aufmerksam – KI wird ständig besser!"
  },
  {
    minPercent: 70,
    title: "👍 Aufmerksam",
    color: "#4a90d9",
    description: "Gut gemacht! Du erkennst die meisten KI-Inhalte. Bei einigen Bildern/Texten gibt es noch Verbesserungspotenzial.",
    advice: "Achte besonders auf die Kategorien, in denen du Fehler gemacht hast. Die Tipps helfen dir, dich zu verbessern."
  },
  {
    minPercent: 50,
    title: "⚠️ Vorsicht",
    color: "#f0a500",
    description: "Du erkennst ungefähr die Hälfte der KI-Inhalte. Da ist noch Luft nach oben!",
    advice: "Schau dir die Tipps & Tricks genau an und versuche es nochmal. Mit Übung wirst du besser!"
  },
  {
    minPercent: 0,
    title: "🚨 Gefährdet",
    color: "#e6007e",
    description: "Du tust dich noch schwer, KI-generierte Inhalte zu erkennen. Das ist keine Schande – aber es ist wichtig, daran zu arbeiten!",
    advice: "Lies dir die Tipps & Tricks aufmerksam durch und versuche das Quiz nochmal. Jeder Durchgang hilft dir, besser zu werden!"
  }
];

// ============================================================
// KSB "Echt oder KI?" – Quiz-Datenbank
// ============================================================

// --- BILDER-QUIZ ---
const IMAGE_QUIZ_DATA = [
  // ===== ECHTE FOTOS (Unsplash) =====
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=900&q=80',
    explanation: 'Dieses Bild ist ein echtes Foto. Beachte die natürliche Unregelmässigkeit in der Landschaft, authentische Wettereffekte und die konsistente Beleuchtung – typische Merkmale eines echten Fotos.',
    category: 'Landschaft',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1534954553104-88cb75be7648?fm=jpg&q=80&w=900&auto=format&fit=crop',
    explanation: 'Dieses Schwarz-Weiss-Porträt ist echt. Die extrem detaillierte Hautstruktur mit tiefen Falten und Poren ist in dieser natürlichen Komplexität für KI sehr schwer konsistent darzustellen.',
    category: 'Porträt',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=900&q=80',
    explanation: 'Dieses Katzenfoto ist echt. Achte auf die natürliche Fellstruktur, die realistischen Schnurrhaare und die natürlichen Lichtreflexe in den Augen.',
    category: 'Tiere',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    explanation: 'Dieses Food-Foto ist echt. Die natürlichen Texturen der Zutaten, authentische Farbvariationen und die organische Anordnung sind Kennzeichen eines echten Fotos.',
    category: 'Essen',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80',
    explanation: 'Dieses Stadtfoto ist echt. Die konsistenten Reflexionen, der natürliche Lichteinfall und die korrekte Perspektive aller Gebäude bestätigen die Echtheit.',
    category: 'Stadt',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&q=80',
    explanation: 'Dieses Hundefoto ist echt. Die natürlichen Fellvariationen, realistische Augen und die authentische Körperhaltung verraten ein echtes Tier.',
    category: 'Tiere',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900&q=80',
    explanation: 'Dieses Foto ist echt. Die natürlichen Lichtverhältnisse, authentische Textur und die konsistente Schärfentiefe zeigen ein echtes, unbearbeitetes Foto.',
    category: 'Tiere',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1552158732-06dc1d835de0?fm=jpg&q=80&w=900&auto=format&fit=crop',
    explanation: 'Dieses Porträt ist echt. Der intensive Blick und die ungeschönte Hauttextur mit sichtbaren Poren, Bartstoppeln und Unreinheiten zeigen die Echtheit. KI neigt dazu, Haut untypisch weichzuzeichnen.',
    category: 'Porträt',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&q=80',
    explanation: 'Diese Landschaft ist echt. Die natürlichen Wolkenformationen, authentische Lichtstimmung und die realistische Tiefenwirkung verraten ein echtes Foto.',
    category: 'Landschaft',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1484591974057-265bb767ef71?w=900&q=80',
    explanation: 'Dieses Foto ist echt. Die natürliche Unordnung, authentische Materialien und die konsistente Beleuchtung sind Merkmale einer echten Aufnahme.',
    category: 'Innenräume',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80',
    explanation: 'Diese Naturaufnahme ist echt. Die stimmige Lichtstimmung, natürliche Farbverläufe und die realistische Schärfentiefe bestätigen die Echtheit.',
    category: 'Natur',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1749823029842-83962bc893bf?fm=jpg&q=80&w=900&auto=format&fit=crop',
    explanation: 'Diese Aufnahme ist echt. Die natürliche Beleuchtung, der authentische, nicht inszenierte Ausdruck und die realistischen Hauttöne wirken organisch und lebendig.',
    category: 'Porträt',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80',
    explanation: 'Dieses Landschaftsfoto ist echt. Natürliche Wasserreflexionen, authentische Wolkenmuster und die stimmige Beleuchtung verraten ein echtes Foto.',
    category: 'Landschaft',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=900&q=80',
    explanation: 'Dieses Essen-Foto ist echt. Die natürliche Farbgebung, verschiedene Texturen und die organische Anordnung der Zutaten zeigen ein echtes Foto.',
    category: 'Essen',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80',
    explanation: 'Dieses Naturfoto ist echt. Die natürlichen Lichtverläufe, authentische Grasstrukturen und die realistische Atmosphäre bestätigen die Echtheit.',
    category: 'Natur',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=80',
    explanation: 'Dieses Tierfoto ist echt. Der authentische Blick, natürliche Fellmuster und die realistische Schärfentiefe zeigen ein echtes Foto.',
    category: 'Tiere',
    difficulty: 1
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80',
    explanation: 'Diese Berglandschaft ist ein echtes Foto. Die natürlichen Sternenmuster, authentische Schneestrukturen und stimmige Beleuchtung verraten ein echtes Foto.',
    category: 'Landschaft',
    difficulty: 2
  },
  {
    type: 'real',
    src: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=900&q=80',
    explanation: 'Dieses Strassenfoto ist echt. Die authentischen Schatten, natürliche Bewegungsunschärfe und die korrekte Perspektive bestätigen die Echtheit.',
    category: 'Stadt',
    difficulty: 2
  },

  // ===== KI-GENERIERTE BILDER (lokal) =====
  {
    type: 'ai',
    src: 'images/ai/portrait_woman.png',
    explanation: 'Dieses Bild wurde von KI generiert. Typische Anzeichen: übermässig glatte Haut, perfekt symmetrisches Gesicht, die Augenpartie wirkt leicht künstlich, und die Haare haben eine zu gleichmässige Textur.',
    category: 'Porträt',
    difficulty: 2
  },
  {
    type: 'ai',
    src: 'images/ai/landscape_mountains.png',
    explanation: 'Dieses Bild ist KI-generiert. Die Reflexion im Wasser ist zu perfekt symmetrisch, die Farben wirken übernatürlich intensiv, und die Berge haben eine zu gleichmässige Struktur.',
    category: 'Landschaft',
    difficulty: 2
  },
  {
    type: 'ai',
    src: 'images/ai/city_street.png',
    explanation: 'Dieses Bild wurde von KI erstellt. Achte auf die Schriften an den Geschäften – sie sehen aus wie echte Buchstaben, ergeben aber keinen klaren Sinn. Auch die Perspektive der Gebäude ist leicht inkonsistent.',
    category: 'Stadt',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/cat_closeup.png',
    explanation: 'Dieses Katzenbild ist KI-generiert. Die Fellstruktur ist zu gleichmässig, die Schnurrhaare haben eine unnatürlich perfekte Anordnung, und die Augen wirken zu symmetrisch.',
    category: 'Tiere',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/food_sushi.png',
    explanation: 'Dieses Sushi-Bild ist KI-generiert. Die Blumen auf dem Teller sind unnatürlich platziert, einige Texturen wiederholen sich, und die Anordnung ist zu perfekt symmetrisch für ein echtes Food-Foto.',
    category: 'Essen',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/interior_modern.png',
    explanation: 'Dieses Innenraum-Bild ist KI-generiert. Beachte die zu perfekte Symmetrie des Raums, die unrealistisch sauberen Oberflächen und die Stadtsilhouette im Fenster, die leicht verzerrt wirkt.',
    category: 'Innenräume',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/portrait_man.png',
    explanation: 'Dieses Porträt ist KI-generiert. Die Barthaare haben eine zu gleichmässige Textur, die Falten wirken leicht unnatürlich, und die Jackenknöpfe zeigen subtile Inkonsistenzen.',
    category: 'Porträt',
    difficulty: 2
  },
  {
    type: 'ai',
    src: 'images/ai/beach_sunset.png',
    explanation: 'Dieses Strandbild ist KI-generiert. Achte auf den "Vacation 2023"-Text im unteren Bereich – KI hat versucht, einen Fotoabzug-Stil zu imitieren. Auch die Palmensilhouetten sind zu perfekt gleichmässig.',
    category: 'Landschaft',
    difficulty: 2
  },
  {
    type: 'ai',
    src: 'images/ai/golden_retriever.png',
    explanation: 'Dieses Hundebild ist KI-generiert. Obwohl es sehr realistisch aussieht, zeigt das Fell eine zu gleichmässige Textur, und der Hintergrund verschwimmt auf eine unnatürlich gleichmässige Art.',
    category: 'Tiere',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/coffee_shop.png',
    explanation: 'Dieses Café-Bild ist KI-generiert. Die Gesichter der Personen im Hintergrund sind unscharf und leicht verzerrt, die Speisekarte an der Wand enthält unleserlichen Text, und die Beleuchtung ist zu gleichmässig.',
    category: 'Innenräume',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/autumn_forest.png',
    explanation: 'Dieses Waldbild ist KI-generiert. Die Lichtstrahlen sind zu perfekt angeordnet, die Blätter haben eine repetitive Textur, und die Baumstämme zeigen eine unnatürlich gleichmässige Moosstruktur.',
    category: 'Natur',
    difficulty: 3
  },
  {
    type: 'ai',
    src: 'images/ai/dog_park.png',
    explanation: 'Dieses Bild ist KI-generiert. Der Hund hat subtile anatomische Unstimmigkeiten, die Rasenstruktur wiederholt sich, und die Schatten passen nicht ganz zur Lichtquelle.',
    category: 'Tiere',
    difficulty: 2
  },
  {
    type: 'ai',
    src: 'images/ai/young_man.png',
    explanation: 'Dieses Bild ist KI-generiert. Der Buchtitel "The Quiet Hours" wirkt zwar authentisch, aber die Hände und Finger zeigen subtile Anomalien. Auch die Pflanzen im Hintergrund wiederholen sich auffällig.',
    category: 'Porträt',
    difficulty: 3
  }
];

// --- TEXT-QUIZ ---
const TEXT_QUIZ_DATA = [
  // ===== ECHTE TEXTE =====
  {
    type: 'real',
    content: 'Die Schweiz hat im vergangenen Jahr einen Anstieg der Temperaturen um 0,3 Grad verzeichnet. Experten warnen vor den langfristigen Auswirkungen auf die Gletscher. «Wenn wir nicht sofort handeln, könnten bis 2050 mehr als die Hälfte der Schweizer Gletscher verschwunden sein», sagte Professor Markus Lüthi von der ETH Zürich der NZZ.',
    explanation: 'Dies ist ein echter Text. Die spezifische Namensnennung (Prof. Markus Lüthi), die präzise Quellenangabe (NZZ), der sachliche Ton und die verwendung von Schweizer Anführungszeichen «» sind typisch für echten Journalismus.',
    category: 'Nachrichten',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'hab gestern beim coop die falsche milch gekauft lol. wollte laktosefrei und hab dann erst zuhause gemerkt dass es normale war 🤦‍♀️ naja morgen geh ich nochmal hin. kennt ihr das??',
    explanation: 'Dies ist ein echter Text. Die Umgangssprache, Tippfehler, fehlende Grossschreibung, das Emoji und der informelle Ton sind typisch für echte Social-Media-Posts. KI schreibt meist grammatikalisch korrekter.',
    category: 'Social Media',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Das Abkommen von Paris setzt den Rahmen für die internationale Klimapolitik. Doch die Umsetzung bleibt umstritten: Während die EU ambitionierte Ziele formuliert, bremsen grosse Emittenten wie China und Indien. Die Schweiz positioniert sich als Vermittlerin, was ihr auf internationaler Bühne zwar Respekt, aber auch Kritik einbringt.',
    explanation: 'Dies ist ein echter Text. Die differenzierte Argumentation, das Abwägen verschiedener Perspektiven und die nuancierte Darstellung der Schweizer Position deuten auf einen erfahrenen Journalisten hin.',
    category: 'Nachrichten',
    difficulty: 2
  },
  {
    type: 'real',
    content: 'Liebi Kolleginne und Kollege\n\nI möcht eu dra erinnere, dass am Fritig de letschti Tag isch zum sich für de Teamusflug azmelde. Mir gönd nach Appezöll go wandere und naschhär no öppis ässe. Bitte melded eu bi mir oder bi de Sandra.\n\nLiebe Grüess\nMarkus',
    explanation: 'Dies ist ein echter Text. Der schweizerdeutsche Dialekt mit typischen Ausdrücken wie «eu dra erinnere», «de letschti Tag» und «naschhär no öppis ässe» ist für KI extrem schwer korrekt nachzubilden.',
    category: 'E-Mail',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Ich weiss nicht, was ich machen soll. Die Prüfung in Mathe war eine Katastrophe, obwohl ich drei Tage lang gelernt habe. Frau Müller hat gesagt, ich könnte die Nachprüfung machen, aber dann muss ich das Wochenende bei Oma absagen und sie hat sich so gefreut auf uns. Manchmal ist alles einfach zu viel.',
    explanation: 'Dies ist ein echter Text. Die emotionale Authentizität, die spezifischen Details (Frau Müller, Wochenende bei Oma) und das Gefühl der Überforderung wirken sehr persönlich und echt.',
    category: 'Persönlich',
    difficulty: 2
  },
  {
    type: 'real',
    content: 'Zutaten für 4 Personen:\n- 400g Älplermagronen\n- 200g Gruyère, gerieben\n- 3 grosse Kartoffeln, gewürfelt\n- 2 Zwiebeln\n- 2.5 dl Rahm\n\nKartoffeln ca. 10 Min. kochen. Magronen nach Packungsanleitung beifügen. Rahm und Käse unterheben. Zwiebeln separat in Butter goldbraun braten. Über die Magronen geben. Dazu passt Apfelmus!',
    explanation: 'Dies ist ein echter Text. Das traditionelle Schweizer Rezept mit typischen Zutaten (Gruyère, Rahm, Apfelmus), den konkreten Mengenangaben und der praktischen Anleitung zeigt einen authentischen Rezepttext.',
    category: 'Rezept',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Die Gemeinde informiert: Aufgrund von Leitungsarbeiten der Wasserversorgung ist die Hauptstrasse zwischen Kreuzung Adler und Gemeindehaus von Montag, 18. März bis voraussichtlich Freitag, 22. März gesperrt. Eine Umleitung via Bergstrasse ist signalisiert. Wir bitten um Verständnis.',
    explanation: 'Dies ist ein echter Text. Die spezifischen Ortsnamen, präzisen Datumsangaben und der formelle Behörden-Ton mit der Bitte um Verständnis sind typisch für echte Gemeindeinformationen.',
    category: 'Behörden',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'haha mega fail im training heute 😂 wollte den Ball annehmen und bin voll auf die Fresse geflogen. Der ganze Platz hat gelacht, sogar der Trainer. Naja wenigstens hab ich nachher noch 2 Tore geschossen, revenge ist süss 💪⚽',
    explanation: 'Dies ist ein echter Text. Die spontane Erzählung, Umgangssprache, Emojis und die natürliche Abfolge von Peinlichkeit und Triumph sind typisch für echte persönliche Beiträge.',
    category: 'Social Media',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Sehr geehrter Herr Meier\n\nBezugnehmend auf unser Telefongespräch vom 5. Februar bestätige ich den Termin für die Besprechung am 20. Februar um 14:00 Uhr in unserem Büro an der Bahnhofstrasse 12. Bitte bringen Sie die Unterlagen zum Baugesuch mit.\n\nFreundliche Grüsse\nAnna Keller\nGemeindebauamt',
    explanation: 'Dies ist ein echter Text. Die formelle Geschäftssprache, spezifische Terminangaben, die konkrete Adresse und die korrekte Schweizer Briefform zeigen einen authentischen Behördenbrief.',
    category: 'Behörden',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Was viele nicht wissen: Der Bodensee gehört zu keinem Staat vollständig. Die Grenzen im See sind bis heute nicht verbindlich geregelt. Während Deutschland und Österreich von einer Haldentheorie ausgehen, vertritt die Schweiz die Realteilungstheorie. Ein Kuriosum, das seit über 100 Jahren besteht und vermutlich nie gelöst wird.',
    explanation: 'Dies ist ein echter Text. Die spezifische Faktenlage zur Bodensee-Grenze, die korrekten juristischen Begriffe und die differenzierte Darstellung verraten fundiertes Wissen.',
    category: 'Wissen',
    difficulty: 2
  },
  {
    type: 'real',
    content: 'Am Samstag Nacht hend mir s Openair in Frauefäld bsuecht. S Wetter isch mega gsi, d Bands au – vorallem bi Stress isch d Stimmig explodiert. Leider hend mir denn s letschte Zügli verpasst und hend müesse Taxi näh. Hät 120 Stutz koscht, aber s isch es wert gsi!',
    explanation: 'Dies ist ein echter Text. Der authentische Schweizerdeutsch-Dialekt mit typischen Ausdrücken wie «hend mir», «Stutz», «s letschte Zügli» und der informelle Erzählstil sind für KI kaum imitierbar.',
    category: 'Social Media',
    difficulty: 1
  },
  {
    type: 'real',
    content: 'Die Kantonspolizei St.Gallen meldet: Gestern Nachmittag kam es auf der A1 bei Gossau zu einem Auffahrunfall mit drei beteiligten Fahrzeugen. Eine 34-jährige Lenkerin wurde leicht verletzt und musste ins Kantonsspital gebracht werden. Der Sachschaden wird auf rund 25\'000 Franken geschätzt. Die genaue Unfallursache wird untersucht.',
    explanation: 'Dies ist ein echter Text. Die typische Polizeimeldung mit spezifischen Details (Alter, Ort, Schadenshöhe), der sachliche Ton und die korrekte Verwendung von Schweizer Franken-Notation zeigen einen echten Behördenbericht.',
    category: 'Nachrichten',
    difficulty: 1
  },

  // ===== KI-GENERIERTE TEXTE =====
  {
    type: 'ai',
    content: 'Der Klimawandel stellt eine der grössten Herausforderungen unserer Zeit dar. Die steigenden Temperaturen führen zu dramatischen Veränderungen in unseren Ökosystemen. Von schmelzenden Gletschern bis hin zu häufigeren Extremwetterereignissen – die Auswirkungen sind vielfältig und weitreichend. Es ist von entscheidender Bedeutung, dass wir gemeinsam handeln, um unseren Planeten für zukünftige Generationen zu bewahren.',
    explanation: 'Dieser Text wurde von KI generiert. Typische Merkmale: aufzählende Struktur mit "Von ... bis hin zu", Phrasen wie "von entscheidender Bedeutung", allgemeine Aussagen ohne konkrete Daten oder Quellen, und ein auffällig ausgeglichener, belehrender Ton.',
    category: 'Nachrichten',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Die Digitalisierung revolutioniert unsere Gesellschaft in einem beispiellosen Tempo. Künstliche Intelligenz, maschinelles Lernen und das Internet der Dinge sind nur einige der Technologien, die unser tägliches Leben grundlegend verändern. In einer zunehmend vernetzten Welt ist es wichtiger denn je, digitale Kompetenzen zu entwickeln und sich an die neuen Gegebenheiten anzupassen.',
    explanation: 'Dieser Text ist KI-generiert. Die Aneinanderreihung von Buzzwords (KI, maschinelles Lernen, IoT), die allgemeinen Floskeln und das Fehlen konkreter Beispiele sind typische KI-Merkmale.',
    category: 'Technologie',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Die beeindruckende Vielfalt der Schweizer Küche spiegelt die kulturelle Reichhaltigkeit des Landes wider. Von den cremigen Fondues der Westschweiz über die herzhaften Rösti der Deutschschweiz bis hin zu den delikaten Risotti des Tessins – jede Region trägt ihre einzigartigen kulinarischen Traditionen bei. Diese gastronomische Diversität macht die Schweiz zu einem wahren Paradies für Feinschmecker.',
    explanation: 'Dieser Text ist KI-generiert. Die übertrieben positive, werbeartige Sprache ("wahres Paradies"), die "Von ... über ... bis hin zu"-Struktur und die gleichförmige Adjektiv-Substantiv-Kombinationen verraten die KI.',
    category: 'Kultur',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'In der heutigen schnelllebigen Welt ist mentale Gesundheit von grösster Bedeutung. Stressmanagement-Techniken, regelmässige Bewegung und eine ausgewogene Ernährung bilden die drei Säulen eines gesunden Lebensstils. Darüber hinaus spielen soziale Kontakte eine wichtige Rolle für unser psychisches Wohlbefinden. Es ist daher ratsam, aktiv Strategien zur Förderung der eigenen mentalen Gesundheit zu entwickeln.',
    explanation: 'Dieser Text ist KI-generiert. Die typische "drei Säulen"-Metapher, allgemeine Ratschläge ohne persönliche Note, und die belehrende Formulierung "Es ist daher ratsam" sind klare KI-Merkmale.',
    category: 'Gesundheit',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Liebe Lehrerinnen und Lehrer,\n\ndie Integration von künstlicher Intelligenz in den Bildungsbereich eröffnet faszinierende Möglichkeiten für den modernen Unterricht. Adaptive Lernplattformen können den individuellen Lernstand jedes Schülers analysieren und massgeschneiderte Übungen bereitstellen. Gleichzeitig ist es wichtig, einen verantwortungsvollen Umgang mit diesen Technologien zu fördern und die menschliche Komponente des Lehrens nicht zu vernachlässigen.',
    explanation: 'Dieser Text ist KI-generiert. Die übermässig ausgewogene Argumentation, die Phrasen "faszinierende Möglichkeiten" und "verantwortungsvollen Umgang", sowie das perfekte "einerseits-andererseits"-Muster sind typische KI-Merkmale.',
    category: 'Bildung',
    difficulty: 2
  },
  {
    type: 'ai',
    content: 'Die Alpen sind nicht nur ein beeindruckendes Naturwunder, sondern auch ein bedeutendes kulturelles Erbe der Schweiz. Die majestätischen Gipfel, kristallklaren Seen und saftigen Almwiesen bilden eine Landschaft von unvergleichlicher Schönheit. Jedes Jahr zieht diese atemberaubende Szenerie Millionen von Besuchern aus aller Welt an, die die Harmonie von Natur und Tradition erleben möchten.',
    explanation: 'Dieser Text ist KI-generiert. Die übertrieben poetische Sprache ("majestätische Gipfel", "kristallklare Seen", "atemberaubende Szenerie") und die allgemeinen Floskeln ohne konkrete Informationen sind typisch für KI.',
    category: 'Reisen',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Es war ein regnerischer Dienstagmorgen, als Elena die alte Bibliothek betrat. Der Geruch von altem Papier und Holzpolitur umhüllte sie wie eine warme Decke. Ihre Finger glitten über die ledergebundenen Buchrücken, bis sie den Band fand, nach dem sie gesucht hatte. Mit klopfendem Herzen schlug sie die erste Seite auf und wusste: Dieses Buch würde alles verändern.',
    explanation: 'Dieser Text ist KI-generiert. Die klischeehafte literarische Sprache, übertriebene Sinnesbeschreibungen ("wie eine warme Decke"), das dramatische Ende und die vorhersehbare Spannungsaufbaustruktur sind typisch für KI-Geschichten.',
    category: 'Literatur',
    difficulty: 2
  },
  {
    type: 'ai',
    content: 'Die effektive Nutzung von Solarenergie erfordert ein grundlegendes Verständnis der dahinterliegenden Technologie. Photovoltaik-Module wandeln Sonnenlicht direkt in elektrische Energie um, wobei der Wirkungsgrad moderner Anlagen stetig zunimmt. In Kombination mit intelligenten Speicherlösungen können Haushalte ihren Eigenverbrauch optimieren und somit einen wichtigen Beitrag zur Energiewende leisten.',
    explanation: 'Dieser Text ist KI-generiert. Die Fachwörter wie "Photovoltaik-Module" und "Wirkungsgrad" werden oberflächlich verwendet, ohne echte Expertise zu zeigen. Die optimistische Schlussfolgerung und die allgemeine Struktur verraten die KI.',
    category: 'Technologie',
    difficulty: 2
  },
  {
    type: 'ai',
    content: 'In einer Welt, die sich rasant verändert, ist Anpassungsfähigkeit zu einer Schlüsselkompetenz geworden. Unternehmen, die in der Lage sind, sich schnell an neue Marktbedingungen anzupassen, werden langfristig erfolgreich sein. Die Fähigkeit, Chancen in Herausforderungen zu erkennen und innovative Lösungen zu entwickeln, unterscheidet die Gewinner von den Verlierern in der modernen Geschäftswelt.',
    explanation: 'Dieser Text ist KI-generiert. Die Motivationsredner-Sprache, allgemeine Business-Floskeln ("Schlüsselkompetenz", "Gewinner von den Verlierern"), und das Fehlen konkreter Beispiele oder Daten sind klare KI-Merkmale.',
    category: 'Wirtschaft',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Das Geheimnis eines guten Espressos liegt in der perfekten Kombination aus frisch gemahlenen Bohnen, der richtigen Wassertemperatur und dem optimalen Druck. Die ideale Extraktionszeit beträgt 25-30 Sekunden, wodurch ein harmonisches Gleichgewicht zwischen Säure und Bitterkeit entsteht. Ein perfekter Espresso zeichnet sich durch eine goldbraune Crema und ein volles, rundes Aroma aus.',
    explanation: 'Dieser Text ist KI-generiert. Obwohl die technischen Details korrekt sind, verrät der übermässig systematische Aufbau, die "perfekt"-Wiederholungen und die lehrbuchhafte Struktur die KI-Herkunft.',
    category: 'Essen',
    difficulty: 2
  },
  {
    type: 'ai',
    content: 'Soziale Medien haben die Art und Weise, wie wir kommunizieren, grundlegend verändert. Sie bieten nicht nur eine Plattform für den Austausch von Ideen und Informationen, sondern schaffen auch neue Formen der sozialen Interaktion. Gleichzeitig bringen sie Herausforderungen mit sich, darunter Datenschutzbedenken, die Verbreitung von Fehlinformationen und die Auswirkungen auf die psychische Gesundheit, insbesondere bei jungen Menschen.',
    explanation: 'Dieser Text ist KI-generiert. Die ausgewogene Pro-Contra-Struktur, die aufzählenden Formulierungen und der übermässig sachliche Tonfall ohne persönliche Meinung sind klare Merkmale eines KI-Texts.',
    category: 'Technologie',
    difficulty: 1
  },
  {
    type: 'ai',
    content: 'Die Kunst des Gärtnerns erfordert Geduld, Hingabe und ein tiefes Verständnis für die Bedürfnisse der Pflanzen. Ein gut angelegter Garten ist mehr als nur ein Ort der Schönheit – er ist ein lebendiges Ökosystem, das sorgfältige Pflege und Aufmerksamkeit verdient. Von der Bodenaufbereitung über die Pflanzenwahl bis hin zur Bewässerung – jeder Schritt trägt zum Gesamterfolg bei.',
    explanation: 'Dieser Text ist KI-generiert. Die "mehr als nur"-Wendung, die "Von ... über ... bis hin zu"-Aufzählung und das allgemeine, belehrende Muster ohne praktische Details verraten die KI-Herkunft.',
    category: 'Natur',
    difficulty: 1
  }
];

// --- TIPPS & TRICKS ---
const TIPS_DATA = {
  images: {
    sections: [
      {
        title: 'Hände & Finger',
        content: 'KI hat nach wie vor Schwierigkeiten mit Händen. Zähle die Finger – oft sind es zu viele oder zu wenige. Fingergelenke können unnatürlich gebogen oder verschmolzen erscheinen.',
        difficulty: 'Leicht erkennbar'
      },
      {
        title: 'Augen & Gesichter',
        content: 'KI-Gesichter sind oft zu symmetrisch. Echte Gesichter haben leichte Asymmetrien. Achte auf die Iris – bei KI hat sie oft einen zu scharfen oder unnatürlichen Rand. Ohrringe oder Ohren sind manchmal nicht identisch.',
        difficulty: 'Mittel'
      },
      {
        title: 'Text im Bild',
        content: 'Text auf Schildern, Büchern oder Bildschirmen ist oft der grösste Schwachpunkt von KI. Die Buchstaben sehen aus wie echte Schrift, ergeben aber keinen Sinn oder enthalten Fehler.',
        difficulty: 'Leicht erkennbar'
      },
      {
        title: 'Hintergrund & Details',
        content: 'Schau dir den Hintergrund genau an: verschwimmen Objektränder unnatürlich? Gibt es wiederholende Muster? Sind Personen im Hintergrund verzerrt oder haben sie seltsame Proportionen?',
        difficulty: 'Mittel'
      },
      {
        title: 'Texturen & Materialien',
        content: 'KI-Bilder haben oft eine zu glatte, makellose Textur. Echte Fotos zeigen natürliche Unregelmässigkeiten in Haut, Stoff, Holz oder anderen Materialien.',
        difficulty: 'Schwer'
      },
      {
        title: 'Beleuchtung & Schatten',
        content: 'Achte auf die Lichtquelle: Kommen alle Schatten aus der gleichen Richtung? KI verwechselt manchmal Schattenwürfe oder erzeugt unmögliche Lichtverhältnisse.',
        difficulty: 'Schwer'
      }
    ]
  },
  texts: {
    sections: [
      {
        title: 'Zu perfekter Aufbau',
        content: 'KI-Texte folgen oft einer auffällig symmetrischen Struktur. Achte auf "Von ... über ... bis hin zu"-Aufzählungen, perfekte Pro-Contra-Abwägungen und lehrbuchhafte Absätze.',
        difficulty: 'Leicht erkennbar'
      },
      {
        title: 'Allgemeine Floskeln',
        content: 'Phrasen wie "in der heutigen schnelllebigen Welt", "von entscheidender Bedeutung" oder "Es ist wichtig zu beachten" sind typische KI-Formulierungen. Echte Autoren schreiben konkreter.',
        difficulty: 'Leicht erkennbar'
      },
      {
        title: 'Fehlende Details',
        content: 'KI-Texte vermeiden oft konkrete Namen, Zahlen, Daten oder Quellenangaben. Wenn ein Text sehr allgemein bleibt und keine spezifischen Informationen enthält, könnte er KI-generiert sein.',
        difficulty: 'Mittel'
      },
      {
        title: 'Emotionale Flachheit',
        content: 'KI-Texte wirken oft emotional distanziert. Echte persönliche Texte enthalten Unsicherheiten, Widersprüche und echte Emotionen – KI schreibt zu "ausgewogen" und "sachlich".',
        difficulty: 'Mittel'
      },
      {
        title: 'Übertrieben positiv',
        content: 'KI neigt dazu, alles positiv darzustellen oder perfekt auszubalancieren. Wenn ein Text zu optimistisch klingt oder jedes Argument sofort entkräftet wird, könnte KI dahinterstecken.',
        difficulty: 'Schwer'
      },
      {
        title: 'Dialekt & Slang',
        content: 'Schweizerdeutsch, Umgangssprache und jugendlicher Slang sind für KI schwer nachzuahmen. Texte mit authentischem Dialekt oder natürlichen Tippfehlern sind meist von Menschen.',
        difficulty: 'Leicht erkennbar'
      }
    ]
  },
  general: {
    sections: [
      {
        title: 'Quellenprüfung',
        content: 'Überprüfe die Quelle des Inhalts. Seriöse Medien wie SRF, NZZ oder 20 Minuten haben Redaktionsprozesse. Unbekannte Accounts oder anonyme Beiträge sind verdächtiger.',
        difficulty: 'Grundlegend'
      },
      {
        title: 'Kontext beachten',
        content: 'Frage dich: Warum wurde dieser Inhalt erstellt? Wer profitiert davon? KI-generierte Inhalte werden oft für Desinformation, Werbung oder Manipulation eingesetzt.',
        difficulty: 'Grundlegend'
      },
      {
        title: 'Reverse Image Search',
        content: 'Nutze die Google-Bildersuche oder TinEye, um zu prüfen, ob ein Bild bereits existiert. Bei KI-Bildern findest du kein Original, während echte Fotos oft andere Versionen haben.',
        difficulty: 'Praktisch'
      },
      {
        title: 'KI-Detektoren nutzen',
        content: 'Tools wie AI or Not, Hive Moderation oder GPTZero können helfen, KI-Inhalte zu erkennen. Sie sind aber nicht fehlerfrei – nutze sie als zusätzliche Hilfe, nicht als Beweis.',
        difficulty: 'Praktisch'
      },
      {
        title: 'Kritisch hinterfragen',
        content: 'Die wichtigste Kompetenz ist kritisches Denken. Glaube nicht alles, was du siehst oder liest. Frage dich bei jedem Inhalt: Könnte das gefälscht sein? Was spricht dafür, was dagegen?',
        difficulty: 'Grundlegend'
      },
      {
        title: 'Aktualität prüfen',
        content: 'Achte auf Zeitangaben und aktuelle Bezüge. KI-Texte können veraltete Informationen enthalten oder zeitlose Aussagen machen, um über fehlende Aktualität hinwegzutäuschen.',
        difficulty: 'Mittel'
      }
    ]
  }
};

// --- ERGEBNIS-STUFEN ---
const RESULT_LEVELS = [
  {
    minPercent: 90,
    title: 'KI-Profi',
    description: 'Hervorragend! Du erkennst KI-Inhalte sehr zuverlässig und bist bestens gegen Manipulation geschützt.',
    advice: 'Teile dein Wissen mit anderen und hilf Mitschülerinnen und Mitschülern, KI-Inhalte zu erkennen.',
    color: '#4caf50'
  },
  {
    minPercent: 70,
    title: 'Guter Blick',
    description: 'Gut gemacht! Du erkennst die meisten KI-Inhalte. Mit etwas Übung wirst du noch besser.',
    advice: 'Schau dir die Tipps-Sektion an, um dein Wissen weiter zu vertiefen.',
    color: '#96B967'
  },
  {
    minPercent: 50,
    title: 'Auf dem Weg',
    description: 'Du hast ein Grundverständnis, aber es gibt noch Verbesserungspotenzial.',
    advice: 'Übe regelmässig und achte besonders auf die typischen KI-Merkmale in den Tipps.',
    color: '#ff9800'
  },
  {
    minPercent: 0,
    title: 'Übung nötig',
    description: 'Da ist noch Luft nach oben. Keine Sorge – mit den richtigen Tipps wirst du besser!',
    advice: 'Lies dir die Tipps & Tricks durch und versuche das Quiz danach nochmal.',
    color: '#E01272'
  }
];

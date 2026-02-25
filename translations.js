// Système de traduction multilingue
const translations = {
    fr: {
        // Navigation
        nav_accueil: "Accueil",
        nav_portfolio: "Portfolio",
        nav_cv: "Curriculum Vitae",
        nav_cv_arrow: "▼",
        nav_experiences: "Expériences",
        nav_formations: "Formations",
        nav_competences: "Compétences",
        
        // Page Accueil
        welcome_title: "Djouadi Pablo",
        welcome_subtitle: "Bienvenue sur mon Portfolio",
        about_title: "À propos de moi",
        about_text: `Ingénieur géomaticien en formation dans le Master SIGMA, co-accrédité par l'INP ENSAT et 
                        l'Université Toulouse Jean Jaurès. Passionné par la cartographie et la géomatique, mon 
                        ambition est d'exercer cette discipline comme profession à temps plein.
                        <br><br>

                        Mon parcours reflète une évolution progressive vers la géomatique : après des études en droit à l'Université Bordeaux Montesquieu, j'ai trouvé ma véritable vocation dans la géographie et l'analyse spatiale à travers la licence GAER à Bordeaux Montaigne. Aujourd'hui, je me spécialise dans le traitement et la valorisation des données géospatiales.

                        <br><br>
                        Pour en savoir plus explorez mon site!`,
        globe_title: "Mes villes, mon histoire",
        
        // Contact
        contact_title: "Me Contacter",
        contact_accordion_icon: "▼",
        contact_coords_title: "Coordonnées",
        contact_coords_email: "Email:",
        contact_coords_phone: "Téléphone:",
        contact_coords_linkedin: "LinkedIn:",
        contact_form_title: "Me contacter directement",
        contact_form_name: "Nom complet *",
        contact_form_email: "Email *",
        contact_form_subject: "Objet *",
        contact_form_message: "Message *",
        contact_form_submit: "Envoyer le message",
        
        // Page Portfolio
        portfolio_title: "Portfolio",
        portfolio_research_title: "Projets de Recherche",
        portfolio_academic_title: "Rendus Académiques",
        
        // Niveaux d'étude
        academic_level_master1: "Niveau d'étude : Master 1",
        academic_level_license3: "Niveau d'étude : Licence 3",
        academic_level_license2: "Niveau d'étude : Licence 2",
        
        // Projets de Recherche
        project_geopoint_title: "Géopoint : 50 ans de géographie",
        project_geopoint_text: `À l'occasion de l'arrivée du colloque bisannuel Géopoint à Bordeaux en décembre 2026, j'ai été chargé de réaliser l'analyse cartographique et statistique de cet événement académique. Pour mener à bien ce projet, j'ai constitué une base de données exhaustive regroupant l'ensemble des auteurs ayant participé aux éditions précédentes du Géopoint, leurs articles publiés ainsi que leurs universités d'appartenance.
                               
                               <br><br>
                               
                               Cette base de données m'a permis de conduire des analyses approfondies à travers plusieurs approches complémentaires : cartographies d'évolution spatiale, cartographies animées et analyses statistiques avancées sur R. J'ai notamment mobilisé des bibliothèques comme ggplot2 pour la visualisation de données et visNetwork pour la création de graphiques de réseaux animés. Les analyses thématiques sur les mots-clés ont également permis d'identifier les évolutions conceptuelles et méthodologiques du colloque au fil des années.
                                
                               <br><br>
                               
                               Ce travail aboutira à une publication scientifique et à ma participation au colloque de 2026, où je présenterai la restitution de cette étude sur l'évolution du Géopoint.`,
        
        project_spherographia_title: "Sphérographia",
        project_spherographia_text: `Dans le cadre de mon stage au CNRS UMR PASSAGES 5319, j'ai consacré une partie de mon temps au projet Sphérographia, porté par Matthieu Noucher, chercheur spécialisé dans la géomatique et la géographie numérique. Ce projet ambitieux vise à constituer un corpus exhaustif et analysé des globes virtuels, outils de représentation géographique de plus en plus présents dans notre quotidien numérique.
                               
                               <br><br>
                               
                               Ma contribution s'est articulée autour de deux axes principaux : l'enrichissement du catalogue des globes virtuels et l'alimentation de la galerie du projet. Ce travail de saisie et de documentation a nécessité une méthodologie rigoureuse incluant un prétraitement approfondi de chaque globe analysé. J'ai ainsi procédé à une caractérisation thématique détaillée, identifiant les domaines d'application de chaque globe (géographie physique, géopolitique, tourisme, urbanisme, etc.).
                                
                               <br><br>
                                
                               L'analyse colorimétrique a également constitué un volet essentiel de ce travail, permettant d'identifier les choix sémiologiques et les conventions cartographiques adoptées par les différents concepteurs de globes virtuels. J'ai également documenté les fonctionnalités techniques de chaque interface (navigation 3D, superposition de couches thématiques, accès aux données sous-jacentes), les sources de données mobilisées, ainsi que les aspects d'ergonomie et d'accessibilité.
                                
                               <br><br>
                                
                               Cette expérience m'a permis de développer une expertise dans l'analyse critique des outils de géovisualisation et de contribuer à un projet de recherche innovant à l'intersection de la géographie, de l'informatique et de la sémiologie graphique.`,
        
        project_mimizan_title: "Étude préalable de l'érosion côtière à Mimizan Plage",
        project_mimizan_text: `Lors de mon stage au CNRS, j'ai collaboré avec Solnage Pupier sur une étude préalable portant sur l'érosion côtière à Mimizan Plage, dans le cadre d'un projet de recherche plus large sur l'impact de la houle infragravitaire sur le littoral atlantique français. 
                                
                               <br><br>
                                
                               Cette mission s'est articulée autour de deux journées de terrain intensives à Mimizan, durant lesquelles j'ai mené des entretiens avec différents acteurs clés du territoire : fonctionnaires municipaux responsables de l'aménagement du littoral, érudits locaux détenant la mémoire historique de la région, ainsi que Claire Steimer (Conservateur du patrimoine à la Région Nouvelle-Aquitaine). Ces échanges pluridisciplinaires m'ont permis de reconstituer l'historique détaillé de l'évolution du cours d'eau de Mimizan, un système aujourd'hui fortement anthropisé et dont les transformations successives ont considérablement modifié la dynamique côtière locale. Mimizan ayant été sélectionné comme site pilote pour valider les outils méthodologiques du projet, ce travail préparatoire était essentiel pour comprendre les interactions entre aménagements humains et processus naturels d'érosion. 
                                
                               <br><br>
                                
                               À l'issue de cette étude, j'ai eu l'opportunité de présenter une restitution des résultats de nos recherches devant l'ensemble des fonctionnaires locaux et des partenaires institutionnels du projet, permettant ainsi de partager nos conclusions et de contribuer à la réflexion collective sur la gestion du littoral.`,
        
        // Rendus Académiques
        academic_icu_title: "Cartographie de la vulnérabilité urbaine face aux ICU dans le Tarn",
        academic_icu_text: `Ce projet a été réalisé dans le cadre d'une commande pour l'entreprise BAWSALA, représentée par Madame Hanan Jemmal, enseignante tutrice du projet. Développé collectivement par Maria Achour, Lucie Delaperche, Jérémie Nougier et moi-même, ce travail de Master 1 SIGMA vise à identifier et cartographier les zones urbaines du département du Tarn les plus exposées aux îlots de chaleur urbains, tout en analysant la vulnérabilité des populations sensibles.

                               <br><br>
                               
                               L'enjeu de cette étude est double : d'une part, modéliser l'intensité thermique des zones urbanisées grâce à des données satellitaires Landsat 8-9 et des variables morphologiques (densité bâtie, couverture végétale, surfaces en eau) ; d'autre part, croiser ces données avec des indicateurs démographiques INSEE pour identifier les populations les plus fragiles face aux canicules (jeunes enfants, personnes âgées, densité de population).
                               
                               <br><br>
                               
                               Ma contribution au projet s'est concentrée sur deux axes techniques essentiels : En duo, nous avons défini l'architecture en étoile de la base de données, établi les tables d'association entre les différentes couches géographiques et amélioré les performances des requêtes spatiales via la création d'index. Parallèlement, j'ai pris en charge l'intégralité du développement web : de la génération initiale avec QGIS2Web à la personnalisation avancée du code HTML/CSS/JavaScript, en passant par l'intégration de la bibliothèque Leaflet.js, la création de légendes dynamiques, et l'implémentation des fonctionnalités interactives (filtres communaux, accordéon de couches, mode plein écran).
                               
                               <br><br>
                               
                               Le résultat final se présente sous la forme d'un site web cartographique permettant d'explorer visuellement les données thermiques, démographiques et les zones à risque pour les communes d'Albi, Castres et Puylaurens. Cet outil d'aide à la décision offre aux élus et acteurs territoriaux une vision claire des priorités d'intervention en matière d'adaptation climatique.

                               <br><br>

                               Venez explorer l'application de webmapping interactive directement ci-dessous et découvrir les résultats de cette étude approfondie sur les îlots de chaleur urbains du Tarn.`,
        
        academic_indre_title: "Cartographie des infrastructures hydrauliques",
        academic_indre_text: `Cette cartographie des infrastructures hydrauliques et de l'hydrographie du Cœur de Brenne en Indre, réalisée dans le cadre d'un exercice pédagogique de cartographie technique visant à traiter un jeu de données spécifique issu de la BD TOPO de l'IGN.                                 
                               
                               <br><br>
                               
                               Le travail consiste en une représentation synthétique du réseau hydrographique et des équipements de gestion de l'eau sur le territoire de la Communauté de Communes du Cœur de Brenne, mettant en évidence quatre bassins versants principaux (Indre, Claise, Creuse et Suin) à travers une palette de couleurs différenciée. La carte intègre l'ensemble des composantes du système hydraulique incluant les tronçons et surfaces hydrographiques, les nœuds de confluence, ainsi que les infrastructures de gestion (barrages, réservoirs, sources et équipements divers), tout en situant ces éléments dans leur contexte territorial par la délimitation des communes. La légende structurée en trois thématiques (organisation territoriale, réseau hydrographique et éléments hydrographiques) permet une lecture hiérarchisée de l'information, démontrant la capacité à produire une cartographie technique professionnelle répondant aux standards de la géomatique appliquée à la gestion de la ressource en eau.`,
        
        academic_ardeche_title: "Dynamique démographique et chômage de l'Ardèche",
        academic_ardeche_text: `Ce travail de cartographie thématique réalisé dans le cadre du Master 1 SIGMA vise à mettre en évidence les dynamiques démographiques et économiques du département de l'Ardèche en 2021 par une représentation bivariée croisant deux variables statistiques. La carte combine la population communale en valeur absolue, visualisée par des cercles proportionnels en surface, et le taux de chômage en valeur relative, représenté par une discrétisation colorimétrique en cinq classes selon la méthode de Jenks. 
                               
                               <br><br>
                               
                               Les données proviennent des bases de l'INSEE (recensement 2021 et base historique de population) et le fond de carte de l'IGN via Admin-express. La méthodologie a nécessité un travail de prétraitement des données dans Excel pour calculer le taux de chômage par commune, puis une intégration dans QGIS via une jointure attributaire basée sur le code communal. L'analyse de l'histogramme a révélé une distribution non normale avec une concentration majoritaire des valeurs entre 10 et 20% de taux de chômage, justifiant l'utilisation de la méthode de Jenks qui respecte les ruptures naturelles de densité. 
                               
                               <br><br>
                               
                               La mise en page cartographique a été finalisée dans Affinity Designer après export depuis QGIS, permettant d'affiner la légende et d'appliquer des effets graphiques, notamment l'ajout d'un fond de carte gris ESRI légèrement flouté pour améliorer l'esthétique générale et faire ressortir les couleurs vives des cercles proportionnels.`,
        
        academic_cadaujac_title: "Cartographie de l'occupation des sols à Cadaujac : Méthodologie mixte raster-vecteur",
        academic_cadaujac_text: `Cette étude vise à produire une cartographie haute résolution de l'occupation des sols de la commune de Cadaujac (Gironde) en mobilisant une approche méthodologique hybride combinant données raster et vectorielles. Les bases de données mobilisées sont l'OCS CesBio (raster, résolution 10m×10m) pour l'occupation du sol et la BD Topo IGN (vectorielle) pour les tronçons de route. 
                                
                               <br><br>
                                
                               Le travail repose sur la polygonisation de la couche raster OCS CesBio, suivie d'une soustraction des surfaces routières calculées à partir de la BD Topo pour corriger les erreurs de classification automatique. Les largeurs de routes non renseignées ont été estimées à 1,5 mètre de rayon par hypothèse. La superficie totale calculée de Cadaujac est de 15,36 km², proche de la valeur officielle INSEE (15,3 km²). L'occupation du sol révèle une dominance de trois catégories : les prairies (4,45 km²), l'urbain diffus (3,59 km²) et les forêts de feuillus (2,88 km²), caractérisant une commune à l'équilibre entre urbanisation résidentielle et espaces naturels. 
                                
                               <br><br>
                                
                               L'étude met en évidence les difficultés inhérentes aux données raster pour représenter les continuités linéaires (routes, infrastructures). La classification automatique confond fréquemment routes, zones industrielles et urbain diffus en raison de signatures spectrales similaires. De plus, la résolution pixellaire (10m×10m) attribue l'occupation majoritaire au pixel, masquant ainsi les occupations minoritaires présentes sur les bordures de routes (haies, végétation). 
                                
                               <br><br>
                                
                               Cette méthodologie démontre l'intérêt d'une approche multi-sources pour affiner la cartographie d'occupation des sols tout en soulignant les limites techniques des classifications automatiques raster pour les éléments linéaires et les zones à occupation mixte.`,
        
        academic_gironde_title: "Analyse comparative des BDD d'occupation des sols en Gironde",
        academic_gironde_text: `Cette étude compare deux bases de données d'occupation des sols en Gironde : PIGMA (régionale, résolution 1 hectare) et Corine Land Cover (européenne, résolution 25 hectares). 
                                
                               <br><br>
                                
                               L'analyse porte sur le tissu urbain discontinu, les vignobles et les forêts de feuillus. Les résultats révèlent des écarts significatifs : CLC affiche des surfaces supérieures pour l'urbain (67 967 ha contre 52 018) et les vignobles (156 076 ha contre 130 595), tandis que PIGMA détecte plus du double de forêts de feuillus (125 053 ha contre 60 170). Ces divergences s'expliquent par la différence de résolution spatiale. La généralisation importante de CLC (25 hectares minimum) englobe davantage de territoires adjacents, surestimant l'urbain et les vignobles. À l'inverse, PIGMA capture les petites forêts de moins de 25 hectares que CLC ne peut isoler. 
                                
                               <br><br>
                                
                               L'étude de cas sur Ludon-Médoc illustre ces différences : CLC produit une carte homogène et lisible, tandis que PIGMA révèle un découpage précis et fragmenté. Cette analyse démontre que le choix de la base de données doit correspondre à l'échelle d'étude : CLC pour les analyses régionales ou européennes, PIGMA pour les études locales nécessitant une haute précision.`,
        
        academic_moselle_title: "Analyse spatiale de la dépendance économique en Moselle",
        academic_moselle_text: `Cette étude cartographique analyse la répartition des populations inactives (moins de 14 ans et plus de 60 ans) dans le département de la Moselle à partir des données du recensement INSEE 2021. 
                                
                               <br><br>
                                
                               Trois types de représentations ont été mobilisés : cartes choroplèthes de ratio, carte du taux de dépendance économique et carte en quadrant. Les résultats révèlent une forte polarisation territoriale selon un axe ouest-est. La population de moins de 14 ans se concentre dans un axe vertical nord-ouest, autour des grandes agglomérations de Metz, Thionville et Forbach, zones attractives pour les actifs. Le nord-ouest bénéficie également de la proximité luxembourgeoise, générant d'importantes migrations pendulaires transfrontalières. À l'inverse, la population de plus de 60 ans se concentre dans l'est et le sud-est du département, zones rurales éloignées des pôles urbains et proches du Parc régional des Vosges et de l'Allemagne. La carte du taux de dépendance économique confirme cette dichotomie : l'ouest présente un taux faible (territoire dynamique) grâce à la concentration d'actifs, tandis que l'est affiche un taux élevé, signe d'un territoire moins dynamique économiquement. 
                                
                               <br><br>
                                
                               La carte en quadrant synthétise ces observations en révélant que l'axe nord-ouest concentre les communes avec des surreprésentations des deux classes d'âge par rapport à la moyenne départementale. Cette étude conclut que la Moselle est un département polarisé par l'agglomération messine et les villes transfrontalières, avec une répartition inégale des populations inactives selon une fracture ouest-est marquée.`,
        
        // Page Expériences
        experiences_title: "Mes Expériences Professionnelles",
        
        // Expériences
        exp_cnrs_title: "Opérateur SIG - CNRS UMR PASSAGES 5319 – Pôle ARD",
        exp_cnrs_date: "Juin 2025 - Août 2025",
        exp_cnrs_text: `J'ai effectué un stage d'Opérateur SIG au sein du CNRS UMR PASSAGES 5319, spécifiquement au pôle ARD (Analyse et Représentation des Données). Sous la supervision d'experts tels qu'Olivier Pissoat (Cartographe) et Grégoire Lecampion (Statisticien), j'ai contribué à plusieurs projets de recherche. Mes missions principales incluaient une étude statistique approfondie sur R pour le colloque de géographie Géopoint, aboutissant à des rapports cartographiques et statistiques. J'ai également participé au projet Sphérographia du CNRS, axé sur l'étude et l'analyse des globes virtuels. Enfin, j'ai collaboré avec Solange Pupiers sur une étude de terrain concernant l'impact et l'analyse spatiale de l'érosion côtière à Mimizan Plage. <br><br> Projet Sphérographia : <a href="https://spherographia.cnrs.fr/?Projet" target="_blank">Découvrir le projet</a>`,
        exp_anaa1_title: "Accompagnement de délégations européennes - ANAA",
        exp_anaa1_date: "Juin 2024",
        exp_anaa1_text: `Dans le cadre du projet Erasmus consacré à la transition agroécologique en viticulture, j'ai eu l'opportunité d'accompagner plusieurs délégations européennes. Cette expérience m'a permis de favoriser les échanges interculturels, de valoriser les pratiques durables dans le secteur viticole et de contribuer à la diffusion de connaissances sur les enjeux de la transition écologique.`,
        
        exp_anaa2_title: "Soutien logistique - ANAA",
        exp_anaa2_date: "Mai 2021",
        exp_anaa2_text: `Lors de l'édition 2021 de Bordeaux Fête le Vin, j'ai apporté un appui logistique au Marché local de producteurs. Cette mission m'a permis de contribuer à la mise en valeur des produits du terroir et de soutenir l'organisation d'un événement d'envergure régionale.`,
        
        exp_acto_title: "Accompagnement de projets - Acto (Actions et Territoires – Lisbonne)",
        exp_acto_date: "2016 – 2017",
        exp_acto_text: `Entre 2016 et 2017, j'ai participé de manière récurrente à l'accompagnement de projets de coopération européenne et de délégations internationales. J'ai également assuré des missions de traduction entre le français et le portugais, facilitant la communication entre les acteurs européens et renforçant le bon déroulement des échanges.`,
        
        exp_student_title: "Emplois étudiants (France - Portugal)",
        exp_student_date: "2017 – 2025",
        exp_student_text: "",
        exp_student_objective: "Objectif :",
        exp_student_tasks: "Missions :",
        exp_student_job1: "Employé libre-service – U Express, Bordeaux",
        exp_student_job1_objective: "financer les études tout en développant autonomie, rigueur et sens du service.",
        exp_student_job1_tasks: "mise en rayon, gestion des stocks, accueil et orientation des clients, respect des procédures et des délais.",
        exp_student_job2: "Employé polyvalent – Carrefour City, Bordeaux",
        exp_student_job2_objective: "acquérir une expérience polyvalente en grande distribution et renforcer la relation client.",
        exp_student_job2_tasks: "mise en rayon, tenue de caisse, inventaire, organisation de l'espace de vente.",
        exp_student_job3: "Employé saisonnier – La Nouvelle Librairie Française, Lisbonne",
        exp_student_job3_objective: "participer à la gestion quotidienne d'un commerce culturel et développer un sens aigu de l'accueil client.",
        exp_student_job3_tasks: "accueil et conseil clientèle, caisse, gestion des commandes, organisation et fonctionnement du magasin.",
        exp_student_job4: "Manœuvre sur chantier – Société FBTECH (Carottage et démolition)",
        exp_student_job4_objective: "acquérir une expérience technique dans un environnement exigeant et physique.",
        exp_student_job4_tasks: "assistance sur chantier, carottage, démolition, manutention.",
        exp_student_job5: "Manœuvre sur chantier – Société Tangente Proeza",
        exp_student_job5_objective: "découvrir le milieu du bâtiment et développer des compétences de travail en équipe sur chantier.",
        exp_student_job5_tasks: "nettoyage de chantier, aide aux différents corps de métier, respect des consignes de sécurité.",
        exp_student_job6: "Employé polyvalent – Intermarché",
        exp_student_job6_objective: "première expérience professionnelle, apprentissage des bases du travail en commerce.",
        exp_student_job6_tasks: "mise en rayon, caisse, inventaire.",
        
        // Page Formations
        formations_title: "Mes Formations",
        form_master_title: "Master 1 - SIGMA - INP ENSAT, Université Jean Jaurès",
        form_master_date: "2025 - 2026",
        form_master_text: `Actuellement en première année du Master SIGMA (Systèmes d'Information Géographique et Métiers de l'Aménagement), j'acquiers des compétences solides dans le traitement, l'analyse et la valorisation des données spatiales. Ma formation me permet de développer une expertise technique en ingénierie de bases de données spatiales, télédétection, algorithmique et programmation (SQL, HTML, Python). J'approfondis également mes connaissances en programmation SIG avancée, en visualisation de données et en webmapping, dans une perspective d'application pluridisciplinaire.`,
        
        form_gaer_title: "Licence 3 GAER - Université Bordeaux Montaigne",
        form_gaer_date: "2022 - 2025",
        form_gaer_text: `La formation Géographie, Aménagement, Environnement et Ressources m'a permis d'acquérir une compréhension approfondie des dynamiques territoriales et environnementales, en combinant une approche théorique rigoureuse à des méthodes d'analyse appliquée. J'y ai développé des compétences solides en géographie numérique, en cartographie et en géomatique (SIG), ainsi qu'une maîtrise des analyses statistiques bi et multivariées pour le traitement et l'interprétation des données spatiales. La formation m'a également permis d'aborder la géographie sociale et physique, les diagnostics de risques environnementaux, et la gestion de données quantitatives et qualitatives, dans une logique pluridisciplinaire liant aménagement du territoire, observation des milieux et appui à la décision.`,
        
        form_droit_title: "Licence 2 Droit - Université Bordeaux Montesquieu",
        form_droit_date: "2019 - 2022",
        form_droit_text: `Cette formation m'a permis d'acquérir une solide culture juridique et une compréhension approfondie du fonctionnement politique, économique et administratif de l'État. Elle m'a également apporté une rigueur méthodologique essentielle, tant dans la recherche et l'analyse de textes juridiques que dans la rédaction argumentée. J'y ai développé des compétences en organisation du travail, en gestion du temps et en esprit de synthèse, des qualités transférables à la conduite de projets et à la gestion de données dans des contextes administratifs et territoriaux complexes.`,
        
        form_bac_title: "Baccalauréat économique et social - Lycée Français Charles Lepierre - Lisbonne",
        form_bac_date: "2010 - 2019",
        form_bac_text: `Mention Bien. Spécialité science politique, option DNL. Ayant suivi ma scolarité au sein du lycée et du collège français de Lisbonne, j'ai évolué dans un environnement multiculturel et plurilingue. Cette expérience m'a permis de maîtriser couramment le français, le portugais, l'espagnol et l'anglais, et de développer une forte capacité d'adaptation ainsi qu'une ouverture internationale dans ma manière de communiquer et de travailler.`,
        
        // Page Compétences
        competences_title: "Mes Compétences",
        comp_lang_title: "Compétences linguistiques",
        comp_lang_globe_title: "Zones linguistiques maîtrisées",
        comp_lang_fr: "Français",
        comp_lang_fr_level: "Langue maternelle",
        comp_lang_pt: "Portugais",
        comp_lang_pt_level: "Langue maternelle",
        comp_lang_en: "Anglais",
        comp_lang_en_level: "Bilingue",
        comp_lang_es: "Espagnol",
        comp_lang_es_level: "Courant",
        comp_tech_title: "Compétences techniques",
        comp_human_title: "Compétences humaines",
        
        // Compétences techniques
        skill_html_css: "HTML/CSS",
        skill_sql: "SQL",
        skill_python: "Python",
        skill_qgis: "QGIS",
        skill_sgbd: "SGBD",
        skill_pgadmin: "PgAdmin4",
        skill_magrit: "Magrit",
        skill_webmapping: "Webmapping",
        skill_arcgis: "ArcGIS Online/Pro",
        skill_illustrator: "Adobe Illustrator",
        skill_affinity: "Affinity",
        skill_rstudio: "RStudio",
        skill_remote: "Télédétection",
        skill_otb: "OTB",
        skill_stats: "Analyse statistique",
        skill_diagnostics: "Diagnostics de risques",
        
        // Compétences humaines
        skill_polyvalent: "Polyvalent",
        skill_autonome: "Autonome",
        skill_organise: "Organisé",
        skill_equipe: "Travail en équipe",
        skill_adaptation: "Adaptation",
        skill_esprit: "Esprit d'équipe",
        skill_rigueur: "Rigueur",
        skill_apprendre: "Volonté d'apprendre",
        
        // Boutons et liens
        button_pdf: "📄 Consulter le PDF",
        button_webmapping: "🌐 Accéder au webmapping",
        link_discover_project: "Découvrir le projet",
        
        // Lightbox PDF
        pdf_zoom_out: "− Zoom",
        pdf_zoom_in: "+ Zoom",
        pdf_reset: "↻ Réinitialiser",
        pdf_page: "Page",
        pdf_prev: "◀ Précédent",
        pdf_next: "Suivant ▶",
        
        // Footer
        footer_text: "Tous droits réservés"
    },
    
    en: {
        // Navigation
        nav_accueil: "Home",
        nav_portfolio: "Portfolio",
        nav_cv: "Resume",
        nav_cv_arrow: "▼",
        nav_experiences: "Experience",
        nav_formations: "Education",
        nav_competences: "Skills",
        
        // Home Page
        welcome_title: "Djouadi Pablo",
        welcome_subtitle: "Welcome to my Portfolio",
        about_title: "About me",
        about_text: `Geomatics engineer in training at SIGMA Master's program, co-accredited by INP ENSAT and Université Toulouse Jean Jaurès. Passionate about cartography and geomatics, my ambition is to practice this discipline as a full-time profession.
                        <br><br>
                        My path reflects a progressive evolution towards geomatics: after studying law at Université Bordeaux Montesquieu, I found my true calling in geography and spatial analysis through the GAER degree at Bordeaux Montaigne. Today, I specialize in processing and valorizing geospatial data.
                        <br><br>
                        To learn more, explore my website!`,
        globe_title: "My cities, my story",
        
        // Contact
        contact_title: "Contact Me",
        contact_accordion_icon: "▼",
        contact_coords_title: "Contact Information",
        contact_coords_email: "Email:",
        contact_coords_phone: "Phone:",
        contact_coords_linkedin: "LinkedIn:",
        contact_form_title: "Contact me directly",
        contact_form_name: "Full name *",
        contact_form_email: "Email *",
        contact_form_subject: "Subject *",
        contact_form_message: "Message *",
        contact_form_submit: "Send message",
        
        // Portfolio Page
        portfolio_title: "Portfolio",
        portfolio_research_title: "Research Projects",
        portfolio_academic_title: "Academic Projects",
        
        // Academic levels
        academic_level_master1: "Study level: Master 1",
        academic_level_license3: "Study level: Bachelor 3",
        academic_level_license2: "Study level: Bachelor 2",
        
        // Research Projects
        project_geopoint_title: "Geopoint: 50 years of geography",
        project_geopoint_text: `On the occasion of the biannual Geopoint conference coming to Bordeaux in December 2026, I was tasked with conducting the cartographic and statistical analysis of this academic event. To complete this project, I built a comprehensive database including all authors who participated in previous Geopoint editions, their published articles, and their affiliated universities.
                               <br><br>
                               This database enabled me to conduct in-depth analyses through several complementary approaches: spatial evolution cartography, animated maps, and advanced statistical analyses in R. I particularly utilized libraries like ggplot2 for data visualization and visNetwork for creating animated network graphs. Thematic analyses on keywords also helped identify the conceptual and methodological evolutions of the conference over the years.
                               <br><br>
                               This work will result in a scientific publication and my participation in the 2026 conference, where I will present the findings of this study on Geopoint's evolution.`,
        
        project_spherographia_title: "Spherographia",
        project_spherographia_text: `During my internship at CNRS UMR PASSAGES 5319, I dedicated part of my time to the Spherographia project, led by Matthieu Noucher, a researcher specialized in geomatics and digital geography. This ambitious project aims to build an exhaustive and analyzed corpus of virtual globes, geographical representation tools increasingly present in our digital daily life.
                               <br><br>
                               My contribution was structured around two main axes: enriching the virtual globes catalog and feeding the project's gallery. This data entry and documentation work required a rigorous methodology including thorough preprocessing of each analyzed globe. I conducted detailed thematic characterization, identifying the application domains of each globe (physical geography, geopolitics, tourism, urban planning, etc.).
                               <br><br>
                               Colorimetric analysis also constituted an essential part of this work, allowing identification of semiological choices and cartographic conventions adopted by different virtual globe designers. I also documented the technical functionalities of each interface (3D navigation, thematic layer overlay, access to underlying data), the data sources used, as well as ergonomics and accessibility aspects.
                               <br><br>
                               This experience allowed me to develop expertise in critical analysis of geovisualization tools and contribute to an innovative research project at the intersection of geography, computer science, and graphic semiology.`,
        
        project_mimizan_title: "Preliminary study of coastal erosion at Mimizan Beach",
        project_mimizan_text: `During my internship at CNRS, I collaborated with Solnage Pupier on a preliminary study on coastal erosion at Mimizan Beach, as part of a broader research project on the impact of infragravity waves on the French Atlantic coast.
                               <br><br>
                               This mission was structured around two intensive field days in Mimizan, during which I conducted interviews with various key territorial actors: municipal officials responsible for coastal planning, local scholars holding the historical memory of the region, and Claire Steimer (Heritage Curator at the Nouvelle-Aquitaine Region). These multidisciplinary exchanges allowed me to reconstruct the detailed history of the evolution of the Mimizan watercourse, a system now heavily anthropized and whose successive transformations have considerably modified the local coastal dynamics. Mimizan having been selected as a pilot site to validate the project's methodological tools, this preparatory work was essential to understand the interactions between human developments and natural erosion processes.
                               <br><br>
                               Following this study, I had the opportunity to present a restitution of our research results before all local officials and institutional partners of the project, thus sharing our conclusions and contributing to collective reflection on coastal management.`,
        
        // Academic Projects
        academic_icu_title: "Urban vulnerability mapping to UHI in Tarn",
        academic_icu_text: `This project was carried out as part of a commission for BAWSALA company, represented by Ms. Hanan Jemmal, project tutor teacher. Developed collectively by Maria Achour, Lucie Delaperche, Jérémie Nougier and myself, this Master 1 SIGMA work aims to identify and map urban areas in the Tarn department most exposed to urban heat islands, while analyzing the vulnerability of sensitive populations.
                               <br><br>
                               The challenge of this study is twofold: on one hand, modeling the thermal intensity of urbanized areas using Landsat 8-9 satellite data and morphological variables (building density, vegetation cover, water surfaces); on the other hand, cross-referencing this data with INSEE demographic indicators to identify the most fragile populations facing heatwaves (young children, elderly people, population density).
                               <br><br>
                               My contribution to the project focused on two essential technical axes: In duo, we defined the star architecture of the database, established association tables between different geographical layers, and improved the performance of spatial queries through index creation. Simultaneously, I took charge of the entire web development: from initial generation with QGIS2Web to advanced customization of HTML/CSS/JavaScript code, including integration of the Leaflet.js library, creation of dynamic legends, and implementation of interactive features (municipal filters, layer accordion, full-screen mode).
                               <br><br>
                               The final result takes the form of a cartographic website allowing visual exploration of thermal, demographic data and risk areas for the municipalities of Albi, Castres and Puylaurens. This decision support tool offers elected officials and territorial actors a clear vision of intervention priorities in terms of climate adaptation.`,
        
        academic_indre_title: "Hydraulic infrastructure mapping",
        academic_indre_text: `This mapping of hydraulic infrastructure and hydrography of the Heart of Brenne in Indre, carried out as part of a pedagogical exercise in technical cartography aiming to process a specific dataset from IGN's BD TOPO.
                               <br><br>
                               The work consists of a synthetic representation of the hydrographic network and water management equipment on the territory of the Community of Communes of the Heart of Brenne, highlighting four main watersheds (Indre, Claise, Creuse and Suin) through a differentiated color palette. The map integrates all components of the hydraulic system including hydrographic sections and surfaces, confluence nodes, as well as management infrastructure (dams, reservoirs, springs and various equipment), while situating these elements in their territorial context through municipal delimitation. The legend structured in three themes (territorial organization, hydrographic network and hydrographic elements) allows hierarchical reading of information, demonstrating the ability to produce professional technical cartography meeting the standards of geomatics applied to water resource management.`,
        
        academic_ardeche_title: "Demographic dynamics and unemployment in Ardèche",
        academic_ardeche_text: `This thematic cartography work carried out as part of the Master 1 SIGMA aims to highlight demographic and economic dynamics of the Ardèche department in 2021 through a bivariate representation crossing two statistical variables. The map combines municipal population in absolute value, visualized by proportional circles in area, and unemployment rate in relative value, represented by colorimetric discretization in five classes according to the Jenks method.
                               <br><br>
                               Data comes from INSEE databases (2021 census and historical population base) and the IGN base map via Admin-express. The methodology required data preprocessing work in Excel to calculate the unemployment rate by municipality, then integration into QGIS through an attribute join based on municipal code. Histogram analysis revealed a non-normal distribution with a majority concentration of values between 10 and 20% unemployment rate, justifying the use of the Jenks method which respects natural density breaks.
                               <br><br>
                               Cartographic layout was finalized in Affinity Designer after export from QGIS, allowing refinement of the legend and application of graphic effects, notably adding a slightly blurred ESRI gray base map to improve overall aesthetics and highlight the bright colors of proportional circles.`,
        
        academic_cadaujac_title: "Land use mapping in Cadaujac: Mixed raster-vector methodology",
        academic_cadaujac_text: `This study aims to produce high-resolution land use mapping of the municipality of Cadaujac (Gironde) by mobilizing a hybrid methodological approach combining raster and vector data. The databases used are OCS CesBio (raster, 10m×10m resolution) for land use and IGN BD Topo (vector) for road sections.
                               <br><br>
                               The work is based on polygonization of the OCS CesBio raster layer, followed by subtraction of road surfaces calculated from BD Topo to correct automatic classification errors. Unspecified road widths were estimated at 1.5 meter radius by hypothesis. The total calculated area of Cadaujac is 15.36 km², close to the official INSEE value (15.3 km²). Land use reveals dominance of three categories: grasslands (4.45 km²), diffuse urban (3.59 km²) and deciduous forests (2.88 km²), characterizing a municipality in balance between residential urbanization and natural spaces.
                               <br><br>
                               The study highlights the inherent difficulties of raster data in representing linear continuities (roads, infrastructure). Automatic classification frequently confuses roads, industrial zones and diffuse urban due to similar spectral signatures. Moreover, pixel resolution (10m×10m) attributes majority occupation to the pixel, thus masking minority occupations present on road edges (hedges, vegetation).
                               <br><br>
                               This methodology demonstrates the interest of a multi-source approach to refine land use mapping while highlighting the technical limits of automatic raster classifications for linear elements and mixed occupation zones.`,
        
        academic_gironde_title: "Comparative analysis of land use databases in Gironde",
        academic_gironde_text: `This study compares two land use databases in Gironde: PIGMA (regional, 1 hectare resolution) and Corine Land Cover (European, 25 hectare resolution).
                               <br><br>
                               The analysis focuses on discontinuous urban fabric, vineyards and deciduous forests. Results reveal significant discrepancies: CLC shows higher surfaces for urban (67,967 ha vs 52,018) and vineyards (156,076 ha vs 130,595), while PIGMA detects more than double deciduous forests (125,053 ha vs 60,170). These divergences are explained by the difference in spatial resolution. Significant generalization of CLC (25 hectares minimum) encompasses more adjacent territories, overestimating urban and vineyards. Conversely, PIGMA captures small forests of less than 25 hectares that CLC cannot isolate.
                               <br><br>
                               The case study on Ludon-Médoc illustrates these differences: CLC produces a homogeneous and readable map, while PIGMA reveals precise and fragmented delineation. This analysis demonstrates that database choice must correspond to study scale: CLC for regional or European analyses, PIGMA for local studies requiring high precision.`,
        
        academic_moselle_title: "Spatial analysis of economic dependency in Moselle",
        academic_moselle_text: `This cartographic study analyzes the distribution of inactive populations (under 14 and over 60 years) in the Moselle department based on INSEE 2021 census data.
                               <br><br>
                               Three types of representations were used: ratio choropleth maps, economic dependency rate map and quadrant map. Results reveal strong territorial polarization along a west-east axis. Population under 14 concentrates in a vertical northwest axis, around major urban areas of Metz, Thionville and Forbach, areas attractive for active populations. The northwest also benefits from Luxembourg proximity, generating significant cross-border commuting. Conversely, population over 60 concentrates in the east and southeast of the department, rural areas distant from urban centers and close to the Vosges Regional Park and Germany. The economic dependency rate map confirms this dichotomy: the west shows a low rate (dynamic territory) thanks to concentration of active populations, while the east shows a high rate, sign of a less economically dynamic territory.
                               <br><br>
                               The quadrant map synthesizes these observations by revealing that the northwest axis concentrates municipalities with overrepresentations of both age classes compared to departmental average. This study concludes that Moselle is a department polarized by the Metz urban area and cross-border cities, with unequal distribution of inactive populations according to a marked west-east divide.`,
        
        // Experience Page
        experiences_title: "My Professional Experience",
        exp_cnrs_title: "GIS Operator - CNRS UMR PASSAGES 5319 – ARD Pole",
        exp_cnrs_date: "June 2025 - August 2025",
       exp_cnrs_text: `I completed a GIS Operator internship at CNRS UMR PASSAGES 5319, specifically at the ARD pole (Analysis and Data Representation). Under the supervision of experts such as Olivier Pissoat (Cartographer) and Grégoire Lecampion (Statistician), I contributed to several research projects. My main missions included an in-depth statistical study in R for the Geopoint geography conference, resulting in cartographic and statistical reports. I also participated in the CNRS Spherographia project, focused on the study and analysis of virtual globes. Finally, I collaborated with Solange Pupiers on a field study concerning the impact and spatial analysis of coastal erosion at Mimizan Beach. <br><br> Spherographia project: <a href="https://spherographia.cnrs.fr/?Projet" target="_blank">Discover the project</a>`,
        exp_anaa1_title: "European delegation support - ANAA",
        exp_anaa1_date: "June 2024",
        exp_anaa1_text: `As part of the Erasmus project dedicated to agroecological transition in viticulture, I had the opportunity to accompany several European delegations. This experience allowed me to promote intercultural exchanges, value sustainable practices in the wine sector, and contribute to knowledge dissemination on ecological transition challenges.`,
        
        exp_anaa2_title: "Logistical support - ANAA",
        exp_anaa2_date: "May 2021",
        exp_anaa2_text: `During the 2021 edition of Bordeaux Fête le Vin, I provided logistical support to the local producers' market. This mission allowed me to contribute to the promotion of local products and support the organization of a major regional event.`,
        
        exp_acto_title: "Project support - Acto (Actions and Territories – Lisbon)",
        exp_acto_date: "2016 – 2017",
        exp_acto_text: `Between 2016 and 2017, I regularly participated in supporting European cooperation projects and international delegations. I also carried out translation missions between French and Portuguese, facilitating communication between European actors and strengthening the smooth running of exchanges.`,
        
        exp_student_title: "Student jobs (France - Portugal)",
        exp_student_date: "2017 – 2025",
        exp_student_text: "",
        exp_student_objective: "Objective:",
        exp_student_tasks: "Tasks:",
        exp_student_job1: "Self-service employee – U Express, Bordeaux",
        exp_student_job1_objective: "finance studies while developing autonomy, rigor and customer service sense.",
        exp_student_job1_tasks: "shelf stocking, inventory management, customer reception and guidance, procedure and deadline compliance.",
        exp_student_job2: "Multipurpose employee – Carrefour City, Bordeaux",
        exp_student_job2_objective: "gain versatile experience in retail and strengthen customer relationship.",
        exp_student_job2_tasks: "shelf stocking, cashier, inventory, sales area organization.",
        exp_student_job3: "Seasonal employee – La Nouvelle Librairie Française, Lisbon",
        exp_student_job3_objective: "participate in daily management of a cultural business and develop acute customer service sense.",
        exp_student_job3_tasks: "customer reception and advice, cashier, order management, store organization and operation.",
        exp_student_job4: "Construction worker – FBTECH Company (Coring and demolition)",
        exp_student_job4_objective: "gain technical experience in demanding and physical environment.",
        exp_student_job4_tasks: "site assistance, coring, demolition, handling.",
        exp_student_job5: "Construction worker – Tangente Proeza Company",
        exp_student_job5_objective: "discover construction sector and develop teamwork skills on site.",
        exp_student_job5_tasks: "site cleaning, assistance to various trades, safety instruction compliance.",
        exp_student_job6: "Multipurpose employee – Intermarché",
        exp_student_job6_objective: "first professional experience, learning basics of commercial work.",
        exp_student_job6_tasks: "shelf stocking, cashier, inventory.",
        
        // Education Page
        formations_title: "My Education",
        form_master_title: "Master 1 - SIGMA - INP ENSAT, Université Jean Jaurès",
        form_master_date: "2025 - 2026",
        form_master_text: `Currently in the first year of the SIGMA Master's program (Geographic Information Systems and Planning Professions), I am acquiring solid skills in processing, analyzing, and valorizing spatial data. My training allows me to develop technical expertise in spatial database engineering, remote sensing, algorithms, and programming (SQL, HTML, Python). I am also deepening my knowledge in advanced GIS programming, data visualization, and webmapping, from a multidisciplinary application perspective.`,
        
        form_gaer_title: "Bachelor's Degree in GAER - Université Bordeaux Montaigne",
        form_gaer_date: "2022 - 2025",
        form_gaer_text: `The Geography, Planning, Environment and Resources program allowed me to acquire an in-depth understanding of territorial and environmental dynamics, combining a rigorous theoretical approach with applied analysis methods. I developed solid skills in digital geography, cartography, and geomatics (GIS), as well as mastery of bivariate and multivariate statistical analyses for processing and interpreting spatial data. The program also allowed me to approach social and physical geography, environmental risk diagnostics, and management of quantitative and qualitative data, in a multidisciplinary logic linking territorial planning, environmental observation, and decision support.`,
        
        form_droit_title: "Law Degree - Université Bordeaux Montesquieu",
        form_droit_date: "2019 - 2022",
        form_droit_text: `This training allowed me to acquire a solid legal culture and an in-depth understanding of the political, economic, and administrative functioning of the State. It also provided me with essential methodological rigor, both in researching and analyzing legal texts and in argumentative writing. I developed skills in work organization, time management, and synthesis, qualities transferable to project management and data management in complex administrative and territorial contexts.`,
        
        form_bac_title: "Baccalaureate in Economics and Social Sciences - Lycée Français Charles Lepierre - Lisbon",
        form_bac_date: "2010 - 2019",
        form_bac_text: `Honors. Major in political science, DNL option. Having completed my education at the French high school and middle school in Lisbon, I evolved in a multicultural and multilingual environment. This experience allowed me to master French, Portuguese, Spanish, and English fluently, and to develop strong adaptability and international openness in my communication and work approach.`,
        
        // Skills Page
        competences_title: "My Skills",
        comp_lang_title: "Language Skills",
        comp_lang_globe_title: "Mastered Language Zones",
        comp_lang_fr: "French",
        comp_lang_fr_level: "Native language",
        comp_lang_pt: "Portuguese",
        comp_lang_pt_level: "Native language",
        comp_lang_en: "English",
        comp_lang_en_level: "Bilingual",
        comp_lang_es: "Spanish",
        comp_lang_es_level: "Fluent",
        comp_tech_title: "Technical Skills",
        comp_human_title: "Soft Skills",
        
        // Technical skills
        skill_html_css: "HTML/CSS",
        skill_sql: "SQL",
        skill_python: "Python",
        skill_qgis: "QGIS",
        skill_sgbd: "DBMS",
        skill_pgadmin: "PgAdmin4",
        skill_magrit: "Magrit",
        skill_webmapping: "Webmapping",
        skill_arcgis: "ArcGIS Online/Pro",
        skill_illustrator: "Adobe Illustrator",
        skill_affinity: "Affinity",
        skill_rstudio: "RStudio",
        skill_remote: "Remote Sensing",
        skill_otb: "OTB",
        skill_stats: "Statistical analysis",
        skill_diagnostics: "Risk diagnostics",
        
        // Soft skills
        skill_polyvalent: "Versatile",
        skill_autonome: "Autonomous",
        skill_organise: "Organized",
        skill_equipe: "Teamwork",
        skill_adaptation: "Adaptability",
        skill_esprit: "Team spirit",
        skill_rigueur: "Rigor",
        skill_apprendre: "Willingness to learn",
        
        // Buttons and links
        button_pdf: "📄 View PDF",
        button_webmapping: "🌐 Access webmapping",
        link_discover_project: "Discover the project",
        
        // PDF Lightbox
        pdf_zoom_out: "− Zoom",
        pdf_zoom_in: "+ Zoom",
        pdf_reset: "↻ Reset",
        pdf_page: "Page",
        pdf_prev: "◀ Previous",
        pdf_next: "Next ▶",
        
        // Footer
        footer_text: "All rights reserved"
    },
    
    pt: {
        // Navegação
        nav_accueil: "Início",
        nav_portfolio: "Portfólio",
        nav_cv: "Currículo",
        nav_cv_arrow: "▼",
        nav_experiences: "Experiências",
        nav_formations: "Formações",
        nav_competences: "Competências",
        
        // Página Inicial
        welcome_title: "Djouadi Pablo",
        welcome_subtitle: "Bem-vindo ao meu Portfólio",
        about_title: "Sobre mim",
        about_text: `Engenheiro de geomática em formação no Mestrado SIGMA, co-acreditado pela INP ENSAT e Universidade Toulouse Jean Jaurès. Apaixonado por cartografia e geomática, minha ambição é exercer esta disciplina como profissão em tempo integral.
                        <br><br>
                        Meu percurso reflete uma evolução progressiva em direção à geomática: após estudar direito na Universidade Bordeaux Montesquieu, encontrei minha verdadeira vocação na geografia e análise espacial através da licença GAER em Bordeaux Montaigne. Hoje, especializo-me no tratamento e valorização de dados geoespaciais.
                        <br><br>
                        Para saber mais, explore meu site!`,
        globe_title: "Minhas cidades, minha história",
        
        // Contato
        contact_title: "Contactar-me",
        contact_accordion_icon: "▼",
        contact_coords_title: "Coordenadas",
        contact_coords_email: "Email:",
        contact_coords_phone: "Telefone:",
        contact_coords_linkedin: "LinkedIn:",
        contact_form_title: "Contactar-me diretamente",
        contact_form_name: "Nome completo *",
        contact_form_email: "Email *",
        contact_form_subject: "Assunto *",
        contact_form_message: "Mensagem *",
        contact_form_submit: "Enviar mensagem",
        
        // Página Portfólio
        portfolio_title: "Portfólio",
        portfolio_research_title: "Projetos de Pesquisa",
        portfolio_academic_title: "Trabalhos Académicos",
        
        // Níveis de estudo
        academic_level_master1: "Nível de estudo: Mestrado 1",
        academic_level_license3: "Nível de estudo: Licenciatura 3",
        academic_level_license2: "Nível de estudo: Licenciatura 2",
        
        // Projetos de Pesquisa
        project_geopoint_title: "Geopoint: 50 anos de geografia",
        project_geopoint_text: `Por ocasião da chegada do colóquio bianual Geopoint a Bordeaux em dezembro de 2026, fui encarregado de realizar a análise cartográfica e estatística deste evento académico. Para realizar este projeto, constituí uma base de dados exaustiva agrupando todos os autores que participaram nas edições anteriores do Geopoint, seus artigos publicados e suas universidades de afiliação.
                               <br><br>
                               Esta base de dados permitiu-me conduzir análises aprofundadas através de várias abordagens complementares: cartografias de evolução espacial, cartografias animadas e análises estatísticas avançadas em R. Mobilizei especialmente bibliotecas como ggplot2 para visualização de dados e visNetwork para criação de gráficos de redes animados. As análises temáticas sobre palavras-chave também permitiram identificar as evoluções conceituais e metodológicas do colóquio ao longo dos anos.
                               <br><br>
                               Este trabalho resultará numa publicação científica e na minha participação no colóquio de 2026, onde apresentarei a restituição deste estudo sobre a evolução do Geopoint.`,
        
        project_spherographia_title: "Spherographia",
        project_spherographia_text: `Durante o meu estágio no CNRS UMR PASSAGES 5319, dediquei parte do meu tempo ao projeto Spherographia, conduzido por Matthieu Noucher, investigador especializado em geomática e geografia digital. Este projeto ambicioso visa constituir um corpus exaustivo e analisado dos globos virtuais, ferramentas de representação geográfica cada vez mais presentes no nosso quotidiano digital.
                               <br><br>
                               A minha contribuição articulou-se em torno de dois eixos principais: o enriquecimento do catálogo de globos virtuais e o alimentar da galeria do projeto. Este trabalho de inserção de dados e documentação exigiu uma metodologia rigorosa incluindo um pré-tratamento aprofundado de cada globo analisado. Procedi assim a uma caracterização temática detalhada, identificando os domínios de aplicação de cada globo (geografia física, geopolítica, turismo, urbanismo, etc.).
                               <br><br>
                               A análise colorimétrica constituiu igualmente um aspeto essencial deste trabalho, permitindo identificar as escolhas semiológicas e as convenções cartográficas adotadas pelos diferentes concebedores de globos virtuais. Documentei também as funcionalidades técnicas de cada interface (navegação 3D, sobreposição de camadas temáticas, acesso aos dados subjacentes), as fontes de dados mobilizadas, assim como os aspetos de ergonomia e acessibilidade.
                               <br><br>
                               Esta experiência permitiu-me desenvolver uma expertise na análise crítica das ferramentas de geovisualização e contribuir para um projeto de investigação inovador na intersecção da geografia, informática e semiologia gráfica.`,
        
        project_mimizan_title: "Estudo prévio da erosão costeira em Mimizan Plage",
        project_mimizan_text: `Durante o meu estágio no CNRS, colaborei com Solnage Pupier num estudo prévio sobre a erosão costeira em Mimizan Plage, no âmbito de um projeto de investigação mais amplo sobre o impacto da ondulação infragravitária no litoral atlântico francês.
                               <br><br>
                               Esta missão articulou-se em torno de duas jornadas de campo intensivas em Mimizan, durante as quais realizei entrevistas com diferentes atores-chave do território: funcionários municipais responsáveis pelo ordenamento do litoral, eruditos locais detentores da memória histórica da região, assim como Claire Steimer (Conservadora do património na Região Nova Aquitânia). Estes intercâmbios pluridisciplinares permitiram-me reconstituir o histórico detalhado da evolução do curso de água de Mimizan, um sistema hoje fortemente antropizado e cujas transformações sucessivas modificaram consideravelmente a dinâmica costeira local. Mimizan tendo sido selecionado como local piloto para validar as ferramentas metodológicas do projeto, este trabalho preparatório era essencial para compreender as interações entre ordenamentos humanos e processos naturais de erosão.
                               <br><br>
                               No final deste estudo, tive a oportunidade de apresentar uma restituição dos resultados das nossas investigações perante o conjunto dos funcionários locais e dos parceiros institucionais do projeto, permitindo assim partilhar as nossas conclusões e contribuir para a reflexão coletiva sobre a gestão do litoral.`,
        
        // Trabalhos Académicos
        academic_icu_title: "Cartografia da vulnerabilidade urbana face às ICU no Tarn",
        academic_icu_text: `Este projeto foi realizado no âmbito de uma encomenda para a empresa BAWSALA, representada pela Senhora Hanan Jemmal, professora tutora do projeto. Desenvolvido coletivamente por Maria Achour, Lucie Delaperche, Jérémie Nougier e por mim, este trabalho de Mestrado 1 SIGMA visa identificar e cartografar as zonas urbanas do departamento do Tarn mais expostas às ilhas de calor urbanas, analisando simultaneamente a vulnerabilidade das populações sensíveis.
                               <br><br>
                               O desafio deste estudo é duplo: por um lado, modelar a intensidade térmica das zonas urbanizadas através de dados satelitais Landsat 8-9 e variáveis morfológicas (densidade construída, cobertura vegetal, superfícies de água); por outro lado, cruzar estes dados com indicadores demográficos INSEE para identificar as populações mais frágeis face às ondas de calor (crianças pequenas, pessoas idosas, densidade populacional).
                               <br><br>
                               A minha contribuição para o projeto concentrou-se em dois eixos técnicos essenciais: Em dupla, definimos a arquitetura em estrela da base de dados, estabelecemos as tabelas de associação entre as diferentes camadas geográficas e melhoramos o desempenho das consultas espaciais através da criação de índices. Paralelamente, assumi a totalidade do desenvolvimento web: da geração inicial com QGIS2Web à personalização avançada do código HTML/CSS/JavaScript, passando pela integração da biblioteca Leaflet.js, criação de legendas dinâmicas, e implementação das funcionalidades interativas (filtros municipais, acordeão de camadas, modo ecrã completo).
                               <br><br>
                               O resultado final apresenta-se sob a forma de um site cartográfico permitindo explorar visualmente os dados térmicos, demográficos e as zonas de risco para as comunas de Albi, Castres e Puylaurens. Esta ferramenta de apoio à decisão oferece aos eleitos e atores territoriais uma visão clara das prioridades de intervenção em matéria de adaptação climática.`,
        
        academic_indre_title: "Cartografia das infraestruturas hidráulicas",
        academic_indre_text: `Esta cartografia das infraestruturas hidráulicas e da hidrografia do Coração de Brenne em Indre, realizada no âmbito de um exercício pedagógico de cartografia técnica visando tratar um conjunto de dados específico proveniente da BD TOPO do IGN.
                               <br><br>
                               O trabalho consiste numa representação sintética da rede hidrográfica e dos equipamentos de gestão da água no território da Comunidade de Comunas do Coração de Brenne, evidenciando quatro bacias hidrográficas principais (Indre, Claise, Creuse e Suin) através de uma paleta de cores diferenciada. O mapa integra o conjunto dos componentes do sistema hidráulico incluindo os troços e superfícies hidrográficas, os nós de confluência, assim como as infraestruturas de gestão (barragens, reservatórios, nascentes e equipamentos diversos), situando simultaneamente estes elementos no seu contexto territorial através da delimitação das comunas. A legenda estruturada em três temáticas (organização territorial, rede hidrográfica e elementos hidrográficos) permite uma leitura hierarquizada da informação, demonstrando a capacidade de produzir uma cartografia técnica profissional respondendo aos padrões da geomática aplicada à gestão do recurso hídrico.`,
        
        academic_ardeche_title: "Dinâmica demográfica e desemprego da Ardèche",
        academic_ardeche_text: `Este trabalho de cartografia temática realizado no âmbito do Mestrado 1 SIGMA visa evidenciar as dinâmicas demográficas e económicas do departamento da Ardèche em 2021 através de uma representação bivariada cruzando duas variáveis estatísticas. O mapa combina a população municipal em valor absoluto, visualizada por círculos proporcionais em superfície, e a taxa de desemprego em valor relativo, representada por uma discretização colorimétrica em cinco classes segundo o método de Jenks.
                               <br><br>
                               Os dados provêm das bases do INSEE (recenseamento 2021 e base histórica de população) e o fundo de mapa do IGN via Admin-express. A metodologia exigiu um trabalho de pré-tratamento dos dados no Excel para calcular a taxa de desemprego por comuna, depois uma integração no QGIS através de uma junção atributiva baseada no código comunal. A análise do histograma revelou uma distribuição não normal com uma concentração maioritária dos valores entre 10 e 20% de taxa de desemprego, justificando a utilização do método de Jenks que respeita as ruturas naturais de densidade.
                               <br><br>
                               A maquetização cartográfica foi finalizada no Affinity Designer após exportação desde o QGIS, permitindo afinar a legenda e aplicar efeitos gráficos, nomeadamente a adição de um fundo de mapa cinzento ESRI ligeiramente desfocado para melhorar a estética geral e fazer sobressair as cores vivas dos círculos proporcionais.`,
        
        academic_cadaujac_title: "Cartografia da ocupação dos solos em Cadaujac: Metodologia mista raster-vetor",
        academic_cadaujac_text: `Este estudo visa produzir uma cartografia de alta resolução da ocupação dos solos da comuna de Cadaujac (Gironde) mobilizando uma abordagem metodológica híbrida combinando dados raster e vetoriais. As bases de dados mobilizadas são a OCS CesBio (raster, resolução 10m×10m) para a ocupação do solo e a BD Topo IGN (vetorial) para os troços de estrada.
                               <br><br>
                               O trabalho assenta na poligonização da camada raster OCS CesBio, seguida de uma subtração das superfícies rodoviárias calculadas a partir da BD Topo para corrigir os erros de classificação automática. As larguras de estradas não registadas foram estimadas a 1,5 metros de raio por hipótese. A superfície total calculada de Cadaujac é de 15,36 km², próxima do valor oficial INSEE (15,3 km²). A ocupação do solo revela um domínio de três categorias: as pradarias (4,45 km²), o urbano difuso (3,59 km²) e as florestas de folhosas (2,88 km²), caraterizando uma comuna em equilíbrio entre urbanização residencial e espaços naturais.
                               <br><br>
                               O estudo evidencia as dificuldades inerentes aos dados raster para representar as continuidades lineares (estradas, infraestruturas). A classificação automática confunde frequentemente estradas, zonas industriais e urbano difuso devido a assinaturas espectrais semelhantes. Além disso, a resolução pixelar (10m×10m) atribui a ocupação maioritária ao pixel, mascarando assim as ocupações minoritárias presentes nas bordaduras das estradas (sebes, vegetação).
                               <br><br>
                               Esta metodologia demonstra o interesse de uma abordagem multi-fontes para afinar a cartografia da ocupação dos solos sublinhando simultaneamente os limites técnicos das classificações automáticas raster para os elementos lineares e as zonas de ocupação mista.`,
        
        academic_gironde_title: "Análise comparativa das BDD de ocupação dos solos na Gironde",
        academic_gironde_text: `Este estudo compara duas bases de dados de ocupação dos solos na Gironde: PIGMA (regional, resolução 1 hectare) e Corine Land Cover (europeia, resolução 25 hectares).
                               <br><br>
                               A análise incide sobre o tecido urbano descontínuo, os vinhedos e as florestas de folhosas. Os resultados revelam desvios significativos: a CLC apresenta superfícies superiores para o urbano (67 967 ha contra 52 018) e os vinhedos (156 076 ha contra 130 595), enquanto a PIGMA deteta mais do dobro de florestas de folhosas (125 053 ha contra 60 170). Estas divergências explicam-se pela diferença de resolução espacial. A generalização importante da CLC (25 hectares mínimo) engloba mais territórios adjacentes, sobrestimando o urbano e os vinhedos. Inversamente, a PIGMA capta as pequenas florestas de menos de 25 hectares que a CLC não pode isolar.
                               <br><br>
                               O estudo de caso sobre Ludon-Médoc ilustra estas diferenças: a CLC produz um mapa homogéneo e legível, enquanto a PIGMA revela um recorte preciso e fragmentado. Esta análise demonstra que a escolha da base de dados deve corresponder à escala de estudo: CLC para as análises regionais ou europeias, PIGMA para os estudos locais necessitando de uma alta precisão.`,
        
        academic_moselle_title: "Análise espacial da dependência económica na Moselle",
        academic_moselle_text: `Este estudo cartográfico analisa a repartição das populações inativas (menos de 14 anos e mais de 60 anos) no departamento da Moselle a partir dos dados do recenseamento INSEE 2021.
                               <br><br>
                               Três tipos de representações foram mobilizados: mapas coropléticos de rácio, mapa da taxa de dependência económica e mapa em quadrante. Os resultados revelam uma forte polarização territorial segundo um eixo oeste-este. A população de menos de 14 anos concentra-se num eixo vertical noroeste, à volta das grandes aglomerações de Metz, Thionville e Forbach, zonas atrativas para os ativos. O noroeste beneficia igualmente da proximidade luxemburguesa, gerando importantes migrações pendulares transfronteiriças. Inversamente, a população de mais de 60 anos concentra-se no este e sudeste do departamento, zonas rurais afastadas dos pólos urbanos e próximas do Parque regional dos Vosges e da Alemanha. O mapa da taxa de dependência económica confirma esta dicotomia: o oeste apresenta uma taxa fraca (território dinâmico) graças à concentração de ativos, enquanto o este apresenta uma taxa elevada, sinal de um território menos dinâmico economicamente.
                               <br><br>
                               O mapa em quadrante sintetiza estas observações revelando que o eixo noroeste concentra as comunas com sobre-representações das duas classes de idade relativamente à média departamental. Este estudo conclui que a Moselle é um departamento polarizado pela aglomeração messina e pelas cidades transfronteiriças, com uma repartição desigual das populações inativas segundo uma rutura oeste-este marcada.`,
        
        // Página Experiências
        experiences_title: "As Minhas Experiências Profissionais",
        exp_cnrs_title: "Operador SIG - CNRS UMR PASSAGES 5319 – Pólo ARD",
        exp_cnrs_date: "Junho 2025 - Agosto 2025",
        exp_cnrs_text: `Realizei um estágio de Operador SIG no CNRS UMR PASSAGES 5319, especificamente no pólo ARD (Análise e Representação de Dados). Sob a supervisão de peritos como Olivier Pissoat (Cartógrafo) e Grégoire Lecampion (Estatístico), contribuí para vários projetos de investigação. As minhas missões principais incluíam um estudo estatístico aprofundado em R para o colóquio de geografia Geopoint, resultando em relatórios cartográficos e estatísticos. Participei igualmente no projeto Spherographia do CNRS, centrado no estudo e análise dos globos virtuais. Finalmente, colaborei com Solange Pupiers num estudo de terreno relativo ao impacto e análise espacial da erosão costeira em Mimizan Plage. <br><br> Projeto Spherographia: <a href="https://spherographia.cnrs.fr/?Projet" target="_blank">Descobrir o projeto</a>`,
        exp_anaa1_title: "Acompanhamento de delegações europeias - ANAA",
        exp_anaa1_date: "Junho 2024",
        exp_anaa1_text: `No âmbito do projeto Erasmus consagrado à transição agroecológica em viticultura, tive a oportunidade de acompanhar várias delegações europeias. Esta experiência permitiu-me favorecer os intercâmbios interculturais, valorizar as práticas sustentáveis no sector vitícola e contribuir para a difusão de conhecimentos sobre os desafios da transição ecológica.`,
        
        exp_anaa2_title: "Apoio logístico - ANAA",
        exp_anaa2_date: "Maio 2021",
        exp_anaa2_text: `Durante a edição 2021 de Bordeaux Fête le Vin, prestei um apoio logístico ao Mercado local de produtores. Esta missão permitiu-me contribuir para a valorização dos produtos do terroir e apoiar a organização de um evento de envergadura regional.`,
        
        exp_acto_title: "Acompanhamento de projetos - Acto (Ações e Territórios – Lisboa)",
        exp_acto_date: "2016 – 2017",
        exp_acto_text: `Entre 2016 e 2017, participei de maneira recorrente no acompanhamento de projetos de cooperação europeia e de delegações internacionais. Assegurei igualmente missões de tradução entre o francês e o português, facilitando a comunicação entre os atores europeus e reforçando o bom desenrolar das trocas.`,
        
        exp_student_title: "Empregos estudantis (França - Portugal)",
        exp_student_date: "2017 – 2025",
        exp_student_text: "",
        exp_student_objective: "Objetivo:",
        exp_student_tasks: "Tarefas:",
        exp_student_job1: "Empregado de livre serviço – U Express, Bordeaux",
        exp_student_job1_objective: "financiar os estudos desenvolvendo simultaneamente autonomia, rigor e sentido de serviço.",
        exp_student_job1_tasks: "reposição de prateleiras, gestão de stocks, receção e orientação de clientes, respeito dos procedimentos e prazos.",
        exp_student_job2: "Empregado polivalente – Carrefour City, Bordeaux",
        exp_student_job2_objective: "adquirir uma experiência polivalente na grande distribuição e reforçar a relação cliente.",
        exp_student_job2_tasks: "reposição de prateleiras, caixa, inventário, organização do espaço de venda.",
        exp_student_job3: "Empregado sazonal – A Nova Livraria Francesa, Lisboa",
        exp_student_job3_objective: "participar na gestão quotidiana de um comércio cultural e desenvolver um sentido agudo de receção ao cliente.",
        exp_student_job3_tasks: "receção e aconselhamento da clientela, caixa, gestão de encomendas, organização e funcionamento da loja.",
        exp_student_job4: "Manobrador em estaleiro – Empresa FBTECH (Carotagem e demolição)",
        exp_student_job4_objective: "adquirir uma experiência técnica num ambiente exigente e físico.",
        exp_student_job4_tasks: "assistência em estaleiro, carotagem, demolição, manuseamento.",
        exp_student_job5: "Manobrador em estaleiro – Empresa Tangente Proeza",
        exp_student_job5_objective: "descobrir o meio da construção e desenvolver competências de trabalho em equipa em estaleiro.",
        exp_student_job5_tasks: "limpeza de estaleiro, ajuda aos diferentes ofícios, respeito das instruções de segurança.",
        exp_student_job6: "Empregado polivalente – Intermarché",
        exp_student_job6_objective: "primeira experiência profissional, aprendizagem das bases do trabalho em comércio.",
        exp_student_job6_tasks: "reposição de prateleiras, caixa, inventário.",
        
        // Página Formações
        formations_title: "As Minhas Formações",
        form_master_title: "Mestrado 1 - SIGMA - INP ENSAT, Universidade Jean Jaurès",
        form_master_date: "2025 - 2026",
        form_master_text: `Atualmente no primeiro ano do Mestrado SIGMA (Sistemas de Informação Geográfica e Ofícios do Ordenamento), adquiro competências sólidas no tratamento, análise e valorização dos dados espaciais. A minha formação permite-me desenvolver uma expertise técnica em engenharia de bases de dados espaciais, teledetecção, algoritmia e programação (SQL, HTML, Python). Aprofundo igualmente os meus conhecimentos em programação SIG avançada, visualização de dados e webmapping, numa perspetiva de aplicação multidisciplinar.`,
        
        form_gaer_title: "Licenciatura 3 GAER - Universidade Bordeaux Montaigne",
        form_gaer_date: "2022 - 2025",
        form_gaer_text: `A formação Geografia, Ordenamento, Ambiente e Recursos permitiu-me adquirir uma compreensão aprofundada das dinâmicas territoriais e ambientais, combinando uma abordagem teórica rigorosa a métodos de análise aplicada. Desenvolvi competências sólidas em geografia digital, cartografia e geomática (SIG), assim como domínio das análises estatísticas bi e multivariadas para tratamento e interpretação dos dados espaciais. A formação permitiu-me igualmente abordar a geografia social e física, os diagnósticos de riscos ambientais, e a gestão de dados quantitativos e qualitativos, numa lógica multidisciplinar ligando ordenamento do território, observação dos meios e apoio à decisão.`,
        
        form_droit_title: "Licenciatura 2 Direito - Universidade Bordeaux Montesquieu",
        form_droit_date: "2019 - 2022",
        form_droit_text: `Esta formação permitiu-me adquirir uma sólida cultura jurídica e uma compreensão aprofundada do funcionamento político, económico e administrativo do Estado. Trouxe-me igualmente um rigor metodológico essencial, tanto na pesquisa e análise de textos jurídicos como na redação argumentada. Desenvolvi competências em organização do trabalho, gestão do tempo e espírito de síntese, qualidades transferíveis para a condução de projetos e gestão de dados em contextos administrativos e territoriais complexos.`,
        
        form_bac_title: "Bacharelato económico e social - Liceu Francês Charles Lepierre - Lisboa",
        form_bac_date: "2010 - 2019",
        form_bac_text: `Menção Bem. Especialidade ciência política, opção DNL. Tendo seguido a minha escolaridade no liceu e no colégio francês de Lisboa, evolui num ambiente multicultural e plurilingue. Esta experiência permitiu-me dominar fluentemente o francês, o português, o espanhol e o inglês, e desenvolver uma forte capacidade de adaptação assim como uma abertura internacional na minha maneira de comunicar e trabalhar.`,
        
        // Página Competências
        competences_title: "As Minhas Competências",
        comp_lang_title: "Competências linguísticas",
        comp_lang_globe_title: "Zonas linguísticas dominadas",
        comp_lang_fr: "Francês",
        comp_lang_fr_level: "Língua materna",
        comp_lang_pt: "Português",
        comp_lang_pt_level: "Língua materna",
        comp_lang_en: "Inglês",
        comp_lang_en_level: "Bilingue",
        comp_lang_es: "Espanhol",
        comp_lang_es_level: "Fluente",
        comp_tech_title: "Competências técnicas",
        comp_human_title: "Competências humanas",
        
        // Competências técnicas
        skill_html_css: "HTML/CSS",
        skill_sql: "SQL",
        skill_python: "Python",
        skill_qgis: "QGIS",
        skill_sgbd: "SGBD",
        skill_pgadmin: "PgAdmin4",
        skill_magrit: "Magrit",
        skill_webmapping: "Webmapping",
        skill_arcgis: "ArcGIS Online/Pro",
        skill_illustrator: "Adobe Illustrator",
        skill_affinity: "Affinity",
        skill_rstudio: "RStudio",
        skill_remote: "Teledetecção",
        skill_otb: "OTB",
        skill_stats: "Análise estatística",
        skill_diagnostics: "Diagnósticos de riscos",
        
        // Competências humanas
        skill_polyvalent: "Polivalente",
        skill_autonome: "Autónomo",
        skill_organise: "Organizado",
        skill_equipe: "Trabalho em equipa",
        skill_adaptation: "Adaptação",
        skill_esprit: "Espírito de equipa",
        skill_rigueur: "Rigor",
        skill_apprendre: "Vontade de aprender",
        
        // Botões e ligações
        button_pdf: "📄 Consultar o PDF",
        button_webmapping: "🌐 Aceder ao webmapping",
        link_discover_project: "Descobrir o projeto",
        
        // Lightbox PDF
        pdf_zoom_out: "− Zoom",
        pdf_zoom_in: "+ Zoom",
        pdf_reset: "↻ Reinicializar",
        pdf_page: "Página",
        pdf_prev: "◀ Anterior",
        pdf_next: "Seguinte ▶",
        
        // Footer
        footer_text: "Todos os direitos reservados"
    },
    
    es: {
        // Navegación
        nav_accueil: "Inicio",
        nav_portfolio: "Portafolio",
        nav_cv: "Currículum",
        nav_cv_arrow: "▼",
        nav_experiences: "Experiencias",
        nav_formations: "Formaciones",
        nav_competences: "Competencias",
        
        // Página Inicio
        welcome_title: "Djouadi Pablo",
        welcome_subtitle: "Bienvenido a mi Portafolio",
        about_title: "Sobre mí",
        about_text: `Ingeniero geomático en formación en el Máster SIGMA, co-acreditado por la INP ENSAT y la Universidad Toulouse Jean Jaurès. Apasionado por la cartografía y la geomática, mi ambición es ejercer esta disciplina como profesión a tiempo completo.
                        <br><br>
                        Mi trayectoria refleja una evolución progresiva hacia la geomática: después de estudiar derecho en la Universidad Bordeaux Montesquieu, encontré mi verdadera vocación en la geografía y el análisis espacial a través de la licencia GAER en Bordeaux Montaigne. Hoy en día, me especializo en el tratamiento y la valorización de datos geoespaciales.
                        <br><br>
                        ¡Para saber más, explora mi sitio!`,
        globe_title: "Mis ciudades, mi historia",
        
        // Contacto
        contact_title: "Contactarme",
        contact_accordion_icon: "▼",
        contact_coords_title: "Coordenadas",
        contact_coords_email: "Email:",
        contact_coords_phone: "Teléfono:",
        contact_coords_linkedin: "LinkedIn:",
        contact_form_title: "Contactarme directamente",
        contact_form_name: "Nombre completo *",
        contact_form_email: "Email *",
        contact_form_subject: "Asunto *",
        contact_form_message: "Mensaje *",
        contact_form_submit: "Enviar mensaje",
        
        // Página Portafolio
        portfolio_title: "Portafolio",
        portfolio_research_title: "Proyectos de Investigación",
        portfolio_academic_title: "Trabajos Académicos",
        
        // Niveles de estudio
        academic_level_master1: "Nivel de estudio: Máster 1",
        academic_level_license3: "Nivel de estudio: Licenciatura 3",
        academic_level_license2: "Nivel de estudio: Licenciatura 2",
        
        // Proyectos de Investigación
        project_geopoint_title: "Geopoint: 50 años de geografía",
        project_geopoint_text: `Con motivo de la llegada del coloquio bianual Geopoint a Burdeos en diciembre de 2026, fui encargado de realizar el análisis cartográfico y estadístico de este evento académico. Para llevar a cabo este proyecto, constituí una base de datos exhaustiva que agrupa a todos los autores que participaron en ediciones anteriores del Geopoint, sus artículos publicados así como sus universidades de pertenencia.
                               <br><br>
                               Esta base de datos me permitió conducir análisis profundos a través de varios enfoques complementarios: cartografías de evolución espacial, cartografías animadas y análisis estadísticos avanzados en R. He movilizado especialmente bibliotecas como ggplot2 para la visualización de datos y visNetwork para la creación de gráficos de redes animados. Los análisis temáticos sobre palabras clave también permitieron identificar las evoluciones conceptuales y metodológicas del coloquio a lo largo de los años.
                               <br><br>
                               Este trabajo desembocará en una publicación científica y en mi participación en el coloquio de 2026, donde presentaré la restitución de este estudio sobre la evolución del Geopoint.`,
        
        project_spherographia_title: "Spherographia",
        project_spherographia_text: `Durante mi práctica en el CNRS UMR PASSAGES 5319, dediqué parte de mi tiempo al proyecto Spherographia, conducido por Matthieu Noucher, investigador especializado en geomática y geografía digital. Este proyecto ambicioso pretende constituir un corpus exhaustivo y analizado de los globos virtuales, herramientas de representación geográfica cada vez más presentes en nuestra cotidianidad digital.
                               <br><br>
                               Mi contribución se articuló en torno a dos ejes principales: el enriquecimiento del catálogo de globos virtuales y la alimentación de la galería del proyecto. Este trabajo de inserción de datos y documentación exigió una metodología rigurosa incluyendo un pretratamiento profundo de cada globo analizado. Procedí así a una caracterización temática detallada, identificando los dominios de aplicación de cada globo (geografía física, geopolítica, turismo, urbanismo, etc.).
                               <br><br>
                               El análisis colorimétrico constituyó igualmente un aspecto esencial de este trabajo, permitiendo identificar las elecciones semiológicas y las convenciones cartográficas adoptadas por los diferentes concebidores de globos virtuales. Documenté también las funcionalidades técnicas de cada interfaz (navegación 3D, superposición de capas temáticas, acceso a los datos subyacentes), las fuentes de datos movilizadas, así como los aspectos de ergonomía y accesibilidad.
                               <br><br>
                               Esta experiencia me permitió desarrollar una pericia en el análisis crítico de las herramientas de geovisualización y contribuir a un proyecto de investigación innovador en la intersección de la geografía, la informática y la semiología gráfica.`,
        
        project_mimizan_title: "Estudio previo de la erosión costera en Mimizan Plage",
        project_mimizan_text: `Durante mi práctica en el CNRS, colaboré con Solnage Pupier en un estudio previo sobre la erosión costera en Mimizan Plage, en el marco de un proyecto de investigación más amplio sobre el impacto del oleaje infragravitario en el litoral atlántico francés.
                               <br><br>
                               Esta misión se articuló en torno a dos jornadas de campo intensivas en Mimizan, durante las cuales realicé entrevistas con diferentes actores-clave del territorio: funcionarios municipales responsables del ordenamiento del litoral, eruditos locales poseedores de la memoria histórica de la región, así como Claire Steimer (Conservadora del patrimonio en la Región Nueva Aquitania). Estos intercambios pluridisciplinarios me permitieron reconstituir el histórico detallado de la evolución del curso de agua de Mimizan, un sistema hoy fuertemente antropizado y cuyas transformaciones sucesivas modificaron considerablemente la dinámica costera local. Mimizan habiendo sido seleccionado como sitio piloto para validar las herramientas metodológicas del proyecto, este trabajo preparatorio era esencial para comprender las interacciones entre ordenamientos humanos y procesos naturales de erosión.
                               <br><br>
                               Al final de este estudio, tuve la oportunidad de presentar una restitución de los resultados de nuestras investigaciones ante el conjunto de los funcionarios locales y de los socios institucionales del proyecto, permitiendo así compartir nuestras conclusiones y contribuir a la reflexión colectiva sobre la gestión del litoral.`,
        
        // Trabajos Académicos
        academic_icu_title: "Cartografía de la vulnerabilidad urbana frente a las ICU en el Tarn",
        academic_icu_text: `Este proyecto fue realizado en el marco de un encargo para la empresa BAWSALA, representada por la Señora Hanan Jemmal, profesora tutora del proyecto. Desarrollado colectivamente por Maria Achour, Lucie Delaperche, Jérémie Nougier y por mí, este trabajo de Máster 1 SIGMA pretende identificar y cartografiar las zonas urbanas del departamento del Tarn más expuestas a las islas de calor urbanas, analizando simultáneamente la vulnerabilidad de las poblaciones sensibles.
                               <br><br>
                               El desafío de este estudio es doble: por una parte, modelizar la intensidad térmica de las zonas urbanizadas a través de datos satelitales Landsat 8-9 y variables morfológicas (densidad construida, cobertura vegetal, superficies de agua); por otra parte, cruzar estos datos con indicadores demográficos INSEE para identificar las poblaciones más frágiles frente a las olas de calor (niños pequeños, personas mayores, densidad poblacional).
                               <br><br>
                               Mi contribución al proyecto se concentró en dos ejes técnicos esenciales: En dúo, definimos la arquitectura en estrella de la base de datos, establecimos las tablas de asociación entre las diferentes capas geográficas y mejoramos el rendimiento de las consultas espaciales mediante la creación de índices. Paralelamente, asumí la totalidad del desarrollo web: de la generación inicial con QGIS2Web a la personalización avanzada del código HTML/CSS/JavaScript, pasando por la integración de la biblioteca Leaflet.js, creación de leyendas dinámicas, e implementación de las funcionalidades interactivas (filtros municipales, acordeón de capas, modo pantalla completa).
                               <br><br>
                               El resultado final se presenta bajo la forma de un sitio cartográfico permitiendo explorar visualmente los datos térmicos, demográficos y las zonas de riesgo para los municipios de Albi, Castres y Puylaurens. Esta herramienta de apoyo a la decisión ofrece a los electos y actores territoriales una visión clara de las prioridades de intervención en materia de adaptación climática.`,
        
        academic_indre_title: "Cartografía de las infraestructuras hidráulicas",
        academic_indre_text: `Esta cartografía de las infraestructuras hidráulicas y de la hidrografía del Corazón de Brenne en Indre, realizada en el marco de un ejercicio pedagógico de cartografía técnica pretendiendo tratar un conjunto de datos específico proveniente de la BD TOPO del IGN.
                               <br><br>
                               El trabajo consiste en una representación sintética de la red hidrográfica y de los equipamientos de gestión del agua en el territorio de la Comunidad de Comunas del Corazón de Brenne, evidenciando cuatro cuencas hidrográficas principales (Indre, Claise, Creuse y Suin) a través de una paleta de colores diferenciada. El mapa integra el conjunto de los componentes del sistema hidráulico incluyendo los tramos y superficies hidrográficas, los nudos de confluencia, así como las infraestructuras de gestión (presas, reservorios, fuentes y equipamientos diversos), situando simultáneamente estos elementos en su contexto territorial mediante la delimitación de los municipios. La leyenda estructurada en tres temáticas (organización territorial, red hidrográfica y elementos hidrográficos) permite una lectura jerarquizada de la información, demostrando la capacidad de producir una cartografía técnica profesional respondiendo a los patrones de la geomática aplicada a la gestión del recurso hídrico.`,
        
        academic_ardeche_title: "Dinámica demográfica y desempleo de la Ardèche",
        academic_ardeche_text: `Este trabajo de cartografía temática realizado en el marco del Máster 1 SIGMA pretende evidenciar las dinámicas demográficas y económicas del departamento de la Ardèche en 2021 mediante una representación bivariada cruzando dos variables estadísticas. El mapa combina la población municipal en valor absoluto, visualizada por círculos proporcionales en superficie, y la tasa de desempleo en valor relativo, representada por una discretización colorimétrica en cinco clases según el método de Jenks.
                               <br><br>
                               Los datos provienen de las bases del INSEE (censo 2021 y base histórica de población) y el fondo de mapa del IGN vía Admin-express. La metodología exigió un trabajo de pretratamiento de los datos en Excel para calcular la tasa de desempleo por municipio, luego una integración en QGIS mediante una unión atributiva basada en el código municipal. El análisis del histograma reveló una distribución no normal con una concentración mayoritaria de los valores entre 10 y 20% de tasa de desempleo, justificando la utilización del método de Jenks que respeta las rupturas naturales de densidad.
                               <br><br>
                               La maquetación cartográfica fue finalizada en Affinity Designer tras exportación desde QGIS, permitiendo afinar la leyenda y aplicar efectos gráficos, particularmente la adición de un fondo de mapa gris ESRI ligeramente desenfocado para mejorar la estética general y hacer resaltar los colores vivos de los círculos proporcionales.`,
        
        academic_cadaujac_title: "Cartografía de la ocupación de los suelos en Cadaujac: Metodología mixta raster-vector",
        academic_cadaujac_text: `Este estudio pretende producir una cartografía de alta resolución de la ocupación de los suelos del municipio de Cadaujac (Gironde) movilizando un enfoque metodológico híbrido combinando datos raster y vectoriales. Las bases de datos movilizadas son la OCS CesBio (raster, resolución 10m×10m) para la ocupación del suelo y la BD Topo IGN (vectorial) para los tramos de carretera.
                               <br><br>
                               El trabajo se apoya en la poligonización de la capa raster OCS CesBio, seguida de una sustracción de las superficies viarias calculadas a partir de la BD Topo para corregir los errores de clasificación automática. Las anchuras de carreteras no registradas fueron estimadas a 1,5 metros de radio por hipótesis. La superficie total calculada de Cadaujac es de 15,36 km², próxima al valor oficial INSEE (15,3 km²). La ocupación del suelo revela un dominio de tres categorías: las praderas (4,45 km²), el urbano difuso (3,59 km²) y los bosques de frondosas (2,88 km²), caracterizando un municipio en equilibrio entre urbanización residencial y espacios naturales.
                               <br><br>
                               El estudio evidencia las dificultades inherentes a los datos raster para representar las continuidades lineales (carreteras, infraestructuras). La clasificación automática confunde frecuentemente carreteras, zonas industriales y urbano difuso debido a firmas espectrales semejantes. Además, la resolución pixélica (10m×10m) atribuye la ocupación mayoritaria al píxel, enmascarando así las ocupaciones minoritarias presentes en los bordes de las carreteras (setos, vegetación).
                               <br><br>
                               Esta metodología demuestra el interés de un enfoque multi-fuentes para afinar la cartografía de la ocupación de los suelos subrayando simultáneamente los límites técnicos de las clasificaciones automáticas raster para los elementos lineales y las zonas de ocupación mixta.`,
        
        academic_gironde_title: "Análisis comparativo de las BDD de ocupación de los suelos en la Gironde",
        academic_gironde_text: `Este estudio compara dos bases de datos de ocupación de los suelos en la Gironde: PIGMA (regional, resolución 1 hectárea) y Corine Land Cover (europea, resolución 25 hectáreas).
                               <br><br>
                               El análisis incide sobre el tejido urbano discontinuo, los viñedos y los bosques de frondosas. Los resultados revelan desvíos significativos: la CLC presenta superficies superiores para lo urbano (67 967 ha contra 52 018) y los viñedos (156 076 ha contra 130 595), mientras que la PIGMA detecta más del doble de bosques de frondosas (125 053 ha contra 60 170). Estas divergencias se explican por la diferencia de resolución espacial. La generalización importante de la CLC (25 hectáreas mínimo) engloba más territorios adyacentes, sobrestimando lo urbano y los viñedos. Inversamente, la PIGMA capta los pequeños bosques de menos de 25 hectáreas que la CLC no puede aislar.
                               <br><br>
                               El estudio de caso sobre Ludon-Médoc ilustra estas diferencias: la CLC produce un mapa homogéneo y legible, mientras que la PIGMA revela un recorte preciso y fragmentado. Este análisis demuestra que la elección de la base de datos debe corresponder a la escala de estudio: CLC para los análisis regionales o europeos, PIGMA para los estudios locales necesitando una alta precisión.`,
        
        academic_moselle_title: "Análisis espacial de la dependencia económica en la Mosela",
        academic_moselle_text: `Este estudio cartográfico analiza la repartición de las poblaciones inactivas (menos de 14 años y más de 60 años) en el departamento de la Mosela a partir de los datos del censo INSEE 2021.
                               <br><br>
                               Tres tipos de representaciones fueron movilizados: mapas coropléticos de ratio, mapa de la tasa de dependencia económica y mapa en cuadrante. Los resultados revelan una fuerte polarización territorial según un eje oeste-este. La población de menos de 14 años se concentra en un eje vertical noroeste, alrededor de las grandes aglomeraciones de Metz, Thionville y Forbach, zonas atractivas para los activos. El noroeste beneficia igualmente de la proximidad luxemburguesa, generando importantes migraciones pendulares transfronterizas. Inversamente, la población de más de 60 años se concentra en el este y sureste del departamento, zonas rurales alejadas de los polos urbanos y próximas al Parque regional de los Vosgos y de Alemania. El mapa de la tasa de dependencia económica confirma esta dicotomía: el oeste presenta una tasa débil (territorio dinámico) gracias a la concentración de activos, mientras que el este presenta una tasa elevada, señal de un territorio menos dinámico económicamente.
                               <br><br>
                               El mapa en cuadrante sintetiza estas observaciones revelando que el eje noroeste concentra los municipios con sobrerrepresentaciones de las dos clases de edad respecto a la media departamental. Este estudio concluye que la Mosela es un departamento polarizado por la aglomeración mesina y las ciudades transfronterizas, con una repartición desigual de las poblaciones inactivas según una ruptura oeste-este marcada.`,
        
        // Página Experiencias
        experiences_title: "Mis Experiencias Profesionales",
        exp_cnrs_title: "Operador SIG - CNRS UMR PASSAGES 5319 – Polo ARD",
        exp_cnrs_date: "Junio 2025 - Agosto 2025",
        exp_cnrs_text: `Realicé una práctica de Operador SIG en el CNRS UMR PASSAGES 5319, específicamente en el polo ARD (Análisis y Representación de Datos). Bajo la supervisión de expertos como Olivier Pissoat (Cartógrafo) y Grégoire Lecampion (Estadístico), contribuí a varios proyectos de investigación. Mis misiones principales incluían un estudio estadístico profundo en R para el coloquio de geografía Geopoint, resultando en informes cartográficos y estadísticos. Participé igualmente en el proyecto Spherographia del CNRS, centrado en el estudio y análisis de los globos virtuales. Finalmente, colaboré con Solange Pupiers en un estudio de terreno relativo al impacto y análisis espacial de la erosión costera en Mimizan Plage. <br><br> Proyecto Spherographia: <a href="https://spherographia.cnrs.fr/?Projet" target="_blank">Descubrir el proyecto</a>`,
        exp_anaa1_title: "Acompañamiento de delegaciones europeas - ANAA",
        exp_anaa1_date: "Junio 2024",
        exp_anaa1_text: `En el marco del proyecto Erasmus consagrado a la transición agroecológica en viticultura, tuve la oportunidad de acompañar varias delegaciones europeas. Esta experiencia me permitió favorecer los intercambios interculturales, valorizar las prácticas sostenibles en el sector vitícola y contribuir a la difusión de conocimientos sobre los desafíos de la transición ecológica.`,
        
        exp_anaa2_title: "Apoyo logístico - ANAA",
        exp_anaa2_date: "Mayo 2021",
        exp_anaa2_text: `Durante la edición 2021 de Bordeaux Fête le Vin, presté un apoyo logístico al Mercado local de productores. Esta misión me permitió contribuir a la valorización de los productos del terruño y apoyar la organización de un evento de envergadura regional.`,
        
        exp_acto_title: "Acompañamiento de proyectos - Acto (Acciones y Territorios – Lisboa)",
        exp_acto_date: "2016 – 2017",
        exp_acto_text: `Entre 2016 y 2017, participé de manera recurrente en el acompañamiento de proyectos de cooperación europea y de delegaciones internacionales. Aseguré igualmente misiones de traducción entre el francés y el portugués, facilitando la comunicación entre los actores europeos y reforzando el buen desarrollo de los intercambios.`,
        
        exp_student_title: "Empleos estudiantiles (Francia - Portugal)",
        exp_student_date: "2017 – 2025",
        exp_student_text: "",
        exp_student_objective: "Objetivo:",
        exp_student_tasks: "Tareas:",
        exp_student_job1: "Empleado de libre servicio – U Express, Burdeos",
        exp_student_job1_objective: "financiar los estudios desarrollando simultáneamente autonomía, rigor y sentido de servicio.",
        exp_student_job1_tasks: "reposición de estanterías, gestión de stocks, recepción y orientación de clientes, respeto de los procedimientos y plazos.",
        exp_student_job2: "Empleado polivalente – Carrefour City, Burdeos",
        exp_student_job2_objective: "adquirir una experiencia polivalente en la gran distribución y reforzar la relación cliente.",
        exp_student_job2_tasks: "reposición de estanterías, caja, inventario, organización del espacio de venta.",
        exp_student_job3: "Empleado estacional – La Nueva Librería Francesa, Lisboa",
        exp_student_job3_objective: "participar en la gestión cotidiana de un comercio cultural y desarrollar un sentido agudo de recepción al cliente.",
        exp_student_job3_tasks: "recepción y asesoramiento de la clientela, caja, gestión de pedidos, organización y funcionamiento de la tienda.",
        exp_student_job4: "Peón en obra – Empresa FBTECH (Testigo y demolición)",
        exp_student_job4_objective: "adquirir una experiencia técnica en un ambiente exigente y físico.",
        exp_student_job4_tasks: "asistencia en obra, testigo, demolición, manejo.",
        exp_student_job5: "Peón en obra – Empresa Tangente Proeza",
        exp_student_job5_objective: "descubrir el medio de la construcción y desarrollar competencias de trabajo en equipo en obra.",
        exp_student_job5_tasks: "limpieza de obra, ayuda a los diferentes oficios, respeto de las instrucciones de seguridad.",
        exp_student_job6: "Empleado polivalente – Intermarché",
        exp_student_job6_objective: "primera experiencia profesional, aprendizaje de las bases del trabajo en comercio.",
        exp_student_job6_tasks: "reposición de estanterías, caja, inventario.",
        
        // Página Formaciones
        formations_title: "Mis Formaciones",
        form_master_title: "Máster 1 - SIGMA - INP ENSAT, Universidad Jean Jaurès",
        form_master_date: "2025 - 2026",
        form_master_text: `Actualmente en el primer año del Máster SIGMA (Sistemas de Información Geográfica y Oficios de la Planificación), adquiero competencias sólidas en el tratamiento, análisis y valorización de datos espaciales. Mi formación me permite desarrollar una pericia técnica en ingeniería de bases de datos espaciales, teledetección, algoritmia y programación (SQL, HTML, Python). Profundizo igualmente mis conocimientos en programación SIG avanzada, visualización de datos y webmapping, en una perspectiva de aplicación multidisciplinaria.`,
        
        form_gaer_title: "Licenciatura 3 GAER - Universidad Bordeaux Montaigne",
        form_gaer_date: "2022 - 2025",
        form_gaer_text: `La formación Geografía, Planificación, Ambiente y Recursos me permitió adquirir una comprensión profunda de las dinámicas territoriales y ambientales, combinando un enfoque teórico riguroso con métodos de análisis aplicado. Desarrollé competencias sólidas en geografía digital, cartografía y geomática (SIG), así como dominio de análisis estadísticos bi y multivariados para el tratamiento e interpretación de datos espaciales. La formación me permitió también abordar la geografía social y física, los diagnósticos de riesgos ambientales, y la gestión de datos cuantitativos y cualitativos, en una lógica multidisciplinaria vinculando planificación del territorio, observación de medios y apoyo a la decisión.`,
        
        form_droit_title: "Licenciatura 2 Derecho - Universidad Bordeaux Montesquieu",
        form_droit_date: "2019 - 2022",
        form_droit_text: `Esta formación me permitió adquirir una sólida cultura jurídica y una comprensión profunda del funcionamiento político, económico y administrativo del Estado. Me aportó igualmente un rigor metodológico esencial, tanto en la investigación y análisis de textos jurídicos como en la redacción argumentada. Desarrollé competencias en organización del trabajo, gestión del tiempo y espíritu de síntesis, cualidades transferibles a la conducción de proyectos y gestión de datos en contextos administrativos y territoriales complejos.`,
        
        form_bac_title: "Bachillerato económico y social - Liceo Francés Charles Lepierre - Lisboa",
        form_bac_date: "2010 - 2019",
        form_bac_text: `Mención Bien. Especialidad ciencia política, opción DNL. Habiendo seguido mi escolaridad en el liceo y el colegio francés de Lisboa, evolucioné en un entorno multicultural y plurilingüe. Esta experiencia me permitió dominar fluidamente el francés, el portugués, el español y el inglés, y desarrollar una fuerte capacidad de adaptación así como una apertura internacional en mi manera de comunicar y trabajar.`,
        
        // Página Competencias
        competences_title: "Mis Competencias",
        comp_lang_title: "Competencias lingüísticas",
        comp_lang_globe_title: "Zonas lingüísticas dominadas",
        comp_lang_fr: "Francés",
        comp_lang_fr_level: "Lengua materna",
        comp_lang_pt: "Portugués",
        comp_lang_pt_level: "Lengua materna",
        comp_lang_en: "Inglés",
        comp_lang_en_level: "Bilingüe",
        comp_lang_es: "Español",
        comp_lang_es_level: "Fluido",
        comp_tech_title: "Competencias técnicas",
        comp_human_title: "Competencias humanas",
        
        // Competencias técnicas
        skill_html_css: "HTML/CSS",
        skill_sql: "SQL",
        skill_python: "Python",
        skill_qgis: "QGIS",
        skill_sgbd: "SGBD",
        skill_pgadmin: "PgAdmin4",
        skill_magrit: "Magrit",
        skill_webmapping: "Webmapping",
        skill_arcgis: "ArcGIS Online/Pro",
        skill_illustrator: "Adobe Illustrator",
        skill_affinity: "Affinity",
        skill_rstudio: "RStudio",
        skill_remote: "Teledetección",
        skill_otb: "OTB",
        skill_stats: "Análisis estadístico",
        skill_diagnostics: "Diagnósticos de riesgos",
        
        // Competencias humanas
        skill_polyvalent: "Polivalente",
        skill_autonome: "Autónomo",
        skill_organise: "Organizado",
        skill_equipe: "Trabajo en equipo",
        skill_adaptation: "Adaptación",
        skill_esprit: "Espíritu de equipo",
        skill_rigueur: "Rigor",
        skill_apprendre: "Voluntad de aprender",
        
        // Botones y enlaces
        button_pdf: "📄 Consultar el PDF",
        button_webmapping: "🌐 Acceder al webmapping",
        link_discover_project: "Descubrir el proyecto",
        
        // Lightbox PDF
        pdf_zoom_out: "− Zoom",
        pdf_zoom_in: "+ Zoom",
        pdf_reset: "↻ Reinicializar",
        pdf_page: "Página",
        pdf_prev: "◀ Anterior",
        pdf_next: "Siguiente ▶",
        
        // Footer
        footer_text: "Todos los derechos reservados"
    }
};

// Langue par défaut
let currentLang = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Mettre à jour les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour le bouton actif
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Charger la langue sauvegardée au démarrage
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);
});

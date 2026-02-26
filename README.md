# Portfolio — Djouadi Pablo

Portfolio personnel présentant mon parcours, mes projets et mes compétences en géomatique. Le site propose plusieurs sections — Accueil, Portfolio, et CV — avec un design épuré en noir et blanc.

On y retrouve deux globes interactifs, une visionneuse de documents intégrée, et l'ensemble du contenu est disponible en quatre langues : français, anglais, portugais et espagnol. Le site est conçu pour être consulté aussi bien sur ordinateur que sur mobile.

Site en ligne : [pablodjouadi.github.io](https://pablodjouadi.github.io)

## Stack
HTML · CSS · JavaScript · Globe.gl · PDF.js

## Langues disponibles
Français · Anglais · Portugais · Espagnol

### Description

Site web statique conçu comme un CV interactif et un portfolio professionnel. Il s'adresse aux recruteurs, collaborateurs et partenaires souhaitant découvrir mon profil de géomaticien en formation.

### Fonctionnalités

- Navigation par pages : — Accueil, Portfolio, Expériences, Formations, Compétences
- Support multilingue : — Français 🇫🇷, Anglais 🇬🇧, Portugais 🇵🇹, Espagnol 🇪🇸
- Globe 3D interactif : (Accueil) — Animation des villes étapes de mon parcours (Pertuis → Lisbonne → Bordeaux → Toulouse)
- Globe linguistique : (Compétences) — Visualisation des zones géographiques des langues maîtrisées
- Visionneuse PDF intégrée : — Consultation des rendus académiques directement dans le navigateur (zoom, navigation par pages)
- Lightbox images : — Affichage en plein écran des cartes et visuels
- Formulaire de contact : — Ouverture du client mail avec pré-remplissage
- Accordéon contact : — Section pliable/dépliable
- Design responsive : — Adapté mobile, tablette et desktop
- Menu déroulant : — Sous-menu CV avec fermeture automatique au clic extérieur

### Structure du projet

portfolio/
│
├── index.html              
├── style.css               
├── script.js               
├── translations.js         
│
├── images/                 
│
└── pdfs/                   

### Technologies utilisées

| HTML5 / CSS3 | Structure et mise en page |
| JavaScript (Vanilla) | Interactivité, navigation, traductions |
| [Globe.gl](https://globe.gl/) | Globes 3D interactifs |
| [TopoJSON](https://github.com/topojson/topojson) | Données géographiques du globe linguistique |
| [PDF.js](https://mozilla.github.io/pdf.js/) v3.11 | Visionneuse PDF intégrée |
| [flagcdn.com](https://flagcdn.com/) | Drapeaux du sélecteur de langue |

# Pages du site :

## Accueil
Présentation avec photo de profil, texte de présentation, globe animé des villes du parcours, et section contact accordéon.

### Portfolio

Deux sections :
- Projets de Recherche
- Rendus Académiques

Curriculum Vitae : 
- Expériences 
- Formations
- Compétences

### Déploiement

Le site est déployé via **GitHub Pages** depuis la branche `main`.

###  Système de traductions (i18n)

Les traductions sont gérées dans `translations.js` via un objet JavaScript structuré par langue. Chaque élément HTML traduit porte un attribut `data-i18n` correspondant à une clé de traduction.

La langue sélectionnée est persistée dans le `localStorage` du navigateur.

##  Auteur

Djouadi Pablo
Master SIGMA — INP ENSAT / Université Toulouse Jean Jaurès  
pablodjouadisoulard@gmail.com  
[LinkedIn](https://www.linkedin.com/in/pablo-djouadi-399723352)

*© 2026 Djouadi Pablo — Tous droits réservés*

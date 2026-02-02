// MENU DÉROULANT
function toggleDropdown(element) {
    const dropdown = element.parentElement;
    dropdown.classList.toggle('open');
}

document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});

// AFFICHAGE DES PAGES
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) selectedPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// GLOBE ACCUEIL - VILLES
function initGlobe() {
    if (typeof Globe === 'undefined') { 
        setTimeout(initGlobe, 100); 
        return; 
    }
    
    const container = document.getElementById('villes-globe-container');
    if (!container) return;
    
    const cities = {
        pertuis:  { lat: 43.6936, lng: 5.5020,  name: "Pertuis",   visible: true,  labelOffset: -0.5 },
        lisbonne: { lat: 38.7223, lng: -9.1393, name: "Lisbonne", visible: false, labelOffset: 0 },
        bordeaux: { lat: 44.8378, lng: -0.5792, name: "Bordeaux", visible: false, labelOffset: 3.3 },
        toulouse: { lat: 43.6045, lng: 1.4442,  name: "Toulouse", visible: false, labelOffset: 0 }
    };
    
    const flows = [
        { start: cities.pertuis,  end: cities.lisbonne },
        { start: cities.lisbonne, end: cities.bordeaux },
        { start: cities.bordeaux, end: cities.toulouse }
    ];
    
    const cityArray = () => Object.values(cities);
    
    const globe = Globe()
        .width(container.offsetWidth)
        .height(container.offsetHeight)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('#ffffff')
        .arcsData([])
        .arcColor(() => ['white','white'])
        .arcDashLength(0.7)
        .arcDashGap(0.3)
        .arcDashAnimateTime(2000)
        .arcStroke(0.6)
        .labelsData(cityArray())
        .labelLat(d => d.lat + (d.labelOffset || 0))
        .labelLng(d => d.lng)
        .labelText(d => d.name)
        .labelColor(d => d.visible ? 'white' : 'rgba(255,255,255,0)')
        .labelSize(1.6)
        .labelResolution(4)
        .pointsData(cityArray())
        .pointLat(d => d.lat)
        .pointLng(d => d.lng)
        .pointColor(d => d.visible ? 'white' : 'rgba(255,255,255,0)')
        .pointRadius(d => d.visible ? 0.4 : 0)
        (container);
    
    globe.pointOfView({ lat: cities.pertuis.lat, lng: cities.pertuis.lng, altitude: 1.6 });
    
    function refreshLabelsAndPoints() {
        globe.labelsData(cityArray());
        globe.pointsData(cityArray());
    }
    
    function showLabelFor(cityObj, show = true) { 
        cityObj.visible = show; 
        refreshLabelsAndPoints(); 
    }
    
    showLabelFor(cities.pertuis, true);
    
    let index = 0;
    function playAnimation() {
        const f = flows[index];
        globe.arcsData([{ 
            startLat: f.start.lat, 
            startLng: f.start.lng, 
            endLat: f.end.lat, 
            endLng: f.end.lng 
        }]);
        
        const midLat = (f.start.lat + f.end.lat) / 2;
        const midLng = (f.start.lng + f.end.lng) / 2;
        globe.pointOfView({ lat: midLat, lng: midLng, altitude: 1.8 }, 1200);
        
        Object.values(cities).forEach(c => c.visible = false);
        f.start.visible = true; 
        f.end.visible = true;
        refreshLabelsAndPoints();
        
        index = (index + 1) % flows.length;
        setTimeout(playAnimation, 2500);
    }
    
    setTimeout(playAnimation, 900);
}

// GLOBE LINGUISTIQUE
function initLanguagesGlobe() {
    if (typeof Globe === 'undefined' || typeof topojson === 'undefined') { 
        setTimeout(initLanguagesGlobe, 100); 
        return; 
    }
    
    const container = document.getElementById('languages-globe-container');
    if (!container) return;

    const redCountries = new Set([
        // Francophonie
        '056','204','854','108','120','124','174','178','180','384','262','250','266',
        '324','332','442','450','466','492','562','140','646','686','690','756','148',
        '768','548',
        // Lusophonie
        '024','076','132','624','508','620','678','626',
        // Commonwealth
        '710','028','036','044','052','084','072','212','748','242','270','288','308',
        '328','356','372','388','404','296','426','430','454','470','480','583','516',
        '520','554','566','800','586','585','598','608','662','659','670','090','882',
        '694','702','728','834','776','780','798','826','894','716','840',
        // Hispanophonie
        '032','068','152','170','188','192','214','218','724','320','340','484','558',
        '591','600','604','222','858','862',
        // Maghreb
        '504','012','788'
    ]);

    const topoURL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

    // Détecter si on est sur mobile
    const isMobile = window.innerWidth <= 480;
    const defaultAltitude = isMobile ? 2.2 : 1.7;

    const languagesGlobe = Globe()
        .width(container.offsetWidth)
        .height(container.offsetHeight)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('#ffffff')
        .arcsData([])
        .labelsData([])
        .pointsData([])
        (container);

    languagesGlobe.pointOfView({ lat: 20, lng: 0, altitude: defaultAltitude });

    fetch(topoURL)
        .then(r => r.json())
        .then(topo => {
            const countries = topojson.feature(topo, topo.objects.countries).features;
            languagesGlobe
                .polygonsData(countries)
                .polygonCapColor(f => redCountries.has(f.id) ? "rgba(200,0,0,0.85)" : "rgba(40,40,40,0.55)")
                .polygonSideColor(() => "rgba(0,0,0,0.25)")
                .polygonStrokeColor(() => "rgba(255,255,255,0.4)")
                .polygonAltitude(0.01)
                .polygonsTransitionDuration(0)
                .polygonLabel(f => `${f.properties?.name || "Inconnu"} (ID: ${f.id})`);
        });
}

// ACCORDÉON CONTACT
function toggleContact() { 
    document.getElementById('contactAccordion').classList.toggle('active'); 
}

// EMAIL
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) { 
        alert('Veuillez remplir tous les champs obligatoires.'); 
        return; 
    }
    
    const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:pablodjouadisoulard@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
    alert('Votre client mail va s\'ouvrir. Veuillez vérifier et envoyer le message.');
}

// LIGHTBOX pour affichage en grand des images
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêche le scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Réactive le scroll
}

// Fermer la lightbox avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
        closePDFLightbox();
    }
});

// LIGHTBOX PDF avec PDF.js - Variables globales
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.2; // Zoom réduit par défaut
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// Configuration de PDF.js
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Fonction pour rendre une page
function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        
        const outputScale = window.devicePixelRatio || 1;
        
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        const transform = outputScale !== 1 
            ? [outputScale, 0, 0, outputScale, 0, 0] 
            : null;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
            transform: transform
        };

        const renderTask = page.render(renderContext);
        renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    document.getElementById('page-num').textContent = num;
    updateNavigationButtons();
}

// Mettre à jour l'état des boutons de navigation
function updateNavigationButtons() {
    document.getElementById('prev-page').disabled = (pageNum <= 1);
    document.getElementById('next-page').disabled = (pageNum >= pdfDoc.numPages);
}

// Fonction pour afficher la page suivante
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// Page précédente
function previousPage() {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
}

// Page suivante
function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
}

// Zoom +
function zoomIn() {
    scale += 0.25;
    queueRenderPage(pageNum);
}

// Zoom -
function zoomOut() {
    if (scale <= 0.5) return;
    scale -= 0.25;
    queueRenderPage(pageNum);
}

// Réinitialiser le zoom
function resetZoom() {
    scale = 1.2;
    queueRenderPage(pageNum);
}

// Ouvrir la lightbox PDF
function openPDFLightbox(pdfPath) {
    const pdfLightbox = document.getElementById('pdf-lightbox');
    
    const isLocal = window.location.protocol === 'file:';
    
    if (isLocal) {
        alert('Mode local détecté.\n\nPDF.js ne fonctionne pas en local (file://).\n\nVeuillez utiliser un serveur local (ex: Live Server) ou héberger votre site.\n\nOuverture du PDF dans un nouvel onglet...');
        window.open(pdfPath, '_blank');
        return;
    }
    
    if (typeof pdfjsLib === 'undefined') {
        alert('Erreur : La bibliothèque PDF.js n\'est pas chargée.');
        console.error('PDF.js n\'est pas disponible');
        return;
    }

    console.log('Tentative de chargement du PDF:', pdfPath);

    const loadingTask = pdfjsLib.getDocument({
        url: pdfPath,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true,
    });

    loadingTask.promise.then(function(pdfDoc_) {
        console.log('PDF chargé avec succès, nombre de pages:', pdfDoc_.numPages);
        pdfDoc = pdfDoc_;
        document.getElementById('page-count').textContent = pdfDoc.numPages;
        pageNum = 1;
        scale = 1.2; // Zoom réduit par défaut
        renderPage(pageNum);
        pdfLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }).catch(function(error) {
        console.error('Erreur détaillée lors du chargement du PDF:', error);
        alert('Impossible de charger le PDF.\n\nChemin: ' + pdfPath + '\n\nErreur: ' + error.message + '\n\nVérifiez:\n1. Que le fichier existe\n2. Que le chemin est correct\n3. La console (F12) pour plus de détails\n\nOuverture dans un nouvel onglet...');
        window.open(pdfPath, '_blank');
    });
}

// Fermer la lightbox PDF
function closePDFLightbox() {
    const pdfLightbox = document.getElementById('pdf-lightbox');
    pdfLightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas ? canvas.getContext('2d') : null;
    
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    pdfDoc = null;
    pageNum = 1;
    scale = 1.2;
}

// INITIALISATION
document.addEventListener('DOMContentLoaded', function() {
    showPage('accueil');
    setTimeout(initGlobe, 500);
    
    const observer = new MutationObserver(function() {
        const competencesPage = document.getElementById('competences');
        if (competencesPage && competencesPage.classList.contains('active')) {
            setTimeout(initLanguagesGlobe, 300);
        }
    });
    
    const competencesPage = document.getElementById('competences');
    if (competencesPage) {
        observer.observe(competencesPage, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
});

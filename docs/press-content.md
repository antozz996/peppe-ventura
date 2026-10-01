# Materiali stampa

La sola pagina `/press/` usa `content/press.ts`. Le pagine già approvate non sono state modificate.

## Biografie
Inserire i testi ricevuti in `bios[].text` e impostare `approved: true` solo dopo approvazione. La lunghezza effettiva sostituisce quella prevista. Le tre bio attuali sono bozze editoriali basate sulla ricerca: `verified: true` consente copia e download TXT, mantenendo esplicita la dicitura da approvare. Impostare `approved: true` solo dopo la revisione dell’autore. Se la Clipboard API non è disponibile compare un campo selezionabile per copia manuale. Nessuna bio definitiva è attualmente pubblicata.

## Fotografie
Ogni asset contiene id, titolo, alt, categoria, preview e srcset, file da scaricare, dimensioni, orientamento, fotografo e note. Gli originali JPG forniti sono copiati senza alterazioni in `public/press/photos/`. Per il ritratto davanti al sipario e il ritratto con libro è disponibile solo il file WebP già presente nel sito: il download è indicato come versione web. Non è presentato come HD.

Le categorie Eventi e Backstage sono predisposte ma non contengono immagini. I crediti sono da confermare. Non aggiungere fotografie generate o materiali riservati.

## Altri materiali
`downloads` accetta esclusivamente file realmente presenti; il PDF resta in preparazione finché manca. Non è disponibile un logo ufficiale. È documentato il Premio San Gennaro World 2025, con collegamento alla fonte ANSA e senza una motivazione inventata. `contacts.pressEmail` e `contacts.management` devono essere compilati solo con riferimenti confermati. La CTA generale conduce alla pagina Contatti esistente.

## Fonti e link
La rassegna contiene Metropolis (5 agosto 2025), ANSA (26 settembre 2025) e Napoli Magazine (21 gennaio 2025). Le fonti delle bio comprendono COMICON, Rogiosi, Teatro Cilea e TicketOne. Il dossier dettagliato è in `docs/press-research-2026-10-01.md`. Per Caro prof ti scrivo… si conserva il 2018 dell’editore, anziché il 2019 della scheda COMICON. Aggiungere solo articoli esistenti con titolo, data, testata e URL reali. I progetti linkano allo spettacolo e al libro reali già presenti, oltre alla pagina Video.

## SEO e navigazione
Canonical, Open Graph, Twitter, Person, WebPage e BreadcrumbList sono implementati. L’indicizzazione segue `site.production`; l’anteprima rimane noindex. La pagina è nella sitemap. Non viene aggiunta una voce al menu o alle pagine approvate: accesso diretto `/press/`.

## Analytics
Eventi predisposti via CustomEvent `peppe:analytics`, senza script esterni: press_bio_copy, press_photo_download, press_kit_download, press_article_click, press_project_click, press_contact_click. I download sono link nativi senza caricamento preventivo degli originali.

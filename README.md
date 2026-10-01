# Peppe Ventura — sito ufficiale

Versione portabile per **GitHub e Vercel**, preparata dal progetto approvato il 1 ottobre 2026. Le pagine e gli asset visivi sono conservati. Il runtime di anteprima è sostituito dai comandi standard di Next.js; non sono inclusi credenziali o collegamenti privati dell’ambiente precedente.

## Avvio e build

Node.js 22 e pnpm 10. Su Vercel il package manager viene rilevato dal lockfile, senza override del comando di installazione.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
pnpm start
```

## GitHub

Repository: [antozz996/peppe-ventura](https://github.com/antozz996/peppe-ventura), branch `main`. Il repository creato dall’utente è pubblico. Questa versione importa il progetto completo preservando il commit iniziale. `node_modules`, `.next`, file `.env` e credenziali sono esclusi dal caricamento.

## Vercel

Importare il repository GitHub nel team desiderato. Framework: **Next.js**. Root directory: radice del repository. Lasciare Build Command, Install Command e Output Directory ai valori predefiniti del framework. Il lockfile consente a Vercel di rilevare pnpm; un override generico del comando di installazione può selezionare una versione precedente non compatibile.

1. Impostare `NEXT_PUBLIC_SITE_URL` sul dominio realmente assegnato, con `https://` e senza slash finale. Se assente su Vercel, viene utilizzato `VERCEL_PROJECT_PRODUCTION_URL`; in locale il fallback è `http://localhost:3000`.
2. Mantenere `SITE_INDEXABLE=false` durante la revisione.
3. Dopo approvazione e collegamento del dominio definitivo, impostare `SITE_INDEXABLE=true` **solo nell’ambiente Production** e ridistribuire. Le preview Vercel rimangono escluse dall’indicizzazione anche se questa variabile viene ereditata.
4. Verificare canonical, Open Graph, `robots.txt` e `sitemap.xml` sul dominio definitivo. Collegare successivamente Search Console.

Le variabili pubbliche usate nei metadati vengono lette durante la build: una modifica richiede un nuovo deployment.

## Contatti

Il form è disattivato per impostazione predefinita. L’endpoint `/api/contact` viene eseguito come funzione Next.js. L’attivazione richiede `CONTACT_FORM_ENABLED=true`, un destinatario HTTPS reale in `CONTACT_DELIVERY_URL`, un token server in `CONTACT_DELIVERY_TOKEN` e una policy valida in `CONTACT_PRIVACY_URL`. Non inserire il token nel client o nel repository. Non impostare questi valori finché il servizio di consegna e l’informativa non sono pronti.

## Pagine presenti

- `/`, `/teatro/`, `/scrivo/`, `/video/`, `/chi-sono/`, `/contatti/`, `/press/`
- `/teatro/chiamami-papa/`, `/libri/l-hai-scelto-tu/`
- Anteprima editoriale `/appunti/anteprima-template/`, sempre esclusa dall’indicizzazione.

Non è implementato un archivio pubblico `/appunti/` con articoli reali. Il file dei contenuti è predisposto, ma vuoto. Non sono presenti un CMS collegato o una newsletter operativa.

## Press e contenuti

I dati modificabili sono in `content/`. Le bio Press sono **bozze da approvare**, marcate come tali anche nei TXT scaricabili. La ricerca e le fonti sono in `docs/press-research-2026-10-01.md`; le istruzioni sono in `docs/press-content.md`.

La mail ufficiale confermata è info@peppeventura.it, pubblicata in Contatti e Press. Restano da confermare il riferimento management, crediti e condizioni d’uso delle fotografie, originali HD dei due ritratti in versione web e press kit definitivo. Non vengono generati download fittizi.

## Stato del trasferimento

Questa versione viene caricata nel repository GitHub indicato sopra. Il deployment Vercel non è ancora stato creato. Il sito attuale rimane disponibile durante la migrazione. Verificare la nuova distribuzione prima di cambiare dominio o dismettere quella precedente.

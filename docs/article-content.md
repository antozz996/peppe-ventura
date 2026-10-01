# Contenuti del template Appunti

Il layout è in `components/articles/article-template.tsx`. I contenuti sono dati JSON in `content/articles.json`; la prima consegna lascia l’elenco vuoto. Nessun articolo è stato inventato o pubblicato.

L’anteprima `/appunti/anteprima-template/` usa segnaposto separati dall’elenco degli articoli. È disponibile solo mentre `site.production` è false, non produce schema Article e non entra nella sitemap. Non è un articolo, né una bozza pubblica. L’archivio `/appunti/` non è implementato in questa fase.

## Contratto per un editor o un CMS

`lib/article-model.ts` esporta gli schemi Zod `articleSchema`, `articleBlockSchema` e `articleImageSchema`. Un editor può inviare documenti strutturati conformi a questi schemi, senza cambiare il layout. Non sono ammessi HTML libero o script. Il progetto non include ancora un CMS o una console editoriale: il punto di lettura dei documenti è `content/articles.ts`, sostituibile con l’adapter del CMS scelto.

Per aggiungere contenuti ora si aggiorna esclusivamente il JSON e si pubblica il sito: non occorre cambiare componenti, routing o stili. Ogni record contiene `slug`, `status`, `approved`, `title`, `deck`, `excerpt`, `category`, `tags`, `author`, `publishedAt`, `updatedAt`, `heroImage`, `ogImage`, `content`, `showToc`, `relatedArticles`, `relatedBook`, `relatedShow`, `relatedVideo`, `searchIntent` e `seo`. I campi opzionali assenti non vengono mostrati.

La firma usa sempre `name: "Peppe Ventura"` e `url: "/chi-sono/"`. Le immagini riportano `src`, eventuale `srcSet`, dimensioni reali `width`/`height`, `alt` descrittivo ed eventuale `caption`. `ogImage` può riferirsi a una fotografia editoriale dedicata, idealmente 1200 × 630; senza immagini vengono azzerate quelle ereditate dalla Home.

I blocchi supportati sono:

- `paragraph`: array `text` di segmenti `{text, href?, bold?, italic?}`, con `lead` opzionale.
- `heading`: `level` 2 oppure 3, `id` univoco e `text`.
- `quote`: `text`, eventuali `attribution` e `sourceUrl`. Solo in anteprima può avere `placeholder: true`.
- `image`: oggetto `image`, didascalia inclusa.
- `gallery`: da una a sei immagini; due colonne desktop, una mobile.
- `list`: array `items` di segmenti di testo, `ordered` opzionale.
- `callout`: `title` e segmenti `text`.
- `video`: `title`, URL verificato e `poster`. YouTube carica il player solo dopo un clic, senza autoplay; altre piattaforme aprono il contenuto esterno.

Il tempo di lettura viene calcolato sul testo a 220 parole/minuto. L’indice compare soltanto se richiesto con `showToc`, il contenuto supera 1200 parole e contiene almeno tre H2.

## Revisione e pubblicazione

1. Inserire il testo originale come `draft`, `approved: false`.
2. Passare a `review` per la revisione, senza renderlo raggiungibile sulla route pubblica.
3. Definire tema, domanda, intento e pubblico in `searchIntent`; verificare titoli, fotografie, eventuali citazioni e relazioni editoriali.
4. Dopo approvazione esplicita, usare `published`, `approved: true` e la data reale completa in `publishedAt` (ISO 8601 con fuso orario). Non cambiare artificialmente le date.
5. Usare `updatedAt` soltanto dopo una modifica effettiva. Non può precedere `publishedAt`.

I record `draft` e `review` vengono esclusi dalle route pubbliche, dai correlati e dalla sitemap. La validazione blocca contenuti dichiarati pubblicati ma senza approvazione, data o intento. Gli slug inesistenti e le bozze restituiscono 404; nessun redirect alla Home. Gli articoli pubblicati producono BlogPosting, BreadcrumbList, Open Graph article e canonical. L’indicizzazione resta disabilitata sull’intero ambiente di anteprima; in produzione gli articoli pubblicati diventano index/follow.

`relatedArticles` usa slug reali di articoli pubblicati. Il template completa fino a tre correlati solo con testi della stessa categoria o con tag comuni. `relatedBook` e `relatedShow` usano i record già verificati del sito. Le sezioni senza contenuti reali restano assenti.

## Funzionalità predisposte

La condivisione usa Clipboard API, Web Share API su mobile e link semplici; non carica SDK. Dove la copia non è disponibile, viene mostrato un campo selezionabile. La newsletter rimane disattivata e non raccoglie email finché non viene collegato un servizio effettivo.

Gli eventi `article_view`, `article_scroll_50`, `article_scroll_90`, `article_related_click`, `article_book_click`, `article_show_click`, `article_video_click` e `article_share` usano l’hook locale `peppe:analytics`, senza invii esterni. `newsletter_signup` va emesso soltanto dopo una vera iscrizione riuscita, quando il servizio verrà integrato.

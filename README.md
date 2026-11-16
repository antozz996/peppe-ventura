# Peppe Ventura — sito ufficiale

Sito ufficiale di Peppe Ventura, online su **https://peppeventura.it**. Next.js (App Router) su Vercel.

## Avvio e build

Node.js 22+ e pnpm.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
```

## Deploy

Repository [antozz996/peppe-ventura](https://github.com/antozz996/peppe-ventura), branch `main`. Ogni push su `main` pubblica automaticamente in produzione sul progetto Vercel `peppe-ventura`.

- **Dominio**: `peppeventura.it` (DNS su Aruba → Vercel). `www.peppeventura.it` reindirizza al dominio principale. La posta resta su Aruba: non modificare i record MX, `mail`, `smtp`, `pop3`, `imap`, SPF, DKIM e DMARC.
- **Variabili Production**: `NEXT_PUBLIC_SITE_URL=https://peppeventura.it`, `SITE_INDEXABLE=true`, `CONTACT_FORM_ENABLED=true`, `SMTP_PASSWORD` (sensibile). Le preview Vercel restano escluse dall’indicizzazione.
- Le variabili vengono lette durante la build: dopo una modifica serve un nuovo deploy.

## Form contatti

Il form invia i messaggi per email a `info@peppeventura.it` tramite la casella Aruba (SMTP, `smtps.aruba.it:465`) con `nodemailer`. L’endpoint `/api/contact/` controlla l’origine della richiesta, la lunghezza dei campi e un campo anti-bot; "Rispondi" scrive direttamente a chi ha compilato il form. Facoltativi: `SMTP_USER`, `SMTP_HOST`, `SMTP_PORT`, `CONTACT_TO`, `CONTACT_PRIVACY_URL` (predefinita `/privacy/`). Gli errori di invio compaiono nei log di Vercel come `contact_delivery_failed`.

## Pagine

`/`, `/teatro/`, `/teatro/chiamami-papa/`, `/scrivo/`, `/libri/l-hai-scelto-tu/`, `/video/`, `/contatti/`, `/press/`, `/privacy/`. Il vecchio indirizzo `/chi-sono/` reindirizza alla home.

## Contenuti

I testi e i dati modificabili sono in `content/` (spettacoli, date, libro, video, press, contatti). Le immagini sono in `public/images/` in formato webp; le foto originali fornite da Peppe stanno nella cartella locale `foto/`, esclusa da git. Le fonti della bio press sono in `docs/press-research-2026-10-01.md`.

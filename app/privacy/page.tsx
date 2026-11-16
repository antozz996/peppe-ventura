import type {Metadata} from 'next';
import Link from 'next/link';
import {Header} from '@/components/home/header';
import {contact} from '@/content/contact';
import {site} from '@/content/site';
import './privacy.css';

const updated='16 novembre 2026';
export const metadata:Metadata={
 title:'Informativa privacy | Peppe Ventura',
 description:'Come vengono trattati i dati inviati tramite il form contatti del sito ufficiale di Peppe Ventura.',
 alternates:{canonical:'/privacy/'},
};

export default function PrivacyPage(){return <div className="privacy-page">
 <a className="skip-link" href="#privacy">Vai al contenuto</a>
 <div className="page-wrap">
  <Header currentPath="/privacy/"/>
  <main id="privacy" className="privacy-main">
   <nav className="privacy-breadcrumb" aria-label="Percorso"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">Privacy</span></nav>
   <h1>Informativa privacy</h1>
   <p className="privacy-updated">Ultimo aggiornamento: {updated}</p>
   <p>Questa informativa spiega come vengono trattati i dati personali inviati tramite il form della pagina <Link href="/contatti/">Contatti</Link> del sito {site.origin.replace(/^https?:\/\//,'')}, ai sensi del Regolamento (UE) 2016/679 (GDPR).</p>

   <h2>Titolare del trattamento</h2>
   <p>Giuseppe Ventura (Peppe Ventura). Contatto: <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>

   <h2>Quali dati raccogliamo</h2>
   <p>Nome e cognome, indirizzo email, tipo di richiesta e il testo del messaggio che scegli di inviare. Non raccogliamo altri dati tramite il form e il sito non usa cookie di profilazione né strumenti di analisi.</p>

   <h2>Perché li usiamo e su quale base</h2>
   <p>I dati servono solo a leggere la tua richiesta e a risponderti. La base giuridica è la tua richiesta di essere ricontattato e l’eventuale avvio di una collaborazione (art. 6, par. 1, lett. b GDPR), oltre al legittimo interesse a gestire la corrispondenza (art. 6, par. 1, lett. f GDPR). Non usiamo i dati per newsletter o pubblicità.</p>

   <h2>Chi li tratta</h2>
   <p>Il messaggio arriva per email al titolare, nella casella {contact.email}. Per far funzionare il sito e consegnare l’email ci serviamo di fornitori che agiscono come responsabili del trattamento: Vercel Inc. (hosting del sito) e Aruba S.p.A. (servizio di posta elettronica). Vercel può trattare i dati anche negli Stati Uniti, con le garanzie previste dal GDPR (EU-U.S. Data Privacy Framework o clausole contrattuali standard). I dati non vengono venduti né diffusi.</p>

   <h2>Per quanto tempo</h2>
   <p>Conserviamo i messaggi per il tempo necessario a gestire la richiesta e l’eventuale collaborazione, e comunque non oltre 24 mesi dall’ultimo contatto, salvo obblighi di legge.</p>

   <h2>I tuoi diritti</h2>
   <p>Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento, opporti o riceverli in un formato portabile (artt. 15–22 GDPR), scrivendo a <a href={`mailto:${contact.email}`}>{contact.email}</a>. Hai anche il diritto di presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).</p>

   <h2>Conferimento dei dati</h2>
   <p>Inviare il form è facoltativo. Senza nome, email e messaggio però non possiamo risponderti. In alternativa puoi scrivere direttamente a {contact.email}.</p>
  </main>
 </div>
</div>}

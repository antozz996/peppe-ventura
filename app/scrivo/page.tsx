import type {Metadata} from 'next';
import {Header} from '@/components/home/header';
import {HomeInteractions} from '@/components/home/interactions';
import {Icon} from '@/components/home/icons';
import {site} from '@/content/site';
import {writing,writingNotes} from '@/content/writing';
import './writing.css';

const title='Libri e scrittura di Peppe Ventura | Sito ufficiale';
const url=`${site.origin}/scrivo/`;
export const metadata:Metadata={
 title,description:writing.description,alternates:{canonical:'/scrivo/'},
 openGraph:{title,description:writing.description,url,type:'website',locale:'it_IT',siteName:site.name,images:[{url:writing.hero,width:960,height:1440,alt:writing.heroAlt}]},
 twitter:{card:'summary_large_image',title,description:writing.description,images:[writing.hero]},
};
const structuredData={
 '@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':`${url}#page`,url,name:title,description:writing.description,inLanguage:'it',about:{'@id':`${site.origin}/#person`},breadcrumb:{'@id':`${url}#breadcrumb`},mainEntity:[{'@id':`${url}#libro`},{'@id':`${url}#altri-progetti`}]},
  {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.origin}/`},{'@type':'ListItem',position:2,name:'Scrivo',item:url}]},
  {'@type':'Book','@id':`${url}#libro`,name:writing.book.title,author:{'@type':'Person','@id':`${site.origin}/#person`,name:site.name},image:`${site.origin}${writing.book.image}`,description:writing.book.description,inLanguage:'it',url:`${url}#libro`},
  {'@type':'Book','@id':`${url}#altri-progetti`,name:writing.otherBook.title,author:writing.otherBook.authors.map(name=>({'@type':'Person',name,...(name===site.name?{'@id':`${site.origin}/#person`}:{})})),publisher:{'@type':'Organization',name:writing.otherBook.publisher},inLanguage:'it',url:writing.otherBook.source},
 ],
};

function WritingArrow(){return <span className="writing-arrow"><Icon name="arrow"/></span>}

export default function WritingPage(){return <div className="writing-page">
 <a className="skip-link" href="#scrivo">Vai al contenuto</a>
 <div className="page-wrap">
  <Header currentPath="/scrivo/"/>
  <main id="scrivo">
   <section className="writing-hero" aria-labelledby="writing-title">
    <picture className="writing-portrait"><source type="image/webp" srcSet="/images/writing/portrait-480.webp 480w, /images/writing/portrait-960.webp 960w" sizes="(max-width:767px) 340px, 500px"/><img src={writing.hero} width="960" height="1440" alt={writing.heroAlt} fetchPriority="high" decoding="async"/></picture>
    <div className="writing-intro">
     <nav className="writing-breadcrumb" aria-label="Percorso"><a href="/">Home</a><span aria-hidden="true"> / </span><span aria-current="page">Scrivo</span></nav>
     <h1 id="writing-title"><span className="sr-only">Libri e scrittura di Peppe Ventura</span><span aria-hidden="true">{writing.title}</span></h1>
     <p className="writing-subtitle">{writing.subtitle}</p>
     <p className="writing-description">{writing.introduction}</p>
    </div>
   </section>
   <div className="writing-feature-grid">
    <article className="writing-feature" id="libro" aria-labelledby="book-title">
     <div className="writing-book-image"><img src={writing.book.image} srcSet="/images/writing/cover-300.webp 300w, /images/writing/cover-600.webp 600w" sizes="(max-width:767px) 120px, 220px" width="600" height="800" alt="Copertina originale di L’hai scelto tu, di Peppe Ventura" loading="lazy"/></div>
     <div className="writing-book-copy"><p className="writing-eyebrow">Il mio libro</p><h2 id="book-title">{writing.book.title}</h2><p className="writing-book-subtitle">{writing.book.subtitle}</p><p className="writing-book-description">{writing.book.description}</p>
      <div className="writing-actions"><a className="button primary" href={writing.book.purchase} target="_blank" rel="noopener noreferrer" data-event="book_purchase_scrivo"><Icon name="ticket"/>Acquista il libro<Icon name="arrow"/><span className="sr-only"> su Amazon, in una nuova scheda</span></a><a className="button secondary" href={writing.book.details} data-pending="true" data-event="book_details_scrivo">Scopri di più<Icon name="down"/></a></div>
     </div>
    </article>
    <aside className="writing-project" id="altri-progetti" aria-labelledby="projects-title">
     <a href={writing.otherBook.source} target="_blank" rel="noopener noreferrer" data-event="other_book_scrivo"><div className="writing-project-top"><h2 id="projects-title">Altri libri e <br/>progetti</h2><WritingArrow/></div><h3>{writing.otherBook.title}</h3><p>{writing.otherBook.description}</p><span className="sr-only">Scheda del libro sul sito dell’editore, in una nuova scheda.</span><img src="/images/writing/books.webp" width="145" height="80" alt="" loading="lazy"/></a>
    </aside>
   </div>
   <section className="writing-notes" id="appunti" aria-labelledby="notes-title">
    <div className="writing-section-heading"><h2 id="notes-title">Ultimi articoli</h2><a href="/appunti/" data-pending="true" data-event="all_notes_scrivo">Vedi tutti gli articoli <span aria-hidden="true">→</span></a></div>
    <div className="writing-notes-grid">{writingNotes.map(note=><article className="writing-note" key={note.id}><a href="/appunti/" data-pending="true" data-event={`note_placeholder_${note.id}`} aria-label={`${note.category}: segnaposto per un futuro articolo`}><div className="writing-note-image"><img src={`/images/writing/${note.image}.webp`} width="200" height="69" loading="lazy" alt=""/></div><div className="writing-note-copy"><p className="writing-note-category">{note.category} <span>· Segnaposto</span></p><h3>{note.title}</h3><p className="writing-note-excerpt">{note.excerpt}</p><p className="writing-note-date">{note.dateLabel}</p><WritingArrow/></div></a></article>)}</div>
   </section>
   <section className="writing-quotation" aria-labelledby="quotation-title"><div><h2 id="quotation-title">Citazioni</h2><figure><blockquote><p>“{writing.quotation.text}”</p></blockquote><figcaption>{writing.quotation.context}<br/><a href={writing.quotation.source} target="_blank" rel="noopener noreferrer">{writing.quotation.sourceLabel}</a></figcaption></figure></div><a className="writing-quotation-link" href={writing.quotation.source} target="_blank" rel="noopener noreferrer" aria-label="Leggi l’intervista a Peppe Ventura su Metropolis, in una nuova scheda"><Icon name="arrow"/></a></section>
  </main>
  <HomeInteractions/>
 </div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>
</div>}

import type {Metadata} from 'next';
import {Header} from '@/components/home/header';
import {HomeInteractions} from '@/components/home/interactions';
import {Icon} from '@/components/home/icons';
import {site} from '@/content/site';
import {theatre,theatreDates,otherShows,theatreGallery} from '@/content/theatre';
import './theatre.css';

const title='Peppe Ventura a teatro | Spettacoli e date';
const url=`${site.origin}/teatro/`;
export const metadata:Metadata={
 title,description:theatre.description,alternates:{canonical:'/teatro/'},
 openGraph:{title,description:theatre.description,url,type:'website',locale:'it_IT',siteName:site.name,images:[{url:theatre.hero,width:752,height:1536,alt:theatre.heroAlt}]},
 twitter:{card:'summary_large_image',title,description:theatre.description,images:[theatre.hero]},
};
const structuredData={
 '@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':`${url}#page`,url,name:title,description:theatre.description,inLanguage:'it',about:{'@id':`${site.origin}/#person`},breadcrumb:{'@id':`${url}#breadcrumb`}},
  {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.origin}/`},{'@type':'ListItem',position:2,name:'Teatro',item:url}]},
  ...theatreDates.map(date=>({'@type':'Event',name:`Peppe Ventura — ${theatre.show.title}`,startDate:date.startDate,eventStatus:'https://schema.org/EventScheduled',eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',description:theatre.show.description,url:date.tickets,image:`${site.origin}${theatre.show.image}`,location:{'@type':'Place',name:date.venue,address:{'@type':'PostalAddress',streetAddress:date.streetAddress,addressLocality:date.city,addressCountry:'IT'}},performer:{'@type':'Person',name:site.name,url:`${site.origin}/`}})),
 ],
};

export default function TheatrePage(){return <div className="theatre-page">
 <a className="skip-link" href="#teatro">Vai al contenuto</a>
 <div className="page-wrap">
  <Header currentPath="/teatro/"/>
  <main id="teatro">
   <section className="theatre-hero" aria-labelledby="theatre-title">
    <picture className="theatre-portrait"><source type="image/webp" srcSet="/images/theatre/hero-480.webp 480w, /images/theatre/hero-752.webp 752w" sizes="(max-width:767px) 330px, 700px"/><img src={theatre.hero} width="752" height="1536" fetchPriority="high" decoding="async" alt={theatre.heroAlt}/></picture>
    <div className="theatre-intro">
     <nav className="theatre-breadcrumb" aria-label="Percorso"><a href="/">Home</a><span aria-hidden="true"> / </span><span aria-current="page">Teatro</span></nav>
     <h1 id="theatre-title" aria-label="Peppe Ventura a teatro">{theatre.title}</h1>
     <p className="theatre-subtitle">{theatre.subtitle}</p>
     <p className="theatre-description">{theatre.introduction}</p>
    </div>
   </section>
   <div className="theatre-feature-grid">
    <article className="theatre-feature" aria-labelledby="main-show-title">
     <a className="theatre-show-image" href={theatre.show.image} target="_blank" rel="noopener noreferrer" aria-label="Apri in grande la locandina ufficiale di Chiamami Papà"><img src={theatre.show.image} srcSet="/images/theatre/chiamami-papa-poster-480.webp 480w, /images/theatre/chiamami-papa-poster-960.webp 960w" sizes="(max-width:767px) 160px, 320px" alt={theatre.show.imageAlt} width="960" height="1200"/></a>
     <div className="theatre-show-copy"><h2 id="main-show-title">{theatre.show.title}</h2><p>{theatre.show.description}</p>
      <div className="theatre-actions"><a className="button primary" href={theatre.show.tickets} target="_blank" rel="noopener noreferrer" data-event="ticket_click_teatro"><Icon name="ticket"/>Biglietti<Icon name="arrow"/></a><a className="button secondary" href={theatre.show.details} data-event="show_details_teatro">Scopri di più<Icon name="down"/></a></div>
     </div>
    </article>
    <section className="theatre-dates" id="prossime-date" aria-labelledby="dates-title">
     <div className="theatre-section-heading"><h2 id="dates-title">Prossime date</h2><a href={site.tickets} target="_blank" rel="noopener noreferrer" data-event="all_dates_teatro">Vedi tutte <span aria-hidden="true">→</span></a></div>
     <ol>{theatreDates.map(date=><li key={date.startDate}><a href={date.tickets} target="_blank" rel="noopener noreferrer" aria-label={`${theatre.show.title}, ${date.day} dicembre ${date.year}, ${date.venue}, ${date.city}, ore ${date.time}. Biglietti`} data-event="date_ticket_teatro"><time dateTime={date.startDate}><strong>{date.day}</strong><span>{date.month}</span></time><span className="theatre-date-location"><strong>{date.venue}</strong><span>{date.city} · {date.year} · ore {date.time}</span></span><span className="theatre-arrow"><Icon name="arrow"/></span></a></li>)}</ol>
     <p className="theatre-date-note">Le nuove date saranno pubblicate qui.</p>
    </section>
   </div>
   <section className="theatre-other" aria-labelledby="other-title"><h2 id="other-title">Altri spettacoli</h2><div className="theatre-other-grid">{otherShows.map((show,index)=><article className="theatre-small-card" key={show.image}><img src={show.image} width="160" height="110" alt="" loading="lazy"/><div><span className="theatre-placeholder">Segnaposto {index+1}</span><h3>{show.title}</h3><p>Dettagli in aggiornamento.</p></div></article>)}</div></section>
   <section className="theatre-backstage" aria-labelledby="backstage-title"><div className="theatre-section-heading"><h2 id="backstage-title">Dietro le quinte</h2><p>Foto e momenti dal vivo.</p></div><div className="theatre-gallery">{theatreGallery.map(photo=><a key={photo.image} href={`/images/theatre/${photo.image}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Apri fotografia: ${photo.alt}`}><img src={`/images/theatre/${photo.image}.webp`} width="700" height="900" loading="lazy" alt={photo.alt}/></a>)}</div></section>
  </main>
  <HomeInteractions/>
 </div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>
</div>}

import type {Metadata} from 'next';
import {Header} from '@/components/home/header';
import {HomeInteractions} from '@/components/home/interactions';
import {Icon} from '@/components/home/icons';
import {AreaIcon} from '@/components/about/area-icon';
import {site,socials} from '@/content/site';
import {about,aboutAreas,aboutCards} from '@/content/about';
import './about.css';

const title='Chi è Peppe Ventura | Biografia e percorso';
const url=`${site.origin}/chi-sono/`;
export const metadata:Metadata={
 title,description:about.description,alternates:{canonical:'/chi-sono/'},
 openGraph:{title,description:about.description,url,type:'website',locale:'it_IT',siteName:site.name,images:[{url:about.hero,width:900,height:920,alt:about.heroAlt}]},
 twitter:{card:'summary_large_image',title,description:about.description,images:[about.hero]},
};
const structuredData={
 '@context':'https://schema.org','@graph':[
  {'@type':'Person','@id':`${site.origin}/#person`,name:site.name,url:`${site.origin}/`,image:`${site.origin}${about.hero}`,jobTitle:['Autore','Attore','Presentatore'],description:site.description,sameAs:socials.map(social=>social.href)},
  {'@type':'AboutPage','@id':`${url}#page`,url,name:title,description:about.description,inLanguage:'it',mainEntity:{'@id':`${site.origin}/#person`},breadcrumb:{'@id':`${url}#breadcrumb`}},
  {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.origin}/`},{'@type':'ListItem',position:2,name:'Chi sono',item:url}]},
 ],
};

export default function AboutPage(){return <div className="about-page">
 <a className="skip-link" href="#chi-sono">Vai al contenuto</a>
 <div className="page-wrap">
  <Header currentPath="/chi-sono/"/>
  <main id="chi-sono">
   <section className="about-hero" aria-labelledby="about-title">
    <picture className="about-portrait"><source type="image/webp" srcSet="/images/about/portrait-480.webp 480w, /images/about/portrait-900.webp 900w" sizes="(max-width:767px) 390px, 750px"/><img src={about.hero} width="900" height="920" alt={about.heroAlt} fetchPriority="high" decoding="async"/></picture>
    <div className="about-intro">
     <nav className="about-breadcrumb" aria-label="Percorso"><a href="/">Home</a><span aria-hidden="true"> / </span><span aria-current="page">Chi sono</span></nav>
     <h1 id="about-title"><span className="sr-only">Chi è Peppe Ventura</span><span aria-hidden="true">{about.title}</span></h1>
     <p className="about-subtitle">{about.subtitle}</p><p className="about-description">{about.introduction}</p>
    </div>
   </section>
   <section className="about-areas" aria-label="Il mondo di Peppe Ventura"><ul>{aboutAreas.map(area=><li key={area.title}><a href={area.href} data-event={area.event}><AreaIcon name={area.icon}/><div><h2>{area.title}</h2><p>{area.description}</p></div><span className="about-area-arrow" aria-hidden="true"><Icon name="arrow"/></span></a></li>)}</ul></section>
   <section className="about-journey" id="il-mio-percorso" aria-labelledby="journey-title">
    <img src={about.journey.image} srcSet="/images/about/journey-480.webp 480w, /images/about/journey-960.webp 960w" sizes="(max-width:767px) calc(100vw - 40px), 600px" width="960" height="461" alt={about.journey.imageAlt} loading="lazy"/>
    <div className="about-journey-copy"><p className="about-eyebrow">Il mio percorso</p><h2 id="journey-title">{about.journey.title}</h2><p>{about.journey.text}</p><a href="#approfondimenti" className="button secondary" data-event="journey_about">Scopri il mio percorso<Icon name="arrow"/></a></div>
   </section>
   <section className="about-cards" id="approfondimenti" aria-label="Le persone e le storie del mio percorso">{aboutCards.map(card=><article className="about-card" key={card.id} id={card.id}><div className="about-card-image"><img src={`/images/about/${card.image}-640.webp`} srcSet={`/images/about/${card.image}-320.webp 320w, /images/about/${card.image}-640.webp 640w`} sizes="(max-width:767px) 105px, 300px" width="640" height="320" alt={card.imageAlt} loading="lazy"/></div><div className="about-card-copy"><h3>{card.title}</h3><p>{card.description}</p><span className="about-card-arrow" aria-hidden="true"><Icon name="arrow"/></span></div></article>)}</section>
   <section className="about-quotation" aria-labelledby="quotation-title"><div><h2 className="about-eyebrow" id="quotation-title">{about.quotation.label}</h2><p className="about-quotation-status">Citazione · Segnaposto</p><p className="about-quotation-text">{about.quotation.text}</p></div></section>
  </main>
  <HomeInteractions/>
 </div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>
</div>}

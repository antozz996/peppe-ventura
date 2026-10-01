import type {Metadata} from 'next';
import {Header} from '@/components/home/header';
import {HomeInteractions} from '@/components/home/interactions';
import {ContactPanel} from '@/components/contact/contact-panel';
import {contact} from '@/content/contact';
import {site} from '@/content/site';
import {contactConfiguration} from '@/lib/contact-config';
import './contact.css';
const title='Contatti e collaborazioni | Peppe Ventura';
const url=`${site.origin}/contatti/`;
export const metadata:Metadata={title,description:contact.description,alternates:{canonical:'/contatti/'},openGraph:{title,description:contact.description,url,type:'website',locale:'it_IT',siteName:site.name,images:[{url:contact.hero,width:770,height:900,alt:contact.heroAlt}]},twitter:{card:'summary_large_image',title,description:contact.description,images:[contact.hero]}};
const schema={'@context':'https://schema.org','@graph':[
 {'@type':'ContactPage','@id':`${url}#page`,name:title,url,description:contact.description,inLanguage:'it',about:{'@id':`${site.origin}/#person`},isPartOf:{'@id':`${site.origin}/#website`},breadcrumb:{'@id':`${url}#breadcrumb`}},
 {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.origin}/`},{'@type':'ListItem',position:2,name:'Contatti',item:url}]},
]};
export default function ContactPage(){const config=contactConfiguration();return <div className="contact-page">
 <div className="contact-curtain" aria-hidden="true"/><div className="contact-floor" aria-hidden="true"/>
 <a href="#contatti" className="skip-link">Vai al contenuto</a>
 <div className="page-wrap"><Header currentPath="/contatti/"/><main id="contatti">
  <section className="contact-hero" aria-labelledby="contact-title"><div className="contact-intro"><h1 id="contact-title"><span className="sr-only">Contatti e collaborazioni – Peppe Ventura</span><span aria-hidden="true">{contact.title}</span></h1><p>{contact.introduction}</p></div><picture className="contact-portrait"><source type="image/webp" srcSet="/images/contact/hero-480.webp 480w, /images/contact/hero-770.webp 770w" sizes="(max-width:767px) 330px, 620px"/><img src={contact.hero} width="770" height="900" alt={contact.heroAlt} fetchPriority="high" decoding="async"/></picture></section>
  <ContactPanel enabled={config.enabled} privacy={config.privacy}/>
 </main><footer className="contact-footer"><nav aria-label="Percorso"><a href="/">Home</a><span aria-hidden="true"> / </span><span aria-current="page">Contatti e collaborazioni</span></nav></footer><HomeInteractions/></div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
</div>}

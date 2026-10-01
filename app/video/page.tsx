import type {Metadata} from 'next';
import {Header} from '@/components/home/header';
import {HomeInteractions} from '@/components/home/interactions';
import {Icon} from '@/components/home/icons';
import {VideoCollection} from '@/components/video/collection';
import {site} from '@/content/site';
import {videoPage,videoPlatforms} from '@/content/video';
import './video.css';

const title='Video di Peppe Ventura | Sketch, teatro e backstage';
const url=`${site.origin}/video/`;
export const metadata:Metadata={
 title,description:videoPage.description,alternates:{canonical:'/video/'},
 openGraph:{title,description:videoPage.description,url,type:'website',locale:'it_IT',siteName:site.name,images:[{url:videoPage.hero,width:854,height:990,alt:videoPage.heroAlt}]},
 twitter:{card:'summary_large_image',title,description:videoPage.description,images:[videoPage.hero]},
};
const structuredData={
 '@context':'https://schema.org','@graph':[
  {'@type':'CollectionPage','@id':`${url}#page`,url,name:title,description:videoPage.description,inLanguage:'it',about:{'@id':`${site.origin}/#person`},breadcrumb:{'@id':`${url}#breadcrumb`}},
  {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:`${site.origin}/`},{'@type':'ListItem',position:2,name:'Video',item:url}]},
 ],
};

export default function VideoPage(){return <div className="video-page">
 <a className="skip-link" href="#video">Vai al contenuto</a>
 <div className="page-wrap">
  <Header currentPath="/video/"/>
  <main id="video">
   <section className="video-hero" aria-labelledby="video-title">
    <picture className="video-portrait"><source type="image/webp" srcSet="/images/videos/hero-480.webp 480w, /images/videos/hero-960.webp 854w" sizes="(max-width:767px) 360px, 650px"/><img src={videoPage.hero} width="854" height="990" alt={videoPage.heroAlt} fetchPriority="high" decoding="async"/></picture>
    <div className="video-intro">
     <nav className="video-breadcrumb" aria-label="Percorso"><a href="/">Home</a><span aria-hidden="true"> / </span><span aria-current="page">Video</span></nav>
     <h1 id="video-title"><span className="sr-only">Video di Peppe Ventura</span><span aria-hidden="true">{videoPage.title}</span></h1>
     <p className="video-subtitle">{videoPage.subtitle}</p><p className="video-description">{videoPage.introduction}</p>
    </div>
   </section>
   <section className="video-platforms" aria-label="Canali ufficiali di Peppe Ventura">
    {videoPlatforms.map(platform=><article className="video-platform" key={platform.icon}><a href={platform.href} target="_blank" rel="noopener noreferrer" data-event={platform.event}><div className="video-platform-copy"><span className={`video-platform-icon ${platform.icon}`}><Icon name={platform.icon}/></span><h2>{platform.name}</h2><p>{platform.description}</p></div><img src={`/images/videos/${platform.image}-360.webp`} width="360" height="203" alt="" loading="lazy"/><span className="video-arrow"><Icon name="arrow"/></span><span className="sr-only">Canale ufficiale, in una nuova scheda</span></a></article>)}
   </section>
   <VideoCollection/>
  </main>
  <HomeInteractions/>
 </div>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,'\\u003c')}}/>
</div>}

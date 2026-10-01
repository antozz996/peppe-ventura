'use client';
import {useState} from 'react';
import {featuredVideoSlots,otherVideoSlots,videoFilters,type VideoSlot} from '@/content/video';

function VideoPreview({slot,compact=false,selected=true,onPreview}:{slot:VideoSlot;compact?:boolean;selected?:boolean;onPreview:()=>void}){
 return <article className={`video-item${compact?' video-item-compact':''}${selected?' is-selected':''}`}>
  <button className="video-preview" onClick={onPreview} aria-label={`${slot.category}: video da selezionare. Informazioni sul segnaposto`}>
   <img src={`/images/videos/${slot.image}-640.webp`} srcSet={`/images/videos/${slot.image}-360.webp 360w, /images/videos/${slot.image}-640.webp 640w`} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1099px) 25vw, 300px" width="640" height="360" alt={slot.imageAlt} loading="lazy"/>
   <span className="video-placeholder-label">Foto di scena · Segnaposto</span>
   <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 12 8-12 8Z"/></svg></span>
  </button>
  <p className="video-category">{slot.category}</p><h3>Video da selezionare</h3>
  {compact?null:<p className="video-excerpt">Spazio per un contenuto verificato.</p>}
 </article>;
}

export function VideoCollection(){
 const [filter,setFilter]=useState('Tutti');
 const [featured,setFeatured]=useState(0);
 const [notice,setNotice]=useState('');
 const slots=filter==='Tutti'?otherVideoSlots:otherVideoSlots.filter(slot=>slot.category===filter);
 const showNotice=()=>setNotice('Questo è un segnaposto con una foto di scena. Il video verrà collegato dopo la selezione del contenuto ufficiale.');
 return <>
  <section className="video-featured" aria-labelledby="featured-title">
   <div className="video-section-heading"><h2 id="featured-title">Video in evidenza</h2><a href="#altri-video">Vedi tutti i video <span aria-hidden="true">→</span></a></div>
   <div className="video-featured-grid">{featuredVideoSlots.map((slot,index)=><VideoPreview key={slot.id} slot={slot} selected={featured===index} onPreview={showNotice}/>)}</div>
   <div className="video-pagination" aria-label="Scegli l’anteprima in evidenza">{featuredVideoSlots.map((slot,index)=><button key={slot.id} onClick={()=>setFeatured(index)} aria-pressed={featured===index} aria-label={`Anteprima ${index+1}: ${slot.category}`}><span/></button>)}</div>
  </section>
  <section className="video-others" id="altri-video" aria-labelledby="others-title">
   <div className="video-section-heading"><h2 id="others-title">Altri video</h2><div className="video-filters" role="group" aria-label="Filtra le anteprime per categoria">{videoFilters.map(category=><button key={category} aria-pressed={filter===category} onClick={()=>setFilter(category)}>{category}</button>)}</div></div>
   <p className="sr-only" role="status">{slots.length} anteprime, filtro {filter}.</p>
   <div className="video-other-grid">{slots.map(slot=><VideoPreview key={slot.id} slot={slot} compact onPreview={showNotice}/>)}</div>
  </section>
  {notice?<div className="video-notice" role="status"><p>{notice}</p><button aria-label="Chiudi avviso" onClick={()=>setNotice('')}>×</button></div>:null}
 </>;
}

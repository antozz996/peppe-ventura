'use client';
import {useState} from 'react';
import {featuredVideoSlots,instagramVideos,type VideoSlot,type InstagramVideo} from '@/content/video';

function VideoPreview({slot,selected=true,onPreview}:{slot:VideoSlot;selected?:boolean;onPreview:()=>void}){
 return <article className={`video-item${selected?' is-selected':''}`}>
  <button className="video-preview" onClick={onPreview} aria-label={`${slot.category}: video da selezionare. Informazioni sul segnaposto`}>
   <img src={`/images/videos/${slot.image}-640.webp`} srcSet={`/images/videos/${slot.image}-360.webp 360w, /images/videos/${slot.image}-640.webp 640w`} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1099px) 25vw, 300px" width="640" height="360" alt={slot.imageAlt} loading="lazy"/>
   <span className="video-placeholder-label">Foto di scena · Segnaposto</span>
   <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 12 8-12 8Z"/></svg></span>
  </button>
  <p className="video-category">{slot.category}</p><h3>Video da selezionare</h3>
  <p className="video-excerpt">Spazio per un contenuto verificato.</p>
 </article>;
}

function InstagramCard({video}:{video:InstagramVideo}){
 return <article className="video-item video-item-compact">
  <a className="video-preview" href={video.href} target="_blank" rel="noopener noreferrer" data-event={`instagram_reel_${video.id}`}>
   <img src={`/images/videos/${video.image}-640.webp`} srcSet={`/images/videos/${video.image}-360.webp 360w, /images/videos/${video.image}-640.webp 640w`} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1099px) 20vw, 240px" width="640" height="360" alt={video.imageAlt} loading="lazy"/>
   <span className="video-placeholder-label">Guarda su Instagram</span>
   <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 12 8-12 8Z"/></svg></span>
   <span className="sr-only">{video.title}: guarda il reel su Instagram, in una nuova scheda</span>
  </a>
  <p className="video-category">{video.category}</p><h3>{video.title}</h3>
 </article>;
}

export function VideoCollection(){
 const [featured,setFeatured]=useState(0);
 const [notice,setNotice]=useState('');
 const showNotice=()=>setNotice('Questo è un segnaposto con una foto di scena. Il video verrà collegato dopo la selezione del contenuto ufficiale.');
 return <>
  <section className="video-featured" aria-labelledby="featured-title">
   <div className="video-section-heading"><h2 id="featured-title">Video in evidenza</h2><a href="#altri-video">Vedi tutti i video <span aria-hidden="true">→</span></a></div>
   <div className="video-featured-grid">{featuredVideoSlots.map((slot,index)=><VideoPreview key={slot.id} slot={slot} selected={featured===index} onPreview={showNotice}/>)}</div>
   <div className="video-pagination" aria-label="Scegli l’anteprima in evidenza">{featuredVideoSlots.map((slot,index)=><button key={slot.id} onClick={()=>setFeatured(index)} aria-pressed={featured===index} aria-label={`Anteprima ${index+1}: ${slot.category}`}><span/></button>)}</div>
  </section>
  <section className="video-others" id="altri-video" aria-labelledby="others-title">
   <div className="video-section-heading"><h2 id="others-title">Da Instagram</h2><a href="https://www.instagram.com/peppeventura/" target="_blank" rel="noopener noreferrer" data-event="instagram_profile_video">Tutti i reel <span aria-hidden="true">→</span></a></div>
   <div className="video-other-grid">{instagramVideos.map(video=><InstagramCard key={video.id} video={video}/>)}</div>
  </section>
  {notice?<div className="video-notice" role="status"><p>{notice}</p><button aria-label="Chiudi avviso" onClick={()=>setNotice('')}>×</button></div>:null}
 </>;
}

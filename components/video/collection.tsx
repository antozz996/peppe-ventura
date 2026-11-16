'use client';
import {useState} from 'react';
import {instagramVideos,type InstagramVideo} from '@/content/video';

function VideoCard({video,selected}:{video:InstagramVideo;selected:boolean}){
 return <article className={`video-item${selected?' is-selected':''}`}>
  <a className="video-preview" href={video.href} target="_blank" rel="noopener noreferrer" data-event={`instagram_reel_${video.id}`}>
   <img src={`/images/videos/${video.image}-640.webp`} srcSet={`/images/videos/${video.image}-360.webp 360w, /images/videos/${video.image}-640.webp 640w`} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1099px) 25vw, 300px" width="640" height="360" alt={video.imageAlt} loading="lazy"/>
   <span className="video-placeholder-label">Guarda su Instagram</span>
   <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 12 8-12 8Z"/></svg></span>
   <span className="sr-only">{video.title}: guarda il reel su Instagram, in una nuova scheda</span>
  </a>
  <p className="video-category">{video.category}</p><h3>{video.title}</h3>
 </article>;
}

export function VideoCollection(){
 const [featured,setFeatured]=useState(0);
 return <section className="video-featured" aria-labelledby="featured-title">
  <div className="video-section-heading"><h2 id="featured-title">Video in evidenza</h2><a href="https://www.instagram.com/peppeventura/" target="_blank" rel="noopener noreferrer" data-event="instagram_profile_video">Vedi tutti i video <span aria-hidden="true">→</span></a></div>
  <div className="video-featured-grid">{instagramVideos.map((video,index)=><VideoCard key={video.id} video={video} selected={featured===index}/>)}</div>
  <div className="video-pagination" aria-label="Scegli il video in evidenza">{instagramVideos.map((video,index)=><button key={video.id} onClick={()=>setFeatured(index)} aria-pressed={featured===index} aria-label={`Video ${index+1}: ${video.title}`}><span/></button>)}</div>
 </section>;
}

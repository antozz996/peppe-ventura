'use client';
/* eslint-disable @next/next/no-img-element -- Pre-optimized poster; no external embed until interaction. */
import {useState} from 'react';
import type {ShowTrailer as Trailer} from '@/content/shows';
export function ShowTrailer({trailer}:{trailer:Trailer}){
 const [playing,setPlaying]=useState(false);
 return <section className="show-section" aria-labelledby="show-trailer-title"><h2 id="show-trailer-title">Guarda il trailer</h2><div className="show-trailer">{playing?<iframe src={trailer.embedUrl} title={trailer.name} allow="fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:<button type="button" aria-label={`Guarda il trailer: ${trailer.name}`} onClick={()=>{setPlaying(true);window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:'show_trailer_play'}}));}}><img src={trailer.poster.src} alt={trailer.poster.alt} width={trailer.poster.width} height={trailer.poster.height} loading="lazy"/><span aria-hidden="true">▶</span></button>}</div></section>
}

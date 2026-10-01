'use client';
/* Explicitly sized, compressed static images. Video loads only after a click. */
/* eslint-disable @next/next/no-img-element */
import {useState} from 'react';
import type {ArticleImage} from '@/lib/article-model';
function youtubeId(url:string){try{const parsed=new URL(url);const host=parsed.hostname.replace(/^www\./,'');if(host==='youtu.be')return parsed.pathname.split('/')[1];if(host==='youtube.com')return parsed.searchParams.get('v')??parsed.pathname.match(/^\/(?:shorts|embed)\/([^/]+)/)?.[1];return null}catch{return null}}
export function ArticleVideo({title,url,poster}:{title:string;url:string;poster:ArticleImage}){
 const [playing,setPlaying]=useState(false);const id=youtubeId(url);const canEmbed=!!id&&/^[A-Za-z0-9_-]{11}$/.test(id);
 const track=()=>window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:'article_video_click',url}}));
 const image=<><img src={poster.src} srcSet={poster.srcSet} sizes="(max-width:767px) calc(100vw - 40px), 740px" width={poster.width} height={poster.height} alt={poster.alt} loading="lazy" decoding="async"/><span className="article-play" aria-hidden="true">▶</span></>;
 return <figure className="article-video"><div className="article-video-frame">{playing&&canEmbed?<iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} allow="fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:canEmbed?<button type="button" aria-label={`Carica il video: ${title}`} onClick={()=>{track();setPlaying(true)}}>{image}</button>:<a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Guarda ${title}, in una nuova scheda`} data-event="article_video_click">{image}</a>}</div><figcaption>{title}{!playing&&canEmbed&&<span>Il player YouTube viene caricato solo al clic.</span>}</figcaption></figure>
}

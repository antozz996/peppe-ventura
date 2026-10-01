'use client';
import {useEffect} from 'react';
export function ArticleTelemetry({slug}:{slug:string}){
 useEffect(()=>{
  const dispatch=(name:string)=>window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name,slug}}));
  const body=document.getElementById('article-body');if(!body)return;
  dispatch('article_view');const sent=new Set<number>();let frame=0;
  const check=()=>{frame=0;const rect=body.getBoundingClientRect();const progress=(window.innerHeight-rect.top)/rect.height;for(const threshold of [50,90])if(progress>=threshold/100&&!sent.has(threshold)){sent.add(threshold);dispatch(`article_scroll_${threshold}`)}};
  const scroll=()=>{if(!frame)frame=window.requestAnimationFrame(check)};
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);check();
  return ()=>{window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);window.cancelAnimationFrame(frame)};
 },[slug]);return null;
}

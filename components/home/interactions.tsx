'use client';
import {useEffect,useState} from 'react';
export function HomeInteractions(){
 const [notice,setNotice]=useState('');
 useEffect(()=>{
  const onClick=(event:MouseEvent)=>{
   const link=(event.target as Element).closest<HTMLAnchorElement>('a[data-event],a[data-pending]');
   if(!link)return;
   if(link.dataset.pending&&!['/teatro/','/scrivo/','/video/','/chi-sono/','/contatti/','/libri/l-hai-scelto-tu/'].includes(link.getAttribute('href')??'')){event.preventDefault();setNotice(link.dataset.pending==='social'?'Il collegamento al canale YouTube sarà disponibile a breve.':'Questa sezione sarà disponibile a breve.');return;}
   // A privacy-friendly hook. No external analytics is loaded without configuration.
   if(link.dataset.event)window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:link.dataset.event}}));
  };
  document.addEventListener('click',onClick);
  return ()=>document.removeEventListener('click',onClick);
 },[]);
 return <p className={notice?'interaction-notice':'sr-only'} role="status" aria-live="polite">{notice}</p>;
}

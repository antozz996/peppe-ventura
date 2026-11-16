export const site = {
  name: 'Peppe Ventura',
  descriptor: 'Autore · Attore · Presentatore',
  headline: 'Storie, ansia e perfino qualche sorriso.',
  description: 'Sito ufficiale di Peppe Ventura, autore, attore e presentatore. Teatro, libri, video, spettacoli, progetti e attività.',
  // trim + BOM: un valore incollato con spazi o BOM rompe new URL() e quindi la build.
  origin: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/^﻿/, '').trim() || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')).replace(/\/$/, ''),
  production: process.env.SITE_INDEXABLE === 'true' && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'),
  tickets: 'https://www.ticketone.it/artist/peppe-ventura/',
  hero: '/images/peppe-960.webp',
  heroAlt: 'Peppe Ventura davanti a un sipario teatrale rosso',
};
export const navigation = [
  {label:'Home', href:'/', event:'nav_home'},
  {label:'Teatro', href:'/teatro/', event:'nav_teatro'},
  {label:'Progetti e scrittura', href:'/scrivo/', event:'nav_scrivo'},
  {label:'Video', href:'/video/', event:'nav_video'},
  {label:'Lavoriamo insieme', href:'/contatti/', event:'nav_contatti'},
];
// Le quattro sezioni della home, in quest'ordine.
export const cards = [
  {number:'01', title:'Teatro', description:'Spettacoli, commedie e progetti teatrali.', href:'/teatro/', image:'/images/theatre.webp', event:'teatro_click_home'},
  {number:'02', title:'Progetti e scrittura', description:'Storie, idee e parole che diventano progetti.', href:'/scrivo/', image:'/images/writing.webp', event:'scrivo_click_home'},
  {number:'03', title:'Video', description:'Sketch, personaggi, format e dietro le quinte.', href:'/video/', image:'/images/video.webp', event:'video_click_home'},
  {number:'04', title:'Lavoriamo insieme', description:'Collaborazioni, eventi e nuove opportunità.', href:'/contatti/', image:'/images/contact.webp', event:'contact_click_home'},
];
export const socials = [
  {name:'Instagram', href:'https://www.instagram.com/peppeventura/', icon:'instagram', event:'social_instagram_home'},
  {name:'TikTok', href:'https://www.tiktok.com/@peppeventuraa', icon:'tiktok', event:'social_tiktok_home'},
  {name:'YouTube', href:'https://youtube.com/@peppeventuraofficial', icon:'youtube', event:'social_youtube_home'},
  {name:'Facebook', href:'https://www.facebook.com/peppe.ventura1/', icon:'facebook', event:'social_facebook_home'},
];

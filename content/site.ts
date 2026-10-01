export const site = {
  name: 'Peppe Ventura',
  descriptor: 'Autore · Attore · Presentatore',
  headline: 'Storie, persone e un palco sempre in mezzo.',
  description: 'Sito ufficiale di Peppe Ventura, autore, attore e presentatore. Teatro, libri, video, spettacoli, progetti e attività.',
  origin: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')).replace(/\/$/, ''),
  production: process.env.SITE_INDEXABLE === 'true' && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production'),
  tickets: 'https://www.ticketone.it/artist/peppe-ventura/',
  hero: '/images/peppe-960.webp',
  heroAlt: 'Peppe Ventura davanti a un sipario teatrale rosso',
};
export const navigation = [
  {label:'Home', href:'/', event:'nav_home'},
  {label:'Chi sono', href:'/chi-sono/', event:'nav_chi_sono'},
  {label:'Teatro', href:'/teatro/', event:'nav_teatro'},
  {label:'Scrivo', href:'/scrivo/', event:'nav_scrivo'},
  {label:'Video', href:'/video/', event:'nav_video'},
  {label:'Contatti', href:'/contatti/', event:'nav_contatti'},
];
export const cards = [
  {title:'Teatro', description:'Spettacoli, date e nuovi progetti.', href:'/teatro/', image:'/images/theatre.webp', event:'teatro_click_home'},
  {title:'Scrivo', description:'Idee, storie e altre cose vere.', href:'/scrivo/', image:'/images/writing.webp', event:'scrivo_click_home'},
  {title:'Video', description:'Sketch, talk e dietro le quinte.', href:'/video/', image:'/images/video.webp', event:'video_click_home'},
  {title:'Contatti e collaborazioni', description:'Lavoriamo insieme.', href:'/contatti/', image:'/images/contact.webp', event:'contact_click_home'},
];
export const socials = [
  {name:'Instagram', href:'https://www.instagram.com/peppeventura/', icon:'instagram', event:'social_instagram_home'},
  {name:'TikTok', href:'https://www.tiktok.com/@peppeventuraa', icon:'tiktok', event:'social_tiktok_home'},
  {name:'YouTube', href:'https://youtube.com/@peppeventuraofficial', icon:'youtube', event:'social_youtube_home'},
  {name:'Facebook', href:'https://www.facebook.com/peppe.ventura1/', icon:'facebook', event:'social_facebook_home'},
];
// Future routes are reserved, not implemented in this phase.
export const futureRoutes = ['/chi-sono/','/teatro/','/teatro/[slug-spettacolo]/','/scrivo/','/libri/[slug-libro]/','/appunti/','/appunti/[slug-articolo]/','/video/','/contatti/','/press/'];

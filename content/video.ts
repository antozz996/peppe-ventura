import {socials} from './site';

export const videoPage={
 title:'Video',
 subtitle:'Storie, sketch e vita vera.\nDal palco al quotidiano.',
 introduction:'“Mi piace riportare la realtà sul web. È come se potessi rivivere una cosa che mi è successa, una sorta di replay…”',
 description:'Guarda i video di Peppe Ventura tra teatro, sketch, backstage, interviste e contenuti dai suoi canali ufficiali.',
 hero:'/images/videos/hero-960.webp',
 heroAlt:'Peppe Ventura sul palco, con un microfono in mano e luci calde sullo sfondo',
};
const platformCopy:Record<string,{description:string;image:string}>={
 Instagram:{description:'Dietro le quinte, vita e sketch.',image:'live'},
 TikTok:{description:'Clip, sketch e momenti reali.',image:'sketch'},
 YouTube:{description:'Video completi e contenuti originali.',image:'theatre'},
 Facebook:{description:'Aggiornamenti e contenuti extra.',image:'interview'},
};
export const videoPlatforms=socials.map(social=>({...social,...platformCopy[social.name],event:`social_${social.icon}_video`}));

// Editorial slots only. These photographs are previews, not video thumbnails.
// Replace a slot with a verified video record before adding playback or VideoObject.
export type VideoSlot={id:string;category:string;image:string;imageAlt:string};
export const featuredVideoSlots:VideoSlot[]=[
 {id:'featured-live',category:'Live',image:'live',imageAlt:'Peppe Ventura sul palco con un microfono'},
 {id:'featured-sketch',category:'Sketch',image:'sketch',imageAlt:'Peppe Ventura in scena, in una fotografia in bianco e nero'},
 {id:'featured-interview',category:'Interviste',image:'interview',imageAlt:'Peppe Ventura con un microfono durante un evento'},
 {id:'featured-theatre',category:'Teatro',image:'theatre',imageAlt:'Peppe Ventura di spalle davanti al pubblico in teatro'},
];
// Reel ufficiali indicati da Peppe (WhatsApp, 22/10/2026). Le immagini sono foto di scena del sito, non frame dei video.
export type InstagramVideo={id:string;title:string;category:string;image:string;imageAlt:string;href:string};
export const instagramVideos:InstagramVideo[]=[
 {id:'DT0CNiijCQD',title:'Era tutto pronto per l’intervista a Carlo Conti…',category:'Vita vera',image:'interview',imageAlt:'Peppe Ventura con un microfono durante un evento'},
 {id:'DT_C0zFDLqW',title:'Questo palco non è stato un punto d’arrivo',category:'Teatro',image:'theatre',imageAlt:'Peppe Ventura davanti al pubblico, visto dal palco'},
 {id:'DT0xSt0jHPh',title:'La mia ragazza sminuisce i miei problemi',category:'Comfort Zone',image:'sketch',imageAlt:'Peppe Ventura in una fotografia di scena in bianco e nero'},
 {id:'DL4oOJ8o0VH',title:'Piccola bugia a Rocco Hunt',category:'Vita vera',image:'backstage',imageAlt:'Peppe Ventura sul palco, mentre indica il pubblico'},
 {id:'CzXIXWwIhru',title:'Peppe Ventura su Instagram',category:'Reel',image:'live',imageAlt:'Peppe Ventura con il microfono sul palco'},
].map(video=>({...video,href:`https://www.instagram.com/reel/${video.id}/`}));

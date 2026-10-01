import {socials} from './site';

export const videoPage={
 title:'Video',
 subtitle:'Storie, sketch e vita vera.\nDal palco al quotidiano.',
 introduction:'Un altro modo per raccontare le persone: tra ironia, osservazione e momenti reali, dentro e fuori dal teatro.',
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
export const otherVideoSlots:VideoSlot[]=[
 {id:'other-sketch',category:'Sketch',image:'live',imageAlt:'Peppe Ventura con il microfono sul palco'},
 {id:'other-theatre',category:'Teatro',image:'theatre',imageAlt:'Peppe Ventura davanti al pubblico, visto dal palco'},
 {id:'other-backstage',category:'Backstage',image:'backstage',imageAlt:'Peppe Ventura sul palco, mentre indica il pubblico'},
 {id:'other-interview',category:'Interviste',image:'interview',imageAlt:'Peppe Ventura durante un evento dal vivo'},
 {id:'other-life',category:'Vita vera',image:'sketch',imageAlt:'Peppe Ventura in una fotografia di scena in bianco e nero'},
];
export const videoFilters=['Tutti','Sketch','Teatro','Interviste','Backstage','Vita vera'];

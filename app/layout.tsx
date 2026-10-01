import type {Metadata} from 'next';
import {site} from '@/content/site';
import './globals.css';
export const metadata:Metadata={
 metadataBase:new URL(site.origin),
 title:'Peppe Ventura | Autore, Attore e Presentatore',description:site.description,
 alternates:{canonical:'/'},robots:{index:site.production,follow:site.production},
 openGraph:{title:'Peppe Ventura | Autore, Attore e Presentatore',description:site.description,url:'/',type:'website',locale:'it_IT',siteName:site.name,images:[{url:'/images/peppe-social.jpg',width:1152,height:1536,alt:site.heroAlt}]},
 twitter:{card:'summary_large_image',title:'Peppe Ventura | Autore, Attore e Presentatore',description:site.description,images:['/images/peppe-social.jpg']},
 icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="it"><body>{children}</body></html>}

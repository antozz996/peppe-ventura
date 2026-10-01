// Only verified books are registered here. Empty optional sections stay hidden.
export type BookImage={src:string;srcSet?:string;width:number;height:number;alt:string};
export type BookLink={name:string;url:string;description:string};
export type EditorialLink={title:string;description:string;href:string;external?:boolean;image?:BookImage};
export type Book={
 slug:string;title:string;subtitle?:string;author:string;cover:BookImage;heroImage?:BookImage;
 shortDescription:string;longDescription:string[];introImage?:BookImage;
 whyWritten?:{title:string;paragraphs:string[];sourceLabel?:string;sourceUrl?:string};
 year?:number;publisher?:string;isbn?:string;language?:string;format?:string;pages?:number;
 purchaseLinks:BookLink[];gallery:BookImage[];quotes:{text:string;context:string;sourceLabel:string;sourceUrl:string}[];
 excerpt?:{text:string;permissionConfirmed:true};press:{text:string;source:string;url:string}[];
 presentations:{id:string;startDate:string;city:string;venue:string;url?:string}[];
 relatedArticles:EditorialLink[];relatedVideos:EditorialLink[];relatedBooks:EditorialLink[];
 authorPortrait?:BookImage;seo:{title:string;description:string};copyNeedsApproval:boolean;
};
const interview='https://www.metropolisweb.it/2025/08/05/dal-web-alla-stampa-peppe-ventura-racconta-suo-libro-lhai-scelto-tu/';
const bookListing='https://www.abebooks.it/9798291668399/Lhai-scelto-Ventura-Peppe/plp';
export const books:Book[]=[{
 slug:'l-hai-scelto-tu',title:'L’hai scelto tu',author:'Peppe Ventura',
 cover:{src:'/images/writing/cover-600.webp',srcSet:'/images/writing/cover-300.webp 300w, /images/writing/cover-600.webp 600w',width:600,height:800,alt:'Copertina del libro L’hai scelto tu di Peppe Ventura: due volti disegnati a matita su fondo bianco'},
 shortDescription:'Francesco ha vent’anni e cerca il proprio posto. La scrittura è il suo modo di dare voce a ciò che sente; l’incontro con Elena cambia il suo percorso. Un romanzo di Peppe Ventura che attraversa amore, fragilità e crescita, tra il bisogno di essere compresi e le scelte con cui impariamo a vivere.',
 longDescription:[
  'Francesco cerca un modo per stare nel mondo senza perdere la propria voce. Ha vent’anni, una vita ancora da capire e un rapporto profondo con la scrittura. Nelle parole trova lo spazio per riconoscere quello che sente, anche quando fuori tutto sembra chiedergli di correre, adattarsi e sapere già dove andare.',
  'L’incontro con Elena porta nella sua storia l’amore e la scoperta dell’altro. Ma porta anche la perdita, il dolore e la necessità di crescere. Il romanzo segue Francesco attraverso queste esperienze: i sogni che cerca di tenere vivi, le paure con cui deve confrontarsi e le fragilità che accompagnano il suo percorso.',
  'L’hai scelto tu racconta questa ricerca da vicino. La vicenda personale di Francesco incontra domande che riguardano chi cerca ancora il proprio posto: come dare forma alle emozioni, come attraversare una perdita e come continuare a immaginare il futuro. La scrittura rimane il filo che tiene insieme la storia.',
 ],
 introImage:{src:'/images/books/reading-960.webp',srcSet:'/images/books/reading-480.webp 480w, /images/books/reading-960.webp 960w',width:960,height:1280,alt:'Una fotografia editoriale delle mani di Peppe Ventura mentre sfoglia un libro'},
 whyWritten:{title:'Da dove è nato',paragraphs:[
  'Nell’intervista a Metropolis del 5 agosto 2025, Peppe racconta che il romanzo è nato dal bisogno di rallentare e trovare uno spazio in cui esprimere le emozioni senza sentirsi giudicato. La storia di Francesco ha preso forma dentro questa necessità: dare tempo a ciò che, nei contenuti online, passa spesso in pochi istanti.',
  'Il legame con la scrittura viene da prima. Peppe ricorda i temi del liceo e un’abitudine alle parole che per lui era già naturale. Francesco raccoglie una parte di questa esperienza, insieme al sentimento di chi cerca il proprio posto e desidera essere ascoltato.',
  'Nella stessa conversazione, l’autore lega il titolo alla responsabilità delle scelte. Il suo desiderio per i lettori è che possano riconoscere valore nella propria vulnerabilità. Questo è il punto da cui nasce il libro: dare spazio a emozioni che spesso restano inascoltate.',
 ],sourceLabel:'Intervista a Metropolis · 5 agosto 2025',sourceUrl:interview},
 year:2025,isbn:'9798291668399',language:'Italiano',format:'Brossura',pages:132,
 purchaseLinks:[
  {name:'Amazon',url:'https://www.amazon.it/Lhai-scelto-tu-Peppe-Ventura/dp/B0FJMM9GH6',description:'La scheda del libro su Amazon.it.'},
  {name:'AbeBooks',url:bookListing,description:'L’edizione in brossura e le offerte dei rivenditori.'},
 ],
 gallery:[],quotes:[{text:'Per me è un rifugio e una salvezza.',context:'Peppe Ventura, sulla scrittura',sourceLabel:'Intervista a Metropolis · 5 agosto 2025',sourceUrl:interview}],
 press:[],presentations:[],
 relatedArticles:[{title:'Le parole, prima e dopo il libro.',description:'Peppe racconta la storia di Francesco e il suo rapporto con la scrittura nell’intervista a Metropolis.',href:interview,external:true}],
 relatedVideos:[],
 relatedBooks:[{title:'Caro prof ti scrivo…',description:'Con Samuele Ciambriello. Un confronto con le emozioni, i pensieri e le domande degli studenti.',href:'https://rogiosi.it/product/caro-prof-ti-scrivo/',external:true}],
 authorPortrait:{src:'/images/writing/portrait-960.webp',srcSet:'/images/writing/portrait-480.webp 480w, /images/writing/portrait-960.webp 960w',width:960,height:1440,alt:'Peppe Ventura tiene tra le mani una copia di L’hai scelto tu'},
 seo:{title:'L’hai scelto tu di Peppe Ventura | Libro',description:'Scopri L’hai scelto tu di Peppe Ventura: la storia di Francesco, i temi del romanzo, i dati dell’edizione in brossura e dove trovare il libro.'},
 copyNeedsApproval:true,
}];
export function getBook(slug:string){return books.find(book=>book.slug===slug)}
export function bookPath(book:Pick<Book,'slug'>){return `/libri/${book.slug}/`}

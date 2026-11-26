// Verified show content only. Add future shows here without changing the template.
export type ShowImage = {src:string;srcSet?:string;width:number;height:number;alt:string};
export type ShowDate = {
 id:string;startDate:string;endDate:string;time:string;city:string;venue:string;address:string;
 ticketUrl?:string;status?:'available'|'sold_out'|'cancelled'|'postponed'|'coming_soon';
 organizer?:{name:string;url?:string};offer?:{lowPrice:number;highPrice:number;currency:string;validFrom:string};
};
export type ShowTrailer = {name:string;description:string;poster:ShowImage;embedUrl:string;uploadDate:string;duration?:string};
export type Show = {
 slug:string;title:string;eyebrow:string;tagline:string;description:string;
 longDescription:string[];heroImage:ShowImage;introImage?:ShowImage;
 gallery:ShowImage[];backstage:ShowImage[];trailer:ShowTrailer|null;dates:ShowDate[];
 credits:{label:string;names:string[]}[];faq:{question:string;answer:string}[];
 press:{text:string;source:string;url:string}[];relatedShows:string[];
 seo:{title:string;description:string};sources:{name:string;url:string}[];
};
const ticketUrl='https://www.ticketone.it/event/peppe-ventura-chiamami-papa-teatro-acacia-22006897/';
const marchTicketUrl='https://www.ticketone.it/event/peppe-ventura-chiamami-papa-teatro-acacia-22412307/';
export const shows:Show[]=[{
 slug:'chiamami-papa',title:'Chiamami Papà',eyebrow:'Spettacolo',
 tagline:'Diventare adulti. Restare figli.',
 description:'Una commedia sui rapporti familiari e su quell’età in cui ci si ritrova adulti senza sentirsi ancora tali. Peppe fa i conti con una famiglia cambiata dalla separazione dei genitori, tra incomprensioni e il desiderio di ritrovarsi. Un testo di Peppe Ventura e Raffaele Nolli.',
 longDescription:[
  'Intorno ai trent’anni, essere adulti può sembrare una cosa già decisa. Sentirsi adulti è un’altra storia. Chiamami Papà parte da questa distanza e la porta dentro una famiglia: quella di Peppe, che dopo la separazione dei genitori deve confrontarsi con rapporti che non sono più gli stessi.',
  'Al centro c’è il rapporto con la madre, attraversato da conflitti e incomprensioni. Lei, però, non rinuncia al tentativo di ricucire i legami. È qui che la commedia trova il suo punto di vista: nelle difficoltà di stare insieme, nelle parole che non arrivano e nel bisogno di ritrovare un rapporto, anche quando la famiglia è cambiata.',
  'Scritta da Peppe Ventura e Raffaele Nolli, la storia affronta questi temi con ironia e leggerezza. Sul palco, il passaggio all’età adulta incontra le relazioni familiari: due cose che raramente seguono lo stesso ritmo. Uno sguardo sui legami che cambiano, e su quello che significa continuare a essere figli.',
 ],
 heroImage:{src:'/images/theatre/chiamami-papa-poster-960.webp',srcSet:'/images/theatre/chiamami-papa-poster-480.webp 480w, /images/theatre/chiamami-papa-poster-960.webp 960w',width:960,height:1200,alt:'Locandina ufficiale di Chiamami Papà con Peppe Ventura, Raffaele Nolli, Paolo Cerrone e Giusy Andolfi'},
 gallery:[],backstage:[],trailer:null,
 dates:[{id:'napoli-acacia-2026-12-09',startDate:'2026-12-09T21:00:00+01:00',endDate:'2026-12-09T23:00:00+01:00',time:'21:00',city:'Napoli',venue:'Teatro Acacia',address:'Via Raffaele Tarantino 10',ticketUrl,status:'sold_out',organizer:{name:'Bestlive srl'},
  // Prezzi verificati su TicketOne il 17/11/2026 (Primo Settore 25 €, Secondo Settore 20 €).
  offer:{lowPrice:20,highPrice:25,currency:'EUR',validFrom:'2026-08-10T12:00:00+02:00'}},
  {id:'napoli-acacia-2027-03-13',startDate:'2027-03-13T21:00:00+01:00',endDate:'2027-03-13T23:00:00+01:00',time:'21:00',city:'Napoli',venue:'Teatro Acacia',address:'Via Raffaele Tarantino 10',ticketUrl:marchTicketUrl,organizer:{name:'Bestlive srl'},
  // Prezzi verificati su TicketOne il 26/11/2026; validFrom = giorno in cui la vendita risultava aperta.
  offer:{lowPrice:20,highPrice:25,currency:'EUR',validFrom:'2026-11-26T00:00:00+01:00'}}],
 credits:[
  {label:'Testo',names:['Peppe Ventura','Raffaele Nolli']},
  {label:'Regia',names:['Oreste Ciccarello']},
  {label:'In scena',names:['Peppe Ventura','Raffaele Nolli','Paolo Cerrone','Giusy Andolfi']},
 ],
 faq:[
  {question:'Dove posso acquistare i biglietti?',answer:'Il pulsante Biglietti apre la pagina dello spettacolo su TicketOne. Prezzi, posti e condizioni di acquisto sono indicati dalla biglietteria.'},
  {question:'Dove si trova il Teatro Acacia?',answer:'Il Teatro Acacia si trova a Napoli, in Via Raffaele Tarantino 10.'},
 ],
 press:[],relatedShows:[],
 seo:{title:'Chiamami Papà – Peppe Ventura | Date e biglietti',description:'Chiamami Papà, la commedia di Peppe Ventura e Raffaele Nolli: scopri la trama, il cast, le date al Teatro Acacia di Napoli e i biglietti.'},
 sources:[{name:'Azzurro Service',url:'https://www.azzurroservice.net/biglietti/chiamami-pap/'},{name:'TicketOne',url:ticketUrl}],
}];
export function getShow(slug:string){return shows.find(show=>show.slug===slug)}
export function showPath(show:Pick<Show,'slug'>){return `/teatro/${show.slug}/`}

// Keep verified content separate from the layout. No mockup dates are published.
export const theatre = {
 title:'Teatro',
 subtitle:'Storie, persone e vita vera.\nSul palco.',
 introduction:'Uno sguardo ironico e sincero sulla quotidianità, tra storie di famiglia, relazioni, generazioni e tutte le cose che non funzionano (ma ci fanno ridere).',
 description:'Scopri gli spettacoli teatrali di Peppe Ventura, le prossime date, i progetti dal vivo e i biglietti.',
 hero:'/images/theatre/hero-752.webp',
 heroAlt:'Peppe Ventura sul palco, in abito scuro, mentre si rivolge al pubblico',
 show:{
  title:'Chiamami Papà',
  description:'Una commedia sulle relazioni e sulla famiglia, quando crescere significa fare i conti anche con i propri genitori. Scritta da Peppe Ventura e Raffaele Nolli.',
  image:'/images/theatre/chiamami-papa-poster-960.webp',
  imageAlt:'Locandina ufficiale di Chiamami Papà: Peppe Ventura, Raffaele Nolli, Paolo Cerrone e Giusy Andolfi; Teatro Acacia, 9 dicembre 2026, ore 21:00',
  tickets:'https://www.ticketone.it/event/peppe-ventura-chiamami-papa-teatro-acacia-22412307/',
  details:'/teatro/chiamami-papa/',
  verifiedSource:'https://www.azzurroservice.net/biglietti/chiamami-pap/',
 },
};
export const theatreDates = [{
 day:'09',month:'DIC',monthName:'dicembre',year:'2026',city:'Napoli',venue:'Teatro Acacia',
 startDate:'2026-12-09T21:00:00+01:00',time:'21:00',
 streetAddress:'Via Raffaele Tarantino 10',
 soldOut:true,tickets:'',
},{
 day:'13',month:'MAR',monthName:'marzo',year:'2027',city:'Napoli',venue:'Teatro Acacia',
 startDate:'2027-03-13T21:00:00+01:00',time:'21:00',
 streetAddress:'Via Raffaele Tarantino 10',
 soldOut:false,tickets:theatre.show.tickets,
}];
// Foto di scena fornite da Peppe (16/11/2026). Ognuna è usata solo qui.
export const theatreGallery = [
 {image:'scena-insieme',width:1200,height:800,alt:'Peppe Ventura in scena con altri due attori, seduti in una camera da letto ricostruita sul palco'},
 {image:'sguardo',width:800,height:1200,alt:'Peppe Ventura seduto sul bordo del letto in scena, guarda verso il pubblico'},
 {image:'gesto',width:800,height:1200,alt:'Peppe Ventura seduto su uno sgabello blu, con il braccio alzato durante una scena'},
 {image:'telefono',width:800,height:1200,alt:'Peppe Ventura in pigiama parla al telefono, con la mano sul fianco'},
 {image:'luci-sala',width:1200,height:800,alt:'Il pubblico in sala illumina il teatro con le torce dei telefoni'},
];

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
  tickets:'https://www.ticketone.it/event/peppe-ventura-chiamami-papa-teatro-acacia-22006897/',
  details:'/teatro/chiamami-papa/',
  verifiedSource:'https://www.azzurroservice.net/biglietti/chiamami-pap/',
 },
};
export const theatreDates = [{
 day:'09',month:'DIC',year:'2026',city:'Napoli',venue:'Teatro Acacia',
 startDate:'2026-12-09T21:00:00+01:00',time:'21:00',
 streetAddress:'Via Raffaele Tarantino 10',
 tickets:theatre.show.tickets,
}];
// Deliberately explicit placeholders: these are not claims about existing works.
export const otherShows = [
 {image:'/images/theatre/microphone.webp',title:'Titolo da confermare'},
 {image:'/images/theatre/suitcase.webp',title:'Titolo da confermare'},
 {image:'/images/theatre/chair.webp',title:'Titolo da confermare'},
];
export const theatreGallery = [
 {image:'audience',alt:'Peppe Ventura di spalle sul palco, davanti al pubblico'},
 {image:'stage-profile',alt:'Peppe Ventura sul palco indica una persona nel pubblico'},
 {image:'presentation',alt:'Peppe Ventura sul palco con microfono e un riconoscimento in mano'},
 {image:'backstage',alt:'Peppe Ventura con le mani unite durante una scena, in bianco e nero'},
 {image:'live',alt:'Peppe Ventura in abito scuro parla al microfono sul palco'},
];

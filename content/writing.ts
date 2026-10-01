// Only verified books and a sourced quotation. Editorial cards are explicit placeholders.
export const writing={
 title:'Scrivo',
 subtitle:'Parole per capire,\nridere e restare umani.',
 introduction:'Racconti, libri, articoli e pensieri su ciò che mi attraversa: la vita, le relazioni, la famiglia, l’ironia e le contraddizioni del presente.',
 description:'Scopri i libri, gli scritti e gli appunti di Peppe Ventura: storie, riflessioni e contenuti originali dell’autore.',
 hero:'/images/writing/portrait-960.webp',
 heroAlt:'Peppe Ventura con il libro L’hai scelto tu tra le mani',
 book:{
  title:'L’hai scelto tu',
  subtitle:'Amore, fragilità e crescita.',
  description:'Francesco cerca il proprio posto e trova nella scrittura una voce. L’incontro con Elena lo attraversa: amore, perdita e crescita diventano il centro di una storia sulle fragilità e sulle scelte.',
  image:'/images/writing/cover-600.webp',
  details:'/libri/l-hai-scelto-tu/',
  purchase:'https://www.amazon.it/Lhai-scelto-tu-Peppe-Ventura/dp/B0FJMM9GH6',
  source:'https://www.metropolisweb.it/2025/08/05/dal-web-alla-stampa-peppe-ventura-racconta-suo-libro-lhai-scelto-tu/',
 },
 otherBook:{
  title:'Caro prof ti scrivo…',
  authors:['Samuele Ciambriello','Peppe Ventura'],
  description:'Con Samuele Ciambriello. Un dialogo tra studenti, parole e domande sul futuro.',
  publisher:'Rogiosi Editore',
  source:'https://rogiosi.it/product/caro-prof-ti-scrivo/',
  details:'/libri/caro-prof-ti-scrivo/',
 },
 quotation:{
  text:'Per me è un rifugio e una salvezza.',
  context:'Peppe Ventura, sulla scrittura',
  sourceLabel:'Intervista a Metropolis · 5 agosto 2025',
  source:'https://www.metropolisweb.it/2025/08/05/dal-web-alla-stampa-peppe-ventura-racconta-suo-libro-lhai-scelto-tu/',
 },
};
export const writingNotes=[
 {id:'persone',category:'Persone',image:'people'},
 {id:'vita-adulta',category:'Vita adulta',image:'growing'},
 {id:'teatro',category:'Teatro',image:'stage'},
 {id:'scrittura',category:'Scrittura',image:'notes'},
].map(note=>({...note,title:'Titolo da definire',excerpt:'Spazio per un futuro testo originale. Il contenuto sarà pubblicato qui.',dateLabel:'Data da definire'}));

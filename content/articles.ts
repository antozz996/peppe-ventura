import records from './articles.json';
import {articleSchema,isPublishedArticle,type Article} from '@/lib/article-model';

// CMS adapters can return the same validated records. Drafts never enter public queries.
const parsed=records.map(record=>articleSchema.parse(record));
if(new Set(parsed.map(article=>article.slug)).size!==parsed.length)throw new Error('Slug articolo duplicato');
export function getPublishedArticles(){return parsed.filter(isPublishedArticle)}
export function getPublishedArticle(slug:string){return getPublishedArticles().find(article=>article.slug===slug)}
export function relatedArticlesFor(article:Article){const available=getPublishedArticles().filter(item=>item.slug!==article.slug);const selected=article.relatedArticles.map(slug=>available.find(item=>item.slug===slug)).filter((item):item is NonNullable<typeof item>=>!!item);const sameTopic=available.filter(item=>!selected.includes(item)&&(item.category===article.category||item.tags.some(tag=>article.tags.includes(tag))));return [...selected,...sameTopic].slice(0,3)}

// This is a layout demonstration, never an article, and never included in public queries.
export const articlePreview:Article={
 slug:'anteprima-template',status:'review',approved:false,
 title:'Titolo del prossimo appunto',deck:'Uno spazio per le parole, con il tempo di leggerle.',
 excerpt:'Anteprima dimostrativa del template editoriale. Il testo originale sarà fornito e approvato da Peppe Ventura.',
 category:'Scrittura',tags:[],author:{name:'Peppe Ventura',url:'/chi-sono/'},
 heroImage:{src:'/images/books/reading-960.webp',srcSet:'/images/books/reading-480.webp 480w, /images/books/reading-960.webp 960w',width:960,height:1280,alt:'Dettaglio delle mani che sfogliano un libro',caption:'Fotografia editoriale fornita per il sito. Immagine dimostrativa del template.'},
 content:[
  {type:'paragraph',lead:true,text:[{text:'Questo è un segnaposto di impaginazione. Qui entrerà il primo paragrafo di un testo originale, scritto o approvato da Peppe Ventura.'}]},
  {type:'paragraph',text:[{text:'Il contenuto dimostrativo serve a vedere come si legge la pagina: i paragrafi, il ritmo e lo spazio tra le parole. Non è un articolo e non racconta esperienze personali dell’autore.'}]},
  {type:'heading',level:2,id:'primo-passaggio',text:'Un passaggio del testo'},
  {type:'paragraph',text:[{text:'Qui proseguirà il racconto. I collegamenti potranno accompagnare la lettura, quando pertinenti, verso '},{text:'Scrivo',href:'/scrivo/'},{text:', un libro, uno spettacolo o un altro appunto. Le parole in '},{text:'evidenza',bold:true},{text:' manterranno un tono semplice e leggibile.'}]},
  {type:'quote',text:'Qui potrà trovare spazio una citazione verificata.',attribution:'Segnaposto dimostrativo · nessuna citazione attribuita',placeholder:true},
  {type:'heading',level:3,id:'dettaglio',text:'Un dettaglio da approfondire'},
  {type:'paragraph',text:[{text:'Questo sottotitolo mostra il secondo livello della gerarchia interna. Verrà utilizzato solo quando il testo avrà bisogno di un approfondimento, senza interrompere inutilmente la lettura.'}]},
  {type:'list',items:[[{text:'Una prima osservazione da sviluppare nel testo originale.'}],[{text:'Un altro passaggio, quando sarà utile al racconto.'}],[{text:'Una conclusione da scrivere e approvare.'}]]},
  {type:'callout',title:'Appunto a margine',text:[{text:'Segnaposto per una nota breve, una precisazione o un dettaglio che merita uno spazio distinto.'}]},
  {type:'heading',level:2,id:'ultima-pagina',text:'Prima di chiudere'},
  {type:'paragraph',text:[{text:'Qui entrerà la conclusione dell’appunto. Una volta approvato il testo, questa impaginazione lascerà spazio alla voce dell’autore, con la stessa cura su desktop e su mobile.'}]},
 ],showToc:false,relatedArticles:[],
 seo:{title:'Anteprima template articolo | Peppe Ventura',description:'Anteprima dimostrativa del template singolo articolo. Nessun testo è attribuito a Peppe Ventura.'},
};

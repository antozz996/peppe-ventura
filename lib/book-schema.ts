import {site} from '@/content/site';
import {bookPath,type Book} from '@/content/books';
export function bookSchema(book:Book){const url=`${site.origin}${bookPath(book)}`;return {'@context':'https://schema.org','@graph':[
 {'@type':'WebPage','@id':`${url}#page`,url,name:book.seo.title,description:book.seo.description,inLanguage:'it-IT',mainEntity:{'@id':`${url}#book`},isPartOf:{'@id':`${site.origin}/#website`},breadcrumb:{'@id':`${url}#breadcrumb`}},
 {'@type':'Book','@id':`${url}#book`,name:book.title,url,description:book.shortDescription,image:`${site.origin}${book.cover.src}`,author:{'@type':'Person','@id':`${site.origin}/#person`,name:book.author,url:`${site.origin}/chi-sono/`},...(book.isbn?{isbn:book.isbn}:{}),...(book.language?{inLanguage:book.language==='Italiano'?'it':book.language}:{}),...(book.year?{datePublished:String(book.year)}:{}),...(book.publisher?{publisher:{'@type':'Organization',name:book.publisher}}:{}),...(book.pages?{numberOfPages:book.pages}:{}),...(book.format==='Brossura'?{bookFormat:'https://schema.org/Paperback'}:{})},
 {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{name:'Home',item:`${site.origin}/`},{name:'Scrivo',item:`${site.origin}/scrivo/`},{name:book.title,item:url}].map((item,index)=>({'@type':'ListItem',position:index+1,...item}))},
 ]}}

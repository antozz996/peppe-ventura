import {site} from '@/content/site';
import {showPath,type Show} from '@/content/shows';
export function showSchema(show:Show){
 const url=`${site.origin}${showPath(show)}`;
 return {'@context':'https://schema.org','@graph':[
  {'@type':'WebPage','@id':`${url}#page`,url,name:show.seo.title,description:show.seo.description,inLanguage:'it-IT',isPartOf:{'@id':`${site.origin}/#website`},about:{'@id':`${site.origin}/#person`},breadcrumb:{'@id':`${url}#breadcrumb`}},
  {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{name:'Home',item:`${site.origin}/`},{name:'Teatro',item:`${site.origin}/teatro/`},{name:show.title,item:url}].map((item,index)=>({'@type':'ListItem',position:index+1,...item}))},
  ...show.dates.map(date=>({'@type':'TheaterEvent','@id':`${url}#${date.id}`,name:`${show.title} – Peppe Ventura`,description:show.description,url,image:`${site.origin}${show.heroImage.src}`,startDate:date.startDate,eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',eventStatus:date.status==='cancelled'?'https://schema.org/EventCancelled':date.status==='postponed'?'https://schema.org/EventPostponed':'https://schema.org/EventScheduled',location:{'@type':'Place',name:date.venue,address:{'@type':'PostalAddress',streetAddress:date.address,addressLocality:date.city,addressCountry:'IT'}},performer:{'@type':'Person','@id':`${site.origin}/#person`,name:site.name,url:`${site.origin}/`},...(date.organizer?{organizer:{'@type':'Organization',name:date.organizer}}:{}),...(date.offer&&date.ticketUrl?{offers:{'@type':'Offer',url:date.ticketUrl,price:date.offer.price,priceCurrency:date.offer.currency}}:{})})),
  ...(show.faq.length?[{'@type':'FAQPage','@id':`${url}#faq`,mainEntity:show.faq.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))}]:[]),
  ...(show.trailer?[{'@type':'VideoObject',name:show.trailer.name,description:show.trailer.description,thumbnailUrl:`${site.origin}${show.trailer.poster.src}`,uploadDate:show.trailer.uploadDate,embedUrl:show.trailer.embedUrl,...(show.trailer.duration?{duration:show.trailer.duration}:{})}]:[]),
 ]};
}

// Request time stays on the server; clients never reclassify or delete dates.
export function showRequestTime(){return Date.now()}

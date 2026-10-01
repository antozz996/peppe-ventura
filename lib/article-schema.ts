import {site} from '@/content/site';
import {articlePath,isPublishedArticle,type Article} from './article-model';
export function articleSchemaGraph(article:Article){if(!isPublishedArticle(article))return null;const url=`${site.origin}${articlePath(article)}`;const image=article.ogImage??article.heroImage;return {'@context':'https://schema.org','@graph':[
 {'@type':'BlogPosting','@id':`${url}#article`,headline:article.title,description:article.seo.description,...(image?{image:new URL(image.src,site.origin).href}:{}),datePublished:article.publishedAt,...(article.updatedAt?{dateModified:article.updatedAt}:{}),author:{'@type':'Person','@id':`${site.origin}/#person`,name:article.author.name,url:`${site.origin}${article.author.url}`},mainEntityOfPage:{'@type':'WebPage','@id':url},url,inLanguage:'it-IT',articleSection:article.category},
 {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`,itemListElement:[{name:'Home',item:`${site.origin}/`},{name:'Scrivo',item:`${site.origin}/scrivo/`},{name:'Appunti',item:`${site.origin}/appunti/`},{name:article.title,item:url}].map((item,index)=>({'@type':'ListItem',position:index+1,...item}))},
 ]}}

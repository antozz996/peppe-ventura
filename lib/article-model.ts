import {z} from 'zod';

const safeHref=z.string().refine(value=>{if(value.startsWith('/')&&!value.startsWith('//')&&!value.includes('\\'))return true;try{const url=new URL(value);return url.protocol==='https:'&&!!url.hostname}catch{return false}},'Usare un percorso interno o un URL HTTPS');
export const articleImageSchema=z.object({src:safeHref,srcSet:z.string().optional(),width:z.number().positive(),height:z.number().positive(),alt:z.string().min(1),caption:z.string().optional()});
const inlineSchema=z.object({text:z.string(),href:safeHref.optional(),bold:z.boolean().optional(),italic:z.boolean().optional()});
const richText=z.array(inlineSchema).min(1);
export const articleBlockSchema=z.discriminatedUnion('type',[
 z.object({type:z.literal('paragraph'),text:richText,lead:z.boolean().optional()}),
 z.object({type:z.literal('heading'),level:z.union([z.literal(2),z.literal(3)]),id:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),text:z.string().min(1)}),
 z.object({type:z.literal('quote'),text:z.string().min(1),attribution:z.string().optional(),sourceUrl:safeHref.optional(),placeholder:z.boolean().optional()}),
 z.object({type:z.literal('image'),image:articleImageSchema}),
 z.object({type:z.literal('gallery'),images:z.array(articleImageSchema).min(1).max(6)}),
 z.object({type:z.literal('list'),ordered:z.boolean().optional(),items:z.array(richText).min(1)}),
 z.object({type:z.literal('callout'),title:z.string().min(1),text:richText}),
 z.object({type:z.literal('video'),title:z.string().min(1),url:safeHref,poster:articleImageSchema}),
]);
const dateSchema=z.string().datetime({offset:true});
export const articleSchema=z.object({
 slug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).refine(slug=>slug!=='anteprima-template','Slug riservato all’anteprima'),
 status:z.enum(['draft','review','published']),approved:z.boolean().default(false),
 title:z.string().min(1),deck:z.string().optional(),excerpt:z.string().min(1),
 category:z.string().min(1),tags:z.array(z.string()).default([]),
 author:z.object({name:z.literal('Peppe Ventura'),url:z.literal('/chi-sono/')}),
 publishedAt:dateSchema.optional(),updatedAt:dateSchema.optional(),
 heroImage:articleImageSchema.optional(),ogImage:articleImageSchema.optional(),
 content:z.array(articleBlockSchema).min(1),showToc:z.boolean().default(false),
 relatedArticles:z.array(z.string()).max(3).default([]),relatedBook:z.string().optional(),relatedShow:z.string().optional(),
 relatedVideo:z.object({title:z.string(),href:safeHref,poster:articleImageSchema.optional()}).optional(),
 searchIntent:z.object({topic:z.string().min(1),question:z.string().min(1),intent:z.string().min(1),audience:z.string().min(1)}).optional(),
 seo:z.object({title:z.string().min(1),description:z.string().min(1)}),
}).superRefine((article,ctx)=>{
 if(article.status==='published'){
  if(!article.approved)ctx.addIssue({code:z.ZodIssueCode.custom,path:['approved'],message:'Pubblicazione consentita solo dopo approvazione'});
  if(!article.publishedAt)ctx.addIssue({code:z.ZodIssueCode.custom,path:['publishedAt'],message:'Inserire la data reale di pubblicazione'});
  if(!article.searchIntent)ctx.addIssue({code:z.ZodIssueCode.custom,path:['searchIntent'],message:'Definire il tema e l’intento prima della pubblicazione'});
  if(article.content.some(block=>block.type==='quote'&&block.placeholder))ctx.addIssue({code:z.ZodIssueCode.custom,path:['content'],message:'Rimuovere i segnaposto prima della pubblicazione'});
 }
 if(article.updatedAt&&(!article.publishedAt||Date.parse(article.updatedAt)<Date.parse(article.publishedAt)))ctx.addIssue({code:z.ZodIssueCode.custom,path:['updatedAt'],message:'L’aggiornamento non può precedere la pubblicazione'});
 let hasH2=false;const ids=new Set<string>(['article-content','article-body','article-related-title','article-book-title','article-newsletter-title','article-author-title','article-newsletter-email','newsletter-status']);
 article.content.forEach((block,index)=>{if(block.type!=='heading')return;if(block.level===2)hasH2=true;if(block.level===3&&!hasH2)ctx.addIssue({code:z.ZodIssueCode.custom,path:['content',index],message:'Un H3 deve seguire un H2'});if(ids.has(block.id))ctx.addIssue({code:z.ZodIssueCode.custom,path:['content',index,'id'],message:'ID duplicato'});ids.add(block.id)});
});
export type Article=z.infer<typeof articleSchema>;
export type ArticleBlock=z.infer<typeof articleBlockSchema>;
export type ArticleImage=z.infer<typeof articleImageSchema>;
export type InlineText=z.infer<typeof inlineSchema>;
export type PublishedArticle=Article&{status:'published';approved:true;publishedAt:string};
export function isPublishedArticle(article:Article):article is PublishedArticle{return article.status==='published'&&article.approved&&!!article.publishedAt}
export function articleText(article:Article){return article.content.flatMap(block=>{switch(block.type){case 'paragraph':case 'callout':return block.text.map(run=>run.text).join('');case 'heading':case 'quote':return block.text;case 'list':return block.items.map(item=>item.map(run=>run.text).join(''));default:return []}}).join(' ')}
export function readingMinutes(article:Article){return Math.max(1,Math.ceil(articleText(article).trim().split(/\s+/).filter(Boolean).length/220))}
export function articlePath(article:Pick<Article,'slug'>){return `/appunti/${article.slug}/`}

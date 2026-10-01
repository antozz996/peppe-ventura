import {notFound} from 'next/navigation';
import {getPublishedArticle,getPublishedArticles} from '@/content/articles';
import {ArticleTemplate} from '@/components/articles/article-template';
import {articleMetadata} from '@/lib/article-metadata';
import {articleSchemaGraph} from '@/lib/article-schema';
import '../article.css';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return getPublishedArticles().map(article=>({slug:article.slug}))}
export async function generateMetadata({params}:Props){const article=getPublishedArticle((await params).slug);if(!article)notFound();return articleMetadata(article)}
export default async function ArticlePage({params}:Props){const article=getPublishedArticle((await params).slug);if(!article)notFound();return <><ArticleTemplate article={article}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchemaGraph(article)).replace(/</g,'\\u003c')}}/></>}

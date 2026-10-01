import {notFound} from 'next/navigation';
import {site} from '@/content/site';
import {articlePreview} from '@/content/articles';
import {ArticleTemplate} from '@/components/articles/article-template';
import {articleMetadata} from '@/lib/article-metadata';
import '../article.css';
export const metadata=articleMetadata(articlePreview);
export default function ArticlePreviewPage(){if(site.production)notFound();return <ArticleTemplate article={articlePreview} preview/>}

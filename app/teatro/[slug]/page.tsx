import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ShowTemplate} from '@/components/shows/show-template';
import {getShow,shows,showPath} from '@/content/shows';
import {site} from '@/content/site';
import {showSchema,showRequestTime} from '@/lib/show-schema';
import './show.css';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return shows.map(show=>({slug:show.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const show=getShow((await params).slug);if(!show)return {};return {title:show.seo.title,description:show.seo.description,alternates:{canonical:showPath(show)},openGraph:{title:show.seo.title,description:show.seo.description,url:`${site.origin}${showPath(show)}`,type:'website',locale:'it_IT',siteName:site.name,images:[{url:show.heroImage.src,width:show.heroImage.width,height:show.heroImage.height,alt:show.heroImage.alt}]},twitter:{card:'summary_large_image',title:show.seo.title,description:show.seo.description,images:[show.heroImage.src]}}}
export default async function ShowPage({params}:Props){const show=getShow((await params).slug);if(!show)notFound();return <><ShowTemplate show={show} now={showRequestTime()}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(showSchema(show)).replace(/</g,'\\u003c')}}/></>}

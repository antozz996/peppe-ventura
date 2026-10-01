import type {MetadataRoute} from 'next';
import {site} from '@/content/site';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(site.production?{allow:'/'}:{disallow:'/'})},sitemap:`${site.origin}/sitemap.xml`}}

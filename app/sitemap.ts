import type {MetadataRoute} from 'next';
import {site} from '@/content/site';
import {shows,showPath} from '@/content/shows';
import {books,bookPath} from '@/content/books';
export default function sitemap():MetadataRoute.Sitemap{return [{url:`${site.origin}/`,priority:1},{url:`${site.origin}/teatro/`,priority:.9},{url:`${site.origin}/scrivo/`,priority:.9},{url:`${site.origin}/video/`,priority:.9},{url:`${site.origin}/contatti/`,priority:.8},{url:`${site.origin}/privacy/`,priority:.3},{url:`${site.origin}/press/`,priority:.6},...shows.map(show=>({url:`${site.origin}${showPath(show)}`,priority:.8})),...books.map(book=>({url:`${site.origin}${bookPath(book)}`,priority:.8}))]}

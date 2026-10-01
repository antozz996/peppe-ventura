import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {BookTemplate} from '@/components/books/book-template';
import {getBook,books,bookPath} from '@/content/books';
import {site} from '@/content/site';
import {bookSchema} from '@/lib/book-schema';
import './book.css';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return books.map(book=>({slug:book.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const book=getBook((await params).slug);if(!book)return {};const image=book.heroImage??book.cover;return {title:book.seo.title,description:book.seo.description,alternates:{canonical:bookPath(book)},openGraph:{title:book.seo.title,description:book.seo.description,url:`${site.origin}${bookPath(book)}`,type:'book',locale:'it_IT',siteName:site.name,authors:[book.author],...(book.isbn?{isbn:book.isbn}:{}),images:[{url:image.src,width:image.width,height:image.height,alt:image.alt}]},twitter:{card:'summary_large_image',title:book.seo.title,description:book.seo.description,images:[image.src]}}}
export default async function BookPage({params}:Props){const book=getBook((await params).slug);if(!book)notFound();return <><BookTemplate book={book}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(bookSchema(book)).replace(/</g,'\\u003c')}}/></>}

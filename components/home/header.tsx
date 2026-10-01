'use client';
import {useState} from 'react';
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription,SheetClose} from '@/components/ui/sheet';
import {navigation,site} from '@/content/site';
import {Icon} from './icons';
export function Header({currentPath='/'}:{currentPath?:string}){
 const [open,setOpen]=useState(false);
 const desktopNavigation=navigation.filter(n=>n.label!=='Chi sono');
 desktopNavigation.splice(desktopNavigation.length-1,0,navigation.find(n=>n.label==='Chi sono')!);
 return <header className="site-header">
  <a href="/" className="wordmark" aria-label="Peppe Ventura — Home"><span>{site.name}</span><small>{site.descriptor}</small></a>
  <nav className="desktop-nav" aria-label="Navigazione principale">{desktopNavigation.map(n=><a key={n.href} href={n.href} aria-current={n.href===currentPath?'page':undefined} data-pending={!['/','/teatro/','/scrivo/','/video/','/chi-sono/','/contatti/'].includes(n.href)?'true':undefined} data-event={n.event}>{n.label}</a>)}</nav>
  <div className="header-actions"><Sheet open={open} onOpenChange={setOpen}>
   <SheetTrigger asChild><button className="menu-toggle" aria-label="Apri menu"><Icon name="menu"/></button></SheetTrigger>
   <SheetContent side="right" className="mobile-menu" showCloseButton={false}><SheetTitle>PEPPE VENTURA</SheetTitle><SheetClose asChild><button className="menu-close" aria-label="Chiudi menu"><span aria-hidden="true">×</span></button></SheetClose><SheetDescription className="sr-only">Navigazione del sito</SheetDescription><nav aria-label="Navigazione mobile">{navigation.map(n=><a key={n.href} href={n.href} aria-current={n.href===currentPath?'page':undefined} data-pending={!['/','/teatro/','/scrivo/','/video/','/chi-sono/','/contatti/'].includes(n.href)?'true':undefined} data-event={n.event} onClick={()=>setOpen(false)}>{n.label}</a>)}</nav></SheetContent>
  </Sheet><a className="button primary header-ticket" href={site.tickets} target="_blank" rel="noopener noreferrer" data-event="ticket_click_header"><Icon name="ticket"/><span>Biglietti</span></a></div>
 </header>;
}

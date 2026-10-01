import Link from 'next/link';
import {navigation, site} from '@/content/site';

export function SiteFooter(){
 return <footer className="site-footer" id="site-footer" aria-label="Informazioni e navigazione del sito">
  <div className="site-footer-inner">
   <div className="site-footer-identity"><Link href="/" className="site-footer-name">{site.name}</Link><p>{site.descriptor}</p></div>
   <nav aria-label="Navigazione nel footer"><ul>{navigation.map(item=><li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}<li><Link className="site-footer-press" href="/press/">Press e Media kit</Link></li></ul></nav>
   <p className="site-footer-copyright">© {new Date().getFullYear()} {site.name}</p>
  </div>
 </footer>;
}

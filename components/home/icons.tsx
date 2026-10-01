import type { SVGProps } from 'react';
type Props = SVGProps<SVGSVGElement> & {name:string};
export function Icon({name,...props}:Props){
 const common={viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.6,'aria-hidden':true as const,...props};
 switch(name){
 case 'ticket': return <svg {...common}><path d="m4 14 10-10 3 3a2.5 2.5 0 0 0 3 3l-10 10-3-3a2.5 2.5 0 0 0-3-3Z"/><path d="m12 8 4 4m-6-2 1 1m-3 1 1 1"/></svg>;
 case 'arrow': return <svg {...common}><path d="M5 12h14m-6-6 6 6-6 6"/></svg>;
 case 'down': return <svg {...common}><path d="M12 4v16m-5-5 5 5 5-5"/></svg>;
 case 'menu':return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
 case 'instagram': return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
 case 'tiktok': return <svg {...common} fill="currentColor" stroke="none"><path d="M16 2h-3v13a3 3 0 1 1-3-3v-3a6 6 0 1 0 6 6V8a8 8 0 0 0 5 2V7a5 5 0 0 1-5-5Z"/></svg>;
 case 'youtube': return <svg {...common} fill="currentColor" stroke="none"><path d="M21 6c-.3-1-1-1.6-2-1.8a53 53 0 0 0-14 0C4 4.4 3.3 5 3 6a24 24 0 0 0 0 12c.3 1 1 1.6 2 1.8a53 53 0 0 0 14 0c1-.2 1.7-.8 2-1.8a24 24 0 0 0 0-12Z"/><path d="m10 8 6 4-6 4Z" fill="#100909"/></svg>;
 case 'facebook': return <svg {...common} fill="currentColor" stroke="none"><circle cx="12" cy="12" r="10"/><path d="M13.5 22v-8h2.7l.5-3h-3.2V9.2c0-.8.4-1.3 1.4-1.3H17V5.2a19 19 0 0 0-2.5-.2c-2.6 0-4.3 1.6-4.3 4.5V11H7.5v3h2.7v8Z" fill="#100909"/></svg>;
 default:return null;
 }
}

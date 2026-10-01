export function ContactIcon({name}:{name:string}){
 const paths:Record<string,React.ReactNode>={
  stage:<><path d="M3 4h18v16H3zM8 4v5l-5 4m13-9v5l5 4M8 17h8M10 14h4"/><path d="M7 4h10"/></>,
  calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5m10-5v5M3 11h18M7 15h2m3 0h2m3 0h1M7 18h2m3 0h2"/></>,
  people:<><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3H2m14-17a3 3 0 0 1 0 6m3 3a6 6 0 0 1 3 5v3h-3"/></>,
  document:<><path d="M5 2h10l5 5v15H5zM15 2v6h5M8 12h8m-8 4h8m-8 3h5"/></>,
  mail:<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 5 10 8L22 5"/></>,
  send:<><path d="m22 2-7 20-4-9L2 9 22 2ZM11 13 22 2"/></>,
 };
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

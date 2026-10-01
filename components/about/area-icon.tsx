export function AreaIcon({name}:{name:string}){
 const props={viewBox:'0 0 32 32',fill:'none',stroke:'currentColor',strokeWidth:1.4,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,'aria-hidden':true as const};
 switch(name){
  case 'pen':return <svg {...props}><path d="m20 6 6 6-13 13-7 1 1-7Z"/><path d="m17 9 6 6M7 19l6 6M25 4l3 3"/></svg>;
  case 'camera':return <svg {...props}><path d="M11 7 13 4h6l2 3h5a3 3 0 0 1 3 3v16H3V10a3 3 0 0 1 3-3Z"/><circle cx="16" cy="16" r="6"/><path d="M25 11h.01"/></svg>;
  case 'stage':return <svg {...props}><path d="M3 4h26v24H3ZM3 4l10 4-3 10-7 3M29 4 19 8l3 10 7 3M7 28v-4h18v4"/><path d="M3 8h26"/></svg>;
  case 'book':return <svg {...props}><path d="M16 7c-4-4-9-4-13-3v23c4-1 9-1 13 2 4-3 9-3 13-2V4c-4-1-9-1-13 3ZM16 7v22"/></svg>;
  case 'heart':return <svg {...props}><path d="M16 27 5 16C-3 8 8-1 16 8 24-1 35 8 27 16Z"/></svg>;
  default:return null;
 }
}

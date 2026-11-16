'use client';
import {useState} from 'react';
import type {PressBio} from '@/content/press';

export function PressBioCard({bio}:{bio:PressBio}){
 const [message,setMessage]=useState('');const [manual,setManual]=useState(false);
 const ready=(bio.approved||bio.verified)&&Boolean(bio.text?.trim());
 const textToCopy=bio.approved?bio.text:`BOZZA EDITORIALE — DA APPROVARE\n\n${bio.text??''}`;
 async function copy(){if(!ready||!textToCopy)return;try{await navigator.clipboard.writeText(textToCopy);setMessage(bio.approved?'Bio copiata.':'Bozza copiata.');window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:'press_bio_copy',format:bio.id}}));}catch{setManual(true);setMessage('Seleziona il testo per copiarlo.');}}
 return <article className="press-bio press-card"><p className="press-eyebrow">{ready?`${bio.text!.length} caratteri`:`Formato previsto · circa ${bio.targetCharacters} caratteri`}</p><h3>{bio.title}</h3>{ready?<>{!bio.approved&&<span className="press-status">Bozza da fonti verificate · Da approvare</span>}<div className="press-bio-text">{bio.text!.split(/\n{2,}/).map(paragraph=><p key={paragraph.slice(0,40)}>{paragraph}</p>)}</div></>:<><p>Il testo ufficiale sarà disponibile dopo l’approvazione.</p><span className="press-status">Segnaposto · Bio in preparazione</span></>}<button type="button" className="button secondary" disabled={!ready} onClick={copy}>{bio.approved?'Copia testo':'Copia bozza'}</button>{bio.file&&<a className="press-text-link" href={bio.file} download>Scarica TXT<span className="sr-only"> · {bio.title}{!bio.approved?' · Bozza da approvare':''}</span></a>}{manual&&<label className="press-manual-copy">Testo della bio<textarea readOnly value={textToCopy??''} onFocus={event=>event.currentTarget.select()}/></label>}<p className="press-copy-result" role="status" aria-live="polite">{message}</p></article>;
}

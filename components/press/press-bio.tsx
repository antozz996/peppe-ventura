'use client';
import {useState} from 'react';
import type {PressBio} from '@/content/press';

export function PressBioCard({bio}:{bio:PressBio}){
 const [message,setMessage]=useState('');const [manual,setManual]=useState(false);
 const ready=(bio.approved||bio.verified)&&Boolean(bio.text?.trim());
 const textToCopy=bio.approved?bio.text:`BOZZA EDITORIALE — DA APPROVARE\n\n${bio.text??''}`;
 async function copy(){if(!ready||!textToCopy)return;try{await navigator.clipboard.writeText(textToCopy);setMessage(bio.approved?'Bio copiata.':'Bozza copiata.');window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:'press_bio_copy',format:bio.id}}));}catch{setManual(true);setMessage('Seleziona il testo per copiarlo.');}}
 return <article className="press-bio press-card"><p className="press-eyebrow">{ready?`${bio.text!.length} caratteri`:`Formato previsto · circa ${bio.targetCharacters} caratteri`}</p><h3>{bio.title}</h3>{ready?<><span className="press-status">{bio.approved?'Testo approvato':'Bozza da fonti verificate · Da approvare'}</span><p className="press-bio-text">{bio.text!.length>240?`${bio.text!.slice(0,240).replace(/\s+\S*$/,'')}…`:bio.text}</p>{bio.text!.length>240&&<details className="press-bio-full"><summary>Leggi la bio completa</summary><p>{bio.text}</p></details>}</>:<><p>Il testo ufficiale sarà disponibile dopo l’approvazione.</p><span className="press-status">Segnaposto · Bio in preparazione</span></>}<button type="button" className="button secondary" disabled={!ready} onClick={copy}>{bio.approved?'Copia testo':'Copia bozza'}</button>{bio.file&&<a className="press-text-link" href={bio.file} download>Scarica TXT<span className="sr-only"> · {bio.title}{!bio.approved?' · Bozza da approvare':''}</span></a>}{manual&&<label className="press-manual-copy">Testo della bio<textarea readOnly value={textToCopy??''} onFocus={event=>event.currentTarget.select()}/></label>}<p className="press-copy-result" role="status" aria-live="polite">{message}</p></article>;
}

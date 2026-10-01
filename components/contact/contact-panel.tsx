'use client';
import {useRef,useState} from 'react';
import {contact,contactCategories,contactRequestTypes} from '@/content/contact';
import {Icon} from '@/components/home/icons';
import {ContactIcon} from './contact-icon';

type Field='name'|'email'|'type'|'message';
type Errors=Partial<Record<Field,string>>;
function track(name:string){window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name}}));}
export function ContactPanel({enabled,privacy}:{enabled:boolean;privacy:string|null}){
 const formRef=useRef<HTMLFormElement>(null);
 const started=useRef<number|null>(null);
 const [requestType,setRequestType]=useState('');
 const [errors,setErrors]=useState<Errors>({});
 const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle');
 const [feedback,setFeedback]=useState('');
 function start(){if(started.current===null){started.current=Date.now();track('contact_form_start');}}
 function choose(value:string,event:string){start();setRequestType(value);track(event);document.getElementById('scrivimi')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});formRef.current?.querySelector<HTMLInputElement>('#contact-name')?.focus({preventScroll:true});}
 async function submit(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();if(status==='loading')return;
  const form=event.currentTarget;const data=new FormData(form);
  const name=String(data.get('name')??'').trim();const email=String(data.get('email')??'').trim();const message=String(data.get('message')??'').trim();
  const next:Errors={};
  if(!name)next.name='Inserisci nome e cognome.';
  if(!/^\S+@\S+\.\S+$/.test(email))next.email='Inserisci un indirizzo email valido.';
  if(!contactRequestTypes.includes(requestType))next.type='Scegli il tipo di richiesta.';
  if(!message)next.message='Scrivi la tua idea o proposta.';
  setErrors(next);setFeedback('');
  const first=Object.keys(next)[0] as Field|undefined;
  if(first){form.querySelector<HTMLElement>(`#contact-${first}`)?.focus();return;}
  if(!enabled){setStatus('error');setFeedback(`Il form non è ancora attivo. Nessun messaggio è stato inviato. Per ora puoi scrivermi a ${contact.email}.`);return;}
  setStatus('loading');track('contact_form_submit');
  try{
   const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,type:requestType,message,website:data.get('website'),startedAt:started.current}),signal:AbortSignal.timeout(15000)});
   const result=await response.json() as {message?:string};
   if(!response.ok)throw new Error(result.message);
   setStatus('success');setFeedback('Messaggio inviato. Grazie per avermi scritto.');track('contact_form_success');form.reset();setRequestType('');started.current=null;
  }catch(error){setStatus('error');setFeedback(error instanceof Error&&error.name!=='TimeoutError'&&error.name!=='AbortError'&&error.message!=='Failed to fetch'?error.message:`Il messaggio non è stato inviato. Riprova più tardi o scrivimi a ${contact.email}.`);track('contact_form_error');}
 }
 const fieldError=(field:Field)=>errors[field]?<span className="contact-field-error" id={`error-${field}`}>{errors[field]}</span>:null;
 return <>
  <section className="contact-categories" aria-label="Per cosa possiamo lavorare insieme">{contactCategories.map(category=><article key={category.value}><button type="button" onClick={()=>choose(category.value,category.event)}><ContactIcon name={category.icon}/><span className="contact-category-copy"><span className="contact-category-title">{category.title}</span><span>{category.description}</span></span><span className="contact-arrow"><Icon name="arrow"/></span></button></article>)}</section>
  <section className="contact-panel" id="scrivimi" aria-labelledby="contact-form-title">
   <div className="contact-panel-intro"><h2 id="contact-form-title">Scrivimi</h2><p>Raccontami la tua idea o la tua proposta.<br/>Ti risponderò il prima possibile.</p></div>
   <form ref={formRef} noValidate onSubmit={submit} onFocusCapture={start} className="contact-form" aria-describedby="contact-form-note" aria-busy={status==='loading'}>
    <div className="contact-form-row">
     <div className="contact-field"><label htmlFor="contact-name">Nome e cognome</label><input id="contact-name" name="name" autoComplete="name" maxLength={100} required disabled={status==='loading'} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name?'error-name':undefined}/>{fieldError('name')}</div>
     <div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required disabled={status==='loading'} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email?'error-email':undefined}/>{fieldError('email')}</div>
    </div>
    <div className="contact-field"><label htmlFor="contact-type">Tipo di richiesta</label><select id="contact-type" name="type" value={requestType} onChange={event=>setRequestType(event.target.value)} required disabled={status==='loading'} aria-invalid={Boolean(errors.type)} aria-describedby={errors.type?'error-type':undefined}><option value="">Scegli una voce</option>{contactRequestTypes.map(type=><option key={type}>{type}</option>)}</select>{fieldError('type')}</div>
    <div className="contact-field"><label htmlFor="contact-message">Messaggio</label><textarea id="contact-message" name="message" rows={3} maxLength={5000} placeholder="La tua idea, con parole tue." required disabled={status==='loading'} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message?'error-message':undefined}/>{fieldError('message')}</div>
    <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Sito web</label><input id="contact-website" name="website" autoComplete="off" tabIndex={-1}/></div>
    <button type="submit" className="button primary contact-submit" disabled={status==='loading'}><ContactIcon name="send"/>{status==='loading'?'Invio in corso…':'Invia messaggio'}<Icon name="arrow"/></button>
    <p className="contact-form-note" id="contact-form-note">{enabled&&privacy?<>Inviando il messaggio dichiari di aver letto l’<a href={privacy}>informativa privacy</a>.</>:<>Invio non ancora attivo. <a href="/privacy/" data-pending="true">Informativa privacy</a> in preparazione.</>}</p>
    <p className={feedback?'contact-feedback':'sr-only'} role="status" aria-live="polite">{feedback}</p>
   </form>
   <aside className="contact-direct" aria-labelledby="contact-direct-title"><h3 id="contact-direct-title">Oppure contattami<br/>direttamente</h3><div className="contact-direct-items"><div className="contact-direct-item"><ContactIcon name="mail"/><div><span>Email</span>{contact.email?<a href={`mailto:${contact.email}`} data-event="contact_email_click">{contact.email}</a>:<span className="contact-unconfirmed">Recapito da confermare</span>}</div></div><a className="contact-direct-item" href={contact.instagram} target="_blank" rel="noopener noreferrer" data-event="contact_instagram_click"><Icon name="instagram"/><div><span>Instagram</span><span>{contact.instagramHandle}</span></div></a></div></aside>
  </section>
 </>;
}

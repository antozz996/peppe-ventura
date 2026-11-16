import nodemailer from 'nodemailer';
import {contact,contactRequestTypes} from '@/content/contact';
import {contactConfiguration} from '@/lib/contact-config';

const reply=(body:object,status:number)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
 const config=contactConfiguration();
 if(!config.enabled)return reply({message:'Il form non è ancora attivo. Nessun messaggio è stato inviato.'},503);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply({message:'Richiesta non valida.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return reply({message:'Formato non valido.'},415);
 const contentLength=Number(request.headers.get('content-length')??0);
 if(contentLength>12000)return reply({message:'Il messaggio è troppo lungo.'},413);
 let data:Record<string,unknown>;
 try{
  const text=await request.text();
  if(text.length>12000)return reply({message:'Il messaggio è troppo lungo.'},413);
  const parsed=JSON.parse(text);
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('Invalid body');
  data=parsed;
 }catch{return reply({message:'Controlla i dati del messaggio.'},400);}
 if(data.website || typeof data.startedAt!=='number' || Date.now()-data.startedAt<1800)return reply({message:'Non è stato possibile inviare il messaggio. Riprova.'},400);
 const name=typeof data.name==='string'?data.name.trim():'';
 const email=typeof data.email==='string'?data.email.trim():'';
 const type=typeof data.type==='string'?data.type:'';
 const message=typeof data.message==='string'?data.message.trim():'';
 if(!name||name.length>100||email.length>254||!/^\S+@\S+\.\S+$/.test(email)||!contactRequestTypes.includes(type)||!message||message.length>5000)return reply({message:'Controlla i campi obbligatori e l’indirizzo email.'},400);
 const oneLine=(value:string)=>value.replace(/[\r\n]+/g,' ').slice(0,100);
 const text=`Nuovo messaggio dal form contatti di peppeventura.it\n\nNome: ${name}\nEmail: ${email}\nTipo di richiesta: ${type}\n\nMessaggio:\n${message}\n\n—\nRispondi direttamente a questa email per scrivere a ${email}.`;
 try{
  const transport=nodemailer.createTransport({host:config.smtp.host,port:config.smtp.port,secure:config.smtp.secure,auth:{user:config.smtp.user,pass:config.smtp.password},connectionTimeout:10000,greetingTimeout:10000,socketTimeout:15000});
  const info=await transport.sendMail({from:config.from,to:config.to,replyTo:{name:oneLine(name),address:email},subject:`Sito · ${oneLine(type)} · ${oneLine(name)}`,text});
  // Solo esito tecnico del server SMTP, senza dati personali di chi scrive.
  console.log('contact_delivery_ok',JSON.stringify({messageId:info.messageId,accepted:info.accepted.length,rejected:info.rejected.length,response:info.response}));
  return reply({message:'Messaggio inviato. Grazie per avermi scritto.'},200);
 }catch(error){
  console.error('contact_delivery_failed',error instanceof Error?error.message:'unknown');
  return reply({message:`Il messaggio non è stato inviato. Riprova più tardi o scrivimi a ${contact.email}.`},502);
 }
}

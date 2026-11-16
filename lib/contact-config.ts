// Server-only configuration. Messages are delivered by email through the Aruba mailbox (SMTP).
// SMTP_PASSWORD is set only in Vercel environment variables; never expose it to the client or the repo.
export function contactConfiguration(){
 const user=process.env.SMTP_USER?.trim()||'info@peppeventura.it';
 const password=process.env.SMTP_PASSWORD??'';
 const host=process.env.SMTP_HOST?.trim()||'smtps.aruba.it';
 const port=Number(process.env.SMTP_PORT)||465;
 const to=process.env.CONTACT_TO?.trim()||user;
 const privacy=process.env.CONTACT_PRIVACY_URL?.trim()||'/privacy/';
 const validPrivacy=/^(https:\/\/|\/[^/])/.test(privacy);
 return {smtp:{host,port,secure:port===465,user,password},from:`Sito Peppe Ventura <${user}>`,to,privacy:validPrivacy?privacy:null,enabled:process.env.CONTACT_FORM_ENABLED==='true'&&Boolean(password)&&validPrivacy};
}

// Server-only configuration. Enable only after recipient, delivery and privacy are approved.
export function contactConfiguration(){
 const destination=process.env.CONTACT_DELIVERY_URL??'';
 const token=process.env.CONTACT_DELIVERY_TOKEN??'';
 const privacy=process.env.CONTACT_PRIVACY_URL??'';
 const validDestination=/^https:\/\//.test(destination);
 const validPrivacy=/^(https:\/\/|\/[^/])/.test(privacy);
 return {destination,token,privacy:validPrivacy?privacy:null,enabled:process.env.CONTACT_FORM_ENABLED==='true'&&validDestination&&Boolean(token)&&validPrivacy};
}

'use client';
import {useEffect} from 'react';
export function ShowInteractions(){
 useEffect(()=>{
  const dates=document.getElementById('show-dates');
  if(!dates||!('IntersectionObserver' in window))return;
  const observer=new IntersectionObserver(entries=>{
   if(entries.some(entry=>entry.isIntersecting)){
    window.dispatchEvent(new CustomEvent('peppe:analytics',{detail:{name:'show_dates_view'}}));
    observer.disconnect();
   }
  },{threshold:.25});
  observer.observe(dates);return()=>observer.disconnect();
 },[]);
 return null;
}

'use client';
import {useState} from 'react';
import {Icon} from '@/components/home/icons';
import type {PressCategory,PressPhoto} from '@/content/press';

export function PressPhotos({photos,categories}:{photos:PressPhoto[];categories:PressCategory[]}){
 const [category,setCategory]=useState<PressCategory|'Tutte'>('Tutte');
 const visible=category==='Tutte'?photos:photos.filter(photo=>photo.category===category);
 return <><div className="press-filters" role="group" aria-label="Categorie delle fotografie">{(['Tutte',...categories] as const).map(value=><button key={value} type="button" aria-pressed={value===category} aria-controls="press-photo-grid" onClick={()=>setCategory(value)}>{value}</button>)}</div><p className="press-filter-status" role="status" aria-live="polite">{visible.length?`${visible.length} fotografie · ${category}`:`Le fotografie per ${category.toLowerCase()} sono in preparazione.`}</p><div className="press-photo-grid" id="press-photo-grid">{visible.map(photo=><article className="press-photo press-card" key={photo.id}><div className="press-photo-preview"><img src={photo.preview} srcSet={photo.srcSet} sizes="(max-width:767px) calc(100vw - 40px), (max-width:1099px) 45vw, 390px" width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async"/></div><div className="press-photo-copy"><p className="press-eyebrow">{photo.category}</p><h3>{photo.title}</h3><p className="press-photo-meta">{photo.orientation} · {photo.width} × {photo.height} px</p><p className="press-photo-credit">{photo.photographer?`Foto: ${photo.photographer}`:photo.usageNotes}</p>{photo.original?<a className="press-download" href={photo.original} download={photo.downloadName} data-event="press_photo_download" data-asset={photo.id}>{photo.downloadLabel}<Icon name="down"/><span className="sr-only">: {photo.title}</span></a>:<span className="press-status">Download in preparazione</span>}</div></article>)}</div></>;
}

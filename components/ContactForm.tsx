'use client';
import { useState } from 'react';

export default function ContactForm(){
  const [status,setStatus]=useState<'idle'|'ok'|'error'>('idle');
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data=Object.fromEntries(new FormData(e.currentTarget));
    const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    setStatus(res.ok?'ok':'error');
  }
  return(
    <form onSubmit={onSubmit} className="space-y-6" id="contact">
      <input name="name" required placeholder="お名前" className="input" />
      <input name="email" type="email" required placeholder="メールアドレス" className="input" />
      <textarea name="message" rows={5} required placeholder="お問い合わせ内容" className="input"></textarea>
      <button type="submit" className="btn-gradient w-full">送信する</button>
      {status==='ok' && <p className="text-center text-green-500">送信しました！</p>}
      {status==='error' && <p className="text-center text-red-500">送信に失敗しました</p>}
    </form>
  );
}

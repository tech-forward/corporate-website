
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
  if(req.method!=='POST') return res.status(405).end();
  try{
    const endpoint=process.env.FORMSPREE_ENDPOINT!;
    const resp=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(req.body)});
    return res.status(resp.ok?200:500).end();
  }catch{
    return res.status(500).end();
  }
}

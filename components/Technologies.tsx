import Image from 'next/image';

const icons = [
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt:'Python'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt:'TypeScript'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt:'Next.js'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', alt:'GCP'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt:'AWS'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt:'Docker'},
  {src:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', alt:'GAS'}
];

export default function Technologies(){
  return(
    <section id="technologies" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">主要テクノロジー</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {icons.map((i,idx)=>(
            <Image
              key={idx}
              src={i.src}
              alt={i.alt}
              width={64}
              height={64}
              className="w-16 h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

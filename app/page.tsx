"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Instagram, Mail, Quote } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 ${playfair.variable} ${roboto.variable} font-body ">
      {/* HERO */}
      <section
  className="
    relative w-full
    bg-[url('/press-kit/bg.jpeg')]
    bg-repeat
    bg-[length:180px_180px]
    font-[1000]
  "
>
  <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="uppercase tracking-widest text-l text-bold-500">
        Mídia Kit
      </p>

      <h1 className="text-4xl md:text-5xl mt-4">
        @estante.anna
      </h1>

      <p className="mt-6 text-lg text-bold-600">
        Clássicos e contemporâneos para quem busca ampliar o olhar sobre o mundo.
      </p>

      <div className="flex gap-4 mt-8">
        <Button className="rounded-full px-8">
          <Link href="https://www.instagram.com/estante.anna/">
          Veja meu trabalho 🤗
          </Link>
        </Button>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-80 rounded-2xl shadow-lg overflow-hidden bg-white"
    >
      <img
        src="./poli.jpeg"
        alt="Quem sou"
        className="w-full h-full object-cover object-top"
      />
    </motion.div>

  </div>
</section>
 {/* SOBRE MIM */}
      <section className="relative bg-[#f3f3f3] py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center">
          
          <div className="flex flex-row lg:flex-col gap-3 justify-center items-center lg:items-end order-2 lg:order-1">
            <div className="w-28 h-40 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-lg rotate-[-2deg] -translate-x-4 hover:rotate-0 transition-transform duration-500">
              <img src="./poppi.jpeg" alt="Foto 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md lg:translate-x-4 ">
              <img src="./popistica.jpeg" alt="Foto 2" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-serif text-[#8b5e61] font-bold">Um pouco sobre mim:</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-sm mx-auto leading-relaxed">
              Sou a Polianna, idealizadora do projeto Estante Anna. Tenho 20 anos e cultivo o amor pela literatura clássica e contemporânea com foco em leitura de livros brasileiros.<br></br> Carrego o objetivo de facilitar o processo de leitura no dia a dia para quem me acompanha.
            </p>
            <div className="flex flex-col gap-3 items-center">
              {['estudante Relações Internacionais', 'Comunicativa', 'criativa'].map((text) => (
                <div key={text} className="w-full max-w-[280px] bg-white/60 backdrop-blur-md py-2 border border-gray-200 rounded-full shadow-sm text-sm md:text-base">
                  <span className="font-serif lowercase">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row lg:flex-col gap-3 justify-center items-center lg:items-start order-3 ">
            <div className="w-24 h-24 md:w-52 md:h-52 rounded-[30px] overflow-hidden shadow-md -translate-x-4 hover:rotate-0 transition-transform duration-500">
              <img src="./popi.png" alt="Foto 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-40 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-lg rotate-[3deg] lg:-translate-x-4 -translate-x-4 hover:rotate-0 transition-transform duration-500">
              <img src="./popinha.png" alt="Foto 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 mb-12">
    <h2 className="text-3xl md:text-4xl text-[#5E8C61]">
      Parceiros que tive o prazer de trabalhar:
    </h2>
  </div>

  <div className="relative pt-10 w-full overflow-hidden">
    <motion.div
      className="flex flex-nowrap gap-12 w-max items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      {[
        "./companhia.png",
        "./lepm.png",
        "./oasys.jpg",
        "./olho_de_vidro.png",
        "./record.jpg",
        "./vestigio.png",
        "./tag.png",
        "./companhia.png",
        "./lepm.png",
        "./oasys.jpg",
        "./olho_de_vidro.png",
        "./record.jpg",
        "./vestigio.png",
        "./tag.png",
      ].map((src, index) => (
        <div
          key={index}
          className="w-44 h-24 flex items-center justify-center shrink-0"
        >
          <img
            src={src}
            alt="Logo da editora parceira"
            className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition"
          />
        </div>
      ))}
    </motion.div>
  </div>
</section>

    {/* SEÇÃO DEPOIMENTOS (NOVA) */}
<section className="py-24 bg-[#F5D7E3]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold mb-12 text-center text-[#5E8C61]">O que dizem meus seguidores:</h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          text: "Como pode você indicar e eu querer ler automaticamente.",
          author: "@algumabookstan",
          time: "3 sem",
          likes: "3"
        },
        { 
          text: "Perfeita, cai de paraquedas e já compartilhei.",
          author: "@thyanechristine",
          time: "5 d",
          likes: "1"
        },
        { 
          text: "Ai, como eu amo ver as pessoas normalizando deixar alguns livros para depois para lê-los no momento em que sentimos que deve ser!! nem todo livro é pra ser lido rápido!!",
          author: "@livrosabeiramari",
          time: "1 m",
          likes: "3"
        }
      ].map((comment, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex gap-3 max-w-2xl text-sm bg-white px-6 py-4 rounded-lg shadow-sm">
            {/* Conteúdo */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                <span className="font-semibold text-neutral-700">
                  {comment.author}
                </span>
                <span>• {comment.time}</span>
                <span className="flex items-center gap-1 text-red-500">
                  ❤️ <span className="text-neutral-400 text-[10px]">pelo autor</span>
                </span>
              </div>

              {/* Texto Dinâmico */}
              <p className="mt-2 leading-relaxed text-neutral-600">
                {comment.text}
              </p>

              {/* Ações */}
              <div className="mt-3 flex gap-4 text-[10px] font-medium text-neutral-400">
                <button className="hover:text-neutral-600">Responder</button>
                <button className="hover:text-neutral-600">Ocultar</button>
              </div>
            </div>

            {/* Like */}
            <div className="flex flex-col items-center gap-1 text-neutral-400">
              <button className="text-red-500 hover:scale-110 transition">
                ❤️
              </button>
              <span className="text-xs">{comment.likes}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#5E8C61]">
      Como funciona a parceria:
    </h2>

    <div className="grid md:grid-cols-5 gap-8">
      {[
        {
          step: "01",
          title: "Primeiro contato",
          desc: "Conversamos sobre a sua obra, objetivos da divulgação e expectativas para a parceria. Nessa etapa, analiso como o livro se encaixa no meu perfil e no conteúdo que produzo, buscando construir uma colaboração alinhada, estratégica e positiva para ambos os lados.",
        },
        {
          step: "02",
          title: "Formalização da parceria",
          desc: "Após a definição do pacote ideal, encaminho por e-mail o contrato de prestação de serviços, onde ficam esclarecidos todos os detalhes da parceria, incluindo direitos, prazos, entregas e condições acordadas entre as partes."
        },
        {
          step: "03",
          title: "Planejamento e envio do exemplar",
          desc: "Com a parceria formalizada, o exemplar deve ser enviado para início do processo de leitura. O prazo para produção é de até 30 dias após o recebimento do livro, período necessário para leitura, análise e desenvolvimento criativo do conteúdo.",
        },
        {
          step: "04",
          title: "Leitura e desenvolvimento criativo",
          desc: "Durante a leitura, compartilho impressões espontâneas nos stories e inicio a construção do roteiro e conceito do conteúdo. Todo o processo é feito de forma autêntica, cuidadosa e alinhada à minha experiência real como leitora.",
        },
        {
          step: "05",
          title: "Produção e publicação",
          desc: "O conteúdo contratado é produzido e publicado conforme o planejamento definido previamente. Prezo sempre pela transparência, qualidade da entrega e respeito à obra, mantendo uma comunicação natural e verdadeira com o público.",
        }
      ].map((item, index) => (
        <div key={index} className="space-y-3">
          <span className="text-sm font-semibold text-[#D9A4B8]">
            {item.step}
          </span>

          <h3 className="text-lg font-semibold text-black">
            {item.title}
          </h3>

          <p className="text-sm text-[#8B5E61] leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-14 bg-white">
  <div className="max-w-5xl mx-auto px-6 space-y-16">

    <div>
<h2 className="font-body text-3xl md:text-5xl text-[#8b5e61] mb-8">
  Onde a leitura vira experiência —{" "}
  <span className="font-title italic text-[#EBA83F]">
    estante.anna
  </span>
</h2>
      <p className="leading-relaxed text-lg text-neutral-700">
        Todo o conteúdo que produzo é desenvolvido de forma cuidadosa, sincera e profundamente alinhada à minha experiência real de leitura — algo que considero essencial no meu trabalho como divulgadora literária. Não apresento livros de forma mecânica ou superficial: cada obra é lida, sentida e refletida antes de ser compartilhada.
 <br /><br /> <span className="text-[#5E8C61]">Meu compromisso vai além de uma postagem pontual.</span> 
<br /><br />
Acompanho o texto ao longo do meu processo de leitura e divido essa experiência de maneira orgânica, honesta e contínua, respeitando tanto o meu tempo de leitura quanto o tom, a proposta e a sensibilidade de cada obra. Isso cria uma divulgação mais autêntica, que aproxima o público do livro e fortalece a relação de confiança com editoras e autores.
      </p>
    </div>
  </div>
</section>

{/* SEÇÃO DE MÉTRICAS */}
<section className="py-24 bg-[#73D2DE] text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Alcance e Audiência</h2>
      <p className="text-[#5E8C61] opacity-80">Dados consolidados entre Outubro/2025 e Janeiro/2026</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1: Alcance Total */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-[#5E8C61] mb-2">Contas Alcançadas</p>
        <h3 className="text-5xl font-extrabold mb-4">100.1k</h3>
        <p className="text-sm text-[#5E8C61]">
          Sendo <span className="font-bold text-white">75%+</span> via posts e reels orgânicos.
        </p>
      </div>

      {/* Card 2: Perfil do Público */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-[#5E8C61] mb-2">Público Feminino</p>
        <h3 className="text-5xl font-extrabold mb-4">84,4%</h3>
        <p className="text-sm text-[#5E8C61]">
          Predominância na faixa de <span className="font-bold text-white">18–34 anos (70%+)</span>.
        </p>
      </div>

      {/* Card 3: Expansão */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center">
        <p className="text-sm uppercase tracking-widest text-[#5E8C61] mb-2">Novas Descobertas</p>
        <h3 className="text-5xl font-extrabold mb-4">82,8%</h3>
        <p className="text-sm text-[#5E8C61]">
          De alcance vindo de <span className="font-bold text-white">não seguidores</span> através de posts.
        </p>
      </div>

    </div>

    {/* Footer das Métricas (Seguidores Totais) */}
    <div className="mt-12 flex justify-center">
      <div className="inline-flex items-center gap-3 bg-white text-[#5E8C61] px-8 py-3 rounded-full font-bold shadow-xl">
        <Instagram className="w-5 h-5" />
        <span>Comunidade de 8.500 seguidores</span>
      </div>
    </div>
  </div>
</section>

     {/* PACOTES */}
<section className="py-28 bg-[#F5D7E3]">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="font-body text-4xl mb-16 text-[#5E8C61]">
      Planos de Parceria
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Plano Essencial",
          price: "R$ 200,00",
          desc: (
            <ul className="space-y-2">
              <li>• Chegada do livro;</li>
              <li>• Atualizações ao longo da leitura;</li>
              <li>
                • Compartilhamento sincero da minha experiência como
                leitora;
              </li>
              <li>
                • Participação do livro em listas futuras de indicações,
                sempre que houver diálogo com a temática da obra.
              </li>
            </ul>
          ),
        },
        {
          title: "Plano Intermediário",
          price: "R$ 300,00",
          desc: (
            <ul className="space-y-2">
              <li>
                • 1 Reels ou post no feed, definido de acordo com o meu
                processo criativo e alinhado com a obra;
              </li>
              <li>
                • 1 resenha escrita publicada na Amazon e no Skoob,
                após a leitura.
              </li>
            </ul>
          ),
        },
        {
          title: "Plano Completo",
          badge: "Melhor custo-benefício",
          price: "R$ 380,00",
          desc: (
            <p>
              Valor fixo que contempla todas as entregas dos planos,
              reunindo divulgação contínua e aprofundada do livro ao
              longo do meu processo de leitura.
            </p>
          ),
        },
      ].map((pkg, index) => (
        <div
          key={index}
          className="relative bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition"
        >
          {pkg.badge && (
            <span className="absolute -top-4 left-6 bg-[#D9A4B8] text-black text-xs font-medium px-4 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}

          <h3 className="text-xl font-semibold mb-2 text-black">
            {pkg.title}
          </h3>

          <p className="text-2xl font-bold mb-4 text-[#FBB13C]">
            {pkg.price}
          </p>

          <div className="text-sm text-neutral-700 leading-relaxed flex-1">
            {pkg.desc}
          </div>

          <a
            href="https://www.instagram.com/direct/t/100293761424394/"
            target="_blank"
            className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-[#EBA83F] text-black hover:opacity-90 transition"
          >
            Entrar em contato
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto px-6"> 
  {/* Adicionado px-4 para criar a margem lateral no mobile */}
  <div className="mb-6 ">
    <h3 className="text-2xl font-semibold ">
      Posicionamento 
    </h3>

    <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#E5A4CB] to-transparent" />
  </div>

  <div className="space-y-6  leading-relaxed">
    <p>
      Valorizo profundamente o trabalho artístico presente no mercado editorial e, por isso, priorizo parcerias com autores e editoras que trabalham com capas desenvolvidas por artistas e designers. Acredito na importância da arte humana no processo criativo e na valorização dos profissionais que constroem visualmente a identidade de cada obra.
    </p>
    </div>
 
  <div className="mb-6 mt-16 ">
    <h3 className="text-2xl font-semibold ">
      Sobre o Pagamento
    </h3>

    <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#E5A4CB] to-transparent" />
  </div>

  <div className="space-y-6  leading-relaxed">
    <p>
      O pagamento pode ser realizado antes ou após o envio do livro,
      conforme for mais confortável para você. Peço apenas que o valor
      seja efetuado antes do início do processo criativo, a partir da
      chegada do livro em minhas mãos, para que o trabalho seja
      desenvolvido de forma organizada e tranquila para ambas as partes.
    </p>

    <div className="grid gap-4 md:grid-cols-3 mt-10">
      <div className="rounded-2xl border p-5 transition-all hover:border-[#E5A4CB] bg-[#F5D7E3]">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm uppercase tracking-wide font-bold">
            Opção 1
          </span>
        </div>

        <p className="text-sm">
          <span className="font-medium">50%</span> na
          assinatura do contrato e{" "}
          <span className="font-medium">50%</span> após a
          entrega/publicação do conteúdo principal.
        </p>
      </div>

      <div className="rounded-2xl border p-5 transition-all hover:border-[#E5A4CB] bg-[#F5D7E3]">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm uppercase tracking-wide font-bold">
            Opção 2
          </span>
        </div>

        <p className="text-sm">
          Pagamento <span className="font-medium">integral</span>{" "}
          na assinatura do contrato.
        </p>
      </div>

      <div className="rounded-2xl border p-5 transition-all hover:border-[#E5A4CB] bg-[#F5D7E3]">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm uppercase tracking-wide font-bold">
            Opção 3
          </span>
        </div>

        <p className="text-sm">
          <span className="font-medium ">50%</span> após o
          envio do livro/produto para o endereço da contratada e{" "}
          <span className="font-medium">50%</span> após a
          entrega/publicação do conteúdo principal.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* CONTATO */}
      <section className="py-8 bg-[#E5A4CB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Meus contatos
          </h2>

          <p className="text-neutral-600 mb-8">
            Vamos construir uma experiência juntos?
          </p>

<div className="flex flex-col sm:flex-row justify-center gap-4">
  {/* Botão Instagram */}
  <Button 
    variant="outline" 
    className="rounded-2xl flex gap-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300" 
    asChild
  >
    <Link href="https://www.instagram.com/estante.anna/" className="flex items-center gap-2">
      <Instagram className="w-5 h-5" />
      <span className="font-medium">@estante.anna</span>
    </Link>
  </Button>

  {/* Botão Gmail */}
  <Button 
    variant="outline" 
    className="rounded-2xl flex gap-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300" 
    asChild
  >
    <Link href="mailto:estante.anna@gmail.com" className="flex items-center gap-2">
      <Mail className="w-5 h-5" />
      <span className="font-medium">estante.anna@gmail.com</span>
    </Link>
  </Button>
</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300 py-6 text-center text-sm">
        © 2026 • @estante.anna • Todos os direitos reservados
      </footer>
    </main>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-sm text-neutral-500">
            Mídia Kit
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            @estante.anna
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            História, literatura e leitura crítica para quem busca ampliar o
            olhar sobre o mundo.
          </p>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="rounded-2xl px-8">
              <Link href="https://www.instagram.com/estante.anna/">Ver meu trabalho 🤗</Link>
            </Button>
          </div>
        </motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="w-full h-80 bg-neutral-200 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden"
>
  <img 
    src="/poli.jpg" 
    alt="Quem sou" 
    className="w-full h-full object-cover object-top" 
  />
</motion.div>
      </section >

      {/* SOBRE */}
      <section className="bg-[#EEEBD0] py-20 ">
        <div className="max-w-4xl mx-auto px-6 ">
          <h2 className="text-3xl font-semibold mb-6">Sobre</h2>
          <p className="text-neutral-600 leading-relaxed">
            Sou professora de História formada pela Universidade Federal do
            Ceará. Desde 2021 produzo conteúdo sobre História do Brasil a
            partir da literatura, buscando sempre uma leitura crítica,
            acessível e reflexiva.
          </p>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="py-20 bg-[#2E4293]" >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Seguidores", value: "6.3K" },
            { label: "Visualização de Não seguidores", value: "70,9%" },
            { label: "Público feminino", value: "78,5%" },
            { label: "Idade média", value: "25–34" },
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-sm text-neutral-500 mt-2">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Literatura como ferramenta histórica
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              A literatura é um caminho poderoso para compreender o contexto
              social, político e cultural de diferentes períodos históricos.
              Através dela, é possível acessar narrativas que dialogam com o
              passado e ajudam a refletir sobre o presente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-72 bg-neutral-200 rounded-2xl flex items-center justify-center"
          >
            <span className="text-neutral-500"></span>
          </motion.div>
        </div>
      </section>

    <section className="py-24 bg-[#5C8001]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          className="md:order-2 "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Leitura crítica nas redes sociais
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            O conteúdo vai além da indicação de livros...
          </p>
        </motion.div>

        {/* IMAGEM  */}
        <motion.div
          className="h-72 bg-neutral-200 rounded-2xl flex items-center justify-center md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neutral-500"></span>
        </motion.div>

      </div>
    </section>

      {/* PACOTES */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Pacotes</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Stories",
                price: "R$ 100",
                desc: "Sequência de 4 stories com link",
              },
              {
                title: "Stories + Feed",
                price: "R$ 200",
                desc: "Stories + post no feed com resenha",
              }
            ].map((pkg, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold">
                    {pkg.title}
                  </h3>

                  <p className="text-2xl font-bold mt-4">
                    {pkg.price}
                  </p>

                  <p className="text-neutral-600 mt-3 flex-1">
                    {pkg.desc}
                  </p>
                  <Button className="mt-6 rounded-2xl" asChild>
                    <Link href="https://www.instagram.com/direct/t/100293761424394/">Contratar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-20 bg-[#E5A4CB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Contato
          </h2>

          <p className="text-neutral-600 mb-8">
            Vamos construir algo juntos?
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" className="rounded-2xl flex gap-2" asChild>
            <Link href="https://www.instagram.com/estante.anna/">
              @estante.anna
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

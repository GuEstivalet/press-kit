/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  images: {
    unoptimized: true, // Necessário porque o GitHub Pages não suporta otimização de imagem nativa do Next
  },
  // Se o seu repositório NÃO for o principal (ex: username.github.io/meu-repositorio), 
  // adicione a linha abaixo com o nome do repositório:
  // basePath: '/nome-do-repositorio', 
};

export default nextConfig;
# Cardápio Digital Interativo

## Descrição da Aplicação

O **GourmetOn** foi projetada para modernizar a experiência de descoberta de pratos e pedidos online. A aplicação consome dados em tempo real através de uma API externa (DummyJSON), exibindo um catálogo dinâmico de receitas. Os usuários podem realizar buscas textuais instantâneas, filtrar produtos por categorias (como Massas, Bebidas e Lanches) e gerenciar pedidos através de um carrinho de compras interativo. A arquitetura foca na performance do lado do cliente com paginação em blocos e renderização segura de estados para evitar quebras de interface.

## Tecnologias Utilizadas

- **React:** Construção da interface baseada em componentes funcionais e controle de ciclo de vida (utilizando hooks como `useState` e `useEffect`).
- **JavaScript** Lógica de negócios, manipulação avançada de arrays (`.filter`, `.reduce`, `.map`) e requisições assíncronas com a Fetch API.
- **Tailwind CSS:** Framework utilitário utilizado para a estruturação de layouts responsivos, tipografia e microinterações visuais (hover, transições e sombras).
- **Lucide React:** Biblioteca de ícones SVG otimizados para a iconografia da interface (carrinho, botões de ação e pesquisa).
- **DummyJSON API:** Backend de testes (REST API) que fornece o banco de dados em tempo real contendo nomes, imagens, categorias e tempo de preparo dos pratos.

## Integrantes do Grupo

- Kaio Kinoshita - RM569127
- Leonardo Santos - RM571092
- Matheus Cintra - RM569844

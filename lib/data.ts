import { ArticleItem, ReviewItem, VideoItem, AffiliateProduct, ProblemGuideItem, TeamMember } from './types';

export const SITE_MANIFESTO = `Aqui tem gravel, trilha, equipamento, estrada ruim, opinião forte e história que não cabe em uma ficha técnica. O Cascalho.CC é o lugar para pedalar, correr e pensar — com o que funciona, com o que dá errado e com o que talvez você nem precise comprar.`;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "George Volpão",
    role: "Criador, Ciclista & Corredor de Trilha",
    bio: "Nasceu em Curitiba, atua nas montanhas brasileiras desde 1995 e mantém seu blog pessoal desde 2006. Pedala de gravel, corre ultramaratonas em trilha e produz conteúdo sem filtro para quem quer viver o esporte ao ar livre com bom senso e orçamento consciente.",
    yearsActive: "Desde 1995 nas montanhas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Patricia Fontana",
    role: "Coautora, Produção & Operação",
    bio: "Parceira de expedições, gravação e coautoria. Patricia garante o olhar de campo, a curadoria de rotas e a estrutura de operação para que o Cascalho.CC continue sendo uma plataforma independente e confiável.",
    yearsActive: "Coautora & Produção de campo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  }
];

export const PROBLEM_GUIDES: ProblemGuideItem[] = [
  {
    id: "prob-1",
    problemTitle: "Quero começar no Gravel sem falir",
    description: "Guia completo de bicicletas de entrada, adaptação de MTB antigas e o que realmente trocar de início.",
    category: "gravel",
    targetSlug: "como-comecar-no-gravel-com-pouco-orcimento",
    iconName: "Bike"
  },
  {
    id: "prob-2",
    problemTitle: "Preciso escolher pneus para cascalho molhado",
    description: "Comparações entre cravos altos, largura ideal, pressão correta e retenção de lama em Curitiba.",
    category: "gravel",
    targetSlug: "pneus-gravel-lama-cascalho-molhado-guia",
    iconName: "Compass"
  },
  {
    id: "prob-3",
    problemTitle: "Quero voltar a correr e encarar trilhas",
    description: "Como sair do asfalto sem lesionar o tornozelo, escolha da primeira mochila e ritmo sem neura.",
    category: "trail-running",
    targetSlug: "transicao-asfalto-para-trilha-guia-seguro",
    iconName: "Footprints"
  },
  {
    id: "prob-4",
    problemTitle: "Pedalar na cidade com segurança e agilidade",
    description: "Dicas de segurança viária, iluminação que funciona de verdade e equipamentos para rodar no trânsito urbano.",
    category: "cidade",
    targetSlug: "pedalar-na-cidade-curitiba-seguranca",
    iconName: "ShieldAlert"
  },
  {
    id: "prob-5",
    problemTitle: "Comprar sem jogar dinheiro fora",
    description: "O que é marketing desnecessário e o que é investimento indispensável para sua segurança e conforto nas montanhas.",
    category: "reviews",
    targetSlug: "equipamentos-essenciais-versus-marketing-desnecessario",
    iconName: "ShoppingBag"
  }
];

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: "prod-1",
    title: "Pneu Gravel Panaracer GravelKing SK 700x38c",
    model: "GravelKing SK Tubeless Ready",
    variant: "700x38c Preto/Marrom",
    platform: "Mercado Livre",
    seller: "Loja Oficial Panaracer",
    price: "R$ 389,00",
    originalPrice: "R$ 440,00",
    shippingInfo: "Frete Grátis com Mercado Envios",
    rating: 4.8,
    reviewsCount: 142,
    affiliateUrl: "https://mercadolivre.com.br",
    checkedAt: "7 de setembro de 2026 às 14:30",
    disclosureText: "Link de afiliado: se você comprar por este link, o Cascalho.CC pode receber uma comissão sem custo adicional. A comissão não determina o veredito do teste.",
    category: "gravel",
    testedContext: "Testado durante 1.200 km em estradas de terra batida, cascalho grosso na Serra do Mar e asfalto sob chuva.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
    isEditorPick: true
  },
  {
    id: "prod-2",
    title: "Mochila de Hidratação Trail Running Salomon Active Skin 8",
    model: "Active Skin 8 com 2 Flasks Moles 500ml",
    variant: "Tamanho M (Ajustável)",
    platform: "Shopee",
    seller: "Outdoor Adventure Store",
    price: "R$ 649,00",
    originalPrice: "R$ 780,00",
    shippingInfo: "Entrega expressa nacional",
    rating: 4.9,
    reviewsCount: 89,
    affiliateUrl: "https://shopee.com.br",
    checkedAt: "7 de setembro de 2026 às 11:15",
    disclosureText: "Link de afiliado Shopee: comissão transparente que apoia o canal sem custo extra ao leitor.",
    category: "trail-running",
    testedContext: "Usada em treinos de 25 km nas montanhas de Curitiba. Conforto térmico excelente e sem balanço nas costas.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    isEditorPick: true
  },
  {
    id: "prod-3",
    title: "Farol Cicloiluminação Recarregável Rockbros 1000 Lumens",
    model: "Rockbros V9C-1000",
    variant: "Alumínio IPX6",
    platform: "Mercado Livre",
    seller: "Importadora Bike Tech",
    price: "R$ 179,90",
    originalPrice: "R$ 210,00",
    shippingInfo: "Chega amanhã",
    rating: 4.7,
    reviewsCount: 310,
    affiliateUrl: "https://mercadolivre.com.br",
    checkedAt: "6 de setembro de 2026 às 18:00",
    disclosureText: "Link de afiliado Mercado Livre. Testado de verdade no trânsito noturno e estradas escuras.",
    category: "cidade",
    testedContext: "Usado por 6 meses diários sob chuva intensa em deslocamentos urbanos. Bateria dura 3h50 no modo médio.",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80",
    isEditorPick: false
  },
  {
    id: "prod-4",
    title: "Tênis Trail Running Olympikus Corre Trilha",
    model: "Corre Trilha Borracha Gripper",
    variant: "Tamanho 41 - Verde/Laranja",
    platform: "Shopee",
    seller: "Loja Oficial Olympikus",
    price: "R$ 399,90",
    originalPrice: "R$ 499,00",
    shippingInfo: "Frete grátis com cupom",
    rating: 4.6,
    reviewsCount: 520,
    affiliateUrl: "https://shopee.com.br",
    checkedAt: "7 de setembro de 2026 às 09:00",
    disclosureText: "Link comissionado Shopee. Recomendado pela relação custo-benefício honesta para quem está começando em trilhas baixas.",
    category: "trail-running",
    testedContext: "Testado em solo seco e pedregulhos. Grip bom para o preço, mas requer atenção em rocha molhada com limo.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    isEditorPick: false
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    slug: "review-pneu-gravelking-sk-38c",
    title: "Review de Longa Duração: Pneu Panaracer GravelKing SK 700x38c",
    excerpt: "Rodamos 1.200 km com este pneu em terra batida, cascalho grosso e asfalto sob chuva. Vale a pena para quem pedala no Brasil?",
    category: "gravel",
    coverImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-09-05",
    author: "George Volpão",
    methodology: {
      productAndVariant: "Panaracer GravelKing SK 700x38c Tubeless Ready (Borda Marrom)",
      periodOfUse: "4 meses de testes contínuos",
      distanceOrHours: "1.240 km acumulados",
      terrainAndWeather: "Estradas de terra do interior do PR, cascalho afiado na Serra do Mar, trechos urbanos e asfalto molhado",
      configuration: "Montado Tubeless com 40 ml de selante Stans, pressão utilizada: 36 PSI na dianteira, 40 PSI na traseira (piloto de 76 kg)",
      criteria: [
        "Facilidade de montagem tubeless com bomba de pé",
        "Resistência a furos em cascalho afiado",
        "Grip em subidas íngremes de terra solta",
        "Rolagem no asfalto entre trechos de trilha",
        "Comportamento e escoamento de lama acumulada"
      ],
      strongPoints: [
        "Rolagem surpreendentemente rápida e silenciosa no asfalto",
        "Excelente tração em solo seco e cascalho compacto",
        "Estrutura lateral resistente contra cortes de rochas",
        "Montou de primeira no aro sem necessidade de compressor"
      ],
      limitations: [
        "Em lama profunda de terra vermelha, os cravos pequenos empapam rápido e perdem aderência lateral",
        "Projeta pedrinhas pequenas contra o quadro nos primeiros 200 km (usar protetor de tubo inferior)"
      ],
      indicatedFor: "Ciclistas de gravel que fazem rotas mistas (50% asfalto ruim / 50% estrada de terra seca ou cascalho firme).",
      alternatives: [
        "Vittoria Terreno Dry 38c (mais veloz no asfalto, menor cravagem)",
        "Maxxis Rambler 40c (melhor se sua região tiver mais lama frequente)"
      ],
      priceAndDate: "Verificado em R$ 389,00 o par/unidade no Mercado Livre em 07/09/2026."
    },
    verdict: "O GravelKing SK é o verdadeiro 'coringa' do gravel brasileiro. Não é um pneu de lama extrema, mas para 85% do uso real nas estradas rurais do sul e sudeste, entrega o equilíbrio perfeito entre velocidade e proteção contra furos.",
    affiliateProducts: [AFFILIATE_PRODUCTS[0]],
    youtubeId: "LfmStSX52Jw"
  },
  {
    id: "rev-2",
    slug: "review-mochila-salomon-active-skin-8",
    title: "Mochila Salomon Active Skin 8: Teste em Ultramaratona de Montanha",
    excerpt: "Ela realmente não balança no corpo? Testamos a ergonomia, capacidade de água e o desgaste de uso após 6 meses de treinos intensos.",
    category: "trail-running",
    coverImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-15",
    updatedAt: "2026-09-02",
    author: "George Volpão",
    methodology: {
      productAndVariant: "Salomon Active Skin 8 Vest (Tamanho M)",
      periodOfUse: "6 meses",
      distanceOrHours: "Aproximadamente 450 km em trilhas de altitude",
      terrainAndWeather: "Trilhas técnicas da Serra da Graciosa, calor úmido e frio de montanha",
      configuration: "Carregando 2 Soft Flasks de 500ml na frente, anorak corta-vento, kit de primeiros socorros e barras de cereal",
      criteria: [
        "Ajuste peitoral Sensifit sob ritmo forte de corrida",
        "Acesso aos bolsos sem precisar retirar o colete",
        "Respirabilidade do tecido Mesh nas costas",
        "Durabilidade dos fechos e elásticos com suor salino"
      ],
      strongPoints: [
        "Ajuste milimétrico ao tórax — zero balanço e sem assaduras",
        "Soft flasks inclusos têm abertura larga fácil de abastecer nos rios",
        "Bolso traseiro expansível cabe anorak grosso sem sufocar"
      ],
      limitations: [
        "Não possui bolso com zíper à prova d'água para celular grande no peito",
        "Preço elevado no mercado nacional sem promoção"
      ],
      indicatedFor: "Corredores de trilha que fazem treinos de 15 km a 50 km e precisam carregar hidratação e agasalho com estabilidade.",
      alternatives: [
        "Decathlon Evadict 10L (opção econômica muito digna)",
        "CamelBak Zephyr (para quem prefere reservatório traseiro)"
      ],
      priceAndDate: "R$ 649,00 verificado na Shopee em 07/09/2026."
    },
    verdict: "Se você quer investir em uma única mochila de trail running para durar anos sem te dar dor de cabeça ou feridas nas axilas, a Active Skin 8 vale cada centavo do investimento.",
    affiliateProducts: [AFFILIATE_PRODUCTS[1]]
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    slug: "minha-gopro-quebrou-e-por-que-nao-vou-comprar-outra",
    title: "Minha GoPro quebrou… e o motivo pelo qual NÃO vou comprar outra!",
    youtubeId: "LfmStSX52Jw",
    publishedAt: "2026-08-20",
    duration: "18:42",
    summary: "Um papo reto sobre consumismo no ciclismo, fragilidade das câmeras de ação modernas, custo por hora de gravação e como o excesso de aparatos atrapalha a experiência pura de pedalar.",
    chapters: [
      { time: "00:00", title: "O acidente na trilha", desc: "Como a câmera travou e quebrou o suporte na descida de pedra." },
      { time: "04:15", title: "A ilusão do 4K 120fps", desc: "Por que passamos mais tempo editando e carregando bateria do que curtindo o pedal." },
      { time: "09:30", title: "A armadilha do upgrade constante", desc: "A pressão dos fabricantes para trocar de equipamento todo ano." },
      { time: "14:10", title: "O que muda nos próximos vídeos", desc: "Como vamos gravar de forma mais leve e focada na história." }
    ],
    transcriptSummary: "Neste vídeo, George Volpão relata a quebra da sua câmera em uma descida na serra e analisa friamente o modelo econômico das câmeras de ação. Conclui que a busca incessante por equipamentos perfeitos mata a espontaneidade da criação de conteúdo e do próprio esporte.",
    mentionedProducts: [AFFILIATE_PRODUCTS[2]],
    relatedArticlesSlugs: ["equipamentos-essenciais-versus-marketing-desnecessario"]
  },
  {
    id: "vid-2",
    slug: "gravel-no-brasil-realidade-versus-gringos",
    title: "Gravel no Brasil: A REALIDADE que os canais gringos não mostram",
    youtubeId: "LfmStSX52Jw",
    publishedAt: "2026-08-05",
    duration: "24:10",
    summary: "As estradas brasileiras não são o cascalho plano de Kansas. Aqui temos valetas, lama vermelha, poeira de caminhão e pedras afiadas. Como adaptar sua bike para a nossa geografia.",
    chapters: [
      { time: "00:00", title: "A diferença dos terrenos", desc: "Comparando o cascalho fino americano com as estradas rurais brasileiras." },
      { time: "06:20", title: "Largura de pneu necessária no Brasil", desc: "Por que 38c a 45c é o padrão mínimo para não sofrer." },
      { time: "12:45", title: "Relação de marchas e subidas íngremes", desc: "Monocoroa vs Dupla coroas nas serras brasileiras." },
      { time: "19:00", title: "Conclusão e relatos da comunidade", desc: "Perguntas dos inscritos e recomendações." }
    ],
    transcriptSummary: "Discussão detalhada sobre geometria de bicicletas gravel no Brasil, custo de manutenção de componentes importados e soluções práticas com peças acessíveis.",
    mentionedProducts: [AFFILIATE_PRODUCTS[0]]
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    slug: "como-comecar-no-gravel-com-pouco-orcimento",
    title: "Como começar no Gravel no Brasil sem jogar dinheiro fora",
    subtitle: "Esqueça as bicicletas de R$ 30 mil. Entenda como montar ou adaptar uma bike eficiente com orçamento consciente.",
    excerpt: "O marketing do ciclismo tenta te convencer de que você precisa de carbono e trocas eletrônicas para andar na terra. Nós provamos o contrário.",
    category: "gravel",
    author: "George Volpão",
    publishedAt: "2026-09-01",
    readTime: "7 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    isFeatured: true,
    tags: ["Gravel", "Iniciantes", "Manutenção", "Economia"],
    contentMarkdown: `
O gravel virou a modalidade da moda no mundo todo. As marcas descobriram que podiam vender bicicletas de estrada com pneus mais largos pelo dobro do preço. Mas se você tirar o brilho dos catálogos, o que sobra é a essência do ciclismo raiz: ir mais longe, explorar caminhos secundários e sair do tráfego perigoso dos carros.

### 1. Você precisa de uma bicicleta "Gravel" pura?
A resposta curta é: **não**. Se você já tem uma Mountain Bike hardtail antiga de 29 polegadas no garagem, colocar um garfo rígido e pneus de rolagem rápida (como 2.0 com cravos baixos) te dará 80% da experiência de um gravel com 10% do custo.

### 2. Se for comprar uma bike pronta de entrada
Procure quadros de alumínio com boa geometria (como a linha Oggi Veloce Disc, Sense Versa ou Caloi Gravel) e priorize:
* **Freios a disco a cabo bem regulados** (melhor que hidráulicos genéricos de má qualidade);
* **Espaço de garfo para pneus de pelo menos 40 mm**;
* **Relação de marchas reduzida** (subir serra de terra com marcha pesada destrói seus joelhos).

### 3. Onde NÃO economizar
Nunca economize em **capacete**, **luvas** e na **qualidade do pneu**. Um pneu barato com carcaça dura vai escorregar na terra molhada e furar a cada 20 quilômetros.
`
  },
  {
    id: "art-2",
    slug: "transicao-asfalto-para-trilha-guia-seguro",
    title: "Transição do Asfalto para a Trilha: Corra nas montanhas sem lesionar",
    subtitle: "Corrida em trilha não é apenas correr mais devagar. É aprender a ler o terreno e respeitar as articulações.",
    excerpt: "Mudar do asfalto plano para pedras e raízes exige paciência, fortalecimento de tornozelos e desapego do ritmo por quilômetro.",
    category: "trail-running",
    author: "George Volpão",
    publishedAt: "2026-08-22",
    readTime: "6 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
    tags: ["Trail Running", "Trilha", "Saúde", "Treino"],
    contentMarkdown: `
Correr na montanha é uma experiência contemplativa e desafiadora. No asfalto, seu cérebro entra em piloto automático; na trilha, cada remada de pé é uma decisão microfisiológica.

### O erro número 1 do corredor de rua
Quer manter o mesmo ritmo de 5:00 min/km da maratona plana em uma subida de montanha com lama. O resultado? Frequência cardíaca no teto em 5 minutos e caminhar exausto pelo resto do treino.

### Regras de ouro para a transição:
1. **Caminhe nas subidas íngremes sem vergonha**: Mãos nas coxas, passos curtos e ritmo constante. Os maiores ultramaratonistas do mundo caminham nas subidas brutais.
2. **Olho 3 metros à frente**: Não olhe para o topo da montanha e nem para a ponta do seu tênis. Olhe para a zona onde seu pé vai pousar nas próximas duas passadas.
3. **Fortalecimento proprioceptivo**: Exercícios de equilíbrio em um pé só na prancha ou disco de equilíbrio salvam tornozelos de torções graves.
`
  },
  {
    id: "art-3",
    slug: "pedalar-na-cidade-curitiba-seguranca",
    title: "Pedalar em Curitiba: Guia prático de deslocamento, clima e segurança",
    subtitle: "Estrutura cicloviária, chuva repentina, paralelepípedos e como rodar no trânsito sem correr riscos desnecessários.",
    excerpt: "Pedalar na cidade exige atenção redobrada, luzes visíveis de dia e de noite e a escolha estratégica dos trajetos.",
    category: "cidade",
    author: "George Volpão",
    publishedAt: "2026-08-10",
    readTime: "5 min de leitura",
    coverImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    isFeatured: false,
    tags: ["Cidade", "Curitiba", "Segurança", "Mobilidade"],
    contentMarkdown: `
Curitiba é conhecida pelo clima instável e por áreas urbanas densas. Para quem usa a bicicleta como transporte diário ou treino rápido de rua, algumas dicas são vitais.

### Iluminação não é opcional
Use luz estroboscópica dianteira (branca) e traseira (vermelha) mesmo durante o dia ensolarado. O motorista desatento no celular enxerga o piscar reflexivo muito antes de enxergar suas costas.
`
  }
];

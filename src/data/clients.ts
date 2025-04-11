interface ProdutoInteresse {
  nome: string;
  imagem: string;
  descricao: string;
}

export interface Cliente {
  nome: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  intMensagens: boolean;
  produtosInt: ProdutoInteresse[];
}

export const clientes: Cliente[] = [
  {
    nome: "Marina Silva Santos",
    cidade: "Matinhos",
    bairro: "Centro",
    rua: "Avenida Atlântica",
    numero: "1250",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Sistema de Gestão de Restaurante",
        imagem: "/produtos/restaurante.jpg",
        descricao: "Sistema completo para controle de pedidos, estoque e delivery"
      }
    ]
  },
  {
    nome: "Carlos Eduardo Oliveira",
    cidade: "Matinhos",
    bairro: "Caiobá",
    rua: "Rua das Palmeiras",
    numero: "456",
    intMensagens: false,
    produtosInt: [
      {
        nome: "E-commerce Personalizado",
        imagem: "/produtos/ecommerce.jpg",
        descricao: "Loja virtual completa com design exclusivo"
      }
    ]
  },
  {
    nome: "Ana Paula Ferreira",
    cidade: "Matinhos",
    bairro: "Flamingo",
    rua: "Rua dos Ipês",
    numero: "789",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Sistema de Agendamento",
        imagem: "/produtos/agenda.jpg",
        descricao: "Plataforma para gestão de horários e clientes"
      }
    ]
  },
  {
    nome: "Roberto Mendes Costa",
    cidade: "Matinhos",
    bairro: "Riviera",
    rua: "Avenida Beira Mar",
    numero: "234",
    intMensagens: true,
    produtosInt: [
      {
        nome: "App de Delivery",
        imagem: "/produtos/delivery.jpg",
        descricao: "Aplicativo personalizado para entregas"
      }
    ]
  },
  {
    nome: "Luciana Martins",
    cidade: "Matinhos",
    bairro: "Centro",
    rua: "Rua XV de Novembro",
    numero: "567",
    intMensagens: false,
    produtosInt: [
      {
        nome: "Sistema de Fidelidade",
        imagem: "/produtos/fidelidade.jpg",
        descricao: "Programa de pontos e recompensas para clientes"
      }
    ]
  },
  {
    nome: "Pedro Henrique Santos",
    cidade: "Matinhos",
    bairro: "Gaivotas",
    rua: "Rua das Flores",
    numero: "890",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Website Institucional",
        imagem: "/produtos/website.jpg",
        descricao: "Site profissional com design moderno"
      }
    ]
  },
  {
    nome: "Fernanda Lima Costa",
    cidade: "Matinhos",
    bairro: "Tabuleiro",
    rua: "Rua dos Coqueiros",
    numero: "123",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Sistema de Gestão Escolar",
        imagem: "/produtos/escola.jpg",
        descricao: "Plataforma completa para gestão educacional"
      }
    ]
  },
  {
    nome: "Ricardo Almeida",
    cidade: "Matinhos",
    bairro: "Centro",
    rua: "Rua das Margaridas",
    numero: "432",
    intMensagens: false,
    produtosInt: [
      {
        nome: "App de Reservas",
        imagem: "/produtos/reservas.jpg",
        descricao: "Sistema para gestão de reservas e ocupação"
      }
    ]
  },
  {
    nome: "Juliana Pereira",
    cidade: "Matinhos",
    bairro: "Sertãozinho",
    rua: "Avenida Central",
    numero: "765",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Sistema de PDV",
        imagem: "/produtos/pdv.jpg",
        descricao: "Sistema de ponto de venda com controle de estoque"
      }
    ]
  },
  {
    nome: "Marcos Vinícius Souza",
    cidade: "Matinhos",
    bairro: "Bom Retiro",
    rua: "Rua dos Girassóis",
    numero: "987",
    intMensagens: true,
    produtosInt: [
      {
        nome: "Cartão AR",
        imagem: "/produtos/ar.jpg",
        descricao: "Cartão de visita com realidade aumentada"
      }
    ]
  }
]; 
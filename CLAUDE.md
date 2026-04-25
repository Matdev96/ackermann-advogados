# Ackermann Advogados — Diretrizes do Projeto

## Cliente

**Nome:** Dr. Álvaro Ackermann  
**Escritório:** Ackermann Advogados Associados  
**Especialização:** Direito Imobiliário e Tributário — foco em leilões de imóveis  
**Endereço:** Rua Dr. José Inocêncio de Campos, 153, Sala 62, Ed. Metropolitan Plaza, Cambuí, Campinas/SP — CEP 13024-230  
**Telefone:** (19) 9 9782-4001  
**E-mail:** alvaro.ack@ackermannadvcom  
**WhatsApp:** https://wa.me/5519997824001  
**Atuação:** Nacional  

## Sobre o Projeto

Landing page de captação de leads para o serviço de **Assessoria Jurídica em Leilões de Imóveis**.  
Público-alvo: investidores imobiliários de médio e alto padrão que buscam arrematar imóveis em leilão com segurança jurídica e tributária.

**Formulário de pré-qualificação:** https://docs.google.com/forms/d/e/1FAIpQLScsCMci3LX5BCO6EK2w8mtkfeJHGU1fRRhEE_XAbJm1eJAhXw/viewform

## Stack

- HTML5 semântico + CSS3 (sem framework)
- Vanilla JavaScript
- Google Fonts — Noto Serif (300, 400, 500, 700, 800)
- Hospedagem: GitHub Pages

## Estrutura de Arquivos

```
/
├── assets/
│   ├── foto-alvaro.jpeg          # Foto profissional do Dr. Álvaro
│   ├── logo-fundo-transparente.png  # Logo principal (usado no site)
│   └── logo-com-fundo.png        # Logo versão com fundo (reserva)
├── index.html                    # Página principal
├── style.css                     # Estilos globais
├── script.js                     # Interações e animações
└── CLAUDE.md                     # Este arquivo
```

## Identidade Visual

### Paleta de Cores

| Variável CSS          | HEX       | Uso                                  |
|-----------------------|-----------|--------------------------------------|
| `--color-primary`     | `#083b35` | Fundo hero, header, footer, process  |
| `--color-secondary`   | `#a37f72` | Copper — acentos, CTAs, ícones       |
| `--color-tertiary`    | `#a6bbb0` | Light sage — fundos neutros, tags    |
| `--color-accent`      | `#3b695e` | Medium teal — hover, overlays        |
| `--color-white`       | `#ffffff` | Texto sobre fundos escuros           |
| `--color-dark`        | `#1a1a1a` | Texto principal sobre fundo claro    |

### Tipografia

- **Fonte:** Noto Serif (Google Fonts)
- H1–H2: weight 800 (ExtraBold)
- H3 / subtítulos: weight 700 (Bold)
- Body: weight 400–500 (Regular/Medium)
- Labels/eyebrows: weight 300, letter-spacing 0.18em, uppercase

### Logo

- Versão com fundo transparente (`logo-fundo-transparente.png`): usar em header e footer (fundo escuro)
- Tamanho no site: 160×48px
- Tamanho mínimo conforme manual: horizontal 150px, vertical 116px
- Não distorcer, não aplicar filtros, respeitar margem de segurança

### Símbolo da Marca

- Carvalho estilizado (Ackermann = "homem do campo" em germânico)
- Transmite: força, resistência, sabedoria, estabilidade

## Tom de Voz

- Estratégico e próximo
- Acessível e claro — traduz o juridiquês para o cliente
- Humano, ético, transparente
- Confiante sem ser arrogante
- **Evitar:** jargão jurídico, linguagem distante, intimidação
- **Usar:** frases curtas, voz ativa, empatia

## Estrutura da Página (10 Seções)

1. **Header** — sticky, logo + nav âncora + CTA "Quero Assessoria"
2. **Hero** — headline principal, subtítulo, dois CTAs (Form + WhatsApp)
3. **Pain Points** — 3 riscos de comprar sem assessoria
4. **Serviços** — 3 pilares: Análise do Edital, Due Diligence, Planejamento Tributário
5. **Sobre o Dr. Álvaro** — foto + bio + tags de especialização
6. **Como Funciona** — 4 etapas numeradas (01→04)
7. **Diferenciais** — 4 cards de diferenciação
8. **Depoimentos** — 3 cards (substituir pelos reais quando disponíveis)
9. **FAQ** — 6 perguntas frequentes em accordion
10. **CTA Final** — redirect ao Google Form de pré-qualificação
11. **Footer** — logo, contato, endereço, redes sociais
12. **WhatsApp Flutuante** — botão fixo no canto inferior direito

## Pendências

- [ ] Substituir depoimentos placeholder pelos reais (seção `#depoimentos`)
- [ ] Adicionar URLs reais de Instagram e LinkedIn no footer
- [ ] Validar e-mail do cliente (possível erro: `alvaro.ack@ackermannadvcom` — falta `.br`?)
- [ ] Configurar GitHub Pages após push

## Referências de Inspiração

- https://atanesleilao.com.br/ — layout linear, processo numerado, founder-centric
- https://quatrove.com.br/ — CTAs persistentes, prova social com números

## Diretrizes para Futuras Alterações

- Manter paleta e tipografia do manual de marca
- Novos blocos de conteúdo devem seguir o padrão `section > .container > .section-header + grid/layout`
- CTAs primários sempre em `--color-secondary` (copper)
- Nunca usar frameworks CSS externos — manter vanilla para performance
- Testar em mobile (375px) antes de considerar qualquer alteração concluída
- Imagens novas vão para `/assets/`

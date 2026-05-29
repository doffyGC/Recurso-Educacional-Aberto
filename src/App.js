import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';
import {
  BookOpen, CheckCircle, ChevronDown, FileText, Globe,
  Info, Lightbulb, Monitor, AlertTriangle, Award,
  Eye, Type, Keyboard, Volume2, Image
} from 'lucide-react';
import './index.css';

/* ─── Sub-components ─── */

function SectionHeader({ icon, children }) {
  return (
    <div className="section-header">
      <div className="section-icon" aria-hidden="true">{icon}</div>
      <h2>{children}</h2>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function CheckItem({ children }) {
  return (
    <li>
      <span className="check-icon" aria-hidden="true">
        <CheckCircle size={14} />
      </span>
      <span>{children}</span>
    </li>
  );
}

function Callout({ type = 'info', icon, title, children }) {
  return (
    <div className={`callout callout-${type}`} role="note">
      <span aria-hidden="true">{icon}</span>
      <div className="callout-body">
        {title && <p><strong>{title}</strong></p>}
        <p>{children}</p>
      </div>
    </div>
  );
}

/* ─── Main App ─── */

export default function App() {
  const [openItems, setOpenItems] = useState([]);

  return (
    <div className="page-wrapper">
      {/* Skip link para navegação por teclado */}
      <a href="#conteudo-principal" className="skip-link">
        Ir para o conteúdo principal
      </a>

      {/* ── HEADER ── */}
      <header className="site-header" role="banner">
        <div className="container">
          <div className="header-badge" aria-label="Recurso Educacional Aberto">
            <BookOpen size={14} aria-hidden="true" />
            REA-A · Acessibilidade e Inclusão Digital
          </div>
          <h1>
            Documentos Digitais <span>Acessíveis</span>
          </h1>
          <p className="subtitle">
            Um guia prático para estudantes e professores criarem conteúdos digitais
            inclusivos, compatíveis com leitores de tela e boas práticas de acessibilidade web.
          </p>
          <div className="header-meta">
            <span className="meta-pill"><Globe size={13} aria-hidden="true" /> WCAG 2.2</span>
            <span className="meta-pill"><FileText size={13} aria-hidden="true" /> ABNT NBR 17225:2025</span>
            <span className="meta-pill"><Monitor size={13} aria-hidden="true" /> GitHub Pages</span>
            <span className="meta-pill"><Award size={13} aria-hidden="true" /> CC BY-SA 4.0</span>
          </div>
        </div>
      </header>

      {/* ── NAV ── */}
      <nav className="site-nav" aria-label="Navegação principal">
        <div className="container">
          <div className="nav-inner" role="list">
            {[
              { href: '#o-que-e', label: 'O que é', icon: <Info size={15} /> },
              { href: '#principios', label: 'Princípios', icon: <Lightbulb size={15} /> },
              { href: '#praticas', label: 'Boas práticas', icon: <CheckCircle size={15} /> },
              { href: '#exemplos', label: 'Exemplos', icon: <FileText size={15} /> },
              { href: '#ferramentas', label: 'Ferramentas', icon: <Globe size={15} /> },
              { href: '#sobre', label: 'Sobre', icon: <BookOpen size={15} /> },
            ].map(({ href, label, icon }) => (
              <a key={href} href={href} className="nav-link" role="listitem">
                <span aria-hidden="true">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── MAIN ── */}
      <main id="conteudo-principal" className="main-content" tabIndex={-1}>
        <div className="container">

          {/* ── SEÇÃO 1: O QUE É ── */}
          <section id="o-que-e" aria-labelledby="titulo-o-que-e">
            <SectionHeader icon={<Info size={22} />}>
              <span id="titulo-o-que-e">O que é acessibilidade em documentos digitais?</span>
            </SectionHeader>

            <p style={{ marginBottom: '1.25rem', fontSize: '1.0625rem' }}>
              Acessibilidade digital significa garantir que todas as pessoas, incluindo
              aquelas com deficiências visuais, motoras, cognitivas ou auditivas, possam
              acessar, compreender e interagir com conteúdos digitais de forma autônoma.
            </p>

            <div className="card-grid">
              <Card icon={<Eye size={20} />} title="Deficiência Visual">
                Usuários de leitores de tela (como NVDA ou JAWS) dependem de textos
                alternativos em imagens, headings bem estruturados e links descritivos.
              </Card>
              <Card icon={<Keyboard size={20} />} title="Mobilidade Reduzida">
                Pessoas que navegam somente pelo teclado precisam de foco visível, ordem
                de tabulação lógica e sem armadilhas de foco.
              </Card>
              <Card icon={<Type size={20} />} title="Dificuldades Cognitivas">
                Linguagem simples, estrutura clara, bom espaçamento e evitar animações
                excessivas beneficiam todos os usuários.
              </Card>
              <Card icon={<Volume2 size={20} />} title="Deficiência Auditiva">
                Vídeos devem ter legendas precisas e transcrição textual disponível para
                todo conteúdo em áudio.
              </Card>
            </div>

            <Callout
              type="info"
              icon={<Info size={20} />}
              title="Por que isso importa?"
            >
              Segundo o IBGE (2019), mais de 17 milhões de brasileiros têm alguma deficiência.
              Criar documentos acessíveis não é apenas uma boa prática — é um direito garantido
              pela Lei Brasileira de Inclusão (Lei nº 13.146/2015).
            </Callout>
          </section>

          {/* ── SEÇÃO 2: PRINCÍPIOS ── */}
          <section id="principios" aria-labelledby="titulo-principios">
            <SectionHeader icon={<Lightbulb size={22} />}>
              <span id="titulo-principios">Princípios WCAG: POUR</span>
            </SectionHeader>

            <p style={{ marginBottom: '1.5rem' }}>
              As Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2) organizam os
              requisitos em quatro princípios fundamentais, conhecidos pela sigla POUR:
            </p>

            <Accordion.Root
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              className="accordion-root"
            >
              {[
                {
                  value: 'perceptivel',
                  title: '👁 Perceptível',
                  content: 'O conteúdo deve ser apresentado de formas que os usuários possam perceber.',
                  items: [
                    'Fornecer alternativas em texto para conteúdo não-textual (imagens, ícones, gráficos)',
                    'Oferecer legendas e transcrições para áudio e vídeo',
                    'Garantir contraste mínimo de 4,5:1 para texto normal e 3:1 para texto grande',
                    'Não usar cor como único meio de transmitir informação',
                    'Permitir redimensionamento de texto até 200% sem perda de conteúdo',
                  ],
                },
                {
                  value: 'operavel',
                  title: '⌨ Operável',
                  content: 'A interface deve ser navegável e utilizável por todos.',
                  items: [
                    'Toda funcionalidade deve estar disponível via teclado',
                    'Dar tempo suficiente para o usuário ler e usar o conteúdo',
                    'Não usar conteúdo que pisque mais de 3 vezes por segundo',
                    'Fornecer meios para o usuário pular blocos de conteúdo repetidos (skip links)',
                    'Manter foco visível durante navegação por teclado',
                  ],
                },
                {
                  value: 'compreensivel',
                  title: '💬 Compreensível',
                  content: 'O conteúdo e a interface devem ser fáceis de entender.',
                  items: [
                    'Declarar o idioma da página no elemento <html>',
                    'Usar linguagem clara e objetiva',
                    'Garantir que páginas funcionem de forma previsível',
                    'Fornecer sugestões de correção em formulários com erro',
                    'Evitar jargões sem explicação',
                  ],
                },
                {
                  value: 'robusto',
                  title: '🔧 Robusto',
                  content: 'O conteúdo deve ser compatível com tecnologias assistivas.',
                  items: [
                    'Usar HTML semântico (header, nav, main, footer, article, section)',
                    'Fornecer nome, papel e valor para todos os componentes de interface',
                    'Garantir que o HTML seja válido e bem-formado',
                    'Usar atributos ARIA apenas quando necessário e corretamente',
                  ],
                },
              ].map(({ value, title, content, items }) => (
                <Accordion.Item key={value} value={value} className="accordion-item">
                  <Accordion.Header>
                    <Accordion.Trigger className="accordion-trigger">
                      {title}
                      <ChevronDown className="accordion-chevron" size={18} aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="accordion-content">
                    <div className="accordion-body">
                      <p style={{ marginBottom: '0.75rem' }}>{content}</p>
                      <ul>
                        {items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </section>

          {/* ── SEÇÃO 3: BOAS PRÁTICAS ── */}
          <section id="praticas" aria-labelledby="titulo-praticas">
            <SectionHeader icon={<CheckCircle size={22} />}>
              <span id="titulo-praticas">Boas práticas por tipo de documento</span>
            </SectionHeader>

            <Tabs.Root defaultValue="word" className="tabs-root">
              <Tabs.List className="tabs-list" aria-label="Tipos de documento">
                <Tabs.Trigger value="word" className="tab-trigger">Word / DOCX</Tabs.Trigger>
                <Tabs.Trigger value="pdf" className="tab-trigger">PDF</Tabs.Trigger>
                <Tabs.Trigger value="apresentacao" className="tab-trigger">Apresentações</Tabs.Trigger>
                <Tabs.Trigger value="web" className="tab-trigger">Páginas Web</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="word">
                <ul className="checklist" aria-label="Boas práticas para Word">
                  <CheckItem>Usar estilos de título do Word (Título 1, Título 2) — nunca formatar manualmente tamanho de fonte</CheckItem>
                  <CheckItem>Adicionar texto alternativo em todas as imagens (botão direito → Editar texto alternativo)</CheckItem>
                  <CheckItem>Usar cores de alto contraste — verificar com o Verificador de Acessibilidade do Word</CheckItem>
                  <CheckItem>Criar tabelas simples com linha de cabeçalho marcada como tal</CheckItem>
                  <CheckItem>Usar hiperlinks descritivos (não "clique aqui" ou "saiba mais")</CheckItem>
                  <CheckItem>Definir o idioma do documento em Revisão → Idioma</CheckItem>
                  <CheckItem>Executar o Verificador de Acessibilidade antes de salvar: Arquivo → Verificar problemas</CheckItem>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="pdf">
                <ul className="checklist" aria-label="Boas práticas para PDF">
                  <CheckItem>Exportar a partir de um documento acessível (Word, InDesign) — PDFs de impressão não são acessíveis</CheckItem>
                  <CheckItem>Verificar se o PDF possui tags de acessibilidade em Ferramentas → Acessibilidade no Adobe Acrobat</CheckItem>
                  <CheckItem>Garantir que a ordem de leitura das tags corresponde à ordem visual</CheckItem>
                  <CheckItem>PDFs gerados por digitalização precisam de OCR para serem acessíveis</CheckItem>
                  <CheckItem>Definir o título do documento nas propriedades do PDF</CheckItem>
                  <CheckItem>Formulários PDF devem ter campos com rótulos associados</CheckItem>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="apresentacao">
                <ul className="checklist" aria-label="Boas práticas para apresentações">
                  <CheckItem>Usar layouts predefinidos do PowerPoint — não adicionar caixas de texto fora do layout</CheckItem>
                  <CheckItem>Checar a ordem de leitura dos objetos em cada slide (Início → Organizar → Painel de Seleção)</CheckItem>
                  <CheckItem>Todo gráfico deve ter um título e uma descrição textual dos dados</CheckItem>
                  <CheckItem>Não transmitir informações apenas por cor em gráficos — usar padrões, texturas ou rótulos</CheckItem>
                  <CheckItem>Fontes mínimas: 24pt para corpo, 32pt para títulos</CheckItem>
                  <CheckItem>Animações devem ter opção de ser desativadas ou simplificadas</CheckItem>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="web">
                <ul className="checklist" aria-label="Boas práticas para páginas web">
                  <CheckItem>Usar HTML semântico: {'<header>'}, {'<nav>'}, {'<main>'}, {'<footer>'}, {'<article>'}, {'<section>'}</CheckItem>
                  <CheckItem>Todo elemento {'<img>'} deve ter atributo alt (vazio alt="" para imagens decorativas)</CheckItem>
                  <CheckItem>Garantir que todos os elementos interativos sejam acessíveis por teclado (Tab, Enter, Espaço)</CheckItem>
                  <CheckItem>Fornecer skip link ("Ir para o conteúdo") como primeiro elemento da página</CheckItem>
                  <CheckItem>Declarar o idioma: {'<html lang="pt-BR">'}  </CheckItem>
                  <CheckItem>Testar com o AMAWeb e com o validador do W3C (validator.w3.org)</CheckItem>
                </ul>
              </Tabs.Content>
            </Tabs.Root>
          </section>

          {/* ── SEÇÃO 4: EXEMPLOS ── */}
          <section id="exemplos" aria-labelledby="titulo-exemplos">
            <SectionHeader icon={<FileText size={22} />}>
              <span id="titulo-exemplos">Exemplos de código acessível</span>
            </SectionHeader>

            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
              ✅ Imagem com texto alternativo descritivo
            </h3>
            <div className="code-block" role="region" aria-label="Exemplo de código HTML">
              <code>
                <span className="comment">{'<!-- ❌ Incorreto -->'}</span>{'\n'}
                <span>{'<img src="grafico.png">'}</span>{'\n\n'}
                <span className="comment">{'<!-- ✅ Correto -->'}</span>{'\n'}
                <span>{'<img src="grafico.png"\n'}</span>
                <span className="attr">{'     alt='}</span>
                <span className="string">{'"Gráfico de barras mostrando crescimento\n          de 30% no uso de tecnologia assistiva\n          entre 2020 e 2024"'}</span>
                <span>{'>'}</span>
              </code>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', marginTop: '1.5rem', color: 'var(--color-primary-dark)' }}>
              ✅ Link descritivo
            </h3>
            <div className="code-block" role="region" aria-label="Exemplo de link acessível">
              <code>
                <span className="comment">{'<!-- ❌ Incorreto -->'}</span>{'\n'}
                <span>{'<a href="guia.pdf">'}</span>
                <span className="string">{'clique aqui'}</span>
                <span>{'</a>'}</span>{'\n\n'}
                <span className="comment">{'<!-- ✅ Correto -->'}</span>{'\n'}
                <span>{'<a href="guia.pdf">'}</span>
                <span className="string">{'Baixar o Guia de Acessibilidade (PDF, 2 MB)'}</span>
                <span>{'</a>'}</span>
              </code>
            </div>

            <Callout
              type="warning"
              icon={<AlertTriangle size={20} />}
              title="Atenção:"
            >
              Evite usar apenas cores para transmitir significado. Por exemplo, em um formulário,
              não indique erros somente com a cor vermelha — adicione também um ícone ou texto
              de erro descritivo.
            </Callout>
          </section>

          {/* ── SEÇÃO 5: FERRAMENTAS ── */}
          <section id="ferramentas" aria-labelledby="titulo-ferramentas">
            <SectionHeader icon={<Globe size={22} />}>
              <span id="titulo-ferramentas">Ferramentas de avaliação de acessibilidade</span>
            </SectionHeader>

            <div className="table-wrapper">
              <table>
                <caption style={{ display: 'none' }}>
                  Ferramentas de avaliação de acessibilidade digital
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Ferramenta</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Uso principal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AMAWeb', 'Avaliador web', 'Avaliação de páginas web conforme WCAG (ASES/GOVERNO.BR)'],
                    ['WAVE', 'Extensão de navegador', 'Visualização de problemas de acessibilidade em páginas web'],
                    ['axe DevTools', 'Extensão de navegador', 'Auditoria automática de acessibilidade'],
                    ['NVDA', 'Leitor de tela', 'Testar experiência real com leitor de tela (Windows, gratuito)'],
                    ['Colour Contrast Analyser', 'Desktop', 'Verificar contraste de cores entre elementos'],
                    ['Verificador de Acessibilidade', 'Microsoft Office', 'Verificar documentos Word, Excel e PowerPoint'],
                    ['W3C Validator', 'Online', 'Validar HTML/CSS conforme padrões do W3C'],
                  ].map(([nome, tipo, uso]) => (
                    <tr key={nome}>
                      <td><strong>{nome}</strong></td>
                      <td>{tipo}</td>
                      <td>{uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout
              type="success"
              icon={<CheckCircle size={20} />}
              title="Dica de avaliação:"
            >
              Para este REA, recomendamos iniciar pelo AMAWeb (ases.governo.br), que é a
              ferramenta oficial do governo brasileiro e avalia conformidade com as diretrizes
              WCAG e e-MAG simultaneamente.
            </Callout>
          </section>

          {/* ── SEÇÃO 6: SOBRE ── */}
          <section id="sobre" aria-labelledby="titulo-sobre">
            <SectionHeader icon={<BookOpen size={22} />}>
              <span id="titulo-sobre">Sobre este recurso</span>
            </SectionHeader>

            <div className="license-card">
              <div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>Autoria:</strong>{' '}
                  Produzido para a disciplina de Acessibilidade e Inclusão Digital.{' '}
                  <strong>Local:</strong> Alegrete, Rio Grande do Sul, Brasil.{' '}
                  <strong>Data:</strong> 2025.
                </p>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  <strong style={{ color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>Público-alvo:</strong>{' '}
                  Estudantes e professores do ensino superior.{' '}
                  <strong>Objetivo:</strong> Capacitar na produção de documentos digitais acessíveis, em conformidade com
                  as diretrizes WCAG 2.2 e a ABNT NBR 17225:2025.
                </p>
              </div>

              <div className="ai-declaration" role="note" aria-label="Declaração sobre uso de Inteligência Artificial">
                <strong>📋 Declaração sobre Uso de Inteligência Artificial</strong><br /><br />
                Este recurso educacional foi elaborado com auxílio de ferramentas de inteligência artificial
                (IA generativa) para estruturação do conteúdo, revisão textual e apoio na programação da interface.
                Todo o conteúdo foi revisado, adaptado e validado pelos autores, que assumem responsabilidade
                integral pelo material publicado. O uso de IA seguiu os princípios éticos de transparência e
                responsabilidade na produção acadêmica.
              </div>

              <div>
                <div className="license-badge" aria-label="Licença Creative Commons Atribuição-CompartilhaIgual 4.0">
                  ⚖️ CC BY-SA 4.0
                </div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Este material está licenciado sob{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)
                  </a>
                  . Você pode copiar, adaptar e redistribuir este material, inclusive para fins comerciais,
                  desde que atribua os créditos adequados e distribua suas contribuições sob a mesma licença.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
                  Referências
                </h3>
                <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>
                    ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. <strong>ABNT NBR 17225:2025</strong>: Acessibilidade em tecnologia da informação e comunicação. Rio de Janeiro: ABNT, 2025.
                  </li>
                  <li>
                    WORLD WIDE WEB CONSORTIUM (W3C). <strong>Web Content Accessibility Guidelines (WCAG) 2.2</strong>. Disponível em:{' '}
                    <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                      https://www.w3.org/TR/WCAG22/
                    </a>. Acesso em: 2025.
                  </li>
                </ol>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <span>REA-A · Documentos Digitais Acessíveis · Alegrete, RS · 2025</span>
            <span>
              Licença{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
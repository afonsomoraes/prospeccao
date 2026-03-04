# LOG TÉCNICO - TMIL Rental

## [2026-03-04] - Migração e Adequação Inicial
- [x] Criação da pasta `/prospeccao/tmil/`
- [x] Cópia dos arquivos base do `_template/`
- [x] Cópia da imagem original `Logo Tmil.jpeg` para `assets/img/logo.jpeg`
- [x] Adequação do `index.html`:
    - [x] Inserção do GTM (`GTM-TDKTS5WM`)
    - [x] Configuração de Meta Tags (Title, Description, OG)
    - [x] Tag Canonical: `https://lp.conceptmarketingdigital.com.br/tmil/`
    - [x] Semântica HTML5 (`header`, `main`, `section`, `footer`)
    - [x] Estilização Mobile-First com Tailwind via CDN
- [x] Otimização de Imagens:
    - [x] Adição de `width/height`
    - [x] `fetchpriority="high"` no Hero
    - [x] `loading="lazy"` em imagens secundárias
- [x] Atualização do `sitemap.xml` raiz

## [2026-03-04] - Atualização de Ativos Visuais
- [x] Substituição da logo original por `logo-tmil.svg` (Header/Footer)
- [x] Atualização de Metatags/Schema para uso de `logo-tmil.png`
- [x] Substituição dos ícones/emojis das plataformas por SVGs dedicados:
    - `plataforma_tesoura.svg`
    - `plataforma_articulada.svg`
    - `plataforma_mastro.svg`

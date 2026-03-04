# LOG TÉCNICO - TMIL Rental

## [2026-03-04] - Migração e Adequação Inicial
- [x] Criação da pasta `/prospeccao/tmil/`
- [x] Cópia dos arquivos base do `_template/`
- [x] Cópia da imagem original `Logo Tmil.jpeg` para `assets/img/logo.jpeg`
- [/] Adequação do `index.html`:
    - [ ] Inserção do GTM (`GTM-TDKTS5WM`)
    - [ ] Configuração de Meta Tags (Title, Description, OG)
    - [ ] Tag Canonical: `https://lp.conceptmarketingdigital.com.br/tmil/`
    - [ ] Semântica HTML5 (`header`, `main`, `section`, `footer`)
    - [ ] Estilização Mobile-First com Tailwind via CDN
- [/] Otimização de Imagens:
    - [ ] Adição de `width/height`
    - [ ] `fetchpriority="high"` no Hero
    - [ ] `loading="lazy"` em imagens secundárias
- [ ] Atualização do `sitemap.xml` raiz

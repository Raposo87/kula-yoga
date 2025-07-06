# Yoga Kula Studio - Website

## 🚨 Problemas de Layout entre Local e GitHub

### Possíveis Causas e Soluções:

#### 1. **Cache do Navegador**

- **Problema:** O navegador pode estar usando versões antigas dos arquivos CSS
- **Solução:**
  - Pressione `Ctrl + F5` (Windows) ou `Cmd + Shift + R` (Mac)
  - Ou abra em modo incógnito/anônimo

#### 2. **Carregamento de Arquivos CSS**

- **Problema:** Arquivos CSS não estão carregando corretamente
- **Solução:**
  - Abra o `debug.html` no seu site para verificar se os arquivos estão carregando
  - Verifique se `style.css` e `media-query.css` estão na mesma pasta do `index.html`

#### 3. **Compatibilidade de Navegadores**

- **Problema:** Diferentes navegadores interpretam CSS de forma diferente
- **Solução:**
  - Adicionei prefixos `-webkit-` e `-moz-` para melhor compatibilidade
  - Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)

#### 4. **Configuração do GitHub Pages**

- **Problema:** GitHub Pages pode ter configurações diferentes
- **Solução:**
  - Certifique-se de que o repositório está configurado para GitHub Pages
  - Verifique se o branch correto está selecionado (geralmente `main` ou `master`)

#### 5. **Ordem dos Arquivos CSS**

- **Problema:** A ordem de carregamento pode afetar o layout
- **Solução:**
  - `style.css` deve carregar primeiro
  - `media-query.css` deve carregar depois
  - Bibliotecas externas (como Boxicons) devem carregar por último

### 🔧 Como Testar:

1. **Abra o arquivo `debug.html`** no seu site
2. **Verifique se todos os testes passam:**
   - Carregamento de arquivos CSS
   - CSS Grid funcionando
   - Flexbox funcionando
   - Media queries funcionando
   - Fontes carregando

### 📁 Estrutura de Arquivos Necessária:

```
seu-repositorio/
├── index.html
├── style.css
├── media-query.css
├── script.js
├── debug.html (para testes)
└── README.md
```

### 🌐 URLs de Teste:

- **Site principal:** `https://seu-usuario.github.io/seu-repositorio/`
- **Debug:** `https://seu-usuario.github.io/seu-repositorio/debug.html`

### 📞 Se o Problema Persistir:

1. Abra o `debug.html` e verifique os resultados
2. Compare os resultados entre local e GitHub
3. Verifique o console do navegador (F12) para erros
4. Teste em diferentes navegadores

### 🔄 Últimas Atualizações:

- ✅ Adicionados prefixos de compatibilidade (`-webkit-`, `-moz-`)
- ✅ Reorganizada ordem dos arquivos CSS
- ✅ Adicionadas meta tags importantes
- ✅ Criado arquivo de diagnóstico (`debug.html`)

---

**Desenvolvido por:** [Seu Nome]
**Contato:** [Seu Email]

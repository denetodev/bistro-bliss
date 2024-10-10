# Arquitetura Técnica - Bistro Bliss (Atualizada)

## Frontend
- **Framework**: Angular 17
- **Linguagem**: TypeScript
- **Gerenciamento de Estado**: NgRx (se necessário para funcionalidades complexas)
- **UI Components**: PrimeNG
- **Estilos**: SCSS para estilos customizados

## Backend
- **Framework**: Spring Boot
- **Linguagem**: Java
- **API**: RESTful API

## Banco de Dados
- **SGBD**: PostgreSQL

## API para Reservas
- Implementar endpoint REST para receber dados de reserva
- Integração com API do WhatsApp Business para envio de confirmações

## Infraestrutura
- **Hospedagem Frontend**: Netlify ou GitHub Pages (gratuitos para sites estáticos)
- **Hospedagem Backend**: Heroku (oferece plano gratuito com limitações)
- **Hospedagem Banco de Dados**: ElephantSQL (oferece plano gratuito para PostgreSQL)

## Segurança
- Implementação de HTTPS em todas as comunicações
- Uso de tokens JWT para autenticação de API (se necessário)
- Implementação de CORS para controle de acesso

## Versionamento
- Git para controle de versão
- GitHub para hospedagem do repositório

## CI/CD
- GitHub Actions para integração e deploy contínuos

## Ferramentas de Desenvolvimento
- Visual Studio Code ou IntelliJ IDEA para desenvolvimento
- Postman para testes de API
- pgAdmin para gerenciamento do banco de dados

Esta arquitetura atualizada incorpora o PrimeNG como biblioteca de componentes UI para o frontend, mantendo as demais especificações técnicas inalteradas. O PrimeNG oferece uma ampla gama de componentes ricos e personalizáveis que se integram bem com o Angular, permitindo um desenvolvimento eficiente e uma interface de usuário atraente para o site do Bistro Bliss.

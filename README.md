# Prototipação das Telas - TCC1

Este documento descreve os fluxos de navegação e a função de cada tela no sistema.

## Estrutura do Sistema

O sistema está organizado em três perfis de usuário principais:
- **Admin**: Gerenciamento do sistema
- **Médico**: Profissionais de saúde
- **Paciente**: Usuários que realizam testes

## Fluxos e Telas

### Fluxo Comum
- **login.html**: Página de autenticação para todos os usuários
- **recuperar_senha.html**: Recuperação de senha
- **loading.html**: Tela de carregamento durante processos (não utilizada)
- **index.html**: Página inicial com redirecionamento baseado no perfil do usuário

### Fluxo do Administrador

**Acesso e Gerenciamento**
1. **dashboard_admin.html**: Visão geral do sistema com estatísticas e acesso a todas as funcionalidades
2. **gerenciamento_medicos.html**: Lista de médicos cadastrados com opções de edição/exclusão
3. **gerenciamento_usuarios.html**: Gerenciamento de todos os usuários do sistema
4. **aprovacao_medicos.html**: Avaliação e aprovação de novos cadastros de médicos
5. **perfil_admin.html**: Configurações do perfil do administrador

### Fluxo do Médico

**Cadastro e Acesso**
1. **cadastro_medico.html**: Registro inicial do médico (aguarda aprovação)
2. **dashboard_medico.html**: Visão geral dos pacientes e testes

**Gerenciamento de Pacientes**
1. **lista_pacientes_medico.html**: Lista completa dos pacientes vinculados (não utilizada)
2. **pacientes_medico.html**: Detalhes e gerenciamento de pacientes
3. **vincular_paciente.html**: Associação de novos pacientes ao médico

**Avaliação de Testes**
1. **testes_medico.html**: Gerenciamento dos testes disponíveis
2. **analise_espiral.html**: Análise dos testes de desenho espiral realizados pelos pacientes
3. **analise_voz.html**: Análise dos testes de voz realizados pelos pacientes
4. **resultado_espiral.html**: Visualização dos resultados de testes espirais
5. **resultado_voz.html**: Visualização dos resultados de testes de voz
6. **comparacao_testes.html**: Comparação evolutiva de múltiplos testes do paciente

### Fluxo do Paciente

**Cadastro e Acesso**
1. **cadastro_paciente.html**: Registro inicial do paciente
2. **dashboard_paciente.html**: Visão geral dos testes e resultados
3. **perfil_paciente.html**: Configurações do perfil do paciente
4. **configuracoes_paciente.html**: Preferências e configurações adicionais

**Gerenciamento de Médicos**
1. **meus_medicos.html**: Lista dos médicos vinculados ao paciente

**Realização de Testes**
1. **testes_paciente.html**: Lista de testes disponíveis/atribuídos
2. **teste_espiral.html**: Interface para realização do teste de desenho espiral
3. **teste_voz.html**: Interface para realização do teste de voz

**Visualização de Resultados**
1. **resultados_paciente.html**: Histórico completo de todos os testes realizados
2. **resultado_espiral.html**: Detalhamento dos resultados do teste espiral
3. **resultado_voz.html**: Detalhamento dos resultados do teste de voz

## Recursos Técnicos
- **scripts/app-js.js**: Lógica principal da aplicação
- **styles/styles_consolidated.css**: Estilos visuais unificados
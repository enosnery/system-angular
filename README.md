#SYSTEMA V0.1

##Classes importantes
 - Para criação de novas páginas (components) utilizar comando ng gererate component {nomeDoComponente} 
 - Novas rotas no arquivo app-routing.module.ts. Exemplo de rota: " { path: 'novaRota', loadChildren: () => import('./nova-rota/nova-rota.module').then(m => m.NovaRotaModule) },"
 - Utilizar ngx-toastr para exibir mensagens de retorno para o usuário (DOCS -> https://www.npmjs.com/package/ngx-toastr)
 - Models (do tipo interface) na pasta components/classes/model (utilizar comando ng generate interface {nomeDaInterface})
 - Objetos de requisições (que podem ser Injectable) na pasta components/requests (utilizar o comando ng generate class {nomeDaClasse})
 - Objetos de respostas de requisições (do tipo interface) na pasta components/responses (utilizar o comando ng generate interface {nomeDaInterface)
 


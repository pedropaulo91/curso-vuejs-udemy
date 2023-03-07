import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import ControleDeProdutos from '@/views/ControleDeProdutos';
import ControleDeClientes from '@/views/ControleDeClientes';
import ListaProdutoCards from '@/views/ListaProdutoCards';
import Produto from '@/views/Produto';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        title: 'Login',
        meta:{ requiredAuth: false }
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        title: 'Dashboard',
        meta:{ requiredAuth: true }
    },
    {
        path: '/controle-de-produtos',
        name: 'ControleDeProdutos',
        component: ControleDeProdutos,
        title: 'Produtos',
        meta:{ requiredAuth: true }
    },
    {
        path: '/controle-de-clientes',
        name: 'ControleDeClientes',
        component: ControleDeClientes,
        title: 'Clientes',
        meta:{ requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/novo',
        name: 'NovoProduto',
        component: Produto,
        title: 'Adicionar produto',
        meta:{ requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/editar',
        name: 'EditarProduto',
        component: Produto,
        title: 'Editar produto',
        meta:{ requiredAuth: true }
    },
    {
        path: '/controle-de-produtos/lista-cards',
        name: 'ListaProdutoCards',
        component: ListaProdutoCards,
        title: 'Lista de produtos em cards',
        meta:{ requiredAuth: true }
    }
    
]

export default routes;
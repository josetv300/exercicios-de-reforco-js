const user = 'admin';
switch (user) {
    case 'admin':
        console.log('Bem-vindo, admin!');
        break;
    case 'user':
        console.log('Bem-vindo, usuário!');
        break;
    default:
        console.log('Acesso negado.');
}
import header from '../templates/header';

const routes = {
    '/': 'Home',
    '/:id': 'personajes',
    '/:mundos': 'mundos',
};

const router = () => {
    const $header = null || document.getElementById("header");
    $header.innerHTML = header;
};

export default router;
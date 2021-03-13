const header = () => {
    const logo = '../assets/images/logoDigimon.png'
    const view =`
    <div class="header__container">
        <div class="header__logo">
            <img src=${logo} alt="logo Digimon">
        </div>
        <ul class="header__menu">
            <li>Inicio</li>
            <li>Personajes</li>
            <li>Mundos</li>
        </ul>
    </div>
    ` 
    return view;   
}

export default header;
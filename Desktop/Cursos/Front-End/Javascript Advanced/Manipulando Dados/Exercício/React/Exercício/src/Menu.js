import './Menu.css';
import './App.css';

export default function Menu() {
    return (
        <>
        <div className="Menu">
            <header className="Nav-header">
                <nav>
                    <a className="navigation__item" href="#sobre">Sobre Nós</a>
                    <a className="navigation__item" href="#products">Conheça nossos Produtos</a>
                    <a className="navigation__item" href="#contact">Faça seu Pedido</a>
                </nav>
            </header>
        </div>
        </>
    );
}
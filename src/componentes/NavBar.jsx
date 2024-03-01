import ButtonComponent from './ButtonComponent.jsx';
import Cartwidget from './CartWidget.jsx';
import logo from '../assets/img/logo.png';

export default function NavBar(){

    const caracteristicas = [
        {
            color: '#084CFB',
            texto: 'Catálogo',
        },
        {
            color: '#458EFF',
            texto: 'Contacto',
        },
        {
            color: '#7ECBFF',
            texto: 'Acerca de',
        },
        {
            color: '#BEF9FF',
            texto: 'Nuestro local',
        },
    ];

    const dispararConsola = () => {
        console.log('Bienvenidos!');
    };

    return (
        <>
            <section>
                <nav class="navbar navbar-expand-lg bg-light rounded" aria-label="Twelfth navbar example">
                    <div>
                        <a class="navbar-brand" href="#">
                        <img class="logo" src={logo} width="40px" height="40px"></img>
                        </a>
                    </div>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        

                        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                            <ul class="navbar-nav nav">
                                <li class="nav-item">
                                <a class="nav-item" href="#">
                                    
                                <ButtonComponent
                                    texto={caracteristicas[0].texto}
                                    color={caracteristicas[0].color}
                                    reaccionarAClick={dispararConsola}
                                />

                                </a>
                                </li>
                                <li class="nav-item">
                                
                                <ButtonComponent
                                    texto={caracteristicas[1].texto}
                                    color={caracteristicas[1].color}
                                    reaccionarAClick={dispararConsola}
                                />

                                <a class="nav-item">
                                
                                <ButtonComponent
                                    texto={caracteristicas[2].texto}
                                    color={caracteristicas[2].color}
                                    reaccionarAClick={dispararConsola}
                                />

                                </a>
                                <a class="nav-item">
                                
                                <ButtonComponent
                                    texto={caracteristicas[3].texto}
                                    color={caracteristicas[3].color}
                                    reaccionarAClick={dispararConsola}
                                />

                                </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Cartwidget />
                        </div>
                    </div>
                    
                </nav>
            </section>
        </>
    )
} 
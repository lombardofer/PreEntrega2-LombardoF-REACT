import React from 'react';
import './ItemListContainer.css';
import bienvenida from '../assets/img/protada.jpg'

export default function ItemListContainer ({greeting}) {
    return (
        <>
            <section class="">
                <div class="text-center">
                    <h2 class="text">{greeting}</h2>
                    <img src="" alt="" width="100%"/>
                </div>
            </section>
        </>
    )
}
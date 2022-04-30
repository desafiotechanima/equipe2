import React, {useEffect, useState} from 'react';
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
} from "reactstrap";

const conhecaNossaPlataforma = () => {
    return (
        <>
            <Container className="mt-6 mb-6">
                <Row>
                    <div className="items-center w-full flex justify-center">
                        <div className="w-10/12 px-20">
                            <div className="items-center w-full flex justify-center">
                                <p class="font-bold text-3xl text-indigo-600 dark:text-white ml-2"> 
                                    Conheça nossa plataforma
                                </p>
                            </div>

                            <div className="bg-indigo-600 rounded-lg px-20 py-10">
                                <p class="text-2xl text-white dark:text-white ml-2 mb-2 mt-2"> 
                                Sabemos que, nos dias de hoje, o mundo é digital e entendemos a urgência em estarmos conectados para várias atividades diárias, inclusive estudar.
                                Além disso, entendemos também a importância da conexão permanente entre as famílias, nas suas vidas diárias, nas demonstrações de afeto e aprendizado conjunto e, justamente para atender a essas necessidades, 
                                a progrAMAR foi criada, para estimular a conexão entre as famílias e auxiliar no aprendizado e/ou desenvolvimento tecnológico de mães, pais, filhos e familiares.  
                                </p>
                            </div>

                            <div className="mt-10 items-center w-full flex justify-center">
                                <p class="font-bold text-3xl text-indigo-600 dark:text-white ml-2"> 
                                    Material de estudo
                                </p>
                            </div>

                            <div className="mt-10 items-center w-full flex justify-evenly">
                                <div>
                                    <img width="300" height="300" src="https://github.com/desafiotechanima/equipe2/blob/main/Imagens/Img01.jpg?raw=true" alt="Filho"></img>

                                    <div className="items-center w-full flex justify-center">
                                        <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mt-10">
                                            Filho
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <img width="250" src="https://github.com/desafiotechanima/equipe2/blob/main/Imagens/Img03.jpg?raw=true" alt="Responsável"></img>

                                    <div className="items-center w-full flex justify-center">
                                        <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mt-10">
                                            Responsável
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>    
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default conhecaNossaPlataforma;
import React from 'react';
import {FiThumbsUp} from 'react-icons/fi'; 

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {

    return (

        <CardContainer>
            <ImageBackground src="https://hermes.dio.me/articles/cover/2a95c7be-71e3-48e3-b4ed-a50127b94a9a.jpg" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/87847070?v=4" />
                    <div>
                        <h4>Vinicius DEV</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de htmls e css no bootcamp DIO innovation ONE <strong>Saiba + </strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT </h4>
                    <p>
                        <FiThumbsUp /> 12
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>

    )

}

export { Card }
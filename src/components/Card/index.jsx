import React from "react";
import {FiThumbsUp} from 'react-icons/fi'; 

import {CardContainer, Content, HasInfo, Imagebackground, PostInfo, UserInfo, UserPicture} from "./styles";

const Card = () => {

    return (

        <CardContainer>
            <Imagebackground />
            <Content>
                <UserInfo>
                    <UserPicture />
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
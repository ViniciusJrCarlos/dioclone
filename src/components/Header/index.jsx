import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";

import {

    BuscarInputContainer,
    Column,
    Container,
    Input, 
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = () => {

    return (

        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />
                    <BuscarInputContainer>
                        <Input placeholder="Busca..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu> 
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" variant="secondary" />
                    <Button title="Cadastrar" variant="secondary" />
                </Row>                
            </Container>
        </Wrapper>


    );


}
export { Header }
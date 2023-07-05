import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {useNavigate } from "react-router-dom";
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

    
    const navigate = useNavigate();
    const handleClickSignIn = () => {

      navigate('/login')

    }

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
                    <Button title="Entrar" variant="secondary" onClick={ handleClickSignIn } type="button"  />
                    <Button title="Cadastrar" variant="secondary" />
                </Row>                
            </Container>
        </Wrapper>


    );


}
export { Header }
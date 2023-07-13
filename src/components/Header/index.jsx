import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {useNavigate } from "react-router-dom";
import {

    BuscarInputContainer,
    Container,
    Input, 
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = ({autenticado}) => {

    
    const navigate = useNavigate();
    const handleClickSignIn = () => {

      navigate('/login')

    }

    return (

        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder="Busca..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu> 
                        
                        </>): null }
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/87847070?v=4"/>

                         ) : (<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" variant="secondary" onClick={ handleClickSignIn } type="button"  />
                        <Button title="Cadastrar" variant="secondary" />
                        
                        </>)}          
                </Row>                
            </Container>
        </Wrapper>


    );


}
export { Header }
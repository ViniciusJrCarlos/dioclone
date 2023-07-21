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

      navigate('/login');
      

    }

    const handleClickSignIn2 = () => {

        navigate('/cadastro');

    }

    const handleClickSignIn3 = () => {

        navigate('/');

    }


    return (

        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="logo da dio" />&nbsp;&nbsp;&nbsp;&nbsp;
                    {autenticado ? ( <>
                        <BuscarInputContainer>
                            <Input placeholder="Busca..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu> 
                        
                        </> ) : null }
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/87847070?v=4" />

                         ) : (
                         <>
                        
                        <MenuRight onClick={handleClickSignIn3} >HOME</MenuRight>
                        <Button title="Entrar" variant="secondary" onClick={ handleClickSignIn } type="button"  />&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button title="Cadastrar" variant="secondary" onClick={ handleClickSignIn2 } type="button" />
                        
                        </>
                        
                        )}          
                </Row>                
            </Container>
        </Wrapper>


    );


}
export { Header }
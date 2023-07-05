import { MdEmail, MdLock } from "react-icons/md";
import {useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
//import { MdEmail, MdLock } from 'react-icons/md'

const Login = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {

      navigate('/login')

    }

    return (<>
    

      <Header />
      <Container>
        <Column>
                  <Title>  
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                  </Title>
              
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="digite seu email...." leftIcon={<MdEmail/>} />
              <Input placeholder="digite sua senha...." type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" onClick={ handleClickSignIn } type="button" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha!</EsqueciText>
              <CriarText>Faça sua conta!</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
     
     </>)

}

export { Login }
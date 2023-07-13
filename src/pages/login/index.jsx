import {useNavigate} from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
//import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
//import { MdEmail, MdLock } from 'react-icons/md'

const schema = yup.object({

  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),

}).required;

const Login = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    //handleClickSignIn
    navigate('/feed')

  }

    

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({

      resolver: yupResolver(schema),
      mode: 'onChange',

    });

    console.log(isValid, errors);

    const  onSubmit = data => console.log(data);

   

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
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="digite seu email...." leftIcon={<MdEmail/>} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="digite sua senha...." type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" type="submit" variant="secondary" onClick={handleClickSignIn} />
            
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
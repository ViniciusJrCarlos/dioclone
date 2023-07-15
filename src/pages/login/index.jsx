import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
//import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";



import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
//import { MdEmail, MdLock } from 'react-icons/md'

const schema = yup.object({

  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),

});

const Login = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {

    navigate('/cadastro');

  };


    

    const { control, handleSubmit,  formState: { errors } } = useForm({

      resolver: yupResolver(schema),
      mode: 'onChange',

    });

    //console.log(isValid, errors);

    //const  onSubmit = data => console.log(data);

    const onSubmit = async formData => {
      try{

        const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);

        //console.log('retorno api', data);
        if(data.length === 1) {

          navigate('/feed')

        }else {

          alert('Email ou Senha inválido.')

        }
      }catch{

        alert("Houve um erro, tente novamente.")

      }
    };
   
    return (
    
    <>
      <Header />
      <Container>
        <Column>
                  <Title>  
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                  </Title>
              
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Login!</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="digite seu email...." type="text" leftIcon={<MdEmail/>} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="digite sua senha...." type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" type="submit" variant="secondary"     />
            
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha!</EsqueciText>
              <CriarText onClick={handleClickSignIn} >Faça sua conta!</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
     
     </>
     
     );

};

export { Login };
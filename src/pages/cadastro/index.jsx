import {useNavigate} from "react-router-dom";
import { MdEmail, MdLock, MdVerifiedUser } from "react-icons/md";
//import {useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import { Column, Container, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
//import { MdEmail, MdLock } from 'react-icons/md'

const schema = yup.object({

  nome: yup.string( 'nome não é válido').required('Campo obrigatório'),
  usuario: yup.string( 'usuario não é válido').required('Campo obrigatório'),
  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),

});

const Cadastro = () => {

  const navigate = useNavigate();



    

    const { control, handleSubmit,  formState: { errors } } = useForm({

      resolver: yupResolver(schema),
      mode: 'onChange',

    });

    //console.log(isValid, errors);

    //const  onSubmit = data => console.log(data);

    const onSubmit = async formData => {
      try{

        const { data } = await api.get(`users?name=${formData.nome}&usuario=${formData.usuario}&email=${formData.email}&senha=${formData.password}`);

        //console.log('retorno api', data);
        if(data.length === 1) {

          alert('Cadastro efetuado com Sucesso!')
          navigate('/login')

        }else {

          alert('Preencha corretamente o formulario.')

        }
      }catch{

        alert("Houve um erro, tente novamente.")

      }
    };
 
    return (<>
      <Header />
      <Container>
        <Column>
                  <Title>  
                        Faça seu Cadastro na Plataforma Dio Innovation, totalmente gratuita. 
                  </Title>
              
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Cadastre-se Já!</TitleLogin>
            <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="digite seu nome...." leftIcon={<MdVerifiedUser/>} />
              <Input name="usuario" errorMessage={errors?.usuario?.message} control={control} placeholder="digite seu nome de usuario...." leftIcon={<MdVerifiedUser/>} />
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="digite seu email...." leftIcon={<MdEmail/>} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="digite sua senha...." type="password" leftIcon={<MdLock />} />
              <Button title="Cadastrar" type="submit" variant="secondary"     />
            
            </form>
            <Row>
            </Row>
          </Wrapper>
        </Column>
      </Container>
     
     </>);

};

export { Cadastro };
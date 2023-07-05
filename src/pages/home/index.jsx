/* eslint-disable no-unused-vars */
import {useNavigate} from "react-router-dom";
import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {Container, TextContent, Title, TitleHighlight} from "./styles";
//import { Button } from "../../components/Button";
const Home = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {

      navigate('/login')

    }

    return (<>
    

      <Header />
      <Container>
        <div>
              <Title>
                  <TitleHighlight>
                      Implemente <br />
                  </TitleHighlight>
                      O seu Futuro Global Agora!
              </Title>
              <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo 
                em comunidade com os melhores experts. 
              </TextContent>

            
              <Button title="Começar agora"  onClick={handleClickSignIn} />

        </div>
        <div>
          <img src={bannerImage} alt="Banner Principal" />
        </div>
      </Container>
     
     </>)

}

export { Home }
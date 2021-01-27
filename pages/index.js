import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';



/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>

          <Widget.Header>
            <h1>MEU OVO ESQUERDO</h1>
          </Widget.Header>

          <Widget.Content>
            <p>TESTANDO ESSA BAGAÇA...</p>
          </Widget.Content>

        </Widget>

        <Widget>
          
          <Widget.Header>
            <h1>SERÁ QUE FUNCIONA ISSO?</h1>
          </Widget.Header>
          
          <Widget.Content>
            <p>NÃO SEI PORRA</p>
          </Widget.Content>

        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ViictorHFz"/>
    </QuizBackground>
  ) 
}

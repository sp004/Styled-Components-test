import React from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import CardContainer from './components/CardContainer'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Price from './components/Price'
import Service from './components/Service'
import GlobalStyles from './styles/Global'
import content from './utils/Content'

const Container = styled.div`
  height: 100vh;
  position: relative;
`

const shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroShape = styled.div`
  ${shape}
  background-color: crimson;
  clip-path: polygon(100% 0%, 100% 100%, 50% 100%, 65% 0%);
`

const FeatureShape = styled.div`
  ${shape}
  background-color: pink;
  clip-path: polygon(0% 0%, 0% 100%, 35% 100%, 50% 0%);
`

const theme = {
  colors: {
    header: '#ffc199',
    footer: 'darkgrey',
    body: '#ddfdfa'
  },
  mobile: '480px'
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Navbar />
          <Intro />
          <IntroShape />
        </Container>

        <Container>
          <Feature />
          <FeatureShape />
        </Container>

        <Container>
          <Service />
        </Container>

        <Container>
          {content.map((item, index) => (
            <CardContainer key={index} item={item} />
          ))}
        </Container>

        <Container>
          <Price />
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App
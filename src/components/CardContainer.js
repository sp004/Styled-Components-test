import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'};

    img {
        width: 80%;
    }
    & > div {
        flex: 1;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

const CardContainer = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`../src/assets/${image}`} alt={`${title}`} />
      </div>
    </StyledCard>
  )
}

export default CardContainer
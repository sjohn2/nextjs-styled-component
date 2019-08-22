import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const SubTitle = styled.h2 `
    font-size: 35px;
    color: ${({ theme }) => theme.colors.secondary};
`
const Index = () => (
    <>
    <Title>Hello World </Title>
    <SubTitle>Sub Title</SubTitle>
    </>
)
    

export default Index

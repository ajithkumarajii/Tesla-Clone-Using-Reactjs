import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title='Model S'
            description="Order Online for Touchless Delivery"
            backgroundimg="ModelS_62.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing  Delivery"
        />
        <Section
            title='Model Y'
            description="Order Online for Touchless Delivery"
            backgroundimg="ModelY_88.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing  Delivery"
        />
        <Section
            title='Model 3'
            description="Order Online for Touchless Delivery"
            backgroundimg="Model3_47.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing  Delivery"
        />
        <Section
            title='Model X'
            description="Order Online for Touchless Delivery"
            backgroundimg="ModelX_77.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing  Delivery"
        />
        <Section
            title='Lower Cost Solar Panels in America'
            description="Money-back guarantee"
            backgroundimg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title='Accessories'
            backgroundimg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    `
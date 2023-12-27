import styled from "styled-components"
import { MainContainer } from "../MainContainer"
import MainDescription from "./MainDescriptioon"
import ShippingCalculator from "./ShippingCalculator"
import Advantages from './Advantages'
import Gallery from "./Gallery"
import {galleryList} from './GalleryList'

export default function Main() {
    return (
        <MainWrapper>
            <MainContainer>
                <WelcomeWrapper>
                    <MainDescription />
                    <FormWrapper>
                        <ShippingCalculator />
                    </FormWrapper>
                </WelcomeWrapper>
                <Advantages />
                <Gallery contentItems={galleryList} title='Гарантии качества' description='Наши гарантии качества включают в себя полный спектр документов, необходимых для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке. Мы предоставляем вам надёжность и уверенность'/>
            </MainContainer>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
    padding: 72px 0;
    background-color: ${props => props.theme.mainBackground};
`

const WelcomeWrapper = styled.div`
    margin-bottom: 72px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 24px;
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: ${props => props.theme.white};
    border-radius: 16px;
`
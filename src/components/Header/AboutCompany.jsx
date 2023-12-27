import styled from "styled-components"
import { blackColor } from "../GlobalComponents/GlobalThemeProvider"

export default function AboutCompany() {
    return (
        <AboutCompanyWrapper>
            <DeliveryContainer>
                <p>Доставляем товары из заграницы в Россию</p>
                <p>Стоимость от 550 рублей за заказ</p>
                <p>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</p>
            </DeliveryContainer>
            <PhoneNumberContainer>
                <PhoneNumber href="tel:+78001234567">+7 (800) 123 45-67</PhoneNumber>
                <p>Звонки по России бесплатны</p>
            </PhoneNumberContainer>
        </AboutCompanyWrapper>
    )
}

const AboutCompanyWrapper = styled.div`
    display: flex;
`

const DeliveryContainer = styled.div`
    display: flex;
    padding-right: 12px;
    flex-direction: column;
    align-items: end;
    border-right: 1px solid #A78BFA;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`

const PhoneNumberContainer = styled.div`
    display: flex;
    padding-left: 12px;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
`

const PhoneNumber = styled.a`
    position: relative;
    margin-bottom: 4px;
    display: block;
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 4px;
        background-color: transparent;
        transition: 0.3s;
    }

    &:hover::after {
        background-color: ${blackColor};
    }
`
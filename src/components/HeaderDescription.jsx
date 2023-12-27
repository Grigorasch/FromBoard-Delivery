import styled from "styled-components";

const defaultProps = {
    theme: {
        black: '#000'
    }
}

const TextLine = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: end;
`

const PhoneLine = styled.a`
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
    text-align: center;

    &:hover {
        text-decoration: underline;
    }
`

const PhoneDescriptionLine = styled.p`
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 1.5px;
    text-align: center;
`

const DescriptionSectionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    &:not(:last-child) ::after {
        content: '';
        position: absolute;
        right: -13px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: #A78BFA;
    }
`

const DescriptionWrapper = styled.div`
    display: flex;
    gap: 24px;
    color: ${props => props.theme.black};
`
DescriptionWrapper.defaultProps = defaultProps;

export default function HeaderDescription() {
    return (
        <DescriptionWrapper>
            <DescriptionSectionWrapper>
                <TextLine>Доставляем товары из заграницы в Россию</TextLine>
                <TextLine>Стоимость от 550 рублей за заказ</TextLine>
                <TextLine>1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽</TextLine>
            </DescriptionSectionWrapper>
            <DescriptionSectionWrapper>
                <PhoneLine href="tel:+78001234567" >+7 (800) 123 45-67</PhoneLine>
                <PhoneDescriptionLine>Звонки по России бесплатны</PhoneDescriptionLine>
            </DescriptionSectionWrapper>
        </DescriptionWrapper>
    )
}
import styled from "styled-components"
import mainTitleImg from "../../images/MainTitleImg.png"

export default function MainDescription() {
    return (
        <MainDescriptionWrapper>
            <MainTitle>Без проблемная доставка купленных вещей из США, Европы и Азии в Россию</MainTitle>
            <MainText>Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</MainText>
            <img src={mainTitleImg} alt="" />
        </MainDescriptionWrapper>
    )
}

const MainDescriptionWrapper = styled.div`
    width: 50%;
`

const MainTitle = styled.h1`
    margin-bottom: 12px;
    font-size: 36px;
    font-weight: 900;
    line-height: 40px;
`

const MainText = styled.p`
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
`
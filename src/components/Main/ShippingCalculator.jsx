import styled from "styled-components"
import { CalculationRequest } from "../Button"

export default function ShippingCalculator() {
    return (
        <FormWrapper>
            <FormDescriptionWrapper>
                <FormTitle>Калькулятор доставки</FormTitle>
                <FormText>Посчитайте, сколько будет стоить перевозка покупки из зарубежа</FormText>
            </FormDescriptionWrapper>
            <FormField placeholder="Имя" combine='true'></FormField>
            <FormField placeholder="Почта"></FormField>
            <FormField placeholder="Телефон"></FormField>
            <FormField placeholder="Общая площадь, м²"></FormField>
            <FormField placeholder="Вес, кг"></FormField>
            <FormField placeholder="Страна покупки"></FormField>
            <FormField placeholder="Город покупки"></FormField>
            <FormField placeholder="Область доставки"></FormField>
            <FormField placeholder="Город доставки"></FormField>
            <CalculationRequest>Заказать расчёт</CalculationRequest>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    width: 496px;
    display: grid;
    grid-template-columns: repeat(2, 236px);
    grid-template-rows: 1fr repeat(6, 48px);
    gap: 24px;
    color: ${props => props.theme.black};
`

const FormDescriptionWrapper = styled.div`
    margin-bottom: 4px;
    width: 360px;
    justify-self: center;
    grid-column: 1 / -1;
`

const FormTitle = styled.h2`
    margin-bottom: 16px;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
`

const FormText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
`

const FormField = styled.input`
    padding: 12px;
    ${props => props.combine ? 'grid-column: 1 / -1;' : ''}
    border: 2px solid ${props => props.theme.black};
    border-radius: 4px;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${props => props.theme.black};
    transition: 0.3s;

    &::placeholder {
        color: ${props => props.theme.gray};
    }
`
import styled, { css } from "styled-components";
import { MainContainerWithPadding, MainTitile } from "../MainContainer";
import { advantagesList } from "./AdvantagesList";
import AdvantagesItem from "./AdvantagesItem";

export default function Advantages() {
    return (
        <MainContainerWithPadding>
            <MainTitile marginBottom='24px' >Наши преимущества</MainTitile>
            <AdvantagesListWrapper>
                {advantagesList.map(item => <AdvantagesItem title={item.title} description={item.description} icon={item.icon} key={item.title} />)}
            </AdvantagesListWrapper>
        </MainContainerWithPadding>
    )
}

const AdvantagesListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`
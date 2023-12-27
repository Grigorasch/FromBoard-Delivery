import styled from "styled-components"

export default function AdvantagesItem({ title, description, icon }) {
    return (
        <ItemWrapper>
            <ItemIconWrapper>
                <ItemIcon src={icon} alt="" />
            </ItemIconWrapper>
            <ItemTextWrapper>
                <ItemTitle>{title}</ItemTitle>
                <ItemText>{description}</ItemText>
            </ItemTextWrapper>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
`

const ItemIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 136px;
    height: 136px;
    flex-shrink: 0;
`

const ItemIcon = styled.img`

`

const ItemTextWrapper = styled.div`
    color: #000000;
`

const ItemTitle = styled.h3`
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
`

const ItemText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`
import styled from "styled-components"

export default function NavigationMenu() {
    return (
        <nav>
            <Menu>
                <li><MenuLink href="">Калькулятор</MenuLink></li>
                <li><MenuLink href="">О нас</MenuLink></li>
                <li><MenuLink href="">Гарантии</MenuLink></li>
                <li><MenuLink href="">Отзывы</MenuLink></li>
            </Menu>
        </nav>
    )
}

const Menu = styled.menu`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 24px;
`

const MenuLink = styled.a`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-decoration: none;
    color: ${props => props.theme.mainColor};

    &:hover {
        text-decoration: dashed;
    }
`
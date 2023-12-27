import styled from "styled-components";
import { blackColor, mainColor } from "../GlobalComponents/GlobalThemeProvider";

const navigationMenuList = [
    {
        linkText: 'Калькулятор',
        linkUrl: '#calculator',
        linkId: 501
    },
    {
        linkText: 'О нас',
        linkUrl: '#about',
        linkId: 502
    },
    {
        linkText: 'Гарантии',
        linkUrl: '#guarantee',
        linkId: 503
    },
    {
        linkText: 'Отзывы',
        linkUrl: '#reviews',
        linkId: 504
    },
];

export default function Navigation() {
    return (
        <nav>
            <NavigationMenu>
                {navigationMenuList.map(item => <MenuItem
                    linkText={item.linkText}
                    linkUrl={item.linkUrl}
                    key={item.linkId}
                />)}
            </NavigationMenu>
        </nav>
    )
}

function MenuItem({ linkText, linkUrl }) {
    return (
        <li>
            <MenuLink href={linkUrl}>{linkText}</MenuLink>
        </li>
    )
}

const NavigationMenu = styled.menu`
    display: flex;
    gap: 24px;
    list-style-type: none;
`

const MenuLink = styled.a`
    position: relative;
    transition: 0.3s;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 2px;
        border-bottom: 2px dashed ${blackColor};
        opacity: 0;
        transition: 0.3s;
    }

    &:hover {
        color: ${mainColor};

        &::after {
            border-bottom-color: ${mainColor};
            opacity: 1;
        }
    }
`
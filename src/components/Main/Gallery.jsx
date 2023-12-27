import styled from "styled-components";
import { MainContainer } from "../MainContainer";
import { GalleryGetMoreButton } from "../Button";
import { useEffect, useRef, useState } from "react";

export default function Gallery({ contentItems, title, description }) {
    const galleryWrapperRef = useRef(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    // Размер галереи в закрытом состоянии
    const [minGalleryHeight, setMinGalleryHeight] = useState(0);
    // Размер галереии в открытом состоянии
    const [maxGalleryHeight, setMaxGalleryHeight] = useState(0);

    // Валидация аттрибутов
    const headingElements = validateDataAndReturnComponents(title, description);

    function heightLog() {
        console.log(galleryWrapperRef.current);
    }

    // Преобразует число в виде строки с размерностью или без в число.
    // В случае если строку невозможно преобразовать в число, то возвращается NaN
    function convertCssSizeToNumber(stringSize) {
        if (typeof stringSize !== 'string') return NaN;
        // Определяем номер последнего символа являющегося числом
        let numberLastDigit;
        for (let i = 1; i <= stringSize.length; i++) {
            if (!Number.isNaN(Number(stringSize[stringSize.length - i]))) {
                numberLastDigit = i - 1;
                break;
            }
        }
        // Случай, если все символы были не цифрами
        if (numberLastDigit === undefined) return NaN;
        if (numberLastDigit === 0) return Number(stringSize.slice(0));
        return Number(stringSize.slice(0, -numberLastDigit));
    }

    function getMinAndMaxGalleryHeight() {
        if (!galleryWrapperRef.current) return;
        const galleryComputedStyle = window.getComputedStyle(galleryWrapperRef.current);
        const gridColumnsWidth = galleryComputedStyle.gridTemplateColumns.split(' ');
        const gridRowsHeight = galleryComputedStyle.gridTemplateRows.split(' ');

        function getMinGalleryHeight(columnsWidthArray, rowsHeightArray) {
            if (!Array.isArray(columnsWidthArray) || !Array.isArray(rowsHeightArray)) return 0;
            switch (columnsWidthArray.length) {
                case 4:
                    if (rowsHeightArray.length = 0) break;
                    if (typeof rowsHeightArray[0] !== 'string') break;
                    if (Number(rowsHeightArray[0].slice(0, -2)) > )
                        return rowsHeightArray[0];

                case 2:
                    return

                    break;

                case 1:

                    break;

                default:
                    return 0;
            }
            return 0;
        }


        console.log(galleryComputedStyle);
    }

    useEffect(() => {
        getMinAndMaxGalleryHeight();
        window.addEventListener('resize', heightLog)

        return () => {
            window.removeEventListener('resize', heightLog)

        }
    }, [])


    return (
        <GalleryContainer>
            <HeadingElementsWrapper>
                {headingElements}
            </HeadingElementsWrapper>
            <GalleryWrapper isOpen={isGalleryOpen} ref={galleryWrapperRef} >
                {contentItems.map((item, index) => <GalleryItem
                    image={item.image}
                    caption={item.caption}
                    key={item.image + item.caption + index}
                />)}
            </GalleryWrapper>
            <GalleryGetMoreButton onClick={() => setIsGalleryOpen(!isGalleryOpen)}>Показать больше документов</GalleryGetMoreButton>
        </GalleryContainer>
    )
}

const GalleryContainer = styled(MainContainer)`
    padding: 0 0 72px;
`

const HeadingElementsWrapper = styled.div`
    margin: 0 auto 24px;
    width: fit-content;
`

const GalleryTitle = styled.h2`
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 900;
    line-height: 36px;
    text-align: center;
`

const GalleryDescription = styled.p`
    width: 756px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
`

const GalleryWrapper = styled.div`
    margin-bottom: 36px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
    overflow: hidden;
    transition: 1s;
    ${props => (
        props.isOpen ?
            'row-gap: 24px; grid-template-rows: 1fr 1fr;' :
            'grid-template-rows: 1fr 0;'
    )}
`

/**
 * item = {image: [smallImage, bigImage], caprion = 'Описание/Название'}
 */
export function GalleryItem({ image, caption }) {
    const imageCaption = [];
    if (caption && typeof caption === 'string' && caption.length > 0) {
        imageCaption.push(<GalleryItemCaption>{caption}</GalleryItemCaption>)
    }
    return (
        <div>
            <GalleryItemImage src={image} alt="" />
            {imageCaption}
        </div>
    )
}

const GalleryItemImage = styled.img.attrs({ height: '375px' })`
    display: block;
    margin: 0 auto 4px;
`

const GalleryItemCaption = styled.p`
    font-size: 18px;
    font-weight: 900;
    line-height: 28px;
    text-align: center;
`

/**
 * Выполняет валидацию данных. Данные прошедшие проверку подставляются в
 * соответствующие компоненты и возвращаются в виде массива
 */
function validateDataAndReturnComponents(title, description) {
    const headingElements = [];
    if (title && typeof title === 'string' && title.length > 0) {
        headingElements.push(<GalleryTitle>{title}</GalleryTitle>);
    }
    if (description && typeof description === 'string' && description.length > 0) {
        headingElements.push(<GalleryDescription>{description}</GalleryDescription>);
    }
    return headingElements;
}
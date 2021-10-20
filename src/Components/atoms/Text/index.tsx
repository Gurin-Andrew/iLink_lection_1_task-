import React from "react";
import './styles.css'

interface TextCase {
    value: string
}
export const Text: React.FC<TextCase> = ({ value, children }) => {
    /* const style = getStyleFromVariant(value) */
    return (
        <span className={value}>
            {children}
        </span>
    )
}
/* const getStyleFromVariant = (variant: string) => {
    switch (variant) {
        case 'h1':
            return styles.h1;
        case 'h2':
            return styles.h2;
        case 'h3':
            return styles.h3;
        case 'h4':
            return styles.h4;
        case 't1':
            return styles.t1;
        case 't2':
            return styles.t2;
        default:
            return '';


    } }*/

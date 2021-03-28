import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // repetir 3 itens do msm tamanho
    gap: 2rem; // espaçamento entre esse itens
    margin-top: -10rem;

    div {
        padding: 1.5rem 2rem;
        background: var(--shape);
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; // padrão do strong é inline
            margin-top: 1rem; // consigo usar por causa do display block
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem; // usar mais espaço
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;
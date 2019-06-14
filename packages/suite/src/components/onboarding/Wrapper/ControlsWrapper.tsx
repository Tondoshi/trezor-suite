import styled from 'styled-components';
import * as BREAKPOINTS from '@suite/config/onboarding/breakpoints';

interface Props {
    isVertical: boolean;
}

const ControlsWrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};

    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    & > * {
        margin: 3px 10px 3px 10px;
    }

    width: 100%;

    @media (max-width: ${BREAKPOINTS.SM}px) {
        flex-direction: column;
        & > * {
            margin: 3px 0 3px 0;
        }
    }
`;

export default ControlsWrapper;

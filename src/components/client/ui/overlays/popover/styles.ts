import styled from 'styled-components'

export const Underlay = styled.div`
  position: fixed;
  inset: 0;
`

export const Popover = styled.div`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.font};
  box-shadow: 0 8px 20px ${(props) => props.theme.colors.shadow};
  border-radius: 8px;
  padding: 8px 10px;
`

export const SVGArrow = styled.svg`
  position: absolute;
  fill: ${(props) => props.theme.colors.background};
  stroke: ${(props) => props.theme.colors.font};
  stroke-width: 1px;
  width: 12px;
  height: 12px;

  &[data-placement='top'] {
    top: 100%;
    transform: translateX(-50%);
  }

  &[data-placement='bottom'] {
    bottom: 100%;
    transform: translateX(-50%) rotate(180deg);
  }

  &[data-placement='left'] {
    left: 100%;
    transform: translateY(-50%) rotate(-90deg);
  }

  &[data-placement='right'] {
    right: 100%;
    transform: translateY(-50%) rotate(90deg);
  }
`

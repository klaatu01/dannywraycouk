import styled, { css } from 'styled-components';

import { ReactComponent as circle } from '../../../images/svg/circle.svg';
import { ReactComponent as arrow } from '../../../images/svg/triangle.svg';
import Heading from '../../_atoms/Heading';
import Button from '../../_molecules/Button';
import LinkButton from '../../_molecules/LinkButton';

export const DropDown = styled.div`
  transition: 0.5s;
  overflow: hidden;
  max-height: 0;
  opacity: 0;

  ${({ isOpen, height }) => isOpen && css`
    max-height: ${`${height}px`};
    opacity: 1;
    margin-bottom: 20px;
  `}
`;

export const TitleButton = styled(Button)`
  display: flex;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 5px;
  transition: 0.1s;

  &:hover {
    background-color: #f1f1f1;
    padding-left: 25px;
    transform: scale(1.03);
  }

  ${({ isOpen }) => isOpen && css`
    background-color: #ccc;
    padding-left: 25px;
  `}

`;

export const Title = styled(Heading)`
  text-align: left;
  margin-left: 10px;
  margin-bottom: 0px;
`;

export const Link = styled(LinkButton)`
  display: flex;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 2px;
  transition: 0.1s;
  justify-content: left;
  text-align: left;
  white-space: pre-wrap;
  transform: scale(0.97);

  &:hover {
    transform: scale(1);
    padding-left: 20px;
    background-color: #f1f1f1;
  }
`;

export const ElementTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const ElementDescription = styled.div`
  padding-left: 20px;
  color: #777777;
`;

export const Arrow = styled(arrow)`
  transition: 0.5s;
  height: 15px;
  margin: auto 0;
  ${({ isOpen }) => isOpen && css`
    transform: rotate(90deg);
  `}
`;

export const Circle = styled(circle)`
  height: 5px;
  margin: auto 0 ;
  fill: var(--MainYellow);
  `;

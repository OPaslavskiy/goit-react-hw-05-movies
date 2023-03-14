import styled from 'styled-components';

export const CastsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 25px;
  padding-right: 35px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 65px;
`;

export const CastsItem = styled.li`
  display: flex;
  width: 200px;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: #a8daf7;
  border-bottom-left-radius: 15px;
  color: #382aff;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.03em;
  margin-left: 5px;
`;

export const Paragraph = styled.p`
  text-align: end;
  margin-right: 10px;
`;

export const Image = styled.img`
  width: 100%;
`;

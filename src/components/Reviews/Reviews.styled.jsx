import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 25px;
  margin-right: 35px;
  margin-left: 10px;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 65px;
`;

export const ReviewsItem = styled.li`
  width: 100%;
`;

export const Author = styled.p`
  display: flex;
  width: 40%;
  background-color: #a8daf7;
  padding: 8px;
  padding-left: 25px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.03em;
  margin-left: 5px;
  color: #382aff;
  border-bottom-left-radius: 15px;
`;

export const Response = styled.p`
  margin-left: 25px;
`;

export const NoReviews = styled.p`
  color: #382aff;
  font-weight: 600;
  font-size: 16px;
`;

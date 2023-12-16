import styled from "styled-components";

export const TvContainer = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  background-color: white;
  text-align: left;
  width: calc(12.5% - 16px);
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
`;

export const TvTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TvTitleText = styled.div`
  font-size: 9pt;
  height: 25px;
`;

export const Star = styled.div`
  font-size: xx-small;
`;

export const TvImage = styled.img`
  max-width: 100%;
  height: 250px;
`;

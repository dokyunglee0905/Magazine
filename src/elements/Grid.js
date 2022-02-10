import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, padding, margin, bg, children, center, _onClick } =
    props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

// 초기값 설정해주는 것!
// 변경이 자주되는 애들은 초기값을 false로 주면 나중에 작업이 편해져!
Grid.defaltProps = {
  children: "null",
  is_flex: false,
  width: "100%",
  margin: false,
  bg: false,
  center: false,
  padding: false,
  _onClick: () => {},
};

//스타일 잡아주는 라인~~!
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  // 아래부분 다시 이해하기
  // 조건 "props.bg" 이면 ? : 기준으로 앞조건이 참이고, 뒤에는 거짓
  // 위에서 자주 변경되는 애들은 초기값을 false로 주었기 때문에 아래처럼 적용시켜주는것!
  ${(props) => (props.padding ? `padding:${props.padding};` : "")};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color:${props.bg};` : "")};
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items:center; justify-content:space-between`
      : ""}
  ${(props) => (props.center ? `text-align:center` : "")}
`;

export default Grid;

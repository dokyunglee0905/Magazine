// 1.필요한 애들 import 해주기
import React from "react";
import styled from "styled-components";

//2. props 선언하기 (여기서 왜 children이 ....)
const Text = (props) => {
  const { bold, color, size, children, margin } = props;

  //5. 아래 만들어 둔 스타일을 다시 선언해줘 (오브젝트니깐 key:value의 형태로 넣은거야)
  const styles = { bold: bold, color: color, size: size, margin };
  // 6.여기서 왜 {...styles}....?
  return <P {...styles}>{children}</P>;
};

//3.위에 선언한 props의 값이 없으면 오류가 나니깐 오류가 나지 않도록 초기값을 선언해주는거야!
Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "15px",
  margin: false,
};

//4. props 값 스타일 작업하기
const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
`;

export default Text;

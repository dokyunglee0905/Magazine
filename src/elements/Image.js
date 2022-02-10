import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  // 프로필 동그란 이미지 (밑에서 스타일 작업한 애들 데리고 와야해!)
  // image에는 children 없는 이유는 MDN 이미지 자료 참고하기
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  // 네모박스 (밑에서 스타일 작업한 애들 데리고 와야해!)
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2ZnmQQuayGRagO5lNwEbYLh5VQTTl9QlIA&usqp=CAU",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

// 밖에 있는 박스 스타일
const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

// 안에 있는 박스  스타일
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

//프로필 동그란 이미지
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;

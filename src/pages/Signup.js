import React from "react";
import { Text, Input, Grid, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const signup = () => {
    //비밀번호 같은지 확인하는 조건문!
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디 혹은 비밀번호 없는디~! 입력해줘야하는디!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 요상한디! 다시 확인해봐야하는디!");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("입력한 비밀번호 요상한디? 까먹은겨? 다시 잘 생각해봐유");
      return;
    }
    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid padding="16px">
          <Text size="32px" bold>
            회원가입
          </Text>
        </Grid>

        <Grid padding="16px 16px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid padding="16px 16px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid padding="16px 16px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid padding="16px 16px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid is_flex padding="5px 5px">
          <Button
            margin="auto"
            width="150px"
            text="회원가입하기"
            _onClick={signup}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;

import React from "react";
import { Text, Input, Grid, Button } from "../elements";
// import { getCookie, setCookie, deletCookie } from "../shared/Cookie";

//지금 현재 모듈에서는 redux > user 파일에 있는 액션을 취해주는걸 import
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    console.log(id);

    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호 없는디~! 입력해줘야하는디!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 요상한디! 다시 확인해봐야하는디!");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    //<Text> 컴포넌트를 위에서 import 해준다음 사용
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0PX">
          <Input
            value={id}
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0PX">
          <Input
            value={pwd}
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid is_flex>
          <Button
            margin="auto"
            width="150px"
            text="로그인하기"
            _onClick={() => {
              login();
              console.log("로그인했다!!쨔샤");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

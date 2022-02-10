import React from "react";
import { Grid, Text, Button } from "../elements";
//저장된 쿠키 기준으로 헤더부분을 변경시켜줘야하기때문에 아래 쿠키를 import 해줌
import { getCookie, deleteCookie } from "../shared/Cookie";

//스토어에 있는걸 가져올 수 있는 리액트훅!
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();
  // 로그인이 되어있을때 정보를 가져오기 위해서 useState라는 hook 사용
  // const [첫번째,두번째]
  const is_login = useSelector((state) => state.user.is_login);

  //
  React.useEffect(() => {
    let cookie = getCookie("user_id");
    // console.log(cookie);
  });

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_session);
  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid padding="4px 16px">
          <Grid is_flex>
            <Text margin="0px" size="20px" bold>
              😃어서오세요😃
            </Text>
            <Grid is_flex>
              <Button width="80px" margin="2px" text="내정보"></Button>
              <Button
                _onClick={() => {
                  history.push("/noti");
                }}
                width="80px"
                margin="2px"
                text="알림"
              ></Button>
              <Button
                width="80px"
                margin="2px"
                text="로그아웃"
                _onClick={() => {
                  dispatch(userActions.logoutFB());
                }}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid padding="4px 16px">
        <Grid is_flex>
          <Text margin="0px" size="24px" bold>
            😃어서오세요😃
          </Text>
          <Grid is_flex>
            <Button
              width="80px"
              margin="10px"
              text="로그인"
              _onClick={() => history.push("/login")}
            ></Button>
            <Button
              width="80px"
              margin="10px"
              text="회원가입"
              _onClick={() => history.push("/signup")}
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

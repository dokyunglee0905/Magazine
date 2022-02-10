import { Grid, Image, Text, Button } from "../elements";
import React from "react";

import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Grid is_flex>
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>

          <Grid is_flex>
            <Text margin="5px">{props.insert_dt} </Text>
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Text>{props.contents} </Text>
      </Grid>

      <Grid>
        <Image shape="rectangle" src={props.image_url} />
      </Grid>

      <Grid padding="16px">
        <Text margin="0px" bold>
          댓글{props.comment_cnt}개
        </Text>
      </Grid>
    </React.Fragment>
  );
};

//Props가 없어서 오류가 생기는 일을 방지하는 용도!
// 초기값 설정해주는 거!
Post.defaultProps = {
  user_info: {
    user_name: "dokyung",
    user_profile:
      "https://blog.kakaocdn.net/dn/3cDIP/btqRqQ0uGxx/6wX0kL7zSL22xGj7OkdqU0/img.png",
  },

  image_url:
    "https://blog.kakaocdn.net/dn/3cDIP/btqRqQ0uGxx/6wX0kL7zSL22xGj7OkdqU0/img.png",
  contents: "강하늘",
  comment_cnt: 10,
  insert_dt: "2022-02-04 14:00",
  is_me: false,
};

export default Post;

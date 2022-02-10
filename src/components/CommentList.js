//댓글리스트

import React from "react";
import { Grid, Image, Text } from "../elements";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, prost_id, insert_dt, contents } =
    props;
  return (
    <Grid is_flex width="auto">
      <Grid is_flex margin="0px 10px 15px 0px">
        <Image shape="circle"></Image>
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px">
        <Text margin="0px 100px">{contents}</Text>
        <Text>{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "dokyung",
  user_id: 1,
  contents: "강하늘 넘넘 좋아!!!",
  insert_dt: "2022-02-08",
};

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post";
import Image from "./modules/image";

export const history = createBrowserHistory();

//reducer 생성 될 때마다 여기에 추가해줘야해요!
const rootReducer = combineReducers({
  user: User,
  post: Post,
  image: Image,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
// require은 import해서 사용 할 수 있지만, import 하게되면 모듈사이즈만 커지니깐 이렇게 사용해줘
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//강의에서 redux devTools 복사한거야
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//사용하고 있는 미들웨어들을 enhancer로 묶어주는거야!
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

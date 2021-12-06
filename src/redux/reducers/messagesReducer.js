import { ADD_MESSAGE, GET_MESSAGES, DELETE_MESSAGE } from "../types";

const initialState = {
  messages: [
    {
      replies: [],
      image_url: [],
      message_status: false,
      created_at: "2021-03-09T08:32:59.290Z",
      forwaded: 0,
      _id: "60372d95b422ae28445dafc5",
      txtMessage: "Hi Linda",
      createdAt: "2021-02-25T04:54:45.216Z",
      updatedAt: "2021-02-25T04:54:45.216Z",
      __v: 0
    },
    {
      replies: [],
      image_url: [],
      message_status: false,
      created_at: "2021-03-02T10:47:56.792Z",
      forwaded: 0,
      _id: "603e19e75517ef3168c57486",
      txtMessage: "Are you back home?",
      createdAt: "2021-03-02T10:56:39.992Z",
      updatedAt: "2021-03-02T10:56:39.992Z",
      __v: 0
    },
    {
      replies: [],
      image_url: [],
      message_status: false,
      created_at: "2021-03-02T10:47:56.792Z",
      forwaded: 0,
      _id: "603e19f35517ef3168c57487",
      txtMessage: "what",
      createdAt: "2021-03-02T10:56:51.204Z",
      updatedAt: "2021-03-02T10:56:51.204Z",
      __v: 0
    },
    {
      replies: [],
      image_url: [],
      message_status: false,
      created_at: "2021-03-03T11:18:56.181Z",
      forwaded: 0,
      _id: "603f70a8d7dced3408552243",
      txtMessage: "Hi",
      createdAt: "2021-03-03T11:19:04.400Z",
      updatedAt: "2021-03-03T11:19:04.400Z",
      __v: 0
    },
    {
      replies: [],
      image_url: [],
      message_status: false,
      created_at: "2021-03-03T11:18:56.181Z",
      forwaded: 0,
      _id: "603f70bad7dced3408552244",
      txtMessage: "Yes girl",
      createdAt: "2021-03-03T11:19:22.018Z",
      updatedAt: "2021-03-03T11:19:22.018Z",
      __v: 0
    }
  ]
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}

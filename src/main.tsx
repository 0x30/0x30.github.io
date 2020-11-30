import { createApp, defineComponent } from "vue";
import { ChatRoom } from "./components/chatRoom";
import "./index.css";

const App = defineComponent(() => {
  return () => {
    return <ChatRoom></ChatRoom>;
  };
});

createApp(App).mount("#app");


  // onMounted(async () => {
  //   const token =
  //     "S8qXI5XUx+MqOjcOvBPF3nDzrtWE/KLs@3uzh.cn.rongnav.com;3uzh.cn.rongcfg.com";

  // const im = init({
  //   appkey: "pvxdm17jx2xer",
  // });

  //   await im.connect({ token });

  //   im.watch({
  //     conversation: function (event) {
  //       var updatedConversationList = event.updatedConversationList; // 更新的会话列表
  //       console.log("更新会话汇总:", updatedConversationList);
  //       // console.log(
  //       //   "最新会话列表:",
  //       //   im.Conversation.merge({
  //       //     conversationList,
  //       //     updatedConversationList,
  //       //   })
  //       // );
  //     },
  //     message: function (event) {
  //       var message = event.message;
  //       console.log("收到新消息:", message);
  //     },
  //     status: function (event) {
  //       var status = event.status;
  //       console.log("连接状态码:", status);
  //     },
  //   });

  //   // 注: im 实例通过 RongIMLib.init 获取(单个页面仅需初始化一次)
  //   var chatRoom = im.ChatRoom.get({
  //     id: "chatRoom1",
  //   });

  //   chatRoom
  //     .join({
  //       count: 20, // 进入后, 自动拉取 20 条聊天室最新消息
  //     })
  //     .then(function () {
  //       console.log("加入聊天室成功");
  //     });
  // });
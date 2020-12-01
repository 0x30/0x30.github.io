import { defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";
import Style from "./index.module.scss";
import { init, MESSAGE_TYPE } from "@rongcloud/imlib-v4";

import Lodash from "lodash";
const { debounce } = Lodash;

const logo = `
 █     █░▒███████▒
▓█░ █ ░█░▒ ▒ ▒ ▄▀░
▒█░ █ ░█ ░ ▒ ▄▀▒░ 
░█░ █ ░█   ▄▀▒   ░
░░██▒██▓ ▒███████▒
░ ▓░▒ ▒  ░▒▒ ▓░▒░▒
  ▒ ░ ░  ░░▒ ▒ ░ ▒
  ░   ░  ░ ░ ░ ░ ░
    ░      ░ ░    
         ░        
                 
${new Date().toLocaleString()}                                                                                                      
`;

const command = ["help", "posts", "user"];

export const ChatRoom = defineComponent(() => {
  const inputValueRef = ref("$ ");

  const values = ref<String[]>([logo]);

  const onPrompt = (val: string) => {
    values.value.push(val);
    values.value.push("$0 ");
  };

  return () => {
    return (
      <div class={Style.chatRoom}>
        {values.value.map((val) => (
          <div class={Style.line}>{val}</div>
        ))}
        <InputBody onPrompt={onPrompt}></InputBody>
      </div>
    );
  };
});

const InputBody = defineComponent({
  props: {
    sss: String,
    onPrompt: {
      type: Function as PropType<(value: string) => void>,
      required: true,
    },
  },
  setup: (props) => {
    /// 输入 组件
    const inputRef = ref(null);
    /// 输入的值
    const inputValueRef = ref("");

    /// 输入事件
    const inputEvent = (event: Event) => {
      inputValueRef.value = (event.target as any).innerText;
    };

    const keyDownHandle = (ev: KeyboardEvent) => {
      /// enter key board
      if (ev.keyCode === 13) {
        props.onPrompt(inputValueRef.value);
        inputValueRef.value = "";
        (inputRef.value as any).innerHTML = "";
        ev.preventDefault();
      }
    };

    const onFocusHandler = () =>
      document.addEventListener("keydown", keyDownHandle, false);
    const onBlurHandler = () =>
      document.removeEventListener("keydown", keyDownHandle);

    return () => {
      return (
        <div class={Style.inputBody}>
          <div class={Style.inputPlaceholder}>{inputValueRef.value}3</div>
          <div
            ref={inputRef}
            contenteditable
            class={Style.inputWrap}
            onInput={inputEvent}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          ></div>
        </div>
      );
    };
  },
});

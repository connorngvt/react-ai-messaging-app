import { useEffect } from "react";
import "./MessagingPage.css";
import List from "../components/List/List";
import Chat from "../components/Chat/Chat";
import Detail from "../components/Detail/Detail";
import { useChatStore } from "../lib/chatStore";

const MessagingPage = () => {
  const { chatId } = useChatStore();

  return (
    <div className="messagingPage">
      <div className="container">
        <List />
        {chatId && <Chat />}
        {chatId && <Detail />}
      </div>
    </div>
  );
};

export default MessagingPage;

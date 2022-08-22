import { Box,Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../Context/ChatProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <></>
      ) : (
        <Box display="flex" justifyItems="center" alignItems="center" h="100%">
          <Text fontSize="3x1" pb="3" fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;

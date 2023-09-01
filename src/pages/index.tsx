import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Page, useNavigate, Icon, Text, Box } from "zmp-ui";
import { userState } from "../state";
import { openChat } from "zmp-sdk/apis";

const HomePage: React.FunctionComponent = () => {
  const [height, setHeight] = useState(300);
  const titleRef = useRef(null);
  const contactRef = useRef(null);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const frameHeight =
      window.innerHeight -
      titleRef.current.offsetHeight -
      contactRef.current.offsetHeight;
    setHeight(frameHeight);
  }, []);

  const openChatScreen = () => {
    openChat({
      type: "user",
      id: "4462152339089565647",
      message: "Xin Chào",
      success: () => {
        console.log("success ");
      },
      fail: (err) => {
        console.log("failed " + err);
      },
    });
  };

  return (
    <Page className="homepage-container">
      <h1
        ref={titleRef}
        style={{
          paddingBottom: 20,
          paddingTop: 20,
          fontSize: 25,
          paddingLeft: 16,
        }}
      >
        Xin chào, {user.userInfo.name}
      </h1>
      <div>
        <iframe
          src={
            "https://a706-2a09-bac5-d46a-16dc-00-247-7d.ngrok-free.app/quick-booking?" +
            "first_name=" +
            user.userInfo.name +
            "&last_name=" +
            user.userInfo.name
            // "&mobile=0762985603" +
            // "&gender=male" +
            // "&email=quoc@gmail.com"
          }
          width="100%"
          height={height}
          allowFullScreen={true}
          scrolling="no"
        ></iframe>
      </div>

      <div
        ref={contactRef}
        onClick={openChatScreen}
        style={{
          paddingBottom: 20,
          paddingLeft: 16,
        }}
      >
        <Box flex flexDirection="row">
          <Icon icon="zi-chat" />
          <Text.Title>Liên hệ trực tiếp qua Zalo </Text.Title>
        </Box>
      </div>
    </Page>
  );
};

export default HomePage;

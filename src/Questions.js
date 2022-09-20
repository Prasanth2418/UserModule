import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SimpleAccordion } from "react-native-simple-accordion";

const Data = [
  {
    id: 1,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 2,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 3,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 4,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 5,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 6,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 7,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 8,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 9,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
  {
    id: 10,
    title: "What is InfoEat app?",
    body: "It allows you to send messages, pictures, videos and even voice recordings, and to make voice and video calls over the internet for free, rather than paying to do the same using your mobile network.",
  },
 
];

const Questions = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text style={{ textAlign: "center", paddingTop: 50, fontSize: 25 }}>
        InfoEat FAQs
      </Text>

      <View style={{ marginTop: 10, height: "85%" }}>
        <ScrollView>
          {Data.map((data, id) => (
            <View key={data.id} style={{ marginTop: 5 }}>
              <SimpleAccordion
                viewInside={
                  <View>
                    <Text>{data.body}</Text>
                  </View>
                }
                title={data.title}
                viewContainerStyle={{
                  backgroundColor: "white",
                  marginLeft: 10,
                  marginRight: 10,
                  paddingLeft: "5%",
                }}
                showContentInsideOfCard={false}
                bannerStyle={{
                  backgroundColor: "white",
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  borderColor: "black",
                  borderBottomWidth: 0.9,
                  marginTop: 20,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Questions;

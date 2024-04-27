import { View, Text, StatusBar } from "react-native";
import { Bookmark, Search, ArrowLeft, ArrowRight } from "react-native-feather";
import { PageView } from "./compound/PageView";
import { Select } from "./core/action/Select";
import { Button } from "./core/action/Button";
import Link from "./core/action/Link";
import { TextBox } from "./core/action/TextBox";
import { Switch } from "./core/action/Switch";
import { PageContent } from "./compound/PageContent";
import { Loader } from "./core/decorator/Loader";
import { useEffect, useState } from "react";

const Page = () => {
  return <View className="w-full h-full flex bg-white" />;
};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export const MainView = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wait = async () => {
      await timer(3000);
      setLoading(false);
    };

    wait();
  }, []);

  return (
    <View className="w-full h-full flex flex-col">
      {/* {loading ? ( */}
      {/* <Loader text="Loading" /> */}
      {/* ) : ( */}
      <PageView
        page={<Page />}
        menu={{
          menuType: "simple",
          list: [
            {
              icon: <Bookmark stroke="white" />,
              onPress: () => {},
              text: "Bookmark",
            },
            {
              icon: <Search stroke="white" />,
              onPress: () => {},
              text: "Find",
            },
            {
              icon: <ArrowLeft stroke="white" />,
              onPress: () => {},
              text: "Previous",
            },
            {
              icon: <ArrowRight stroke="white" />,
              onPress: () => {},
              text: "Next",
            },
          ],
        }}
        mainTitle={""}
        pageTitle={""}
      />
      {/* )} */}
    </View>
  );
};

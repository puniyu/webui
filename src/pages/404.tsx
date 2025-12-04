import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import SplitText from "@/components/SplitText"

export default function NotFound() {
  const [yiyan, setYiyan] = useState("");

  useEffect(() => {
    axios
      .get("https://v1.hitokoto.cn")
      .then((response) => setYiyan(response.data.hitokoto))
      .catch(() => setYiyan("加载一言失败"));
  }, []);

  const imageUrl = "https://t.alcy.cc/moez";

  return (
    <Box className="w-full h-screen flex justify-center items-center">
      {/* 文本区域 */}
      <Box className="rounded-lg flex flex-col relative !pt-5 justify-center items-center w-9/10 h-9/10 md:w-md md:h-2/4 shadow-2xl bg-white dark:bg-black">
        <Box>
          <Text className="!text-3xl text-purple-500">页面找不到了</Text>
        </Box>

        <Box className="!pt-5 w-9/10">
          <Image src={imageUrl} className="rounded-md" />
        </Box>

        {/* 暗黑模式切换按钮 */}
        <Box className="absolute top-4 right-4">
          <ColorModeButton />
        </Box>

        {/* 一言 */}
        <Box className="bottom-5 text-center px-4 w-full">
          <SplitText text={yiyan || "加载中..."} delay={100} />
        </Box>
      </Box>
    </Box>
  );
}

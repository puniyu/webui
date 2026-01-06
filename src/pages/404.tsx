import { ColorModeButton } from "@/components/ui/color-mode";
import { APP_NAME } from "@/utils/app";
import { Box, Text, Image } from "@chakra-ui/react";
import { useDocumentTitle } from "usehooks";

const NotFound = () => {
  useDocumentTitle(`${APP_NAME} WebUI`);
  const imageUrl = "https://t.alcy.cc/moez";

  return (
    <Box className="w-full h-screen flex justify-center items-center">
      {/* 文本区域 */}
      <Box className="rounded-lg flex flex-col relative pt-5! justify-center items-center w-9/10 h-9/10 md:w-md md:h-2/4 shadow-2xl bg-white dark:bg-black">
        <Box>
          <Text className="text-3xl! text-pink-300">页面找不到了</Text>
        </Box>

        <Box className="pt-5! w-9/10">
          <Image src={imageUrl} className="rounded-md" />
        </Box>

        {/* 暗黑模式切换按钮 */}
        <Box className="absolute top-4 right-4">
          <ColorModeButton />
        </Box>
      </Box>
    </Box>
  );
};
export default NotFound;

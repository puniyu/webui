import { APP_DESC, APP_NAME } from "@/utils/app";
import { Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack className="py-6 font-[AlibabaPuHuiTi] text-md px-4" gap={1}>
      <Text className="text-gray-800 font-medium">{APP_NAME}</Text>
      <Text className="text-gray-700 text-sm">
        © {new Date().getFullYear()} · {APP_DESC}
      </Text>
    </VStack>
  );
};

export default Footer;

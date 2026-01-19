import { APP_NAME } from "@/utils/app";
import {
  Box,
  Card,
  Text,
  Heading,
  SimpleGrid,
  Badge,
  HStack,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useSetPageTitle } from "@/hooks/page";
import { useTitle } from "ahooks";

// TODO: 从 API 获取核心版本
export default function () {
  useTitle(`Dashboard - ${APP_NAME} WebUI`);
  useSetPageTitle("首页");

  // TODO: 后续从 API 获取核心版本
  const coreVersion: string | null = null;

  return (
    <Box p={{ base: 4, md: 6 }}>
      <VStack align="stretch" gap={6}>
        <Box>
          <Heading size="2xl" fontWeight="bold" mb={2}>
            Dashboard
          </Heading>
          <Text color="fg.muted">
            欢迎使用 {APP_NAME} WebUI, 这里是系统概览。
          </Text>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            版本信息
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
            <Card.Root
              variant="outline"
              _hover={{
                borderColor: "pink.500",
                transform: "translateY(-2px)",
                shadow: "md",
              }}
              transition="all 0.2s"
            >
              <Card.Body gap={3}>
                <HStack justify="space-between">
                  <Text fontWeight="semibold" fontSize="md">
                    WebUI 版本
                  </Text>
                  <Badge colorPalette="pink" variant="subtle">
                    v{__PUNIYU_WEB_VERSION__}
                  </Badge>
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  前端界面版本
                </Text>
              </Card.Body>
            </Card.Root>

            <Card.Root
              variant="outline"
              _hover={{
                borderColor: "purple.500",
                transform: "translateY(-2px)",
                shadow: "md",
              }}
              transition="all 0.2s"
            >
              <Card.Body gap={3}>
                <HStack justify="space-between">
                  <Text fontWeight="semibold" fontSize="md">
                    Core 版本
                  </Text>
                  {coreVersion ? (
                    <Badge colorPalette="purple" variant="subtle">
                      v{coreVersion}
                    </Badge>
                  ) : (
                    <HStack gap={2}>
                      <Spinner size="xs" />
                      <Text fontSize="sm" color="fg.muted">
                        待获取
                      </Text>
                    </HStack>
                  )}
                </HStack>
                <Text fontSize="sm" color="fg.muted">
                  后端核心版本
                </Text>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>
            系统状态
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
            <Card.Root variant="subtle" bg="green.subtle">
              <Card.Body>
                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="fg.muted">
                    运行状态
                  </Text>
                  <HStack>
                    <Box w={2} h={2} borderRadius="full" bg="green.500" />
                    <Text fontWeight="semibold" color="green.fg">
                      正常运行
                    </Text>
                  </HStack>
                </VStack>
              </Card.Body>
            </Card.Root>
            <Card.Root variant="subtle">
              <Card.Body>
                <VStack align="start" gap={1}>
                  <Text fontSize="sm" color="fg.muted">
                    环境
                  </Text>
                  <Badge colorPalette="orange" variant="subtle">
                    {import.meta.env.MODE}
                  </Badge>
                </VStack>
              </Card.Body>
            </Card.Root>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}

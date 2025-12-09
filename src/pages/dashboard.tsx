import { APP_NAME } from "@/utils/app";
import { Box, Group, Card, Button } from "@chakra-ui/react"
import { useEffect } from 'react';

// TODO: 后端获取数据
export default function () {

    useEffect(() => {
        document.title = `Dashboard - ${APP_NAME} WebUI`
    },[])

    return (
        <Box>
            <Box> Dashboard</Box>
            <Group>
                <Card.Root width="320px">
                    <Card.Body gap="2">
                        <Card.Title mt="2" className="text-pink-300">Core 版本</Card.Title>
                        <Card.Description />
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
            </Group>
        </Box>
    )
}
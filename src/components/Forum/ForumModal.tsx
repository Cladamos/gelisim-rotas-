import { Modal, Stack, Text, Group, Avatar, Button } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"
import { useUser } from "../../contexts/UserContext"
import { useDisclosure } from "@mantine/hooks"
import CreateMessageModal from "./CreateMessageModal"

type ForumModalProps = {
  opened: boolean
  open: () => void
  close: () => void
  messages: { message: string; username: string }[]
  title: string
  setMockData: React.Dispatch<
    React.SetStateAction<
      {
        title: string
        author: string
        date: string
        messages: {
          message: string
          username: string
        }[]
      }[]
    >
  >
}

function ForumModal(props: ForumModalProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const userCtx = useUser()

  function handleClick() {
    props.close()
    open()
  }
  return (
    <>
      <CreateMessageModal open={open} close={close} opened={opened} setMockData={props.setMockData} title={props.title} />
      <Modal opened={props.opened} onClose={props.close} size="xl" title={<Text size="lg"> {props.title} </Text>} p="lg" radius="md" centered>
        <Stack gap="xl">
          {props.messages.map((m) => (
            <Group justify={userCtx.currUser?.username === m.username ? "flex-end" : "flex-start"}>
              <Group>
                <Avatar radius="xl" color="blue">
                  {m.username?.slice(0, 2).toUpperCase()}
                </Avatar>
                <Text size="md">{m.username}</Text>
              </Group>
              <Text w="100%" pl="xl" size="sm">
                {m.message}
              </Text>
            </Group>
          ))}
          <Button leftSection={<IconPlus size={30} />} variant="outline" size="md" radius="md" onClick={handleClick}>
            Yeni mesaj ekle
          </Button>
        </Stack>
      </Modal>
    </>
  )
}

export default ForumModal

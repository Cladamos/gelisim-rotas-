import { Modal, TextInput, Stack, Button, Group } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"

type GetSupportModalProps = {
  opened: boolean
  open: () => void
  close: () => void
  title: string
  setMockData: React.Dispatch<
    React.SetStateAction<
      {
        title: string
        author: string
        date: number
        messages: {
          message: string
          username: string
        }[]
      }[]
    >
  >
}

function CreateMessageModal(props: GetSupportModalProps) {
  const userCtx = useUser()
  const [input, setInput] = useState("")

  function handleSend() {
    props.setMockData((data) =>
      data.map((d) =>
        d.title === props.title ? { ...d, messages: [...d.messages, { username: userCtx.currUser?.username ?? "debug", message: input }] } : d,
      ),
    )
    props.close()
    notifications.show({
      title: "Talebiniz Gönderiliyor",
      message: "Talebiniz sistemimize gelmesi bekleniyor",
    })
  }

  return (
    <Modal opened={props.opened} onClose={props.close} title="Destek Al" size="lg" padding="lg" radius="md" centered>
      <Stack gap="md" justify="center">
        <TextInput
          size="md"
          radius="md"
          placeholder="Mesaj Açıklaması"
          required
          label="Açıklama"
          onChange={(event) => setInput(event.currentTarget.value)}
        />

        <Group justify="flex-end" py="md">
          <Button size="md" variant="outline" color="red" onClick={props.close}>
            İptal Et
          </Button>
          <Button size="md" onClick={handleSend}>
            Oluştur
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default CreateMessageModal

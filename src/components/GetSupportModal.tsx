import { Modal, TextInput, Stack, Button, Group, InputBase } from "@mantine/core"
import { IMaskInput } from "react-imask"
import { IconAt, IconCheck } from "@tabler/icons-react"
import { notifications } from "@mantine/notifications"

type GetSupportModalProps = {
  opened: boolean
  open: () => void
  close: () => void
}

function GetSupportModal(props: GetSupportModalProps) {
  function handleSend() {
    props.close()
    const id = notifications.show({
      loading: true,
      title: "Talebiniz Gönderiliyor",
      message: "Talebiniz sistemimize gelmesi bekleniyor",
      autoClose: false,
      withCloseButton: false,
    })

    setTimeout(() => {
      notifications.update({
        id,
        color: "teal",
        title: "Talebiniz başarıyla onaylandı",
        message: "En kısa zamanda dönüş sağlanacaktır",
        icon: <IconCheck />,
        loading: false,
        autoClose: 3000,
      })
    }, 4000)
  }

  return (
    <Modal opened={props.opened} onClose={props.close} title="Destek Al" size="lg" padding="lg" radius="md" centered>
      <Stack gap="md" justify="center">
        <TextInput size="md" radius="md" placeholder="Problemin Başlığı" required label="Başlık" />
        <TextInput size="md" radius="md" placeholder="Problemin Açıklaması" required label="Açıklama" />
        <TextInput size="md" radius="md" placeholder="İsiminiz Soyisiminiz" required label="İsim Soyisim" />
        <TextInput size="md" radius="md" placeholder="Email Adresiniz" leftSection={<IconAt size={16} />} required label="Email" />
        <InputBase
          size="md"
          label="Telefon Numarası"
          placeholder="Telefon Numaranız"
          component={IMaskInput}
          mask="+00 (000) 000 0000"
          required
        ></InputBase>
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

export default GetSupportModal

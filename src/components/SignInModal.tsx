import { Modal, TextInput, PasswordInput, Text, Button } from "@mantine/core"
import { IconAt, IconCheck } from "@tabler/icons-react"
import { useForm } from "@mantine/form"
import { useUser, User } from "../contexts/UserContext"
import { notifications } from "@mantine/notifications"

type SignInModalProps = {
  opened: boolean
  open: () => void
  close: () => void
}

function SignInModal(props: SignInModalProps) {
  const ctx = useUser()

  const form = useForm({
    initialValues: { username: "", email: "", password: "" },

    validate: {
      username: (value) => (ctx.users.find((u) => u.username === value) ? "Bu kullancı adı kullanılmaktadır" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Geçersiz email adresi"),
      password: (value) => (value.length > 7 ? null : "Şifreniz en az 8 haneli olmalıdır"),
    },
  })

  const handleSubmit = (user: User) => {
    ctx.setUsers((u) => [...u, user])
    notifications.show({
      color: "teal",
      title: "Hesabınız oluşturuldu!",
      message: "Hesabınız başarıyla oluşturulmuştur, iyi eğlenceler 😊",
      icon: <IconCheck />,
      loading: false,
    })
    props.close()
    form.setValues({ username: "", email: "", password: "" })
  }
  return (
    <Modal opened={props.opened} onClose={props.close} title={<Text size="lg"> Kayıt Ol</Text>} size="lg" padding="lg" radius="md" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Kullancı Adı" placeholder="Kullanıcı adınız" required {...form.getInputProps("username")} />
        <TextInput label="Email" placeholder="Email adresiniz" required leftSection={<IconAt size={16} />} {...form.getInputProps("email")} mt="md" />
        <PasswordInput label="Şifre" placeholder="Şifreniz" required mt="md" {...form.getInputProps("password")} />
        <Button type="submit" fullWidth mt="xl">
          Kayıt Ol
        </Button>
      </form>
    </Modal>
  )
}

export default SignInModal

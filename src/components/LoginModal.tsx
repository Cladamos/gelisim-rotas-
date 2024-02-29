import { Modal, TextInput, PasswordInput, Group, Checkbox, Anchor, Button, Text } from "@mantine/core"
import { useUser, User } from "../contexts/UserContext"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"

type LoginModalProps = {
  opened: boolean
  open: () => void
  close: () => void
}

function LoginModal(props: LoginModalProps) {
  const ctx = useUser()

  const form = useForm<{ username: string; email: string; password: string }>({
    initialValues: { username: "", email: "", password: "" },

    validate: (values) => ({
      username: ctx.users.find((u) => u.username === values.username && u.password === values.password)
        ? null
        : "Kullanıcı adınız ya da şifreniz yanlış",
      // password: ctx.users.find((u) => u.username === values.username && u.password === values.password) ? null : "Kullanıcı adı ya da şifre yanlış",
    }),
  })

  function handleSubmit(user: User) {
    ctx.setCurrUser(user)
    notifications.show({
      title: <Text size="sm"> Hoşgeldin {user.username} 👋 </Text>,
      message: <Text size="sm"> Hesabınıza başarı ile giriş yapılmıştır </Text>,
    })
    props.close()
    form.setValues({ username: "", email: "", password: "" })
  }

  return (
    <Modal opened={props.opened} onClose={props.close} title={<Text size="lg"> Giriş Yap</Text>} size="lg" padding="lg" radius="md" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Kullancı Adı" placeholder="Kullanıcı adınız" required {...form.getInputProps("username")} />
        <PasswordInput label="Şifre" placeholder="Şifreniz" required mt="md" {...form.getInputProps("password")} />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Beni Hatırla" />
          <Anchor component="button" size="sm">
            Şifrenizi unuttunuz mu ?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" type="submit">
          Giriş Yap
        </Button>
      </form>
    </Modal>
  )
}

export default LoginModal

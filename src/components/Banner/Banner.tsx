import { Text, Title, TextInput, Button, Image, Container } from "@mantine/core"
import image from "./image.svg"
import classes from "./Banner.module.css"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"

export function Banner() {
  const form = useForm({
    initialValues: { email: "" },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Geçersiz email adresi"),
    },
  })

  function handleSubmit() {
    notifications.show({
      title: <Text size="sm"> Hoşgeldiniz </Text>,
      message: <Text size="sm"> Mail listemize başarıyla eklendiniz ✨✨✨ </Text>,
    })
    form.setValues({ email: "" })
  }
  return (
    <Container size="md" mt="xl" id="banner">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Bir dakika ...</Title>
            <Text fw={500} fz="lg" mb={5}>
              Günlük hedeflerinizi emailinizden takip edin!
            </Text>
            <Text fz="sm" c="dimmed">
              Sizlerle iletişimimizi koparmamak ve yeni güncellemelerden haberdar etmek için aşağıdaki kutuya mail adresinizi girebilirsiniz
            </Text>

            <div className={classes.controls}>
              <TextInput
                placeholder="Mail Adresiniz"
                classNames={{ input: classes.input, root: classes.inputWrapper }}
                required
                {...form.getInputProps("email")}
              />
              <Button className={classes.control} type="submit">
                Gönder
              </Button>
            </div>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </form>
    </Container>
  )
}

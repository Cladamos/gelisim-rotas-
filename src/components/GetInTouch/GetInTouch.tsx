import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container } from "@mantine/core"
import { ContactIconsList } from "./ContactIcons"
import { notifications } from "@mantine/notifications"
import { useForm } from "@mantine/form"
import classes from "./GetInTouch.module.css"

export function GetInTouch() {
  const form = useForm({
    initialValues: { email: "", title: "", description: "", name: "", message: "" },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Geçersiz email adresi"),
    },
  })

  function handleSubmit() {
    notifications.show({
      title: <Text size="sm"> Talebiniz Alınmıştır </Text>,
      message: <Text size="sm"> En kısa sürede sizi arayacağız ✨✨✨ </Text>,
    })
    form.setValues({ email: "", title: "", description: "", name: "", message: "" })
  }

  return (
    <Container size="md" id="get-in-touch" py="xl">
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ backgroundImage: `url(/bg.svg)` }}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              İletişim Bilgileri
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
            <Text fz="lg" fw={700} className={classes.title}>
              Bizimle Bağlantıda Kalın
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="İsminiz" placeholder="İsminiz" {...form.getInputProps("name")} />
                <TextInput label="Email Adresiniz" placeholder="hello@cladamos.dev" required {...form.getInputProps("email")} />
              </SimpleGrid>
              <TextInput mt="md" label="Konu" placeholder="Konu" required {...form.getInputProps("title")} />
              <Textarea mt="md" label="Mesajınız" placeholder="Lütfen ilgili tüm bilgileri ekleyin" minRows={3} {...form.getInputProps("message")} />
              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Mesajı Yolla
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  )
}

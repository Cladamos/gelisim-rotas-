import { Container, Group, Text, Card, Image, Button, Spoiler } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import GetSupportModal from "./GetSupportModal"

function GetSupport() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Container size="lg" p="xl" pt={100} maw={700}>
      <GetSupportModal opened={opened} open={open} close={close} />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src="https://irmethospital.com/wp-content/uploads/2018/11/Blog_Overcoming_sm-2000x1200-1.jpg" height={250} alt="Norway" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>İşinde Uzman Kişilerden Destek Al</Text>
        </Group>
        <Spoiler maxHeight={160} showLabel={<Text size="sm">Göster</Text>} hideLabel={<Text size="sm">Gizle</Text>}>
          <Text size="sm" c="dimmed">
            Kişisel gelişim yolculuğunuzda, kariyer hedeflerinizi netleştirme ve bu hedeflere ulaşmanın en verimli yolunu belirleme konusunda
            zorlanıyorsanız, Gelişim Rotası olarak yanınızdayız. Kariyerinizde bir sonraki büyük adımı atmanız için gerekli motivasyonu ve yönü
            sağlamak amacıyla, alanında uzman ekip üyelerimizin derinlemesine rehberliğinden faydalanabilirsiniz. Sizlere, hedeflerinize ulaşmanız
            için özel olarak tasarlanmış, kişiye özgü stratejiler ve yol haritaları sunarak, hayal ettiğiniz kariyere giden yolda güçlü ve emin
            adımlar atmanıza olanak tanırız.
          </Text>
          <Text size="sm" c="dimmed" mt="lg">
            Her bir bireyin benzersiz olduğunu ve herkesin farklı bir kariyer yolculuğuna sahip olduğunu biliyoruz. Bu nedenle, kişisel
            yeteneklerinizi, ilgi alanlarınızı ve kariyer hedeflerinizi dikkatlice analiz ederek, size en uygun çözümleri sunmayı hedefliyoruz.
            Uzmanlarımız, sizi en iyi sonuçlara ulaştıracak araçlar, teknikler ve stratejiler konusunda bilgilendirecek ve sizi motive edecek.
            Böylece, kariyerinizde istediğiniz başarıya ulaşmak için gerekli adımları bilinçli ve güvenle atabileceksiniz.
          </Text>
          <Text size="sm" c="dimmed" mt="lg">
            Detaylı bilgi almak ve kayıt olmak için aşağıdaki "Destek Al" butonuna tıklayarak bizimle iletişime geçebilirsiniz. Gelişim Rotası olarak,
            sizin başarınız için buradayız ve bu heyecan verici yolculukta size rehberlik etmeye hazırız.
          </Text>
        </Spoiler>
        <Button color="blue" fullWidth mt="md" radius="md" onClick={open}>
          Destek Al
        </Button>
      </Card>
    </Container>
  )
}

export default GetSupport

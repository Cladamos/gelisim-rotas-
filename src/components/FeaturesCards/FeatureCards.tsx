import { Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from "@mantine/core"
import { IconProgress, IconHeartHandshake, IconChecklist } from "@tabler/icons-react"
import classes from "./FeatureCards.module.css"

const mockdata = [
  {
    title: "Hedef Belirleme",
    description:
      "Gelişim Rotası, kişisel ve profesyonel hedeflerinizi netleştirmenize ve bu hedeflere ulaşmak için gereken adımları ayrıntılı bir şekilde planlamanıza olanak tanır. Platform, kısa, orta ve uzun vadeli hedeflerinizi belirlemenizi ve bu hedeflere yönelik eylem planlarınızı oluşturmanızı kolaylaştırır. Bu, hedeflerinize odaklanmanızı ve sistemli bir şekilde ilerlemenizi sağlar, böylece hayallerinize bir adım daha yaklaşırsınız.",
    icon: IconChecklist,
  },
  {
    title: "İlerleme Takibi",
    description:
      "Hedeflerinize doğru yaptığınız her adımı görsel ve sayısal verilerle takip edin. Gelişim Rotası, ilerlemenizi düzenli olarak izlemenize ve motivasyonunuzu sürekli taze tutmanıza yardımcı olur. Ayrıca, planlarınızı gerektiğinde yeniden değerlendirme imkanı sunar, böylece her zaman en doğru yolda ilerlediğinizden emin olabilirsiniz.",
    icon: IconProgress,
  },
  {
    title: "Psikolog Desteği",
    description:
      "Kendinizi zor bir durumda hissettiğinizde, profesyonel psikologlarımızdan online terapi ve danışmanlık hizmetleri alabilirsiniz. Stres yönetimi, motivasyon artırma ve kişisel gelişim zorlukları gibi konularda size destek olurlar. Bu profesyonel destek, kişisel ve profesyonel gelişiminizde daha güçlü adımlar atmanıza yardımcı olacaktır.",
    icon: IconHeartHandshake,
  },
]

export function FeaturesCards() {
  const theme = useMantineTheme()
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))

  return (
    <Container size="md" py="xl" mt={90} id="features">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Kişisel Gelişimde Yeni Bir Yolculuğa hazır mısınız? Haydi sizde gelişim rotanızı oluşturun
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Hayallerinize ulaşmanızı sağlayan, potansiyelinizi keşfetmenize olanak tanıyan yenilikçi bir dünyaya hoş geldiniz!
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  )
}

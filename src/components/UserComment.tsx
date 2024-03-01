import { Text, Avatar, Group, Container, Paper, Title, Stack } from "@mantine/core"

const mockdata = [
  {
    name: "Barlas",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    comment:
      "YKS öğrencisiyken ve sınav hazırlık sürecinde psikolojik olarak çok sıkıntılı zamanlar geçiriyordum. Bir arkadaşımın tavsiyesi üzerinesınava son 1 ay kala düzenli program oluşturmak ve uzmanlardan destek alabilmek için gelişim rotasına üye oldum. Benim için çok yararlıoldu hatta bu yorumu şu an hayal ettiğim üniversitenin kampüsünde oturup yeni hedeflerimi oluştururken yazıyorum :)",
  },
  {
    name: "Yemliyha",
    avatar: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    comment:
      "Yıllardır hayalini kurduğum kendi işimi kurma sürecinde, Gelişim Rotası'nın sağladığı hedef belirleme araçları ve uzman desteği benim içindönüm noktası oldu. Kendi iş planımı oluştururken, karşılaştığım zorluklarda uzman desteği alarak, motivasyonumu yüksek tutmayı başardım.Bugün, başarılı bir girişimcinin ilk adımlarını atmış olmanın gururunu yaşıyorum.",
  },
]

export function UserComment() {
  return (
    <Container size="sm" pt={80}>
      <Group justify="center" pb="xl">
        <Title size={36}>Kullancı Yorumları</Title>
      </Group>
      <Stack gap="lg">
        {mockdata.map((data) => (
          <Paper withBorder radius="md" p="xl">
            <Group>
              <Avatar src={data.avatar} alt={data.name} radius="xl" />
              <Text size="lg" fw={700}>
                {data.name}
              </Text>
            </Group>
            <Text pl="xl" pt="lg" size="md">
              {data.comment}
            </Text>
          </Paper>
        ))}
      </Stack>
    </Container>
  )
}

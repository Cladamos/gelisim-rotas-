import { Text, Avatar, Group, Container, Paper, Title, Stack } from "@mantine/core"

export function UserComment() {
  return (
    <Container size="sm" pt={80}>
      <Group justify="center" pb="xl">
        <Title size={36}>Kullancı Yorumları</Title>
      </Group>
      <Stack gap="lg">
        <Paper withBorder radius="md" p="xl">
          <Group>
            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="Jacob Warnhalter" radius="xl" />
            <Text size="md">Jacob Warnhalter</Text>
          </Group>
          <Text pl={54} pt="sm" size="md">
            This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and
            pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.
          </Text>
        </Paper>
        <Paper withBorder radius="md" p="xl">
          <Group>
            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" alt="Jacob Warnhalter" radius="xl" />
            <Text size="md">Jacob Warnhalter</Text>
          </Group>
          <Text pl={54} pt="sm" size="md">
            This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and
            pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.
          </Text>
        </Paper>
      </Stack>
    </Container>
  )
}

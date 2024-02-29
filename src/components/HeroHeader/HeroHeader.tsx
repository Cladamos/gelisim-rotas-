import { Image, Container, Title, Text, List, ThemeIcon, rem } from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"
import image from "./image.svg"
import classes from "./HeroHeader.module.css"

export function HeroHeader() {
  return (
    <Container size="md" p="xl" id="header">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Kişisel gelişimin <span className={classes.highlight}>anahtarı</span> elinizin altında
          </Title>
          <Text c="dimmed" mt="md">
            Gelişim Rotası, kullanıcıların kişisel ve profesyonel gelişim yolculuklarında rehberlik ve destek sağlamayı amaçlayan kapsamlı bir web
            platformudur. Bu platform, bireylerin kendilerine özgü hedefler belirlemelerine, bu hedeflere ulaşma süreçlerinde ilerlemelerini detaylı
            bir şekilde takip etmelerine ve ihtiyaç duyduklarında çeşitli kaynaklar ve profesyonel danışmanlık hizmetleri aracılığıyla destek
            almalarına olanak tanır.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Kolay erişilebilir</b> - internet sitesi olduğu için herhangi bir uygulama indirmeden kolayca erişebilir
            </List.Item>
            <List.Item>
              <b>Kullanıcı Dostu</b> - internete ve bilgisyar/telefon erişiminizin olduğu her yerde ulaşabilir
            </List.Item>
            <List.Item>
              <b>Kolay Arayüzü</b> - açıklayıcı metinleri ile kolay anlaşılabilir
            </List.Item>
          </List>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  )
}

import { Container, Title, Accordion } from "@mantine/core"
import classes from "./Faq.module.css"

export function Faq() {
  return (
    <Container size="sm" className={classes.wrapper} id="faq">
      <Title ta="center" className={classes.title}>
        Sık Sorulan Sorular
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="account">
          <Accordion.Control>Gelişim Rotası'na nasıl üye olabilirim?</Accordion.Control>
          <Accordion.Panel>
            Gelişim Rotası'na üye olmak çok kolay! Web sitemizin ana sayfasında bulunan "Kayıt Ol" butonuna tıklayarak kayıt işlemini
            başlatabilirsiniz. Gerekli bilgileri doldurduktan sonra, kişisel gelişim yolculuğunuza başlamak için hazırsınız!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="pricing">
          <Accordion.Control>Gelişim Rotası'nı kullanmak ücretli mi?</Accordion.Control>
          <Accordion.Panel>
            Gelişim Rotası'nın temel özelliklerine erişim ücretsizdir. Ancak, platformun bazı özel özellikleri ve profesyonel destek hizmetleri,
            premium üyelik planı kapsamında sunulmaktadır. Detaylı bilgi için üyelik planlarımız sayfasını ziyaret edebilirsiniz.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="todos">
          <Accordion.Control>Hedeflerimi nasıl belirleyebilirim ve takip edebilirim?</Accordion.Control>
          <Accordion.Panel>
            Hedeflerinizi belirlemek için, kullanıcı panelinizdeki "Hedeflerim" bölümüne gidin ve "Yeni Hedef Ekle" butonunu kullanın. Hedeflerinizi
            belirledikten sonra, ilerlemenizi "İlerleme Takibi" bölümünden takip edebilir ve güncelleyebilirsiniz.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="get-support">
          <Accordion.Control>Psikolog desteği nasıl alabilirim?</Accordion.Control>
          <Accordion.Panel>
            Psikolog desteği almak için, kullanıcı panelinizdeki "Psikolog Desteği" sekmesine gidin ve bir danışmanlık seansı ayarlayın. Mevcut
            psikologlarımızın profillerini inceleyebilir ve size en uygun olanı seçebilirsiniz.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="daily">
          <Accordion.Control>Günlük alışkanlıklarımı nasıl takip edebilirim?</Accordion.Control>
          <Accordion.Panel>
            Günlük alışkanlıklarınızı takip etmek için, "Alışkanlık İzleyici" aracını kullanabilirsiniz. Bu araç, su tüketimi, egzersiz rutinleri ve
            diğer sağlıklı yaşam alışkanlıklarınızı kaydetmenize ve izlemenize olanak tanır.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Topluluk desteği nedir ve nasıl katılabilirim?</Accordion.Control>
          <Accordion.Panel>
            Topluluk desteği, kullanıcıların deneyimlerini paylaşabilecekleri, birbirlerine ilham verebilecekleri ve destek alabilecekleri bir alan
            sağlar. Topluluk forumuna erişmek için, kullanıcı panelinizdeki "Topluluk" sekmesine tıklayın. Burada, ilginizi çeken konularda
            tartışmalara katılabilir ve kendi deneyimlerinizi paylaşabilirsiniz.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

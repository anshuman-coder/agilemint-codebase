
import { PageBox, PageHelmet, SectionWrapper } from '~/components/global'
import { MembersList } from '~/components/team'

export default function Team() {
  return (
    <>
      <PageHelmet title='| Teams' />
      <PageBox>
        <SectionWrapper
          title='Founding members'
          align='center'
          className='mb-6 lg:mb-12'
        />
        <MembersList />
      </PageBox>
    </>
  )
}

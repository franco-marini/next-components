import Header from '@/components/server/header'

import * as S from './styles'

export default function Home() {
  return (
    <S.Main>
      <Header
        user={{
          firstName: 'Franco',
          lastName: 'Marini',
        }}
      />
    </S.Main>
  )
}

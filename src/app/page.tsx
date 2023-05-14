import { TextField } from '@/components/client/ui/inputs/text-field'
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

      <TextField label="Email" name="email" />
    </S.Main>
  )
}

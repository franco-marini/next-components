import { useListBoxSection, useSeparator } from 'react-aria'

import { Option } from '../option'
import * as S from './styles'
import { ListBoxSectionProps } from './types'

export function ListBoxSection<Data extends object>({ section, state }: ListBoxSectionProps<Data>) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  })

  let { separatorProps } = useSeparator({
    elementType: 'li',
  })

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && <S.Separator {...separatorProps} />}
      <S.Section {...itemProps}>
        {section.rendered && <S.Heading {...headingProps}>{section.rendered}</S.Heading>}
        <S.UlSection {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </S.UlSection>
      </S.Section>
    </>
  )
}

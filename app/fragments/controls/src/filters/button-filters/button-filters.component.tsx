import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'
import { useIntl }            from 'react-intl'

import { Button }             from '@ui/button'
import { FilterFunnelIcon }   from '@ui/icons'
import { TableIcon }          from '@ui/icons'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Select }             from '@ui/select'

import { ButtonFiltersProps } from './button-filters.interface'

const ButtonFilters: FC<ButtonFiltersProps> = ({ openFilters, setOpenFilters }) => {
  const { formatMessage } = useIntl()

  const [columns, setColumns] = useState<string[]>([])

  return (
    <Box>
      <Layout width={112}>
        <Button
          variant={openFilters ? 'tertiaryActive' : 'tertiary'}
          size='sm'
          onClick={() => setOpenFilters((prev) => !prev)}
        >
          <FilterFunnelIcon
            color={openFilters ? 'primaryMain' : 'grayscale2'}
            width={24}
            height={24}
          />
          <Layout flexBasis={8} />
          <FormattedMessage id='controls.filter' />
        </Button>
      </Layout>
      <Layout flexBasis={12} flexShrink={0} />
      <Layout width={40}>
        <Select
          items={[
            formatMessage({ id: 'controls.deadline' }),
            formatMessage({ id: 'controls.status' }),
            formatMessage({ id: 'controls.created' }),
            formatMessage({ id: 'controls.technique' }),
            formatMessage({ id: 'controls.group' }),
            formatMessage({ id: 'controls.malfunction' }),
          ]}
          icon={<TableIcon width={24} height={24} />}
          menuWidth={300}
          placement='bottom-end'
          multiselect
          value={columns}
          onSelect={setColumns}
          sizes='small'
          color='secondary'
        />
      </Layout>
    </Box>
  )
}

export { ButtonFilters }

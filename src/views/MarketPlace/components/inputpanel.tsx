import React from 'react'
import { Currency, Pair } from '@spacegrimeswap/sdk'
import { Button, ChevronDownIcon, Text, Flex } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CurrencyLogo, DoubleCurrencyLogo } from '../../../components/Logo'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`
interface CurrencyInputPanelProps {
  onMax?: () => void
  label?: string
  currency?: Currency | null
  disableCurrencySelect?: boolean
  pair?: Pair | null
  hideInput?: boolean
}
export default function CurrencyInputPanel({
  onMax,
  label,
  currency,
  disableCurrencySelect = false,
  pair = null, // used for double token logo
  hideInput = false,
}: CurrencyInputPanelProps) {
  const { account } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <InputPanel>
      <Container hideInput={hideInput}>
        <Flex>
          <InputRow
            style={
              hideInput
                ? {}
                : {
                  marginLeft: '30px',
                  marginTop: '20px',
                  padding: '0',
                  borderRadius: '8px',
                  width: '65%',
                  backgroundColor: 'lightgrey',
                }
            }
            selected={disableCurrencySelect}
          >
            <Button variant="text">
              <Flex alignItems="center" justifyContent="space-between">
                {pair ? (
                  <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
                ) : currency ? (
                  <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
                ) : null}
                {pair ? (
                  <Text id="pair">
                    {pair?.token0.symbol}:{pair?.token1.symbol}
                  </Text>
                ) : (
                  <Text id="pair">
                    {(currency && currency.symbol && currency.symbol.length > 20
                      ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                        currency.symbol.length - 5,
                        currency.symbol.length,
                      )}`
                      : currency?.symbol) || t('MAX | BNB')}
                  </Text>
                )}
                {!disableCurrencySelect && <ChevronDownIcon />}
              </Flex>
            </Button>
          </InputRow>
          <Button style={{ marginLeft: '40px', marginTop: '20px', marginRight: '15px', backgroundColor: '#22A5FF', letterSpacing: '-1.3px' }}>
            BUY NOW
          </Button>
        </Flex>
      </Container>
    </InputPanel>
  )
}

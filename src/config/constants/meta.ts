import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SpacegrimeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SpacegrimeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://spacegrimeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SpacegrimeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SpacegrimeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SpacegrimeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SpacegrimeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SpacegrimeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SpacegrimeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SpacegrimeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SpacegrimeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SpacegrimeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SpacegrimeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SpacegrimeSwap')}`,
      }
    default:
      return null
  }
}

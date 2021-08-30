import { MenuEntry } from '@spacegrimeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Earning'),
    icon: 'EarningIcon',
    href: '/earning',
  },
  {
    label: t('NFT Marketplace'),
    icon: 'NftIcon',
    href: '/marketplace',
  },
  {
    label: t('SpaceGrime Gallery'),
    icon: 'GalleryIcon',
    href: '/gallery',
  },
  {
    label: t('Launchpad'),
    icon: 'LaunchpadIcon',
    href: '/launchpad',
    // status: {
    //   text: t('Win').toLocaleUpperCase(),
    //   color: 'success',
    // },
  },
  {
    label: t('Gamification'),
    icon: 'GameIcon',
    href: '/gamification',
  },
  {
    label: t('ETH2.0'),
    icon: 'ETHIcon',
    href: '/eth2',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/info',
  },
  {
    label: t('Contact'),
    icon: 'ContactIcon',
    items: [
      {
        label: t('Twitter'),
        href: '/twitter',
      },
      {
        label: t('Telegram'),
        href: '/telegram',
      },
    ],
  },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: 'https://docs.pancakeswap.finance/contact-us',
  //     },
  //     {
  //       label: t('Voting'),
  //       href: '/voting',
  //     },
  //     {
  //       label: t('Github'),
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Blog'),
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //     {
  //       label: t('Merch'),
  //       href: 'https://pancakeswap.creator-spring.com/',
  //     },
  //   ],
  // },
]

export default config

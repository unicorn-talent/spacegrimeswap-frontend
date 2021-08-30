import React from 'react'
import NewCardItem from './NewCardItem'
import BaseLayout from '../../../components/BaseLayout'

const cardValues = [
  {
    id: 1,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 2,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 3,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 4,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 5,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 6,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
  {
    id: 7,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: true,
  },
  {
    id: 8,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    star: '54',
    isDark: false,
  },
]

const HomeCardList: React.FC = () => {
  return (
    <>
      <BaseLayout>
        {cardValues.map((card) => (
          <NewCardItem
            key={card.id}
            cardBackgroundUrl={card.backgroundUrl}
            cardTitle={card.title}
            priceValue={card.price}
            starValue={card.star}
            isDark={card.isDark}
          />
        ))}
      </BaseLayout>
    </>
  )
}

export default HomeCardList

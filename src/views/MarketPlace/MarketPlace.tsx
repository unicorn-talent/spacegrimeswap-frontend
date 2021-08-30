import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import BaseLayout from '../../components/BaseLayout'
import MarketPlaceBanner from './components/MarketPlaceBanner'
import MarketCard from './components/MarketCard'

const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 64px);
  background: ${({ theme }) =>
    theme.isDark ? `url('/images/marketplace/market_back_dark.png')` : `url('/images/marketplace/market_back.png')`};
  background-repeat: no-repeat;
  background-size: cover;
`

const CustomBaseLayout = styled(BaseLayout)`
  padding: 20px;
`

const CarouselBody = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
`

const cardValues = [
  {
    id: 1,
    backgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    title: 'ARTWORK TITLE',
    price: '87,900 $STAKE',
    type: 'SWOG',
    star: '89',
    isDark: true,
  },
  {
    id: 2,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTIST TITLE',
    price: '53,330 $GRIMEX',
    type: 'SWOG',
    star: '54',
    isDark: false,
  },
  {
    id: 3,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'STAKE TITLE',
    price: '13,500 $GRIMEX',
    type: 'KAKA NFT',
    star: '69',
    isDark: false,
  },
  {
    id: 4,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'BSC Artists',
    star: '54',
    isDark: true,
  },
  {
    id: 5,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Alkemy Toys',
    star: '54',
    isDark: false,
  },
  {
    id: 6,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Crypto Doggies',
    star: '54',
    isDark: false,
  },
  {
    id: 7,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Cookie Munster',
    star: '54',
    isDark: true,
  },
  {
    id: 8,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Radio Caca NFT',
    star: '54',
    isDark: false,
  },
  {
    id: 9,
    backgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    title: 'ARTWORK TITLE',
    price: '87,900 $STAKE',
    type: 'SWOG',
    star: '89',
    isDark: true,
  },
  {
    id: 10,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTIST TITLE',
    price: '53,330 $GRIMEX',
    type: 'SWOG',
    star: '54',
    isDark: false,
  },
  {
    id: 11,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'STAKE TITLE',
    price: '13,500 $GRIMEX',
    type: 'KAKA NFT',
    star: '69',
    isDark: false,
  },
  {
    id: 12,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'BSC Artists',
    star: '54',
    isDark: true,
  },
  {
    id: 13,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Alkemy Toys',
    star: '54',
    isDark: false,
  },
  {
    id: 14,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Crypto Doggies',
    star: '54',
    isDark: false,
  },
  {
    id: 15,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Cookie Munster',
    star: '54',
    isDark: true,
  },
  {
    id: 16,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Radio Caca NFT',
    star: '54',
    isDark: false,
  },
  {
    id: 17,
    backgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    title: 'ARTWORK TITLE',
    price: '87,900 $STAKE',
    type: 'SWOG',
    star: '89',
    isDark: true,
  },
  {
    id: 18,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTIST TITLE',
    price: '53,330 $GRIMEX',
    type: 'SWOG',
    star: '54',
    isDark: false,
  },
  {
    id: 19,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'STAKE TITLE',
    price: '13,500 $GRIMEX',
    type: 'KAKA NFT',
    star: '69',
    isDark: false,
  },
  {
    id: 20,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'BSC Artists',
    star: '54',
    isDark: true,
  },
  {
    id: 21,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Alkemy Toys',
    star: '54',
    isDark: false,
  },
  {
    id: 22,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Crypto Doggies',
    star: '54',
    isDark: false,
  },
  {
    id: 23,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Cookie Munster',
    star: '54',
    isDark: true,
  },
  {
    id: 24,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Radio Caca NFT',
    star: '54',
    isDark: false,
  },
  {
    id: 25,
    backgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    title: 'ARTWORK TITLE',
    price: '87,900 $STAKE',
    type: 'SWOG',
    star: '89',
    isDark: true,
  },
  {
    id: 26,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTIST TITLE',
    price: '53,330 $GRIMEX',
    type: 'SWOG',
    star: '54',
    isDark: false,
  },
  {
    id: 27,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'STAKE TITLE',
    price: '13,500 $GRIMEX',
    type: 'KAKA NFT',
    star: '69',
    isDark: false,
  },
  {
    id: 28,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'BSC Artists',
    star: '54',
    isDark: true,
  },
  {
    id: 29,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Alkemy Toys',
    star: '54',
    isDark: false,
  },
  {
    id: 30,
    backgroundUrl: '/images/home/card_back1.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Crypto Doggies',
    star: '54',
    isDark: false,
  },
  {
    id: 31,
    backgroundUrl: '/images/home/card_back3.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Cookie Munster',
    star: '54',
    isDark: true,
  },
  {
    id: 32,
    backgroundUrl: '/images/home/card_back2.png',
    title: 'ARTWORK TITLE',
    price: '13,500 $GRIMEX',
    type: 'Radio Caca NFT',
    star: '54',
    isDark: false,
  },
]

const MarketPlace: React.FC = () => {
  const [cardInfo, setCardInfo] = useState({
    cardBackgroundUrl: '/images/nfts/stormy-easter-21-lg.png',
    cardTitle: 'ARTWORK TITLE',
    priceValue: '13,500 $GRIMEX',
    starValue: '54',
  })

  const [cardsArray, setCardsArray] = useState(cardValues)
  const [searchKey, setSearchKey] = useState({ type: 'SWOG', title: '' })

  useEffect(() => {
    searchByThreeParam(searchKey)
  }, [searchKey])

  const getSearchByTag = (tagSearchKey) => {
    searchKey.type = tagSearchKey
    searchByThreeParam(searchKey)
  }

  const getSearchByName = (nameSearchKey) => {
    searchKey.title = nameSearchKey
    searchByThreeParam(searchKey)
  }

  const getMediaType = (mediaType) => {
    console.log(mediaType)
  }

  const searchByThreeParam = (searchKeyData) => {
    const { type, title } = searchKeyData
    if (title === '') {
      const tempCardArray = []
      for (let i = 0; i < cardValues.length; i++) {
        if (cardValues[i].type === type) {
          tempCardArray.push(cardValues[i])
        }
      }
      setCardsArray(tempCardArray)
    } else {
      const tempCardArray = []
      for (let i = 0; i < cardValues.length; i++) {
        if (cardValues[i].type === type && cardValues[i].title.includes(title)) {
          tempCardArray.push(cardValues[i])
        }
      }
      setCardsArray(tempCardArray)
    }
  }

  return (
    <>
      <ContentBody>
        <MarketPlaceBanner
          getMediaType={getMediaType}
          getSearchKey={getSearchByTag}
          getSearchByNameStr={getSearchByName}
          cardBackgroundUrl={cardInfo.cardBackgroundUrl}
          cardTitle={cardInfo.cardTitle}
          priceValue={cardInfo.priceValue}
          starValue={cardInfo.starValue}
        />
        <CarouselBody>
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <CustomBaseLayout>
              {cardsArray.map((card) => (
                <MarketCard
                  key={card.id}
                  setCardInfo={setCardInfo}
                  cardBackgroundUrl={card.backgroundUrl}
                  cardTitle={card.title}
                  priceValue={card.price}
                  starValue={card.star}
                  isDark={card.isDark}
                />
              ))}
            </CustomBaseLayout>
          </div>
        </CarouselBody>
      </ContentBody>
    </>
  )
}

export default MarketPlace

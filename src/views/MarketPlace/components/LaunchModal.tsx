import React from 'react'
import { Flex, Input, ModalContainer, Checkbox } from '@spacegrimeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const StyledModal = styled(ModalContainer)`
  background-color: white;
  border-radius: 50px;
  width: 600px;
  margin: 0 30px;
  max-height: calc(90vh);

  @media screen and (min-width: 1000px) {
    width: 960px;
  }
`

const ModalPanel = styled.div`
  margin: 40px 0 20px;
  z-index: 3;
  font-weight: 10px;
  text-align: justify;
  font-family: Barlow;
`

const FormPanel = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 1000px) {
    align-items: center;
    flex-direction: row;
  }
`

const CustomModalTitle = styled.div`
  font-size: 58px;
  text-align: center;
`

const LeftTitle = styled.span`
  color: #fa1dbb;
`

const RightTitle = styled.span`
  color: #414076;
`

const SpanCenterBox = styled.div`
  text-align: center;
`

const Media = styled.div`
  width: 400px;
  text-align: center;
`

const CustomSpan = styled.span<{ color: string; fontFamily: string; fontSize: string; isBold: string }>`
  color: ${({ color }) => `${color}`};
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: ${({ isBold }) => `${isBold}`};
  line-height: 24px;
`

const Inputs = styled.div`
  width: 450px;
`

const InputItem = styled.div`
  display: inline-flex;
  margin-top: 13px;
`

const SuggetedItem = styled.div`
  display: inline-flex;
`

const CenterItem = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`

const TextAreaItem = styled.div`
  margin-top: 13px;
  display: inline-grid;
`

const UploadLabel = styled.span`
  font-family: 'Barlow';
  font-size: 20px;
  margin-right: 10px;
  padding-top: 10px;
  text-align: end;
  color: #414076;
`

const CustomTextArea = styled.textarea`
  margin-left: 40px;
  width: 410px;
  height: 100px;
  border: none;
  background-color: #ecedef;
  margin-top: 15px;
  border-radius: 5px;
  padding: 10px;
  color: #414076;
  font-size: 18px;
  font-family: 'Barlow';
`

const InputLabel = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  width: 180px;
  margin-right: 10px;
  padding-top: 10px;
  text-align: end;
  color: #414076;
`

const CustomInput = styled(Input)`
  width: 260px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  background-color: #ecedef;
  margin-right: 15px;
  height: 37px;
  font-family: 'Barlow';
  color: #414076;
`

const ContentButton = styled.button<{ backgroundColor: string }>`
  height: 35px;
  border-radius: 18px;
  border: none;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  padding: 0 35px;
  font-size: 11px;
  font-family: 'Barlow', sans-serif;
  color: white;
  letter-spacing: -0.3px;
  cursor: pointer;
`

const CheckDetail = styled.div`
  width: fit-content;
  margin-left: 10px;
`

export default function CustomModal() {
  const { t } = useTranslation()

  const acceptedMedia = t('Accepted Media: ')
  const mediaExtensions = t('.GIF, .JPG, .PNG, .MP3, .MP4(limit 10MB)')

  const suggested = t('Suggested: ')
  const percentages = t('0%, 10%, 20%, 30%')

  return (
    <StyledModal minWidth="400px">
      <ModalPanel>
        <CustomModalTitle>
          <LeftTitle>Artwork </LeftTitle>
          <RightTitle>Information</RightTitle>
        </CustomModalTitle>
        {/* <CustomModalTitleDetail>{titleDetail}</CustomModalTitleDetail> */}
        <div>
          <FormPanel>
            <Media>
              <img src="/images/marketplace/default.png" alt="asdf" width="320" />
              <SpanCenterBox>
                <CustomSpan color="#414076" fontFamily="Barlow" fontSize="12px" isBold="bold">
                  {acceptedMedia}
                </CustomSpan>
                <CustomSpan color="#00d0ff" fontFamily="Barlow" fontSize="12px" isBold="light">
                  {mediaExtensions}
                </CustomSpan>
              </SpanCenterBox>
            </Media>
            <Inputs>
              <InputItem>
                <InputLabel>Artwork Name: </InputLabel>
                <CustomInput scale="md" placeholder="Type here..." />
              </InputItem>
              <InputItem>
                <InputLabel>Artist Name: </InputLabel>
                <CustomInput scale="md" placeholder="Type here..." />
              </InputItem>
              <InputItem>
                <InputLabel>Portfolio URL: </InputLabel>
                <CustomInput scale="md" placeholder="Type here..." />
              </InputItem>
              <TextAreaItem>
                <InputLabel>About the Artist: </InputLabel>
                <CustomTextArea>Type here...</CustomTextArea>
              </TextAreaItem>
              <InputItem>
                <InputLabel>Royalties (%): </InputLabel>
                <CustomInput scale="md" placeholder="Type here..." />
              </InputItem>
              <SuggetedItem style={{ width: '100%', justifyContent: 'flex-end' }}>
                <CustomSpan color="#414076" fontFamily="Barlow" fontSize="12px" isBold="bold">
                  {suggested}
                </CustomSpan>
                <CustomSpan color="#00d0ff" fontFamily="Barlow" fontSize="12px" isBold="light">
                  {percentages}
                </CustomSpan>
              </SuggetedItem>
            </Inputs>
          </FormPanel>
          <CenterItem style={{ width: '100%', justifyContent: 'center', marginTop: '30px' }}>
            <UploadLabel>File Upload: </UploadLabel>
            <CustomInput scale="md" placeholder="Browse files..." />
            <ContentButton backgroundColor="#ff00bc">UPLOAD</ContentButton>
          </CenterItem>
          <CenterItem>
            <Checkbox scale="sm" />
            <CheckDetail>
              <CustomSpan color="#414076" fontFamily="Barlow" fontSize="18px" isBold="bold">
                I declare that this is an original artwork.
              </CustomSpan>
              <br />
              <CustomSpan color="#414076" fontFamily="Barlow" fontSize="18px" isBold="light">
                I understand that no plagiarism is allowe, and that
              </CustomSpan>
              <br />
              <CustomSpan color="#414076" fontFamily="Barlow" fontSize="18px" isBold="light">
                the artwork can be removed anytime if detected.
              </CustomSpan>
            </CheckDetail>
          </CenterItem>
          <CenterItem>
            <ContentButton backgroundColor="#00258c" style={{ marginTop: '20px' }}>
              MINT ARTWORK
            </ContentButton>
          </CenterItem>
        </div>
      </ModalPanel>
    </StyledModal>
  )
}

import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Flex, Input, ModalContainer, Checkbox, Text, Button } from '@spacegrimeswap/uikit'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const ContentBody = styled.div`
  background: ${({ theme }) =>
    theme.isDark
      ? `url('/images/marketplace/mintartwork_dark.png')`
      : `url('/images/marketplace/mintartwork_background.png')`};
  background-repeat: round;
  text-align: -webkit-center;
  padding: 300px 0 50px 0;
`
// #3a3996 #403e97
const StyledCheckBox = styled(Checkbox)`
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : '#eeeaf4')};
`

const StyledModal = styled(ModalContainer)`
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? '0 0 4px #14146e, 0 0 8px #14146e, 0 0 16px #14146e, 5px 5px 30px black'
      : '0 0 4px white, 0 0 8px grey, 0 0 16px white, 10px 10px 20px grey'};
  background-color: ${({ theme }) => (theme.isDark ? '#3a3996' : 'white')};
  border-radius: 50px;
  border: none;
  width: 600px;
  margin: 0 30px;
  max-height: fit-content;

  @media screen and (min-width: 1350px) {
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

  @media screen and (min-width: 1350px) {
    align-items: center;
    flex-direction: row;
  }
`

const CustomModalTitle = styled.div`
  font-size: 48px;
  text-align: center;
`

const LeftTitle = styled.span`
  color: #fa1dbb;
`

const RightTitle = styled.span`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const SpanCenterBox = styled.div`
  margin-top: 12px;
  text-align: center;
`

const Media = styled.div`
  width: 400px;
  text-align: center;

  & img {
    width: 320px;
    height: 320px;
    box-shadow: ${({ theme }) => (theme.isDark ? '0 0 30px #d3a6e5' : '10px 10px 25px grey')};
    border-radius: 20px;
  }
`

const CustomSpan = styled.span<{ fontFamily: string; fontSize: string; isBold: string }>`
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
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
  margin-top: 12px;
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
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const CustomTextArea = styled.textarea`
  margin-left: 40px;
  width: 410px;
  height: 100px;
  border: none;
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : '#ecedef')};
  margin-top: 15px;
  border-radius: 15px;
  padding: 10px;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
  font-size: 18px;
  font-family: 'Barlow';
  box-shadow: inset 0px 2px 2px -1px rgb(74 74 104 / 10%);
  :focus {
    outline: #ad8fe8;
    border: 4px solid #ad8fe8;
    border-color: #ad8fe8;
  }
`

const InputLabel = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  width: 180px;
  margin-right: 10px;
  padding-top: 10px;
  text-align: end;
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const CustomInput = styled(Input)`
  width: 260px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  background-color: ${({ theme }) => (theme.isDark ? '#403e97' : '#ecedef')};
  margin-right: 15px;
  height: 37px;
  font-family: 'Barlow';
  color: ${({ theme }) => (theme.isDark ? 'white' : '#414076')};
`

const ContentButton = styled(Button)<{ backgroundColor: string }>`
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

interface IFormInput {
  artwork: string
  artist: string
  portfolioUrl: string
  aboutArtist: string
  royalties: number
}

export default function MintArtworks() {
  const { t } = useTranslation()
  const [confirmed, setConfirmed] = useState(false)
  const acceptedMedia = t('Accepted Media: ')
  const uploadArtworkImage = t('Upload your artwork image')
  const mediaExtensions = t('.GIF, .JPG, .PNG, .MP3, .MP4(limit 10MB)')
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [UFName, setUFName] = useState('')
  const [UFType, setUFType] = useState('')
  const { theme } = useTheme()

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
    setUFName(e.target.files[0].name)
    setUFType(e.target.files[0].type)
  }

  console.log(UFType)

  const suggested = t('Suggested: ')
  const percentages = t('0%, 10%, 20%, 30%')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <>
      <ContentBody>
        <StyledModal minWidth="400px">
          <ModalPanel>
            <CustomModalTitle>
              <LeftTitle>Artwork </LeftTitle>
              <RightTitle>Information</RightTitle>
            </CustomModalTitle>
            {/* <CustomModalTitleDetail>{titleDetail}</CustomModalTitleDetail> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormPanel>
                <Media>
                  {/* {theme.isDark ? (
                    <img src={image.preview ? image.preview : '/images/marketplace/dark-logo.png'} alt="asdf" />
                  ) : (
                    <img src={image.preview ? image.preview : '/images/marketplace/default.png'} alt="asdf" />
                  )} */}

                  {/* (UFType === 'image/jpeg' || UFType === 'image/png' || UFType === 'image/gif') */}
                  {image.preview ? (
                    UFType === 'image/jpeg' || UFType === 'image/png' || UFType === 'image/gif' ? (
                      <img src={image.preview} alt="uploadimage" />
                    ) : UFType === 'audio/mpeg' ? (
                      <audio controls>
                        <source src={image.preview} type="audio/ogg" />
                        <source src={image.preview} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                      </audio>
                    ) : UFType === 'video/mp4' ? (
                      <video width="320" height="320" controls>
                        <source src={image.preview} type="video/mp4" />
                        <source src={image.preview} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <></>
                    )
                  ) : theme.isDark ? (
                    <img src="/images/marketplace/dark-logo.png" alt="UploadPreviewImage" />
                  ) : (
                    <img src="/images/marketplace/default.png" alt="UploadPreviewImage" />
                  )}

                  <SpanCenterBox>
                    <CustomSpan color="#414076" fontFamily="Barlow" fontSize="20px" isBold="light">
                      {uploadArtworkImage}
                    </CustomSpan>
                    <br />
                    <CustomSpan color="#414076" fontFamily="Barlow" fontSize="12px" isBold="light">
                      {acceptedMedia}
                    </CustomSpan>
                    <CustomSpan style={{ color: '#00d0ff' }} fontFamily="Barlow" fontSize="12px" isBold="light">
                      {mediaExtensions}
                    </CustomSpan>
                  </SpanCenterBox>
                </Media>
                <Inputs>
                  <InputItem>
                    <InputLabel>Artwork Type: </InputLabel>
                    <CustomInput
                      {...register('artwork', {
                        required: true,
                        minLength: { value: 2, message: 'Artwork Type must be more than 2 letters' },
                        maxLength: { value: 20, message: 'Artwork Type must be less than 20 letters' },
                      })}
                      scale="md"
                      placeholder="Type here..."
                    />
                  </InputItem>
                  <Text fontFamily="Barlow" fontSize="12px" color="red" textAlign="right" mt="4px">
                    {errors.artwork?.type === 'required' && 'Artwork name is required'}
                    {errors?.artwork?.message}
                  </Text>
                  <InputItem>
                    <InputLabel>Artist Name: </InputLabel>
                    <CustomInput
                      {...register('artist', {
                        required: true,
                        minLength: { value: 2, message: 'Artwork Name must be more than 2 letters' },
                        maxLength: { value: 20, message: 'Artwork Name must be less than 20 letters' },
                      })}
                      scale="md"
                      placeholder="Type here..."
                    />
                  </InputItem>
                  <Text fontFamily="Barlow" fontSize="12px" color="red" textAlign="right" mt="4px">
                    {errors.artist?.type === 'required' && 'Artist name is required'}
                    {errors?.artist?.message}
                  </Text>
                  <InputItem>
                    <InputLabel>Portfolio URL: </InputLabel>
                    <CustomInput
                      {...register('portfolioUrl', { required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/ })}
                      scale="md"
                      placeholder="Type here..."
                    />
                  </InputItem>
                  <Text fontFamily="Barlow" fontSize="12px" color="red" textAlign="right" mt="4px">
                    {errors.portfolioUrl && errors.portfolioUrl.type === 'required' && 'PortfolioUrl is required'}
                    {errors.portfolioUrl &&
                      errors.portfolioUrl.type === 'pattern' &&
                      'PortfolioUrl is like this: http://www.gmail.com'}
                  </Text>
                  <TextAreaItem>
                    <InputLabel>About the Artist: </InputLabel>
                    <CustomTextArea
                      {...register('aboutArtist', {
                        required: true,
                        minLength: { value: 20, message: 'This field must be more than 20 letters' },
                        maxLength: { value: 200, message: 'This field must be less than 200 letters' },
                      })}
                      placeholder="Type here..."
                    />
                  </TextAreaItem>
                  <Text fontFamily="Barlow" fontSize="12px" color="red" textAlign="right" mt="4px">
                    {errors.aboutArtist?.type === 'required' && 'This field is required'}
                    {errors?.aboutArtist?.message}
                  </Text>
                  <InputItem>
                    <InputLabel>Royalties (%): </InputLabel>
                    <CustomInput
                      type="number"
                      {...register('royalties', {
                        required: true,
                        min: { value: 0, message: 'This field is required between 0 ~ 100' },
                        max: { value: 100, message: 'This field is required between 0 ~ 100' },
                      })}
                      scale="md"
                      placeholder="Type here..."
                    />
                  </InputItem>
                  <Text fontFamily="Barlow" fontSize="12px" color="red" textAlign="right" mt="4px">
                    {errors.royalties?.type === 'required' && 'This field is required'}
                    {errors?.royalties?.message}
                  </Text>
                  <SuggetedItem style={{ width: '100%', justifyContent: 'flex-end' }}>
                    <CustomSpan color="#414076" fontFamily="Barlow" fontSize="12px" isBold="light">
                      {suggested}
                    </CustomSpan>
                    <CustomSpan style={{ color: '#00d0ff' }} fontFamily="Barlow" fontSize="12px" isBold="light">
                      {percentages}
                    </CustomSpan>
                  </SuggetedItem>
                </Inputs>
              </FormPanel>
              <CenterItem style={{ width: '100%', justifyContent: 'center', marginTop: '30px' }}>
                <UploadLabel>File Upload: </UploadLabel>
                <CustomInput scale="md" value={image.preview ? UFName : 'Browse files...'} />
                <label
                  htmlFor="upload-button"
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    backgroundColor: '#ff00bc',
                    borderRadius: '18px',
                    cursor: 'pointer',
                  }}
                >
                  {image.preview ? (
                    <>
                      <span className="fa-stack fa-2x mt-3 mb-2">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-store fa-stack-1x fa-inverse" />
                      </span>
                      <h5
                        className="text-center"
                        style={{
                          padding: '13px 26px',
                          fontFamily: 'Barlow',
                          fontSize: '11px',
                          color: 'white',
                          textShadow: '0 0 4px, 0 0 8px, 0 0 12px',
                        }}
                      >
                        UPLOAD
                      </h5>
                    </>
                  ) : (
                    <>
                      <span className="fa-stack fa-2x mt-3 mb-2">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i className="fas fa-store fa-stack-1x fa-inverse" />
                      </span>
                      <h5
                        className="text-center"
                        style={{
                          padding: '13px 26px',
                          fontFamily: 'Barlow',
                          fontSize: '11px',
                          color: 'white',
                          textShadow: '0 0 4px, 0 0 8px, 0 0 12px',
                          cursor: 'pointer',
                        }}
                      >
                        UPLOAD
                      </h5>
                    </>
                  )}
                </label>
                <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleChange} />
              </CenterItem>
              <CenterItem>
                <StyledCheckBox checked={confirmed} onChange={() => setConfirmed(!confirmed)} scale="sm" />
                <CheckDetail>
                  <CustomSpan color="#414076" fontFamily="Barlow" fontSize="18px" isBold="light">
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
                {confirmed ? (
                  <ContentButton type="submit" backgroundColor="#00258c" style={{ marginTop: '20px' }}>
                    MINT ARTWORK
                  </ContentButton>
                ) : (
                  <ContentButton
                    type="submit"
                    backgroundColor="#BDC2C4"
                    scale="sm"
                    style={{ marginTop: '20px' }}
                    disabled
                  >
                    MINT ARTWORK
                  </ContentButton>
                )}
              </CenterItem>
            </form>
          </ModalPanel>
        </StyledModal>
      </ContentBody>
    </>
  )
}

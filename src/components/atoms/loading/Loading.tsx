import { Player } from '@lottiefiles/react-lottie-player'
import * as S from './Loading.styles'
import { useEffect, useState } from 'react'

type Props = {
  src?: string | object
  autoplay?: boolean
  loop?: boolean
  height?: string
  width?: string
  zIndex?: number
  onlyAnimation?: boolean
  disableFullWidth?: boolean
  loadingColor?: string
}

/**
 * Loading animation with overlay
 *
 * @param src - { string | object } - receives a JSON animation via url or directly from a file
 *
 * @param height - { string } - height of the animation
 *
 * @param width - { string } - width of the animation
 *
 * @param autoplay - { boolean } - controls if the animation should start playing as soon as the component loads
 * * default: true
 *
 * @param loop - { boolean } - controls if the animation should repeat
 * * default: true
 *
 * @param zIndex - { number } - z-index for the component
 * * default: 1001
 *
 * @param onlyAnimation - { boolean } - if true, returns only the animation without the overlay
 * * default: false
 *
 * @param disableFullWidth - { boolean } - controls if the animation container should use all avaiable width
 * * default: false
 *
 * @param loadingColor - { string } - controls the loading color
 * * must be a hex value
 * * ex: #000, #AB5788
 */
export const Loading = ({
  autoplay = true,
  loop = true,
  height,
  width,
  src = 'https://api.npoint.io/943a276df173d3759fb0',
  zIndex = 1001,
  onlyAnimation = false,
  disableFullWidth = false,
  loadingColor
}: Props) => {
  const [animationData, setAnimationData] = useState()
  function hexToRgb(hex: string) {
    let code: any
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      code = hex.substring(1).split('')
      if (code.length === 3) {
        code = [code[0], code[0], code[1], code[1], code[2], code[2]]
      }

      const r = parseInt(code[0] + code[1], 16)
      const g = parseInt(code[2] + code[3], 16)
      const b = parseInt(code[4] + code[5], 16)

      return [r, g, b]
    }
    throw new Error('Bad Hex')
  }

  useEffect(() => {
    const configAnimationData = async () => {
      let jsonData: any

      if (typeof src === 'string') {
        const fetchJson = async () => {
          return await fetch(src)
            .then((resp) => resp.json())
            .then((json) => json)
        }
        jsonData = await fetchJson()
      } else if (typeof src === 'object') {
        jsonData = src
      }

      if (!loadingColor) {
        setAnimationData(jsonData)
      } else {
        const layers = jsonData.layers.map((layer: any) => {
          const shape = layer.shapes.find((shape: any) => {
            return shape.nm.includes('Ellipse')
          })
          const stroke = shape?.it?.find((vector: any) =>
            vector.nm?.includes('Stroke')
          )

          const rgbColor = hexToRgb(loadingColor).map((color) => color / 255)

          stroke && stroke.c && Object.assign(stroke?.c?.k, rgbColor)

          return layer
        })

        setAnimationData({ ...jsonData, layers: layers })
      }
    }

    configAnimationData()
  }, [])

  return (
    <S.Container
      width={width}
      height={height}
      zIndex={zIndex}
      onlyAnimation={onlyAnimation}
      disableFullWidth={disableFullWidth}>
      <Player
        loop={loop}
        autoplay={autoplay}
        src={animationData!}
        renderer="svg"
        className="animation-player"
      />
    </S.Container>
  )
}

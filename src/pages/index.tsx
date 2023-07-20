import { useEffect } from 'react'
import * as S from '../styles/index.styles'
import { streamingService } from '@/api/services/streamingService'

export default function Home() {
  useEffect(() => {
   const data =  streamingService()
   console.log("🚀 ~ file: index.tsx:8 ~ useEffect ~ data:", data)
  },[])
  return (
   <S.Container>oi</S.Container>
  )
}

import { Subtitle } from '../../../atoms/typography/subtitle/Subtitle'
import { theme } from '../../../designSystem/theme'
import dynamic from 'next/dynamic'
import * as S from './conclusionRate.styles'

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })

export const ConclusionRate = () => {
  // eslint-disable-next-line no-undef
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 220
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      show: true,
      width: 2,
      colors: ['transparent']
    },
    legend: {
      show: false
    },
    grid: {
      show: false
    },
    labels: [
      'Módulo 1',
      'Módulo 2',
      'Módulo 3',
      'Módulo 4',
      'Módulo 5',
      'Módulo 6',
      'Módulo 7',
      'Módulo 8'
    ],
    yaxis: {
      max: 100,
      labels: {
        formatter: function (val) {
          return `${val}`
        }
      }
    }
  }

  // eslint-disable-next-line no-undef
  const series: ApexAxisChartSeries = [
    {
      name: 'Aluno',
      data: [100, 100, 82, 50, 0, 75, 100, 100],
      color: theme.color.primary.nth2
    }
  ]
  return (
    <S.Container>
      <Subtitle variant="MD" color={theme.color.gray.nth1}>
        Taxa de conclusão
      </Subtitle>

      <ApexCharts
        type="bar"
        options={options}
        series={series}
        height="220px"
        width="100%"
      />
      {/* <S.LegendWrapper>
        <div>
          <span style={{ backgroundColor: theme.color.gray.nth4 }} />
          <Paragraph variant="MD" color={theme.color.gray.nth3}>
            Progresso da turma
          </Paragraph>
        </div>

        <div>
          <span style={{ backgroundColor: theme.color.primary.nth2 }} />
          <Paragraph variant="MD" color={theme.color.primary.nth2}>
            Progresso do aluno
          </Paragraph>
        </div>
      </S.LegendWrapper> */}
    </S.Container>
  )
}

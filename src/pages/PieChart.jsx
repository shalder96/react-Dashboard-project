import { ResponsivePie } from "@nivo/pie"
import {useTheme} from "@mui/material"
import {tokens} from "../contexts/theme"
import { mockPieData as data } from "../data/mockData"

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.black[100]
              }
            },
            legend: {
              text: {
                fill: colors.black[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.black[100],
                strokeWidth: 1
              }
            },
            text: {
              fill: colors.black[100]
            }
          },
          legends: {
            text: {
              fill: colors.black[100]
            }
          },
          ticks: {
            line: {
              stroke: colors.black[100],
              strokeWidth: 1
            },
            text: {
              fill: colors.black[100]
            }
          },
          legends: {
            text: {
              fill: colors.black[100]
            }
          },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.black[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
  )
}

export default PieChart
import {useTheme} from "@mui/material"
import { ResponsiveBar } from '@nivo/bar'
import {tokens} from "../contexts/theme"
import {mockBarData as data} from "../data/mockData"

const BarChart = ({isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        indexBy="country"
        theme={{
          axis: {
            domain: {
              line: {
                stroke : colors.black[100]
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
              },
              text: {
                fill: colors.black[100]
              }
            }
          },
          legends: {
            text: {
              fill: colors.black[100]
            }
          }
        }}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut',
        ]}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{ 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : 'country (indexBy)',
          legendPosition: "middle", 
          legendOffset: 32 
        }}
        axisLeft={{ 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : 'food', 
          legendPosition: "middle",
          legendOffset: -40 
        }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{type: 'linear'}}
        indexScale={{type: 'band', round: true}}
        colors={{scheme: 'nivo' || colors}}
    />
  )
}

export default BarChart
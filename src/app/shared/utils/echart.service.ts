import { Injectable } from '@angular/core'

type chartType = 'pie' | 'funnel'

@Injectable()
export class EchartService {
  private chartOptionGenerate = {
    pie: this.getPieOption,
    funnel: this.getFunnelOption
  }

  /**
   * 获取配置
   * @param param0
   */
  public getOption({
    type,
    data,
    option,
    update
  }: {
    type: chartType
    data: any[]
    option?: any
    update?: (c, d) => any
  }) {
    // 获取配置生成器
    const generate = this.chartOptionGenerate[type]

    if (!generate) {
      console.error('图表类型未设置')
      return option
    }

    const config = Object.assign(option || {}, generate(data))

    return update ? update(config, data) : config
  }

  /**
   * 生成饼图设置
   * @param data
   */
  private getPieOption(data) {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: data.map(x => x.name)
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          selectedMode: 'single',
          label: {
            normal: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
              smooth: false,
              length: 30
            }
          },
          data
        }
      ]
    }
  }

  private getFunnelOption(data) {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: data.map(x => x.name)
      },
      calculable: true,
      series: [
        {
          name: '漏斗图',
          type: 'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside'
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data
        }
      ]
    }
  }
}

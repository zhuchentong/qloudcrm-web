import { Injectable } from '@angular/core'

type chartType = 'pie'

@Injectable()
export class EchartService {
  private chartOptionGenerate = {
    pie: this.getPieOption
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
          label: {
            normal: {
              show: false,
              position: 'center'
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
              show: false
            }
          },
          data
        }
      ]
    }
  }
}

import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ComponentFactory
} from '@angular/core'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular'
import { TagCreateCustomerComponent } from '../../components/tag-create-customer/tag-create-customer.component'
import { TagCreateProductComponent } from '../../components/tag-create-product/tag-create-product.component'
import { TagCreateGroupComponent } from '../../components/tag-create-group/tag-create-group.component'

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.component.html',
  styleUrls: ['./tag-create.component.scss']
})
export class TagCreateComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef

  // 当前步骤
  public current = 0
  // 步骤列表
  public steps: any[] = []

  constructor(private resolver: ComponentFactoryResolver, private router: Router, private message: QlMessageService) {}

  ngOnInit() {
    this.createSteps()
    // this.store.dispatch(new ResetAddAlgoAction())
  }

  /**
   * 下一步
   */
  nextStep() {
    // 当前步骤组件
    const { component } = this.steps[this.current]
    // 当前步骤是否可以提交
    if (!component) {
      return
    }

    const result = component.instance.submit()

    if (result === false) {
      return false
    }

    // 当前步骤是否最后一步
    if (this.current >= this.steps.length - 1) {
      return
    }

    this.current += 1
    // 生成当前步骤
    this.generateCurrentStep()
  }

  /**
   * 上一步
   */
  previouStep() {
    this.current -= 1
    this.generateCurrentStep()
  }

  /**
   * 生成当前步骤组件
   */
  generateCurrentStep() {
    // 分离容器
    this.container.detach()
    // 获取当前步骤组件
    const currentStep = this.steps[this.current]
    // 如果已生成竹节插入视图
    // 否则重新创建组件
    if (currentStep.component) {
      this.container.insert(currentStep.component.hostView)
      // 调用初始化逻辑
      currentStep.component.instance.ngOnInit()
    } else {
      const component = this.container.createComponent(currentStep.factory)
      currentStep.component = component
    }
  }

  /**
   * 创建步骤
   */
  public createSteps() {
    const tagCreateCustomerFactory: ComponentFactory<
      TagCreateCustomerComponent
    > = this.resolver.resolveComponentFactory(TagCreateCustomerComponent)

    const tagCreateProductFactory: ComponentFactory<TagCreateProductComponent> = this.resolver.resolveComponentFactory(
      TagCreateProductComponent
    )
    const tagCreateGroupFactory: ComponentFactory<TagCreateGroupComponent> = this.resolver.resolveComponentFactory(
      TagCreateGroupComponent
    )

    this.steps = [
      {
        component: null,
        factory: tagCreateCustomerFactory
      },
      {
        component: null,
        factory: tagCreateProductFactory
      },
      {
        component: null,
        factory: tagCreateGroupFactory
      }
    ]

    this.generateCurrentStep()
  }

  /**
   * 提交请求
   */
  onSubmit() {
    // 确保最后一步提交
    if (this.nextStep() === false) {
      return
    }

    this.message.success('添加成功')
    this.router.navigate(['/customer/customer-tag'])
  }
}

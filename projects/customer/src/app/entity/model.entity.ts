import { Expose, Type } from 'class-transformer'
import { Entity } from '@app/entity'

export class ModelEntity extends Entity {
  @Expose()
  public id: number

  @Expose()
  public algoId: number

  @Expose()
  public algoType: string

  @Expose()
  public modelType: string

  @Expose()
  public modelUrl: string

  @Expose()
  public name: string

  @Expose()
  public status: string

  @Expose()
  public userId: string

  @Expose()
  public description: string

  @Expose()
  @Type(() => Date)
  public createDate: Date

  @Expose()
  @Type(() => Date)
  public updateDate: Date
}

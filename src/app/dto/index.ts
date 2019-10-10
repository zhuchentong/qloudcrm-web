import { plainToClass, classToPlain, serialize } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'
import { Entity } from '@app/entity'

export class DTO {
  public static from<T>(cls: ClassType<T>, obj, data = {}): T {
    if (obj instanceof Entity) {
      return plainToClass(cls, classToPlain(obj), { excludeExtraneousValues: true })
    }
    return Object.assign(new cls(), obj, data)
  }

  public static toPlain(data) {
    return classToPlain(data, { excludeExtraneousValues: true })
  }

  public static serialize(data) {
    return serialize(data, { excludeExtraneousValues: true })
  }
}

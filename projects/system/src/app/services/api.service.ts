import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import paramsTypeList from '../../assets/json/paramType.json'
import singleParamsTypeList from '../../assets/json/singleParamType.json'
import mupParamsTypeList from '../../assets/json/mupParamType.json'
import sysParamsTypeList from '../../assets/json/sysParamType.json'
import rolesTypeList from '../../assets/json/rolesTypeList.json'
import rolesList from '../../assets/json/rolesList.json'
import rolesAuth from '../../assets/json/rolesAuth.json'
import userAuth from '../../assets/json/userAuth.json'
import userList from '../../assets/json/userList.json'
import rolesLevelList from '../../assets/json/rolesLevelList.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public singleParamsTypeList(type?, parent?) {
    return of(
      singleParamsTypeList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }
  public mupParamsTypeList(type?, parent?) {
    return of(
      mupParamsTypeList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }
  public sysParamsTypeList(type?, parent?) {
    return of(
      sysParamsTypeList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }
  public getParamsTypeData(type?, parent?) {
    return of(
      paramsTypeList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }
  public getRolesTypeList() {
    return of(rolesTypeList);
  }
  public getRolesList() {
    return of(rolesList);
  }
  public getRolesAuth() {
    return of(rolesAuth);
  }
  public getUserAuth() {
    return of(rolesAuth);
  }
  public getUserList() {
    return of(userList);
  }
  public getUserRoleList() {
    return of(rolesLevelList);
  }
}

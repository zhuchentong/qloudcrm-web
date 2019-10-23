import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-config',
  templateUrl: './roles-config.component.html',
  styleUrls: ['./roles-config.component.scss']
})
export class RolesConfigComponent implements OnInit {
  roleType:any = [];
  roleManage: any;
  constructor() { }

  ngOnInit() {
  }
  getRoleType(val) {
    this.roleType = val;
  }
  getRoeManage(val) {
    this.roleManage = val;
  }
}

import {BasicViewDataPacket, BasicViewDataPacketList} from 'basic-view-data';
import {Menu} from './menu.domain';

export class SideMenu extends BasicViewDataPacket{
  Name: string;
  Children: Menu[];

  constructor(option: {
    Name?: string;
    Children?: Menu[];
  } = {}) {
    super();
    this.Name = option.Name || '';
    this.Children = option.Children?.map(item => new Menu(item)) || [];
  }
}

export class SideMenuList extends BasicViewDataPacketList<SideMenu> {

  constructor(options: {
    _Items?: SideMenu[]
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new SideMenu(item));
      }
    }
  }
}

export class SideMenuView extends BasicViewDataPacket{
  Id: string;
  SideMenu: SideMenu[];

  constructor(option: {
    Id?: string;
    SideMenu?: SideMenu[];
  } = {}) {
    super();
    this.Id = option.Id || '';
    this.SideMenu = option.SideMenu || [];
  }
}


export class SideMenuViewList extends BasicViewDataPacketList<SideMenuView> {

  constructor(options: {
    _Items?: SideMenuView[]
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new SideMenuView(item));
      }
    }
  }
}

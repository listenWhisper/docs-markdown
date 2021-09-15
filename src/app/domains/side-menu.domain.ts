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

import {BasicViewDataPacketList} from 'basic-view-data';
import {Menu} from './menu.domain';

export class HeaderMenu extends Menu{
  constructor(options: Partial<HeaderMenu> = {}) {
    super(options);
  }
}

export class HeaderMenuList extends BasicViewDataPacketList<HeaderMenu> {
  constructor(options: {
    _Items?: HeaderMenu[]
  } = {}) {
    super();
    if (options._Items) {
      for (const item of options._Items) {
        this.append(new HeaderMenu(item));
      }
    }
  }
}

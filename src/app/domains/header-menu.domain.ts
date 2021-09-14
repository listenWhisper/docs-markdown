import {BasicViewDataPacket, BasicViewDataPacketList, UtilTools} from 'basic-view-data';

export class HeaderMenu extends BasicViewDataPacket{
  readonly Id: string;
  Name: string;
  Mark: string;
  Router: string;
  constructor(options: Partial<HeaderMenu> = {}) {
    super();
    this.Id = UtilTools.uuid();
    this.Name = options.Name || '';
    this.Router = options.Router || '';
    this.Mark = options.Mark || '';
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

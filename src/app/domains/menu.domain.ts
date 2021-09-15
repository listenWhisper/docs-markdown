import {BasicViewDataPacket, UtilTools} from 'basic-view-data';

export class Menu extends BasicViewDataPacket{
  readonly Id: string;
  Name: string;
  Mark: string;
  Router: string;
  constructor(options: Partial<Menu> = {}) {
    super();
    this.Id = UtilTools.uuid();
    this.Name = options.Name || '';
    this.Router = options.Router || '';
    this.Mark = options.Mark || '';
  }
}

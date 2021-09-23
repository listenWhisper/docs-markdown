import {BasicViewDataPacket} from 'basic-view-data';

export class HeaderConfig extends BasicViewDataPacket{
  logo: string;
  title: string;
  headerMenu: string;
  gitHubUrl: string;
  constructor(options: Partial<HeaderConfig> = {}) {
    super();
    this.logo = options.logo || '';
    this.title = options.title || '';
    this.headerMenu = options.headerMenu || '';
    this.gitHubUrl = options.gitHubUrl || '';
  }
}

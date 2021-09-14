import {BasicViewDataPacket} from 'basic-view-data/domains/basic-view-data-packet.domain';

export class TestInfo extends BasicViewDataPacket{
  name: string;
  constructor(option: Partial<TestInfo> = {}) {
    super();
    this.name = option.name || '123';
  }
}

import { NetworkProxyBase } from '@lastos/page-spy-base';
import socketStore from '../../../helpers/socket';

export default class MPNetworkProxyBase extends NetworkProxyBase {
  constructor() {
    super(socketStore);
  }
}

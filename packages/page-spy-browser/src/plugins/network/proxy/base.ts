import { NetworkProxyBase } from '@lastos/page-spy-base';
import socketStore from '../../../helpers/socket';

export default class WebNetworkProxyBase extends NetworkProxyBase {
  constructor() {
    super(socketStore);
  }
}

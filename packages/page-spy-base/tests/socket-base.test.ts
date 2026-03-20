import {
  InitConfigBase,
  SocketState,
  SocketStoreBase,
  SocketWrapper,
} from 'page-spy-base/src';

class PlatformSocketWrapper extends SocketWrapper {
  init(): void {}

  send(): void {}

  close(): void {}

  getState(): SocketState {
    return SocketState.OPEN;
  }
}

class PlatformSocket extends SocketStoreBase {
  protected socketWrapper: SocketWrapper = new PlatformSocketWrapper();

  onOffline(): void {}
}

const createConfig = (): Required<InitConfigBase> => {
  return {
    api: 'example.com',
    project: 'demo-project',
    title: 'Room Title',
    unique: 'device-001',
    url: 'https://example.com/dashboard?tab=overview',
    env: 'test',
    version: '1.2.3',
    roomLogo: 'https://cdn.example.com/demo-logo.png',
    enableSSL: true,
    messageCapacity: 1000,
    useSecret: false,
    secret: '',
    offline: false,
    serializeData: false,
    disabledPlugins: [],
    dataProcessor: {},
  };
};

describe('SocketStoreBase.updateRoomInfo', () => {
  it('should include unique url and roomLogo in room tags', () => {
    const socket = new PlatformSocket();
    socket.getPageSpyConfig = () => createConfig();
    socket.getClient = () =>
      ({
        getName: () => 'mock-user-agent',
      }) as any;

    const sendSpy = jest.spyOn(socket as any, 'send');

    socket.updateRoomInfo();

    expect(sendSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'updateRoomInfo',
        content: {
          info: expect.objectContaining({
            name: 'mock-user-agent',
            group: 'demo-project',
            tags: expect.objectContaining({
              title: 'Room Title',
              unique: 'device-001',
              env: 'test',
              version: '1.2.3',
              url: 'https://example.com/dashboard?tab=overview',
              roomLogo: 'https://cdn.example.com/demo-logo.png',
            }),
          }),
        },
      }),
      true,
    );
  });
});

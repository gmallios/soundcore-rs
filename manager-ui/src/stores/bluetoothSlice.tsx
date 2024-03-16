import { StateCreator } from 'zustand';
import { BluetoothAdrr, DiscoveredDevice } from '../types/soundcore-lib';
import { useAsyncBridgeRequest } from '../hooks/useAsyncBridge';

export const createBluetoothSlice: StateCreator<BluetoothSlice> = (set, _get) => ({
  latestScan: null,
  isLoading: false,
  hasFailed: false,
  connectedDevices: [],
  setLatestScan: (scanRes: DiscoveredDevice[]) => set({ latestScan: scanRes, isLoading: false }),
  startScan: () => {
    useAsyncBridgeRequest({ command: 'scan' })
      .then(() => {
        set({ isLoading: true });
      })
      .catch((error) => {
        console.error(`Could not start scan. ${error}`);
        set({ hasFailed: true });
      });
  },
  connectDevice: (device: DiscoveredDevice) => {
    useAsyncBridgeRequest({ command: 'connect', payload: device })
      .then(() => {
        set({ connectedDevices: [..._get().connectedDevices, device.descriptor.addr] });
      })
      .catch((error) => {
        console.error(`Could not connect to device. ${error}`);
      });
  }
});

export interface BluetoothSlice {
  latestScan: DiscoveredDevice[] | null;
  isLoading: boolean;
  hasFailed: boolean;
  connectedDevices: Array<BluetoothAdrr>;
  setLatestScan: (scanRes: DiscoveredDevice[]) => void;
  startScan: () => void;
  connectDevice: (device: DiscoveredDevice) => void;
}
use btleplug::{api::BDAddr, platform::PeripheralId};

use crate::btaddr::BluetoothAdrr;

impl From<BDAddr> for BluetoothAdrr {
    fn from(value: BDAddr) -> Self {
        BluetoothAdrr {
            address: value.into_inner(),
        }
    }
}

impl From<BluetoothAdrr> for BDAddr {
    fn from(value: BluetoothAdrr) -> Self {
        value.address.into()
    }
}

impl From<BluetoothAdrr> for PeripheralId {
    fn from(val: BluetoothAdrr) -> Self {
        let bdaddr: BDAddr = val.into();
        bdaddr.into()
    }
}
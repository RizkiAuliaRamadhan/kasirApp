import { Center, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBarang, IconKasir, IconRiwayat, IconUser } from '../../assets/icon'


export default function BoxHome({name, navigation}) {

  const Icon = () => {
    if (name === "Transaksi") {
      return <IconKasir width="75" height="75" />
    }
    if (name === "Barang") {
      return <IconBarang width="75" height="75" />
    }
    if (name === "Riwayat") {
      return <IconRiwayat width="75" height="75" />
    }
    if (name === "Admin") {
      return <IconUser width="75" height="75" />
    }
  }

    return (
        <TouchableOpacity onPress={() => navigation.navigate(name) }>
            <Center size="32" bg="#fff" borderRadius="xl" m="2">
              <Icon />
              <Text>{name.toUpperCase()}</Text>
            </Center>
          </TouchableOpacity>
    )
}

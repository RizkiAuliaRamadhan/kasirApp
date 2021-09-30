import { Box, Center, Container, Flex } from "native-base";
import React from "react";
import {
  StatusBar,
  StyleSheet,
} from "react-native";
import { BoxHome } from "../../componets";

const Home = ({navigation}) => {
  return (
    <Center bg="violet.500" flex={1}>
      <StatusBar backgroundColor="#8b5cf6" />
      <Container>
        <Flex
          direction="row"
          wrap="wrap"
          justify="center"
          align="center"
          mb="2.5"
          mt="1.5"
          _text={{
            color: "coolGray.800",
          }}
        >
          <BoxHome name="Transaksi" navigation={navigation} />
          <BoxHome name="Barang" navigation={navigation} />
          <BoxHome name="Riwayat" navigation={navigation} />
          <BoxHome name="Admin" navigation={navigation} />
        </Flex>
      </Container>
    </Center>
  );
};

export default Home;

const styles = StyleSheet.create({});

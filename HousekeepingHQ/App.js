import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import HamburgerNav from "./components/HamburgerNav";

export default function App() {
  return (
    <NativeBaseProvider>
      <HamburgerNav/>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
export const FirstElem = () => {
  return (
    <Flex
      height={"700px"}
      backgroundPosition={"center"}
      flexDirection={"column"}
      width="100%"
      backgroundImage={
        "https://www.aesop.com/u1nb1km7t5q7/3MBwyQNwPZDKq8hxzzLh1Q/7905dac84e46772f112be054e7e97404/Aesop_B_Triple_C_2024_Web_Homepage_Primary_1_Full_Bleed_Desktop_2880x1044px.jpg"
      }
      backgroundSize="cover"
    >
      <Flex alignContent={"center"} width={"50%"} mt={30}>
        <Box width={"fit-content"} m="auto">
          <Text fontSize={{ base: 20, md: 40, lg: 50 }} color={"white"}>
            Aesop
          </Text>
        </Box>
        <Flex
          m="auto"
          display={{ base: "none", md: "flex", lg: "flex" }}
          gap={4}
          height={"fit-content"}
          flexDirection={"column"}
          width={"40%"}
        >
          <Text
            fontSize={{ md: 13, lg: 17 }}
            color={"white"}
            textAlign={"justify"}
          >
            Potent and peerless
          </Text>
          <Text
            fontSize={{ md: 13, lg: 32 }}
            color={"white"}
            textAlign={"justify"}
          >
            B Triple C Facial Balancing Gel{" "}
          </Text>
          <Text
            fontSize={{ md: 15, lg: 19 }}
            color={"white"}
            textAlign={"justify"}
          >
            Rich in Vitamins B and C, this lightly hydrating gel with a honey-like texture, replenishes, softens and balances the skin. 
          </Text>
          <Button
            width={"fit-content"}
            p={3}
            borderRadius={"none"}
            border="1px solid white"
            color="white"
            background="none"
            _hover={{
              background: "white",
              color: "black",
              transition: "background 0.3s ease-in-out",
            }}
          >
            Discover Formulation{" "}
            <span style={{ marginLeft: "40px" }}>
              {" "}
              <FiArrowRight />
            </span>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

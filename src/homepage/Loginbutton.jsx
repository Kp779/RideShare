import React, { useRef, useState } from "react";

import { Button } from "@chakra-ui/react";
import {
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
function ErrorMessageExample() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel style={{ fontSize: "1.5rem", margin: "1rem" }} color={"black"}>
        Email
      </FormLabel>
      <Input
        placeholder="Email"
        color={"black"}
        type="email"
        value={input}
        onChange={handleInputChange}
        style={{ fontSize: "1.3rem", padding: "1.5rem" }}
      />
      {!isError ? (
        <FormHelperText>
          {/* Enter the email you'd like to receive the newsletter on. */}
        </FormHelperText>
      ) : (
        <FormErrorMessage style={{ fontSize: "1.3rem" }}>
          Email is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        color={"black"}
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        style={{ fontSize: "1.3rem", padding: "1.5rem" }}
      />
      <InputRightElement width="4.5rem" paddingTop={"0.5rem"}>
        <Button margin={"0.5rem"} h="1.75rem" size="lg" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function FocusTrapPopover() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        style={{ fontSize: "1.3rem", padding: "1.7rem" }}  colorScheme="blue" onClick={onOpen}>Login
     </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent style={{ padding: "1.7rem" }}>
          <ModalHeader style={{ fontSize: "2rem" }}>Login Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            <FormControl isRequired>
              <ErrorMessageExample />
              <FormLabel
                style={{ color: "black", margin: "1rem", fontSize: "1.5rem" }}
              >
                Password
              </FormLabel>
              <PasswordInput />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Stack>
              <Button
                style={{ fontSize: "1.5rem", padding: "1.7rem" }}
                margin={"2rem"}
                colorScheme="blue"
              >
                Login
              </Button>
            </Stack>
            <Button
              style={{ fontSize: "1.5rem", padding: "1.7rem" }} variant='outline'
              colorScheme="blue"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FocusTrapPopover;

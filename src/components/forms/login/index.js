import React, { useState } from "react";
import { useAtom } from "jotai";
import { user } from "../../../states";
import {
  Text,
  Input,
  Button,
  Modal,
  Row,
  Checkbox,
} from "@nextui-org/react";
import { Mail, Password } from "../../icons";
import { loginVisibleAtom, accountReducerAtom } from "../../../states";


export const FormLogin = ({ handleSubmit }) => {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const [userState, setUser] = useAtom(user);
  const [loginVisible, setLoginVisible] = useAtom(loginVisibleAtom);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setLoginVisible(false);
    console.log("closed");
  };
  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(userState);
  };
  return (
    <Modal
      preventClose={true}
      blur
      open={!account.loggedIn}
    aria-labelledby="modal-title"
      onClose={closeHandler}>
      <form onSubmit={submitForm}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Event Manager{" "}
          <Text b size={18}>
            App
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Username"
          initialValue={userState.username}
          contentLeft={<Mail fill="currentColor" />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          initialValue={userState.password}
          contentLeft={<Password fill="currentColor" />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto type={"submit"}>
          Sign in
        </Button>
      </Modal.Footer>
    </form> 
    </Modal>
  );
};

import React, { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { userAtom } from "../../../states";
import {
  Text,
  Input,
  Button,
  Modal,
  Row,
  Checkbox,
} from "@nextui-org/react";
import { Mail, Password } from "../../icons";
import {
  loginVisibleAtom,
  accountReducerAtom,
  loginErrorAtom
} from "../../../states";

export const FormLogin = ({ handleSubmit }) => {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const [user, setUser] = useAtom(userAtom);
  const [loginVisible, setLoginVisible] = useAtom(
    loginVisibleAtom
  );
  const error = useAtomValue(loginErrorAtom);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setLoginVisible(false);
    console.log("closed");
  };

  const updateEvent = e => {
    const { name, value } = e.target;
    setUser(event => {
      const updatedEvent = event;
      updatedEvent[name] = value;
      return { ...event, ...updatedEvent };
    });
  };

  const submitForm = e => {
    e.preventDefault();
    handleSubmit(user);
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
            name="username"
            onChange={updateEvent}
            initialValue={user.username}
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            name="password"
            onChange={updateEvent}
            initialValue={user.password}
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          <Row justify="space-between">
            {error && (
              <Text color="error">
                Almost before we knew it, we had left the ground.
              </Text>
            )}
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

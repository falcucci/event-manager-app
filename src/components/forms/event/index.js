import React from "react";
import { useAtom } from "jotai";
import {
  Modal,
  Input,
  Row,
  Grid,
  Checkbox,
  Button,
  Text,
} from "@nextui-org/react";
import { registerEventVisibleAtom } from "../../../states";

export const FormRegisterEvent = ({ handleSubmit }) => {
  const [eventRegisterModal, setEventRegisterModal] = useAtom(
    registerEventVisibleAtom
  );

  const closeHandler = () => {
    setEventRegisterModal(false);
  };

  return (
    <Modal
      width="40rem"
      blur
      open={eventRegisterModal}
      aria-labelledby="modal-title"
      onClose={closeHandler}>
      <form onSubmit={""}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Register an {""}
            <Text b size={18}>
              Event
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Name"
                initialValue={"Rust Meetup"}
              />
            </Grid>
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Description"
                initialValue={
                  "This Rust Meetup is an event for developers interested in learning more about the Rust programming language. Attendees will have the opportunity to network with other Rust developers, learn from experienced Rust developers, and discuss the latest developments in the Rust community. There will also be presentations and workshops on topics such as Rust fundamentals, best practices, and advanced Rust topics. All skill levels are welcome, so come join us and learn more about Rust!"
                }
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Status"
                initialValue={"active"}
              />
            </Grid>
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Location"
                initialValue={"Milan"}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="date"
                label="Start Date"
                placeholder="Start Date"
                initialValue={""}
              />
            </Grid>
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                type="date"
                label="End Date"
                placeholder="End Date"
                initialValue={""}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Username"
                initialValue={""}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Checkbox isRounded defaultSelected color="primary">
                Public Event
              </Checkbox>
            </Grid>
          </Grid.Container>
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

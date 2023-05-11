import React from "react";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import {
  Modal,
  Input,
  Row,
  Grid,
  Checkbox,
  Button,
  Text,
} from "@nextui-org/react";
import {
  registerEventVisibleAtom,
  eventAtom,
} from "../../../states";

export const FormRegisterEvent = ({ handleSubmit }) => {
  const [eventRegisterModal, setEventRegisterModal] = useAtom(
    registerEventVisibleAtom
  );

  const [event, setEvent] = useAtom(eventAtom);

  const closeHandler = () => {
    setEventRegisterModal(false);
  };

  const updateEvent = e => {
    const { name, value } = e.target;
    setEvent(event => {
      const updatedEvent = event;
      updatedEvent[name] = value;
      return { ...event, ...updatedEvent };
    });
  };

  const submitForm = async e => {
    e.preventDefault();
    handleSubmit(event);
  };

  return (
    <Modal
      width="40rem"
      blur
      open={eventRegisterModal}
      aria-labelledby="modal-title"
      onClose={closeHandler}>
      <form onSubmit={submitForm}>
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
                name="name"
                onChange={updateEvent}
                initialValue={event.name}
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
                name="status"
                placeholder="Status"
                onChange={updateEvent}
                initialValue={event.status}
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
                name="location"
                onChange={updateEvent}
                initialValue={event.location}
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
                name="start_date"
                placeholder="Start Date"
                onChange={updateEvent}
                initialValue={event.start_date}
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
                name="end_date"
                onChange={updateEvent}
                initialValue={event.end_date}
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
                placeholder="Description"
                name="description"
                onChange={updateEvent}
                initialValue={event.description}
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid xs>
              <Checkbox
                name="is_public"
                isRounded
                // isSelected={event.is_public}
                onChange={(e) => {
                  return updateEvent({
                    target: {
                      name: "is_public",
                      value: e,
                    },
                  })
                }}
                color="primary">
                this event is public
              </Checkbox>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cancel
          </Button>
          <Button auto type={"submit"}>
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

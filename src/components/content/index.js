import {
  Text,
  Input,
  Button,
  Modal,
  Loading,
  Row,
  Checkbox,
  Spacer,
  Grid,
} from "@nextui-org/react";
import { Mail, Password } from "../../components/icons";
import { useState } from "react";

export const Content = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Grid.Container
      justify="center"
      css={{ alignContent: "center", alignItems: "center" }}>
      <Grid css={{ width: "60%" }}>
        <Button auto color="warning" shadow onPress={handler}>
          Open modal
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Event Manager {" "}
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
              placeholder="Email"
              contentLeft={<Mail fill="currentColor" />}
            />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Password"
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
            <Button auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    </Grid.Container>
  );
};

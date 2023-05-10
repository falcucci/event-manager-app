import { Navbar, Text, Dropdown, Avatar } from "@nextui-org/react";
import { Layout } from "../components/layout";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <Layout>
      <Navbar variant="sticky" css={{ zIndex: 9999 }} >
        <Navbar.Brand css={{ mr: "$100" }}>
          <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
            EVENT MANAGER
          </Text>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Navbar.Link
              target={"_blank"}
              href="https://github.com/falcucci/event-manager-app"
              isActive
              activeColor="success">
              Github
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          hideIn="xs"
          variant="normal"
          enableCursorHighlight
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={actionKey => console.log({ actionKey })}>
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">
                Team Settings
              </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">
                Configurations
              </Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item
                key="logout"
                withDivider
                color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}

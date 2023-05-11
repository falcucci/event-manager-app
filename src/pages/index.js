import { Navbar, Text, Dropdown, Avatar } from "@nextui-org/react";
import dayjs from "dayjs";
import { Layout } from "../components/layout";
import { Image } from "@nextui-org/react";
import { useAtom } from "jotai";
import {
  accountReducerAtom,
  eventsAtom,
  accessAtom,
  refreshAtom,
} from "../states";
import { api, promiseHandler } from "../utils";
import { Link } from "@nextui-org/react";

export default function App() {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const [events, setEvents] = useAtom(eventsAtom);
  const [access, setAccess] = useAtom(accessAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);

  const handleDropdownAction = e => {
    const actions = {
      all: async () => {
        const params = {
          path: "events",
          method: "GET",
          access: access,
          refresh: refresh,
        };
        const [fetchError, fetchData] = await promiseHandler(
          api(params)
        );
        console.log("fetchData: ", fetchData);
        const [error, data] = await promiseHandler(
          fetchData.json()
        );
        if (error) console.log(error);
        console.log("data: ", data);
        setEvents(data);
      },
      mines: async () => {
        const params = {
          path: "events/mine",
          method: "GET",
          access: access,
          refresh: refresh,
        };
        const [fetchError, fetchData] = await promiseHandler(
          api(params)
        );
        console.log("fetchData: ", fetchData);
        const [error, data] = await promiseHandler(
          fetchData.json()
        );
        if (error) console.log(error);
        console.log("data: ", data);
        setEvents(data);
      },
      subscribed: async () => {
        const params = {
          path: "events/subscribed",
          method: "GET",
          access: access,
          refresh: refresh,
        };
        const [fetchError, fetchData] = await promiseHandler(
          api(params)
        );
        if (fetchError) console.log(fetchError);
        console.log("fetchData: ", fetchData);
        const [error, data] = await promiseHandler(
          fetchData.json()
        );
        if (error) console.log(error);
        console.log("data: ", data);
        setEvents(data);
      },
      next_events: async () => {
        const now = dayjs().format("YYYY-MM-DD");
        const params = {
          path: `events?start_date__gte=${now}`,
          method: "GET",
          access: access,
          refresh: refresh,
        };
        const [fetchError, fetchData] = await promiseHandler(
          api(params)
        );
        if (fetchError) console.log(fetchError);
        console.log("fetchData: ", fetchData);
        const [error, data] = await promiseHandler(
          fetchData.json()
        );
        if (error) console.log(error);
        console.log("data: ", data);
        setEvents(data);
      },
      past_events: async () => {
        const now = dayjs().format("YYYY-MM-DD");
        const params = {
          path: `events?end_date__lte=${now}`,
          method: "GET",
          access: access,
          refresh: refresh,
        };
        const [fetchError, fetchData] = await promiseHandler(
          api(params)
        );
        if (fetchError) console.log(fetchError);
        console.log("fetchData: ", fetchData);
        const [error, data] = await promiseHandler(
          fetchData.json()
        );
        if (error) console.log(error);
        console.log("data: ", data);
        setEvents(data);
      }
    };
    const action = actions[e];
    action && action();
  };

  return (
    <Layout>
      <Navbar variant="sticky" css={{ zIndex: 9999 }}>
        <Navbar.Brand css={{ mr: "$100" }}>
          <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
            EVENT MANAGER
          </Text>
          <Navbar.Content hideIn="xs" variant="highlight">
            <Navbar.Link
              target={"_blank"}
              href="https://github.com/falcucci/event-manager-app"
              activeColor="success">
              Github
            </Navbar.Link>
            <Navbar.Link
              target={"_blank"}
              href="https://github.com/falcucci/event-manager-app"
              isActive
              activeColor="success">
              API Docs
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
          {account && account.loggedIn && (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="success"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="success"
                onAction={handleDropdownAction}>
                <Dropdown.Item
                  key="profile"
                  css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    {account.email}
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="all" withDivider>
                  All Events
                </Dropdown.Item>
                <Dropdown.Item key="mines" withDivider>
                  Mines
                </Dropdown.Item>
                <Dropdown.Item key="subscribed" withDivider>
                  Subscribed Events
                </Dropdown.Item>
                <Dropdown.Item key="next_events" withDivider>
                  Next Events
                </Dropdown.Item>
                <Dropdown.Item key="past_events" withDivider>
                  Past Events
                </Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  API Docs
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
          )}
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}

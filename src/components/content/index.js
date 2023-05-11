import { Grid } from "@nextui-org/react";
import { useAtom } from "jotai";
import { Events } from "../../components/events";
import { FormLogin } from "../../components/forms/login";
import {
  FormRegisterEvent
} from "../../components/forms/event";
import { promiseHandler, api } from "../../utils";
import { accountReducerAtom, registerEventVisibleAtom, eventsAtom } from "../../states";
import { actions, accessAtom, refreshAtom, loginVisibleAtom } from "../../states";
import { useEffect } from "react";

export const Content = () => {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const [events, setEvents] = useAtom(eventsAtom);
  const [loginVisible, setLoginVisible] = useAtom(loginVisibleAtom);
  const [eventRegisterModal, setEventRegisterModal] = useAtom(
    registerEventVisibleAtom
  );
  const [access, setAccess] = useAtom(accessAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);

  useEffect(() => {
    console.log('account.loggedIn: ', account.loggedIn);
    if (account.loggedIn) {
      setLoginVisible(false);
    }

  }, [account.loggedIn]);

  const submitForm = async user => {
    try {
      dispatch({ type: actions.LOGGING_IN });
      const { username, password } = user;
      console.log('user: ', user);
      const [fetchError, fetchData] = await promiseHandler(
       fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
      );
      if (fetchError) console.log(fetchError);
      const [error, data] = await promiseHandler(fetchData.json());
      if (error) console.log(error);
      dispatch({
        type: actions.LOGGED_IN,
        value: data,
      }); 
      setAccess(data.access);
      setRefresh(data.refresh);
      console.log('account: ', account);
    } catch (error) {
      console.log(error);
    }
  };

  const submitEventForm = async event => {
    console.log('event: ', event);
    const params = {
      path: "events/",
      method: "POST",
      access: access,
      refresh: refresh,
      body: event,
    };

    const [fetchError, fetchData] = await promiseHandler(api(params))
    if (fetchError) console.log(fetchError);
    const [error, data] = await promiseHandler(fetchData.json());
    if (error) console.log(error);
    console.log('data: ', data);
    setEventRegisterModal(false);
    events.push(data)
    setEvents(events);
  }


  return (
    <Grid.Container
      justify="center"
      css={{ alignContent: "center", alignItems: "center" }}>
      <Grid css={{ width: "100%" }}>
        <FormLogin handleSubmit={submitForm} loading={true} />
        <FormRegisterEvent handleSubmit={submitEventForm} />
        { account.loggedIn && <Events />}
      </Grid>
    </Grid.Container>
  );
};

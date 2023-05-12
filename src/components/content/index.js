import _ from "lodash";
import { Grid } from "@nextui-org/react";
import { useAtom, useSetAtom } from "jotai";
import { Events } from "../../components/events";
import { FormLogin } from "../../components/forms/login";
import {
  FormRegisterEvent
} from "../../components/forms/event";
import { promiseHandler, api } from "../../utils";
import {
  accountReducerAtom,
  registerEventVisibleAtom,
  loginErrorAtom,
  eventDefault,
  eventsAtom,
  eventAtom,
} from "../../states";
import { actions, accessAtom, refreshAtom, loginVisibleAtom } from "../../states";
import { useEffect } from "react";

const { log } = console;

export const Content = () => {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const [events, setEvents] = useAtom(eventsAtom);
  const setEvent = useSetAtom(eventAtom);
  const [loginVisible, setLoginVisible] = useAtom(loginVisibleAtom);
  const [eventRegisterModal, setEventRegisterModal] = useAtom(
    registerEventVisibleAtom
  );
  const [access, setAccess] = useAtom(accessAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);

  const setLoginError = useSetAtom(loginErrorAtom);

  useEffect(() => {
    log('account.loggedIn: ', account.loggedIn);
    if (account.loggedIn) {
      setLoginVisible(false);
    }

  }, [account.loggedIn]);

  
  const submitForm = async user => {
    try {
      dispatch({ type: actions.LOGGING_IN });
      const { username, password } = user;
      log('user: ', user);
      const params = {
        path: "auth/login",
        method: "POST",
        body: { username, password },
      };
      const [fetchError, fetchData] = await promiseHandler(api(params));
      if (fetchError || _.get(fetchData, 'status') >= 400) {
        log(fetchError); 
        setLoginError(
          'Almost before we knew it, we had left the ground.'
        )
        return;
      } 
      const [error, data] = await promiseHandler(fetchData.json());
      if (error) {
        log(error); 
        return
      }
      dispatch({
        type: actions.LOGGED_IN,
        value: data,
      }); 
      setAccess(data.access);
      setRefresh(data.refresh);
      
      log('account: ', account);
    } catch (error) {
      
      log(error);
      return
    }
  };

  const submitEventForm = async event => {
    const path = event.id ? `events/${event.id}/` : "events/";
    const method = event.id ? "PUT" : "POST";
    _.unset(event, "id");
    log('event: ', event);
    const params = {
      path,
      method,
      body: event,
      access: access,
      refresh: refresh,
    };

    const [fetchError, fetchData] = await promiseHandler(api(params))
    if (fetchError) 
      log(fetchError);
    const [error, data] = await promiseHandler(fetchData.json());
    if (error) 
      log(error);
    log('data: ', data);
    setEventRegisterModal(false);
    const [
      fetchEventsError,
      fetchEventsData,
    ] = await promiseHandler(
      api({
        path: "events",
        method: "GET",
        access: access,
        refresh: refresh,
      })
    );
    if (fetchEventsError) console.log(fetchEventsError);
    console.log("fetchEventsData: ", fetchEventsData);
    const [eventsError, eventsData] = await promiseHandler(
      fetchEventsData.json()
    );
    if (eventsError) console.log(eventsError);
    console.log("eventsData: ", eventsData);
    setEvents(eventsData);
    setEvent(eventDefault)
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

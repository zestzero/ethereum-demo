import { EventFilter } from "@ethersproject/contracts";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Configurations } from "../../configurations";
import { GetLogs } from "../../services/Ethers";

const config = Configurations.getInstance();
const TransactionLogs: FunctionComponent = () => {
  const [events, setEvents] = useState<EventFilter>();
  const getLogs = async () => {
    setEvents(await GetLogs(config.getToken(), config.getWalletAddress()));
  };

  useEffect(() => {
    getLogs();
  }, []);

  return events ? (
    <React.Fragment>
      <h1>List all token transfers *from* myAddress</h1>
      <h2>Address: {events?.address}</h2>
      <h2>Topics</h2>
      {events?.topics?.map((token, index) => (
        <div key={`topics-${index}`}>{token}</div>
      ))}
    </React.Fragment>
  ) : null;
};

export default TransactionLogs;

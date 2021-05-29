import { Contract, ethers, EventFilter } from "ethers";

export const GetProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const GetLogs = async (token: string, myAddress: string): Promise<EventFilter> => {
  const abi = [
    "event Transfer(address indexed src, address indexed dst, uint val)",
  ];
  const provider = GetProvider();
  const contract = new Contract(token, abi, provider);

  return contract.filters.Transfer(myAddress)
};

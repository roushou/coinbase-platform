import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, test } from "vitest";
import { createRpcClient } from "../rpc";
import { getBalances } from "./get-balances";

describe("get-balances", () => {
  test("should get balances", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      network: "base",
      apiKey: "API_KEY",
    });
    await getBalances(rpcClient, [
      {
        address: "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789",
        pageSize: 1,
      },
    ]);
  });
});

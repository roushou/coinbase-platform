import { RPC_URL } from "@coinbasejs/utils/constants";
import { describe, test } from "vitest";
import { createRpcClient } from "../rpc";
import { listBalanceHistories } from "./list-balance-histories";

describe("list-balance-histories", () => {
  test("should list balance histories", async () => {
    const rpcClient = createRpcClient({
      url: RPC_URL,
      apiKey: "API_KEY",
    });
    await listBalanceHistories(rpcClient, [
      {
        address: "0x0e73fc61bb9d6b7588910c2d14e83bae68222c5d",
        assetId: "123d82ca-b3f4-527c-ace7-559d5791a564",
        pageSize: 1,
      },
    ]);
  });
});

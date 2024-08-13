import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

export default function Home() {
  const { user } = useAuth();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const getUser = useUser();

  useEffect(() => {
    async function fetchUserData() {
      await getUser();

      if (user?.wallet_address) {
        await fetchWalletBalance(user.wallet_address);
      }
    }

    fetchUserData();
  }, [user]);

  async function fetchWalletBalance(address) {
    try {
      const provider = new ethers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/8fdc5ffc3d734828a6d6b355c4099a56"
      );

      const balanceInWei = await provider.getBalance(address);

      const balanceInEth = ethers.formatEther(balanceInWei);

      setBalance(balanceInEth);
    } catch (error) {
      console.error("Error getting balance", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mt-3">
      <h2>
        <div className="row">
          <div className="mb-12">
            {user?.email !== undefined ? (
              <>
                <h4>Ethereum Wallet Address: {user?.wallet_address}</h4>
                <h4>
                  Balance: {balance !== null ? `${balance} ETH` : "Loading..."}
                </h4>
              </>
            ) : (
              "Please login first"
            )}
          </div>
        </div>
      </h2>
    </div>
  );
}

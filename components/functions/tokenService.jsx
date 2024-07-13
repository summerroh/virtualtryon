import { serialize, parse } from "cookie";

const baseURL =
  "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

export const getIdToken = () => {
  if (typeof document !== "undefined") {
    const cookies = parse(document.cookie);
    return cookies.idToken;
  }
  return null;
};

export const setIdToken = (token) => {
  document.cookie = serialize("idToken", token, {
    path: "/",
    httpOnly: false,
    // maxAge: 3600, // 1 hour
    // maxAge: 10, // 10 seconds (for testing)
    maxAge: 20 * 24 * 60 * 60, // 20 days (for testing)
    sameSite: "strict",
  });
};

export const getRefreshToken = () => {
  if (typeof document !== "undefined") {
    const cookies = parse(document.cookie);
    return cookies.refreshToken;
  }
  return null;
};

export const setRefreshToken = (token) => {
  document.cookie = serialize("refreshToken", token, {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    sameSite: "strict",
  });
};

export const refreshIdToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    console.error("No refresh token available");
    return null;
  }

  try {
    const response = await fetch(`${baseURL}/api/v1/users/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    if (data.data.idToken) {
      setIdToken(data.data.idToken);
      return data.data.idToken;
    } else {
      throw new Error("No idToken in refresh response");
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

export const clearTokens = () => {
  document.cookie = serialize("idToken", "", {
    path: "/",
    maxAge: -1,
  });
  document.cookie = serialize("refreshToken", "", {
    path: "/",
    maxAge: -1,
  });
};

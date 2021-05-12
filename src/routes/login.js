import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  try {
    const { email, password } = req.body;

    const result = await fetch(process.env.SAPPER_APP_LOGIN_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password }),
    });

    const parsed = await result.json();

    if (typeof parsed.error !== "undefined") {
      throw new Error(parsed.error);
    }

    req.session.token = parsed.token;
    res.end(JSON.stringify({ token: parsed.token }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}

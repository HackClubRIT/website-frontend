/*
 * Make requests to some backend
 * Based on https://github.com/sveltejs/realworld/blob/master/src/node_modules/api.js
 */
async function send({ method, path, data, session, base }) {
  const fetch =
    typeof window !== "undefined"
      ? window.fetch
      : await import("node-fetch").then((mod) => mod.default);
  const opts = { method, headers: {} };

  if (data) {
    if (!data.type) {
      opts.headers["Content-Type"] = "application/json";
      opts.body = JSON.stringify(data);
    } else if (data.type === "formData") {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      opts.body = formData;
    }
  }

  if (session) {
    // Set the JWT_AUD header
    if (session.aud) {
      opts.headers["JWT_AUD"] = session.aud;
    }

    // Set the Authorization header
    if (session.TOKEN) {
      if (session.TOKEN.includes("Bearer")) {
        opts.headers["Authorization"] = session.TOKEN;
      } else {
        opts.headers["Authorization"] = `Bearer ${session.TOKEN}`;
      }
    }
  }

  let fullPath = encodeURI(`${base}/${path}`);
  if (process.env.SAPPER_APP_DEBUG_MODE) {
    console.log(method, fullPath);
    console.log(opts);
  }
  const response = await fetch(fullPath, opts);
  const json = await response.json();
  if (process.env.SAPPER_APP_DEBUG_MODE) {
    console.log("DEBUG:", json);
  }
  return { response, json };
}

/*
 * Shortcut methods for send
 */
export function get(base, path, session) {
  return send({ method: "GET", path, session, base });
}

export function del(base, path, data, session) {
  return send({ method: "DELETE", path, data, session, base });
}

export function post(base, path, data, session) {
  return send({ method: "POST", path, data, session, base });
}

export function put(base, path, data, session) {
  return send({ method: "PUT", path, data, session, base });
}

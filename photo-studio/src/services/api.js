const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }
  return { data };
}

export const api = {
  get: (path, token) =>
    request(path, {
      method: "GET",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  post: (path, payload, token) =>
    request(path, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
  patch: (path, payload, token) =>
    request(path, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
};

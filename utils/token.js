import Cookie from 'js-cookie';

export async function refresh(axios, res, cookies) {
  const { refreshToken } = JSON.parse(cookies.token);
  const { token } = await axios.$post('/api/auth/refresh', { refresh_token: refreshToken });
  res.setHeader('Set-Cookie', [
    `token=${JSON.stringify({ token, refreshToken })}; Path=/; Expires=${new Date().getTime() + 315360000}`
  ]);
  axios.setToken(token, 'Bearer');
}

export function set(axios, { token, type, refreshToken }, res) {
  axios.setToken(token, 'Bearer');
  if (res) {
    res.setHeader('Set-Cookie', [
      `token=${JSON.stringify({ token, refreshToken })}; Path=/; Expires=${new Date().getTime() + 315360000}`
    ]);
  }
  else Cookie.set('token', { type, token, refreshToken }, { expires: 365, path: '/' });
}

export function touch(axios) {
  const cookie = Cookie.getJSON('token');
  if (cookie) axios.setToken(cookie.token, 'Bearer');
}

export function remove(res) {
  if (res) res.setHeader('Set-Cookie', ['token=; Path=/;']);
  else Cookie.remove('token');
}

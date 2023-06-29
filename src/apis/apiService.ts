import { API_URLS } from '@/apis/apiUrls'

export async function loginUser(login: string, password: string) {
  const response = await fetch(API_URLS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login,
      password
    }),
    credentials: 'include'
  })

  return response
}

export const apiService = {
  async postCase(formData: FormData, token: string): Promise<Response> {
    return fetch(API_URLS.CASE, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })
  },
}

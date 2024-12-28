import { ContactFormData } from '../types/contact';

const WEB3FORMS_ACCESS_KEY = '26f9c8c0-5c4a-4f6b-9c1d-5c9c9c9c9c9c';
const RECIPIENT_EMAIL = 'ant@qflow.io';

export async function submitContactForm(formData: ContactFormData): Promise<Response> {
  return fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to: RECIPIENT_EMAIL
    })
  });
}
export async function fetchWelcome(): Promise<string> {

  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/onboarding`,
    { method: 'GET' });
  
// Back-end pipes a stream, but we can still collect to one string
  const reader = res.body!.getReader();
  const utf8 = new TextDecoder();
  let text = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    text += utf8.decode(value);
  }
  return text.trim();
}

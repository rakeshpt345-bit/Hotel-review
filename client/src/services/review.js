import api from './api';
export async function recordScan() { const { data } = await api.post('/scan'); return data; }
export async function submitFeedback(payload) { const { data } = await api.post('/feedback', payload); return data; }

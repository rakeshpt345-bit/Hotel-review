import api from './api';
export async function getStats() { const { data } = await api.get('/admin/stats'); return data; }
export async function getQr() { const { data } = await api.get('/admin/qr'); return data; }
export async function getFeedback() { const { data } = await api.get('/admin/feedback'); return data.feedback; }

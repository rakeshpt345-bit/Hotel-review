import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import QR from './pages/admin/QR';
import Review from './pages/Review';
import ThankYou from './pages/ThankYou';
export default function App(){return <Routes><Route path="/" element={<Navigate to="/review" replace/>}/><Route path="/review" element={<Review/>}/><Route path="/thank-you" element={<ThankYou/>}/><Route path="/admin/login" element={<AuthProvider><Login/></AuthProvider>}/><Route path="/admin" element={<AuthProvider><AdminLayout/></AuthProvider>}><Route index element={<Dashboard/>}/><Route path="qr" element={<QR/>}/></Route><Route path="*" element={<Navigate to="/review" replace/>}/></Routes>}

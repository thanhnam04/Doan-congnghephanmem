import React, { useState } from 'react';

export default function Frontend() {
  const [role, setRole] = useState('');

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4a90e2, #b490f8)',
        fontFamily: 'Nunito, sans-serif',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          padding: '3rem 4rem',
          textAlign: 'center',
          maxWidth: '480px',
          width: '90%',
        }}
      >
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button style={navBtn}>Tính năng</button>
          <button style={navBtn}>Liên hệ</button>
          <button style={navBtn}>Về chúng tôi</button>
        </div>

        <h1 style={{ color: '#1e5799', fontWeight: 700, fontSize: '2rem', marginTop: '1rem' }}>SSB 1.0</h1>
        <p style={{ color: '#444', fontSize: '1.1rem', marginTop: '0.5rem' }}>
          Hệ thống theo dõi xe buýt trường học thông minh
        </p>
        <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#555' }}>Chọn vai trò của bạn để tiếp tục</p>

        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {['Phụ huynh', 'Tài xế', 'Quản lý'].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              style={{
                background: role === r ? '#1e5799' : '#d9f3f0',
                color: role === r ? 'white' : '#000',
                border: 'none',
                borderRadius: '6px',
                padding: '0.6rem 1.2rem',
                cursor: 'pointer',
                fontWeight: 600,
                transition: '0.3s',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const navBtn: React.CSSProperties = {
  background: '#d9f3f0',
  border: 'none',
  borderRadius: '6px',
  padding: '0.4rem 0.8rem',
  cursor: 'pointer',
  fontWeight: 600,
  color: '#1e3a3a',
};
// src/pages/ForgotPassword.jsx
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const correctOTP = "123456"

  const handleSendOtp = () => {
    setOtpSent(true)
    alert("Mock OTP sent to email (123456)")
  }

  const handleReset = () => {
    if (otp === correctOTP) {
      alert(`Password reset to: ${newPassword}`)
    } else {
      alert("Invalid OTP")
    }
  }

  return (
    <>
      <Header />
      <main>
        <h2>Forgot Password</h2>
        {!otpSent ? (
          <>
            <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleSendOtp}>Send OTP</button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <button onClick={handleReset}>Reset Password</button>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default ForgotPassword

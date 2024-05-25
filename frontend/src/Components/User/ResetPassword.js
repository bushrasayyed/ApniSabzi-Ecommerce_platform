import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './SignIn.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Enter OTP and new password
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false); // State to handle redirection

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your backend to send OTP
      const response = await fetch('http://localhost:5000/generateotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // OTP sent successfully, proceed to the next step
        setStep(2);
        setMessage('');
      } else {
        // Failed to send OTP
        setMessage(data.error || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  // const handleSubmitOTP = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send a request to your backend to verify the OTP
  //     const response = await fetch('http://localhost:5000/api/auth/verifyOTP', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, otp }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       // OTP verification successful, reset password
  //       const resetResponse = await fetch('http://localhost:5000/api/auth/resetPassword', {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email, newPassword }),
  //       });

  //       if (resetResponse.ok) {
  //         setMessage('Password reset successful!');
  //         setStep(1); // Reset back to step 1 after successful password reset
  //         setEmail('');
  //         setNewPassword('');
  //         setOtp('');
  //         setRedirect(true); // Set redirect to true after successful password reset
  //         alert('Password reset successful!'); // Show alert
  //       } else {
  //         setMessage('Failed to reset password. Please try again.');
  //       }
  //     } else {
  //       // OTP verification failed
  //       setMessage(data.error || 'Invalid OTP. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error resetting password:', error);
  //     setMessage('An error occurred. Please try again later.');
  //   }
  // };
  const handleSubmitOTP = async (e) => {
    e.preventDefault();

    try {
        // Send a request to your backend to verify the OTP
        const response = await fetch('http://localhost:5000/verifyotp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });

        const data = await response.json();

        if (response.ok) {
            // OTP verification successful, reset password
            if (newPassword.length < 5) {
                setMessage('Password must be at least 5 characters long. Retry by getting new OTP');
            } else {
                const resetResponse = await fetch('http://localhost:5000/resetpass', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, newPassword }),
                });

                if (resetResponse.ok) {
                    setMessage('Password reset successful!');
                    setStep(1); // Reset back to step 1 after successful password reset
                    setEmail('');
                    setNewPassword('');
                    setOtp('');
                    setRedirect(true); // Set redirect to true after successful password reset
                    alert('Password reset successful!'); // Show alert
                } else {
                    setMessage('Failed to reset password. Please try again.');
                }
            }
        } else {
            // OTP verification failed
            setMessage(data.error || 'Invalid OTP. Please try again.');
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        setMessage('An error occurred. Please try again later.');
    }
};

  // Redirect to login page if redirect state is true
  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Reset Password</h1>
          </div>

          {step === 1 && (
            <form onSubmit={handleSubmitEmail}>
              <div className="form_input">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <button className="button">Send OTP</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitOTP}>
              <div className="form_input">
                <label htmlFor="otp">OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                />
                <label htmlFor="newpassword">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="newPass"
                  id="newPass"
                  placeholder="Enter New Password"
                />
              </div>

              <button className="button">Reset Password</button>
            </form>
          )}

          <p>{message}</p>
          
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;

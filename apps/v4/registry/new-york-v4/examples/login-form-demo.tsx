import React from 'react'
import { LoginForm } from './login-form'

export default function LoginFormDemo() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [errors, setErrors] = React.useState({})
  
  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true)
    setErrors({})
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate different responses
      if (data.email === 'demo@example.com' && data.password === 'demo123') {
        alert('Login successful!')
      } else {
        setErrors({
          general: 'Invalid email or password. Try demo@example.com / demo123'
        })
      }
    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login Form Component</h2>
          <p className="text-gray-600">Interactive examples of the login form component</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Default variant */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Default</h3>
            <LoginForm
              variant="default"
              size="default"
              onSubmit={handleLogin}
              isLoading={isLoading}
              errors={errors}
            />
          </div>
          
          {/* Elevated variant */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Elevated</h3>
            <LoginForm
              variant="elevated"
              size="comfortable"
              onSubmit={handleLogin}
              isLoading={isLoading}
              errors={errors}
            />
          </div>
          
          {/* Minimal variant */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Minimal</h3>
            <LoginForm
              variant="minimal"
              size="compact"
              onSubmit={handleLogin}
              isLoading={isLoading}
              errors={errors}
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Demo Credentials</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Email:</strong> demo@example.com</p>
            <p><strong>Password:</strong> demo123</p>
            <p className="text-gray-600">Use these credentials to test successful login</p>
          </div>
        </div>
      </div>
    </div>
  )
}
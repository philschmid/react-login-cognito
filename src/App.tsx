import { Amplify } from 'aws-amplify'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { formFields, services, components } from './auth/AmplifyFlow'

import '@cloudscape-design/global-styles/index.css'
import SignUp from './auth/SignUp'
import { Container } from '@cloudscape-design/components'

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: import.meta.env.VITE_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
    signUpVerificationMethod: import.meta.env.VITE_SIGN_UP_VERIFICATION_METHOD,
  },
})

function App() {
return    ( 
  <Authenticator services={services} formFields={formFields} initialState="signUp">
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
</Authenticator>)
}


export default App

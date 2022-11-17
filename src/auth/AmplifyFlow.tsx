import { Amplify, Auth } from 'aws-amplify'

// Form fields customization -> could be removed later
export const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter Your Email Here',
      isRequired: true,
      label: 'Email:',
    },
  },
  signUp: {
    username: {
      placeholder: 'Enter Your Email Here',
      isRequired: true,
      label: 'Email:',
    },
  },
}

// Components customization use Cloudscape theme
export const components = {
  SignUp: {
    FormFields() {
      return (
        <>
          <label>
            Name:
            <input type="text" name="username" />
          </label>
          <label>
            Name:
            <input type="password" name="password" />
          </label>
        </>
      )
    },
  },
}

// Services customization
export const services = {
  async handleSignUp(formData) {
    console.log(formData)
    const params = new URLSearchParams(window.location.search) // id=123
    const aws = params.get('aws') || null
    let { username, password, attributes } = formData
    // custom username
    username = username.toLowerCase()
    if (aws) {
      attributes['custom:marketplace'] = aws
    }
    return Auth.signUp({
      username,
      password,
      attributes,
      autoSignIn: {
        enabled: true,
      },
    })
  },
  // async validateCustomSignUp(formData) {
  //   console.log(formData)
  //   return formData
  // },
}
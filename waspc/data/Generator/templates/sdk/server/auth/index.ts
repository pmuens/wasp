{{={= =}=}}
export {
  defineUserSignupFields,
} from '../../auth/providers/types.js'

export {
  createProviderId,
  sanitizeAndSerializeProviderData,
  updateAuthIdentityProviderData,
  deserializeAndSanitizeProviderData,
  findAuthIdentity,
  createUser,
} from '../../auth/utils.js'

export {
  ensurePasswordIsPresent,
  ensureValidPassword,
  ensureTokenIsPresent,
} from '../../auth/validation.js'

{=# isEmailAuthEnabled =}
export * from './email/index.js'
{=/ isEmailAuthEnabled =}

{=# isUsernameAndPasswordAuthEnabled =}
export * from './username.js'
{=/ isUsernameAndPasswordAuthEnabled =}

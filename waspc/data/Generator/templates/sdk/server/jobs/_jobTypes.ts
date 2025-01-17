{{={= =}=}}
import { prisma } from 'wasp/server'
import type { JSONValue, JSONObject } from 'wasp/server/_types/serialization'
import { type JobFn } from '{= jobExecutorTypesImportPath =}'

// PRIVATE API
export const entities = {
  {=# entities =}
  {= name =}: prisma.{= prismaIdentifier =},
  {=/ entities =}
};

// PUBLIC API
export type {= typeName =}<Input extends JSONObject, Output extends JSONValue | void> = JobFn<Input, Output, typeof entities>

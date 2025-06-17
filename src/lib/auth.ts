import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { db } from '@/db';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true, // Use plural table names
  }),
  user: {
    modelName: 'usersTable', // Use plural table name
  },
  session: {
    modelName: 'sessionTable', // Use plural table name
  },
  account: {
    modelName: 'accountTable', // Use plural table name
  },
  verification: {
    modelName: 'verificationTables', // Use plural table name
  },
});

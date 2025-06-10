
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Audit
 * 
 */
export type Audit = $Result.DefaultSelection<Prisma.$AuditPayload>
/**
 * Model Limit
 * 
 */
export type Limit = $Result.DefaultSelection<Prisma.$LimitPayload>
/**
 * Model GymLimit
 * 
 */
export type GymLimit = $Result.DefaultSelection<Prisma.$GymLimitPayload>
/**
 * Model GymStats
 * 
 */
export type GymStats = $Result.DefaultSelection<Prisma.$GymStatsPayload>
/**
 * Model Revenue
 * 
 */
export type Revenue = $Result.DefaultSelection<Prisma.$RevenuePayload>
/**
 * Model MembershipCount
 * 
 */
export type MembershipCount = $Result.DefaultSelection<Prisma.$MembershipCountPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model GymStaff
 * 
 */
export type GymStaff = $Result.DefaultSelection<Prisma.$GymStaffPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model MemberTimeLogs
 * 
 */
export type MemberTimeLogs = $Result.DefaultSelection<Prisma.$MemberTimeLogsPayload>
/**
 * Model MemberTimeLogsMembership
 * 
 */
export type MemberTimeLogsMembership = $Result.DefaultSelection<Prisma.$MemberTimeLogsMembershipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GYM_OWNER: 'GYM_OWNER',
  GYM_STAFF: 'GYM_STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audits
 * const audits = await prisma.audit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audits
   * const audits = await prisma.audit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit`: Exposes CRUD operations for the **Audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.AuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.limit`: Exposes CRUD operations for the **Limit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Limits
    * const limits = await prisma.limit.findMany()
    * ```
    */
  get limit(): Prisma.LimitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gymLimit`: Exposes CRUD operations for the **GymLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymLimits
    * const gymLimits = await prisma.gymLimit.findMany()
    * ```
    */
  get gymLimit(): Prisma.GymLimitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gymStats`: Exposes CRUD operations for the **GymStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymStats
    * const gymStats = await prisma.gymStats.findMany()
    * ```
    */
  get gymStats(): Prisma.GymStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenue`: Exposes CRUD operations for the **Revenue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revenues
    * const revenues = await prisma.revenue.findMany()
    * ```
    */
  get revenue(): Prisma.RevenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membershipCount`: Exposes CRUD operations for the **MembershipCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembershipCounts
    * const membershipCounts = await prisma.membershipCount.findMany()
    * ```
    */
  get membershipCount(): Prisma.MembershipCountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gymStaff`: Exposes CRUD operations for the **GymStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymStaffs
    * const gymStaffs = await prisma.gymStaff.findMany()
    * ```
    */
  get gymStaff(): Prisma.GymStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberTimeLogs`: Exposes CRUD operations for the **MemberTimeLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberTimeLogs
    * const memberTimeLogs = await prisma.memberTimeLogs.findMany()
    * ```
    */
  get memberTimeLogs(): Prisma.MemberTimeLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberTimeLogsMembership`: Exposes CRUD operations for the **MemberTimeLogsMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberTimeLogsMemberships
    * const memberTimeLogsMemberships = await prisma.memberTimeLogsMembership.findMany()
    * ```
    */
  get memberTimeLogsMembership(): Prisma.MemberTimeLogsMembershipDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Audit: 'Audit',
    Limit: 'Limit',
    GymLimit: 'GymLimit',
    GymStats: 'GymStats',
    Revenue: 'Revenue',
    MembershipCount: 'MembershipCount',
    User: 'User',
    Member: 'Member',
    Gym: 'Gym',
    GymStaff: 'GymStaff',
    Membership: 'Membership',
    Plan: 'Plan',
    MemberTimeLogs: 'MemberTimeLogs',
    MemberTimeLogsMembership: 'MemberTimeLogsMembership'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit" | "limit" | "gymLimit" | "gymStats" | "revenue" | "membershipCount" | "user" | "member" | "gym" | "gymStaff" | "membership" | "plan" | "memberTimeLogs" | "memberTimeLogsMembership"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Audit: {
        payload: Prisma.$AuditPayload<ExtArgs>
        fields: Prisma.AuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findFirst: {
            args: Prisma.AuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findMany: {
            args: Prisma.AuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          create: {
            args: Prisma.AuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          createMany: {
            args: Prisma.AuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          delete: {
            args: Prisma.AuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          update: {
            args: Prisma.AuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          deleteMany: {
            args: Prisma.AuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          upsert: {
            args: Prisma.AuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.AuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      Limit: {
        payload: Prisma.$LimitPayload<ExtArgs>
        fields: Prisma.LimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          findFirst: {
            args: Prisma.LimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          findMany: {
            args: Prisma.LimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>[]
          }
          create: {
            args: Prisma.LimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          createMany: {
            args: Prisma.LimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>[]
          }
          delete: {
            args: Prisma.LimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          update: {
            args: Prisma.LimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          deleteMany: {
            args: Prisma.LimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>[]
          }
          upsert: {
            args: Prisma.LimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimitPayload>
          }
          aggregate: {
            args: Prisma.LimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLimit>
          }
          groupBy: {
            args: Prisma.LimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<LimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.LimitCountArgs<ExtArgs>
            result: $Utils.Optional<LimitCountAggregateOutputType> | number
          }
        }
      }
      GymLimit: {
        payload: Prisma.$GymLimitPayload<ExtArgs>
        fields: Prisma.GymLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          findFirst: {
            args: Prisma.GymLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          findMany: {
            args: Prisma.GymLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>[]
          }
          create: {
            args: Prisma.GymLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          createMany: {
            args: Prisma.GymLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>[]
          }
          delete: {
            args: Prisma.GymLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          update: {
            args: Prisma.GymLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          deleteMany: {
            args: Prisma.GymLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymLimitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>[]
          }
          upsert: {
            args: Prisma.GymLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymLimitPayload>
          }
          aggregate: {
            args: Prisma.GymLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymLimit>
          }
          groupBy: {
            args: Prisma.GymLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymLimitCountArgs<ExtArgs>
            result: $Utils.Optional<GymLimitCountAggregateOutputType> | number
          }
        }
      }
      GymStats: {
        payload: Prisma.$GymStatsPayload<ExtArgs>
        fields: Prisma.GymStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          findFirst: {
            args: Prisma.GymStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          findMany: {
            args: Prisma.GymStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>[]
          }
          create: {
            args: Prisma.GymStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          createMany: {
            args: Prisma.GymStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>[]
          }
          delete: {
            args: Prisma.GymStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          update: {
            args: Prisma.GymStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          deleteMany: {
            args: Prisma.GymStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>[]
          }
          upsert: {
            args: Prisma.GymStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStatsPayload>
          }
          aggregate: {
            args: Prisma.GymStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymStats>
          }
          groupBy: {
            args: Prisma.GymStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymStatsCountArgs<ExtArgs>
            result: $Utils.Optional<GymStatsCountAggregateOutputType> | number
          }
        }
      }
      Revenue: {
        payload: Prisma.$RevenuePayload<ExtArgs>
        fields: Prisma.RevenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          findFirst: {
            args: Prisma.RevenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          findMany: {
            args: Prisma.RevenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>[]
          }
          create: {
            args: Prisma.RevenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          createMany: {
            args: Prisma.RevenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>[]
          }
          delete: {
            args: Prisma.RevenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          update: {
            args: Prisma.RevenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          deleteMany: {
            args: Prisma.RevenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>[]
          }
          upsert: {
            args: Prisma.RevenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenuePayload>
          }
          aggregate: {
            args: Prisma.RevenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenue>
          }
          groupBy: {
            args: Prisma.RevenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenueCountArgs<ExtArgs>
            result: $Utils.Optional<RevenueCountAggregateOutputType> | number
          }
        }
      }
      MembershipCount: {
        payload: Prisma.$MembershipCountPayload<ExtArgs>
        fields: Prisma.MembershipCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          findFirst: {
            args: Prisma.MembershipCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          findMany: {
            args: Prisma.MembershipCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>[]
          }
          create: {
            args: Prisma.MembershipCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          createMany: {
            args: Prisma.MembershipCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>[]
          }
          delete: {
            args: Prisma.MembershipCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          update: {
            args: Prisma.MembershipCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          deleteMany: {
            args: Prisma.MembershipCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipCountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>[]
          }
          upsert: {
            args: Prisma.MembershipCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipCountPayload>
          }
          aggregate: {
            args: Prisma.MembershipCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembershipCount>
          }
          groupBy: {
            args: Prisma.MembershipCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Gym: {
        payload: Prisma.$GymPayload<ExtArgs>
        fields: Prisma.GymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findFirst: {
            args: Prisma.GymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findMany: {
            args: Prisma.GymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          create: {
            args: Prisma.GymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          createMany: {
            args: Prisma.GymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          delete: {
            args: Prisma.GymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          update: {
            args: Prisma.GymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          deleteMany: {
            args: Prisma.GymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          upsert: {
            args: Prisma.GymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.GymGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymCountArgs<ExtArgs>
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      GymStaff: {
        payload: Prisma.$GymStaffPayload<ExtArgs>
        fields: Prisma.GymStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          findFirst: {
            args: Prisma.GymStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          findMany: {
            args: Prisma.GymStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>[]
          }
          create: {
            args: Prisma.GymStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          createMany: {
            args: Prisma.GymStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymStaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>[]
          }
          delete: {
            args: Prisma.GymStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          update: {
            args: Prisma.GymStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          deleteMany: {
            args: Prisma.GymStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymStaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>[]
          }
          upsert: {
            args: Prisma.GymStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymStaffPayload>
          }
          aggregate: {
            args: Prisma.GymStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymStaff>
          }
          groupBy: {
            args: Prisma.GymStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymStaffCountArgs<ExtArgs>
            result: $Utils.Optional<GymStaffCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      MemberTimeLogs: {
        payload: Prisma.$MemberTimeLogsPayload<ExtArgs>
        fields: Prisma.MemberTimeLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberTimeLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberTimeLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          findFirst: {
            args: Prisma.MemberTimeLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberTimeLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          findMany: {
            args: Prisma.MemberTimeLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>[]
          }
          create: {
            args: Prisma.MemberTimeLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          createMany: {
            args: Prisma.MemberTimeLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberTimeLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>[]
          }
          delete: {
            args: Prisma.MemberTimeLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          update: {
            args: Prisma.MemberTimeLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          deleteMany: {
            args: Prisma.MemberTimeLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberTimeLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberTimeLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>[]
          }
          upsert: {
            args: Prisma.MemberTimeLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsPayload>
          }
          aggregate: {
            args: Prisma.MemberTimeLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberTimeLogs>
          }
          groupBy: {
            args: Prisma.MemberTimeLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberTimeLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberTimeLogsCountArgs<ExtArgs>
            result: $Utils.Optional<MemberTimeLogsCountAggregateOutputType> | number
          }
        }
      }
      MemberTimeLogsMembership: {
        payload: Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>
        fields: Prisma.MemberTimeLogsMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberTimeLogsMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberTimeLogsMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          findFirst: {
            args: Prisma.MemberTimeLogsMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberTimeLogsMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          findMany: {
            args: Prisma.MemberTimeLogsMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>[]
          }
          create: {
            args: Prisma.MemberTimeLogsMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          createMany: {
            args: Prisma.MemberTimeLogsMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberTimeLogsMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>[]
          }
          delete: {
            args: Prisma.MemberTimeLogsMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          update: {
            args: Prisma.MemberTimeLogsMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          deleteMany: {
            args: Prisma.MemberTimeLogsMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberTimeLogsMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberTimeLogsMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>[]
          }
          upsert: {
            args: Prisma.MemberTimeLogsMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberTimeLogsMembershipPayload>
          }
          aggregate: {
            args: Prisma.MemberTimeLogsMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberTimeLogsMembership>
          }
          groupBy: {
            args: Prisma.MemberTimeLogsMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberTimeLogsMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberTimeLogsMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MemberTimeLogsMembershipCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    audit?: AuditOmit
    limit?: LimitOmit
    gymLimit?: GymLimitOmit
    gymStats?: GymStatsOmit
    revenue?: RevenueOmit
    membershipCount?: MembershipCountOmit
    user?: UserOmit
    member?: MemberOmit
    gym?: GymOmit
    gymStaff?: GymStaffOmit
    membership?: MembershipOmit
    plan?: PlanOmit
    memberTimeLogs?: MemberTimeLogsOmit
    memberTimeLogsMembership?: MemberTimeLogsMembershipOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LimitCountOutputType
   */

  export type LimitCountOutputType = {
    settings: number
  }

  export type LimitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | LimitCountOutputTypeCountSettingsArgs
  }

  // Custom InputTypes
  /**
   * LimitCountOutputType without action
   */
  export type LimitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimitCountOutputType
     */
    select?: LimitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LimitCountOutputType without action
   */
  export type LimitCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymLimitWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    memberships: number
    attendance_logs: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | MemberCountOutputTypeCountMembershipsArgs
    attendance_logs?: boolean | MemberCountOutputTypeCountAttendance_logsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountAttendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    memberships: number
    member_time_logs: number
    revenues: number
    staffs: number
    limits: number
    audit_logs: number
    membership_counts: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | GymCountOutputTypeCountMembershipsArgs
    member_time_logs?: boolean | GymCountOutputTypeCountMember_time_logsArgs
    revenues?: boolean | GymCountOutputTypeCountRevenuesArgs
    staffs?: boolean | GymCountOutputTypeCountStaffsArgs
    limits?: boolean | GymCountOutputTypeCountLimitsArgs
    audit_logs?: boolean | GymCountOutputTypeCountAudit_logsArgs
    membership_counts?: boolean | GymCountOutputTypeCountMembership_countsArgs
  }

  // Custom InputTypes
  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymCountOutputType
     */
    select?: GymCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountMember_time_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountRevenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymStaffWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountLimitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymLimitWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountMembership_countsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipCountWhereInput
  }


  /**
   * Count Type MembershipCountOutputType
   */

  export type MembershipCountOutputType = {
    attendance_logs: number
  }

  export type MembershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance_logs?: boolean | MembershipCountOutputTypeCountAttendance_logsArgs
  }

  // Custom InputTypes
  /**
   * MembershipCountOutputType without action
   */
  export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCountOutputType
     */
    select?: MembershipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembershipCountOutputType without action
   */
  export type MembershipCountOutputTypeCountAttendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsMembershipWhereInput
  }


  /**
   * Count Type MemberTimeLogsCountOutputType
   */

  export type MemberTimeLogsCountOutputType = {
    memberships: number
  }

  export type MemberTimeLogsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | MemberTimeLogsCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * MemberTimeLogsCountOutputType without action
   */
  export type MemberTimeLogsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsCountOutputType
     */
    select?: MemberTimeLogsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberTimeLogsCountOutputType without action
   */
  export type MemberTimeLogsCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsMembershipWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    username: string | null
    table: string | null
    action: string | null
    reference_id: string | null
    ip_address: string | null
    created_at: Date | null
    notes: string | null
  }

  export type AuditMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    username: string | null
    table: string | null
    action: string | null
    reference_id: string | null
    ip_address: string | null
    created_at: Date | null
    notes: string | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    gym_id: number
    username: number
    table: number
    action: number
    reference_id: number
    metadata: number
    ip_address: number
    device_info: number
    created_at: number
    notes: number
    _all: number
  }


  export type AuditMinAggregateInputType = {
    id?: true
    gym_id?: true
    username?: true
    table?: true
    action?: true
    reference_id?: true
    ip_address?: true
    created_at?: true
    notes?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    gym_id?: true
    username?: true
    table?: true
    action?: true
    reference_id?: true
    ip_address?: true
    created_at?: true
    notes?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    gym_id?: true
    username?: true
    table?: true
    action?: true
    reference_id?: true
    metadata?: true
    ip_address?: true
    device_info?: true
    created_at?: true
    notes?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit to aggregate.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type AuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithAggregationInput | AuditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: AuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: string
    gym_id: string | null
    username: string
    table: string
    action: string
    reference_id: string | null
    metadata: JsonValue | null
    ip_address: string | null
    device_info: JsonValue | null
    created_at: Date
    notes: string | null
    _count: AuditCountAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type AuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    username?: boolean
    table?: boolean
    action?: boolean
    reference_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    device_info?: boolean
    created_at?: boolean
    notes?: boolean
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    username?: boolean
    table?: boolean
    action?: boolean
    reference_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    device_info?: boolean
    created_at?: boolean
    notes?: boolean
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    username?: boolean
    table?: boolean
    action?: boolean
    reference_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    device_info?: boolean
    created_at?: boolean
    notes?: boolean
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectScalar = {
    id?: boolean
    gym_id?: boolean
    username?: boolean
    table?: boolean
    action?: boolean
    reference_id?: boolean
    metadata?: boolean
    ip_address?: boolean
    device_info?: boolean
    created_at?: boolean
    notes?: boolean
  }

  export type AuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "username" | "table" | "action" | "reference_id" | "metadata" | "ip_address" | "device_info" | "created_at" | "notes", ExtArgs["result"]["audit"]>
  export type AuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }
  export type AuditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }
  export type AuditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | Audit$gymArgs<ExtArgs>
  }

  export type $AuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audit"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string | null
      username: string
      table: string
      action: string
      reference_id: string | null
      metadata: Prisma.JsonValue | null
      ip_address: string | null
      device_info: Prisma.JsonValue | null
      created_at: Date
      notes: string | null
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type AuditGetPayload<S extends boolean | null | undefined | AuditDefaultArgs> = $Result.GetResult<Prisma.$AuditPayload, S>

  type AuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface AuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audit'], meta: { name: 'Audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {AuditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditFindUniqueArgs>(args: SelectSubset<T, AuditFindUniqueArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditFindFirstArgs>(args?: SelectSubset<T, AuditFindFirstArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditFindManyArgs>(args?: SelectSubset<T, AuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {AuditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends AuditCreateArgs>(args: SelectSubset<T, AuditCreateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {AuditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditCreateManyArgs>(args?: SelectSubset<T, AuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audits and returns the data saved in the database.
     * @param {AuditCreateManyAndReturnArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit.
     * @param {AuditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends AuditDeleteArgs>(args: SelectSubset<T, AuditDeleteArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {AuditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditUpdateArgs>(args: SelectSubset<T, AuditUpdateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {AuditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditDeleteManyArgs>(args?: SelectSubset<T, AuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditUpdateManyArgs>(args: SelectSubset<T, AuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits and returns the data updated in the database.
     * @param {AuditUpdateManyAndReturnArgs} args - Arguments to update many Audits.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit.
     * @param {AuditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends AuditUpsertArgs>(args: SelectSubset<T, AuditUpsertArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends AuditCountArgs>(
      args?: Subset<T, AuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditGroupByArgs['orderBy'] }
        : { orderBy?: AuditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audit model
   */
  readonly fields: AuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends Audit$gymArgs<ExtArgs> = {}>(args?: Subset<T, Audit$gymArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Audit model
   */
  interface AuditFieldRefs {
    readonly id: FieldRef<"Audit", 'String'>
    readonly gym_id: FieldRef<"Audit", 'String'>
    readonly username: FieldRef<"Audit", 'String'>
    readonly table: FieldRef<"Audit", 'String'>
    readonly action: FieldRef<"Audit", 'String'>
    readonly reference_id: FieldRef<"Audit", 'String'>
    readonly metadata: FieldRef<"Audit", 'Json'>
    readonly ip_address: FieldRef<"Audit", 'String'>
    readonly device_info: FieldRef<"Audit", 'Json'>
    readonly created_at: FieldRef<"Audit", 'DateTime'>
    readonly notes: FieldRef<"Audit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Audit findUnique
   */
  export type AuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findUniqueOrThrow
   */
  export type AuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findFirst
   */
  export type AuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findFirstOrThrow
   */
  export type AuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findMany
   */
  export type AuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit create
   */
  export type AuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to create a Audit.
     */
    data: XOR<AuditCreateInput, AuditUncheckedCreateInput>
  }

  /**
   * Audit createMany
   */
  export type AuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audits.
     */
    data: AuditCreateManyInput | AuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audit createManyAndReturn
   */
  export type AuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * The data used to create many Audits.
     */
    data: AuditCreateManyInput | AuditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit update
   */
  export type AuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to update a Audit.
     */
    data: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
    /**
     * Choose, which Audit to update.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit updateMany
   */
  export type AuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to update.
     */
    limit?: number
  }

  /**
   * Audit updateManyAndReturn
   */
  export type AuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit upsert
   */
  export type AuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The filter to search for the Audit to update in case it exists.
     */
    where: AuditWhereUniqueInput
    /**
     * In case the Audit found by the `where` argument doesn't exist, create a new Audit with this data.
     */
    create: XOR<AuditCreateInput, AuditUncheckedCreateInput>
    /**
     * In case the Audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
  }

  /**
   * Audit delete
   */
  export type AuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter which Audit to delete.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit deleteMany
   */
  export type AuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audits to delete
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to delete.
     */
    limit?: number
  }

  /**
   * Audit.gym
   */
  export type Audit$gymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    where?: GymWhereInput
  }

  /**
   * Audit without action
   */
  export type AuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
  }


  /**
   * Model Limit
   */

  export type AggregateLimit = {
    _count: LimitCountAggregateOutputType | null
    _avg: LimitAvgAggregateOutputType | null
    _sum: LimitSumAggregateOutputType | null
    _min: LimitMinAggregateOutputType | null
    _max: LimitMaxAggregateOutputType | null
  }

  export type LimitAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type LimitSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type LimitMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type LimitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
  }

  export type LimitCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type LimitAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type LimitSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type LimitMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type LimitMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type LimitCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type LimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Limit to aggregate.
     */
    where?: LimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitOrderByWithRelationInput | LimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Limits
    **/
    _count?: true | LimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LimitMaxAggregateInputType
  }

  export type GetLimitAggregateType<T extends LimitAggregateArgs> = {
        [P in keyof T & keyof AggregateLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLimit[P]>
      : GetScalarType<T[P], AggregateLimit[P]>
  }




  export type LimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LimitWhereInput
    orderBy?: LimitOrderByWithAggregationInput | LimitOrderByWithAggregationInput[]
    by: LimitScalarFieldEnum[] | LimitScalarFieldEnum
    having?: LimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LimitCountAggregateInputType | true
    _avg?: LimitAvgAggregateInputType
    _sum?: LimitSumAggregateInputType
    _min?: LimitMinAggregateInputType
    _max?: LimitMaxAggregateInputType
  }

  export type LimitGroupByOutputType = {
    id: number
    name: string
    value: number
    _count: LimitCountAggregateOutputType | null
    _avg: LimitAvgAggregateOutputType | null
    _sum: LimitSumAggregateOutputType | null
    _min: LimitMinAggregateOutputType | null
    _max: LimitMaxAggregateOutputType | null
  }

  type GetLimitGroupByPayload<T extends LimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LimitGroupByOutputType[P]>
            : GetScalarType<T[P], LimitGroupByOutputType[P]>
        }
      >
    >


  export type LimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    settings?: boolean | Limit$settingsArgs<ExtArgs>
    _count?: boolean | LimitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["limit"]>

  export type LimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["limit"]>

  export type LimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["limit"]>

  export type LimitSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type LimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value", ExtArgs["result"]["limit"]>
  export type LimitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | Limit$settingsArgs<ExtArgs>
    _count?: boolean | LimitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LimitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LimitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Limit"
    objects: {
      settings: Prisma.$GymLimitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: number
    }, ExtArgs["result"]["limit"]>
    composites: {}
  }

  type LimitGetPayload<S extends boolean | null | undefined | LimitDefaultArgs> = $Result.GetResult<Prisma.$LimitPayload, S>

  type LimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LimitCountAggregateInputType | true
    }

  export interface LimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Limit'], meta: { name: 'Limit' } }
    /**
     * Find zero or one Limit that matches the filter.
     * @param {LimitFindUniqueArgs} args - Arguments to find a Limit
     * @example
     * // Get one Limit
     * const limit = await prisma.limit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LimitFindUniqueArgs>(args: SelectSubset<T, LimitFindUniqueArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Limit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LimitFindUniqueOrThrowArgs} args - Arguments to find a Limit
     * @example
     * // Get one Limit
     * const limit = await prisma.limit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LimitFindUniqueOrThrowArgs>(args: SelectSubset<T, LimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Limit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitFindFirstArgs} args - Arguments to find a Limit
     * @example
     * // Get one Limit
     * const limit = await prisma.limit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LimitFindFirstArgs>(args?: SelectSubset<T, LimitFindFirstArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Limit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitFindFirstOrThrowArgs} args - Arguments to find a Limit
     * @example
     * // Get one Limit
     * const limit = await prisma.limit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LimitFindFirstOrThrowArgs>(args?: SelectSubset<T, LimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Limits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Limits
     * const limits = await prisma.limit.findMany()
     * 
     * // Get first 10 Limits
     * const limits = await prisma.limit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const limitWithIdOnly = await prisma.limit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LimitFindManyArgs>(args?: SelectSubset<T, LimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Limit.
     * @param {LimitCreateArgs} args - Arguments to create a Limit.
     * @example
     * // Create one Limit
     * const Limit = await prisma.limit.create({
     *   data: {
     *     // ... data to create a Limit
     *   }
     * })
     * 
     */
    create<T extends LimitCreateArgs>(args: SelectSubset<T, LimitCreateArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Limits.
     * @param {LimitCreateManyArgs} args - Arguments to create many Limits.
     * @example
     * // Create many Limits
     * const limit = await prisma.limit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LimitCreateManyArgs>(args?: SelectSubset<T, LimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Limits and returns the data saved in the database.
     * @param {LimitCreateManyAndReturnArgs} args - Arguments to create many Limits.
     * @example
     * // Create many Limits
     * const limit = await prisma.limit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Limits and only return the `id`
     * const limitWithIdOnly = await prisma.limit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LimitCreateManyAndReturnArgs>(args?: SelectSubset<T, LimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Limit.
     * @param {LimitDeleteArgs} args - Arguments to delete one Limit.
     * @example
     * // Delete one Limit
     * const Limit = await prisma.limit.delete({
     *   where: {
     *     // ... filter to delete one Limit
     *   }
     * })
     * 
     */
    delete<T extends LimitDeleteArgs>(args: SelectSubset<T, LimitDeleteArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Limit.
     * @param {LimitUpdateArgs} args - Arguments to update one Limit.
     * @example
     * // Update one Limit
     * const limit = await prisma.limit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LimitUpdateArgs>(args: SelectSubset<T, LimitUpdateArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Limits.
     * @param {LimitDeleteManyArgs} args - Arguments to filter Limits to delete.
     * @example
     * // Delete a few Limits
     * const { count } = await prisma.limit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LimitDeleteManyArgs>(args?: SelectSubset<T, LimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Limits
     * const limit = await prisma.limit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LimitUpdateManyArgs>(args: SelectSubset<T, LimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Limits and returns the data updated in the database.
     * @param {LimitUpdateManyAndReturnArgs} args - Arguments to update many Limits.
     * @example
     * // Update many Limits
     * const limit = await prisma.limit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Limits and only return the `id`
     * const limitWithIdOnly = await prisma.limit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LimitUpdateManyAndReturnArgs>(args: SelectSubset<T, LimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Limit.
     * @param {LimitUpsertArgs} args - Arguments to update or create a Limit.
     * @example
     * // Update or create a Limit
     * const limit = await prisma.limit.upsert({
     *   create: {
     *     // ... data to create a Limit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Limit we want to update
     *   }
     * })
     */
    upsert<T extends LimitUpsertArgs>(args: SelectSubset<T, LimitUpsertArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Limits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitCountArgs} args - Arguments to filter Limits to count.
     * @example
     * // Count the number of Limits
     * const count = await prisma.limit.count({
     *   where: {
     *     // ... the filter for the Limits we want to count
     *   }
     * })
    **/
    count<T extends LimitCountArgs>(
      args?: Subset<T, LimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Limit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LimitAggregateArgs>(args: Subset<T, LimitAggregateArgs>): Prisma.PrismaPromise<GetLimitAggregateType<T>>

    /**
     * Group by Limit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LimitGroupByArgs['orderBy'] }
        : { orderBy?: LimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Limit model
   */
  readonly fields: LimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Limit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settings<T extends Limit$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Limit$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Limit model
   */
  interface LimitFieldRefs {
    readonly id: FieldRef<"Limit", 'Int'>
    readonly name: FieldRef<"Limit", 'String'>
    readonly value: FieldRef<"Limit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Limit findUnique
   */
  export type LimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter, which Limit to fetch.
     */
    where: LimitWhereUniqueInput
  }

  /**
   * Limit findUniqueOrThrow
   */
  export type LimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter, which Limit to fetch.
     */
    where: LimitWhereUniqueInput
  }

  /**
   * Limit findFirst
   */
  export type LimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter, which Limit to fetch.
     */
    where?: LimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitOrderByWithRelationInput | LimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Limits.
     */
    cursor?: LimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Limits.
     */
    distinct?: LimitScalarFieldEnum | LimitScalarFieldEnum[]
  }

  /**
   * Limit findFirstOrThrow
   */
  export type LimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter, which Limit to fetch.
     */
    where?: LimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitOrderByWithRelationInput | LimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Limits.
     */
    cursor?: LimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Limits.
     */
    distinct?: LimitScalarFieldEnum | LimitScalarFieldEnum[]
  }

  /**
   * Limit findMany
   */
  export type LimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter, which Limits to fetch.
     */
    where?: LimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Limits to fetch.
     */
    orderBy?: LimitOrderByWithRelationInput | LimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Limits.
     */
    cursor?: LimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Limits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Limits.
     */
    skip?: number
    distinct?: LimitScalarFieldEnum | LimitScalarFieldEnum[]
  }

  /**
   * Limit create
   */
  export type LimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * The data needed to create a Limit.
     */
    data: XOR<LimitCreateInput, LimitUncheckedCreateInput>
  }

  /**
   * Limit createMany
   */
  export type LimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Limits.
     */
    data: LimitCreateManyInput | LimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Limit createManyAndReturn
   */
  export type LimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * The data used to create many Limits.
     */
    data: LimitCreateManyInput | LimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Limit update
   */
  export type LimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * The data needed to update a Limit.
     */
    data: XOR<LimitUpdateInput, LimitUncheckedUpdateInput>
    /**
     * Choose, which Limit to update.
     */
    where: LimitWhereUniqueInput
  }

  /**
   * Limit updateMany
   */
  export type LimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Limits.
     */
    data: XOR<LimitUpdateManyMutationInput, LimitUncheckedUpdateManyInput>
    /**
     * Filter which Limits to update
     */
    where?: LimitWhereInput
    /**
     * Limit how many Limits to update.
     */
    limit?: number
  }

  /**
   * Limit updateManyAndReturn
   */
  export type LimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * The data used to update Limits.
     */
    data: XOR<LimitUpdateManyMutationInput, LimitUncheckedUpdateManyInput>
    /**
     * Filter which Limits to update
     */
    where?: LimitWhereInput
    /**
     * Limit how many Limits to update.
     */
    limit?: number
  }

  /**
   * Limit upsert
   */
  export type LimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * The filter to search for the Limit to update in case it exists.
     */
    where: LimitWhereUniqueInput
    /**
     * In case the Limit found by the `where` argument doesn't exist, create a new Limit with this data.
     */
    create: XOR<LimitCreateInput, LimitUncheckedCreateInput>
    /**
     * In case the Limit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LimitUpdateInput, LimitUncheckedUpdateInput>
  }

  /**
   * Limit delete
   */
  export type LimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
    /**
     * Filter which Limit to delete.
     */
    where: LimitWhereUniqueInput
  }

  /**
   * Limit deleteMany
   */
  export type LimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Limits to delete
     */
    where?: LimitWhereInput
    /**
     * Limit how many Limits to delete.
     */
    limit?: number
  }

  /**
   * Limit.settings
   */
  export type Limit$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    where?: GymLimitWhereInput
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    cursor?: GymLimitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymLimitScalarFieldEnum | GymLimitScalarFieldEnum[]
  }

  /**
   * Limit without action
   */
  export type LimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Limit
     */
    select?: LimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Limit
     */
    omit?: LimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LimitInclude<ExtArgs> | null
  }


  /**
   * Model GymLimit
   */

  export type AggregateGymLimit = {
    _count: GymLimitCountAggregateOutputType | null
    _avg: GymLimitAvgAggregateOutputType | null
    _sum: GymLimitSumAggregateOutputType | null
    _min: GymLimitMinAggregateOutputType | null
    _max: GymLimitMaxAggregateOutputType | null
  }

  export type GymLimitAvgAggregateOutputType = {
    id: number | null
    limit_id: number | null
    value: number | null
  }

  export type GymLimitSumAggregateOutputType = {
    id: number | null
    limit_id: number | null
    value: number | null
  }

  export type GymLimitMinAggregateOutputType = {
    id: number | null
    gym_id: string | null
    limit_id: number | null
    value: number | null
  }

  export type GymLimitMaxAggregateOutputType = {
    id: number | null
    gym_id: string | null
    limit_id: number | null
    value: number | null
  }

  export type GymLimitCountAggregateOutputType = {
    id: number
    gym_id: number
    limit_id: number
    value: number
    _all: number
  }


  export type GymLimitAvgAggregateInputType = {
    id?: true
    limit_id?: true
    value?: true
  }

  export type GymLimitSumAggregateInputType = {
    id?: true
    limit_id?: true
    value?: true
  }

  export type GymLimitMinAggregateInputType = {
    id?: true
    gym_id?: true
    limit_id?: true
    value?: true
  }

  export type GymLimitMaxAggregateInputType = {
    id?: true
    gym_id?: true
    limit_id?: true
    value?: true
  }

  export type GymLimitCountAggregateInputType = {
    id?: true
    gym_id?: true
    limit_id?: true
    value?: true
    _all?: true
  }

  export type GymLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymLimit to aggregate.
     */
    where?: GymLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymLimits to fetch.
     */
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymLimits
    **/
    _count?: true | GymLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymLimitMaxAggregateInputType
  }

  export type GetGymLimitAggregateType<T extends GymLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateGymLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymLimit[P]>
      : GetScalarType<T[P], AggregateGymLimit[P]>
  }




  export type GymLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymLimitWhereInput
    orderBy?: GymLimitOrderByWithAggregationInput | GymLimitOrderByWithAggregationInput[]
    by: GymLimitScalarFieldEnum[] | GymLimitScalarFieldEnum
    having?: GymLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymLimitCountAggregateInputType | true
    _avg?: GymLimitAvgAggregateInputType
    _sum?: GymLimitSumAggregateInputType
    _min?: GymLimitMinAggregateInputType
    _max?: GymLimitMaxAggregateInputType
  }

  export type GymLimitGroupByOutputType = {
    id: number
    gym_id: string
    limit_id: number
    value: number
    _count: GymLimitCountAggregateOutputType | null
    _avg: GymLimitAvgAggregateOutputType | null
    _sum: GymLimitSumAggregateOutputType | null
    _min: GymLimitMinAggregateOutputType | null
    _max: GymLimitMaxAggregateOutputType | null
  }

  type GetGymLimitGroupByPayload<T extends GymLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymLimitGroupByOutputType[P]>
            : GetScalarType<T[P], GymLimitGroupByOutputType[P]>
        }
      >
    >


  export type GymLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    limit_id?: boolean
    value?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymLimit"]>

  export type GymLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    limit_id?: boolean
    value?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymLimit"]>

  export type GymLimitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    limit_id?: boolean
    value?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymLimit"]>

  export type GymLimitSelectScalar = {
    id?: boolean
    gym_id?: boolean
    limit_id?: boolean
    value?: boolean
  }

  export type GymLimitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "limit_id" | "value", ExtArgs["result"]["gymLimit"]>
  export type GymLimitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }
  export type GymLimitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }
  export type GymLimitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    limit?: boolean | LimitDefaultArgs<ExtArgs>
  }

  export type $GymLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymLimit"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
      limit: Prisma.$LimitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gym_id: string
      limit_id: number
      value: number
    }, ExtArgs["result"]["gymLimit"]>
    composites: {}
  }

  type GymLimitGetPayload<S extends boolean | null | undefined | GymLimitDefaultArgs> = $Result.GetResult<Prisma.$GymLimitPayload, S>

  type GymLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymLimitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymLimitCountAggregateInputType | true
    }

  export interface GymLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymLimit'], meta: { name: 'GymLimit' } }
    /**
     * Find zero or one GymLimit that matches the filter.
     * @param {GymLimitFindUniqueArgs} args - Arguments to find a GymLimit
     * @example
     * // Get one GymLimit
     * const gymLimit = await prisma.gymLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymLimitFindUniqueArgs>(args: SelectSubset<T, GymLimitFindUniqueArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymLimit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymLimitFindUniqueOrThrowArgs} args - Arguments to find a GymLimit
     * @example
     * // Get one GymLimit
     * const gymLimit = await prisma.gymLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, GymLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitFindFirstArgs} args - Arguments to find a GymLimit
     * @example
     * // Get one GymLimit
     * const gymLimit = await prisma.gymLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymLimitFindFirstArgs>(args?: SelectSubset<T, GymLimitFindFirstArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitFindFirstOrThrowArgs} args - Arguments to find a GymLimit
     * @example
     * // Get one GymLimit
     * const gymLimit = await prisma.gymLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, GymLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymLimits
     * const gymLimits = await prisma.gymLimit.findMany()
     * 
     * // Get first 10 GymLimits
     * const gymLimits = await prisma.gymLimit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymLimitWithIdOnly = await prisma.gymLimit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymLimitFindManyArgs>(args?: SelectSubset<T, GymLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymLimit.
     * @param {GymLimitCreateArgs} args - Arguments to create a GymLimit.
     * @example
     * // Create one GymLimit
     * const GymLimit = await prisma.gymLimit.create({
     *   data: {
     *     // ... data to create a GymLimit
     *   }
     * })
     * 
     */
    create<T extends GymLimitCreateArgs>(args: SelectSubset<T, GymLimitCreateArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymLimits.
     * @param {GymLimitCreateManyArgs} args - Arguments to create many GymLimits.
     * @example
     * // Create many GymLimits
     * const gymLimit = await prisma.gymLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymLimitCreateManyArgs>(args?: SelectSubset<T, GymLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymLimits and returns the data saved in the database.
     * @param {GymLimitCreateManyAndReturnArgs} args - Arguments to create many GymLimits.
     * @example
     * // Create many GymLimits
     * const gymLimit = await prisma.gymLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymLimits and only return the `id`
     * const gymLimitWithIdOnly = await prisma.gymLimit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, GymLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymLimit.
     * @param {GymLimitDeleteArgs} args - Arguments to delete one GymLimit.
     * @example
     * // Delete one GymLimit
     * const GymLimit = await prisma.gymLimit.delete({
     *   where: {
     *     // ... filter to delete one GymLimit
     *   }
     * })
     * 
     */
    delete<T extends GymLimitDeleteArgs>(args: SelectSubset<T, GymLimitDeleteArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymLimit.
     * @param {GymLimitUpdateArgs} args - Arguments to update one GymLimit.
     * @example
     * // Update one GymLimit
     * const gymLimit = await prisma.gymLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymLimitUpdateArgs>(args: SelectSubset<T, GymLimitUpdateArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymLimits.
     * @param {GymLimitDeleteManyArgs} args - Arguments to filter GymLimits to delete.
     * @example
     * // Delete a few GymLimits
     * const { count } = await prisma.gymLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymLimitDeleteManyArgs>(args?: SelectSubset<T, GymLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymLimits
     * const gymLimit = await prisma.gymLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymLimitUpdateManyArgs>(args: SelectSubset<T, GymLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymLimits and returns the data updated in the database.
     * @param {GymLimitUpdateManyAndReturnArgs} args - Arguments to update many GymLimits.
     * @example
     * // Update many GymLimits
     * const gymLimit = await prisma.gymLimit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymLimits and only return the `id`
     * const gymLimitWithIdOnly = await prisma.gymLimit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymLimitUpdateManyAndReturnArgs>(args: SelectSubset<T, GymLimitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymLimit.
     * @param {GymLimitUpsertArgs} args - Arguments to update or create a GymLimit.
     * @example
     * // Update or create a GymLimit
     * const gymLimit = await prisma.gymLimit.upsert({
     *   create: {
     *     // ... data to create a GymLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymLimit we want to update
     *   }
     * })
     */
    upsert<T extends GymLimitUpsertArgs>(args: SelectSubset<T, GymLimitUpsertArgs<ExtArgs>>): Prisma__GymLimitClient<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitCountArgs} args - Arguments to filter GymLimits to count.
     * @example
     * // Count the number of GymLimits
     * const count = await prisma.gymLimit.count({
     *   where: {
     *     // ... the filter for the GymLimits we want to count
     *   }
     * })
    **/
    count<T extends GymLimitCountArgs>(
      args?: Subset<T, GymLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymLimitAggregateArgs>(args: Subset<T, GymLimitAggregateArgs>): Prisma.PrismaPromise<GetGymLimitAggregateType<T>>

    /**
     * Group by GymLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymLimitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymLimitGroupByArgs['orderBy'] }
        : { orderBy?: GymLimitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymLimit model
   */
  readonly fields: GymLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    limit<T extends LimitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LimitDefaultArgs<ExtArgs>>): Prisma__LimitClient<$Result.GetResult<Prisma.$LimitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GymLimit model
   */
  interface GymLimitFieldRefs {
    readonly id: FieldRef<"GymLimit", 'Int'>
    readonly gym_id: FieldRef<"GymLimit", 'String'>
    readonly limit_id: FieldRef<"GymLimit", 'Int'>
    readonly value: FieldRef<"GymLimit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GymLimit findUnique
   */
  export type GymLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter, which GymLimit to fetch.
     */
    where: GymLimitWhereUniqueInput
  }

  /**
   * GymLimit findUniqueOrThrow
   */
  export type GymLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter, which GymLimit to fetch.
     */
    where: GymLimitWhereUniqueInput
  }

  /**
   * GymLimit findFirst
   */
  export type GymLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter, which GymLimit to fetch.
     */
    where?: GymLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymLimits to fetch.
     */
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymLimits.
     */
    cursor?: GymLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymLimits.
     */
    distinct?: GymLimitScalarFieldEnum | GymLimitScalarFieldEnum[]
  }

  /**
   * GymLimit findFirstOrThrow
   */
  export type GymLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter, which GymLimit to fetch.
     */
    where?: GymLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymLimits to fetch.
     */
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymLimits.
     */
    cursor?: GymLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymLimits.
     */
    distinct?: GymLimitScalarFieldEnum | GymLimitScalarFieldEnum[]
  }

  /**
   * GymLimit findMany
   */
  export type GymLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter, which GymLimits to fetch.
     */
    where?: GymLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymLimits to fetch.
     */
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymLimits.
     */
    cursor?: GymLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymLimits.
     */
    skip?: number
    distinct?: GymLimitScalarFieldEnum | GymLimitScalarFieldEnum[]
  }

  /**
   * GymLimit create
   */
  export type GymLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * The data needed to create a GymLimit.
     */
    data: XOR<GymLimitCreateInput, GymLimitUncheckedCreateInput>
  }

  /**
   * GymLimit createMany
   */
  export type GymLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymLimits.
     */
    data: GymLimitCreateManyInput | GymLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymLimit createManyAndReturn
   */
  export type GymLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * The data used to create many GymLimits.
     */
    data: GymLimitCreateManyInput | GymLimitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymLimit update
   */
  export type GymLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * The data needed to update a GymLimit.
     */
    data: XOR<GymLimitUpdateInput, GymLimitUncheckedUpdateInput>
    /**
     * Choose, which GymLimit to update.
     */
    where: GymLimitWhereUniqueInput
  }

  /**
   * GymLimit updateMany
   */
  export type GymLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymLimits.
     */
    data: XOR<GymLimitUpdateManyMutationInput, GymLimitUncheckedUpdateManyInput>
    /**
     * Filter which GymLimits to update
     */
    where?: GymLimitWhereInput
    /**
     * Limit how many GymLimits to update.
     */
    limit?: number
  }

  /**
   * GymLimit updateManyAndReturn
   */
  export type GymLimitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * The data used to update GymLimits.
     */
    data: XOR<GymLimitUpdateManyMutationInput, GymLimitUncheckedUpdateManyInput>
    /**
     * Filter which GymLimits to update
     */
    where?: GymLimitWhereInput
    /**
     * Limit how many GymLimits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymLimit upsert
   */
  export type GymLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * The filter to search for the GymLimit to update in case it exists.
     */
    where: GymLimitWhereUniqueInput
    /**
     * In case the GymLimit found by the `where` argument doesn't exist, create a new GymLimit with this data.
     */
    create: XOR<GymLimitCreateInput, GymLimitUncheckedCreateInput>
    /**
     * In case the GymLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymLimitUpdateInput, GymLimitUncheckedUpdateInput>
  }

  /**
   * GymLimit delete
   */
  export type GymLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    /**
     * Filter which GymLimit to delete.
     */
    where: GymLimitWhereUniqueInput
  }

  /**
   * GymLimit deleteMany
   */
  export type GymLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymLimits to delete
     */
    where?: GymLimitWhereInput
    /**
     * Limit how many GymLimits to delete.
     */
    limit?: number
  }

  /**
   * GymLimit without action
   */
  export type GymLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
  }


  /**
   * Model GymStats
   */

  export type AggregateGymStats = {
    _count: GymStatsCountAggregateOutputType | null
    _avg: GymStatsAvgAggregateOutputType | null
    _sum: GymStatsSumAggregateOutputType | null
    _min: GymStatsMinAggregateOutputType | null
    _max: GymStatsMaxAggregateOutputType | null
  }

  export type GymStatsAvgAggregateOutputType = {
    total_revenue: Decimal | null
    total_members: number | null
  }

  export type GymStatsSumAggregateOutputType = {
    total_revenue: Decimal | null
    total_members: number | null
  }

  export type GymStatsMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    total_revenue: Decimal | null
    total_members: number | null
    updated_at: Date | null
  }

  export type GymStatsMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    total_revenue: Decimal | null
    total_members: number | null
    updated_at: Date | null
  }

  export type GymStatsCountAggregateOutputType = {
    id: number
    gym_id: number
    total_revenue: number
    total_members: number
    updated_at: number
    _all: number
  }


  export type GymStatsAvgAggregateInputType = {
    total_revenue?: true
    total_members?: true
  }

  export type GymStatsSumAggregateInputType = {
    total_revenue?: true
    total_members?: true
  }

  export type GymStatsMinAggregateInputType = {
    id?: true
    gym_id?: true
    total_revenue?: true
    total_members?: true
    updated_at?: true
  }

  export type GymStatsMaxAggregateInputType = {
    id?: true
    gym_id?: true
    total_revenue?: true
    total_members?: true
    updated_at?: true
  }

  export type GymStatsCountAggregateInputType = {
    id?: true
    gym_id?: true
    total_revenue?: true
    total_members?: true
    updated_at?: true
    _all?: true
  }

  export type GymStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymStats to aggregate.
     */
    where?: GymStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStats to fetch.
     */
    orderBy?: GymStatsOrderByWithRelationInput | GymStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymStats
    **/
    _count?: true | GymStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymStatsMaxAggregateInputType
  }

  export type GetGymStatsAggregateType<T extends GymStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGymStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymStats[P]>
      : GetScalarType<T[P], AggregateGymStats[P]>
  }




  export type GymStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymStatsWhereInput
    orderBy?: GymStatsOrderByWithAggregationInput | GymStatsOrderByWithAggregationInput[]
    by: GymStatsScalarFieldEnum[] | GymStatsScalarFieldEnum
    having?: GymStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymStatsCountAggregateInputType | true
    _avg?: GymStatsAvgAggregateInputType
    _sum?: GymStatsSumAggregateInputType
    _min?: GymStatsMinAggregateInputType
    _max?: GymStatsMaxAggregateInputType
  }

  export type GymStatsGroupByOutputType = {
    id: string
    gym_id: string
    total_revenue: Decimal
    total_members: number
    updated_at: Date
    _count: GymStatsCountAggregateOutputType | null
    _avg: GymStatsAvgAggregateOutputType | null
    _sum: GymStatsSumAggregateOutputType | null
    _min: GymStatsMinAggregateOutputType | null
    _max: GymStatsMaxAggregateOutputType | null
  }

  type GetGymStatsGroupByPayload<T extends GymStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymStatsGroupByOutputType[P]>
            : GetScalarType<T[P], GymStatsGroupByOutputType[P]>
        }
      >
    >


  export type GymStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    total_revenue?: boolean
    total_members?: boolean
    updated_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStats"]>

  export type GymStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    total_revenue?: boolean
    total_members?: boolean
    updated_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStats"]>

  export type GymStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    total_revenue?: boolean
    total_members?: boolean
    updated_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStats"]>

  export type GymStatsSelectScalar = {
    id?: boolean
    gym_id?: boolean
    total_revenue?: boolean
    total_members?: boolean
    updated_at?: boolean
  }

  export type GymStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "total_revenue" | "total_members" | "updated_at", ExtArgs["result"]["gymStats"]>
  export type GymStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type GymStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type GymStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $GymStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymStats"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      total_revenue: Prisma.Decimal
      total_members: number
      updated_at: Date
    }, ExtArgs["result"]["gymStats"]>
    composites: {}
  }

  type GymStatsGetPayload<S extends boolean | null | undefined | GymStatsDefaultArgs> = $Result.GetResult<Prisma.$GymStatsPayload, S>

  type GymStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymStatsCountAggregateInputType | true
    }

  export interface GymStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymStats'], meta: { name: 'GymStats' } }
    /**
     * Find zero or one GymStats that matches the filter.
     * @param {GymStatsFindUniqueArgs} args - Arguments to find a GymStats
     * @example
     * // Get one GymStats
     * const gymStats = await prisma.gymStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymStatsFindUniqueArgs>(args: SelectSubset<T, GymStatsFindUniqueArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymStatsFindUniqueOrThrowArgs} args - Arguments to find a GymStats
     * @example
     * // Get one GymStats
     * const gymStats = await prisma.gymStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GymStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsFindFirstArgs} args - Arguments to find a GymStats
     * @example
     * // Get one GymStats
     * const gymStats = await prisma.gymStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymStatsFindFirstArgs>(args?: SelectSubset<T, GymStatsFindFirstArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsFindFirstOrThrowArgs} args - Arguments to find a GymStats
     * @example
     * // Get one GymStats
     * const gymStats = await prisma.gymStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GymStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymStats
     * const gymStats = await prisma.gymStats.findMany()
     * 
     * // Get first 10 GymStats
     * const gymStats = await prisma.gymStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymStatsWithIdOnly = await prisma.gymStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymStatsFindManyArgs>(args?: SelectSubset<T, GymStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymStats.
     * @param {GymStatsCreateArgs} args - Arguments to create a GymStats.
     * @example
     * // Create one GymStats
     * const GymStats = await prisma.gymStats.create({
     *   data: {
     *     // ... data to create a GymStats
     *   }
     * })
     * 
     */
    create<T extends GymStatsCreateArgs>(args: SelectSubset<T, GymStatsCreateArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymStats.
     * @param {GymStatsCreateManyArgs} args - Arguments to create many GymStats.
     * @example
     * // Create many GymStats
     * const gymStats = await prisma.gymStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymStatsCreateManyArgs>(args?: SelectSubset<T, GymStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymStats and returns the data saved in the database.
     * @param {GymStatsCreateManyAndReturnArgs} args - Arguments to create many GymStats.
     * @example
     * // Create many GymStats
     * const gymStats = await prisma.gymStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymStats and only return the `id`
     * const gymStatsWithIdOnly = await prisma.gymStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GymStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymStats.
     * @param {GymStatsDeleteArgs} args - Arguments to delete one GymStats.
     * @example
     * // Delete one GymStats
     * const GymStats = await prisma.gymStats.delete({
     *   where: {
     *     // ... filter to delete one GymStats
     *   }
     * })
     * 
     */
    delete<T extends GymStatsDeleteArgs>(args: SelectSubset<T, GymStatsDeleteArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymStats.
     * @param {GymStatsUpdateArgs} args - Arguments to update one GymStats.
     * @example
     * // Update one GymStats
     * const gymStats = await prisma.gymStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymStatsUpdateArgs>(args: SelectSubset<T, GymStatsUpdateArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymStats.
     * @param {GymStatsDeleteManyArgs} args - Arguments to filter GymStats to delete.
     * @example
     * // Delete a few GymStats
     * const { count } = await prisma.gymStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymStatsDeleteManyArgs>(args?: SelectSubset<T, GymStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymStats
     * const gymStats = await prisma.gymStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymStatsUpdateManyArgs>(args: SelectSubset<T, GymStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymStats and returns the data updated in the database.
     * @param {GymStatsUpdateManyAndReturnArgs} args - Arguments to update many GymStats.
     * @example
     * // Update many GymStats
     * const gymStats = await prisma.gymStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymStats and only return the `id`
     * const gymStatsWithIdOnly = await prisma.gymStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, GymStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymStats.
     * @param {GymStatsUpsertArgs} args - Arguments to update or create a GymStats.
     * @example
     * // Update or create a GymStats
     * const gymStats = await prisma.gymStats.upsert({
     *   create: {
     *     // ... data to create a GymStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymStats we want to update
     *   }
     * })
     */
    upsert<T extends GymStatsUpsertArgs>(args: SelectSubset<T, GymStatsUpsertArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsCountArgs} args - Arguments to filter GymStats to count.
     * @example
     * // Count the number of GymStats
     * const count = await prisma.gymStats.count({
     *   where: {
     *     // ... the filter for the GymStats we want to count
     *   }
     * })
    **/
    count<T extends GymStatsCountArgs>(
      args?: Subset<T, GymStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymStatsAggregateArgs>(args: Subset<T, GymStatsAggregateArgs>): Prisma.PrismaPromise<GetGymStatsAggregateType<T>>

    /**
     * Group by GymStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymStatsGroupByArgs['orderBy'] }
        : { orderBy?: GymStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymStats model
   */
  readonly fields: GymStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GymStats model
   */
  interface GymStatsFieldRefs {
    readonly id: FieldRef<"GymStats", 'String'>
    readonly gym_id: FieldRef<"GymStats", 'String'>
    readonly total_revenue: FieldRef<"GymStats", 'Decimal'>
    readonly total_members: FieldRef<"GymStats", 'Int'>
    readonly updated_at: FieldRef<"GymStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GymStats findUnique
   */
  export type GymStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter, which GymStats to fetch.
     */
    where: GymStatsWhereUniqueInput
  }

  /**
   * GymStats findUniqueOrThrow
   */
  export type GymStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter, which GymStats to fetch.
     */
    where: GymStatsWhereUniqueInput
  }

  /**
   * GymStats findFirst
   */
  export type GymStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter, which GymStats to fetch.
     */
    where?: GymStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStats to fetch.
     */
    orderBy?: GymStatsOrderByWithRelationInput | GymStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymStats.
     */
    cursor?: GymStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymStats.
     */
    distinct?: GymStatsScalarFieldEnum | GymStatsScalarFieldEnum[]
  }

  /**
   * GymStats findFirstOrThrow
   */
  export type GymStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter, which GymStats to fetch.
     */
    where?: GymStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStats to fetch.
     */
    orderBy?: GymStatsOrderByWithRelationInput | GymStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymStats.
     */
    cursor?: GymStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymStats.
     */
    distinct?: GymStatsScalarFieldEnum | GymStatsScalarFieldEnum[]
  }

  /**
   * GymStats findMany
   */
  export type GymStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter, which GymStats to fetch.
     */
    where?: GymStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStats to fetch.
     */
    orderBy?: GymStatsOrderByWithRelationInput | GymStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymStats.
     */
    cursor?: GymStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStats.
     */
    skip?: number
    distinct?: GymStatsScalarFieldEnum | GymStatsScalarFieldEnum[]
  }

  /**
   * GymStats create
   */
  export type GymStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a GymStats.
     */
    data: XOR<GymStatsCreateInput, GymStatsUncheckedCreateInput>
  }

  /**
   * GymStats createMany
   */
  export type GymStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymStats.
     */
    data: GymStatsCreateManyInput | GymStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymStats createManyAndReturn
   */
  export type GymStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * The data used to create many GymStats.
     */
    data: GymStatsCreateManyInput | GymStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymStats update
   */
  export type GymStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a GymStats.
     */
    data: XOR<GymStatsUpdateInput, GymStatsUncheckedUpdateInput>
    /**
     * Choose, which GymStats to update.
     */
    where: GymStatsWhereUniqueInput
  }

  /**
   * GymStats updateMany
   */
  export type GymStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymStats.
     */
    data: XOR<GymStatsUpdateManyMutationInput, GymStatsUncheckedUpdateManyInput>
    /**
     * Filter which GymStats to update
     */
    where?: GymStatsWhereInput
    /**
     * Limit how many GymStats to update.
     */
    limit?: number
  }

  /**
   * GymStats updateManyAndReturn
   */
  export type GymStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * The data used to update GymStats.
     */
    data: XOR<GymStatsUpdateManyMutationInput, GymStatsUncheckedUpdateManyInput>
    /**
     * Filter which GymStats to update
     */
    where?: GymStatsWhereInput
    /**
     * Limit how many GymStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymStats upsert
   */
  export type GymStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the GymStats to update in case it exists.
     */
    where: GymStatsWhereUniqueInput
    /**
     * In case the GymStats found by the `where` argument doesn't exist, create a new GymStats with this data.
     */
    create: XOR<GymStatsCreateInput, GymStatsUncheckedCreateInput>
    /**
     * In case the GymStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymStatsUpdateInput, GymStatsUncheckedUpdateInput>
  }

  /**
   * GymStats delete
   */
  export type GymStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    /**
     * Filter which GymStats to delete.
     */
    where: GymStatsWhereUniqueInput
  }

  /**
   * GymStats deleteMany
   */
  export type GymStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymStats to delete
     */
    where?: GymStatsWhereInput
    /**
     * Limit how many GymStats to delete.
     */
    limit?: number
  }

  /**
   * GymStats without action
   */
  export type GymStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
  }


  /**
   * Model Revenue
   */

  export type AggregateRevenue = {
    _count: RevenueCountAggregateOutputType | null
    _avg: RevenueAvgAggregateOutputType | null
    _sum: RevenueSumAggregateOutputType | null
    _min: RevenueMinAggregateOutputType | null
    _max: RevenueMaxAggregateOutputType | null
  }

  export type RevenueAvgAggregateOutputType = {
    year: number | null
    month: number | null
    amount: Decimal | null
  }

  export type RevenueSumAggregateOutputType = {
    year: number | null
    month: number | null
    amount: Decimal | null
  }

  export type RevenueMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    year: number | null
    month: number | null
    amount: Decimal | null
    created_at: Date | null
  }

  export type RevenueMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    year: number | null
    month: number | null
    amount: Decimal | null
    created_at: Date | null
  }

  export type RevenueCountAggregateOutputType = {
    id: number
    gym_id: number
    year: number
    month: number
    amount: number
    created_at: number
    _all: number
  }


  export type RevenueAvgAggregateInputType = {
    year?: true
    month?: true
    amount?: true
  }

  export type RevenueSumAggregateInputType = {
    year?: true
    month?: true
    amount?: true
  }

  export type RevenueMinAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    amount?: true
    created_at?: true
  }

  export type RevenueMaxAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    amount?: true
    created_at?: true
  }

  export type RevenueCountAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    amount?: true
    created_at?: true
    _all?: true
  }

  export type RevenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revenue to aggregate.
     */
    where?: RevenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revenues to fetch.
     */
    orderBy?: RevenueOrderByWithRelationInput | RevenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Revenues
    **/
    _count?: true | RevenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenueMaxAggregateInputType
  }

  export type GetRevenueAggregateType<T extends RevenueAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenue[P]>
      : GetScalarType<T[P], AggregateRevenue[P]>
  }




  export type RevenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueWhereInput
    orderBy?: RevenueOrderByWithAggregationInput | RevenueOrderByWithAggregationInput[]
    by: RevenueScalarFieldEnum[] | RevenueScalarFieldEnum
    having?: RevenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenueCountAggregateInputType | true
    _avg?: RevenueAvgAggregateInputType
    _sum?: RevenueSumAggregateInputType
    _min?: RevenueMinAggregateInputType
    _max?: RevenueMaxAggregateInputType
  }

  export type RevenueGroupByOutputType = {
    id: string
    gym_id: string
    year: number
    month: number
    amount: Decimal
    created_at: Date
    _count: RevenueCountAggregateOutputType | null
    _avg: RevenueAvgAggregateOutputType | null
    _sum: RevenueSumAggregateOutputType | null
    _min: RevenueMinAggregateOutputType | null
    _max: RevenueMaxAggregateOutputType | null
  }

  type GetRevenueGroupByPayload<T extends RevenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenueGroupByOutputType[P]>
            : GetScalarType<T[P], RevenueGroupByOutputType[P]>
        }
      >
    >


  export type RevenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    amount?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenue"]>

  export type RevenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    amount?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenue"]>

  export type RevenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    amount?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenue"]>

  export type RevenueSelectScalar = {
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    amount?: boolean
    created_at?: boolean
  }

  export type RevenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "year" | "month" | "amount" | "created_at", ExtArgs["result"]["revenue"]>
  export type RevenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type RevenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type RevenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $RevenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Revenue"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      year: number
      month: number
      amount: Prisma.Decimal
      created_at: Date
    }, ExtArgs["result"]["revenue"]>
    composites: {}
  }

  type RevenueGetPayload<S extends boolean | null | undefined | RevenueDefaultArgs> = $Result.GetResult<Prisma.$RevenuePayload, S>

  type RevenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenueCountAggregateInputType | true
    }

  export interface RevenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Revenue'], meta: { name: 'Revenue' } }
    /**
     * Find zero or one Revenue that matches the filter.
     * @param {RevenueFindUniqueArgs} args - Arguments to find a Revenue
     * @example
     * // Get one Revenue
     * const revenue = await prisma.revenue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenueFindUniqueArgs>(args: SelectSubset<T, RevenueFindUniqueArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Revenue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenueFindUniqueOrThrowArgs} args - Arguments to find a Revenue
     * @example
     * // Get one Revenue
     * const revenue = await prisma.revenue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenueFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revenue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueFindFirstArgs} args - Arguments to find a Revenue
     * @example
     * // Get one Revenue
     * const revenue = await prisma.revenue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenueFindFirstArgs>(args?: SelectSubset<T, RevenueFindFirstArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revenue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueFindFirstOrThrowArgs} args - Arguments to find a Revenue
     * @example
     * // Get one Revenue
     * const revenue = await prisma.revenue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenueFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revenues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revenues
     * const revenues = await prisma.revenue.findMany()
     * 
     * // Get first 10 Revenues
     * const revenues = await prisma.revenue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenueWithIdOnly = await prisma.revenue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenueFindManyArgs>(args?: SelectSubset<T, RevenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Revenue.
     * @param {RevenueCreateArgs} args - Arguments to create a Revenue.
     * @example
     * // Create one Revenue
     * const Revenue = await prisma.revenue.create({
     *   data: {
     *     // ... data to create a Revenue
     *   }
     * })
     * 
     */
    create<T extends RevenueCreateArgs>(args: SelectSubset<T, RevenueCreateArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Revenues.
     * @param {RevenueCreateManyArgs} args - Arguments to create many Revenues.
     * @example
     * // Create many Revenues
     * const revenue = await prisma.revenue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenueCreateManyArgs>(args?: SelectSubset<T, RevenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Revenues and returns the data saved in the database.
     * @param {RevenueCreateManyAndReturnArgs} args - Arguments to create many Revenues.
     * @example
     * // Create many Revenues
     * const revenue = await prisma.revenue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Revenues and only return the `id`
     * const revenueWithIdOnly = await prisma.revenue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenueCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Revenue.
     * @param {RevenueDeleteArgs} args - Arguments to delete one Revenue.
     * @example
     * // Delete one Revenue
     * const Revenue = await prisma.revenue.delete({
     *   where: {
     *     // ... filter to delete one Revenue
     *   }
     * })
     * 
     */
    delete<T extends RevenueDeleteArgs>(args: SelectSubset<T, RevenueDeleteArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Revenue.
     * @param {RevenueUpdateArgs} args - Arguments to update one Revenue.
     * @example
     * // Update one Revenue
     * const revenue = await prisma.revenue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenueUpdateArgs>(args: SelectSubset<T, RevenueUpdateArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Revenues.
     * @param {RevenueDeleteManyArgs} args - Arguments to filter Revenues to delete.
     * @example
     * // Delete a few Revenues
     * const { count } = await prisma.revenue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenueDeleteManyArgs>(args?: SelectSubset<T, RevenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revenues
     * const revenue = await prisma.revenue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenueUpdateManyArgs>(args: SelectSubset<T, RevenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revenues and returns the data updated in the database.
     * @param {RevenueUpdateManyAndReturnArgs} args - Arguments to update many Revenues.
     * @example
     * // Update many Revenues
     * const revenue = await prisma.revenue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Revenues and only return the `id`
     * const revenueWithIdOnly = await prisma.revenue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevenueUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Revenue.
     * @param {RevenueUpsertArgs} args - Arguments to update or create a Revenue.
     * @example
     * // Update or create a Revenue
     * const revenue = await prisma.revenue.upsert({
     *   create: {
     *     // ... data to create a Revenue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revenue we want to update
     *   }
     * })
     */
    upsert<T extends RevenueUpsertArgs>(args: SelectSubset<T, RevenueUpsertArgs<ExtArgs>>): Prisma__RevenueClient<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Revenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueCountArgs} args - Arguments to filter Revenues to count.
     * @example
     * // Count the number of Revenues
     * const count = await prisma.revenue.count({
     *   where: {
     *     // ... the filter for the Revenues we want to count
     *   }
     * })
    **/
    count<T extends RevenueCountArgs>(
      args?: Subset<T, RevenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevenueAggregateArgs>(args: Subset<T, RevenueAggregateArgs>): Prisma.PrismaPromise<GetRevenueAggregateType<T>>

    /**
     * Group by Revenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenueGroupByArgs['orderBy'] }
        : { orderBy?: RevenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Revenue model
   */
  readonly fields: RevenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Revenue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Revenue model
   */
  interface RevenueFieldRefs {
    readonly id: FieldRef<"Revenue", 'String'>
    readonly gym_id: FieldRef<"Revenue", 'String'>
    readonly year: FieldRef<"Revenue", 'Int'>
    readonly month: FieldRef<"Revenue", 'Int'>
    readonly amount: FieldRef<"Revenue", 'Decimal'>
    readonly created_at: FieldRef<"Revenue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Revenue findUnique
   */
  export type RevenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter, which Revenue to fetch.
     */
    where: RevenueWhereUniqueInput
  }

  /**
   * Revenue findUniqueOrThrow
   */
  export type RevenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter, which Revenue to fetch.
     */
    where: RevenueWhereUniqueInput
  }

  /**
   * Revenue findFirst
   */
  export type RevenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter, which Revenue to fetch.
     */
    where?: RevenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revenues to fetch.
     */
    orderBy?: RevenueOrderByWithRelationInput | RevenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revenues.
     */
    cursor?: RevenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revenues.
     */
    distinct?: RevenueScalarFieldEnum | RevenueScalarFieldEnum[]
  }

  /**
   * Revenue findFirstOrThrow
   */
  export type RevenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter, which Revenue to fetch.
     */
    where?: RevenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revenues to fetch.
     */
    orderBy?: RevenueOrderByWithRelationInput | RevenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revenues.
     */
    cursor?: RevenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revenues.
     */
    distinct?: RevenueScalarFieldEnum | RevenueScalarFieldEnum[]
  }

  /**
   * Revenue findMany
   */
  export type RevenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter, which Revenues to fetch.
     */
    where?: RevenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revenues to fetch.
     */
    orderBy?: RevenueOrderByWithRelationInput | RevenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Revenues.
     */
    cursor?: RevenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revenues.
     */
    skip?: number
    distinct?: RevenueScalarFieldEnum | RevenueScalarFieldEnum[]
  }

  /**
   * Revenue create
   */
  export type RevenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Revenue.
     */
    data: XOR<RevenueCreateInput, RevenueUncheckedCreateInput>
  }

  /**
   * Revenue createMany
   */
  export type RevenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Revenues.
     */
    data: RevenueCreateManyInput | RevenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Revenue createManyAndReturn
   */
  export type RevenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * The data used to create many Revenues.
     */
    data: RevenueCreateManyInput | RevenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Revenue update
   */
  export type RevenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Revenue.
     */
    data: XOR<RevenueUpdateInput, RevenueUncheckedUpdateInput>
    /**
     * Choose, which Revenue to update.
     */
    where: RevenueWhereUniqueInput
  }

  /**
   * Revenue updateMany
   */
  export type RevenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Revenues.
     */
    data: XOR<RevenueUpdateManyMutationInput, RevenueUncheckedUpdateManyInput>
    /**
     * Filter which Revenues to update
     */
    where?: RevenueWhereInput
    /**
     * Limit how many Revenues to update.
     */
    limit?: number
  }

  /**
   * Revenue updateManyAndReturn
   */
  export type RevenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * The data used to update Revenues.
     */
    data: XOR<RevenueUpdateManyMutationInput, RevenueUncheckedUpdateManyInput>
    /**
     * Filter which Revenues to update
     */
    where?: RevenueWhereInput
    /**
     * Limit how many Revenues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Revenue upsert
   */
  export type RevenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Revenue to update in case it exists.
     */
    where: RevenueWhereUniqueInput
    /**
     * In case the Revenue found by the `where` argument doesn't exist, create a new Revenue with this data.
     */
    create: XOR<RevenueCreateInput, RevenueUncheckedCreateInput>
    /**
     * In case the Revenue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenueUpdateInput, RevenueUncheckedUpdateInput>
  }

  /**
   * Revenue delete
   */
  export type RevenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    /**
     * Filter which Revenue to delete.
     */
    where: RevenueWhereUniqueInput
  }

  /**
   * Revenue deleteMany
   */
  export type RevenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revenues to delete
     */
    where?: RevenueWhereInput
    /**
     * Limit how many Revenues to delete.
     */
    limit?: number
  }

  /**
   * Revenue without action
   */
  export type RevenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
  }


  /**
   * Model MembershipCount
   */

  export type AggregateMembershipCount = {
    _count: MembershipCountCountAggregateOutputType | null
    _avg: MembershipCountAvgAggregateOutputType | null
    _sum: MembershipCountSumAggregateOutputType | null
    _min: MembershipCountMinAggregateOutputType | null
    _max: MembershipCountMaxAggregateOutputType | null
  }

  export type MembershipCountAvgAggregateOutputType = {
    year: number | null
    month: number | null
    count: number | null
  }

  export type MembershipCountSumAggregateOutputType = {
    year: number | null
    month: number | null
    count: number | null
  }

  export type MembershipCountMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    year: number | null
    month: number | null
    count: number | null
    created_at: Date | null
  }

  export type MembershipCountMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    year: number | null
    month: number | null
    count: number | null
    created_at: Date | null
  }

  export type MembershipCountCountAggregateOutputType = {
    id: number
    gym_id: number
    year: number
    month: number
    count: number
    created_at: number
    _all: number
  }


  export type MembershipCountAvgAggregateInputType = {
    year?: true
    month?: true
    count?: true
  }

  export type MembershipCountSumAggregateInputType = {
    year?: true
    month?: true
    count?: true
  }

  export type MembershipCountMinAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    count?: true
    created_at?: true
  }

  export type MembershipCountMaxAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    count?: true
    created_at?: true
  }

  export type MembershipCountCountAggregateInputType = {
    id?: true
    gym_id?: true
    year?: true
    month?: true
    count?: true
    created_at?: true
    _all?: true
  }

  export type MembershipCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipCount to aggregate.
     */
    where?: MembershipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipCounts to fetch.
     */
    orderBy?: MembershipCountOrderByWithRelationInput | MembershipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembershipCounts
    **/
    _count?: true | MembershipCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipCountMaxAggregateInputType
  }

  export type GetMembershipCountAggregateType<T extends MembershipCountAggregateArgs> = {
        [P in keyof T & keyof AggregateMembershipCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembershipCount[P]>
      : GetScalarType<T[P], AggregateMembershipCount[P]>
  }




  export type MembershipCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipCountWhereInput
    orderBy?: MembershipCountOrderByWithAggregationInput | MembershipCountOrderByWithAggregationInput[]
    by: MembershipCountScalarFieldEnum[] | MembershipCountScalarFieldEnum
    having?: MembershipCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountCountAggregateInputType | true
    _avg?: MembershipCountAvgAggregateInputType
    _sum?: MembershipCountSumAggregateInputType
    _min?: MembershipCountMinAggregateInputType
    _max?: MembershipCountMaxAggregateInputType
  }

  export type MembershipCountGroupByOutputType = {
    id: string
    gym_id: string
    year: number
    month: number
    count: number
    created_at: Date
    _count: MembershipCountCountAggregateOutputType | null
    _avg: MembershipCountAvgAggregateOutputType | null
    _sum: MembershipCountSumAggregateOutputType | null
    _min: MembershipCountMinAggregateOutputType | null
    _max: MembershipCountMaxAggregateOutputType | null
  }

  type GetMembershipCountGroupByPayload<T extends MembershipCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipCountGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipCountGroupByOutputType[P]>
        }
      >
    >


  export type MembershipCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    count?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipCount"]>

  export type MembershipCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    count?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipCount"]>

  export type MembershipCountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    count?: boolean
    created_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membershipCount"]>

  export type MembershipCountSelectScalar = {
    id?: boolean
    gym_id?: boolean
    year?: boolean
    month?: boolean
    count?: boolean
    created_at?: boolean
  }

  export type MembershipCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "year" | "month" | "count" | "created_at", ExtArgs["result"]["membershipCount"]>
  export type MembershipCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type MembershipCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type MembershipCountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $MembershipCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembershipCount"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      year: number
      month: number
      count: number
      created_at: Date
    }, ExtArgs["result"]["membershipCount"]>
    composites: {}
  }

  type MembershipCountGetPayload<S extends boolean | null | undefined | MembershipCountDefaultArgs> = $Result.GetResult<Prisma.$MembershipCountPayload, S>

  type MembershipCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountCountAggregateInputType | true
    }

  export interface MembershipCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembershipCount'], meta: { name: 'MembershipCount' } }
    /**
     * Find zero or one MembershipCount that matches the filter.
     * @param {MembershipCountFindUniqueArgs} args - Arguments to find a MembershipCount
     * @example
     * // Get one MembershipCount
     * const membershipCount = await prisma.membershipCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipCountFindUniqueArgs>(args: SelectSubset<T, MembershipCountFindUniqueArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembershipCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipCountFindUniqueOrThrowArgs} args - Arguments to find a MembershipCount
     * @example
     * // Get one MembershipCount
     * const membershipCount = await prisma.membershipCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipCountFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountFindFirstArgs} args - Arguments to find a MembershipCount
     * @example
     * // Get one MembershipCount
     * const membershipCount = await prisma.membershipCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipCountFindFirstArgs>(args?: SelectSubset<T, MembershipCountFindFirstArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembershipCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountFindFirstOrThrowArgs} args - Arguments to find a MembershipCount
     * @example
     * // Get one MembershipCount
     * const membershipCount = await prisma.membershipCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipCountFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembershipCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembershipCounts
     * const membershipCounts = await prisma.membershipCount.findMany()
     * 
     * // Get first 10 MembershipCounts
     * const membershipCounts = await prisma.membershipCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipCountWithIdOnly = await prisma.membershipCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipCountFindManyArgs>(args?: SelectSubset<T, MembershipCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembershipCount.
     * @param {MembershipCountCreateArgs} args - Arguments to create a MembershipCount.
     * @example
     * // Create one MembershipCount
     * const MembershipCount = await prisma.membershipCount.create({
     *   data: {
     *     // ... data to create a MembershipCount
     *   }
     * })
     * 
     */
    create<T extends MembershipCountCreateArgs>(args: SelectSubset<T, MembershipCountCreateArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembershipCounts.
     * @param {MembershipCountCreateManyArgs} args - Arguments to create many MembershipCounts.
     * @example
     * // Create many MembershipCounts
     * const membershipCount = await prisma.membershipCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCountCreateManyArgs>(args?: SelectSubset<T, MembershipCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MembershipCounts and returns the data saved in the database.
     * @param {MembershipCountCreateManyAndReturnArgs} args - Arguments to create many MembershipCounts.
     * @example
     * // Create many MembershipCounts
     * const membershipCount = await prisma.membershipCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MembershipCounts and only return the `id`
     * const membershipCountWithIdOnly = await prisma.membershipCount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCountCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MembershipCount.
     * @param {MembershipCountDeleteArgs} args - Arguments to delete one MembershipCount.
     * @example
     * // Delete one MembershipCount
     * const MembershipCount = await prisma.membershipCount.delete({
     *   where: {
     *     // ... filter to delete one MembershipCount
     *   }
     * })
     * 
     */
    delete<T extends MembershipCountDeleteArgs>(args: SelectSubset<T, MembershipCountDeleteArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembershipCount.
     * @param {MembershipCountUpdateArgs} args - Arguments to update one MembershipCount.
     * @example
     * // Update one MembershipCount
     * const membershipCount = await prisma.membershipCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipCountUpdateArgs>(args: SelectSubset<T, MembershipCountUpdateArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembershipCounts.
     * @param {MembershipCountDeleteManyArgs} args - Arguments to filter MembershipCounts to delete.
     * @example
     * // Delete a few MembershipCounts
     * const { count } = await prisma.membershipCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipCountDeleteManyArgs>(args?: SelectSubset<T, MembershipCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembershipCounts
     * const membershipCount = await prisma.membershipCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipCountUpdateManyArgs>(args: SelectSubset<T, MembershipCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembershipCounts and returns the data updated in the database.
     * @param {MembershipCountUpdateManyAndReturnArgs} args - Arguments to update many MembershipCounts.
     * @example
     * // Update many MembershipCounts
     * const membershipCount = await prisma.membershipCount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MembershipCounts and only return the `id`
     * const membershipCountWithIdOnly = await prisma.membershipCount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipCountUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipCountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MembershipCount.
     * @param {MembershipCountUpsertArgs} args - Arguments to update or create a MembershipCount.
     * @example
     * // Update or create a MembershipCount
     * const membershipCount = await prisma.membershipCount.upsert({
     *   create: {
     *     // ... data to create a MembershipCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembershipCount we want to update
     *   }
     * })
     */
    upsert<T extends MembershipCountUpsertArgs>(args: SelectSubset<T, MembershipCountUpsertArgs<ExtArgs>>): Prisma__MembershipCountClient<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembershipCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountCountArgs} args - Arguments to filter MembershipCounts to count.
     * @example
     * // Count the number of MembershipCounts
     * const count = await prisma.membershipCount.count({
     *   where: {
     *     // ... the filter for the MembershipCounts we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountCountArgs>(
      args?: Subset<T, MembershipCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembershipCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipCountAggregateArgs>(args: Subset<T, MembershipCountAggregateArgs>): Prisma.PrismaPromise<GetMembershipCountAggregateType<T>>

    /**
     * Group by MembershipCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipCountGroupByArgs['orderBy'] }
        : { orderBy?: MembershipCountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembershipCount model
   */
  readonly fields: MembershipCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembershipCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MembershipCount model
   */
  interface MembershipCountFieldRefs {
    readonly id: FieldRef<"MembershipCount", 'String'>
    readonly gym_id: FieldRef<"MembershipCount", 'String'>
    readonly year: FieldRef<"MembershipCount", 'Int'>
    readonly month: FieldRef<"MembershipCount", 'Int'>
    readonly count: FieldRef<"MembershipCount", 'Int'>
    readonly created_at: FieldRef<"MembershipCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MembershipCount findUnique
   */
  export type MembershipCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter, which MembershipCount to fetch.
     */
    where: MembershipCountWhereUniqueInput
  }

  /**
   * MembershipCount findUniqueOrThrow
   */
  export type MembershipCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter, which MembershipCount to fetch.
     */
    where: MembershipCountWhereUniqueInput
  }

  /**
   * MembershipCount findFirst
   */
  export type MembershipCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter, which MembershipCount to fetch.
     */
    where?: MembershipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipCounts to fetch.
     */
    orderBy?: MembershipCountOrderByWithRelationInput | MembershipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipCounts.
     */
    cursor?: MembershipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipCounts.
     */
    distinct?: MembershipCountScalarFieldEnum | MembershipCountScalarFieldEnum[]
  }

  /**
   * MembershipCount findFirstOrThrow
   */
  export type MembershipCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter, which MembershipCount to fetch.
     */
    where?: MembershipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipCounts to fetch.
     */
    orderBy?: MembershipCountOrderByWithRelationInput | MembershipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembershipCounts.
     */
    cursor?: MembershipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembershipCounts.
     */
    distinct?: MembershipCountScalarFieldEnum | MembershipCountScalarFieldEnum[]
  }

  /**
   * MembershipCount findMany
   */
  export type MembershipCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter, which MembershipCounts to fetch.
     */
    where?: MembershipCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembershipCounts to fetch.
     */
    orderBy?: MembershipCountOrderByWithRelationInput | MembershipCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembershipCounts.
     */
    cursor?: MembershipCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembershipCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembershipCounts.
     */
    skip?: number
    distinct?: MembershipCountScalarFieldEnum | MembershipCountScalarFieldEnum[]
  }

  /**
   * MembershipCount create
   */
  export type MembershipCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * The data needed to create a MembershipCount.
     */
    data: XOR<MembershipCountCreateInput, MembershipCountUncheckedCreateInput>
  }

  /**
   * MembershipCount createMany
   */
  export type MembershipCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembershipCounts.
     */
    data: MembershipCountCreateManyInput | MembershipCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembershipCount createManyAndReturn
   */
  export type MembershipCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * The data used to create many MembershipCounts.
     */
    data: MembershipCountCreateManyInput | MembershipCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipCount update
   */
  export type MembershipCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * The data needed to update a MembershipCount.
     */
    data: XOR<MembershipCountUpdateInput, MembershipCountUncheckedUpdateInput>
    /**
     * Choose, which MembershipCount to update.
     */
    where: MembershipCountWhereUniqueInput
  }

  /**
   * MembershipCount updateMany
   */
  export type MembershipCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembershipCounts.
     */
    data: XOR<MembershipCountUpdateManyMutationInput, MembershipCountUncheckedUpdateManyInput>
    /**
     * Filter which MembershipCounts to update
     */
    where?: MembershipCountWhereInput
    /**
     * Limit how many MembershipCounts to update.
     */
    limit?: number
  }

  /**
   * MembershipCount updateManyAndReturn
   */
  export type MembershipCountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * The data used to update MembershipCounts.
     */
    data: XOR<MembershipCountUpdateManyMutationInput, MembershipCountUncheckedUpdateManyInput>
    /**
     * Filter which MembershipCounts to update
     */
    where?: MembershipCountWhereInput
    /**
     * Limit how many MembershipCounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MembershipCount upsert
   */
  export type MembershipCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * The filter to search for the MembershipCount to update in case it exists.
     */
    where: MembershipCountWhereUniqueInput
    /**
     * In case the MembershipCount found by the `where` argument doesn't exist, create a new MembershipCount with this data.
     */
    create: XOR<MembershipCountCreateInput, MembershipCountUncheckedCreateInput>
    /**
     * In case the MembershipCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipCountUpdateInput, MembershipCountUncheckedUpdateInput>
  }

  /**
   * MembershipCount delete
   */
  export type MembershipCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    /**
     * Filter which MembershipCount to delete.
     */
    where: MembershipCountWhereUniqueInput
  }

  /**
   * MembershipCount deleteMany
   */
  export type MembershipCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembershipCounts to delete
     */
    where?: MembershipCountWhereInput
    /**
     * Limit how many MembershipCounts to delete.
     */
    limit?: number
  }

  /**
   * MembershipCount without action
   */
  export type MembershipCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: $Enums.Role | null
    contact_number: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    role: $Enums.Role | null
    contact_number: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    password: number
    role: number
    contact_number: number
    is_active: number
    created_at: number
    created_by: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    contact_number?: true
    is_active?: true
    created_at?: true
    created_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    contact_number?: true
    is_active?: true
    created_at?: true
    created_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    role?: true
    contact_number?: true
    is_active?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    firstname: string
    lastname: string
    password: string
    role: $Enums.Role
    contact_number: string | null
    is_active: boolean
    created_at: Date
    created_by: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    gym?: boolean | User$gymArgs<ExtArgs>
    gym_staff?: boolean | User$gym_staffArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "firstname" | "lastname" | "password" | "role" | "contact_number" | "is_active" | "created_at" | "created_by", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | User$gymArgs<ExtArgs>
    gym_staff?: boolean | User$gym_staffArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs> | null
      gym_staff: Prisma.$GymStaffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      firstname: string
      lastname: string
      password: string
      role: $Enums.Role
      contact_number: string | null
      is_active: boolean
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends User$gymArgs<ExtArgs> = {}>(args?: Subset<T, User$gymArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gym_staff<T extends User$gym_staffArgs<ExtArgs> = {}>(args?: Subset<T, User$gym_staffArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly contact_number: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly created_by: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gym
   */
  export type User$gymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    where?: GymWhereInput
  }

  /**
   * User.gym_staff
   */
  export type User$gym_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    where?: GymStaffWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    contact_number: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    contact_number: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    contact_number: number
    created_at: number
    created_by: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    contact_number?: true
    created_at?: true
    created_by?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    contact_number?: true
    created_at?: true
    created_by?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    contact_number?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    contact_number: string | null
    created_at: Date
    created_by: string
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    attendance_logs?: boolean | Member$attendance_logsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "contact_number" | "created_at" | "created_by", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    attendance_logs?: boolean | Member$attendance_logsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      attendance_logs: Prisma.$MemberTimeLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      contact_number: string | null
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Member$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Member$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance_logs<T extends Member$attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, Member$attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly firstname: FieldRef<"Member", 'String'>
    readonly lastname: FieldRef<"Member", 'String'>
    readonly contact_number: FieldRef<"Member", 'String'>
    readonly created_at: FieldRef<"Member", 'DateTime'>
    readonly created_by: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.memberships
   */
  export type Member$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Member.attendance_logs
   */
  export type Member$attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    where?: MemberTimeLogsWhereInput
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    cursor?: MemberTimeLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberTimeLogsScalarFieldEnum | MemberTimeLogsScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    location: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    location: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    location: number
    created_at: number
    created_by: number
    _all: number
  }


  export type GymMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    location?: true
    created_at?: true
    created_by?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    location?: true
    created_at?: true
    created_by?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    location?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gym to aggregate.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
    orderBy?: GymOrderByWithAggregationInput | GymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    location: string
    created_at: Date
    created_by: string
    _count: GymCountAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
    gym_stats?: boolean | Gym$gym_statsArgs<ExtArgs>
    revenues?: boolean | Gym$revenuesArgs<ExtArgs>
    staffs?: boolean | Gym$staffsArgs<ExtArgs>
    limits?: boolean | Gym$limitsArgs<ExtArgs>
    audit_logs?: boolean | Gym$audit_logsArgs<ExtArgs>
    membership_counts?: boolean | Gym$membership_countsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "name" | "location" | "created_at" | "created_by", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
    gym_stats?: boolean | Gym$gym_statsArgs<ExtArgs>
    revenues?: boolean | Gym$revenuesArgs<ExtArgs>
    staffs?: boolean | Gym$staffsArgs<ExtArgs>
    limits?: boolean | Gym$limitsArgs<ExtArgs>
    audit_logs?: boolean | Gym$audit_logsArgs<ExtArgs>
    membership_counts?: boolean | Gym$membership_countsArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      member_time_logs: Prisma.$MemberTimeLogsPayload<ExtArgs>[]
      gym_stats: Prisma.$GymStatsPayload<ExtArgs> | null
      revenues: Prisma.$RevenuePayload<ExtArgs>[]
      staffs: Prisma.$GymStaffPayload<ExtArgs>[]
      limits: Prisma.$GymLimitPayload<ExtArgs>[]
      audit_logs: Prisma.$AuditPayload<ExtArgs>[]
      membership_counts: Prisma.$MembershipCountPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      location: string
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }

  type GymGetPayload<S extends boolean | null | undefined | GymDefaultArgs> = $Result.GetResult<Prisma.$GymPayload, S>

  type GymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface GymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gym'], meta: { name: 'Gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymFindUniqueArgs>(args: SelectSubset<T, GymFindUniqueArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymFindUniqueOrThrowArgs>(args: SelectSubset<T, GymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymFindFirstArgs>(args?: SelectSubset<T, GymFindFirstArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymFindFirstOrThrowArgs>(args?: SelectSubset<T, GymFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymFindManyArgs>(args?: SelectSubset<T, GymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
     */
    create<T extends GymCreateArgs>(args: SelectSubset<T, GymCreateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gyms.
     * @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymCreateManyArgs>(args?: SelectSubset<T, GymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gyms and returns the data saved in the database.
     * @param {GymCreateManyAndReturnArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymCreateManyAndReturnArgs>(args?: SelectSubset<T, GymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
     */
    delete<T extends GymDeleteArgs>(args: SelectSubset<T, GymDeleteArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymUpdateArgs>(args: SelectSubset<T, GymUpdateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymDeleteManyArgs>(args?: SelectSubset<T, GymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymUpdateManyArgs>(args: SelectSubset<T, GymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms and returns the data updated in the database.
     * @param {GymUpdateManyAndReturnArgs} args - Arguments to update many Gyms.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymUpdateManyAndReturnArgs>(args: SelectSubset<T, GymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
     */
    upsert<T extends GymUpsertArgs>(args: SelectSubset<T, GymUpsertArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gym model
   */
  readonly fields: GymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Gym$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_time_logs<T extends Gym$member_time_logsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$member_time_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gym_stats<T extends Gym$gym_statsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$gym_statsArgs<ExtArgs>>): Prisma__GymStatsClient<$Result.GetResult<Prisma.$GymStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revenues<T extends Gym$revenuesArgs<ExtArgs> = {}>(args?: Subset<T, Gym$revenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffs<T extends Gym$staffsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    limits<T extends Gym$limitsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$limitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymLimitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends Gym$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membership_counts<T extends Gym$membership_countsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$membership_countsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gym model
   */
  interface GymFieldRefs {
    readonly id: FieldRef<"Gym", 'String'>
    readonly owner_id: FieldRef<"Gym", 'String'>
    readonly name: FieldRef<"Gym", 'String'>
    readonly location: FieldRef<"Gym", 'String'>
    readonly created_at: FieldRef<"Gym", 'DateTime'>
    readonly created_by: FieldRef<"Gym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findUniqueOrThrow
   */
  export type GymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findFirstOrThrow
   */
  export type GymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findMany
   */
  export type GymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter, which Gyms to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym create
   */
  export type GymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to create a Gym.
     */
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }

  /**
   * Gym createMany
   */
  export type GymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym createManyAndReturn
   */
  export type GymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gym update
   */
  export type GymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The data needed to update a Gym.
     */
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym updateManyAndReturn
   */
  export type GymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gym upsert
   */
  export type GymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * The filter to search for the Gym to update in case it exists.
     */
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     */
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }

  /**
   * Gym delete
   */
  export type GymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
    /**
     * Filter which Gym to delete.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gyms to delete
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to delete.
     */
    limit?: number
  }

  /**
   * Gym.memberships
   */
  export type Gym$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Gym.member_time_logs
   */
  export type Gym$member_time_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    where?: MemberTimeLogsWhereInput
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    cursor?: MemberTimeLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberTimeLogsScalarFieldEnum | MemberTimeLogsScalarFieldEnum[]
  }

  /**
   * Gym.gym_stats
   */
  export type Gym$gym_statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStats
     */
    select?: GymStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStats
     */
    omit?: GymStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStatsInclude<ExtArgs> | null
    where?: GymStatsWhereInput
  }

  /**
   * Gym.revenues
   */
  export type Gym$revenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revenue
     */
    select?: RevenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revenue
     */
    omit?: RevenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueInclude<ExtArgs> | null
    where?: RevenueWhereInput
    orderBy?: RevenueOrderByWithRelationInput | RevenueOrderByWithRelationInput[]
    cursor?: RevenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevenueScalarFieldEnum | RevenueScalarFieldEnum[]
  }

  /**
   * Gym.staffs
   */
  export type Gym$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    where?: GymStaffWhereInput
    orderBy?: GymStaffOrderByWithRelationInput | GymStaffOrderByWithRelationInput[]
    cursor?: GymStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymStaffScalarFieldEnum | GymStaffScalarFieldEnum[]
  }

  /**
   * Gym.limits
   */
  export type Gym$limitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymLimit
     */
    select?: GymLimitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymLimit
     */
    omit?: GymLimitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymLimitInclude<ExtArgs> | null
    where?: GymLimitWhereInput
    orderBy?: GymLimitOrderByWithRelationInput | GymLimitOrderByWithRelationInput[]
    cursor?: GymLimitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymLimitScalarFieldEnum | GymLimitScalarFieldEnum[]
  }

  /**
   * Gym.audit_logs
   */
  export type Gym$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    cursor?: AuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Gym.membership_counts
   */
  export type Gym$membership_countsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembershipCount
     */
    select?: MembershipCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembershipCount
     */
    omit?: MembershipCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipCountInclude<ExtArgs> | null
    where?: MembershipCountWhereInput
    orderBy?: MembershipCountOrderByWithRelationInput | MembershipCountOrderByWithRelationInput[]
    cursor?: MembershipCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipCountScalarFieldEnum | MembershipCountScalarFieldEnum[]
  }

  /**
   * Gym without action
   */
  export type GymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInclude<ExtArgs> | null
  }


  /**
   * Model GymStaff
   */

  export type AggregateGymStaff = {
    _count: GymStaffCountAggregateOutputType | null
    _avg: GymStaffAvgAggregateOutputType | null
    _sum: GymStaffSumAggregateOutputType | null
    _min: GymStaffMinAggregateOutputType | null
    _max: GymStaffMaxAggregateOutputType | null
  }

  export type GymStaffAvgAggregateOutputType = {
    id: number | null
  }

  export type GymStaffSumAggregateOutputType = {
    id: number | null
  }

  export type GymStaffMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    gym_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymStaffMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    gym_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymStaffCountAggregateOutputType = {
    id: number
    user_id: number
    gym_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type GymStaffAvgAggregateInputType = {
    id?: true
  }

  export type GymStaffSumAggregateInputType = {
    id?: true
  }

  export type GymStaffMinAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    created_at?: true
    created_by?: true
  }

  export type GymStaffMaxAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    created_at?: true
    created_by?: true
  }

  export type GymStaffCountAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type GymStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymStaff to aggregate.
     */
    where?: GymStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStaffs to fetch.
     */
    orderBy?: GymStaffOrderByWithRelationInput | GymStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymStaffs
    **/
    _count?: true | GymStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymStaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymStaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymStaffMaxAggregateInputType
  }

  export type GetGymStaffAggregateType<T extends GymStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateGymStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymStaff[P]>
      : GetScalarType<T[P], AggregateGymStaff[P]>
  }




  export type GymStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymStaffWhereInput
    orderBy?: GymStaffOrderByWithAggregationInput | GymStaffOrderByWithAggregationInput[]
    by: GymStaffScalarFieldEnum[] | GymStaffScalarFieldEnum
    having?: GymStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymStaffCountAggregateInputType | true
    _avg?: GymStaffAvgAggregateInputType
    _sum?: GymStaffSumAggregateInputType
    _min?: GymStaffMinAggregateInputType
    _max?: GymStaffMaxAggregateInputType
  }

  export type GymStaffGroupByOutputType = {
    id: number
    user_id: string
    gym_id: string
    created_at: Date
    created_by: string
    _count: GymStaffCountAggregateOutputType | null
    _avg: GymStaffAvgAggregateOutputType | null
    _sum: GymStaffSumAggregateOutputType | null
    _min: GymStaffMinAggregateOutputType | null
    _max: GymStaffMaxAggregateOutputType | null
  }

  type GetGymStaffGroupByPayload<T extends GymStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymStaffGroupByOutputType[P]>
            : GetScalarType<T[P], GymStaffGroupByOutputType[P]>
        }
      >
    >


  export type GymStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    created_at?: boolean
    created_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStaff"]>

  export type GymStaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    created_at?: boolean
    created_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStaff"]>

  export type GymStaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    created_at?: boolean
    created_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymStaff"]>

  export type GymStaffSelectScalar = {
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type GymStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gym_id" | "created_at" | "created_by", ExtArgs["result"]["gymStaff"]>
  export type GymStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type GymStaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type GymStaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $GymStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymStaff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      gym_id: string
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["gymStaff"]>
    composites: {}
  }

  type GymStaffGetPayload<S extends boolean | null | undefined | GymStaffDefaultArgs> = $Result.GetResult<Prisma.$GymStaffPayload, S>

  type GymStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymStaffCountAggregateInputType | true
    }

  export interface GymStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymStaff'], meta: { name: 'GymStaff' } }
    /**
     * Find zero or one GymStaff that matches the filter.
     * @param {GymStaffFindUniqueArgs} args - Arguments to find a GymStaff
     * @example
     * // Get one GymStaff
     * const gymStaff = await prisma.gymStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymStaffFindUniqueArgs>(args: SelectSubset<T, GymStaffFindUniqueArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymStaffFindUniqueOrThrowArgs} args - Arguments to find a GymStaff
     * @example
     * // Get one GymStaff
     * const gymStaff = await prisma.gymStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, GymStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffFindFirstArgs} args - Arguments to find a GymStaff
     * @example
     * // Get one GymStaff
     * const gymStaff = await prisma.gymStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymStaffFindFirstArgs>(args?: SelectSubset<T, GymStaffFindFirstArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffFindFirstOrThrowArgs} args - Arguments to find a GymStaff
     * @example
     * // Get one GymStaff
     * const gymStaff = await prisma.gymStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, GymStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymStaffs
     * const gymStaffs = await prisma.gymStaff.findMany()
     * 
     * // Get first 10 GymStaffs
     * const gymStaffs = await prisma.gymStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymStaffWithIdOnly = await prisma.gymStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymStaffFindManyArgs>(args?: SelectSubset<T, GymStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymStaff.
     * @param {GymStaffCreateArgs} args - Arguments to create a GymStaff.
     * @example
     * // Create one GymStaff
     * const GymStaff = await prisma.gymStaff.create({
     *   data: {
     *     // ... data to create a GymStaff
     *   }
     * })
     * 
     */
    create<T extends GymStaffCreateArgs>(args: SelectSubset<T, GymStaffCreateArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymStaffs.
     * @param {GymStaffCreateManyArgs} args - Arguments to create many GymStaffs.
     * @example
     * // Create many GymStaffs
     * const gymStaff = await prisma.gymStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymStaffCreateManyArgs>(args?: SelectSubset<T, GymStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymStaffs and returns the data saved in the database.
     * @param {GymStaffCreateManyAndReturnArgs} args - Arguments to create many GymStaffs.
     * @example
     * // Create many GymStaffs
     * const gymStaff = await prisma.gymStaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymStaffs and only return the `id`
     * const gymStaffWithIdOnly = await prisma.gymStaff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymStaffCreateManyAndReturnArgs>(args?: SelectSubset<T, GymStaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymStaff.
     * @param {GymStaffDeleteArgs} args - Arguments to delete one GymStaff.
     * @example
     * // Delete one GymStaff
     * const GymStaff = await prisma.gymStaff.delete({
     *   where: {
     *     // ... filter to delete one GymStaff
     *   }
     * })
     * 
     */
    delete<T extends GymStaffDeleteArgs>(args: SelectSubset<T, GymStaffDeleteArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymStaff.
     * @param {GymStaffUpdateArgs} args - Arguments to update one GymStaff.
     * @example
     * // Update one GymStaff
     * const gymStaff = await prisma.gymStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymStaffUpdateArgs>(args: SelectSubset<T, GymStaffUpdateArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymStaffs.
     * @param {GymStaffDeleteManyArgs} args - Arguments to filter GymStaffs to delete.
     * @example
     * // Delete a few GymStaffs
     * const { count } = await prisma.gymStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymStaffDeleteManyArgs>(args?: SelectSubset<T, GymStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymStaffs
     * const gymStaff = await prisma.gymStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymStaffUpdateManyArgs>(args: SelectSubset<T, GymStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymStaffs and returns the data updated in the database.
     * @param {GymStaffUpdateManyAndReturnArgs} args - Arguments to update many GymStaffs.
     * @example
     * // Update many GymStaffs
     * const gymStaff = await prisma.gymStaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymStaffs and only return the `id`
     * const gymStaffWithIdOnly = await prisma.gymStaff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymStaffUpdateManyAndReturnArgs>(args: SelectSubset<T, GymStaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymStaff.
     * @param {GymStaffUpsertArgs} args - Arguments to update or create a GymStaff.
     * @example
     * // Update or create a GymStaff
     * const gymStaff = await prisma.gymStaff.upsert({
     *   create: {
     *     // ... data to create a GymStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymStaff we want to update
     *   }
     * })
     */
    upsert<T extends GymStaffUpsertArgs>(args: SelectSubset<T, GymStaffUpsertArgs<ExtArgs>>): Prisma__GymStaffClient<$Result.GetResult<Prisma.$GymStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffCountArgs} args - Arguments to filter GymStaffs to count.
     * @example
     * // Count the number of GymStaffs
     * const count = await prisma.gymStaff.count({
     *   where: {
     *     // ... the filter for the GymStaffs we want to count
     *   }
     * })
    **/
    count<T extends GymStaffCountArgs>(
      args?: Subset<T, GymStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymStaffAggregateArgs>(args: Subset<T, GymStaffAggregateArgs>): Prisma.PrismaPromise<GetGymStaffAggregateType<T>>

    /**
     * Group by GymStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymStaffGroupByArgs['orderBy'] }
        : { orderBy?: GymStaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymStaff model
   */
  readonly fields: GymStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GymStaff model
   */
  interface GymStaffFieldRefs {
    readonly id: FieldRef<"GymStaff", 'Int'>
    readonly user_id: FieldRef<"GymStaff", 'String'>
    readonly gym_id: FieldRef<"GymStaff", 'String'>
    readonly created_at: FieldRef<"GymStaff", 'DateTime'>
    readonly created_by: FieldRef<"GymStaff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GymStaff findUnique
   */
  export type GymStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter, which GymStaff to fetch.
     */
    where: GymStaffWhereUniqueInput
  }

  /**
   * GymStaff findUniqueOrThrow
   */
  export type GymStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter, which GymStaff to fetch.
     */
    where: GymStaffWhereUniqueInput
  }

  /**
   * GymStaff findFirst
   */
  export type GymStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter, which GymStaff to fetch.
     */
    where?: GymStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStaffs to fetch.
     */
    orderBy?: GymStaffOrderByWithRelationInput | GymStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymStaffs.
     */
    cursor?: GymStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymStaffs.
     */
    distinct?: GymStaffScalarFieldEnum | GymStaffScalarFieldEnum[]
  }

  /**
   * GymStaff findFirstOrThrow
   */
  export type GymStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter, which GymStaff to fetch.
     */
    where?: GymStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStaffs to fetch.
     */
    orderBy?: GymStaffOrderByWithRelationInput | GymStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymStaffs.
     */
    cursor?: GymStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymStaffs.
     */
    distinct?: GymStaffScalarFieldEnum | GymStaffScalarFieldEnum[]
  }

  /**
   * GymStaff findMany
   */
  export type GymStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter, which GymStaffs to fetch.
     */
    where?: GymStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymStaffs to fetch.
     */
    orderBy?: GymStaffOrderByWithRelationInput | GymStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymStaffs.
     */
    cursor?: GymStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymStaffs.
     */
    skip?: number
    distinct?: GymStaffScalarFieldEnum | GymStaffScalarFieldEnum[]
  }

  /**
   * GymStaff create
   */
  export type GymStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a GymStaff.
     */
    data: XOR<GymStaffCreateInput, GymStaffUncheckedCreateInput>
  }

  /**
   * GymStaff createMany
   */
  export type GymStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymStaffs.
     */
    data: GymStaffCreateManyInput | GymStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymStaff createManyAndReturn
   */
  export type GymStaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * The data used to create many GymStaffs.
     */
    data: GymStaffCreateManyInput | GymStaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymStaff update
   */
  export type GymStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a GymStaff.
     */
    data: XOR<GymStaffUpdateInput, GymStaffUncheckedUpdateInput>
    /**
     * Choose, which GymStaff to update.
     */
    where: GymStaffWhereUniqueInput
  }

  /**
   * GymStaff updateMany
   */
  export type GymStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymStaffs.
     */
    data: XOR<GymStaffUpdateManyMutationInput, GymStaffUncheckedUpdateManyInput>
    /**
     * Filter which GymStaffs to update
     */
    where?: GymStaffWhereInput
    /**
     * Limit how many GymStaffs to update.
     */
    limit?: number
  }

  /**
   * GymStaff updateManyAndReturn
   */
  export type GymStaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * The data used to update GymStaffs.
     */
    data: XOR<GymStaffUpdateManyMutationInput, GymStaffUncheckedUpdateManyInput>
    /**
     * Filter which GymStaffs to update
     */
    where?: GymStaffWhereInput
    /**
     * Limit how many GymStaffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymStaff upsert
   */
  export type GymStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the GymStaff to update in case it exists.
     */
    where: GymStaffWhereUniqueInput
    /**
     * In case the GymStaff found by the `where` argument doesn't exist, create a new GymStaff with this data.
     */
    create: XOR<GymStaffCreateInput, GymStaffUncheckedCreateInput>
    /**
     * In case the GymStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymStaffUpdateInput, GymStaffUncheckedUpdateInput>
  }

  /**
   * GymStaff delete
   */
  export type GymStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
    /**
     * Filter which GymStaff to delete.
     */
    where: GymStaffWhereUniqueInput
  }

  /**
   * GymStaff deleteMany
   */
  export type GymStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymStaffs to delete
     */
    where?: GymStaffWhereInput
    /**
     * Limit how many GymStaffs to delete.
     */
    limit?: number
  }

  /**
   * GymStaff without action
   */
  export type GymStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymStaff
     */
    select?: GymStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymStaff
     */
    omit?: GymStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymStaffInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipAvgAggregateOutputType = {
    sessions_left: number | null
    amount_paid: Decimal | null
  }

  export type MembershipSumAggregateOutputType = {
    sessions_left: number | null
    amount_paid: Decimal | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    member_id: string | null
    gym_id: string | null
    start_date: Date | null
    end_date: Date | null
    sessions_left: number | null
    is_active: boolean | null
    is_reminded: boolean | null
    plan_name: string | null
    plan_description: string | null
    amount_paid: Decimal | null
    created_at: Date | null
    created_by: string | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    member_id: string | null
    gym_id: string | null
    start_date: Date | null
    end_date: Date | null
    sessions_left: number | null
    is_active: boolean | null
    is_reminded: boolean | null
    plan_name: string | null
    plan_description: string | null
    amount_paid: Decimal | null
    created_at: Date | null
    created_by: string | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    member_id: number
    gym_id: number
    start_date: number
    end_date: number
    sessions_left: number
    is_active: number
    is_reminded: number
    plan_name: number
    plan_description: number
    amount_paid: number
    created_at: number
    created_by: number
    _all: number
  }


  export type MembershipAvgAggregateInputType = {
    sessions_left?: true
    amount_paid?: true
  }

  export type MembershipSumAggregateInputType = {
    sessions_left?: true
    amount_paid?: true
  }

  export type MembershipMinAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    start_date?: true
    end_date?: true
    sessions_left?: true
    is_active?: true
    is_reminded?: true
    plan_name?: true
    plan_description?: true
    amount_paid?: true
    created_at?: true
    created_by?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    start_date?: true
    end_date?: true
    sessions_left?: true
    is_active?: true
    is_reminded?: true
    plan_name?: true
    plan_description?: true
    amount_paid?: true
    created_at?: true
    created_by?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    start_date?: true
    end_date?: true
    sessions_left?: true
    is_active?: true
    is_reminded?: true
    plan_name?: true
    plan_description?: true
    amount_paid?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _avg?: MembershipAvgAggregateInputType
    _sum?: MembershipSumAggregateInputType
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    member_id: string
    gym_id: string
    start_date: Date
    end_date: Date | null
    sessions_left: number | null
    is_active: boolean
    is_reminded: boolean
    plan_name: string
    plan_description: string | null
    amount_paid: Decimal
    created_at: Date
    created_by: string
    _count: MembershipCountAggregateOutputType | null
    _avg: MembershipAvgAggregateOutputType | null
    _sum: MembershipSumAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    start_date?: boolean
    end_date?: boolean
    sessions_left?: boolean
    is_active?: boolean
    is_reminded?: boolean
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    attendance_logs?: boolean | Membership$attendance_logsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    start_date?: boolean
    end_date?: boolean
    sessions_left?: boolean
    is_active?: boolean
    is_reminded?: boolean
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    start_date?: boolean
    end_date?: boolean
    sessions_left?: boolean
    is_active?: boolean
    is_reminded?: boolean
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    start_date?: boolean
    end_date?: boolean
    sessions_left?: boolean
    is_active?: boolean
    is_reminded?: boolean
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "start_date" | "end_date" | "sessions_left" | "is_active" | "is_reminded" | "plan_name" | "plan_description" | "amount_paid" | "created_at" | "created_by", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    attendance_logs?: boolean | Membership$attendance_logsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
      attendance_logs: Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      member_id: string
      gym_id: string
      start_date: Date
      end_date: Date | null
      sessions_left: number | null
      is_active: boolean
      is_reminded: boolean
      plan_name: string
      plan_description: string | null
      amount_paid: Prisma.Decimal
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {MembershipUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendance_logs<T extends Membership$attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly member_id: FieldRef<"Membership", 'String'>
    readonly gym_id: FieldRef<"Membership", 'String'>
    readonly start_date: FieldRef<"Membership", 'DateTime'>
    readonly end_date: FieldRef<"Membership", 'DateTime'>
    readonly sessions_left: FieldRef<"Membership", 'Int'>
    readonly is_active: FieldRef<"Membership", 'Boolean'>
    readonly is_reminded: FieldRef<"Membership", 'Boolean'>
    readonly plan_name: FieldRef<"Membership", 'String'>
    readonly plan_description: FieldRef<"Membership", 'String'>
    readonly amount_paid: FieldRef<"Membership", 'Decimal'>
    readonly created_at: FieldRef<"Membership", 'DateTime'>
    readonly created_by: FieldRef<"Membership", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
  }

  /**
   * Membership updateManyAndReturn
   */
  export type MembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to delete.
     */
    limit?: number
  }

  /**
   * Membership.attendance_logs
   */
  export type Membership$attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    where?: MemberTimeLogsMembershipWhereInput
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberTimeLogsMembershipScalarFieldEnum | MemberTimeLogsMembershipScalarFieldEnum[]
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: Decimal | null
    num_of_days: number | null
    num_of_sessions: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: Decimal | null
    num_of_days: number | null
    num_of_sessions: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    num_of_days: number | null
    num_of_sessions: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    num_of_days: number | null
    num_of_sessions: number | null
    created_at: Date | null
    created_by: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    gym_id: number
    name: number
    description: number
    price: number
    num_of_days: number
    num_of_sessions: number
    created_at: number
    created_by: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    num_of_days?: true
    num_of_sessions?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    num_of_days?: true
    num_of_sessions?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    gym_id?: true
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    created_at?: true
    created_by?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    gym_id?: true
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    created_at?: true
    created_by?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    gym_id?: true
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    gym_id: string
    name: string
    description: string | null
    price: Decimal
    num_of_days: number | null
    num_of_sessions: number | null
    created_at: Date
    created_by: string
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    gym_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "name" | "description" | "price" | "num_of_days" | "num_of_sessions" | "created_at" | "created_by", ExtArgs["result"]["plan"]>

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      num_of_days: number | null
      num_of_sessions: number | null
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly gym_id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly num_of_days: FieldRef<"Plan", 'Int'>
    readonly num_of_sessions: FieldRef<"Plan", 'Int'>
    readonly created_at: FieldRef<"Plan", 'DateTime'>
    readonly created_by: FieldRef<"Plan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
  }


  /**
   * Model MemberTimeLogs
   */

  export type AggregateMemberTimeLogs = {
    _count: MemberTimeLogsCountAggregateOutputType | null
    _avg: MemberTimeLogsAvgAggregateOutputType | null
    _sum: MemberTimeLogsSumAggregateOutputType | null
    _min: MemberTimeLogsMinAggregateOutputType | null
    _max: MemberTimeLogsMaxAggregateOutputType | null
  }

  export type MemberTimeLogsAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberTimeLogsSumAggregateOutputType = {
    id: number | null
  }

  export type MemberTimeLogsMinAggregateOutputType = {
    id: number | null
    member_id: string | null
    gym_id: string | null
    checked_in_at: Date | null
    recorded_by: string | null
  }

  export type MemberTimeLogsMaxAggregateOutputType = {
    id: number | null
    member_id: string | null
    gym_id: string | null
    checked_in_at: Date | null
    recorded_by: string | null
  }

  export type MemberTimeLogsCountAggregateOutputType = {
    id: number
    member_id: number
    gym_id: number
    checked_in_at: number
    recorded_by: number
    _all: number
  }


  export type MemberTimeLogsAvgAggregateInputType = {
    id?: true
  }

  export type MemberTimeLogsSumAggregateInputType = {
    id?: true
  }

  export type MemberTimeLogsMinAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    checked_in_at?: true
    recorded_by?: true
  }

  export type MemberTimeLogsMaxAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    checked_in_at?: true
    recorded_by?: true
  }

  export type MemberTimeLogsCountAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    checked_in_at?: true
    recorded_by?: true
    _all?: true
  }

  export type MemberTimeLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberTimeLogs to aggregate.
     */
    where?: MemberTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogs to fetch.
     */
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberTimeLogs
    **/
    _count?: true | MemberTimeLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberTimeLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberTimeLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberTimeLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberTimeLogsMaxAggregateInputType
  }

  export type GetMemberTimeLogsAggregateType<T extends MemberTimeLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberTimeLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberTimeLogs[P]>
      : GetScalarType<T[P], AggregateMemberTimeLogs[P]>
  }




  export type MemberTimeLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsWhereInput
    orderBy?: MemberTimeLogsOrderByWithAggregationInput | MemberTimeLogsOrderByWithAggregationInput[]
    by: MemberTimeLogsScalarFieldEnum[] | MemberTimeLogsScalarFieldEnum
    having?: MemberTimeLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberTimeLogsCountAggregateInputType | true
    _avg?: MemberTimeLogsAvgAggregateInputType
    _sum?: MemberTimeLogsSumAggregateInputType
    _min?: MemberTimeLogsMinAggregateInputType
    _max?: MemberTimeLogsMaxAggregateInputType
  }

  export type MemberTimeLogsGroupByOutputType = {
    id: number
    member_id: string
    gym_id: string
    checked_in_at: Date
    recorded_by: string
    _count: MemberTimeLogsCountAggregateOutputType | null
    _avg: MemberTimeLogsAvgAggregateOutputType | null
    _sum: MemberTimeLogsSumAggregateOutputType | null
    _min: MemberTimeLogsMinAggregateOutputType | null
    _max: MemberTimeLogsMaxAggregateOutputType | null
  }

  type GetMemberTimeLogsGroupByPayload<T extends MemberTimeLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberTimeLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberTimeLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberTimeLogsGroupByOutputType[P]>
            : GetScalarType<T[P], MemberTimeLogsGroupByOutputType[P]>
        }
      >
    >


  export type MemberTimeLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    recorded_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    memberships?: boolean | MemberTimeLogs$membershipsArgs<ExtArgs>
    _count?: boolean | MemberTimeLogsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogs"]>

  export type MemberTimeLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    recorded_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogs"]>

  export type MemberTimeLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    recorded_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogs"]>

  export type MemberTimeLogsSelectScalar = {
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    recorded_by?: boolean
  }

  export type MemberTimeLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "checked_in_at" | "recorded_by", ExtArgs["result"]["memberTimeLogs"]>
  export type MemberTimeLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    memberships?: boolean | MemberTimeLogs$membershipsArgs<ExtArgs>
    _count?: boolean | MemberTimeLogsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberTimeLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type MemberTimeLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $MemberTimeLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberTimeLogs"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
      memberships: Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member_id: string
      gym_id: string
      checked_in_at: Date
      recorded_by: string
    }, ExtArgs["result"]["memberTimeLogs"]>
    composites: {}
  }

  type MemberTimeLogsGetPayload<S extends boolean | null | undefined | MemberTimeLogsDefaultArgs> = $Result.GetResult<Prisma.$MemberTimeLogsPayload, S>

  type MemberTimeLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberTimeLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberTimeLogsCountAggregateInputType | true
    }

  export interface MemberTimeLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberTimeLogs'], meta: { name: 'MemberTimeLogs' } }
    /**
     * Find zero or one MemberTimeLogs that matches the filter.
     * @param {MemberTimeLogsFindUniqueArgs} args - Arguments to find a MemberTimeLogs
     * @example
     * // Get one MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberTimeLogsFindUniqueArgs>(args: SelectSubset<T, MemberTimeLogsFindUniqueArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberTimeLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberTimeLogsFindUniqueOrThrowArgs} args - Arguments to find a MemberTimeLogs
     * @example
     * // Get one MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberTimeLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberTimeLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberTimeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsFindFirstArgs} args - Arguments to find a MemberTimeLogs
     * @example
     * // Get one MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberTimeLogsFindFirstArgs>(args?: SelectSubset<T, MemberTimeLogsFindFirstArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberTimeLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsFindFirstOrThrowArgs} args - Arguments to find a MemberTimeLogs
     * @example
     * // Get one MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberTimeLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberTimeLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberTimeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findMany()
     * 
     * // Get first 10 MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberTimeLogsWithIdOnly = await prisma.memberTimeLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberTimeLogsFindManyArgs>(args?: SelectSubset<T, MemberTimeLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberTimeLogs.
     * @param {MemberTimeLogsCreateArgs} args - Arguments to create a MemberTimeLogs.
     * @example
     * // Create one MemberTimeLogs
     * const MemberTimeLogs = await prisma.memberTimeLogs.create({
     *   data: {
     *     // ... data to create a MemberTimeLogs
     *   }
     * })
     * 
     */
    create<T extends MemberTimeLogsCreateArgs>(args: SelectSubset<T, MemberTimeLogsCreateArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberTimeLogs.
     * @param {MemberTimeLogsCreateManyArgs} args - Arguments to create many MemberTimeLogs.
     * @example
     * // Create many MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberTimeLogsCreateManyArgs>(args?: SelectSubset<T, MemberTimeLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberTimeLogs and returns the data saved in the database.
     * @param {MemberTimeLogsCreateManyAndReturnArgs} args - Arguments to create many MemberTimeLogs.
     * @example
     * // Create many MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberTimeLogs and only return the `id`
     * const memberTimeLogsWithIdOnly = await prisma.memberTimeLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberTimeLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberTimeLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberTimeLogs.
     * @param {MemberTimeLogsDeleteArgs} args - Arguments to delete one MemberTimeLogs.
     * @example
     * // Delete one MemberTimeLogs
     * const MemberTimeLogs = await prisma.memberTimeLogs.delete({
     *   where: {
     *     // ... filter to delete one MemberTimeLogs
     *   }
     * })
     * 
     */
    delete<T extends MemberTimeLogsDeleteArgs>(args: SelectSubset<T, MemberTimeLogsDeleteArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberTimeLogs.
     * @param {MemberTimeLogsUpdateArgs} args - Arguments to update one MemberTimeLogs.
     * @example
     * // Update one MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberTimeLogsUpdateArgs>(args: SelectSubset<T, MemberTimeLogsUpdateArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberTimeLogs.
     * @param {MemberTimeLogsDeleteManyArgs} args - Arguments to filter MemberTimeLogs to delete.
     * @example
     * // Delete a few MemberTimeLogs
     * const { count } = await prisma.memberTimeLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberTimeLogsDeleteManyArgs>(args?: SelectSubset<T, MemberTimeLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberTimeLogsUpdateManyArgs>(args: SelectSubset<T, MemberTimeLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberTimeLogs and returns the data updated in the database.
     * @param {MemberTimeLogsUpdateManyAndReturnArgs} args - Arguments to update many MemberTimeLogs.
     * @example
     * // Update many MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberTimeLogs and only return the `id`
     * const memberTimeLogsWithIdOnly = await prisma.memberTimeLogs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberTimeLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberTimeLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberTimeLogs.
     * @param {MemberTimeLogsUpsertArgs} args - Arguments to update or create a MemberTimeLogs.
     * @example
     * // Update or create a MemberTimeLogs
     * const memberTimeLogs = await prisma.memberTimeLogs.upsert({
     *   create: {
     *     // ... data to create a MemberTimeLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberTimeLogs we want to update
     *   }
     * })
     */
    upsert<T extends MemberTimeLogsUpsertArgs>(args: SelectSubset<T, MemberTimeLogsUpsertArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsCountArgs} args - Arguments to filter MemberTimeLogs to count.
     * @example
     * // Count the number of MemberTimeLogs
     * const count = await prisma.memberTimeLogs.count({
     *   where: {
     *     // ... the filter for the MemberTimeLogs we want to count
     *   }
     * })
    **/
    count<T extends MemberTimeLogsCountArgs>(
      args?: Subset<T, MemberTimeLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberTimeLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberTimeLogsAggregateArgs>(args: Subset<T, MemberTimeLogsAggregateArgs>): Prisma.PrismaPromise<GetMemberTimeLogsAggregateType<T>>

    /**
     * Group by MemberTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberTimeLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberTimeLogsGroupByArgs['orderBy'] }
        : { orderBy?: MemberTimeLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberTimeLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberTimeLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberTimeLogs model
   */
  readonly fields: MemberTimeLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberTimeLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberTimeLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends MemberTimeLogs$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, MemberTimeLogs$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberTimeLogs model
   */
  interface MemberTimeLogsFieldRefs {
    readonly id: FieldRef<"MemberTimeLogs", 'Int'>
    readonly member_id: FieldRef<"MemberTimeLogs", 'String'>
    readonly gym_id: FieldRef<"MemberTimeLogs", 'String'>
    readonly checked_in_at: FieldRef<"MemberTimeLogs", 'DateTime'>
    readonly recorded_by: FieldRef<"MemberTimeLogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberTimeLogs findUnique
   */
  export type MemberTimeLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogs to fetch.
     */
    where: MemberTimeLogsWhereUniqueInput
  }

  /**
   * MemberTimeLogs findUniqueOrThrow
   */
  export type MemberTimeLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogs to fetch.
     */
    where: MemberTimeLogsWhereUniqueInput
  }

  /**
   * MemberTimeLogs findFirst
   */
  export type MemberTimeLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogs to fetch.
     */
    where?: MemberTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogs to fetch.
     */
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberTimeLogs.
     */
    cursor?: MemberTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberTimeLogs.
     */
    distinct?: MemberTimeLogsScalarFieldEnum | MemberTimeLogsScalarFieldEnum[]
  }

  /**
   * MemberTimeLogs findFirstOrThrow
   */
  export type MemberTimeLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogs to fetch.
     */
    where?: MemberTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogs to fetch.
     */
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberTimeLogs.
     */
    cursor?: MemberTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberTimeLogs.
     */
    distinct?: MemberTimeLogsScalarFieldEnum | MemberTimeLogsScalarFieldEnum[]
  }

  /**
   * MemberTimeLogs findMany
   */
  export type MemberTimeLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogs to fetch.
     */
    where?: MemberTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogs to fetch.
     */
    orderBy?: MemberTimeLogsOrderByWithRelationInput | MemberTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberTimeLogs.
     */
    cursor?: MemberTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogs.
     */
    skip?: number
    distinct?: MemberTimeLogsScalarFieldEnum | MemberTimeLogsScalarFieldEnum[]
  }

  /**
   * MemberTimeLogs create
   */
  export type MemberTimeLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberTimeLogs.
     */
    data: XOR<MemberTimeLogsCreateInput, MemberTimeLogsUncheckedCreateInput>
  }

  /**
   * MemberTimeLogs createMany
   */
  export type MemberTimeLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberTimeLogs.
     */
    data: MemberTimeLogsCreateManyInput | MemberTimeLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberTimeLogs createManyAndReturn
   */
  export type MemberTimeLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * The data used to create many MemberTimeLogs.
     */
    data: MemberTimeLogsCreateManyInput | MemberTimeLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberTimeLogs update
   */
  export type MemberTimeLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberTimeLogs.
     */
    data: XOR<MemberTimeLogsUpdateInput, MemberTimeLogsUncheckedUpdateInput>
    /**
     * Choose, which MemberTimeLogs to update.
     */
    where: MemberTimeLogsWhereUniqueInput
  }

  /**
   * MemberTimeLogs updateMany
   */
  export type MemberTimeLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberTimeLogs.
     */
    data: XOR<MemberTimeLogsUpdateManyMutationInput, MemberTimeLogsUncheckedUpdateManyInput>
    /**
     * Filter which MemberTimeLogs to update
     */
    where?: MemberTimeLogsWhereInput
    /**
     * Limit how many MemberTimeLogs to update.
     */
    limit?: number
  }

  /**
   * MemberTimeLogs updateManyAndReturn
   */
  export type MemberTimeLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * The data used to update MemberTimeLogs.
     */
    data: XOR<MemberTimeLogsUpdateManyMutationInput, MemberTimeLogsUncheckedUpdateManyInput>
    /**
     * Filter which MemberTimeLogs to update
     */
    where?: MemberTimeLogsWhereInput
    /**
     * Limit how many MemberTimeLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberTimeLogs upsert
   */
  export type MemberTimeLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberTimeLogs to update in case it exists.
     */
    where: MemberTimeLogsWhereUniqueInput
    /**
     * In case the MemberTimeLogs found by the `where` argument doesn't exist, create a new MemberTimeLogs with this data.
     */
    create: XOR<MemberTimeLogsCreateInput, MemberTimeLogsUncheckedCreateInput>
    /**
     * In case the MemberTimeLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberTimeLogsUpdateInput, MemberTimeLogsUncheckedUpdateInput>
  }

  /**
   * MemberTimeLogs delete
   */
  export type MemberTimeLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
    /**
     * Filter which MemberTimeLogs to delete.
     */
    where: MemberTimeLogsWhereUniqueInput
  }

  /**
   * MemberTimeLogs deleteMany
   */
  export type MemberTimeLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberTimeLogs to delete
     */
    where?: MemberTimeLogsWhereInput
    /**
     * Limit how many MemberTimeLogs to delete.
     */
    limit?: number
  }

  /**
   * MemberTimeLogs.memberships
   */
  export type MemberTimeLogs$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    where?: MemberTimeLogsMembershipWhereInput
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberTimeLogsMembershipScalarFieldEnum | MemberTimeLogsMembershipScalarFieldEnum[]
  }

  /**
   * MemberTimeLogs without action
   */
  export type MemberTimeLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogs
     */
    select?: MemberTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogs
     */
    omit?: MemberTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsInclude<ExtArgs> | null
  }


  /**
   * Model MemberTimeLogsMembership
   */

  export type AggregateMemberTimeLogsMembership = {
    _count: MemberTimeLogsMembershipCountAggregateOutputType | null
    _avg: MemberTimeLogsMembershipAvgAggregateOutputType | null
    _sum: MemberTimeLogsMembershipSumAggregateOutputType | null
    _min: MemberTimeLogsMembershipMinAggregateOutputType | null
    _max: MemberTimeLogsMembershipMaxAggregateOutputType | null
  }

  export type MemberTimeLogsMembershipAvgAggregateOutputType = {
    id: number | null
    member_time_log_id: number | null
  }

  export type MemberTimeLogsMembershipSumAggregateOutputType = {
    id: number | null
    member_time_log_id: number | null
  }

  export type MemberTimeLogsMembershipMinAggregateOutputType = {
    id: number | null
    member_time_log_id: number | null
    membership_id: string | null
  }

  export type MemberTimeLogsMembershipMaxAggregateOutputType = {
    id: number | null
    member_time_log_id: number | null
    membership_id: string | null
  }

  export type MemberTimeLogsMembershipCountAggregateOutputType = {
    id: number
    member_time_log_id: number
    membership_id: number
    _all: number
  }


  export type MemberTimeLogsMembershipAvgAggregateInputType = {
    id?: true
    member_time_log_id?: true
  }

  export type MemberTimeLogsMembershipSumAggregateInputType = {
    id?: true
    member_time_log_id?: true
  }

  export type MemberTimeLogsMembershipMinAggregateInputType = {
    id?: true
    member_time_log_id?: true
    membership_id?: true
  }

  export type MemberTimeLogsMembershipMaxAggregateInputType = {
    id?: true
    member_time_log_id?: true
    membership_id?: true
  }

  export type MemberTimeLogsMembershipCountAggregateInputType = {
    id?: true
    member_time_log_id?: true
    membership_id?: true
    _all?: true
  }

  export type MemberTimeLogsMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberTimeLogsMembership to aggregate.
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogsMemberships to fetch.
     */
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogsMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogsMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberTimeLogsMemberships
    **/
    _count?: true | MemberTimeLogsMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberTimeLogsMembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberTimeLogsMembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberTimeLogsMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberTimeLogsMembershipMaxAggregateInputType
  }

  export type GetMemberTimeLogsMembershipAggregateType<T extends MemberTimeLogsMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberTimeLogsMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberTimeLogsMembership[P]>
      : GetScalarType<T[P], AggregateMemberTimeLogsMembership[P]>
  }




  export type MemberTimeLogsMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsMembershipWhereInput
    orderBy?: MemberTimeLogsMembershipOrderByWithAggregationInput | MemberTimeLogsMembershipOrderByWithAggregationInput[]
    by: MemberTimeLogsMembershipScalarFieldEnum[] | MemberTimeLogsMembershipScalarFieldEnum
    having?: MemberTimeLogsMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberTimeLogsMembershipCountAggregateInputType | true
    _avg?: MemberTimeLogsMembershipAvgAggregateInputType
    _sum?: MemberTimeLogsMembershipSumAggregateInputType
    _min?: MemberTimeLogsMembershipMinAggregateInputType
    _max?: MemberTimeLogsMembershipMaxAggregateInputType
  }

  export type MemberTimeLogsMembershipGroupByOutputType = {
    id: number
    member_time_log_id: number
    membership_id: string
    _count: MemberTimeLogsMembershipCountAggregateOutputType | null
    _avg: MemberTimeLogsMembershipAvgAggregateOutputType | null
    _sum: MemberTimeLogsMembershipSumAggregateOutputType | null
    _min: MemberTimeLogsMembershipMinAggregateOutputType | null
    _max: MemberTimeLogsMembershipMaxAggregateOutputType | null
  }

  type GetMemberTimeLogsMembershipGroupByPayload<T extends MemberTimeLogsMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberTimeLogsMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberTimeLogsMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberTimeLogsMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MemberTimeLogsMembershipGroupByOutputType[P]>
        }
      >
    >


  export type MemberTimeLogsMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_time_log_id?: boolean
    membership_id?: boolean
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogsMembership"]>

  export type MemberTimeLogsMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_time_log_id?: boolean
    membership_id?: boolean
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogsMembership"]>

  export type MemberTimeLogsMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_time_log_id?: boolean
    membership_id?: boolean
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberTimeLogsMembership"]>

  export type MemberTimeLogsMembershipSelectScalar = {
    id?: boolean
    member_time_log_id?: boolean
    membership_id?: boolean
  }

  export type MemberTimeLogsMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_time_log_id" | "membership_id", ExtArgs["result"]["memberTimeLogsMembership"]>
  export type MemberTimeLogsMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }
  export type MemberTimeLogsMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }
  export type MemberTimeLogsMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_time_log?: boolean | MemberTimeLogsDefaultArgs<ExtArgs>
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }

  export type $MemberTimeLogsMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberTimeLogsMembership"
    objects: {
      member_time_log: Prisma.$MemberTimeLogsPayload<ExtArgs>
      membership: Prisma.$MembershipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member_time_log_id: number
      membership_id: string
    }, ExtArgs["result"]["memberTimeLogsMembership"]>
    composites: {}
  }

  type MemberTimeLogsMembershipGetPayload<S extends boolean | null | undefined | MemberTimeLogsMembershipDefaultArgs> = $Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload, S>

  type MemberTimeLogsMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberTimeLogsMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberTimeLogsMembershipCountAggregateInputType | true
    }

  export interface MemberTimeLogsMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberTimeLogsMembership'], meta: { name: 'MemberTimeLogsMembership' } }
    /**
     * Find zero or one MemberTimeLogsMembership that matches the filter.
     * @param {MemberTimeLogsMembershipFindUniqueArgs} args - Arguments to find a MemberTimeLogsMembership
     * @example
     * // Get one MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberTimeLogsMembershipFindUniqueArgs>(args: SelectSubset<T, MemberTimeLogsMembershipFindUniqueArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberTimeLogsMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberTimeLogsMembershipFindUniqueOrThrowArgs} args - Arguments to find a MemberTimeLogsMembership
     * @example
     * // Get one MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberTimeLogsMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberTimeLogsMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberTimeLogsMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipFindFirstArgs} args - Arguments to find a MemberTimeLogsMembership
     * @example
     * // Get one MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberTimeLogsMembershipFindFirstArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipFindFirstArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberTimeLogsMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipFindFirstOrThrowArgs} args - Arguments to find a MemberTimeLogsMembership
     * @example
     * // Get one MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberTimeLogsMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberTimeLogsMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberTimeLogsMemberships
     * const memberTimeLogsMemberships = await prisma.memberTimeLogsMembership.findMany()
     * 
     * // Get first 10 MemberTimeLogsMemberships
     * const memberTimeLogsMemberships = await prisma.memberTimeLogsMembership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberTimeLogsMembershipWithIdOnly = await prisma.memberTimeLogsMembership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberTimeLogsMembershipFindManyArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberTimeLogsMembership.
     * @param {MemberTimeLogsMembershipCreateArgs} args - Arguments to create a MemberTimeLogsMembership.
     * @example
     * // Create one MemberTimeLogsMembership
     * const MemberTimeLogsMembership = await prisma.memberTimeLogsMembership.create({
     *   data: {
     *     // ... data to create a MemberTimeLogsMembership
     *   }
     * })
     * 
     */
    create<T extends MemberTimeLogsMembershipCreateArgs>(args: SelectSubset<T, MemberTimeLogsMembershipCreateArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberTimeLogsMemberships.
     * @param {MemberTimeLogsMembershipCreateManyArgs} args - Arguments to create many MemberTimeLogsMemberships.
     * @example
     * // Create many MemberTimeLogsMemberships
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberTimeLogsMembershipCreateManyArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberTimeLogsMemberships and returns the data saved in the database.
     * @param {MemberTimeLogsMembershipCreateManyAndReturnArgs} args - Arguments to create many MemberTimeLogsMemberships.
     * @example
     * // Create many MemberTimeLogsMemberships
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberTimeLogsMemberships and only return the `id`
     * const memberTimeLogsMembershipWithIdOnly = await prisma.memberTimeLogsMembership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberTimeLogsMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberTimeLogsMembership.
     * @param {MemberTimeLogsMembershipDeleteArgs} args - Arguments to delete one MemberTimeLogsMembership.
     * @example
     * // Delete one MemberTimeLogsMembership
     * const MemberTimeLogsMembership = await prisma.memberTimeLogsMembership.delete({
     *   where: {
     *     // ... filter to delete one MemberTimeLogsMembership
     *   }
     * })
     * 
     */
    delete<T extends MemberTimeLogsMembershipDeleteArgs>(args: SelectSubset<T, MemberTimeLogsMembershipDeleteArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberTimeLogsMembership.
     * @param {MemberTimeLogsMembershipUpdateArgs} args - Arguments to update one MemberTimeLogsMembership.
     * @example
     * // Update one MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberTimeLogsMembershipUpdateArgs>(args: SelectSubset<T, MemberTimeLogsMembershipUpdateArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberTimeLogsMemberships.
     * @param {MemberTimeLogsMembershipDeleteManyArgs} args - Arguments to filter MemberTimeLogsMemberships to delete.
     * @example
     * // Delete a few MemberTimeLogsMemberships
     * const { count } = await prisma.memberTimeLogsMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberTimeLogsMembershipDeleteManyArgs>(args?: SelectSubset<T, MemberTimeLogsMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberTimeLogsMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberTimeLogsMemberships
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberTimeLogsMembershipUpdateManyArgs>(args: SelectSubset<T, MemberTimeLogsMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberTimeLogsMemberships and returns the data updated in the database.
     * @param {MemberTimeLogsMembershipUpdateManyAndReturnArgs} args - Arguments to update many MemberTimeLogsMemberships.
     * @example
     * // Update many MemberTimeLogsMemberships
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberTimeLogsMemberships and only return the `id`
     * const memberTimeLogsMembershipWithIdOnly = await prisma.memberTimeLogsMembership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberTimeLogsMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberTimeLogsMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberTimeLogsMembership.
     * @param {MemberTimeLogsMembershipUpsertArgs} args - Arguments to update or create a MemberTimeLogsMembership.
     * @example
     * // Update or create a MemberTimeLogsMembership
     * const memberTimeLogsMembership = await prisma.memberTimeLogsMembership.upsert({
     *   create: {
     *     // ... data to create a MemberTimeLogsMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberTimeLogsMembership we want to update
     *   }
     * })
     */
    upsert<T extends MemberTimeLogsMembershipUpsertArgs>(args: SelectSubset<T, MemberTimeLogsMembershipUpsertArgs<ExtArgs>>): Prisma__MemberTimeLogsMembershipClient<$Result.GetResult<Prisma.$MemberTimeLogsMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberTimeLogsMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipCountArgs} args - Arguments to filter MemberTimeLogsMemberships to count.
     * @example
     * // Count the number of MemberTimeLogsMemberships
     * const count = await prisma.memberTimeLogsMembership.count({
     *   where: {
     *     // ... the filter for the MemberTimeLogsMemberships we want to count
     *   }
     * })
    **/
    count<T extends MemberTimeLogsMembershipCountArgs>(
      args?: Subset<T, MemberTimeLogsMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberTimeLogsMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberTimeLogsMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberTimeLogsMembershipAggregateArgs>(args: Subset<T, MemberTimeLogsMembershipAggregateArgs>): Prisma.PrismaPromise<GetMemberTimeLogsMembershipAggregateType<T>>

    /**
     * Group by MemberTimeLogsMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberTimeLogsMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberTimeLogsMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberTimeLogsMembershipGroupByArgs['orderBy'] }
        : { orderBy?: MemberTimeLogsMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberTimeLogsMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberTimeLogsMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberTimeLogsMembership model
   */
  readonly fields: MemberTimeLogsMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberTimeLogsMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberTimeLogsMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member_time_log<T extends MemberTimeLogsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberTimeLogsDefaultArgs<ExtArgs>>): Prisma__MemberTimeLogsClient<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membership<T extends MembershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembershipDefaultArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberTimeLogsMembership model
   */
  interface MemberTimeLogsMembershipFieldRefs {
    readonly id: FieldRef<"MemberTimeLogsMembership", 'Int'>
    readonly member_time_log_id: FieldRef<"MemberTimeLogsMembership", 'Int'>
    readonly membership_id: FieldRef<"MemberTimeLogsMembership", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberTimeLogsMembership findUnique
   */
  export type MemberTimeLogsMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogsMembership to fetch.
     */
    where: MemberTimeLogsMembershipWhereUniqueInput
  }

  /**
   * MemberTimeLogsMembership findUniqueOrThrow
   */
  export type MemberTimeLogsMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogsMembership to fetch.
     */
    where: MemberTimeLogsMembershipWhereUniqueInput
  }

  /**
   * MemberTimeLogsMembership findFirst
   */
  export type MemberTimeLogsMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogsMembership to fetch.
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogsMemberships to fetch.
     */
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberTimeLogsMemberships.
     */
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogsMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogsMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberTimeLogsMemberships.
     */
    distinct?: MemberTimeLogsMembershipScalarFieldEnum | MemberTimeLogsMembershipScalarFieldEnum[]
  }

  /**
   * MemberTimeLogsMembership findFirstOrThrow
   */
  export type MemberTimeLogsMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogsMembership to fetch.
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogsMemberships to fetch.
     */
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberTimeLogsMemberships.
     */
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogsMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogsMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberTimeLogsMemberships.
     */
    distinct?: MemberTimeLogsMembershipScalarFieldEnum | MemberTimeLogsMembershipScalarFieldEnum[]
  }

  /**
   * MemberTimeLogsMembership findMany
   */
  export type MemberTimeLogsMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter, which MemberTimeLogsMemberships to fetch.
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberTimeLogsMemberships to fetch.
     */
    orderBy?: MemberTimeLogsMembershipOrderByWithRelationInput | MemberTimeLogsMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberTimeLogsMemberships.
     */
    cursor?: MemberTimeLogsMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberTimeLogsMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberTimeLogsMemberships.
     */
    skip?: number
    distinct?: MemberTimeLogsMembershipScalarFieldEnum | MemberTimeLogsMembershipScalarFieldEnum[]
  }

  /**
   * MemberTimeLogsMembership create
   */
  export type MemberTimeLogsMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberTimeLogsMembership.
     */
    data: XOR<MemberTimeLogsMembershipCreateInput, MemberTimeLogsMembershipUncheckedCreateInput>
  }

  /**
   * MemberTimeLogsMembership createMany
   */
  export type MemberTimeLogsMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberTimeLogsMemberships.
     */
    data: MemberTimeLogsMembershipCreateManyInput | MemberTimeLogsMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberTimeLogsMembership createManyAndReturn
   */
  export type MemberTimeLogsMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many MemberTimeLogsMemberships.
     */
    data: MemberTimeLogsMembershipCreateManyInput | MemberTimeLogsMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberTimeLogsMembership update
   */
  export type MemberTimeLogsMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberTimeLogsMembership.
     */
    data: XOR<MemberTimeLogsMembershipUpdateInput, MemberTimeLogsMembershipUncheckedUpdateInput>
    /**
     * Choose, which MemberTimeLogsMembership to update.
     */
    where: MemberTimeLogsMembershipWhereUniqueInput
  }

  /**
   * MemberTimeLogsMembership updateMany
   */
  export type MemberTimeLogsMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberTimeLogsMemberships.
     */
    data: XOR<MemberTimeLogsMembershipUpdateManyMutationInput, MemberTimeLogsMembershipUncheckedUpdateManyInput>
    /**
     * Filter which MemberTimeLogsMemberships to update
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * Limit how many MemberTimeLogsMemberships to update.
     */
    limit?: number
  }

  /**
   * MemberTimeLogsMembership updateManyAndReturn
   */
  export type MemberTimeLogsMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * The data used to update MemberTimeLogsMemberships.
     */
    data: XOR<MemberTimeLogsMembershipUpdateManyMutationInput, MemberTimeLogsMembershipUncheckedUpdateManyInput>
    /**
     * Filter which MemberTimeLogsMemberships to update
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * Limit how many MemberTimeLogsMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberTimeLogsMembership upsert
   */
  export type MemberTimeLogsMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberTimeLogsMembership to update in case it exists.
     */
    where: MemberTimeLogsMembershipWhereUniqueInput
    /**
     * In case the MemberTimeLogsMembership found by the `where` argument doesn't exist, create a new MemberTimeLogsMembership with this data.
     */
    create: XOR<MemberTimeLogsMembershipCreateInput, MemberTimeLogsMembershipUncheckedCreateInput>
    /**
     * In case the MemberTimeLogsMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberTimeLogsMembershipUpdateInput, MemberTimeLogsMembershipUncheckedUpdateInput>
  }

  /**
   * MemberTimeLogsMembership delete
   */
  export type MemberTimeLogsMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
    /**
     * Filter which MemberTimeLogsMembership to delete.
     */
    where: MemberTimeLogsMembershipWhereUniqueInput
  }

  /**
   * MemberTimeLogsMembership deleteMany
   */
  export type MemberTimeLogsMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberTimeLogsMemberships to delete
     */
    where?: MemberTimeLogsMembershipWhereInput
    /**
     * Limit how many MemberTimeLogsMemberships to delete.
     */
    limit?: number
  }

  /**
   * MemberTimeLogsMembership without action
   */
  export type MemberTimeLogsMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberTimeLogsMembership
     */
    select?: MemberTimeLogsMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberTimeLogsMembership
     */
    omit?: MemberTimeLogsMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberTimeLogsMembershipInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuditScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    username: 'username',
    table: 'table',
    action: 'action',
    reference_id: 'reference_id',
    metadata: 'metadata',
    ip_address: 'ip_address',
    device_info: 'device_info',
    created_at: 'created_at',
    notes: 'notes'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const LimitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type LimitScalarFieldEnum = (typeof LimitScalarFieldEnum)[keyof typeof LimitScalarFieldEnum]


  export const GymLimitScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    limit_id: 'limit_id',
    value: 'value'
  };

  export type GymLimitScalarFieldEnum = (typeof GymLimitScalarFieldEnum)[keyof typeof GymLimitScalarFieldEnum]


  export const GymStatsScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    total_revenue: 'total_revenue',
    total_members: 'total_members',
    updated_at: 'updated_at'
  };

  export type GymStatsScalarFieldEnum = (typeof GymStatsScalarFieldEnum)[keyof typeof GymStatsScalarFieldEnum]


  export const RevenueScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    year: 'year',
    month: 'month',
    amount: 'amount',
    created_at: 'created_at'
  };

  export type RevenueScalarFieldEnum = (typeof RevenueScalarFieldEnum)[keyof typeof RevenueScalarFieldEnum]


  export const MembershipCountScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    year: 'year',
    month: 'month',
    count: 'count',
    created_at: 'created_at'
  };

  export type MembershipCountScalarFieldEnum = (typeof MembershipCountScalarFieldEnum)[keyof typeof MembershipCountScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    role: 'role',
    contact_number: 'contact_number',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    contact_number: 'contact_number',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    location: 'location',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const GymStaffScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    gym_id: 'gym_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type GymStaffScalarFieldEnum = (typeof GymStaffScalarFieldEnum)[keyof typeof GymStaffScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    start_date: 'start_date',
    end_date: 'end_date',
    sessions_left: 'sessions_left',
    is_active: 'is_active',
    is_reminded: 'is_reminded',
    plan_name: 'plan_name',
    plan_description: 'plan_description',
    amount_paid: 'amount_paid',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    name: 'name',
    description: 'description',
    price: 'price',
    num_of_days: 'num_of_days',
    num_of_sessions: 'num_of_sessions',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const MemberTimeLogsScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    checked_in_at: 'checked_in_at',
    recorded_by: 'recorded_by'
  };

  export type MemberTimeLogsScalarFieldEnum = (typeof MemberTimeLogsScalarFieldEnum)[keyof typeof MemberTimeLogsScalarFieldEnum]


  export const MemberTimeLogsMembershipScalarFieldEnum: {
    id: 'id',
    member_time_log_id: 'member_time_log_id',
    membership_id: 'membership_id'
  };

  export type MemberTimeLogsMembershipScalarFieldEnum = (typeof MemberTimeLogsMembershipScalarFieldEnum)[keyof typeof MemberTimeLogsMembershipScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuditWhereInput = {
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    id?: StringFilter<"Audit"> | string
    gym_id?: StringNullableFilter<"Audit"> | string | null
    username?: StringFilter<"Audit"> | string
    table?: StringFilter<"Audit"> | string
    action?: StringFilter<"Audit"> | string
    reference_id?: StringNullableFilter<"Audit"> | string | null
    metadata?: JsonNullableFilter<"Audit">
    ip_address?: StringNullableFilter<"Audit"> | string | null
    device_info?: JsonNullableFilter<"Audit">
    created_at?: DateTimeFilter<"Audit"> | Date | string
    notes?: StringNullableFilter<"Audit"> | string | null
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
  }

  export type AuditOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrderInput | SortOrder
    username?: SortOrder
    table?: SortOrder
    action?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    notes?: SortOrderInput | SortOrder
    gym?: GymOrderByWithRelationInput
  }

  export type AuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    gym_id?: StringNullableFilter<"Audit"> | string | null
    username?: StringFilter<"Audit"> | string
    table?: StringFilter<"Audit"> | string
    action?: StringFilter<"Audit"> | string
    reference_id?: StringNullableFilter<"Audit"> | string | null
    metadata?: JsonNullableFilter<"Audit">
    ip_address?: StringNullableFilter<"Audit"> | string | null
    device_info?: JsonNullableFilter<"Audit">
    created_at?: DateTimeFilter<"Audit"> | Date | string
    notes?: StringNullableFilter<"Audit"> | string | null
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
  }, "id">

  export type AuditOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrderInput | SortOrder
    username?: SortOrder
    table?: SortOrder
    action?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    device_info?: SortOrderInput | SortOrder
    created_at?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: AuditCountOrderByAggregateInput
    _max?: AuditMaxOrderByAggregateInput
    _min?: AuditMinOrderByAggregateInput
  }

  export type AuditScalarWhereWithAggregatesInput = {
    AND?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    OR?: AuditScalarWhereWithAggregatesInput[]
    NOT?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audit"> | string
    gym_id?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    username?: StringWithAggregatesFilter<"Audit"> | string
    table?: StringWithAggregatesFilter<"Audit"> | string
    action?: StringWithAggregatesFilter<"Audit"> | string
    reference_id?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Audit">
    ip_address?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    device_info?: JsonNullableWithAggregatesFilter<"Audit">
    created_at?: DateTimeWithAggregatesFilter<"Audit"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Audit"> | string | null
  }

  export type LimitWhereInput = {
    AND?: LimitWhereInput | LimitWhereInput[]
    OR?: LimitWhereInput[]
    NOT?: LimitWhereInput | LimitWhereInput[]
    id?: IntFilter<"Limit"> | number
    name?: StringFilter<"Limit"> | string
    value?: IntFilter<"Limit"> | number
    settings?: GymLimitListRelationFilter
  }

  export type LimitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    settings?: GymLimitOrderByRelationAggregateInput
  }

  export type LimitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LimitWhereInput | LimitWhereInput[]
    OR?: LimitWhereInput[]
    NOT?: LimitWhereInput | LimitWhereInput[]
    name?: StringFilter<"Limit"> | string
    value?: IntFilter<"Limit"> | number
    settings?: GymLimitListRelationFilter
  }, "id">

  export type LimitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: LimitCountOrderByAggregateInput
    _avg?: LimitAvgOrderByAggregateInput
    _max?: LimitMaxOrderByAggregateInput
    _min?: LimitMinOrderByAggregateInput
    _sum?: LimitSumOrderByAggregateInput
  }

  export type LimitScalarWhereWithAggregatesInput = {
    AND?: LimitScalarWhereWithAggregatesInput | LimitScalarWhereWithAggregatesInput[]
    OR?: LimitScalarWhereWithAggregatesInput[]
    NOT?: LimitScalarWhereWithAggregatesInput | LimitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Limit"> | number
    name?: StringWithAggregatesFilter<"Limit"> | string
    value?: IntWithAggregatesFilter<"Limit"> | number
  }

  export type GymLimitWhereInput = {
    AND?: GymLimitWhereInput | GymLimitWhereInput[]
    OR?: GymLimitWhereInput[]
    NOT?: GymLimitWhereInput | GymLimitWhereInput[]
    id?: IntFilter<"GymLimit"> | number
    gym_id?: StringFilter<"GymLimit"> | string
    limit_id?: IntFilter<"GymLimit"> | number
    value?: IntFilter<"GymLimit"> | number
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    limit?: XOR<LimitScalarRelationFilter, LimitWhereInput>
  }

  export type GymLimitOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
    gym?: GymOrderByWithRelationInput
    limit?: LimitOrderByWithRelationInput
  }

  export type GymLimitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    gym_id_limit_id?: GymLimitGym_idLimit_idCompoundUniqueInput
    AND?: GymLimitWhereInput | GymLimitWhereInput[]
    OR?: GymLimitWhereInput[]
    NOT?: GymLimitWhereInput | GymLimitWhereInput[]
    gym_id?: StringFilter<"GymLimit"> | string
    limit_id?: IntFilter<"GymLimit"> | number
    value?: IntFilter<"GymLimit"> | number
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    limit?: XOR<LimitScalarRelationFilter, LimitWhereInput>
  }, "id" | "gym_id_limit_id">

  export type GymLimitOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
    _count?: GymLimitCountOrderByAggregateInput
    _avg?: GymLimitAvgOrderByAggregateInput
    _max?: GymLimitMaxOrderByAggregateInput
    _min?: GymLimitMinOrderByAggregateInput
    _sum?: GymLimitSumOrderByAggregateInput
  }

  export type GymLimitScalarWhereWithAggregatesInput = {
    AND?: GymLimitScalarWhereWithAggregatesInput | GymLimitScalarWhereWithAggregatesInput[]
    OR?: GymLimitScalarWhereWithAggregatesInput[]
    NOT?: GymLimitScalarWhereWithAggregatesInput | GymLimitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GymLimit"> | number
    gym_id?: StringWithAggregatesFilter<"GymLimit"> | string
    limit_id?: IntWithAggregatesFilter<"GymLimit"> | number
    value?: IntWithAggregatesFilter<"GymLimit"> | number
  }

  export type GymStatsWhereInput = {
    AND?: GymStatsWhereInput | GymStatsWhereInput[]
    OR?: GymStatsWhereInput[]
    NOT?: GymStatsWhereInput | GymStatsWhereInput[]
    id?: StringFilter<"GymStats"> | string
    gym_id?: StringFilter<"GymStats"> | string
    total_revenue?: DecimalFilter<"GymStats"> | Decimal | DecimalJsLike | number | string
    total_members?: IntFilter<"GymStats"> | number
    updated_at?: DateTimeFilter<"GymStats"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type GymStatsOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    total_revenue?: SortOrder
    total_members?: SortOrder
    updated_at?: SortOrder
    gym?: GymOrderByWithRelationInput
  }

  export type GymStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gym_id?: string
    AND?: GymStatsWhereInput | GymStatsWhereInput[]
    OR?: GymStatsWhereInput[]
    NOT?: GymStatsWhereInput | GymStatsWhereInput[]
    total_revenue?: DecimalFilter<"GymStats"> | Decimal | DecimalJsLike | number | string
    total_members?: IntFilter<"GymStats"> | number
    updated_at?: DateTimeFilter<"GymStats"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id" | "gym_id">

  export type GymStatsOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    total_revenue?: SortOrder
    total_members?: SortOrder
    updated_at?: SortOrder
    _count?: GymStatsCountOrderByAggregateInput
    _avg?: GymStatsAvgOrderByAggregateInput
    _max?: GymStatsMaxOrderByAggregateInput
    _min?: GymStatsMinOrderByAggregateInput
    _sum?: GymStatsSumOrderByAggregateInput
  }

  export type GymStatsScalarWhereWithAggregatesInput = {
    AND?: GymStatsScalarWhereWithAggregatesInput | GymStatsScalarWhereWithAggregatesInput[]
    OR?: GymStatsScalarWhereWithAggregatesInput[]
    NOT?: GymStatsScalarWhereWithAggregatesInput | GymStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GymStats"> | string
    gym_id?: StringWithAggregatesFilter<"GymStats"> | string
    total_revenue?: DecimalWithAggregatesFilter<"GymStats"> | Decimal | DecimalJsLike | number | string
    total_members?: IntWithAggregatesFilter<"GymStats"> | number
    updated_at?: DateTimeWithAggregatesFilter<"GymStats"> | Date | string
  }

  export type RevenueWhereInput = {
    AND?: RevenueWhereInput | RevenueWhereInput[]
    OR?: RevenueWhereInput[]
    NOT?: RevenueWhereInput | RevenueWhereInput[]
    id?: StringFilter<"Revenue"> | string
    gym_id?: StringFilter<"Revenue"> | string
    year?: IntFilter<"Revenue"> | number
    month?: IntFilter<"Revenue"> | number
    amount?: DecimalFilter<"Revenue"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Revenue"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type RevenueOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    gym?: GymOrderByWithRelationInput
  }

  export type RevenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gym_id_year_month?: RevenueGym_idYearMonthCompoundUniqueInput
    AND?: RevenueWhereInput | RevenueWhereInput[]
    OR?: RevenueWhereInput[]
    NOT?: RevenueWhereInput | RevenueWhereInput[]
    gym_id?: StringFilter<"Revenue"> | string
    year?: IntFilter<"Revenue"> | number
    month?: IntFilter<"Revenue"> | number
    amount?: DecimalFilter<"Revenue"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Revenue"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id" | "gym_id_year_month">

  export type RevenueOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    _count?: RevenueCountOrderByAggregateInput
    _avg?: RevenueAvgOrderByAggregateInput
    _max?: RevenueMaxOrderByAggregateInput
    _min?: RevenueMinOrderByAggregateInput
    _sum?: RevenueSumOrderByAggregateInput
  }

  export type RevenueScalarWhereWithAggregatesInput = {
    AND?: RevenueScalarWhereWithAggregatesInput | RevenueScalarWhereWithAggregatesInput[]
    OR?: RevenueScalarWhereWithAggregatesInput[]
    NOT?: RevenueScalarWhereWithAggregatesInput | RevenueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Revenue"> | string
    gym_id?: StringWithAggregatesFilter<"Revenue"> | string
    year?: IntWithAggregatesFilter<"Revenue"> | number
    month?: IntWithAggregatesFilter<"Revenue"> | number
    amount?: DecimalWithAggregatesFilter<"Revenue"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Revenue"> | Date | string
  }

  export type MembershipCountWhereInput = {
    AND?: MembershipCountWhereInput | MembershipCountWhereInput[]
    OR?: MembershipCountWhereInput[]
    NOT?: MembershipCountWhereInput | MembershipCountWhereInput[]
    id?: StringFilter<"MembershipCount"> | string
    gym_id?: StringFilter<"MembershipCount"> | string
    year?: IntFilter<"MembershipCount"> | number
    month?: IntFilter<"MembershipCount"> | number
    count?: IntFilter<"MembershipCount"> | number
    created_at?: DateTimeFilter<"MembershipCount"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type MembershipCountOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
    gym?: GymOrderByWithRelationInput
  }

  export type MembershipCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gym_id_year_month?: MembershipCountGym_idYearMonthCompoundUniqueInput
    AND?: MembershipCountWhereInput | MembershipCountWhereInput[]
    OR?: MembershipCountWhereInput[]
    NOT?: MembershipCountWhereInput | MembershipCountWhereInput[]
    gym_id?: StringFilter<"MembershipCount"> | string
    year?: IntFilter<"MembershipCount"> | number
    month?: IntFilter<"MembershipCount"> | number
    count?: IntFilter<"MembershipCount"> | number
    created_at?: DateTimeFilter<"MembershipCount"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id" | "gym_id_year_month">

  export type MembershipCountOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
    _count?: MembershipCountCountOrderByAggregateInput
    _avg?: MembershipCountAvgOrderByAggregateInput
    _max?: MembershipCountMaxOrderByAggregateInput
    _min?: MembershipCountMinOrderByAggregateInput
    _sum?: MembershipCountSumOrderByAggregateInput
  }

  export type MembershipCountScalarWhereWithAggregatesInput = {
    AND?: MembershipCountScalarWhereWithAggregatesInput | MembershipCountScalarWhereWithAggregatesInput[]
    OR?: MembershipCountScalarWhereWithAggregatesInput[]
    NOT?: MembershipCountScalarWhereWithAggregatesInput | MembershipCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MembershipCount"> | string
    gym_id?: StringWithAggregatesFilter<"MembershipCount"> | string
    year?: IntWithAggregatesFilter<"MembershipCount"> | number
    month?: IntWithAggregatesFilter<"MembershipCount"> | number
    count?: IntWithAggregatesFilter<"MembershipCount"> | number
    created_at?: DateTimeWithAggregatesFilter<"MembershipCount"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    contact_number?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    gym_staff?: XOR<GymStaffNullableScalarRelationFilter, GymStaffWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    gym?: GymOrderByWithRelationInput
    gym_staff?: GymStaffOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    contact_number?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    gym?: XOR<GymNullableScalarRelationFilter, GymWhereInput> | null
    gym_staff?: XOR<GymStaffNullableScalarRelationFilter, GymStaffWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    contact_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_by?: StringWithAggregatesFilter<"User"> | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    firstname?: StringFilter<"Member"> | string
    lastname?: StringFilter<"Member"> | string
    contact_number?: StringNullableFilter<"Member"> | string | null
    created_at?: DateTimeFilter<"Member"> | Date | string
    created_by?: StringFilter<"Member"> | string
    memberships?: MembershipListRelationFilter
    attendance_logs?: MemberTimeLogsListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    attendance_logs?: MemberTimeLogsOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    firstname?: StringFilter<"Member"> | string
    lastname?: StringFilter<"Member"> | string
    contact_number?: StringNullableFilter<"Member"> | string | null
    created_at?: DateTimeFilter<"Member"> | Date | string
    created_by?: StringFilter<"Member"> | string
    memberships?: MembershipListRelationFilter
    attendance_logs?: MemberTimeLogsListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    firstname?: StringWithAggregatesFilter<"Member"> | string
    lastname?: StringWithAggregatesFilter<"Member"> | string
    contact_number?: StringNullableWithAggregatesFilter<"Member"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    created_by?: StringWithAggregatesFilter<"Member"> | string
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
    memberships?: MembershipListRelationFilter
    member_time_logs?: MemberTimeLogsListRelationFilter
    gym_stats?: XOR<GymStatsNullableScalarRelationFilter, GymStatsWhereInput> | null
    revenues?: RevenueListRelationFilter
    staffs?: GymStaffListRelationFilter
    limits?: GymLimitListRelationFilter
    audit_logs?: AuditListRelationFilter
    membership_counts?: MembershipCountListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    member_time_logs?: MemberTimeLogsOrderByRelationAggregateInput
    gym_stats?: GymStatsOrderByWithRelationInput
    revenues?: RevenueOrderByRelationAggregateInput
    staffs?: GymStaffOrderByRelationAggregateInput
    limits?: GymLimitOrderByRelationAggregateInput
    audit_logs?: AuditOrderByRelationAggregateInput
    membership_counts?: MembershipCountOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    owner_id?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
    memberships?: MembershipListRelationFilter
    member_time_logs?: MemberTimeLogsListRelationFilter
    gym_stats?: XOR<GymStatsNullableScalarRelationFilter, GymStatsWhereInput> | null
    revenues?: RevenueListRelationFilter
    staffs?: GymStaffListRelationFilter
    limits?: GymLimitListRelationFilter
    audit_logs?: AuditListRelationFilter
    membership_counts?: MembershipCountListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "owner_id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: GymCountOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    OR?: GymScalarWhereWithAggregatesInput[]
    NOT?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gym"> | string
    owner_id?: StringWithAggregatesFilter<"Gym"> | string
    name?: StringWithAggregatesFilter<"Gym"> | string
    location?: StringWithAggregatesFilter<"Gym"> | string
    created_at?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
    created_by?: StringWithAggregatesFilter<"Gym"> | string
  }

  export type GymStaffWhereInput = {
    AND?: GymStaffWhereInput | GymStaffWhereInput[]
    OR?: GymStaffWhereInput[]
    NOT?: GymStaffWhereInput | GymStaffWhereInput[]
    id?: IntFilter<"GymStaff"> | number
    user_id?: StringFilter<"GymStaff"> | string
    gym_id?: StringFilter<"GymStaff"> | string
    created_at?: DateTimeFilter<"GymStaff"> | Date | string
    created_by?: StringFilter<"GymStaff"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type GymStaffOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    user?: UserOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
  }

  export type GymStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: GymStaffWhereInput | GymStaffWhereInput[]
    OR?: GymStaffWhereInput[]
    NOT?: GymStaffWhereInput | GymStaffWhereInput[]
    gym_id?: StringFilter<"GymStaff"> | string
    created_at?: DateTimeFilter<"GymStaff"> | Date | string
    created_by?: StringFilter<"GymStaff"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id" | "user_id">

  export type GymStaffOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: GymStaffCountOrderByAggregateInput
    _avg?: GymStaffAvgOrderByAggregateInput
    _max?: GymStaffMaxOrderByAggregateInput
    _min?: GymStaffMinOrderByAggregateInput
    _sum?: GymStaffSumOrderByAggregateInput
  }

  export type GymStaffScalarWhereWithAggregatesInput = {
    AND?: GymStaffScalarWhereWithAggregatesInput | GymStaffScalarWhereWithAggregatesInput[]
    OR?: GymStaffScalarWhereWithAggregatesInput[]
    NOT?: GymStaffScalarWhereWithAggregatesInput | GymStaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GymStaff"> | number
    user_id?: StringWithAggregatesFilter<"GymStaff"> | string
    gym_id?: StringWithAggregatesFilter<"GymStaff"> | string
    created_at?: DateTimeWithAggregatesFilter<"GymStaff"> | Date | string
    created_by?: StringWithAggregatesFilter<"GymStaff"> | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    member_id?: StringFilter<"Membership"> | string
    gym_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    sessions_left?: IntNullableFilter<"Membership"> | number | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_reminded?: BoolFilter<"Membership"> | boolean
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    attendance_logs?: MemberTimeLogsMembershipListRelationFilter
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    sessions_left?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_reminded?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrderInput | SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    member?: MemberOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    attendance_logs?: MemberTimeLogsMembershipOrderByRelationAggregateInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    member_id?: StringFilter<"Membership"> | string
    gym_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    sessions_left?: IntNullableFilter<"Membership"> | number | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_reminded?: BoolFilter<"Membership"> | boolean
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    attendance_logs?: MemberTimeLogsMembershipListRelationFilter
  }, "id">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    sessions_left?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_reminded?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrderInput | SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _avg?: MembershipAvgOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
    _sum?: MembershipSumOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    member_id?: StringWithAggregatesFilter<"Membership"> | string
    gym_id?: StringWithAggregatesFilter<"Membership"> | string
    start_date?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Membership"> | Date | string | null
    sessions_left?: IntNullableWithAggregatesFilter<"Membership"> | number | null
    is_active?: BoolWithAggregatesFilter<"Membership"> | boolean
    is_reminded?: BoolWithAggregatesFilter<"Membership"> | boolean
    plan_name?: StringWithAggregatesFilter<"Membership"> | string
    plan_description?: StringNullableWithAggregatesFilter<"Membership"> | string | null
    amount_paid?: DecimalWithAggregatesFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    created_by?: StringWithAggregatesFilter<"Membership"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    gym_id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    num_of_days?: IntNullableFilter<"Plan"> | number | null
    num_of_sessions?: IntNullableFilter<"Plan"> | number | null
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: StringFilter<"Plan"> | string
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    num_of_days?: SortOrderInput | SortOrder
    num_of_sessions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    gym_id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    num_of_days?: IntNullableFilter<"Plan"> | number | null
    num_of_sessions?: IntNullableFilter<"Plan"> | number | null
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: StringFilter<"Plan"> | string
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    num_of_days?: SortOrderInput | SortOrder
    num_of_sessions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    gym_id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    num_of_days?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    num_of_sessions?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    created_by?: StringWithAggregatesFilter<"Plan"> | string
  }

  export type MemberTimeLogsWhereInput = {
    AND?: MemberTimeLogsWhereInput | MemberTimeLogsWhereInput[]
    OR?: MemberTimeLogsWhereInput[]
    NOT?: MemberTimeLogsWhereInput | MemberTimeLogsWhereInput[]
    id?: IntFilter<"MemberTimeLogs"> | number
    member_id?: StringFilter<"MemberTimeLogs"> | string
    gym_id?: StringFilter<"MemberTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"MemberTimeLogs"> | Date | string
    recorded_by?: StringFilter<"MemberTimeLogs"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    memberships?: MemberTimeLogsMembershipListRelationFilter
  }

  export type MemberTimeLogsOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
    member?: MemberOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    memberships?: MemberTimeLogsMembershipOrderByRelationAggregateInput
  }

  export type MemberTimeLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberTimeLogsWhereInput | MemberTimeLogsWhereInput[]
    OR?: MemberTimeLogsWhereInput[]
    NOT?: MemberTimeLogsWhereInput | MemberTimeLogsWhereInput[]
    member_id?: StringFilter<"MemberTimeLogs"> | string
    gym_id?: StringFilter<"MemberTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"MemberTimeLogs"> | Date | string
    recorded_by?: StringFilter<"MemberTimeLogs"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    memberships?: MemberTimeLogsMembershipListRelationFilter
  }, "id">

  export type MemberTimeLogsOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
    _count?: MemberTimeLogsCountOrderByAggregateInput
    _avg?: MemberTimeLogsAvgOrderByAggregateInput
    _max?: MemberTimeLogsMaxOrderByAggregateInput
    _min?: MemberTimeLogsMinOrderByAggregateInput
    _sum?: MemberTimeLogsSumOrderByAggregateInput
  }

  export type MemberTimeLogsScalarWhereWithAggregatesInput = {
    AND?: MemberTimeLogsScalarWhereWithAggregatesInput | MemberTimeLogsScalarWhereWithAggregatesInput[]
    OR?: MemberTimeLogsScalarWhereWithAggregatesInput[]
    NOT?: MemberTimeLogsScalarWhereWithAggregatesInput | MemberTimeLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MemberTimeLogs"> | number
    member_id?: StringWithAggregatesFilter<"MemberTimeLogs"> | string
    gym_id?: StringWithAggregatesFilter<"MemberTimeLogs"> | string
    checked_in_at?: DateTimeWithAggregatesFilter<"MemberTimeLogs"> | Date | string
    recorded_by?: StringWithAggregatesFilter<"MemberTimeLogs"> | string
  }

  export type MemberTimeLogsMembershipWhereInput = {
    AND?: MemberTimeLogsMembershipWhereInput | MemberTimeLogsMembershipWhereInput[]
    OR?: MemberTimeLogsMembershipWhereInput[]
    NOT?: MemberTimeLogsMembershipWhereInput | MemberTimeLogsMembershipWhereInput[]
    id?: IntFilter<"MemberTimeLogsMembership"> | number
    member_time_log_id?: IntFilter<"MemberTimeLogsMembership"> | number
    membership_id?: StringFilter<"MemberTimeLogsMembership"> | string
    member_time_log?: XOR<MemberTimeLogsScalarRelationFilter, MemberTimeLogsWhereInput>
    membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
  }

  export type MemberTimeLogsMembershipOrderByWithRelationInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
    membership_id?: SortOrder
    member_time_log?: MemberTimeLogsOrderByWithRelationInput
    membership?: MembershipOrderByWithRelationInput
  }

  export type MemberTimeLogsMembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    member_time_log_id_membership_id?: MemberTimeLogsMembershipMember_time_log_idMembership_idCompoundUniqueInput
    AND?: MemberTimeLogsMembershipWhereInput | MemberTimeLogsMembershipWhereInput[]
    OR?: MemberTimeLogsMembershipWhereInput[]
    NOT?: MemberTimeLogsMembershipWhereInput | MemberTimeLogsMembershipWhereInput[]
    member_time_log_id?: IntFilter<"MemberTimeLogsMembership"> | number
    membership_id?: StringFilter<"MemberTimeLogsMembership"> | string
    member_time_log?: XOR<MemberTimeLogsScalarRelationFilter, MemberTimeLogsWhereInput>
    membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
  }, "id" | "member_time_log_id_membership_id">

  export type MemberTimeLogsMembershipOrderByWithAggregationInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
    membership_id?: SortOrder
    _count?: MemberTimeLogsMembershipCountOrderByAggregateInput
    _avg?: MemberTimeLogsMembershipAvgOrderByAggregateInput
    _max?: MemberTimeLogsMembershipMaxOrderByAggregateInput
    _min?: MemberTimeLogsMembershipMinOrderByAggregateInput
    _sum?: MemberTimeLogsMembershipSumOrderByAggregateInput
  }

  export type MemberTimeLogsMembershipScalarWhereWithAggregatesInput = {
    AND?: MemberTimeLogsMembershipScalarWhereWithAggregatesInput | MemberTimeLogsMembershipScalarWhereWithAggregatesInput[]
    OR?: MemberTimeLogsMembershipScalarWhereWithAggregatesInput[]
    NOT?: MemberTimeLogsMembershipScalarWhereWithAggregatesInput | MemberTimeLogsMembershipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MemberTimeLogsMembership"> | number
    member_time_log_id?: IntWithAggregatesFilter<"MemberTimeLogsMembership"> | number
    membership_id?: StringWithAggregatesFilter<"MemberTimeLogsMembership"> | string
  }

  export type AuditCreateInput = {
    id?: string
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
    gym?: GymCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditUncheckedCreateInput = {
    id?: string
    gym_id?: string | null
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
  }

  export type AuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    gym?: GymUpdateOneWithoutAudit_logsNestedInput
  }

  export type AuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditCreateManyInput = {
    id?: string
    gym_id?: string | null
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
  }

  export type AuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LimitCreateInput = {
    id: number
    name: string
    value: number
    settings?: GymLimitCreateNestedManyWithoutLimitInput
  }

  export type LimitUncheckedCreateInput = {
    id: number
    name: string
    value: number
    settings?: GymLimitUncheckedCreateNestedManyWithoutLimitInput
  }

  export type LimitUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    settings?: GymLimitUpdateManyWithoutLimitNestedInput
  }

  export type LimitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    settings?: GymLimitUncheckedUpdateManyWithoutLimitNestedInput
  }

  export type LimitCreateManyInput = {
    id: number
    name: string
    value: number
  }

  export type LimitUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type LimitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymLimitCreateInput = {
    value: number
    gym: GymCreateNestedOneWithoutLimitsInput
    limit: LimitCreateNestedOneWithoutSettingsInput
  }

  export type GymLimitUncheckedCreateInput = {
    id?: number
    gym_id: string
    limit_id: number
    value: number
  }

  export type GymLimitUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    gym?: GymUpdateOneRequiredWithoutLimitsNestedInput
    limit?: LimitUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type GymLimitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    limit_id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymLimitCreateManyInput = {
    id?: number
    gym_id: string
    limit_id: number
    value: number
  }

  export type GymLimitUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymLimitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    limit_id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymStatsCreateInput = {
    id?: string
    total_revenue: Decimal | DecimalJsLike | number | string
    total_members?: number
    updated_at?: Date | string
    gym: GymCreateNestedOneWithoutGym_statsInput
  }

  export type GymStatsUncheckedCreateInput = {
    id?: string
    gym_id: string
    total_revenue: Decimal | DecimalJsLike | number | string
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutGym_statsNestedInput
  }

  export type GymStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsCreateManyInput = {
    id?: string
    gym_id: string
    total_revenue: Decimal | DecimalJsLike | number | string
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueCreateInput = {
    id?: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    gym: GymCreateNestedOneWithoutRevenuesInput
  }

  export type RevenueUncheckedCreateInput = {
    id?: string
    gym_id: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type RevenueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutRevenuesNestedInput
  }

  export type RevenueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueCreateManyInput = {
    id?: string
    gym_id: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type RevenueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCountCreateInput = {
    id?: string
    year: number
    month: number
    count: number
    created_at?: Date | string
    gym: GymCreateNestedOneWithoutMembership_countsInput
  }

  export type MembershipCountUncheckedCreateInput = {
    id?: string
    gym_id: string
    year: number
    month: number
    count: number
    created_at?: Date | string
  }

  export type MembershipCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutMembership_countsNestedInput
  }

  export type MembershipCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCountCreateManyInput = {
    id?: string
    gym_id: string
    year: number
    month: number
    count: number
    created_at?: Date | string
  }

  export type MembershipCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym?: GymCreateNestedOneWithoutOwnerInput
    gym_staff?: GymStaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym?: GymUncheckedCreateNestedOneWithoutOwnerInput
    gym_staff?: GymStaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneWithoutOwnerNestedInput
    gym_staff?: GymStaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUncheckedUpdateOneWithoutOwnerNestedInput
    gym_staff?: GymStaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymCreateInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
  }

  export type GymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymStaffCreateInput = {
    created_at?: Date | string
    created_by: string
    user: UserCreateNestedOneWithoutGym_staffInput
    gym: GymCreateNestedOneWithoutStaffsInput
  }

  export type GymStaffUncheckedCreateInput = {
    id?: number
    user_id: string
    gym_id: string
    created_at?: Date | string
    created_by: string
  }

  export type GymStaffUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGym_staffNestedInput
    gym?: GymUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type GymStaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymStaffCreateManyInput = {
    id?: number
    user_id: string
    gym_id: string
    created_at?: Date | string
    created_by: string
  }

  export type GymStaffUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymStaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    attendance_logs?: MemberTimeLogsMembershipCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    attendance_logs?: MemberTimeLogsMembershipUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipCreateManyInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    gym_id: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    num_of_days?: number | null
    num_of_sessions?: number | null
    created_at?: Date | string
    created_by: string
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    gym_id: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    num_of_days?: number | null
    num_of_sessions?: number | null
    created_at?: Date | string
    created_by: string
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    num_of_days?: NullableIntFieldUpdateOperationsInput | number | null
    num_of_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    num_of_days?: NullableIntFieldUpdateOperationsInput | number | null
    num_of_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateManyInput = {
    id?: string
    gym_id: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    num_of_days?: number | null
    num_of_sessions?: number | null
    created_at?: Date | string
    created_by: string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    num_of_days?: NullableIntFieldUpdateOperationsInput | number | null
    num_of_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    num_of_days?: NullableIntFieldUpdateOperationsInput | number | null
    num_of_sessions?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsCreateInput = {
    checked_in_at?: Date | string
    recorded_by: string
    member: MemberCreateNestedOneWithoutAttendance_logsInput
    gym: GymCreateNestedOneWithoutMember_time_logsInput
    memberships?: MemberTimeLogsMembershipCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsUncheckedCreateInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
    memberships?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsUpdateInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutMember_time_logsNestedInput
    memberships?: MemberTimeLogsMembershipUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    memberships?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsCreateManyInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type MemberTimeLogsUpdateManyMutationInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsMembershipCreateInput = {
    member_time_log: MemberTimeLogsCreateNestedOneWithoutMembershipsInput
    membership: MembershipCreateNestedOneWithoutAttendance_logsInput
  }

  export type MemberTimeLogsMembershipUncheckedCreateInput = {
    id?: number
    member_time_log_id: number
    membership_id: string
  }

  export type MemberTimeLogsMembershipUpdateInput = {
    member_time_log?: MemberTimeLogsUpdateOneRequiredWithoutMembershipsNestedInput
    membership?: MembershipUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type MemberTimeLogsMembershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_time_log_id?: IntFieldUpdateOperationsInput | number
    membership_id?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsMembershipCreateManyInput = {
    id?: number
    member_time_log_id: number
    membership_id: string
  }

  export type MemberTimeLogsMembershipUpdateManyMutationInput = {

  }

  export type MemberTimeLogsMembershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_time_log_id?: IntFieldUpdateOperationsInput | number
    membership_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GymNullableScalarRelationFilter = {
    is?: GymWhereInput | null
    isNot?: GymWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    username?: SortOrder
    table?: SortOrder
    action?: SortOrder
    reference_id?: SortOrder
    metadata?: SortOrder
    ip_address?: SortOrder
    device_info?: SortOrder
    created_at?: SortOrder
    notes?: SortOrder
  }

  export type AuditMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    username?: SortOrder
    table?: SortOrder
    action?: SortOrder
    reference_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    notes?: SortOrder
  }

  export type AuditMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    username?: SortOrder
    table?: SortOrder
    action?: SortOrder
    reference_id?: SortOrder
    ip_address?: SortOrder
    created_at?: SortOrder
    notes?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GymLimitListRelationFilter = {
    every?: GymLimitWhereInput
    some?: GymLimitWhereInput
    none?: GymLimitWhereInput
  }

  export type GymLimitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LimitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type LimitAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type LimitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type LimitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type LimitSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GymScalarRelationFilter = {
    is?: GymWhereInput
    isNot?: GymWhereInput
  }

  export type LimitScalarRelationFilter = {
    is?: LimitWhereInput
    isNot?: LimitWhereInput
  }

  export type GymLimitGym_idLimit_idCompoundUniqueInput = {
    gym_id: string
    limit_id: number
  }

  export type GymLimitCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
  }

  export type GymLimitAvgOrderByAggregateInput = {
    id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
  }

  export type GymLimitMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
  }

  export type GymLimitMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
  }

  export type GymLimitSumOrderByAggregateInput = {
    id?: SortOrder
    limit_id?: SortOrder
    value?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type GymStatsCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    total_revenue?: SortOrder
    total_members?: SortOrder
    updated_at?: SortOrder
  }

  export type GymStatsAvgOrderByAggregateInput = {
    total_revenue?: SortOrder
    total_members?: SortOrder
  }

  export type GymStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    total_revenue?: SortOrder
    total_members?: SortOrder
    updated_at?: SortOrder
  }

  export type GymStatsMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    total_revenue?: SortOrder
    total_members?: SortOrder
    updated_at?: SortOrder
  }

  export type GymStatsSumOrderByAggregateInput = {
    total_revenue?: SortOrder
    total_members?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RevenueGym_idYearMonthCompoundUniqueInput = {
    gym_id: string
    year: number
    month: number
  }

  export type RevenueCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type RevenueAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
  }

  export type RevenueMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type RevenueMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
  }

  export type RevenueSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    amount?: SortOrder
  }

  export type MembershipCountGym_idYearMonthCompoundUniqueInput = {
    gym_id: string
    year: number
    month: number
  }

  export type MembershipCountCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
  }

  export type MembershipCountAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
  }

  export type MembershipCountMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
  }

  export type MembershipCountMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
    created_at?: SortOrder
  }

  export type MembershipCountSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    count?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GymStaffNullableScalarRelationFilter = {
    is?: GymStaffWhereInput | null
    isNot?: GymStaffWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type MemberTimeLogsListRelationFilter = {
    every?: MemberTimeLogsWhereInput
    some?: MemberTimeLogsWhereInput
    none?: MemberTimeLogsWhereInput
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberTimeLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymStatsNullableScalarRelationFilter = {
    is?: GymStatsWhereInput | null
    isNot?: GymStatsWhereInput | null
  }

  export type RevenueListRelationFilter = {
    every?: RevenueWhereInput
    some?: RevenueWhereInput
    none?: RevenueWhereInput
  }

  export type GymStaffListRelationFilter = {
    every?: GymStaffWhereInput
    some?: GymStaffWhereInput
    none?: GymStaffWhereInput
  }

  export type AuditListRelationFilter = {
    every?: AuditWhereInput
    some?: AuditWhereInput
    none?: AuditWhereInput
  }

  export type MembershipCountListRelationFilter = {
    every?: MembershipCountWhereInput
    some?: MembershipCountWhereInput
    none?: MembershipCountWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RevenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymStaffCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymStaffAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymStaffMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymStaffSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type MemberTimeLogsMembershipListRelationFilter = {
    every?: MemberTimeLogsMembershipWhereInput
    some?: MemberTimeLogsMembershipWhereInput
    none?: MemberTimeLogsMembershipWhereInput
  }

  export type MemberTimeLogsMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    sessions_left?: SortOrder
    is_active?: SortOrder
    is_reminded?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipAvgOrderByAggregateInput = {
    sessions_left?: SortOrder
    amount_paid?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    sessions_left?: SortOrder
    is_active?: SortOrder
    is_reminded?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    sessions_left?: SortOrder
    is_active?: SortOrder
    is_reminded?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipSumOrderByAggregateInput = {
    sessions_left?: SortOrder
    amount_paid?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
  }

  export type MemberTimeLogsCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type MemberTimeLogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberTimeLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type MemberTimeLogsMinOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type MemberTimeLogsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberTimeLogsScalarRelationFilter = {
    is?: MemberTimeLogsWhereInput
    isNot?: MemberTimeLogsWhereInput
  }

  export type MembershipScalarRelationFilter = {
    is?: MembershipWhereInput
    isNot?: MembershipWhereInput
  }

  export type MemberTimeLogsMembershipMember_time_log_idMembership_idCompoundUniqueInput = {
    member_time_log_id: number
    membership_id: string
  }

  export type MemberTimeLogsMembershipCountOrderByAggregateInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
    membership_id?: SortOrder
  }

  export type MemberTimeLogsMembershipAvgOrderByAggregateInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
  }

  export type MemberTimeLogsMembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
    membership_id?: SortOrder
  }

  export type MemberTimeLogsMembershipMinOrderByAggregateInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
    membership_id?: SortOrder
  }

  export type MemberTimeLogsMembershipSumOrderByAggregateInput = {
    id?: SortOrder
    member_time_log_id?: SortOrder
  }

  export type GymCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<GymCreateWithoutAudit_logsInput, GymUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutAudit_logsInput
    connect?: GymWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GymUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<GymCreateWithoutAudit_logsInput, GymUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutAudit_logsInput
    upsert?: GymUpsertWithoutAudit_logsInput
    disconnect?: GymWhereInput | boolean
    delete?: GymWhereInput | boolean
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutAudit_logsInput, GymUpdateWithoutAudit_logsInput>, GymUncheckedUpdateWithoutAudit_logsInput>
  }

  export type GymLimitCreateNestedManyWithoutLimitInput = {
    create?: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput> | GymLimitCreateWithoutLimitInput[] | GymLimitUncheckedCreateWithoutLimitInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutLimitInput | GymLimitCreateOrConnectWithoutLimitInput[]
    createMany?: GymLimitCreateManyLimitInputEnvelope
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
  }

  export type GymLimitUncheckedCreateNestedManyWithoutLimitInput = {
    create?: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput> | GymLimitCreateWithoutLimitInput[] | GymLimitUncheckedCreateWithoutLimitInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutLimitInput | GymLimitCreateOrConnectWithoutLimitInput[]
    createMany?: GymLimitCreateManyLimitInputEnvelope
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GymLimitUpdateManyWithoutLimitNestedInput = {
    create?: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput> | GymLimitCreateWithoutLimitInput[] | GymLimitUncheckedCreateWithoutLimitInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutLimitInput | GymLimitCreateOrConnectWithoutLimitInput[]
    upsert?: GymLimitUpsertWithWhereUniqueWithoutLimitInput | GymLimitUpsertWithWhereUniqueWithoutLimitInput[]
    createMany?: GymLimitCreateManyLimitInputEnvelope
    set?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    disconnect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    delete?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    update?: GymLimitUpdateWithWhereUniqueWithoutLimitInput | GymLimitUpdateWithWhereUniqueWithoutLimitInput[]
    updateMany?: GymLimitUpdateManyWithWhereWithoutLimitInput | GymLimitUpdateManyWithWhereWithoutLimitInput[]
    deleteMany?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
  }

  export type GymLimitUncheckedUpdateManyWithoutLimitNestedInput = {
    create?: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput> | GymLimitCreateWithoutLimitInput[] | GymLimitUncheckedCreateWithoutLimitInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutLimitInput | GymLimitCreateOrConnectWithoutLimitInput[]
    upsert?: GymLimitUpsertWithWhereUniqueWithoutLimitInput | GymLimitUpsertWithWhereUniqueWithoutLimitInput[]
    createMany?: GymLimitCreateManyLimitInputEnvelope
    set?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    disconnect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    delete?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    update?: GymLimitUpdateWithWhereUniqueWithoutLimitInput | GymLimitUpdateWithWhereUniqueWithoutLimitInput[]
    updateMany?: GymLimitUpdateManyWithWhereWithoutLimitInput | GymLimitUpdateManyWithWhereWithoutLimitInput[]
    deleteMany?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
  }

  export type GymCreateNestedOneWithoutLimitsInput = {
    create?: XOR<GymCreateWithoutLimitsInput, GymUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: GymCreateOrConnectWithoutLimitsInput
    connect?: GymWhereUniqueInput
  }

  export type LimitCreateNestedOneWithoutSettingsInput = {
    create?: XOR<LimitCreateWithoutSettingsInput, LimitUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: LimitCreateOrConnectWithoutSettingsInput
    connect?: LimitWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutLimitsNestedInput = {
    create?: XOR<GymCreateWithoutLimitsInput, GymUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: GymCreateOrConnectWithoutLimitsInput
    upsert?: GymUpsertWithoutLimitsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutLimitsInput, GymUpdateWithoutLimitsInput>, GymUncheckedUpdateWithoutLimitsInput>
  }

  export type LimitUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<LimitCreateWithoutSettingsInput, LimitUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: LimitCreateOrConnectWithoutSettingsInput
    upsert?: LimitUpsertWithoutSettingsInput
    connect?: LimitWhereUniqueInput
    update?: XOR<XOR<LimitUpdateToOneWithWhereWithoutSettingsInput, LimitUpdateWithoutSettingsInput>, LimitUncheckedUpdateWithoutSettingsInput>
  }

  export type GymCreateNestedOneWithoutGym_statsInput = {
    create?: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_statsInput
    connect?: GymWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type GymUpdateOneRequiredWithoutGym_statsNestedInput = {
    create?: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_statsInput
    upsert?: GymUpsertWithoutGym_statsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutGym_statsInput, GymUpdateWithoutGym_statsInput>, GymUncheckedUpdateWithoutGym_statsInput>
  }

  export type GymCreateNestedOneWithoutRevenuesInput = {
    create?: XOR<GymCreateWithoutRevenuesInput, GymUncheckedCreateWithoutRevenuesInput>
    connectOrCreate?: GymCreateOrConnectWithoutRevenuesInput
    connect?: GymWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutRevenuesNestedInput = {
    create?: XOR<GymCreateWithoutRevenuesInput, GymUncheckedCreateWithoutRevenuesInput>
    connectOrCreate?: GymCreateOrConnectWithoutRevenuesInput
    upsert?: GymUpsertWithoutRevenuesInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutRevenuesInput, GymUpdateWithoutRevenuesInput>, GymUncheckedUpdateWithoutRevenuesInput>
  }

  export type GymCreateNestedOneWithoutMembership_countsInput = {
    create?: XOR<GymCreateWithoutMembership_countsInput, GymUncheckedCreateWithoutMembership_countsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMembership_countsInput
    connect?: GymWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutMembership_countsNestedInput = {
    create?: XOR<GymCreateWithoutMembership_countsInput, GymUncheckedCreateWithoutMembership_countsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMembership_countsInput
    upsert?: GymUpsertWithoutMembership_countsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutMembership_countsInput, GymUpdateWithoutMembership_countsInput>, GymUncheckedUpdateWithoutMembership_countsInput>
  }

  export type GymCreateNestedOneWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput
    connect?: GymWhereUniqueInput
  }

  export type GymStaffCreateNestedOneWithoutUserInput = {
    create?: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: GymStaffCreateOrConnectWithoutUserInput
    connect?: GymStaffWhereUniqueInput
  }

  export type GymUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput
    connect?: GymWhereUniqueInput
  }

  export type GymStaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: GymStaffCreateOrConnectWithoutUserInput
    connect?: GymStaffWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GymUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput
    upsert?: GymUpsertWithoutOwnerInput
    disconnect?: GymWhereInput | boolean
    delete?: GymWhereInput | boolean
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutOwnerInput, GymUpdateWithoutOwnerInput>, GymUncheckedUpdateWithoutOwnerInput>
  }

  export type GymStaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: GymStaffCreateOrConnectWithoutUserInput
    upsert?: GymStaffUpsertWithoutUserInput
    disconnect?: GymStaffWhereInput | boolean
    delete?: GymStaffWhereInput | boolean
    connect?: GymStaffWhereUniqueInput
    update?: XOR<XOR<GymStaffUpdateToOneWithWhereWithoutUserInput, GymStaffUpdateWithoutUserInput>, GymStaffUncheckedUpdateWithoutUserInput>
  }

  export type GymUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput
    upsert?: GymUpsertWithoutOwnerInput
    disconnect?: GymWhereInput | boolean
    delete?: GymWhereInput | boolean
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutOwnerInput, GymUpdateWithoutOwnerInput>, GymUncheckedUpdateWithoutOwnerInput>
  }

  export type GymStaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: GymStaffCreateOrConnectWithoutUserInput
    upsert?: GymStaffUpsertWithoutUserInput
    disconnect?: GymStaffWhereInput | boolean
    delete?: GymStaffWhereInput | boolean
    connect?: GymStaffWhereUniqueInput
    update?: XOR<XOR<GymStaffUpdateToOneWithWhereWithoutUserInput, GymStaffUpdateWithoutUserInput>, GymStaffUncheckedUpdateWithoutUserInput>
  }

  export type MembershipCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput> | MemberTimeLogsCreateWithoutMemberInput[] | MemberTimeLogsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMemberInput | MemberTimeLogsCreateOrConnectWithoutMemberInput[]
    createMany?: MemberTimeLogsCreateManyMemberInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput> | MemberTimeLogsCreateWithoutMemberInput[] | MemberTimeLogsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMemberInput | MemberTimeLogsCreateOrConnectWithoutMemberInput[]
    createMany?: MemberTimeLogsCreateManyMemberInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type MembershipUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMemberInput | MembershipUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMemberInput | MembershipUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMemberInput | MembershipUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberTimeLogsUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput> | MemberTimeLogsCreateWithoutMemberInput[] | MemberTimeLogsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMemberInput | MemberTimeLogsCreateOrConnectWithoutMemberInput[]
    upsert?: MemberTimeLogsUpsertWithWhereUniqueWithoutMemberInput | MemberTimeLogsUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberTimeLogsCreateManyMemberInputEnvelope
    set?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    disconnect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    delete?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    update?: MemberTimeLogsUpdateWithWhereUniqueWithoutMemberInput | MemberTimeLogsUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberTimeLogsUpdateManyWithWhereWithoutMemberInput | MemberTimeLogsUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutMemberInput | MembershipUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutMemberInput | MembershipUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutMemberInput | MembershipUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput> | MemberTimeLogsCreateWithoutMemberInput[] | MemberTimeLogsUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMemberInput | MemberTimeLogsCreateOrConnectWithoutMemberInput[]
    upsert?: MemberTimeLogsUpsertWithWhereUniqueWithoutMemberInput | MemberTimeLogsUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberTimeLogsCreateManyMemberInputEnvelope
    set?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    disconnect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    delete?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    update?: MemberTimeLogsUpdateWithWhereUniqueWithoutMemberInput | MemberTimeLogsUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberTimeLogsUpdateManyWithWhereWithoutMemberInput | MemberTimeLogsUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
  }

  export type MembershipCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsCreateNestedManyWithoutGymInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type GymStatsCreateNestedOneWithoutGymInput = {
    create?: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
    connectOrCreate?: GymStatsCreateOrConnectWithoutGymInput
    connect?: GymStatsWhereUniqueInput
  }

  export type RevenueCreateNestedManyWithoutGymInput = {
    create?: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput> | RevenueCreateWithoutGymInput[] | RevenueUncheckedCreateWithoutGymInput[]
    connectOrCreate?: RevenueCreateOrConnectWithoutGymInput | RevenueCreateOrConnectWithoutGymInput[]
    createMany?: RevenueCreateManyGymInputEnvelope
    connect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
  }

  export type GymStaffCreateNestedManyWithoutGymInput = {
    create?: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput> | GymStaffCreateWithoutGymInput[] | GymStaffUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymStaffCreateOrConnectWithoutGymInput | GymStaffCreateOrConnectWithoutGymInput[]
    createMany?: GymStaffCreateManyGymInputEnvelope
    connect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
  }

  export type GymLimitCreateNestedManyWithoutGymInput = {
    create?: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput> | GymLimitCreateWithoutGymInput[] | GymLimitUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutGymInput | GymLimitCreateOrConnectWithoutGymInput[]
    createMany?: GymLimitCreateManyGymInputEnvelope
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
  }

  export type AuditCreateNestedManyWithoutGymInput = {
    create?: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput> | AuditCreateWithoutGymInput[] | AuditUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutGymInput | AuditCreateOrConnectWithoutGymInput[]
    createMany?: AuditCreateManyGymInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type MembershipCountCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput> | MembershipCountCreateWithoutGymInput[] | MembershipCountUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCountCreateOrConnectWithoutGymInput | MembershipCountCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCountCreateManyGymInputEnvelope
    connect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutGymInput = {
    create?: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymInput
    connect?: UserWhereUniqueInput
  }

  export type MembershipUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type GymStatsUncheckedCreateNestedOneWithoutGymInput = {
    create?: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
    connectOrCreate?: GymStatsCreateOrConnectWithoutGymInput
    connect?: GymStatsWhereUniqueInput
  }

  export type RevenueUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput> | RevenueCreateWithoutGymInput[] | RevenueUncheckedCreateWithoutGymInput[]
    connectOrCreate?: RevenueCreateOrConnectWithoutGymInput | RevenueCreateOrConnectWithoutGymInput[]
    createMany?: RevenueCreateManyGymInputEnvelope
    connect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
  }

  export type GymStaffUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput> | GymStaffCreateWithoutGymInput[] | GymStaffUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymStaffCreateOrConnectWithoutGymInput | GymStaffCreateOrConnectWithoutGymInput[]
    createMany?: GymStaffCreateManyGymInputEnvelope
    connect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
  }

  export type GymLimitUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput> | GymLimitCreateWithoutGymInput[] | GymLimitUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutGymInput | GymLimitCreateOrConnectWithoutGymInput[]
    createMany?: GymLimitCreateManyGymInputEnvelope
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
  }

  export type AuditUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput> | AuditCreateWithoutGymInput[] | AuditUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutGymInput | AuditCreateOrConnectWithoutGymInput[]
    createMany?: AuditCreateManyGymInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type MembershipCountUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput> | MembershipCountCreateWithoutGymInput[] | MembershipCountUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCountCreateOrConnectWithoutGymInput | MembershipCountCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCountCreateManyGymInputEnvelope
    connect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
  }

  export type MembershipUpdateManyWithoutGymNestedInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutGymInput | MembershipUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutGymInput | MembershipUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutGymInput | MembershipUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberTimeLogsUpdateManyWithoutGymNestedInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    upsert?: MemberTimeLogsUpsertWithWhereUniqueWithoutGymInput | MemberTimeLogsUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    set?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    disconnect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    delete?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    update?: MemberTimeLogsUpdateWithWhereUniqueWithoutGymInput | MemberTimeLogsUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MemberTimeLogsUpdateManyWithWhereWithoutGymInput | MemberTimeLogsUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
  }

  export type GymStatsUpdateOneWithoutGymNestedInput = {
    create?: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
    connectOrCreate?: GymStatsCreateOrConnectWithoutGymInput
    upsert?: GymStatsUpsertWithoutGymInput
    disconnect?: GymStatsWhereInput | boolean
    delete?: GymStatsWhereInput | boolean
    connect?: GymStatsWhereUniqueInput
    update?: XOR<XOR<GymStatsUpdateToOneWithWhereWithoutGymInput, GymStatsUpdateWithoutGymInput>, GymStatsUncheckedUpdateWithoutGymInput>
  }

  export type RevenueUpdateManyWithoutGymNestedInput = {
    create?: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput> | RevenueCreateWithoutGymInput[] | RevenueUncheckedCreateWithoutGymInput[]
    connectOrCreate?: RevenueCreateOrConnectWithoutGymInput | RevenueCreateOrConnectWithoutGymInput[]
    upsert?: RevenueUpsertWithWhereUniqueWithoutGymInput | RevenueUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: RevenueCreateManyGymInputEnvelope
    set?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    disconnect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    delete?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    connect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    update?: RevenueUpdateWithWhereUniqueWithoutGymInput | RevenueUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: RevenueUpdateManyWithWhereWithoutGymInput | RevenueUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: RevenueScalarWhereInput | RevenueScalarWhereInput[]
  }

  export type GymStaffUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput> | GymStaffCreateWithoutGymInput[] | GymStaffUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymStaffCreateOrConnectWithoutGymInput | GymStaffCreateOrConnectWithoutGymInput[]
    upsert?: GymStaffUpsertWithWhereUniqueWithoutGymInput | GymStaffUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymStaffCreateManyGymInputEnvelope
    set?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    disconnect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    delete?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    connect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    update?: GymStaffUpdateWithWhereUniqueWithoutGymInput | GymStaffUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymStaffUpdateManyWithWhereWithoutGymInput | GymStaffUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymStaffScalarWhereInput | GymStaffScalarWhereInput[]
  }

  export type GymLimitUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput> | GymLimitCreateWithoutGymInput[] | GymLimitUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutGymInput | GymLimitCreateOrConnectWithoutGymInput[]
    upsert?: GymLimitUpsertWithWhereUniqueWithoutGymInput | GymLimitUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymLimitCreateManyGymInputEnvelope
    set?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    disconnect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    delete?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    update?: GymLimitUpdateWithWhereUniqueWithoutGymInput | GymLimitUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymLimitUpdateManyWithWhereWithoutGymInput | GymLimitUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
  }

  export type AuditUpdateManyWithoutGymNestedInput = {
    create?: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput> | AuditCreateWithoutGymInput[] | AuditUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutGymInput | AuditCreateOrConnectWithoutGymInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutGymInput | AuditUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: AuditCreateManyGymInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutGymInput | AuditUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutGymInput | AuditUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type MembershipCountUpdateManyWithoutGymNestedInput = {
    create?: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput> | MembershipCountCreateWithoutGymInput[] | MembershipCountUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCountCreateOrConnectWithoutGymInput | MembershipCountCreateOrConnectWithoutGymInput[]
    upsert?: MembershipCountUpsertWithWhereUniqueWithoutGymInput | MembershipCountUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MembershipCountCreateManyGymInputEnvelope
    set?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    disconnect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    delete?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    connect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    update?: MembershipCountUpdateWithWhereUniqueWithoutGymInput | MembershipCountUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MembershipCountUpdateManyWithWhereWithoutGymInput | MembershipCountUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MembershipCountScalarWhereInput | MembershipCountScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutGymNestedInput = {
    create?: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymInput
    upsert?: UserUpsertWithoutGymInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGymInput, UserUpdateWithoutGymInput>, UserUncheckedUpdateWithoutGymInput>
  }

  export type MembershipUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutGymInput | MembershipUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutGymInput | MembershipUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutGymInput | MembershipUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    upsert?: MemberTimeLogsUpsertWithWhereUniqueWithoutGymInput | MemberTimeLogsUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    set?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    disconnect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    delete?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
    update?: MemberTimeLogsUpdateWithWhereUniqueWithoutGymInput | MemberTimeLogsUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MemberTimeLogsUpdateManyWithWhereWithoutGymInput | MemberTimeLogsUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
  }

  export type GymStatsUncheckedUpdateOneWithoutGymNestedInput = {
    create?: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
    connectOrCreate?: GymStatsCreateOrConnectWithoutGymInput
    upsert?: GymStatsUpsertWithoutGymInput
    disconnect?: GymStatsWhereInput | boolean
    delete?: GymStatsWhereInput | boolean
    connect?: GymStatsWhereUniqueInput
    update?: XOR<XOR<GymStatsUpdateToOneWithWhereWithoutGymInput, GymStatsUpdateWithoutGymInput>, GymStatsUncheckedUpdateWithoutGymInput>
  }

  export type RevenueUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput> | RevenueCreateWithoutGymInput[] | RevenueUncheckedCreateWithoutGymInput[]
    connectOrCreate?: RevenueCreateOrConnectWithoutGymInput | RevenueCreateOrConnectWithoutGymInput[]
    upsert?: RevenueUpsertWithWhereUniqueWithoutGymInput | RevenueUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: RevenueCreateManyGymInputEnvelope
    set?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    disconnect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    delete?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    connect?: RevenueWhereUniqueInput | RevenueWhereUniqueInput[]
    update?: RevenueUpdateWithWhereUniqueWithoutGymInput | RevenueUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: RevenueUpdateManyWithWhereWithoutGymInput | RevenueUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: RevenueScalarWhereInput | RevenueScalarWhereInput[]
  }

  export type GymStaffUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput> | GymStaffCreateWithoutGymInput[] | GymStaffUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymStaffCreateOrConnectWithoutGymInput | GymStaffCreateOrConnectWithoutGymInput[]
    upsert?: GymStaffUpsertWithWhereUniqueWithoutGymInput | GymStaffUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymStaffCreateManyGymInputEnvelope
    set?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    disconnect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    delete?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    connect?: GymStaffWhereUniqueInput | GymStaffWhereUniqueInput[]
    update?: GymStaffUpdateWithWhereUniqueWithoutGymInput | GymStaffUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymStaffUpdateManyWithWhereWithoutGymInput | GymStaffUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymStaffScalarWhereInput | GymStaffScalarWhereInput[]
  }

  export type GymLimitUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput> | GymLimitCreateWithoutGymInput[] | GymLimitUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymLimitCreateOrConnectWithoutGymInput | GymLimitCreateOrConnectWithoutGymInput[]
    upsert?: GymLimitUpsertWithWhereUniqueWithoutGymInput | GymLimitUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymLimitCreateManyGymInputEnvelope
    set?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    disconnect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    delete?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    connect?: GymLimitWhereUniqueInput | GymLimitWhereUniqueInput[]
    update?: GymLimitUpdateWithWhereUniqueWithoutGymInput | GymLimitUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymLimitUpdateManyWithWhereWithoutGymInput | GymLimitUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
  }

  export type AuditUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput> | AuditCreateWithoutGymInput[] | AuditUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutGymInput | AuditCreateOrConnectWithoutGymInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutGymInput | AuditUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: AuditCreateManyGymInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutGymInput | AuditUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutGymInput | AuditUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type MembershipCountUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput> | MembershipCountCreateWithoutGymInput[] | MembershipCountUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCountCreateOrConnectWithoutGymInput | MembershipCountCreateOrConnectWithoutGymInput[]
    upsert?: MembershipCountUpsertWithWhereUniqueWithoutGymInput | MembershipCountUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: MembershipCountCreateManyGymInputEnvelope
    set?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    disconnect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    delete?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    connect?: MembershipCountWhereUniqueInput | MembershipCountWhereUniqueInput[]
    update?: MembershipCountUpdateWithWhereUniqueWithoutGymInput | MembershipCountUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: MembershipCountUpdateManyWithWhereWithoutGymInput | MembershipCountUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: MembershipCountScalarWhereInput | MembershipCountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGym_staffInput = {
    create?: XOR<UserCreateWithoutGym_staffInput, UserUncheckedCreateWithoutGym_staffInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_staffInput
    connect?: UserWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutStaffsInput = {
    create?: XOR<GymCreateWithoutStaffsInput, GymUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: GymCreateOrConnectWithoutStaffsInput
    connect?: GymWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGym_staffNestedInput = {
    create?: XOR<UserCreateWithoutGym_staffInput, UserUncheckedCreateWithoutGym_staffInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_staffInput
    upsert?: UserUpsertWithoutGym_staffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGym_staffInput, UserUpdateWithoutGym_staffInput>, UserUncheckedUpdateWithoutGym_staffInput>
  }

  export type GymUpdateOneRequiredWithoutStaffsNestedInput = {
    create?: XOR<GymCreateWithoutStaffsInput, GymUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: GymCreateOrConnectWithoutStaffsInput
    upsert?: GymUpsertWithoutStaffsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutStaffsInput, GymUpdateWithoutStaffsInput>, GymUncheckedUpdateWithoutStaffsInput>
  }

  export type MemberCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMembershipsInput
    connect?: MemberWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMembershipsInput
    connect?: GymWhereUniqueInput
  }

  export type MemberTimeLogsMembershipCreateNestedManyWithoutMembershipInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput> | MemberTimeLogsMembershipCreateWithoutMembershipInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput | MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMembershipInputEnvelope
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput> | MemberTimeLogsMembershipCreateWithoutMembershipInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput | MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMembershipInputEnvelope
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMembershipsInput
    upsert?: MemberUpsertWithoutMembershipsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMembershipsInput, MemberUpdateWithoutMembershipsInput>, MemberUncheckedUpdateWithoutMembershipsInput>
  }

  export type GymUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMembershipsInput
    upsert?: GymUpsertWithoutMembershipsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutMembershipsInput, GymUpdateWithoutMembershipsInput>, GymUncheckedUpdateWithoutMembershipsInput>
  }

  export type MemberTimeLogsMembershipUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput> | MemberTimeLogsMembershipCreateWithoutMembershipInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput | MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput[]
    upsert?: MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMembershipInput | MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMembershipInputEnvelope
    set?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    disconnect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    delete?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    update?: MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMembershipInput | MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: MemberTimeLogsMembershipUpdateManyWithWhereWithoutMembershipInput | MemberTimeLogsMembershipUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
  }

  export type MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput> | MemberTimeLogsMembershipCreateWithoutMembershipInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput | MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput[]
    upsert?: MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMembershipInput | MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMembershipInputEnvelope
    set?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    disconnect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    delete?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    update?: MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMembershipInput | MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: MemberTimeLogsMembershipUpdateManyWithWhereWithoutMembershipInput | MemberTimeLogsMembershipUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutAttendance_logsInput = {
    create?: XOR<MemberCreateWithoutAttendance_logsInput, MemberUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendance_logsInput
    connect?: MemberWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutMember_time_logsInput = {
    create?: XOR<GymCreateWithoutMember_time_logsInput, GymUncheckedCreateWithoutMember_time_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMember_time_logsInput
    connect?: GymWhereUniqueInput
  }

  export type MemberTimeLogsMembershipCreateNestedManyWithoutMember_time_logInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput> | MemberTimeLogsMembershipCreateWithoutMember_time_logInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput | MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMember_time_logInputEnvelope
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
  }

  export type MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMember_time_logInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput> | MemberTimeLogsMembershipCreateWithoutMember_time_logInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput | MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMember_time_logInputEnvelope
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
  }

  export type MemberUpdateOneRequiredWithoutAttendance_logsNestedInput = {
    create?: XOR<MemberCreateWithoutAttendance_logsInput, MemberUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendance_logsInput
    upsert?: MemberUpsertWithoutAttendance_logsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAttendance_logsInput, MemberUpdateWithoutAttendance_logsInput>, MemberUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type GymUpdateOneRequiredWithoutMember_time_logsNestedInput = {
    create?: XOR<GymCreateWithoutMember_time_logsInput, GymUncheckedCreateWithoutMember_time_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutMember_time_logsInput
    upsert?: GymUpsertWithoutMember_time_logsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutMember_time_logsInput, GymUpdateWithoutMember_time_logsInput>, GymUncheckedUpdateWithoutMember_time_logsInput>
  }

  export type MemberTimeLogsMembershipUpdateManyWithoutMember_time_logNestedInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput> | MemberTimeLogsMembershipCreateWithoutMember_time_logInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput | MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput[]
    upsert?: MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMember_time_logInput | MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMember_time_logInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMember_time_logInputEnvelope
    set?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    disconnect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    delete?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    update?: MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMember_time_logInput | MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMember_time_logInput[]
    updateMany?: MemberTimeLogsMembershipUpdateManyWithWhereWithoutMember_time_logInput | MemberTimeLogsMembershipUpdateManyWithWhereWithoutMember_time_logInput[]
    deleteMany?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
  }

  export type MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logNestedInput = {
    create?: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput> | MemberTimeLogsMembershipCreateWithoutMember_time_logInput[] | MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput[]
    connectOrCreate?: MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput | MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput[]
    upsert?: MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMember_time_logInput | MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMember_time_logInput[]
    createMany?: MemberTimeLogsMembershipCreateManyMember_time_logInputEnvelope
    set?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    disconnect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    delete?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    connect?: MemberTimeLogsMembershipWhereUniqueInput | MemberTimeLogsMembershipWhereUniqueInput[]
    update?: MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMember_time_logInput | MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMember_time_logInput[]
    updateMany?: MemberTimeLogsMembershipUpdateManyWithWhereWithoutMember_time_logInput | MemberTimeLogsMembershipUpdateManyWithWhereWithoutMember_time_logInput[]
    deleteMany?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
  }

  export type MemberTimeLogsCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMembershipsInput, MemberTimeLogsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMembershipsInput
    connect?: MemberTimeLogsWhereUniqueInput
  }

  export type MembershipCreateNestedOneWithoutAttendance_logsInput = {
    create?: XOR<MembershipCreateWithoutAttendance_logsInput, MembershipUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutAttendance_logsInput
    connect?: MembershipWhereUniqueInput
  }

  export type MemberTimeLogsUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<MemberTimeLogsCreateWithoutMembershipsInput, MemberTimeLogsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutMembershipsInput
    upsert?: MemberTimeLogsUpsertWithoutMembershipsInput
    connect?: MemberTimeLogsWhereUniqueInput
    update?: XOR<XOR<MemberTimeLogsUpdateToOneWithWhereWithoutMembershipsInput, MemberTimeLogsUpdateWithoutMembershipsInput>, MemberTimeLogsUncheckedUpdateWithoutMembershipsInput>
  }

  export type MembershipUpdateOneRequiredWithoutAttendance_logsNestedInput = {
    create?: XOR<MembershipCreateWithoutAttendance_logsInput, MembershipUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutAttendance_logsInput
    upsert?: MembershipUpsertWithoutAttendance_logsInput
    connect?: MembershipWhereUniqueInput
    update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutAttendance_logsInput, MembershipUpdateWithoutAttendance_logsInput>, MembershipUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GymCreateWithoutAudit_logsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutAudit_logsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutAudit_logsInput, GymUncheckedCreateWithoutAudit_logsInput>
  }

  export type GymUpsertWithoutAudit_logsInput = {
    update: XOR<GymUpdateWithoutAudit_logsInput, GymUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<GymCreateWithoutAudit_logsInput, GymUncheckedCreateWithoutAudit_logsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutAudit_logsInput, GymUncheckedUpdateWithoutAudit_logsInput>
  }

  export type GymUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymLimitCreateWithoutLimitInput = {
    value: number
    gym: GymCreateNestedOneWithoutLimitsInput
  }

  export type GymLimitUncheckedCreateWithoutLimitInput = {
    id?: number
    gym_id: string
    value: number
  }

  export type GymLimitCreateOrConnectWithoutLimitInput = {
    where: GymLimitWhereUniqueInput
    create: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput>
  }

  export type GymLimitCreateManyLimitInputEnvelope = {
    data: GymLimitCreateManyLimitInput | GymLimitCreateManyLimitInput[]
    skipDuplicates?: boolean
  }

  export type GymLimitUpsertWithWhereUniqueWithoutLimitInput = {
    where: GymLimitWhereUniqueInput
    update: XOR<GymLimitUpdateWithoutLimitInput, GymLimitUncheckedUpdateWithoutLimitInput>
    create: XOR<GymLimitCreateWithoutLimitInput, GymLimitUncheckedCreateWithoutLimitInput>
  }

  export type GymLimitUpdateWithWhereUniqueWithoutLimitInput = {
    where: GymLimitWhereUniqueInput
    data: XOR<GymLimitUpdateWithoutLimitInput, GymLimitUncheckedUpdateWithoutLimitInput>
  }

  export type GymLimitUpdateManyWithWhereWithoutLimitInput = {
    where: GymLimitScalarWhereInput
    data: XOR<GymLimitUpdateManyMutationInput, GymLimitUncheckedUpdateManyWithoutLimitInput>
  }

  export type GymLimitScalarWhereInput = {
    AND?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
    OR?: GymLimitScalarWhereInput[]
    NOT?: GymLimitScalarWhereInput | GymLimitScalarWhereInput[]
    id?: IntFilter<"GymLimit"> | number
    gym_id?: StringFilter<"GymLimit"> | string
    limit_id?: IntFilter<"GymLimit"> | number
    value?: IntFilter<"GymLimit"> | number
  }

  export type GymCreateWithoutLimitsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutLimitsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutLimitsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutLimitsInput, GymUncheckedCreateWithoutLimitsInput>
  }

  export type LimitCreateWithoutSettingsInput = {
    id: number
    name: string
    value: number
  }

  export type LimitUncheckedCreateWithoutSettingsInput = {
    id: number
    name: string
    value: number
  }

  export type LimitCreateOrConnectWithoutSettingsInput = {
    where: LimitWhereUniqueInput
    create: XOR<LimitCreateWithoutSettingsInput, LimitUncheckedCreateWithoutSettingsInput>
  }

  export type GymUpsertWithoutLimitsInput = {
    update: XOR<GymUpdateWithoutLimitsInput, GymUncheckedUpdateWithoutLimitsInput>
    create: XOR<GymCreateWithoutLimitsInput, GymUncheckedCreateWithoutLimitsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutLimitsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutLimitsInput, GymUncheckedUpdateWithoutLimitsInput>
  }

  export type GymUpdateWithoutLimitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutLimitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type LimitUpsertWithoutSettingsInput = {
    update: XOR<LimitUpdateWithoutSettingsInput, LimitUncheckedUpdateWithoutSettingsInput>
    create: XOR<LimitCreateWithoutSettingsInput, LimitUncheckedCreateWithoutSettingsInput>
    where?: LimitWhereInput
  }

  export type LimitUpdateToOneWithWhereWithoutSettingsInput = {
    where?: LimitWhereInput
    data: XOR<LimitUpdateWithoutSettingsInput, LimitUncheckedUpdateWithoutSettingsInput>
  }

  export type LimitUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type LimitUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymCreateWithoutGym_statsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGym_statsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGym_statsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
  }

  export type GymUpsertWithoutGym_statsInput = {
    update: XOR<GymUpdateWithoutGym_statsInput, GymUncheckedUpdateWithoutGym_statsInput>
    create: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutGym_statsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutGym_statsInput, GymUncheckedUpdateWithoutGym_statsInput>
  }

  export type GymUpdateWithoutGym_statsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutGym_statsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateWithoutRevenuesInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutRevenuesInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutRevenuesInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutRevenuesInput, GymUncheckedCreateWithoutRevenuesInput>
  }

  export type GymUpsertWithoutRevenuesInput = {
    update: XOR<GymUpdateWithoutRevenuesInput, GymUncheckedUpdateWithoutRevenuesInput>
    create: XOR<GymCreateWithoutRevenuesInput, GymUncheckedCreateWithoutRevenuesInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutRevenuesInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutRevenuesInput, GymUncheckedUpdateWithoutRevenuesInput>
  }

  export type GymUpdateWithoutRevenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutRevenuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateWithoutMembership_countsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMembership_countsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMembership_countsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMembership_countsInput, GymUncheckedCreateWithoutMembership_countsInput>
  }

  export type GymUpsertWithoutMembership_countsInput = {
    update: XOR<GymUpdateWithoutMembership_countsInput, GymUncheckedUpdateWithoutMembership_countsInput>
    create: XOR<GymCreateWithoutMembership_countsInput, GymUncheckedCreateWithoutMembership_countsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutMembership_countsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutMembership_countsInput, GymUncheckedUpdateWithoutMembership_countsInput>
  }

  export type GymUpdateWithoutMembership_countsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMembership_countsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutOwnerInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
  }

  export type GymStaffCreateWithoutUserInput = {
    created_at?: Date | string
    created_by: string
    gym: GymCreateNestedOneWithoutStaffsInput
  }

  export type GymStaffUncheckedCreateWithoutUserInput = {
    id?: number
    gym_id: string
    created_at?: Date | string
    created_by: string
  }

  export type GymStaffCreateOrConnectWithoutUserInput = {
    where: GymStaffWhereUniqueInput
    create: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
  }

  export type GymUpsertWithoutOwnerInput = {
    update: XOR<GymUpdateWithoutOwnerInput, GymUncheckedUpdateWithoutOwnerInput>
    create: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutOwnerInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutOwnerInput, GymUncheckedUpdateWithoutOwnerInput>
  }

  export type GymUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymStaffUpsertWithoutUserInput = {
    update: XOR<GymStaffUpdateWithoutUserInput, GymStaffUncheckedUpdateWithoutUserInput>
    create: XOR<GymStaffCreateWithoutUserInput, GymStaffUncheckedCreateWithoutUserInput>
    where?: GymStaffWhereInput
  }

  export type GymStaffUpdateToOneWithWhereWithoutUserInput = {
    where?: GymStaffWhereInput
    data: XOR<GymStaffUpdateWithoutUserInput, GymStaffUncheckedUpdateWithoutUserInput>
  }

  export type GymStaffUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type GymStaffUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateWithoutMemberInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    gym: GymCreateNestedOneWithoutMembershipsInput
    attendance_logs?: MemberTimeLogsMembershipCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutMemberInput = {
    id?: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput>
  }

  export type MembershipCreateManyMemberInputEnvelope = {
    data: MembershipCreateManyMemberInput | MembershipCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MemberTimeLogsCreateWithoutMemberInput = {
    checked_in_at?: Date | string
    recorded_by: string
    gym: GymCreateNestedOneWithoutMember_time_logsInput
    memberships?: MemberTimeLogsMembershipCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsUncheckedCreateWithoutMemberInput = {
    id?: number
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
    memberships?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsCreateOrConnectWithoutMemberInput = {
    where: MemberTimeLogsWhereUniqueInput
    create: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput>
  }

  export type MemberTimeLogsCreateManyMemberInputEnvelope = {
    data: MemberTimeLogsCreateManyMemberInput | MemberTimeLogsCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MembershipUpsertWithWhereUniqueWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutMemberInput, MembershipUncheckedUpdateWithoutMemberInput>
    create: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutMemberInput, MembershipUncheckedUpdateWithoutMemberInput>
  }

  export type MembershipUpdateManyWithWhereWithoutMemberInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutMemberInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    member_id?: StringFilter<"Membership"> | string
    gym_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    sessions_left?: IntNullableFilter<"Membership"> | number | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_reminded?: BoolFilter<"Membership"> | boolean
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: DecimalFilter<"Membership"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
  }

  export type MemberTimeLogsUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberTimeLogsWhereUniqueInput
    update: XOR<MemberTimeLogsUpdateWithoutMemberInput, MemberTimeLogsUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberTimeLogsCreateWithoutMemberInput, MemberTimeLogsUncheckedCreateWithoutMemberInput>
  }

  export type MemberTimeLogsUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberTimeLogsWhereUniqueInput
    data: XOR<MemberTimeLogsUpdateWithoutMemberInput, MemberTimeLogsUncheckedUpdateWithoutMemberInput>
  }

  export type MemberTimeLogsUpdateManyWithWhereWithoutMemberInput = {
    where: MemberTimeLogsScalarWhereInput
    data: XOR<MemberTimeLogsUpdateManyMutationInput, MemberTimeLogsUncheckedUpdateManyWithoutMemberInput>
  }

  export type MemberTimeLogsScalarWhereInput = {
    AND?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
    OR?: MemberTimeLogsScalarWhereInput[]
    NOT?: MemberTimeLogsScalarWhereInput | MemberTimeLogsScalarWhereInput[]
    id?: IntFilter<"MemberTimeLogs"> | number
    member_id?: StringFilter<"MemberTimeLogs"> | string
    gym_id?: StringFilter<"MemberTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"MemberTimeLogs"> | Date | string
    recorded_by?: StringFilter<"MemberTimeLogs"> | string
  }

  export type MembershipCreateWithoutGymInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    attendance_logs?: MemberTimeLogsMembershipCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutGymInput = {
    id?: string
    member_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutGymInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput>
  }

  export type MembershipCreateManyGymInputEnvelope = {
    data: MembershipCreateManyGymInput | MembershipCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type MemberTimeLogsCreateWithoutGymInput = {
    checked_in_at?: Date | string
    recorded_by: string
    member: MemberCreateNestedOneWithoutAttendance_logsInput
    memberships?: MemberTimeLogsMembershipCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsUncheckedCreateWithoutGymInput = {
    id?: number
    member_id: string
    checked_in_at?: Date | string
    recorded_by: string
    memberships?: MemberTimeLogsMembershipUncheckedCreateNestedManyWithoutMember_time_logInput
  }

  export type MemberTimeLogsCreateOrConnectWithoutGymInput = {
    where: MemberTimeLogsWhereUniqueInput
    create: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput>
  }

  export type MemberTimeLogsCreateManyGymInputEnvelope = {
    data: MemberTimeLogsCreateManyGymInput | MemberTimeLogsCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type GymStatsCreateWithoutGymInput = {
    id?: string
    total_revenue: Decimal | DecimalJsLike | number | string
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUncheckedCreateWithoutGymInput = {
    id?: string
    total_revenue: Decimal | DecimalJsLike | number | string
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsCreateOrConnectWithoutGymInput = {
    where: GymStatsWhereUniqueInput
    create: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
  }

  export type RevenueCreateWithoutGymInput = {
    id?: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type RevenueUncheckedCreateWithoutGymInput = {
    id?: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type RevenueCreateOrConnectWithoutGymInput = {
    where: RevenueWhereUniqueInput
    create: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput>
  }

  export type RevenueCreateManyGymInputEnvelope = {
    data: RevenueCreateManyGymInput | RevenueCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type GymStaffCreateWithoutGymInput = {
    created_at?: Date | string
    created_by: string
    user: UserCreateNestedOneWithoutGym_staffInput
  }

  export type GymStaffUncheckedCreateWithoutGymInput = {
    id?: number
    user_id: string
    created_at?: Date | string
    created_by: string
  }

  export type GymStaffCreateOrConnectWithoutGymInput = {
    where: GymStaffWhereUniqueInput
    create: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput>
  }

  export type GymStaffCreateManyGymInputEnvelope = {
    data: GymStaffCreateManyGymInput | GymStaffCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type GymLimitCreateWithoutGymInput = {
    value: number
    limit: LimitCreateNestedOneWithoutSettingsInput
  }

  export type GymLimitUncheckedCreateWithoutGymInput = {
    id?: number
    limit_id: number
    value: number
  }

  export type GymLimitCreateOrConnectWithoutGymInput = {
    where: GymLimitWhereUniqueInput
    create: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput>
  }

  export type GymLimitCreateManyGymInputEnvelope = {
    data: GymLimitCreateManyGymInput | GymLimitCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type AuditCreateWithoutGymInput = {
    id?: string
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
  }

  export type AuditUncheckedCreateWithoutGymInput = {
    id?: string
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
  }

  export type AuditCreateOrConnectWithoutGymInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput>
  }

  export type AuditCreateManyGymInputEnvelope = {
    data: AuditCreateManyGymInput | AuditCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCountCreateWithoutGymInput = {
    id?: string
    year: number
    month: number
    count: number
    created_at?: Date | string
  }

  export type MembershipCountUncheckedCreateWithoutGymInput = {
    id?: string
    year: number
    month: number
    count: number
    created_at?: Date | string
  }

  export type MembershipCountCreateOrConnectWithoutGymInput = {
    where: MembershipCountWhereUniqueInput
    create: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput>
  }

  export type MembershipCountCreateManyGymInputEnvelope = {
    data: MembershipCountCreateManyGymInput | MembershipCountCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGymInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym_staff?: GymStaffCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGymInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym_staff?: GymStaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGymInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
  }

  export type MembershipUpsertWithWhereUniqueWithoutGymInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutGymInput, MembershipUncheckedUpdateWithoutGymInput>
    create: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutGymInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutGymInput, MembershipUncheckedUpdateWithoutGymInput>
  }

  export type MembershipUpdateManyWithWhereWithoutGymInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutGymInput>
  }

  export type MemberTimeLogsUpsertWithWhereUniqueWithoutGymInput = {
    where: MemberTimeLogsWhereUniqueInput
    update: XOR<MemberTimeLogsUpdateWithoutGymInput, MemberTimeLogsUncheckedUpdateWithoutGymInput>
    create: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput>
  }

  export type MemberTimeLogsUpdateWithWhereUniqueWithoutGymInput = {
    where: MemberTimeLogsWhereUniqueInput
    data: XOR<MemberTimeLogsUpdateWithoutGymInput, MemberTimeLogsUncheckedUpdateWithoutGymInput>
  }

  export type MemberTimeLogsUpdateManyWithWhereWithoutGymInput = {
    where: MemberTimeLogsScalarWhereInput
    data: XOR<MemberTimeLogsUpdateManyMutationInput, MemberTimeLogsUncheckedUpdateManyWithoutGymInput>
  }

  export type GymStatsUpsertWithoutGymInput = {
    update: XOR<GymStatsUpdateWithoutGymInput, GymStatsUncheckedUpdateWithoutGymInput>
    create: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
    where?: GymStatsWhereInput
  }

  export type GymStatsUpdateToOneWithWhereWithoutGymInput = {
    where?: GymStatsWhereInput
    data: XOR<GymStatsUpdateWithoutGymInput, GymStatsUncheckedUpdateWithoutGymInput>
  }

  export type GymStatsUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueUpsertWithWhereUniqueWithoutGymInput = {
    where: RevenueWhereUniqueInput
    update: XOR<RevenueUpdateWithoutGymInput, RevenueUncheckedUpdateWithoutGymInput>
    create: XOR<RevenueCreateWithoutGymInput, RevenueUncheckedCreateWithoutGymInput>
  }

  export type RevenueUpdateWithWhereUniqueWithoutGymInput = {
    where: RevenueWhereUniqueInput
    data: XOR<RevenueUpdateWithoutGymInput, RevenueUncheckedUpdateWithoutGymInput>
  }

  export type RevenueUpdateManyWithWhereWithoutGymInput = {
    where: RevenueScalarWhereInput
    data: XOR<RevenueUpdateManyMutationInput, RevenueUncheckedUpdateManyWithoutGymInput>
  }

  export type RevenueScalarWhereInput = {
    AND?: RevenueScalarWhereInput | RevenueScalarWhereInput[]
    OR?: RevenueScalarWhereInput[]
    NOT?: RevenueScalarWhereInput | RevenueScalarWhereInput[]
    id?: StringFilter<"Revenue"> | string
    gym_id?: StringFilter<"Revenue"> | string
    year?: IntFilter<"Revenue"> | number
    month?: IntFilter<"Revenue"> | number
    amount?: DecimalFilter<"Revenue"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Revenue"> | Date | string
  }

  export type GymStaffUpsertWithWhereUniqueWithoutGymInput = {
    where: GymStaffWhereUniqueInput
    update: XOR<GymStaffUpdateWithoutGymInput, GymStaffUncheckedUpdateWithoutGymInput>
    create: XOR<GymStaffCreateWithoutGymInput, GymStaffUncheckedCreateWithoutGymInput>
  }

  export type GymStaffUpdateWithWhereUniqueWithoutGymInput = {
    where: GymStaffWhereUniqueInput
    data: XOR<GymStaffUpdateWithoutGymInput, GymStaffUncheckedUpdateWithoutGymInput>
  }

  export type GymStaffUpdateManyWithWhereWithoutGymInput = {
    where: GymStaffScalarWhereInput
    data: XOR<GymStaffUpdateManyMutationInput, GymStaffUncheckedUpdateManyWithoutGymInput>
  }

  export type GymStaffScalarWhereInput = {
    AND?: GymStaffScalarWhereInput | GymStaffScalarWhereInput[]
    OR?: GymStaffScalarWhereInput[]
    NOT?: GymStaffScalarWhereInput | GymStaffScalarWhereInput[]
    id?: IntFilter<"GymStaff"> | number
    user_id?: StringFilter<"GymStaff"> | string
    gym_id?: StringFilter<"GymStaff"> | string
    created_at?: DateTimeFilter<"GymStaff"> | Date | string
    created_by?: StringFilter<"GymStaff"> | string
  }

  export type GymLimitUpsertWithWhereUniqueWithoutGymInput = {
    where: GymLimitWhereUniqueInput
    update: XOR<GymLimitUpdateWithoutGymInput, GymLimitUncheckedUpdateWithoutGymInput>
    create: XOR<GymLimitCreateWithoutGymInput, GymLimitUncheckedCreateWithoutGymInput>
  }

  export type GymLimitUpdateWithWhereUniqueWithoutGymInput = {
    where: GymLimitWhereUniqueInput
    data: XOR<GymLimitUpdateWithoutGymInput, GymLimitUncheckedUpdateWithoutGymInput>
  }

  export type GymLimitUpdateManyWithWhereWithoutGymInput = {
    where: GymLimitScalarWhereInput
    data: XOR<GymLimitUpdateManyMutationInput, GymLimitUncheckedUpdateManyWithoutGymInput>
  }

  export type AuditUpsertWithWhereUniqueWithoutGymInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutGymInput, AuditUncheckedUpdateWithoutGymInput>
    create: XOR<AuditCreateWithoutGymInput, AuditUncheckedCreateWithoutGymInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutGymInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutGymInput, AuditUncheckedUpdateWithoutGymInput>
  }

  export type AuditUpdateManyWithWhereWithoutGymInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutGymInput>
  }

  export type AuditScalarWhereInput = {
    AND?: AuditScalarWhereInput | AuditScalarWhereInput[]
    OR?: AuditScalarWhereInput[]
    NOT?: AuditScalarWhereInput | AuditScalarWhereInput[]
    id?: StringFilter<"Audit"> | string
    gym_id?: StringNullableFilter<"Audit"> | string | null
    username?: StringFilter<"Audit"> | string
    table?: StringFilter<"Audit"> | string
    action?: StringFilter<"Audit"> | string
    reference_id?: StringNullableFilter<"Audit"> | string | null
    metadata?: JsonNullableFilter<"Audit">
    ip_address?: StringNullableFilter<"Audit"> | string | null
    device_info?: JsonNullableFilter<"Audit">
    created_at?: DateTimeFilter<"Audit"> | Date | string
    notes?: StringNullableFilter<"Audit"> | string | null
  }

  export type MembershipCountUpsertWithWhereUniqueWithoutGymInput = {
    where: MembershipCountWhereUniqueInput
    update: XOR<MembershipCountUpdateWithoutGymInput, MembershipCountUncheckedUpdateWithoutGymInput>
    create: XOR<MembershipCountCreateWithoutGymInput, MembershipCountUncheckedCreateWithoutGymInput>
  }

  export type MembershipCountUpdateWithWhereUniqueWithoutGymInput = {
    where: MembershipCountWhereUniqueInput
    data: XOR<MembershipCountUpdateWithoutGymInput, MembershipCountUncheckedUpdateWithoutGymInput>
  }

  export type MembershipCountUpdateManyWithWhereWithoutGymInput = {
    where: MembershipCountScalarWhereInput
    data: XOR<MembershipCountUpdateManyMutationInput, MembershipCountUncheckedUpdateManyWithoutGymInput>
  }

  export type MembershipCountScalarWhereInput = {
    AND?: MembershipCountScalarWhereInput | MembershipCountScalarWhereInput[]
    OR?: MembershipCountScalarWhereInput[]
    NOT?: MembershipCountScalarWhereInput | MembershipCountScalarWhereInput[]
    id?: StringFilter<"MembershipCount"> | string
    gym_id?: StringFilter<"MembershipCount"> | string
    year?: IntFilter<"MembershipCount"> | number
    month?: IntFilter<"MembershipCount"> | number
    count?: IntFilter<"MembershipCount"> | number
    created_at?: DateTimeFilter<"MembershipCount"> | Date | string
  }

  export type UserUpsertWithoutGymInput = {
    update: XOR<UserUpdateWithoutGymInput, UserUncheckedUpdateWithoutGymInput>
    create: XOR<UserCreateWithoutGymInput, UserUncheckedCreateWithoutGymInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGymInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGymInput, UserUncheckedUpdateWithoutGymInput>
  }

  export type UserUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym_staff?: GymStaffUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym_staff?: GymStaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutGym_staffInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym?: GymCreateNestedOneWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutGym_staffInput = {
    id?: string
    username?: string | null
    firstname: string
    lastname: string
    password: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym?: GymUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutGym_staffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGym_staffInput, UserUncheckedCreateWithoutGym_staffInput>
  }

  export type GymCreateWithoutStaffsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutStaffsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutStaffsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutStaffsInput, GymUncheckedCreateWithoutStaffsInput>
  }

  export type UserUpsertWithoutGym_staffInput = {
    update: XOR<UserUpdateWithoutGym_staffInput, UserUncheckedUpdateWithoutGym_staffInput>
    create: XOR<UserCreateWithoutGym_staffInput, UserUncheckedCreateWithoutGym_staffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGym_staffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGym_staffInput, UserUncheckedUpdateWithoutGym_staffInput>
  }

  export type UserUpdateWithoutGym_staffInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutGym_staffInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type GymUpsertWithoutStaffsInput = {
    update: XOR<GymUpdateWithoutStaffsInput, GymUncheckedUpdateWithoutStaffsInput>
    create: XOR<GymCreateWithoutStaffsInput, GymUncheckedCreateWithoutStaffsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutStaffsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutStaffsInput, GymUncheckedUpdateWithoutStaffsInput>
  }

  export type GymUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type MemberCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMembershipsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
  }

  export type GymCreateWithoutMembershipsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMembershipsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMembershipsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
  }

  export type MemberTimeLogsMembershipCreateWithoutMembershipInput = {
    member_time_log: MemberTimeLogsCreateNestedOneWithoutMembershipsInput
  }

  export type MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput = {
    id?: number
    member_time_log_id: number
  }

  export type MemberTimeLogsMembershipCreateOrConnectWithoutMembershipInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    create: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput>
  }

  export type MemberTimeLogsMembershipCreateManyMembershipInputEnvelope = {
    data: MemberTimeLogsMembershipCreateManyMembershipInput | MemberTimeLogsMembershipCreateManyMembershipInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutMembershipsInput = {
    update: XOR<MemberUpdateWithoutMembershipsInput, MemberUncheckedUpdateWithoutMembershipsInput>
    create: XOR<MemberCreateWithoutMembershipsInput, MemberUncheckedCreateWithoutMembershipsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMembershipsInput, MemberUncheckedUpdateWithoutMembershipsInput>
  }

  export type MemberUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GymUpsertWithoutMembershipsInput = {
    update: XOR<GymUpdateWithoutMembershipsInput, GymUncheckedUpdateWithoutMembershipsInput>
    create: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutMembershipsInput, GymUncheckedUpdateWithoutMembershipsInput>
  }

  export type GymUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMembershipInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    update: XOR<MemberTimeLogsMembershipUpdateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedUpdateWithoutMembershipInput>
    create: XOR<MemberTimeLogsMembershipCreateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedCreateWithoutMembershipInput>
  }

  export type MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMembershipInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    data: XOR<MemberTimeLogsMembershipUpdateWithoutMembershipInput, MemberTimeLogsMembershipUncheckedUpdateWithoutMembershipInput>
  }

  export type MemberTimeLogsMembershipUpdateManyWithWhereWithoutMembershipInput = {
    where: MemberTimeLogsMembershipScalarWhereInput
    data: XOR<MemberTimeLogsMembershipUpdateManyMutationInput, MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipInput>
  }

  export type MemberTimeLogsMembershipScalarWhereInput = {
    AND?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
    OR?: MemberTimeLogsMembershipScalarWhereInput[]
    NOT?: MemberTimeLogsMembershipScalarWhereInput | MemberTimeLogsMembershipScalarWhereInput[]
    id?: IntFilter<"MemberTimeLogsMembership"> | number
    member_time_log_id?: IntFilter<"MemberTimeLogsMembership"> | number
    membership_id?: StringFilter<"MemberTimeLogsMembership"> | string
  }

  export type MemberCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutAttendance_logsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAttendance_logsInput, MemberUncheckedCreateWithoutAttendance_logsInput>
  }

  export type GymCreateWithoutMember_time_logsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
    revenues?: RevenueCreateNestedManyWithoutGymInput
    staffs?: GymStaffCreateNestedManyWithoutGymInput
    limits?: GymLimitCreateNestedManyWithoutGymInput
    audit_logs?: AuditCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountCreateNestedManyWithoutGymInput
    owner: UserCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMember_time_logsInput = {
    id?: string
    owner_id: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    revenues?: RevenueUncheckedCreateNestedManyWithoutGymInput
    staffs?: GymStaffUncheckedCreateNestedManyWithoutGymInput
    limits?: GymLimitUncheckedCreateNestedManyWithoutGymInput
    audit_logs?: AuditUncheckedCreateNestedManyWithoutGymInput
    membership_counts?: MembershipCountUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMember_time_logsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMember_time_logsInput, GymUncheckedCreateWithoutMember_time_logsInput>
  }

  export type MemberTimeLogsMembershipCreateWithoutMember_time_logInput = {
    membership: MembershipCreateNestedOneWithoutAttendance_logsInput
  }

  export type MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput = {
    id?: number
    membership_id: string
  }

  export type MemberTimeLogsMembershipCreateOrConnectWithoutMember_time_logInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    create: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput>
  }

  export type MemberTimeLogsMembershipCreateManyMember_time_logInputEnvelope = {
    data: MemberTimeLogsMembershipCreateManyMember_time_logInput | MemberTimeLogsMembershipCreateManyMember_time_logInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutAttendance_logsInput = {
    update: XOR<MemberUpdateWithoutAttendance_logsInput, MemberUncheckedUpdateWithoutAttendance_logsInput>
    create: XOR<MemberCreateWithoutAttendance_logsInput, MemberUncheckedCreateWithoutAttendance_logsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutAttendance_logsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutAttendance_logsInput, MemberUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type MemberUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GymUpsertWithoutMember_time_logsInput = {
    update: XOR<GymUpdateWithoutMember_time_logsInput, GymUncheckedUpdateWithoutMember_time_logsInput>
    create: XOR<GymCreateWithoutMember_time_logsInput, GymUncheckedCreateWithoutMember_time_logsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutMember_time_logsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutMember_time_logsInput, GymUncheckedUpdateWithoutMember_time_logsInput>
  }

  export type GymUpdateWithoutMember_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
    revenues?: RevenueUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUpdateManyWithoutGymNestedInput
    limits?: GymLimitUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUpdateManyWithoutGymNestedInput
    owner?: UserUpdateOneRequiredWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMember_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    revenues?: RevenueUncheckedUpdateManyWithoutGymNestedInput
    staffs?: GymStaffUncheckedUpdateManyWithoutGymNestedInput
    limits?: GymLimitUncheckedUpdateManyWithoutGymNestedInput
    audit_logs?: AuditUncheckedUpdateManyWithoutGymNestedInput
    membership_counts?: MembershipCountUncheckedUpdateManyWithoutGymNestedInput
  }

  export type MemberTimeLogsMembershipUpsertWithWhereUniqueWithoutMember_time_logInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    update: XOR<MemberTimeLogsMembershipUpdateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedUpdateWithoutMember_time_logInput>
    create: XOR<MemberTimeLogsMembershipCreateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedCreateWithoutMember_time_logInput>
  }

  export type MemberTimeLogsMembershipUpdateWithWhereUniqueWithoutMember_time_logInput = {
    where: MemberTimeLogsMembershipWhereUniqueInput
    data: XOR<MemberTimeLogsMembershipUpdateWithoutMember_time_logInput, MemberTimeLogsMembershipUncheckedUpdateWithoutMember_time_logInput>
  }

  export type MemberTimeLogsMembershipUpdateManyWithWhereWithoutMember_time_logInput = {
    where: MemberTimeLogsMembershipScalarWhereInput
    data: XOR<MemberTimeLogsMembershipUpdateManyMutationInput, MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logInput>
  }

  export type MemberTimeLogsCreateWithoutMembershipsInput = {
    checked_in_at?: Date | string
    recorded_by: string
    member: MemberCreateNestedOneWithoutAttendance_logsInput
    gym: GymCreateNestedOneWithoutMember_time_logsInput
  }

  export type MemberTimeLogsUncheckedCreateWithoutMembershipsInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type MemberTimeLogsCreateOrConnectWithoutMembershipsInput = {
    where: MemberTimeLogsWhereUniqueInput
    create: XOR<MemberTimeLogsCreateWithoutMembershipsInput, MemberTimeLogsUncheckedCreateWithoutMembershipsInput>
  }

  export type MembershipCreateWithoutAttendance_logsInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipCreateOrConnectWithoutAttendance_logsInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutAttendance_logsInput, MembershipUncheckedCreateWithoutAttendance_logsInput>
  }

  export type MemberTimeLogsUpsertWithoutMembershipsInput = {
    update: XOR<MemberTimeLogsUpdateWithoutMembershipsInput, MemberTimeLogsUncheckedUpdateWithoutMembershipsInput>
    create: XOR<MemberTimeLogsCreateWithoutMembershipsInput, MemberTimeLogsUncheckedCreateWithoutMembershipsInput>
    where?: MemberTimeLogsWhereInput
  }

  export type MemberTimeLogsUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: MemberTimeLogsWhereInput
    data: XOR<MemberTimeLogsUpdateWithoutMembershipsInput, MemberTimeLogsUncheckedUpdateWithoutMembershipsInput>
  }

  export type MemberTimeLogsUpdateWithoutMembershipsInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutMember_time_logsNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateWithoutMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUpsertWithoutAttendance_logsInput = {
    update: XOR<MembershipUpdateWithoutAttendance_logsInput, MembershipUncheckedUpdateWithoutAttendance_logsInput>
    create: XOR<MembershipCreateWithoutAttendance_logsInput, MembershipUncheckedCreateWithoutAttendance_logsInput>
    where?: MembershipWhereInput
  }

  export type MembershipUpdateToOneWithWhereWithoutAttendance_logsInput = {
    where?: MembershipWhereInput
    data: XOR<MembershipUpdateWithoutAttendance_logsInput, MembershipUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type MembershipUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymLimitCreateManyLimitInput = {
    id?: number
    gym_id: string
    value: number
  }

  export type GymLimitUpdateWithoutLimitInput = {
    value?: IntFieldUpdateOperationsInput | number
    gym?: GymUpdateOneRequiredWithoutLimitsNestedInput
  }

  export type GymLimitUncheckedUpdateWithoutLimitInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymLimitUncheckedUpdateManyWithoutLimitInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type MembershipCreateManyMemberInput = {
    id?: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
  }

  export type MemberTimeLogsCreateManyMemberInput = {
    id?: number
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type MembershipUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    attendance_logs?: MemberTimeLogsMembershipUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUpdateWithoutMemberInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutMember_time_logsNestedInput
    memberships?: MemberTimeLogsMembershipUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    memberships?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyGymInput = {
    id?: string
    member_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    is_reminded?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    created_by: string
  }

  export type MemberTimeLogsCreateManyGymInput = {
    id?: number
    member_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type RevenueCreateManyGymInput = {
    id?: string
    year: number
    month: number
    amount: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
  }

  export type GymStaffCreateManyGymInput = {
    id?: number
    user_id: string
    created_at?: Date | string
    created_by: string
  }

  export type GymLimitCreateManyGymInput = {
    id?: number
    limit_id: number
    value: number
  }

  export type AuditCreateManyGymInput = {
    id?: string
    username: string
    table: string
    action: string
    reference_id?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    notes?: string | null
  }

  export type MembershipCountCreateManyGymInput = {
    id?: string
    year: number
    month: number
    count: number
    created_at?: Date | string
  }

  export type MembershipUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    attendance_logs?: MemberTimeLogsMembershipUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_reminded?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUpdateWithoutGymInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutAttendance_logsNestedInput
    memberships?: MemberTimeLogsMembershipUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    memberships?: MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type RevenueUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStaffUpdateWithoutGymInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGym_staffNestedInput
  }

  export type GymStaffUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymStaffUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymLimitUpdateWithoutGymInput = {
    value?: IntFieldUpdateOperationsInput | number
    limit?: LimitUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type GymLimitUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    limit_id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type GymLimitUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    limit_id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type AuditUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    table?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    device_info?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembershipCountUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCountUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCountUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberTimeLogsMembershipCreateManyMembershipInput = {
    id?: number
    member_time_log_id: number
  }

  export type MemberTimeLogsMembershipUpdateWithoutMembershipInput = {
    member_time_log?: MemberTimeLogsUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MemberTimeLogsMembershipUncheckedUpdateWithoutMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_time_log_id?: IntFieldUpdateOperationsInput | number
  }

  export type MemberTimeLogsMembershipUncheckedUpdateManyWithoutMembershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_time_log_id?: IntFieldUpdateOperationsInput | number
  }

  export type MemberTimeLogsMembershipCreateManyMember_time_logInput = {
    id?: number
    membership_id: string
  }

  export type MemberTimeLogsMembershipUpdateWithoutMember_time_logInput = {
    membership?: MembershipUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type MemberTimeLogsMembershipUncheckedUpdateWithoutMember_time_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    membership_id?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsMembershipUncheckedUpdateManyWithoutMember_time_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    membership_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
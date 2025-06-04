
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
 * Model GymStats
 * 
 */
export type GymStats = $Result.DefaultSelection<Prisma.$GymStatsPayload>
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
 * Model GymUser
 * 
 */
export type GymUser = $Result.DefaultSelection<Prisma.$GymUserPayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
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
 * // Fetch zero or more GymStats
 * const gymStats = await prisma.gymStats.findMany()
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
   * // Fetch zero or more GymStats
   * const gymStats = await prisma.gymStats.findMany()
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
   * `prisma.gymStats`: Exposes CRUD operations for the **GymStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymStats
    * const gymStats = await prisma.gymStats.findMany()
    * ```
    */
  get gymStats(): Prisma.GymStatsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.gymUser`: Exposes CRUD operations for the **GymUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymUsers
    * const gymUsers = await prisma.gymUser.findMany()
    * ```
    */
  get gymUser(): Prisma.GymUserDelegate<ExtArgs, ClientOptions>;

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
    GymStats: 'GymStats',
    User: 'User',
    Member: 'Member',
    GymUser: 'GymUser',
    Gym: 'Gym',
    Membership: 'Membership',
    Plan: 'Plan',
    MemberTimeLogs: 'MemberTimeLogs'
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
      modelProps: "gymStats" | "user" | "member" | "gymUser" | "gym" | "membership" | "plan" | "memberTimeLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      GymUser: {
        payload: Prisma.$GymUserPayload<ExtArgs>
        fields: Prisma.GymUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          findFirst: {
            args: Prisma.GymUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          findMany: {
            args: Prisma.GymUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>[]
          }
          create: {
            args: Prisma.GymUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          createMany: {
            args: Prisma.GymUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>[]
          }
          delete: {
            args: Prisma.GymUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          update: {
            args: Prisma.GymUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          deleteMany: {
            args: Prisma.GymUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>[]
          }
          upsert: {
            args: Prisma.GymUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymUserPayload>
          }
          aggregate: {
            args: Prisma.GymUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymUser>
          }
          groupBy: {
            args: Prisma.GymUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymUserCountArgs<ExtArgs>
            result: $Utils.Optional<GymUserCountAggregateOutputType> | number
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
    gymStats?: GymStatsOmit
    user?: UserOmit
    member?: MemberOmit
    gymUser?: GymUserOmit
    gym?: GymOmit
    membership?: MembershipOmit
    plan?: PlanOmit
    memberTimeLogs?: MemberTimeLogsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gym_users: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym_users?: boolean | UserCountOutputTypeCountGym_usersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGym_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymUserWhereInput
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
    gym_users: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | GymCountOutputTypeCountMembershipsArgs
    member_time_logs?: boolean | GymCountOutputTypeCountMember_time_logsArgs
    gym_users?: boolean | GymCountOutputTypeCountGym_usersArgs
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
  export type GymCountOutputTypeCountGym_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymUserWhereInput
  }


  /**
   * Models
   */

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
    total_revenue: number | null
    total_members: number | null
  }

  export type GymStatsSumAggregateOutputType = {
    total_revenue: number | null
    total_members: number | null
  }

  export type GymStatsMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    total_revenue: number | null
    total_members: number | null
    updated_at: Date | null
  }

  export type GymStatsMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    total_revenue: number | null
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
    total_revenue: number
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
      total_revenue: number
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
    readonly total_revenue: FieldRef<"GymStats", 'Float'>
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
    password_hash: string | null
    role: $Enums.Role | null
    contact_number: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password_hash: string | null
    role: $Enums.Role | null
    contact_number: string | null
    is_active: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password_hash: number
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
    password_hash?: true
    role?: true
    contact_number?: true
    is_active?: true
    created_at?: true
    created_by?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
    role?: true
    contact_number?: true
    is_active?: true
    created_at?: true
    created_by?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password_hash?: true
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
    password_hash: string
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
    password_hash?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
    gym_users?: boolean | User$gym_usersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password_hash?: boolean
    role?: boolean
    contact_number?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password_hash" | "role" | "contact_number" | "is_active" | "created_at" | "created_by", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym_users?: boolean | User$gym_usersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gym_users: Prisma.$GymUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      password_hash: string
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
    gym_users<T extends User$gym_usersArgs<ExtArgs> = {}>(args?: Subset<T, User$gym_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password_hash: FieldRef<"User", 'String'>
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
   * User.gym_users
   */
  export type User$gym_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    where?: GymUserWhereInput
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    cursor?: GymUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymUserScalarFieldEnum | GymUserScalarFieldEnum[]
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
   * Model GymUser
   */

  export type AggregateGymUser = {
    _count: GymUserCountAggregateOutputType | null
    _min: GymUserMinAggregateOutputType | null
    _max: GymUserMaxAggregateOutputType | null
  }

  export type GymUserMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    gym_id: string | null
  }

  export type GymUserMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    gym_id: string | null
  }

  export type GymUserCountAggregateOutputType = {
    id: number
    user_id: number
    gym_id: number
    _all: number
  }


  export type GymUserMinAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
  }

  export type GymUserMaxAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
  }

  export type GymUserCountAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    _all?: true
  }

  export type GymUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymUser to aggregate.
     */
    where?: GymUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymUsers to fetch.
     */
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymUsers
    **/
    _count?: true | GymUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymUserMaxAggregateInputType
  }

  export type GetGymUserAggregateType<T extends GymUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGymUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymUser[P]>
      : GetScalarType<T[P], AggregateGymUser[P]>
  }




  export type GymUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymUserWhereInput
    orderBy?: GymUserOrderByWithAggregationInput | GymUserOrderByWithAggregationInput[]
    by: GymUserScalarFieldEnum[] | GymUserScalarFieldEnum
    having?: GymUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymUserCountAggregateInputType | true
    _min?: GymUserMinAggregateInputType
    _max?: GymUserMaxAggregateInputType
  }

  export type GymUserGroupByOutputType = {
    id: string
    user_id: string
    gym_id: string
    _count: GymUserCountAggregateOutputType | null
    _min: GymUserMinAggregateOutputType | null
    _max: GymUserMaxAggregateOutputType | null
  }

  type GetGymUserGroupByPayload<T extends GymUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymUserGroupByOutputType[P]>
            : GetScalarType<T[P], GymUserGroupByOutputType[P]>
        }
      >
    >


  export type GymUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymUser"]>

  export type GymUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymUser"]>

  export type GymUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymUser"]>

  export type GymUserSelectScalar = {
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
  }

  export type GymUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gym_id", ExtArgs["result"]["gymUser"]>
  export type GymUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymUser"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      gym_id: string
    }, ExtArgs["result"]["gymUser"]>
    composites: {}
  }

  type GymUserGetPayload<S extends boolean | null | undefined | GymUserDefaultArgs> = $Result.GetResult<Prisma.$GymUserPayload, S>

  type GymUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymUserCountAggregateInputType | true
    }

  export interface GymUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymUser'], meta: { name: 'GymUser' } }
    /**
     * Find zero or one GymUser that matches the filter.
     * @param {GymUserFindUniqueArgs} args - Arguments to find a GymUser
     * @example
     * // Get one GymUser
     * const gymUser = await prisma.gymUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymUserFindUniqueArgs>(args: SelectSubset<T, GymUserFindUniqueArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymUserFindUniqueOrThrowArgs} args - Arguments to find a GymUser
     * @example
     * // Get one GymUser
     * const gymUser = await prisma.gymUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymUserFindUniqueOrThrowArgs>(args: SelectSubset<T, GymUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserFindFirstArgs} args - Arguments to find a GymUser
     * @example
     * // Get one GymUser
     * const gymUser = await prisma.gymUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymUserFindFirstArgs>(args?: SelectSubset<T, GymUserFindFirstArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserFindFirstOrThrowArgs} args - Arguments to find a GymUser
     * @example
     * // Get one GymUser
     * const gymUser = await prisma.gymUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymUserFindFirstOrThrowArgs>(args?: SelectSubset<T, GymUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymUsers
     * const gymUsers = await prisma.gymUser.findMany()
     * 
     * // Get first 10 GymUsers
     * const gymUsers = await prisma.gymUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymUserWithIdOnly = await prisma.gymUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymUserFindManyArgs>(args?: SelectSubset<T, GymUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymUser.
     * @param {GymUserCreateArgs} args - Arguments to create a GymUser.
     * @example
     * // Create one GymUser
     * const GymUser = await prisma.gymUser.create({
     *   data: {
     *     // ... data to create a GymUser
     *   }
     * })
     * 
     */
    create<T extends GymUserCreateArgs>(args: SelectSubset<T, GymUserCreateArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymUsers.
     * @param {GymUserCreateManyArgs} args - Arguments to create many GymUsers.
     * @example
     * // Create many GymUsers
     * const gymUser = await prisma.gymUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymUserCreateManyArgs>(args?: SelectSubset<T, GymUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymUsers and returns the data saved in the database.
     * @param {GymUserCreateManyAndReturnArgs} args - Arguments to create many GymUsers.
     * @example
     * // Create many GymUsers
     * const gymUser = await prisma.gymUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymUsers and only return the `id`
     * const gymUserWithIdOnly = await prisma.gymUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymUserCreateManyAndReturnArgs>(args?: SelectSubset<T, GymUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymUser.
     * @param {GymUserDeleteArgs} args - Arguments to delete one GymUser.
     * @example
     * // Delete one GymUser
     * const GymUser = await prisma.gymUser.delete({
     *   where: {
     *     // ... filter to delete one GymUser
     *   }
     * })
     * 
     */
    delete<T extends GymUserDeleteArgs>(args: SelectSubset<T, GymUserDeleteArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymUser.
     * @param {GymUserUpdateArgs} args - Arguments to update one GymUser.
     * @example
     * // Update one GymUser
     * const gymUser = await prisma.gymUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymUserUpdateArgs>(args: SelectSubset<T, GymUserUpdateArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymUsers.
     * @param {GymUserDeleteManyArgs} args - Arguments to filter GymUsers to delete.
     * @example
     * // Delete a few GymUsers
     * const { count } = await prisma.gymUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymUserDeleteManyArgs>(args?: SelectSubset<T, GymUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymUsers
     * const gymUser = await prisma.gymUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymUserUpdateManyArgs>(args: SelectSubset<T, GymUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymUsers and returns the data updated in the database.
     * @param {GymUserUpdateManyAndReturnArgs} args - Arguments to update many GymUsers.
     * @example
     * // Update many GymUsers
     * const gymUser = await prisma.gymUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymUsers and only return the `id`
     * const gymUserWithIdOnly = await prisma.gymUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends GymUserUpdateManyAndReturnArgs>(args: SelectSubset<T, GymUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymUser.
     * @param {GymUserUpsertArgs} args - Arguments to update or create a GymUser.
     * @example
     * // Update or create a GymUser
     * const gymUser = await prisma.gymUser.upsert({
     *   create: {
     *     // ... data to create a GymUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymUser we want to update
     *   }
     * })
     */
    upsert<T extends GymUserUpsertArgs>(args: SelectSubset<T, GymUserUpsertArgs<ExtArgs>>): Prisma__GymUserClient<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserCountArgs} args - Arguments to filter GymUsers to count.
     * @example
     * // Count the number of GymUsers
     * const count = await prisma.gymUser.count({
     *   where: {
     *     // ... the filter for the GymUsers we want to count
     *   }
     * })
    **/
    count<T extends GymUserCountArgs>(
      args?: Subset<T, GymUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymUserAggregateArgs>(args: Subset<T, GymUserAggregateArgs>): Prisma.PrismaPromise<GetGymUserAggregateType<T>>

    /**
     * Group by GymUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUserGroupByArgs} args - Group by arguments.
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
      T extends GymUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymUserGroupByArgs['orderBy'] }
        : { orderBy?: GymUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GymUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymUser model
   */
  readonly fields: GymUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GymUser model
   */
  interface GymUserFieldRefs {
    readonly id: FieldRef<"GymUser", 'String'>
    readonly user_id: FieldRef<"GymUser", 'String'>
    readonly gym_id: FieldRef<"GymUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GymUser findUnique
   */
  export type GymUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter, which GymUser to fetch.
     */
    where: GymUserWhereUniqueInput
  }

  /**
   * GymUser findUniqueOrThrow
   */
  export type GymUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter, which GymUser to fetch.
     */
    where: GymUserWhereUniqueInput
  }

  /**
   * GymUser findFirst
   */
  export type GymUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter, which GymUser to fetch.
     */
    where?: GymUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymUsers to fetch.
     */
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymUsers.
     */
    cursor?: GymUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymUsers.
     */
    distinct?: GymUserScalarFieldEnum | GymUserScalarFieldEnum[]
  }

  /**
   * GymUser findFirstOrThrow
   */
  export type GymUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter, which GymUser to fetch.
     */
    where?: GymUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymUsers to fetch.
     */
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymUsers.
     */
    cursor?: GymUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymUsers.
     */
    distinct?: GymUserScalarFieldEnum | GymUserScalarFieldEnum[]
  }

  /**
   * GymUser findMany
   */
  export type GymUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter, which GymUsers to fetch.
     */
    where?: GymUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymUsers to fetch.
     */
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymUsers.
     */
    cursor?: GymUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymUsers.
     */
    skip?: number
    distinct?: GymUserScalarFieldEnum | GymUserScalarFieldEnum[]
  }

  /**
   * GymUser create
   */
  export type GymUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * The data needed to create a GymUser.
     */
    data: XOR<GymUserCreateInput, GymUserUncheckedCreateInput>
  }

  /**
   * GymUser createMany
   */
  export type GymUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymUsers.
     */
    data: GymUserCreateManyInput | GymUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymUser createManyAndReturn
   */
  export type GymUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * The data used to create many GymUsers.
     */
    data: GymUserCreateManyInput | GymUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymUser update
   */
  export type GymUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * The data needed to update a GymUser.
     */
    data: XOR<GymUserUpdateInput, GymUserUncheckedUpdateInput>
    /**
     * Choose, which GymUser to update.
     */
    where: GymUserWhereUniqueInput
  }

  /**
   * GymUser updateMany
   */
  export type GymUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymUsers.
     */
    data: XOR<GymUserUpdateManyMutationInput, GymUserUncheckedUpdateManyInput>
    /**
     * Filter which GymUsers to update
     */
    where?: GymUserWhereInput
    /**
     * Limit how many GymUsers to update.
     */
    limit?: number
  }

  /**
   * GymUser updateManyAndReturn
   */
  export type GymUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * The data used to update GymUsers.
     */
    data: XOR<GymUserUpdateManyMutationInput, GymUserUncheckedUpdateManyInput>
    /**
     * Filter which GymUsers to update
     */
    where?: GymUserWhereInput
    /**
     * Limit how many GymUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymUser upsert
   */
  export type GymUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * The filter to search for the GymUser to update in case it exists.
     */
    where: GymUserWhereUniqueInput
    /**
     * In case the GymUser found by the `where` argument doesn't exist, create a new GymUser with this data.
     */
    create: XOR<GymUserCreateInput, GymUserUncheckedCreateInput>
    /**
     * In case the GymUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUserUpdateInput, GymUserUncheckedUpdateInput>
  }

  /**
   * GymUser delete
   */
  export type GymUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    /**
     * Filter which GymUser to delete.
     */
    where: GymUserWhereUniqueInput
  }

  /**
   * GymUser deleteMany
   */
  export type GymUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymUsers to delete
     */
    where?: GymUserWhereInput
    /**
     * Limit how many GymUsers to delete.
     */
    limit?: number
  }

  /**
   * GymUser without action
   */
  export type GymUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
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
    name: string | null
    location: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    name: number
    location: number
    created_at: number
    created_by: number
    _all: number
  }


  export type GymMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    created_at?: true
    created_by?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    created_at?: true
    created_by?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
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
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
    gym_stats?: boolean | Gym$gym_statsArgs<ExtArgs>
    gym_users?: boolean | Gym$gym_usersArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "created_at" | "created_by", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
    gym_stats?: boolean | Gym$gym_statsArgs<ExtArgs>
    gym_users?: boolean | Gym$gym_usersArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      member_time_logs: Prisma.$MemberTimeLogsPayload<ExtArgs>[]
      gym_stats: Prisma.$GymStatsPayload<ExtArgs> | null
      gym_users: Prisma.$GymUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
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
    gym_users<T extends Gym$gym_usersArgs<ExtArgs> = {}>(args?: Subset<T, Gym$gym_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Gym.gym_users
   */
  export type Gym$gym_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymUser
     */
    select?: GymUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymUser
     */
    omit?: GymUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymUserInclude<ExtArgs> | null
    where?: GymUserWhereInput
    orderBy?: GymUserOrderByWithRelationInput | GymUserOrderByWithRelationInput[]
    cursor?: GymUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymUserScalarFieldEnum | GymUserScalarFieldEnum[]
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
  }

  export type MembershipSumAggregateOutputType = {
    sessions_left: number | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    member_id: string | null
    gym_id: string | null
    start_date: Date | null
    end_date: Date | null
    sessions_left: number | null
    is_active: boolean | null
    plan_name: string | null
    plan_description: string | null
    amount_paid: string | null
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
    plan_name: string | null
    plan_description: string | null
    amount_paid: string | null
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
    plan_name: number
    plan_description: number
    amount_paid: number
    created_at: number
    created_by: number
    _all: number
  }


  export type MembershipAvgAggregateInputType = {
    sessions_left?: true
  }

  export type MembershipSumAggregateInputType = {
    sessions_left?: true
  }

  export type MembershipMinAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    start_date?: true
    end_date?: true
    sessions_left?: true
    is_active?: true
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
    plan_name: string
    plan_description: string | null
    amount_paid: string
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
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    start_date?: boolean
    end_date?: boolean
    sessions_left?: boolean
    is_active?: boolean
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
    plan_name?: boolean
    plan_description?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "start_date" | "end_date" | "sessions_left" | "is_active" | "plan_name" | "plan_description" | "amount_paid" | "created_at" | "created_by", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
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
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      member_id: string
      gym_id: string
      start_date: Date
      end_date: Date | null
      sessions_left: number | null
      is_active: boolean
      plan_name: string
      plan_description: string | null
      amount_paid: string
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
    readonly plan_name: FieldRef<"Membership", 'String'>
    readonly plan_description: FieldRef<"Membership", 'String'>
    readonly amount_paid: FieldRef<"Membership", 'String'>
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
    num_of_days: number | null
    num_of_sessions: number | null
  }

  export type PlanSumAggregateOutputType = {
    num_of_days: number | null
    num_of_sessions: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    name: string | null
    description: string | null
    price: string | null
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
    price: string | null
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
    num_of_days?: true
    num_of_sessions?: true
  }

  export type PlanSumAggregateInputType = {
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
    price: string
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
      price: string
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
    readonly price: FieldRef<"Plan", 'String'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GymStatsScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    total_revenue: 'total_revenue',
    total_members: 'total_members',
    updated_at: 'updated_at'
  };

  export type GymStatsScalarFieldEnum = (typeof GymStatsScalarFieldEnum)[keyof typeof GymStatsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password_hash: 'password_hash',
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


  export const GymUserScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    gym_id: 'gym_id'
  };

  export type GymUserScalarFieldEnum = (typeof GymUserScalarFieldEnum)[keyof typeof GymUserScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    start_date: 'start_date',
    end_date: 'end_date',
    sessions_left: 'sessions_left',
    is_active: 'is_active',
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Deep Input Types
   */


  export type GymStatsWhereInput = {
    AND?: GymStatsWhereInput | GymStatsWhereInput[]
    OR?: GymStatsWhereInput[]
    NOT?: GymStatsWhereInput | GymStatsWhereInput[]
    id?: StringFilter<"GymStats"> | string
    gym_id?: StringFilter<"GymStats"> | string
    total_revenue?: FloatFilter<"GymStats"> | number
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
    total_revenue?: FloatFilter<"GymStats"> | number
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
    total_revenue?: FloatWithAggregatesFilter<"GymStats"> | number
    total_members?: IntWithAggregatesFilter<"GymStats"> | number
    updated_at?: DateTimeWithAggregatesFilter<"GymStats"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    contact_number?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    gym_users?: GymUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    gym_users?: GymUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    contact_number?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by?: StringFilter<"User"> | string
    gym_users?: GymUserListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password_hash?: SortOrder
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
    password_hash?: StringWithAggregatesFilter<"User"> | string
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

  export type GymUserWhereInput = {
    AND?: GymUserWhereInput | GymUserWhereInput[]
    OR?: GymUserWhereInput[]
    NOT?: GymUserWhereInput | GymUserWhereInput[]
    id?: StringFilter<"GymUser"> | string
    user_id?: StringFilter<"GymUser"> | string
    gym_id?: StringFilter<"GymUser"> | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GymUserOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    gym?: GymOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GymUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymUserWhereInput | GymUserWhereInput[]
    OR?: GymUserWhereInput[]
    NOT?: GymUserWhereInput | GymUserWhereInput[]
    user_id?: StringFilter<"GymUser"> | string
    gym_id?: StringFilter<"GymUser"> | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GymUserOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    _count?: GymUserCountOrderByAggregateInput
    _max?: GymUserMaxOrderByAggregateInput
    _min?: GymUserMinOrderByAggregateInput
  }

  export type GymUserScalarWhereWithAggregatesInput = {
    AND?: GymUserScalarWhereWithAggregatesInput | GymUserScalarWhereWithAggregatesInput[]
    OR?: GymUserScalarWhereWithAggregatesInput[]
    NOT?: GymUserScalarWhereWithAggregatesInput | GymUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GymUser"> | string
    user_id?: StringWithAggregatesFilter<"GymUser"> | string
    gym_id?: StringWithAggregatesFilter<"GymUser"> | string
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
    memberships?: MembershipListRelationFilter
    member_time_logs?: MemberTimeLogsListRelationFilter
    gym_stats?: XOR<GymStatsNullableScalarRelationFilter, GymStatsWhereInput> | null
    gym_users?: GymUserListRelationFilter
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    member_time_logs?: MemberTimeLogsOrderByRelationAggregateInput
    gym_stats?: GymStatsOrderByWithRelationInput
    gym_users?: GymUserOrderByRelationAggregateInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
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
    gym_users?: GymUserListRelationFilter
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
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
    name?: StringWithAggregatesFilter<"Gym"> | string
    location?: StringWithAggregatesFilter<"Gym"> | string
    created_at?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
    created_by?: StringWithAggregatesFilter<"Gym"> | string
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
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    sessions_left?: SortOrderInput | SortOrder
    is_active?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrderInput | SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    member?: MemberOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
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
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    sessions_left?: SortOrderInput | SortOrder
    is_active?: SortOrder
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
    plan_name?: StringWithAggregatesFilter<"Membership"> | string
    plan_description?: StringNullableWithAggregatesFilter<"Membership"> | string | null
    amount_paid?: StringWithAggregatesFilter<"Membership"> | string
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
    price?: StringFilter<"Plan"> | string
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
    price?: StringFilter<"Plan"> | string
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
    price?: StringWithAggregatesFilter<"Plan"> | string
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
  }

  export type MemberTimeLogsOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    recorded_by?: SortOrder
    member?: MemberOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
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

  export type GymStatsCreateInput = {
    id?: string
    total_revenue?: number
    total_members?: number
    updated_at?: Date | string
    gym: GymCreateNestedOneWithoutGym_statsInput
  }

  export type GymStatsUncheckedCreateInput = {
    id?: string
    gym_id: string
    total_revenue?: number
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutGym_statsNestedInput
  }

  export type GymStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsCreateManyInput = {
    id?: string
    gym_id: string
    total_revenue?: number
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym_users?: GymUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gym_users?: GymUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym_users?: GymUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym_users?: GymUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
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

  export type GymUserCreateInput = {
    id?: string
    gym: GymCreateNestedOneWithoutGym_usersInput
    user: UserCreateNestedOneWithoutGym_usersInput
  }

  export type GymUserUncheckedCreateInput = {
    id?: string
    user_id: string
    gym_id: string
  }

  export type GymUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutGym_usersNestedInput
    user?: UserUpdateOneRequiredWithoutGym_usersNestedInput
  }

  export type GymUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
  }

  export type GymUserCreateManyInput = {
    id?: string
    user_id: string
    gym_id: string
  }

  export type GymUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GymUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
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
    gym_users?: GymUserCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    gym_users?: GymUserUncheckedCreateNestedManyWithoutGymInput
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
    gym_users?: GymUserUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    gym_users?: GymUserUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
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
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
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
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    gym_id: string
    name: string
    description?: string | null
    price: string
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
    price: string
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
    price?: StringFieldUpdateOperationsInput | string
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
    price?: StringFieldUpdateOperationsInput | string
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
    price: string
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
    price?: StringFieldUpdateOperationsInput | string
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
    price?: StringFieldUpdateOperationsInput | string
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
  }

  export type MemberTimeLogsUncheckedCreateInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type MemberTimeLogsUpdateInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutMember_time_logsNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type GymScalarRelationFilter = {
    is?: GymWhereInput
    isNot?: GymWhereInput
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type GymUserListRelationFilter = {
    every?: GymUserWhereInput
    some?: GymUserWhereInput
    none?: GymUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GymUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    contact_number?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GymUserCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
  }

  export type GymUserMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
  }

  export type GymUserMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
  }

  export type GymStatsNullableScalarRelationFilter = {
    is?: GymStatsWhereInput | null
    isNot?: GymStatsWhereInput | null
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
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

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    sessions_left?: SortOrder
    is_active?: SortOrder
    plan_name?: SortOrder
    plan_description?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipAvgOrderByAggregateInput = {
    sessions_left?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    sessions_left?: SortOrder
    is_active?: SortOrder
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
    plan_name?: SortOrder
    plan_description?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipSumOrderByAggregateInput = {
    sessions_left?: SortOrder
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

  export type GymCreateNestedOneWithoutGym_statsInput = {
    create?: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_statsInput
    connect?: GymWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GymUpdateOneRequiredWithoutGym_statsNestedInput = {
    create?: XOR<GymCreateWithoutGym_statsInput, GymUncheckedCreateWithoutGym_statsInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_statsInput
    upsert?: GymUpsertWithoutGym_statsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutGym_statsInput, GymUpdateWithoutGym_statsInput>, GymUncheckedUpdateWithoutGym_statsInput>
  }

  export type GymUserCreateNestedManyWithoutUserInput = {
    create?: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput> | GymUserCreateWithoutUserInput[] | GymUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutUserInput | GymUserCreateOrConnectWithoutUserInput[]
    createMany?: GymUserCreateManyUserInputEnvelope
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
  }

  export type GymUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput> | GymUserCreateWithoutUserInput[] | GymUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutUserInput | GymUserCreateOrConnectWithoutUserInput[]
    createMany?: GymUserCreateManyUserInputEnvelope
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GymUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput> | GymUserCreateWithoutUserInput[] | GymUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutUserInput | GymUserCreateOrConnectWithoutUserInput[]
    upsert?: GymUserUpsertWithWhereUniqueWithoutUserInput | GymUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymUserCreateManyUserInputEnvelope
    set?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    disconnect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    delete?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    update?: GymUserUpdateWithWhereUniqueWithoutUserInput | GymUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymUserUpdateManyWithWhereWithoutUserInput | GymUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
  }

  export type GymUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput> | GymUserCreateWithoutUserInput[] | GymUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutUserInput | GymUserCreateOrConnectWithoutUserInput[]
    upsert?: GymUserUpsertWithWhereUniqueWithoutUserInput | GymUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GymUserCreateManyUserInputEnvelope
    set?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    disconnect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    delete?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    update?: GymUserUpdateWithWhereUniqueWithoutUserInput | GymUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GymUserUpdateManyWithWhereWithoutUserInput | GymUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
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

  export type GymCreateNestedOneWithoutGym_usersInput = {
    create?: XOR<GymCreateWithoutGym_usersInput, GymUncheckedCreateWithoutGym_usersInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_usersInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGym_usersInput = {
    create?: XOR<UserCreateWithoutGym_usersInput, UserUncheckedCreateWithoutGym_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_usersInput
    connect?: UserWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutGym_usersNestedInput = {
    create?: XOR<GymCreateWithoutGym_usersInput, GymUncheckedCreateWithoutGym_usersInput>
    connectOrCreate?: GymCreateOrConnectWithoutGym_usersInput
    upsert?: GymUpsertWithoutGym_usersInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutGym_usersInput, GymUpdateWithoutGym_usersInput>, GymUncheckedUpdateWithoutGym_usersInput>
  }

  export type UserUpdateOneRequiredWithoutGym_usersNestedInput = {
    create?: XOR<UserCreateWithoutGym_usersInput, UserUncheckedCreateWithoutGym_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_usersInput
    upsert?: UserUpsertWithoutGym_usersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGym_usersInput, UserUpdateWithoutGym_usersInput>, UserUncheckedUpdateWithoutGym_usersInput>
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

  export type GymUserCreateNestedManyWithoutGymInput = {
    create?: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput> | GymUserCreateWithoutGymInput[] | GymUserUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutGymInput | GymUserCreateOrConnectWithoutGymInput[]
    createMany?: GymUserCreateManyGymInputEnvelope
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
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

  export type GymUserUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput> | GymUserCreateWithoutGymInput[] | GymUserUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutGymInput | GymUserCreateOrConnectWithoutGymInput[]
    createMany?: GymUserCreateManyGymInputEnvelope
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
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

  export type GymUserUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput> | GymUserCreateWithoutGymInput[] | GymUserUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutGymInput | GymUserCreateOrConnectWithoutGymInput[]
    upsert?: GymUserUpsertWithWhereUniqueWithoutGymInput | GymUserUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymUserCreateManyGymInputEnvelope
    set?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    disconnect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    delete?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    update?: GymUserUpdateWithWhereUniqueWithoutGymInput | GymUserUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymUserUpdateManyWithWhereWithoutGymInput | GymUserUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
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

  export type GymUserUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput> | GymUserCreateWithoutGymInput[] | GymUserUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymUserCreateOrConnectWithoutGymInput | GymUserCreateOrConnectWithoutGymInput[]
    upsert?: GymUserUpsertWithWhereUniqueWithoutGymInput | GymUserUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymUserCreateManyGymInputEnvelope
    set?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    disconnect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    delete?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    connect?: GymUserWhereUniqueInput | GymUserWhereUniqueInput[]
    update?: GymUserUpdateWithWhereUniqueWithoutGymInput | GymUserUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymUserUpdateManyWithWhereWithoutGymInput | GymUserUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type GymCreateWithoutGym_statsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_users?: GymUserCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGym_statsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_users?: GymUserUncheckedCreateNestedManyWithoutGymInput
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
    gym_users?: GymUserUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutGym_statsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_users?: GymUserUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUserCreateWithoutUserInput = {
    id?: string
    gym: GymCreateNestedOneWithoutGym_usersInput
  }

  export type GymUserUncheckedCreateWithoutUserInput = {
    id?: string
    gym_id: string
  }

  export type GymUserCreateOrConnectWithoutUserInput = {
    where: GymUserWhereUniqueInput
    create: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput>
  }

  export type GymUserCreateManyUserInputEnvelope = {
    data: GymUserCreateManyUserInput | GymUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GymUserUpsertWithWhereUniqueWithoutUserInput = {
    where: GymUserWhereUniqueInput
    update: XOR<GymUserUpdateWithoutUserInput, GymUserUncheckedUpdateWithoutUserInput>
    create: XOR<GymUserCreateWithoutUserInput, GymUserUncheckedCreateWithoutUserInput>
  }

  export type GymUserUpdateWithWhereUniqueWithoutUserInput = {
    where: GymUserWhereUniqueInput
    data: XOR<GymUserUpdateWithoutUserInput, GymUserUncheckedUpdateWithoutUserInput>
  }

  export type GymUserUpdateManyWithWhereWithoutUserInput = {
    where: GymUserScalarWhereInput
    data: XOR<GymUserUpdateManyMutationInput, GymUserUncheckedUpdateManyWithoutUserInput>
  }

  export type GymUserScalarWhereInput = {
    AND?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
    OR?: GymUserScalarWhereInput[]
    NOT?: GymUserScalarWhereInput | GymUserScalarWhereInput[]
    id?: StringFilter<"GymUser"> | string
    user_id?: StringFilter<"GymUser"> | string
    gym_id?: StringFilter<"GymUser"> | string
  }

  export type MembershipCreateWithoutMemberInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
    gym: GymCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutMemberInput = {
    id?: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
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
  }

  export type MemberTimeLogsUncheckedCreateWithoutMemberInput = {
    id?: number
    gym_id: string
    checked_in_at?: Date | string
    recorded_by: string
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
    plan_name?: StringFilter<"Membership"> | string
    plan_description?: StringNullableFilter<"Membership"> | string | null
    amount_paid?: StringFilter<"Membership"> | string
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

  export type GymCreateWithoutGym_usersInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsCreateNestedOneWithoutGymInput
  }

  export type GymUncheckedCreateWithoutGym_usersInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
  }

  export type GymCreateOrConnectWithoutGym_usersInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutGym_usersInput, GymUncheckedCreateWithoutGym_usersInput>
  }

  export type UserCreateWithoutGym_usersInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type UserUncheckedCreateWithoutGym_usersInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type UserCreateOrConnectWithoutGym_usersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGym_usersInput, UserUncheckedCreateWithoutGym_usersInput>
  }

  export type GymUpsertWithoutGym_usersInput = {
    update: XOR<GymUpdateWithoutGym_usersInput, GymUncheckedUpdateWithoutGym_usersInput>
    create: XOR<GymCreateWithoutGym_usersInput, GymUncheckedCreateWithoutGym_usersInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutGym_usersInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutGym_usersInput, GymUncheckedUpdateWithoutGym_usersInput>
  }

  export type GymUpdateWithoutGym_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUpdateOneWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutGym_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
  }

  export type UserUpsertWithoutGym_usersInput = {
    update: XOR<UserUpdateWithoutGym_usersInput, UserUncheckedUpdateWithoutGym_usersInput>
    create: XOR<UserCreateWithoutGym_usersInput, UserUncheckedCreateWithoutGym_usersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGym_usersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGym_usersInput, UserUncheckedUpdateWithoutGym_usersInput>
  }

  export type UserUpdateWithoutGym_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutGym_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateWithoutGymInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutGymInput = {
    id?: string
    member_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
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
  }

  export type MemberTimeLogsUncheckedCreateWithoutGymInput = {
    id?: number
    member_id: string
    checked_in_at?: Date | string
    recorded_by: string
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
    total_revenue?: number
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsUncheckedCreateWithoutGymInput = {
    id?: string
    total_revenue?: number
    total_members?: number
    updated_at?: Date | string
  }

  export type GymStatsCreateOrConnectWithoutGymInput = {
    where: GymStatsWhereUniqueInput
    create: XOR<GymStatsCreateWithoutGymInput, GymStatsUncheckedCreateWithoutGymInput>
  }

  export type GymUserCreateWithoutGymInput = {
    id?: string
    user: UserCreateNestedOneWithoutGym_usersInput
  }

  export type GymUserUncheckedCreateWithoutGymInput = {
    id?: string
    user_id: string
  }

  export type GymUserCreateOrConnectWithoutGymInput = {
    where: GymUserWhereUniqueInput
    create: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput>
  }

  export type GymUserCreateManyGymInputEnvelope = {
    data: GymUserCreateManyGymInput | GymUserCreateManyGymInput[]
    skipDuplicates?: boolean
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
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymStatsUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_revenue?: FloatFieldUpdateOperationsInput | number
    total_members?: IntFieldUpdateOperationsInput | number
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUserUpsertWithWhereUniqueWithoutGymInput = {
    where: GymUserWhereUniqueInput
    update: XOR<GymUserUpdateWithoutGymInput, GymUserUncheckedUpdateWithoutGymInput>
    create: XOR<GymUserCreateWithoutGymInput, GymUserUncheckedCreateWithoutGymInput>
  }

  export type GymUserUpdateWithWhereUniqueWithoutGymInput = {
    where: GymUserWhereUniqueInput
    data: XOR<GymUserUpdateWithoutGymInput, GymUserUncheckedUpdateWithoutGymInput>
  }

  export type GymUserUpdateManyWithWhereWithoutGymInput = {
    where: GymUserScalarWhereInput
    data: XOR<GymUserUpdateManyMutationInput, GymUserUncheckedUpdateManyWithoutGymInput>
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
    gym_users?: GymUserCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    gym_users?: GymUserUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMembershipsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
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
    gym_users?: GymUserUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    gym_users?: GymUserUncheckedUpdateManyWithoutGymNestedInput
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
    gym_users?: GymUserCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMember_time_logsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    gym_stats?: GymStatsUncheckedCreateNestedOneWithoutGymInput
    gym_users?: GymUserUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMember_time_logsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMember_time_logsInput, GymUncheckedCreateWithoutMember_time_logsInput>
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
    gym_users?: GymUserUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMember_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    gym_stats?: GymStatsUncheckedUpdateOneWithoutGymNestedInput
    gym_users?: GymUserUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUserCreateManyUserInput = {
    id?: string
    gym_id: string
  }

  export type GymUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutGym_usersNestedInput
  }

  export type GymUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
  }

  export type GymUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyMemberInput = {
    id?: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    sessions_left?: number | null
    is_active?: boolean
    plan_name: string
    plan_description?: string | null
    amount_paid: string
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
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUpdateWithoutMemberInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutMember_time_logsNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
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
    plan_name: string
    plan_description?: string | null
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MemberTimeLogsCreateManyGymInput = {
    id?: number
    member_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type GymUserCreateManyGymInput = {
    id?: string
    user_id: string
  }

  export type MembershipUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions_left?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    plan_name?: StringFieldUpdateOperationsInput | string
    plan_description?: NullableStringFieldUpdateOperationsInput | string | null
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUpdateWithoutGymInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type MemberTimeLogsUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberTimeLogsUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymUserUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGym_usersNestedInput
  }

  export type GymUserUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type GymUserUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
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
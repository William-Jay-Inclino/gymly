
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
 * Model GymInstructor
 * 
 */
export type GymInstructor = $Result.DefaultSelection<Prisma.$GymInstructorPayload>
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model MemberTimeLogs
 * 
 */
export type MemberTimeLogs = $Result.DefaultSelection<Prisma.$MemberTimeLogsPayload>
/**
 * Model UserTimeLogs
 * 
 */
export type UserTimeLogs = $Result.DefaultSelection<Prisma.$UserTimeLogsPayload>
/**
 * Model InstructorAssignment
 * 
 */
export type InstructorAssignment = $Result.DefaultSelection<Prisma.$InstructorAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GYM_OWNER: 'GYM_OWNER',
  GYM_INSTRUCTOR: 'GYM_INSTRUCTOR',
  GYM_STAFF: 'GYM_STAFF',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK: 'BANK',
  GCASH: 'GCASH'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.gymInstructor`: Exposes CRUD operations for the **GymInstructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GymInstructors
    * const gymInstructors = await prisma.gymInstructor.findMany()
    * ```
    */
  get gymInstructor(): Prisma.GymInstructorDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userTimeLogs`: Exposes CRUD operations for the **UserTimeLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTimeLogs
    * const userTimeLogs = await prisma.userTimeLogs.findMany()
    * ```
    */
  get userTimeLogs(): Prisma.UserTimeLogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorAssignment`: Exposes CRUD operations for the **InstructorAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorAssignments
    * const instructorAssignments = await prisma.instructorAssignment.findMany()
    * ```
    */
  get instructorAssignment(): Prisma.InstructorAssignmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Member: 'Member',
    GymInstructor: 'GymInstructor',
    Gym: 'Gym',
    Membership: 'Membership',
    Plan: 'Plan',
    Payment: 'Payment',
    MemberTimeLogs: 'MemberTimeLogs',
    UserTimeLogs: 'UserTimeLogs',
    InstructorAssignment: 'InstructorAssignment'
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
      modelProps: "user" | "member" | "gymInstructor" | "gym" | "membership" | "plan" | "payment" | "memberTimeLogs" | "userTimeLogs" | "instructorAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      GymInstructor: {
        payload: Prisma.$GymInstructorPayload<ExtArgs>
        fields: Prisma.GymInstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymInstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymInstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          findFirst: {
            args: Prisma.GymInstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymInstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          findMany: {
            args: Prisma.GymInstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>[]
          }
          create: {
            args: Prisma.GymInstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          createMany: {
            args: Prisma.GymInstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymInstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>[]
          }
          delete: {
            args: Prisma.GymInstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          update: {
            args: Prisma.GymInstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          deleteMany: {
            args: Prisma.GymInstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymInstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymInstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>[]
          }
          upsert: {
            args: Prisma.GymInstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymInstructorPayload>
          }
          aggregate: {
            args: Prisma.GymInstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGymInstructor>
          }
          groupBy: {
            args: Prisma.GymInstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymInstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymInstructorCountArgs<ExtArgs>
            result: $Utils.Optional<GymInstructorCountAggregateOutputType> | number
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
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
      UserTimeLogs: {
        payload: Prisma.$UserTimeLogsPayload<ExtArgs>
        fields: Prisma.UserTimeLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTimeLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTimeLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          findFirst: {
            args: Prisma.UserTimeLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTimeLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          findMany: {
            args: Prisma.UserTimeLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>[]
          }
          create: {
            args: Prisma.UserTimeLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          createMany: {
            args: Prisma.UserTimeLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTimeLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>[]
          }
          delete: {
            args: Prisma.UserTimeLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          update: {
            args: Prisma.UserTimeLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          deleteMany: {
            args: Prisma.UserTimeLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTimeLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTimeLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>[]
          }
          upsert: {
            args: Prisma.UserTimeLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTimeLogsPayload>
          }
          aggregate: {
            args: Prisma.UserTimeLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTimeLogs>
          }
          groupBy: {
            args: Prisma.UserTimeLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTimeLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTimeLogsCountArgs<ExtArgs>
            result: $Utils.Optional<UserTimeLogsCountAggregateOutputType> | number
          }
        }
      }
      InstructorAssignment: {
        payload: Prisma.$InstructorAssignmentPayload<ExtArgs>
        fields: Prisma.InstructorAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          findFirst: {
            args: Prisma.InstructorAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          findMany: {
            args: Prisma.InstructorAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>[]
          }
          create: {
            args: Prisma.InstructorAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          createMany: {
            args: Prisma.InstructorAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>[]
          }
          delete: {
            args: Prisma.InstructorAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          update: {
            args: Prisma.InstructorAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.InstructorAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.InstructorAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorAssignmentPayload>
          }
          aggregate: {
            args: Prisma.InstructorAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorAssignment>
          }
          groupBy: {
            args: Prisma.InstructorAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorAssignmentCountAggregateOutputType> | number
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
    user?: UserOmit
    member?: MemberOmit
    gymInstructor?: GymInstructorOmit
    gym?: GymOmit
    membership?: MembershipOmit
    plan?: PlanOmit
    payment?: PaymentOmit
    memberTimeLogs?: MemberTimeLogsOmit
    userTimeLogs?: UserTimeLogsOmit
    instructorAssignment?: InstructorAssignmentOmit
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
    gyms_owned: number
    attendance_logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gyms_owned?: boolean | UserCountOutputTypeCountGyms_ownedArgs
    attendance_logs?: boolean | UserCountOutputTypeCountAttendance_logsArgs
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
  export type UserCountOutputTypeCountGyms_ownedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimeLogsWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    memberships: number
    attendance_logs: number
    gym_instructors: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | MemberCountOutputTypeCountMembershipsArgs
    attendance_logs?: boolean | MemberCountOutputTypeCountAttendance_logsArgs
    gym_instructors?: boolean | MemberCountOutputTypeCountGym_instructorsArgs
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
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountGym_instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
  }


  /**
   * Count Type GymInstructorCountOutputType
   */

  export type GymInstructorCountOutputType = {
    trainees: number
  }

  export type GymInstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainees?: boolean | GymInstructorCountOutputTypeCountTraineesArgs
  }

  // Custom InputTypes
  /**
   * GymInstructorCountOutputType without action
   */
  export type GymInstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructorCountOutputType
     */
    select?: GymInstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymInstructorCountOutputType without action
   */
  export type GymInstructorCountOutputTypeCountTraineesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    memberships: number
    instructors: number
    user_time_logs: number
    member_time_logs: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | GymCountOutputTypeCountMembershipsArgs
    instructors?: boolean | GymCountOutputTypeCountInstructorsArgs
    user_time_logs?: boolean | GymCountOutputTypeCountUser_time_logsArgs
    member_time_logs?: boolean | GymCountOutputTypeCountMember_time_logsArgs
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
  export type GymCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymInstructorWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountUser_time_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimeLogsWhereInput
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountMember_time_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberTimeLogsWhereInput
  }


  /**
   * Count Type MembershipCountOutputType
   */

  export type MembershipCountOutputType = {
    payments: number
  }

  export type MembershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | MembershipCountOutputTypeCountPaymentsArgs
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
  export type MembershipCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    memberships: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | PlanCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * Models
   */

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
    gyms_owned?: boolean | User$gyms_ownedArgs<ExtArgs>
    attendance_logs?: boolean | User$attendance_logsArgs<ExtArgs>
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
    gyms_owned?: boolean | User$gyms_ownedArgs<ExtArgs>
    attendance_logs?: boolean | User$attendance_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gyms_owned: Prisma.$GymPayload<ExtArgs>[]
      attendance_logs: Prisma.$UserTimeLogsPayload<ExtArgs>[]
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
    gyms_owned<T extends User$gyms_ownedArgs<ExtArgs> = {}>(args?: Subset<T, User$gyms_ownedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance_logs<T extends User$attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.gyms_owned
   */
  export type User$gyms_ownedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    cursor?: GymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * User.attendance_logs
   */
  export type User$attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    where?: UserTimeLogsWhereInput
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    cursor?: UserTimeLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTimeLogsScalarFieldEnum | UserTimeLogsScalarFieldEnum[]
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
    middlename: string | null
    lastname: string | null
    contact_number: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    contact_number: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    firstname: number
    middlename: number
    lastname: number
    contact_number: number
    created_at: number
    created_by: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    contact_number?: true
    created_at?: true
    created_by?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    contact_number?: true
    created_at?: true
    created_by?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
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
    middlename: string | null
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
    middlename?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    attendance_logs?: boolean | Member$attendance_logsArgs<ExtArgs>
    gym_instructors?: boolean | Member$gym_instructorsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    contact_number?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "middlename" | "lastname" | "contact_number" | "created_at" | "created_by", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Member$membershipsArgs<ExtArgs>
    attendance_logs?: boolean | Member$attendance_logsArgs<ExtArgs>
    gym_instructors?: boolean | Member$gym_instructorsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      attendance_logs: Prisma.$MemberTimeLogsPayload<ExtArgs>[]
      gym_instructors: Prisma.$InstructorAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      middlename: string | null
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
    gym_instructors<T extends Member$gym_instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Member$gym_instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly middlename: FieldRef<"Member", 'String'>
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
   * Member.gym_instructors
   */
  export type Member$gym_instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    where?: InstructorAssignmentWhereInput
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    cursor?: InstructorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorAssignmentScalarFieldEnum | InstructorAssignmentScalarFieldEnum[]
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
   * Model GymInstructor
   */

  export type AggregateGymInstructor = {
    _count: GymInstructorCountAggregateOutputType | null
    _min: GymInstructorMinAggregateOutputType | null
    _max: GymInstructorMaxAggregateOutputType | null
  }

  export type GymInstructorMinAggregateOutputType = {
    id: string | null
    gym_id: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymInstructorMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymInstructorCountAggregateOutputType = {
    id: number
    gym_id: number
    firstname: number
    middlename: number
    lastname: number
    created_at: number
    created_by: number
    _all: number
  }


  export type GymInstructorMinAggregateInputType = {
    id?: true
    gym_id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    created_at?: true
    created_by?: true
  }

  export type GymInstructorMaxAggregateInputType = {
    id?: true
    gym_id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    created_at?: true
    created_by?: true
  }

  export type GymInstructorCountAggregateInputType = {
    id?: true
    gym_id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type GymInstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymInstructor to aggregate.
     */
    where?: GymInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymInstructors to fetch.
     */
    orderBy?: GymInstructorOrderByWithRelationInput | GymInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GymInstructors
    **/
    _count?: true | GymInstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymInstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymInstructorMaxAggregateInputType
  }

  export type GetGymInstructorAggregateType<T extends GymInstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateGymInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGymInstructor[P]>
      : GetScalarType<T[P], AggregateGymInstructor[P]>
  }




  export type GymInstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymInstructorWhereInput
    orderBy?: GymInstructorOrderByWithAggregationInput | GymInstructorOrderByWithAggregationInput[]
    by: GymInstructorScalarFieldEnum[] | GymInstructorScalarFieldEnum
    having?: GymInstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymInstructorCountAggregateInputType | true
    _min?: GymInstructorMinAggregateInputType
    _max?: GymInstructorMaxAggregateInputType
  }

  export type GymInstructorGroupByOutputType = {
    id: string
    gym_id: string
    firstname: string
    middlename: string | null
    lastname: string
    created_at: Date
    created_by: string
    _count: GymInstructorCountAggregateOutputType | null
    _min: GymInstructorMinAggregateOutputType | null
    _max: GymInstructorMaxAggregateOutputType | null
  }

  type GetGymInstructorGroupByPayload<T extends GymInstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymInstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymInstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymInstructorGroupByOutputType[P]>
            : GetScalarType<T[P], GymInstructorGroupByOutputType[P]>
        }
      >
    >


  export type GymInstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    created_at?: boolean
    created_by?: boolean
    trainees?: boolean | GymInstructor$traineesArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    _count?: boolean | GymInstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    created_at?: boolean
    created_by?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    created_at?: boolean
    created_by?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectScalar = {
    id?: boolean
    gym_id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type GymInstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "firstname" | "middlename" | "lastname" | "created_at" | "created_by", ExtArgs["result"]["gymInstructor"]>
  export type GymInstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainees?: boolean | GymInstructor$traineesArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    _count?: boolean | GymInstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymInstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type GymInstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $GymInstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymInstructor"
    objects: {
      trainees: Prisma.$InstructorAssignmentPayload<ExtArgs>[]
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      firstname: string
      middlename: string | null
      lastname: string
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["gymInstructor"]>
    composites: {}
  }

  type GymInstructorGetPayload<S extends boolean | null | undefined | GymInstructorDefaultArgs> = $Result.GetResult<Prisma.$GymInstructorPayload, S>

  type GymInstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymInstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymInstructorCountAggregateInputType | true
    }

  export interface GymInstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GymInstructor'], meta: { name: 'GymInstructor' } }
    /**
     * Find zero or one GymInstructor that matches the filter.
     * @param {GymInstructorFindUniqueArgs} args - Arguments to find a GymInstructor
     * @example
     * // Get one GymInstructor
     * const gymInstructor = await prisma.gymInstructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymInstructorFindUniqueArgs>(args: SelectSubset<T, GymInstructorFindUniqueArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GymInstructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymInstructorFindUniqueOrThrowArgs} args - Arguments to find a GymInstructor
     * @example
     * // Get one GymInstructor
     * const gymInstructor = await prisma.gymInstructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymInstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, GymInstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymInstructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorFindFirstArgs} args - Arguments to find a GymInstructor
     * @example
     * // Get one GymInstructor
     * const gymInstructor = await prisma.gymInstructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymInstructorFindFirstArgs>(args?: SelectSubset<T, GymInstructorFindFirstArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GymInstructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorFindFirstOrThrowArgs} args - Arguments to find a GymInstructor
     * @example
     * // Get one GymInstructor
     * const gymInstructor = await prisma.gymInstructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymInstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, GymInstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GymInstructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GymInstructors
     * const gymInstructors = await prisma.gymInstructor.findMany()
     * 
     * // Get first 10 GymInstructors
     * const gymInstructors = await prisma.gymInstructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymInstructorWithIdOnly = await prisma.gymInstructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymInstructorFindManyArgs>(args?: SelectSubset<T, GymInstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GymInstructor.
     * @param {GymInstructorCreateArgs} args - Arguments to create a GymInstructor.
     * @example
     * // Create one GymInstructor
     * const GymInstructor = await prisma.gymInstructor.create({
     *   data: {
     *     // ... data to create a GymInstructor
     *   }
     * })
     * 
     */
    create<T extends GymInstructorCreateArgs>(args: SelectSubset<T, GymInstructorCreateArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GymInstructors.
     * @param {GymInstructorCreateManyArgs} args - Arguments to create many GymInstructors.
     * @example
     * // Create many GymInstructors
     * const gymInstructor = await prisma.gymInstructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymInstructorCreateManyArgs>(args?: SelectSubset<T, GymInstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GymInstructors and returns the data saved in the database.
     * @param {GymInstructorCreateManyAndReturnArgs} args - Arguments to create many GymInstructors.
     * @example
     * // Create many GymInstructors
     * const gymInstructor = await prisma.gymInstructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GymInstructors and only return the `id`
     * const gymInstructorWithIdOnly = await prisma.gymInstructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymInstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, GymInstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GymInstructor.
     * @param {GymInstructorDeleteArgs} args - Arguments to delete one GymInstructor.
     * @example
     * // Delete one GymInstructor
     * const GymInstructor = await prisma.gymInstructor.delete({
     *   where: {
     *     // ... filter to delete one GymInstructor
     *   }
     * })
     * 
     */
    delete<T extends GymInstructorDeleteArgs>(args: SelectSubset<T, GymInstructorDeleteArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GymInstructor.
     * @param {GymInstructorUpdateArgs} args - Arguments to update one GymInstructor.
     * @example
     * // Update one GymInstructor
     * const gymInstructor = await prisma.gymInstructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymInstructorUpdateArgs>(args: SelectSubset<T, GymInstructorUpdateArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GymInstructors.
     * @param {GymInstructorDeleteManyArgs} args - Arguments to filter GymInstructors to delete.
     * @example
     * // Delete a few GymInstructors
     * const { count } = await prisma.gymInstructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymInstructorDeleteManyArgs>(args?: SelectSubset<T, GymInstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GymInstructors
     * const gymInstructor = await prisma.gymInstructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymInstructorUpdateManyArgs>(args: SelectSubset<T, GymInstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GymInstructors and returns the data updated in the database.
     * @param {GymInstructorUpdateManyAndReturnArgs} args - Arguments to update many GymInstructors.
     * @example
     * // Update many GymInstructors
     * const gymInstructor = await prisma.gymInstructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GymInstructors and only return the `id`
     * const gymInstructorWithIdOnly = await prisma.gymInstructor.updateManyAndReturn({
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
    updateManyAndReturn<T extends GymInstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, GymInstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GymInstructor.
     * @param {GymInstructorUpsertArgs} args - Arguments to update or create a GymInstructor.
     * @example
     * // Update or create a GymInstructor
     * const gymInstructor = await prisma.gymInstructor.upsert({
     *   create: {
     *     // ... data to create a GymInstructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GymInstructor we want to update
     *   }
     * })
     */
    upsert<T extends GymInstructorUpsertArgs>(args: SelectSubset<T, GymInstructorUpsertArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GymInstructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorCountArgs} args - Arguments to filter GymInstructors to count.
     * @example
     * // Count the number of GymInstructors
     * const count = await prisma.gymInstructor.count({
     *   where: {
     *     // ... the filter for the GymInstructors we want to count
     *   }
     * })
    **/
    count<T extends GymInstructorCountArgs>(
      args?: Subset<T, GymInstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymInstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GymInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymInstructorAggregateArgs>(args: Subset<T, GymInstructorAggregateArgs>): Prisma.PrismaPromise<GetGymInstructorAggregateType<T>>

    /**
     * Group by GymInstructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymInstructorGroupByArgs} args - Group by arguments.
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
      T extends GymInstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymInstructorGroupByArgs['orderBy'] }
        : { orderBy?: GymInstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GymInstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GymInstructor model
   */
  readonly fields: GymInstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GymInstructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymInstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainees<T extends GymInstructor$traineesArgs<ExtArgs> = {}>(args?: Subset<T, GymInstructor$traineesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GymInstructor model
   */
  interface GymInstructorFieldRefs {
    readonly id: FieldRef<"GymInstructor", 'String'>
    readonly gym_id: FieldRef<"GymInstructor", 'String'>
    readonly firstname: FieldRef<"GymInstructor", 'String'>
    readonly middlename: FieldRef<"GymInstructor", 'String'>
    readonly lastname: FieldRef<"GymInstructor", 'String'>
    readonly created_at: FieldRef<"GymInstructor", 'DateTime'>
    readonly created_by: FieldRef<"GymInstructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GymInstructor findUnique
   */
  export type GymInstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter, which GymInstructor to fetch.
     */
    where: GymInstructorWhereUniqueInput
  }

  /**
   * GymInstructor findUniqueOrThrow
   */
  export type GymInstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter, which GymInstructor to fetch.
     */
    where: GymInstructorWhereUniqueInput
  }

  /**
   * GymInstructor findFirst
   */
  export type GymInstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter, which GymInstructor to fetch.
     */
    where?: GymInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymInstructors to fetch.
     */
    orderBy?: GymInstructorOrderByWithRelationInput | GymInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymInstructors.
     */
    cursor?: GymInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymInstructors.
     */
    distinct?: GymInstructorScalarFieldEnum | GymInstructorScalarFieldEnum[]
  }

  /**
   * GymInstructor findFirstOrThrow
   */
  export type GymInstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter, which GymInstructor to fetch.
     */
    where?: GymInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymInstructors to fetch.
     */
    orderBy?: GymInstructorOrderByWithRelationInput | GymInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GymInstructors.
     */
    cursor?: GymInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymInstructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GymInstructors.
     */
    distinct?: GymInstructorScalarFieldEnum | GymInstructorScalarFieldEnum[]
  }

  /**
   * GymInstructor findMany
   */
  export type GymInstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter, which GymInstructors to fetch.
     */
    where?: GymInstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GymInstructors to fetch.
     */
    orderBy?: GymInstructorOrderByWithRelationInput | GymInstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GymInstructors.
     */
    cursor?: GymInstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GymInstructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GymInstructors.
     */
    skip?: number
    distinct?: GymInstructorScalarFieldEnum | GymInstructorScalarFieldEnum[]
  }

  /**
   * GymInstructor create
   */
  export type GymInstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a GymInstructor.
     */
    data: XOR<GymInstructorCreateInput, GymInstructorUncheckedCreateInput>
  }

  /**
   * GymInstructor createMany
   */
  export type GymInstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GymInstructors.
     */
    data: GymInstructorCreateManyInput | GymInstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GymInstructor createManyAndReturn
   */
  export type GymInstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * The data used to create many GymInstructors.
     */
    data: GymInstructorCreateManyInput | GymInstructorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymInstructor update
   */
  export type GymInstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a GymInstructor.
     */
    data: XOR<GymInstructorUpdateInput, GymInstructorUncheckedUpdateInput>
    /**
     * Choose, which GymInstructor to update.
     */
    where: GymInstructorWhereUniqueInput
  }

  /**
   * GymInstructor updateMany
   */
  export type GymInstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GymInstructors.
     */
    data: XOR<GymInstructorUpdateManyMutationInput, GymInstructorUncheckedUpdateManyInput>
    /**
     * Filter which GymInstructors to update
     */
    where?: GymInstructorWhereInput
    /**
     * Limit how many GymInstructors to update.
     */
    limit?: number
  }

  /**
   * GymInstructor updateManyAndReturn
   */
  export type GymInstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * The data used to update GymInstructors.
     */
    data: XOR<GymInstructorUpdateManyMutationInput, GymInstructorUncheckedUpdateManyInput>
    /**
     * Filter which GymInstructors to update
     */
    where?: GymInstructorWhereInput
    /**
     * Limit how many GymInstructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GymInstructor upsert
   */
  export type GymInstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the GymInstructor to update in case it exists.
     */
    where: GymInstructorWhereUniqueInput
    /**
     * In case the GymInstructor found by the `where` argument doesn't exist, create a new GymInstructor with this data.
     */
    create: XOR<GymInstructorCreateInput, GymInstructorUncheckedCreateInput>
    /**
     * In case the GymInstructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymInstructorUpdateInput, GymInstructorUncheckedUpdateInput>
  }

  /**
   * GymInstructor delete
   */
  export type GymInstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    /**
     * Filter which GymInstructor to delete.
     */
    where: GymInstructorWhereUniqueInput
  }

  /**
   * GymInstructor deleteMany
   */
  export type GymInstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GymInstructors to delete
     */
    where?: GymInstructorWhereInput
    /**
     * Limit how many GymInstructors to delete.
     */
    limit?: number
  }

  /**
   * GymInstructor.trainees
   */
  export type GymInstructor$traineesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    where?: InstructorAssignmentWhereInput
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    cursor?: InstructorAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorAssignmentScalarFieldEnum | InstructorAssignmentScalarFieldEnum[]
  }

  /**
   * GymInstructor without action
   */
  export type GymInstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
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
    owner_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    owner_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    name: number
    location: number
    owner_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type GymMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
    created_at?: true
    created_by?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
    created_at?: true
    created_by?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
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
    owner_id: string
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
    owner_id?: boolean
    created_at?: boolean
    created_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    instructors?: boolean | Gym$instructorsArgs<ExtArgs>
    user_time_logs?: boolean | Gym$user_time_logsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_at?: boolean
    created_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_at?: boolean
    created_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "owner_id" | "created_at" | "created_by", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    instructors?: boolean | Gym$instructorsArgs<ExtArgs>
    user_time_logs?: boolean | Gym$user_time_logsArgs<ExtArgs>
    member_time_logs?: boolean | Gym$member_time_logsArgs<ExtArgs>
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
      owner: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      instructors: Prisma.$GymInstructorPayload<ExtArgs>[]
      user_time_logs: Prisma.$UserTimeLogsPayload<ExtArgs>[]
      member_time_logs: Prisma.$MemberTimeLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      owner_id: string
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
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends Gym$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructors<T extends Gym$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_time_logs<T extends Gym$user_time_logsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$user_time_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_time_logs<T extends Gym$member_time_logsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$member_time_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly owner_id: FieldRef<"Gym", 'String'>
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
   * Gym.instructors
   */
  export type Gym$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymInstructor
     */
    select?: GymInstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GymInstructor
     */
    omit?: GymInstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GymInstructorInclude<ExtArgs> | null
    where?: GymInstructorWhereInput
    orderBy?: GymInstructorOrderByWithRelationInput | GymInstructorOrderByWithRelationInput[]
    cursor?: GymInstructorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GymInstructorScalarFieldEnum | GymInstructorScalarFieldEnum[]
  }

  /**
   * Gym.user_time_logs
   */
  export type Gym$user_time_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    where?: UserTimeLogsWhereInput
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    cursor?: UserTimeLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTimeLogsScalarFieldEnum | UserTimeLogsScalarFieldEnum[]
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
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    member_id: string | null
    gym_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    is_paid: boolean | null
    amount_paid: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    member_id: string | null
    gym_id: string | null
    plan_id: string | null
    start_date: Date | null
    end_date: Date | null
    is_active: boolean | null
    is_paid: boolean | null
    amount_paid: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    member_id: number
    gym_id: number
    plan_id: number
    start_date: number
    end_date: number
    is_active: number
    is_paid: number
    amount_paid: number
    created_at: number
    created_by: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    is_active?: true
    is_paid?: true
    amount_paid?: true
    created_at?: true
    created_by?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    is_active?: true
    is_paid?: true
    amount_paid?: true
    created_at?: true
    created_by?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    plan_id?: true
    start_date?: true
    end_date?: true
    is_active?: true
    is_paid?: true
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
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date: Date
    end_date: Date | null
    is_active: boolean
    is_paid: boolean
    amount_paid: string
    created_at: Date
    created_by: string
    _count: MembershipCountAggregateOutputType | null
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
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    is_paid?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payments?: boolean | Membership$paymentsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    is_paid?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    is_paid?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    plan_id?: boolean
    start_date?: boolean
    end_date?: boolean
    is_active?: boolean
    is_paid?: boolean
    amount_paid?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "plan_id" | "start_date" | "end_date" | "is_active" | "is_paid" | "amount_paid" | "created_at" | "created_by", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payments?: boolean | Membership$paymentsArgs<ExtArgs>
    _count?: boolean | MembershipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      member_id: string
      gym_id: string
      plan_id: string
      start_date: Date
      end_date: Date | null
      is_active: boolean
      is_paid: boolean
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
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Membership$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Membership$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly plan_id: FieldRef<"Membership", 'String'>
    readonly start_date: FieldRef<"Membership", 'DateTime'>
    readonly end_date: FieldRef<"Membership", 'DateTime'>
    readonly is_active: FieldRef<"Membership", 'Boolean'>
    readonly is_paid: FieldRef<"Membership", 'Boolean'>
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
   * Membership.payments
   */
  export type Membership$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
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
    name: string | null
    description: string | null
    price: string | null
    num_of_days: number | null
    num_of_sessions: number | null
    is_active: boolean | null
    is_default: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: string | null
    num_of_days: number | null
    num_of_sessions: number | null
    is_active: boolean | null
    is_default: boolean | null
    created_at: Date | null
    created_by: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    num_of_days: number
    num_of_sessions: number
    is_active: number
    is_default: number
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
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    is_active?: true
    is_default?: true
    created_at?: true
    created_by?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    is_active?: true
    is_default?: true
    created_at?: true
    created_by?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    num_of_days?: true
    num_of_sessions?: true
    is_active?: true
    is_default?: true
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
    name: string
    description: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active: boolean
    is_default: boolean
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
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    is_active?: boolean
    is_default?: boolean
    created_at?: boolean
    created_by?: boolean
    memberships?: boolean | Plan$membershipsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    is_active?: boolean
    is_default?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    is_active?: boolean
    is_default?: boolean
    created_at?: boolean
    created_by?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    num_of_days?: boolean
    num_of_sessions?: boolean
    is_active?: boolean
    is_default?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "num_of_days" | "num_of_sessions" | "is_active" | "is_default" | "created_at" | "created_by", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Plan$membershipsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: string
      num_of_days: number
      num_of_sessions: number
      is_active: boolean
      is_default: boolean
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
    memberships<T extends Plan$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'String'>
    readonly num_of_days: FieldRef<"Plan", 'Int'>
    readonly num_of_sessions: FieldRef<"Plan", 'Int'>
    readonly is_active: FieldRef<"Plan", 'Boolean'>
    readonly is_default: FieldRef<"Plan", 'Boolean'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
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
   * Plan.memberships
   */
  export type Plan$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    membership_id: string | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    paid_at: Date | null
    created_at: Date | null
    created_by: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    membership_id: string | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    paid_at: Date | null
    created_at: Date | null
    created_by: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    membership_id: number
    amount: number
    payment_method: number
    paid_at: number
    created_at: number
    created_by: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    membership_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_at?: true
    created_by?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    membership_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_at?: true
    created_by?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    membership_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    membership_id: string
    amount: number
    payment_method: $Enums.PaymentMethod
    paid_at: Date
    created_at: Date
    created_by: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membership_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_at?: boolean
    created_by?: boolean
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membership_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_at?: boolean
    created_by?: boolean
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membership_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_at?: boolean
    created_by?: boolean
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    membership_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membership_id" | "amount" | "payment_method" | "paid_at" | "created_at" | "created_by", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membership?: boolean | MembershipDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      membership: Prisma.$MembershipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      membership_id: string
      amount: number
      payment_method: $Enums.PaymentMethod
      paid_at: Date
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly membership_id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly payment_method: FieldRef<"Payment", 'PaymentMethod'>
    readonly paid_at: FieldRef<"Payment", 'DateTime'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
    readonly created_by: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
   * Model UserTimeLogs
   */

  export type AggregateUserTimeLogs = {
    _count: UserTimeLogsCountAggregateOutputType | null
    _avg: UserTimeLogsAvgAggregateOutputType | null
    _sum: UserTimeLogsSumAggregateOutputType | null
    _min: UserTimeLogsMinAggregateOutputType | null
    _max: UserTimeLogsMaxAggregateOutputType | null
  }

  export type UserTimeLogsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserTimeLogsSumAggregateOutputType = {
    id: number | null
  }

  export type UserTimeLogsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    gym_id: string | null
    checked_in_at: Date | null
    checked_out_at: Date | null
    recorded_by: string | null
  }

  export type UserTimeLogsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    gym_id: string | null
    checked_in_at: Date | null
    checked_out_at: Date | null
    recorded_by: string | null
  }

  export type UserTimeLogsCountAggregateOutputType = {
    id: number
    user_id: number
    gym_id: number
    checked_in_at: number
    checked_out_at: number
    recorded_by: number
    _all: number
  }


  export type UserTimeLogsAvgAggregateInputType = {
    id?: true
  }

  export type UserTimeLogsSumAggregateInputType = {
    id?: true
  }

  export type UserTimeLogsMinAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    checked_in_at?: true
    checked_out_at?: true
    recorded_by?: true
  }

  export type UserTimeLogsMaxAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    checked_in_at?: true
    checked_out_at?: true
    recorded_by?: true
  }

  export type UserTimeLogsCountAggregateInputType = {
    id?: true
    user_id?: true
    gym_id?: true
    checked_in_at?: true
    checked_out_at?: true
    recorded_by?: true
    _all?: true
  }

  export type UserTimeLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTimeLogs to aggregate.
     */
    where?: UserTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimeLogs to fetch.
     */
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTimeLogs
    **/
    _count?: true | UserTimeLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTimeLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTimeLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTimeLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTimeLogsMaxAggregateInputType
  }

  export type GetUserTimeLogsAggregateType<T extends UserTimeLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTimeLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTimeLogs[P]>
      : GetScalarType<T[P], AggregateUserTimeLogs[P]>
  }




  export type UserTimeLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTimeLogsWhereInput
    orderBy?: UserTimeLogsOrderByWithAggregationInput | UserTimeLogsOrderByWithAggregationInput[]
    by: UserTimeLogsScalarFieldEnum[] | UserTimeLogsScalarFieldEnum
    having?: UserTimeLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTimeLogsCountAggregateInputType | true
    _avg?: UserTimeLogsAvgAggregateInputType
    _sum?: UserTimeLogsSumAggregateInputType
    _min?: UserTimeLogsMinAggregateInputType
    _max?: UserTimeLogsMaxAggregateInputType
  }

  export type UserTimeLogsGroupByOutputType = {
    id: number
    user_id: string
    gym_id: string
    checked_in_at: Date
    checked_out_at: Date | null
    recorded_by: string
    _count: UserTimeLogsCountAggregateOutputType | null
    _avg: UserTimeLogsAvgAggregateOutputType | null
    _sum: UserTimeLogsSumAggregateOutputType | null
    _min: UserTimeLogsMinAggregateOutputType | null
    _max: UserTimeLogsMaxAggregateOutputType | null
  }

  type GetUserTimeLogsGroupByPayload<T extends UserTimeLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTimeLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTimeLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTimeLogsGroupByOutputType[P]>
            : GetScalarType<T[P], UserTimeLogsGroupByOutputType[P]>
        }
      >
    >


  export type UserTimeLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    checked_out_at?: boolean
    recorded_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeLogs"]>

  export type UserTimeLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    checked_out_at?: boolean
    recorded_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeLogs"]>

  export type UserTimeLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    checked_out_at?: boolean
    recorded_by?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTimeLogs"]>

  export type UserTimeLogsSelectScalar = {
    id?: boolean
    user_id?: boolean
    gym_id?: boolean
    checked_in_at?: boolean
    checked_out_at?: boolean
    recorded_by?: boolean
  }

  export type UserTimeLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "gym_id" | "checked_in_at" | "checked_out_at" | "recorded_by", ExtArgs["result"]["userTimeLogs"]>
  export type UserTimeLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type UserTimeLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type UserTimeLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $UserTimeLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTimeLogs"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      gym_id: string
      checked_in_at: Date
      checked_out_at: Date | null
      recorded_by: string
    }, ExtArgs["result"]["userTimeLogs"]>
    composites: {}
  }

  type UserTimeLogsGetPayload<S extends boolean | null | undefined | UserTimeLogsDefaultArgs> = $Result.GetResult<Prisma.$UserTimeLogsPayload, S>

  type UserTimeLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTimeLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTimeLogsCountAggregateInputType | true
    }

  export interface UserTimeLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTimeLogs'], meta: { name: 'UserTimeLogs' } }
    /**
     * Find zero or one UserTimeLogs that matches the filter.
     * @param {UserTimeLogsFindUniqueArgs} args - Arguments to find a UserTimeLogs
     * @example
     * // Get one UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTimeLogsFindUniqueArgs>(args: SelectSubset<T, UserTimeLogsFindUniqueArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTimeLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTimeLogsFindUniqueOrThrowArgs} args - Arguments to find a UserTimeLogs
     * @example
     * // Get one UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTimeLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTimeLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTimeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsFindFirstArgs} args - Arguments to find a UserTimeLogs
     * @example
     * // Get one UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTimeLogsFindFirstArgs>(args?: SelectSubset<T, UserTimeLogsFindFirstArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTimeLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsFindFirstOrThrowArgs} args - Arguments to find a UserTimeLogs
     * @example
     * // Get one UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTimeLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTimeLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTimeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findMany()
     * 
     * // Get first 10 UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTimeLogsWithIdOnly = await prisma.userTimeLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTimeLogsFindManyArgs>(args?: SelectSubset<T, UserTimeLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTimeLogs.
     * @param {UserTimeLogsCreateArgs} args - Arguments to create a UserTimeLogs.
     * @example
     * // Create one UserTimeLogs
     * const UserTimeLogs = await prisma.userTimeLogs.create({
     *   data: {
     *     // ... data to create a UserTimeLogs
     *   }
     * })
     * 
     */
    create<T extends UserTimeLogsCreateArgs>(args: SelectSubset<T, UserTimeLogsCreateArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTimeLogs.
     * @param {UserTimeLogsCreateManyArgs} args - Arguments to create many UserTimeLogs.
     * @example
     * // Create many UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTimeLogsCreateManyArgs>(args?: SelectSubset<T, UserTimeLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTimeLogs and returns the data saved in the database.
     * @param {UserTimeLogsCreateManyAndReturnArgs} args - Arguments to create many UserTimeLogs.
     * @example
     * // Create many UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTimeLogs and only return the `id`
     * const userTimeLogsWithIdOnly = await prisma.userTimeLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTimeLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTimeLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTimeLogs.
     * @param {UserTimeLogsDeleteArgs} args - Arguments to delete one UserTimeLogs.
     * @example
     * // Delete one UserTimeLogs
     * const UserTimeLogs = await prisma.userTimeLogs.delete({
     *   where: {
     *     // ... filter to delete one UserTimeLogs
     *   }
     * })
     * 
     */
    delete<T extends UserTimeLogsDeleteArgs>(args: SelectSubset<T, UserTimeLogsDeleteArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTimeLogs.
     * @param {UserTimeLogsUpdateArgs} args - Arguments to update one UserTimeLogs.
     * @example
     * // Update one UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTimeLogsUpdateArgs>(args: SelectSubset<T, UserTimeLogsUpdateArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTimeLogs.
     * @param {UserTimeLogsDeleteManyArgs} args - Arguments to filter UserTimeLogs to delete.
     * @example
     * // Delete a few UserTimeLogs
     * const { count } = await prisma.userTimeLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTimeLogsDeleteManyArgs>(args?: SelectSubset<T, UserTimeLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTimeLogsUpdateManyArgs>(args: SelectSubset<T, UserTimeLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTimeLogs and returns the data updated in the database.
     * @param {UserTimeLogsUpdateManyAndReturnArgs} args - Arguments to update many UserTimeLogs.
     * @example
     * // Update many UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTimeLogs and only return the `id`
     * const userTimeLogsWithIdOnly = await prisma.userTimeLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserTimeLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTimeLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTimeLogs.
     * @param {UserTimeLogsUpsertArgs} args - Arguments to update or create a UserTimeLogs.
     * @example
     * // Update or create a UserTimeLogs
     * const userTimeLogs = await prisma.userTimeLogs.upsert({
     *   create: {
     *     // ... data to create a UserTimeLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTimeLogs we want to update
     *   }
     * })
     */
    upsert<T extends UserTimeLogsUpsertArgs>(args: SelectSubset<T, UserTimeLogsUpsertArgs<ExtArgs>>): Prisma__UserTimeLogsClient<$Result.GetResult<Prisma.$UserTimeLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsCountArgs} args - Arguments to filter UserTimeLogs to count.
     * @example
     * // Count the number of UserTimeLogs
     * const count = await prisma.userTimeLogs.count({
     *   where: {
     *     // ... the filter for the UserTimeLogs we want to count
     *   }
     * })
    **/
    count<T extends UserTimeLogsCountArgs>(
      args?: Subset<T, UserTimeLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTimeLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTimeLogsAggregateArgs>(args: Subset<T, UserTimeLogsAggregateArgs>): Prisma.PrismaPromise<GetUserTimeLogsAggregateType<T>>

    /**
     * Group by UserTimeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTimeLogsGroupByArgs} args - Group by arguments.
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
      T extends UserTimeLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTimeLogsGroupByArgs['orderBy'] }
        : { orderBy?: UserTimeLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTimeLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTimeLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTimeLogs model
   */
  readonly fields: UserTimeLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTimeLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTimeLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserTimeLogs model
   */
  interface UserTimeLogsFieldRefs {
    readonly id: FieldRef<"UserTimeLogs", 'Int'>
    readonly user_id: FieldRef<"UserTimeLogs", 'String'>
    readonly gym_id: FieldRef<"UserTimeLogs", 'String'>
    readonly checked_in_at: FieldRef<"UserTimeLogs", 'DateTime'>
    readonly checked_out_at: FieldRef<"UserTimeLogs", 'DateTime'>
    readonly recorded_by: FieldRef<"UserTimeLogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserTimeLogs findUnique
   */
  export type UserTimeLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeLogs to fetch.
     */
    where: UserTimeLogsWhereUniqueInput
  }

  /**
   * UserTimeLogs findUniqueOrThrow
   */
  export type UserTimeLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeLogs to fetch.
     */
    where: UserTimeLogsWhereUniqueInput
  }

  /**
   * UserTimeLogs findFirst
   */
  export type UserTimeLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeLogs to fetch.
     */
    where?: UserTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimeLogs to fetch.
     */
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTimeLogs.
     */
    cursor?: UserTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTimeLogs.
     */
    distinct?: UserTimeLogsScalarFieldEnum | UserTimeLogsScalarFieldEnum[]
  }

  /**
   * UserTimeLogs findFirstOrThrow
   */
  export type UserTimeLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeLogs to fetch.
     */
    where?: UserTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimeLogs to fetch.
     */
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTimeLogs.
     */
    cursor?: UserTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTimeLogs.
     */
    distinct?: UserTimeLogsScalarFieldEnum | UserTimeLogsScalarFieldEnum[]
  }

  /**
   * UserTimeLogs findMany
   */
  export type UserTimeLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter, which UserTimeLogs to fetch.
     */
    where?: UserTimeLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTimeLogs to fetch.
     */
    orderBy?: UserTimeLogsOrderByWithRelationInput | UserTimeLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTimeLogs.
     */
    cursor?: UserTimeLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTimeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTimeLogs.
     */
    skip?: number
    distinct?: UserTimeLogsScalarFieldEnum | UserTimeLogsScalarFieldEnum[]
  }

  /**
   * UserTimeLogs create
   */
  export type UserTimeLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTimeLogs.
     */
    data: XOR<UserTimeLogsCreateInput, UserTimeLogsUncheckedCreateInput>
  }

  /**
   * UserTimeLogs createMany
   */
  export type UserTimeLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTimeLogs.
     */
    data: UserTimeLogsCreateManyInput | UserTimeLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTimeLogs createManyAndReturn
   */
  export type UserTimeLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * The data used to create many UserTimeLogs.
     */
    data: UserTimeLogsCreateManyInput | UserTimeLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTimeLogs update
   */
  export type UserTimeLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTimeLogs.
     */
    data: XOR<UserTimeLogsUpdateInput, UserTimeLogsUncheckedUpdateInput>
    /**
     * Choose, which UserTimeLogs to update.
     */
    where: UserTimeLogsWhereUniqueInput
  }

  /**
   * UserTimeLogs updateMany
   */
  export type UserTimeLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTimeLogs.
     */
    data: XOR<UserTimeLogsUpdateManyMutationInput, UserTimeLogsUncheckedUpdateManyInput>
    /**
     * Filter which UserTimeLogs to update
     */
    where?: UserTimeLogsWhereInput
    /**
     * Limit how many UserTimeLogs to update.
     */
    limit?: number
  }

  /**
   * UserTimeLogs updateManyAndReturn
   */
  export type UserTimeLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * The data used to update UserTimeLogs.
     */
    data: XOR<UserTimeLogsUpdateManyMutationInput, UserTimeLogsUncheckedUpdateManyInput>
    /**
     * Filter which UserTimeLogs to update
     */
    where?: UserTimeLogsWhereInput
    /**
     * Limit how many UserTimeLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTimeLogs upsert
   */
  export type UserTimeLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTimeLogs to update in case it exists.
     */
    where: UserTimeLogsWhereUniqueInput
    /**
     * In case the UserTimeLogs found by the `where` argument doesn't exist, create a new UserTimeLogs with this data.
     */
    create: XOR<UserTimeLogsCreateInput, UserTimeLogsUncheckedCreateInput>
    /**
     * In case the UserTimeLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTimeLogsUpdateInput, UserTimeLogsUncheckedUpdateInput>
  }

  /**
   * UserTimeLogs delete
   */
  export type UserTimeLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
    /**
     * Filter which UserTimeLogs to delete.
     */
    where: UserTimeLogsWhereUniqueInput
  }

  /**
   * UserTimeLogs deleteMany
   */
  export type UserTimeLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTimeLogs to delete
     */
    where?: UserTimeLogsWhereInput
    /**
     * Limit how many UserTimeLogs to delete.
     */
    limit?: number
  }

  /**
   * UserTimeLogs without action
   */
  export type UserTimeLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTimeLogs
     */
    select?: UserTimeLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTimeLogs
     */
    omit?: UserTimeLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTimeLogsInclude<ExtArgs> | null
  }


  /**
   * Model InstructorAssignment
   */

  export type AggregateInstructorAssignment = {
    _count: InstructorAssignmentCountAggregateOutputType | null
    _avg: InstructorAssignmentAvgAggregateOutputType | null
    _sum: InstructorAssignmentSumAggregateOutputType | null
    _min: InstructorAssignmentMinAggregateOutputType | null
    _max: InstructorAssignmentMaxAggregateOutputType | null
  }

  export type InstructorAssignmentAvgAggregateOutputType = {
    id: number | null
  }

  export type InstructorAssignmentSumAggregateOutputType = {
    id: number | null
  }

  export type InstructorAssignmentMinAggregateOutputType = {
    id: number | null
    instructor_id: string | null
    member_id: string | null
    assigned_at: Date | null
    assigned_by: string | null
  }

  export type InstructorAssignmentMaxAggregateOutputType = {
    id: number | null
    instructor_id: string | null
    member_id: string | null
    assigned_at: Date | null
    assigned_by: string | null
  }

  export type InstructorAssignmentCountAggregateOutputType = {
    id: number
    instructor_id: number
    member_id: number
    assigned_at: number
    assigned_by: number
    _all: number
  }


  export type InstructorAssignmentAvgAggregateInputType = {
    id?: true
  }

  export type InstructorAssignmentSumAggregateInputType = {
    id?: true
  }

  export type InstructorAssignmentMinAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    assigned_at?: true
    assigned_by?: true
  }

  export type InstructorAssignmentMaxAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    assigned_at?: true
    assigned_by?: true
  }

  export type InstructorAssignmentCountAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    assigned_at?: true
    assigned_by?: true
    _all?: true
  }

  export type InstructorAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorAssignment to aggregate.
     */
    where?: InstructorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorAssignments to fetch.
     */
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorAssignments
    **/
    _count?: true | InstructorAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorAssignmentMaxAggregateInputType
  }

  export type GetInstructorAssignmentAggregateType<T extends InstructorAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorAssignment[P]>
      : GetScalarType<T[P], AggregateInstructorAssignment[P]>
  }




  export type InstructorAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
    orderBy?: InstructorAssignmentOrderByWithAggregationInput | InstructorAssignmentOrderByWithAggregationInput[]
    by: InstructorAssignmentScalarFieldEnum[] | InstructorAssignmentScalarFieldEnum
    having?: InstructorAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorAssignmentCountAggregateInputType | true
    _avg?: InstructorAssignmentAvgAggregateInputType
    _sum?: InstructorAssignmentSumAggregateInputType
    _min?: InstructorAssignmentMinAggregateInputType
    _max?: InstructorAssignmentMaxAggregateInputType
  }

  export type InstructorAssignmentGroupByOutputType = {
    id: number
    instructor_id: string
    member_id: string
    assigned_at: Date
    assigned_by: string
    _count: InstructorAssignmentCountAggregateOutputType | null
    _avg: InstructorAssignmentAvgAggregateOutputType | null
    _sum: InstructorAssignmentSumAggregateOutputType | null
    _min: InstructorAssignmentMinAggregateOutputType | null
    _max: InstructorAssignmentMaxAggregateOutputType | null
  }

  type GetInstructorAssignmentGroupByPayload<T extends InstructorAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type InstructorAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    assigned_by?: boolean
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    assigned_by?: boolean
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    assigned_by?: boolean
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectScalar = {
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    assigned_by?: boolean
  }

  export type InstructorAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructor_id" | "member_id" | "assigned_at" | "assigned_by", ExtArgs["result"]["instructorAssignment"]>
  export type InstructorAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type InstructorAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type InstructorAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | GymInstructorDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $InstructorAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorAssignment"
    objects: {
      instructor: Prisma.$GymInstructorPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructor_id: string
      member_id: string
      assigned_at: Date
      assigned_by: string
    }, ExtArgs["result"]["instructorAssignment"]>
    composites: {}
  }

  type InstructorAssignmentGetPayload<S extends boolean | null | undefined | InstructorAssignmentDefaultArgs> = $Result.GetResult<Prisma.$InstructorAssignmentPayload, S>

  type InstructorAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorAssignmentCountAggregateInputType | true
    }

  export interface InstructorAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorAssignment'], meta: { name: 'InstructorAssignment' } }
    /**
     * Find zero or one InstructorAssignment that matches the filter.
     * @param {InstructorAssignmentFindUniqueArgs} args - Arguments to find a InstructorAssignment
     * @example
     * // Get one InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorAssignmentFindUniqueArgs>(args: SelectSubset<T, InstructorAssignmentFindUniqueArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorAssignmentFindUniqueOrThrowArgs} args - Arguments to find a InstructorAssignment
     * @example
     * // Get one InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentFindFirstArgs} args - Arguments to find a InstructorAssignment
     * @example
     * // Get one InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorAssignmentFindFirstArgs>(args?: SelectSubset<T, InstructorAssignmentFindFirstArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentFindFirstOrThrowArgs} args - Arguments to find a InstructorAssignment
     * @example
     * // Get one InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorAssignments
     * const instructorAssignments = await prisma.instructorAssignment.findMany()
     * 
     * // Get first 10 InstructorAssignments
     * const instructorAssignments = await prisma.instructorAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorAssignmentWithIdOnly = await prisma.instructorAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorAssignmentFindManyArgs>(args?: SelectSubset<T, InstructorAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorAssignment.
     * @param {InstructorAssignmentCreateArgs} args - Arguments to create a InstructorAssignment.
     * @example
     * // Create one InstructorAssignment
     * const InstructorAssignment = await prisma.instructorAssignment.create({
     *   data: {
     *     // ... data to create a InstructorAssignment
     *   }
     * })
     * 
     */
    create<T extends InstructorAssignmentCreateArgs>(args: SelectSubset<T, InstructorAssignmentCreateArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorAssignments.
     * @param {InstructorAssignmentCreateManyArgs} args - Arguments to create many InstructorAssignments.
     * @example
     * // Create many InstructorAssignments
     * const instructorAssignment = await prisma.instructorAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorAssignmentCreateManyArgs>(args?: SelectSubset<T, InstructorAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorAssignments and returns the data saved in the database.
     * @param {InstructorAssignmentCreateManyAndReturnArgs} args - Arguments to create many InstructorAssignments.
     * @example
     * // Create many InstructorAssignments
     * const instructorAssignment = await prisma.instructorAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorAssignments and only return the `id`
     * const instructorAssignmentWithIdOnly = await prisma.instructorAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorAssignment.
     * @param {InstructorAssignmentDeleteArgs} args - Arguments to delete one InstructorAssignment.
     * @example
     * // Delete one InstructorAssignment
     * const InstructorAssignment = await prisma.instructorAssignment.delete({
     *   where: {
     *     // ... filter to delete one InstructorAssignment
     *   }
     * })
     * 
     */
    delete<T extends InstructorAssignmentDeleteArgs>(args: SelectSubset<T, InstructorAssignmentDeleteArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorAssignment.
     * @param {InstructorAssignmentUpdateArgs} args - Arguments to update one InstructorAssignment.
     * @example
     * // Update one InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorAssignmentUpdateArgs>(args: SelectSubset<T, InstructorAssignmentUpdateArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorAssignments.
     * @param {InstructorAssignmentDeleteManyArgs} args - Arguments to filter InstructorAssignments to delete.
     * @example
     * // Delete a few InstructorAssignments
     * const { count } = await prisma.instructorAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorAssignmentDeleteManyArgs>(args?: SelectSubset<T, InstructorAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorAssignments
     * const instructorAssignment = await prisma.instructorAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorAssignmentUpdateManyArgs>(args: SelectSubset<T, InstructorAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorAssignments and returns the data updated in the database.
     * @param {InstructorAssignmentUpdateManyAndReturnArgs} args - Arguments to update many InstructorAssignments.
     * @example
     * // Update many InstructorAssignments
     * const instructorAssignment = await prisma.instructorAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorAssignments and only return the `id`
     * const instructorAssignmentWithIdOnly = await prisma.instructorAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorAssignment.
     * @param {InstructorAssignmentUpsertArgs} args - Arguments to update or create a InstructorAssignment.
     * @example
     * // Update or create a InstructorAssignment
     * const instructorAssignment = await prisma.instructorAssignment.upsert({
     *   create: {
     *     // ... data to create a InstructorAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorAssignment we want to update
     *   }
     * })
     */
    upsert<T extends InstructorAssignmentUpsertArgs>(args: SelectSubset<T, InstructorAssignmentUpsertArgs<ExtArgs>>): Prisma__InstructorAssignmentClient<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentCountArgs} args - Arguments to filter InstructorAssignments to count.
     * @example
     * // Count the number of InstructorAssignments
     * const count = await prisma.instructorAssignment.count({
     *   where: {
     *     // ... the filter for the InstructorAssignments we want to count
     *   }
     * })
    **/
    count<T extends InstructorAssignmentCountArgs>(
      args?: Subset<T, InstructorAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorAssignmentAggregateArgs>(args: Subset<T, InstructorAssignmentAggregateArgs>): Prisma.PrismaPromise<GetInstructorAssignmentAggregateType<T>>

    /**
     * Group by InstructorAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAssignmentGroupByArgs} args - Group by arguments.
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
      T extends InstructorAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: InstructorAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorAssignment model
   */
  readonly fields: InstructorAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends GymInstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymInstructorDefaultArgs<ExtArgs>>): Prisma__GymInstructorClient<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InstructorAssignment model
   */
  interface InstructorAssignmentFieldRefs {
    readonly id: FieldRef<"InstructorAssignment", 'Int'>
    readonly instructor_id: FieldRef<"InstructorAssignment", 'String'>
    readonly member_id: FieldRef<"InstructorAssignment", 'String'>
    readonly assigned_at: FieldRef<"InstructorAssignment", 'DateTime'>
    readonly assigned_by: FieldRef<"InstructorAssignment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InstructorAssignment findUnique
   */
  export type InstructorAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstructorAssignment to fetch.
     */
    where: InstructorAssignmentWhereUniqueInput
  }

  /**
   * InstructorAssignment findUniqueOrThrow
   */
  export type InstructorAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstructorAssignment to fetch.
     */
    where: InstructorAssignmentWhereUniqueInput
  }

  /**
   * InstructorAssignment findFirst
   */
  export type InstructorAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstructorAssignment to fetch.
     */
    where?: InstructorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorAssignments to fetch.
     */
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorAssignments.
     */
    cursor?: InstructorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorAssignments.
     */
    distinct?: InstructorAssignmentScalarFieldEnum | InstructorAssignmentScalarFieldEnum[]
  }

  /**
   * InstructorAssignment findFirstOrThrow
   */
  export type InstructorAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstructorAssignment to fetch.
     */
    where?: InstructorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorAssignments to fetch.
     */
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorAssignments.
     */
    cursor?: InstructorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorAssignments.
     */
    distinct?: InstructorAssignmentScalarFieldEnum | InstructorAssignmentScalarFieldEnum[]
  }

  /**
   * InstructorAssignment findMany
   */
  export type InstructorAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which InstructorAssignments to fetch.
     */
    where?: InstructorAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorAssignments to fetch.
     */
    orderBy?: InstructorAssignmentOrderByWithRelationInput | InstructorAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorAssignments.
     */
    cursor?: InstructorAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorAssignments.
     */
    skip?: number
    distinct?: InstructorAssignmentScalarFieldEnum | InstructorAssignmentScalarFieldEnum[]
  }

  /**
   * InstructorAssignment create
   */
  export type InstructorAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorAssignment.
     */
    data: XOR<InstructorAssignmentCreateInput, InstructorAssignmentUncheckedCreateInput>
  }

  /**
   * InstructorAssignment createMany
   */
  export type InstructorAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorAssignments.
     */
    data: InstructorAssignmentCreateManyInput | InstructorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstructorAssignment createManyAndReturn
   */
  export type InstructorAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorAssignments.
     */
    data: InstructorAssignmentCreateManyInput | InstructorAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorAssignment update
   */
  export type InstructorAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorAssignment.
     */
    data: XOR<InstructorAssignmentUpdateInput, InstructorAssignmentUncheckedUpdateInput>
    /**
     * Choose, which InstructorAssignment to update.
     */
    where: InstructorAssignmentWhereUniqueInput
  }

  /**
   * InstructorAssignment updateMany
   */
  export type InstructorAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorAssignments.
     */
    data: XOR<InstructorAssignmentUpdateManyMutationInput, InstructorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which InstructorAssignments to update
     */
    where?: InstructorAssignmentWhereInput
    /**
     * Limit how many InstructorAssignments to update.
     */
    limit?: number
  }

  /**
   * InstructorAssignment updateManyAndReturn
   */
  export type InstructorAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update InstructorAssignments.
     */
    data: XOR<InstructorAssignmentUpdateManyMutationInput, InstructorAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which InstructorAssignments to update
     */
    where?: InstructorAssignmentWhereInput
    /**
     * Limit how many InstructorAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorAssignment upsert
   */
  export type InstructorAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorAssignment to update in case it exists.
     */
    where: InstructorAssignmentWhereUniqueInput
    /**
     * In case the InstructorAssignment found by the `where` argument doesn't exist, create a new InstructorAssignment with this data.
     */
    create: XOR<InstructorAssignmentCreateInput, InstructorAssignmentUncheckedCreateInput>
    /**
     * In case the InstructorAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorAssignmentUpdateInput, InstructorAssignmentUncheckedUpdateInput>
  }

  /**
   * InstructorAssignment delete
   */
  export type InstructorAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
    /**
     * Filter which InstructorAssignment to delete.
     */
    where: InstructorAssignmentWhereUniqueInput
  }

  /**
   * InstructorAssignment deleteMany
   */
  export type InstructorAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorAssignments to delete
     */
    where?: InstructorAssignmentWhereInput
    /**
     * Limit how many InstructorAssignments to delete.
     */
    limit?: number
  }

  /**
   * InstructorAssignment without action
   */
  export type InstructorAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorAssignment
     */
    select?: InstructorAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorAssignment
     */
    omit?: InstructorAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorAssignmentInclude<ExtArgs> | null
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
    middlename: 'middlename',
    lastname: 'lastname',
    contact_number: 'contact_number',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const GymInstructorScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type GymInstructorScalarFieldEnum = (typeof GymInstructorScalarFieldEnum)[keyof typeof GymInstructorScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    owner_id: 'owner_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    plan_id: 'plan_id',
    start_date: 'start_date',
    end_date: 'end_date',
    is_active: 'is_active',
    is_paid: 'is_paid',
    amount_paid: 'amount_paid',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    num_of_days: 'num_of_days',
    num_of_sessions: 'num_of_sessions',
    is_active: 'is_active',
    is_default: 'is_default',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    membership_id: 'membership_id',
    amount: 'amount',
    payment_method: 'payment_method',
    paid_at: 'paid_at',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MemberTimeLogsScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    checked_in_at: 'checked_in_at',
    recorded_by: 'recorded_by'
  };

  export type MemberTimeLogsScalarFieldEnum = (typeof MemberTimeLogsScalarFieldEnum)[keyof typeof MemberTimeLogsScalarFieldEnum]


  export const UserTimeLogsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    gym_id: 'gym_id',
    checked_in_at: 'checked_in_at',
    checked_out_at: 'checked_out_at',
    recorded_by: 'recorded_by'
  };

  export type UserTimeLogsScalarFieldEnum = (typeof UserTimeLogsScalarFieldEnum)[keyof typeof UserTimeLogsScalarFieldEnum]


  export const InstructorAssignmentScalarFieldEnum: {
    id: 'id',
    instructor_id: 'instructor_id',
    member_id: 'member_id',
    assigned_at: 'assigned_at',
    assigned_by: 'assigned_by'
  };

  export type InstructorAssignmentScalarFieldEnum = (typeof InstructorAssignmentScalarFieldEnum)[keyof typeof InstructorAssignmentScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    
  /**
   * Deep Input Types
   */


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
    gyms_owned?: GymListRelationFilter
    attendance_logs?: UserTimeLogsListRelationFilter
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
    gyms_owned?: GymOrderByRelationAggregateInput
    attendance_logs?: UserTimeLogsOrderByRelationAggregateInput
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
    gyms_owned?: GymListRelationFilter
    attendance_logs?: UserTimeLogsListRelationFilter
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
    middlename?: StringNullableFilter<"Member"> | string | null
    lastname?: StringFilter<"Member"> | string
    contact_number?: StringNullableFilter<"Member"> | string | null
    created_at?: DateTimeFilter<"Member"> | Date | string
    created_by?: StringFilter<"Member"> | string
    memberships?: MembershipListRelationFilter
    attendance_logs?: MemberTimeLogsListRelationFilter
    gym_instructors?: InstructorAssignmentListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    attendance_logs?: MemberTimeLogsOrderByRelationAggregateInput
    gym_instructors?: InstructorAssignmentOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    firstname?: StringFilter<"Member"> | string
    middlename?: StringNullableFilter<"Member"> | string | null
    lastname?: StringFilter<"Member"> | string
    contact_number?: StringNullableFilter<"Member"> | string | null
    created_at?: DateTimeFilter<"Member"> | Date | string
    created_by?: StringFilter<"Member"> | string
    memberships?: MembershipListRelationFilter
    attendance_logs?: MemberTimeLogsListRelationFilter
    gym_instructors?: InstructorAssignmentListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
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
    middlename?: StringNullableWithAggregatesFilter<"Member"> | string | null
    lastname?: StringWithAggregatesFilter<"Member"> | string
    contact_number?: StringNullableWithAggregatesFilter<"Member"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    created_by?: StringWithAggregatesFilter<"Member"> | string
  }

  export type GymInstructorWhereInput = {
    AND?: GymInstructorWhereInput | GymInstructorWhereInput[]
    OR?: GymInstructorWhereInput[]
    NOT?: GymInstructorWhereInput | GymInstructorWhereInput[]
    id?: StringFilter<"GymInstructor"> | string
    gym_id?: StringFilter<"GymInstructor"> | string
    firstname?: StringFilter<"GymInstructor"> | string
    middlename?: StringNullableFilter<"GymInstructor"> | string | null
    lastname?: StringFilter<"GymInstructor"> | string
    created_at?: DateTimeFilter<"GymInstructor"> | Date | string
    created_by?: StringFilter<"GymInstructor"> | string
    trainees?: InstructorAssignmentListRelationFilter
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type GymInstructorOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    trainees?: InstructorAssignmentOrderByRelationAggregateInput
    gym?: GymOrderByWithRelationInput
  }

  export type GymInstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymInstructorWhereInput | GymInstructorWhereInput[]
    OR?: GymInstructorWhereInput[]
    NOT?: GymInstructorWhereInput | GymInstructorWhereInput[]
    gym_id?: StringFilter<"GymInstructor"> | string
    firstname?: StringFilter<"GymInstructor"> | string
    middlename?: StringNullableFilter<"GymInstructor"> | string | null
    lastname?: StringFilter<"GymInstructor"> | string
    created_at?: DateTimeFilter<"GymInstructor"> | Date | string
    created_by?: StringFilter<"GymInstructor"> | string
    trainees?: InstructorAssignmentListRelationFilter
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id">

  export type GymInstructorOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: GymInstructorCountOrderByAggregateInput
    _max?: GymInstructorMaxOrderByAggregateInput
    _min?: GymInstructorMinOrderByAggregateInput
  }

  export type GymInstructorScalarWhereWithAggregatesInput = {
    AND?: GymInstructorScalarWhereWithAggregatesInput | GymInstructorScalarWhereWithAggregatesInput[]
    OR?: GymInstructorScalarWhereWithAggregatesInput[]
    NOT?: GymInstructorScalarWhereWithAggregatesInput | GymInstructorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GymInstructor"> | string
    gym_id?: StringWithAggregatesFilter<"GymInstructor"> | string
    firstname?: StringWithAggregatesFilter<"GymInstructor"> | string
    middlename?: StringNullableWithAggregatesFilter<"GymInstructor"> | string | null
    lastname?: StringWithAggregatesFilter<"GymInstructor"> | string
    created_at?: DateTimeWithAggregatesFilter<"GymInstructor"> | Date | string
    created_by?: StringWithAggregatesFilter<"GymInstructor"> | string
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    instructors?: GymInstructorListRelationFilter
    user_time_logs?: UserTimeLogsListRelationFilter
    member_time_logs?: MemberTimeLogsListRelationFilter
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    owner?: UserOrderByWithRelationInput
    memberships?: MembershipOrderByRelationAggregateInput
    instructors?: GymInstructorOrderByRelationAggregateInput
    user_time_logs?: UserTimeLogsOrderByRelationAggregateInput
    member_time_logs?: MemberTimeLogsOrderByRelationAggregateInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    instructors?: GymInstructorListRelationFilter
    user_time_logs?: UserTimeLogsListRelationFilter
    member_time_logs?: MemberTimeLogsListRelationFilter
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
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
    owner_id?: StringWithAggregatesFilter<"Gym"> | string
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
    plan_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_paid?: BoolFilter<"Membership"> | boolean
    amount_paid?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_paid?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    member?: MemberOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    member_id?: StringFilter<"Membership"> | string
    gym_id?: StringFilter<"Membership"> | string
    plan_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_paid?: BoolFilter<"Membership"> | boolean
    amount_paid?: StringFilter<"Membership"> | string
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by?: StringFilter<"Membership"> | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_paid?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    member_id?: StringWithAggregatesFilter<"Membership"> | string
    gym_id?: StringWithAggregatesFilter<"Membership"> | string
    plan_id?: StringWithAggregatesFilter<"Membership"> | string
    start_date?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Membership"> | Date | string | null
    is_active?: BoolWithAggregatesFilter<"Membership"> | boolean
    is_paid?: BoolWithAggregatesFilter<"Membership"> | boolean
    amount_paid?: StringWithAggregatesFilter<"Membership"> | string
    created_at?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    created_by?: StringWithAggregatesFilter<"Membership"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: StringFilter<"Plan"> | string
    num_of_days?: IntFilter<"Plan"> | number
    num_of_sessions?: IntFilter<"Plan"> | number
    is_active?: BoolFilter<"Plan"> | boolean
    is_default?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: StringFilter<"Plan"> | string
    memberships?: MembershipListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    is_active?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: StringFilter<"Plan"> | string
    num_of_days?: IntFilter<"Plan"> | number
    num_of_sessions?: IntFilter<"Plan"> | number
    is_active?: BoolFilter<"Plan"> | boolean
    is_default?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: StringFilter<"Plan"> | string
    memberships?: MembershipListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    is_active?: SortOrder
    is_default?: SortOrder
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
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price?: StringWithAggregatesFilter<"Plan"> | string
    num_of_days?: IntWithAggregatesFilter<"Plan"> | number
    num_of_sessions?: IntWithAggregatesFilter<"Plan"> | number
    is_active?: BoolWithAggregatesFilter<"Plan"> | boolean
    is_default?: BoolWithAggregatesFilter<"Plan"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    created_by?: StringWithAggregatesFilter<"Plan"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    membership_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
    created_by?: StringFilter<"Payment"> | string
    membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    membership_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    membership?: MembershipOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    membership_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
    created_by?: StringFilter<"Payment"> | string
    membership?: XOR<MembershipScalarRelationFilter, MembershipWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    membership_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    membership_id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    created_by?: StringWithAggregatesFilter<"Payment"> | string
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

  export type UserTimeLogsWhereInput = {
    AND?: UserTimeLogsWhereInput | UserTimeLogsWhereInput[]
    OR?: UserTimeLogsWhereInput[]
    NOT?: UserTimeLogsWhereInput | UserTimeLogsWhereInput[]
    id?: IntFilter<"UserTimeLogs"> | number
    user_id?: StringFilter<"UserTimeLogs"> | string
    gym_id?: StringFilter<"UserTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"UserTimeLogs"> | Date | string
    checked_out_at?: DateTimeNullableFilter<"UserTimeLogs"> | Date | string | null
    recorded_by?: StringFilter<"UserTimeLogs"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type UserTimeLogsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    checked_out_at?: SortOrderInput | SortOrder
    recorded_by?: SortOrder
    user?: UserOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
  }

  export type UserTimeLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserTimeLogsWhereInput | UserTimeLogsWhereInput[]
    OR?: UserTimeLogsWhereInput[]
    NOT?: UserTimeLogsWhereInput | UserTimeLogsWhereInput[]
    user_id?: StringFilter<"UserTimeLogs"> | string
    gym_id?: StringFilter<"UserTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"UserTimeLogs"> | Date | string
    checked_out_at?: DateTimeNullableFilter<"UserTimeLogs"> | Date | string | null
    recorded_by?: StringFilter<"UserTimeLogs"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id">

  export type UserTimeLogsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    checked_out_at?: SortOrderInput | SortOrder
    recorded_by?: SortOrder
    _count?: UserTimeLogsCountOrderByAggregateInput
    _avg?: UserTimeLogsAvgOrderByAggregateInput
    _max?: UserTimeLogsMaxOrderByAggregateInput
    _min?: UserTimeLogsMinOrderByAggregateInput
    _sum?: UserTimeLogsSumOrderByAggregateInput
  }

  export type UserTimeLogsScalarWhereWithAggregatesInput = {
    AND?: UserTimeLogsScalarWhereWithAggregatesInput | UserTimeLogsScalarWhereWithAggregatesInput[]
    OR?: UserTimeLogsScalarWhereWithAggregatesInput[]
    NOT?: UserTimeLogsScalarWhereWithAggregatesInput | UserTimeLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTimeLogs"> | number
    user_id?: StringWithAggregatesFilter<"UserTimeLogs"> | string
    gym_id?: StringWithAggregatesFilter<"UserTimeLogs"> | string
    checked_in_at?: DateTimeWithAggregatesFilter<"UserTimeLogs"> | Date | string
    checked_out_at?: DateTimeNullableWithAggregatesFilter<"UserTimeLogs"> | Date | string | null
    recorded_by?: StringWithAggregatesFilter<"UserTimeLogs"> | string
  }

  export type InstructorAssignmentWhereInput = {
    AND?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    OR?: InstructorAssignmentWhereInput[]
    NOT?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    id?: IntFilter<"InstructorAssignment"> | number
    instructor_id?: StringFilter<"InstructorAssignment"> | string
    member_id?: StringFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeFilter<"InstructorAssignment"> | Date | string
    assigned_by?: StringFilter<"InstructorAssignment"> | string
    instructor?: XOR<GymInstructorScalarRelationFilter, GymInstructorWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type InstructorAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    assigned_by?: SortOrder
    instructor?: GymInstructorOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
  }

  export type InstructorAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    OR?: InstructorAssignmentWhereInput[]
    NOT?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    instructor_id?: StringFilter<"InstructorAssignment"> | string
    member_id?: StringFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeFilter<"InstructorAssignment"> | Date | string
    assigned_by?: StringFilter<"InstructorAssignment"> | string
    instructor?: XOR<GymInstructorScalarRelationFilter, GymInstructorWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type InstructorAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    assigned_by?: SortOrder
    _count?: InstructorAssignmentCountOrderByAggregateInput
    _avg?: InstructorAssignmentAvgOrderByAggregateInput
    _max?: InstructorAssignmentMaxOrderByAggregateInput
    _min?: InstructorAssignmentMinOrderByAggregateInput
    _sum?: InstructorAssignmentSumOrderByAggregateInput
  }

  export type InstructorAssignmentScalarWhereWithAggregatesInput = {
    AND?: InstructorAssignmentScalarWhereWithAggregatesInput | InstructorAssignmentScalarWhereWithAggregatesInput[]
    OR?: InstructorAssignmentScalarWhereWithAggregatesInput[]
    NOT?: InstructorAssignmentScalarWhereWithAggregatesInput | InstructorAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstructorAssignment"> | number
    instructor_id?: StringWithAggregatesFilter<"InstructorAssignment"> | string
    member_id?: StringWithAggregatesFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeWithAggregatesFilter<"InstructorAssignment"> | Date | string
    assigned_by?: StringWithAggregatesFilter<"InstructorAssignment"> | string
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
    gyms_owned?: GymCreateNestedManyWithoutOwnerInput
    attendance_logs?: UserTimeLogsCreateNestedManyWithoutUserInput
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
    gyms_owned?: GymUncheckedCreateNestedManyWithoutOwnerInput
    attendance_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutUserInput
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
    gyms_owned?: GymUpdateManyWithoutOwnerNestedInput
    attendance_logs?: UserTimeLogsUpdateManyWithoutUserNestedInput
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
    gyms_owned?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    attendance_logs?: UserTimeLogsUncheckedUpdateManyWithoutUserNestedInput
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
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymInstructorCreateInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
    trainees?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    gym: GymCreateNestedOneWithoutInstructorsInput
  }

  export type GymInstructorUncheckedCreateInput = {
    id?: string
    gym_id: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
    trainees?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type GymInstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    trainees?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    gym?: GymUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type GymInstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    trainees?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type GymInstructorCreateManyInput = {
    id?: string
    gym_id: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
  }

  export type GymInstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymInstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymCreateInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    owner: UserCreateNestedOneWithoutGyms_ownedInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutGyms_ownedNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
    name: string
    location: string
    owner_id: string
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
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
    payments?: PaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    payments?: PaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: PaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipCreateManyInput = {
    id?: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
    membership: MembershipCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    membership_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    membership?: MembershipUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    membership_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    membership_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    membership_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserTimeLogsCreateInput = {
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
    user: UserCreateNestedOneWithoutAttendance_logsInput
    gym: GymCreateNestedOneWithoutUser_time_logsInput
  }

  export type UserTimeLogsUncheckedCreateInput = {
    id?: number
    user_id: string
    gym_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type UserTimeLogsUpdateInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutUser_time_logsNestedInput
  }

  export type UserTimeLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsCreateManyInput = {
    id?: number
    user_id: string
    gym_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type UserTimeLogsUpdateManyMutationInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentCreateInput = {
    assigned_at?: Date | string
    assigned_by: string
    instructor: GymInstructorCreateNestedOneWithoutTraineesInput
    member: MemberCreateNestedOneWithoutGym_instructorsInput
  }

  export type InstructorAssignmentUncheckedCreateInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type InstructorAssignmentUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    instructor?: GymInstructorUpdateOneRequiredWithoutTraineesNestedInput
    member?: MemberUpdateOneRequiredWithoutGym_instructorsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentCreateManyInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type InstructorAssignmentUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
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

  export type GymListRelationFilter = {
    every?: GymWhereInput
    some?: GymWhereInput
    none?: GymWhereInput
  }

  export type UserTimeLogsListRelationFilter = {
    every?: UserTimeLogsWhereInput
    some?: UserTimeLogsWhereInput
    none?: UserTimeLogsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTimeLogsOrderByRelationAggregateInput = {
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

  export type InstructorAssignmentListRelationFilter = {
    every?: InstructorAssignmentWhereInput
    some?: InstructorAssignmentWhereInput
    none?: InstructorAssignmentWhereInput
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberTimeLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymScalarRelationFilter = {
    is?: GymWhereInput
    isNot?: GymWhereInput
  }

  export type GymInstructorCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymInstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymInstructorMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GymInstructorListRelationFilter = {
    every?: GymInstructorWhereInput
    some?: GymInstructorWhereInput
    none?: GymInstructorWhereInput
  }

  export type GymInstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
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

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    is_paid?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    is_paid?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    plan_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    is_active?: SortOrder
    is_paid?: SortOrder
    amount_paid?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
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

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    is_active?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    is_active?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
    is_active?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    num_of_days?: SortOrder
    num_of_sessions?: SortOrder
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

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type MembershipScalarRelationFilter = {
    is?: MembershipWhereInput
    isNot?: MembershipWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    membership_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    membership_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    membership_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
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

  export type UserTimeLogsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    checked_out_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type UserTimeLogsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserTimeLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    checked_out_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type UserTimeLogsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    gym_id?: SortOrder
    checked_in_at?: SortOrder
    checked_out_at?: SortOrder
    recorded_by?: SortOrder
  }

  export type UserTimeLogsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymInstructorScalarRelationFilter = {
    is?: GymInstructorWhereInput
    isNot?: GymInstructorWhereInput
  }

  export type InstructorAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    assigned_by?: SortOrder
  }

  export type InstructorAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstructorAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    assigned_by?: SortOrder
  }

  export type InstructorAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    assigned_by?: SortOrder
  }

  export type InstructorAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type UserTimeLogsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput> | UserTimeLogsCreateWithoutUserInput[] | UserTimeLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutUserInput | UserTimeLogsCreateOrConnectWithoutUserInput[]
    createMany?: UserTimeLogsCreateManyUserInputEnvelope
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
  }

  export type GymUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type UserTimeLogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput> | UserTimeLogsCreateWithoutUserInput[] | UserTimeLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutUserInput | UserTimeLogsCreateOrConnectWithoutUserInput[]
    createMany?: UserTimeLogsCreateManyUserInputEnvelope
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GymUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutOwnerInput | GymUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutOwnerInput | GymUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GymUpdateManyWithWhereWithoutOwnerInput | GymUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type UserTimeLogsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput> | UserTimeLogsCreateWithoutUserInput[] | UserTimeLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutUserInput | UserTimeLogsCreateOrConnectWithoutUserInput[]
    upsert?: UserTimeLogsUpsertWithWhereUniqueWithoutUserInput | UserTimeLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTimeLogsCreateManyUserInputEnvelope
    set?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    disconnect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    delete?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    update?: UserTimeLogsUpdateWithWhereUniqueWithoutUserInput | UserTimeLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTimeLogsUpdateManyWithWhereWithoutUserInput | UserTimeLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
  }

  export type GymUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutOwnerInput | GymUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutOwnerInput | GymUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GymUpdateManyWithWhereWithoutOwnerInput | GymUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type UserTimeLogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput> | UserTimeLogsCreateWithoutUserInput[] | UserTimeLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutUserInput | UserTimeLogsCreateOrConnectWithoutUserInput[]
    upsert?: UserTimeLogsUpsertWithWhereUniqueWithoutUserInput | UserTimeLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTimeLogsCreateManyUserInputEnvelope
    set?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    disconnect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    delete?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    update?: UserTimeLogsUpdateWithWhereUniqueWithoutUserInput | UserTimeLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTimeLogsUpdateManyWithWhereWithoutUserInput | UserTimeLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
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

  export type InstructorAssignmentCreateNestedManyWithoutMemberInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
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

  export type InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
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

  export type InstructorAssignmentUpdateManyWithoutMemberNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutMemberInput | InstructorAssignmentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutMemberInput | InstructorAssignmentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutMemberInput | InstructorAssignmentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
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

  export type InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutMemberInput | InstructorAssignmentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutMemberInput | InstructorAssignmentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutMemberInput | InstructorAssignmentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
  }

  export type InstructorAssignmentCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type GymCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: GymCreateOrConnectWithoutInstructorsInput
    connect?: GymWhereUniqueInput
  }

  export type InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type InstructorAssignmentUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutInstructorInput | InstructorAssignmentUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutInstructorInput | InstructorAssignmentUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutInstructorInput | InstructorAssignmentUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
  }

  export type GymUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: GymCreateOrConnectWithoutInstructorsInput
    upsert?: GymUpsertWithoutInstructorsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutInstructorsInput, GymUpdateWithoutInstructorsInput>, GymUncheckedUpdateWithoutInstructorsInput>
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutInstructorInput | InstructorAssignmentUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutInstructorInput | InstructorAssignmentUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutInstructorInput | InstructorAssignmentUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGyms_ownedInput = {
    create?: XOR<UserCreateWithoutGyms_ownedInput, UserUncheckedCreateWithoutGyms_ownedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGyms_ownedInput
    connect?: UserWhereUniqueInput
  }

  export type MembershipCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type GymInstructorCreateNestedManyWithoutGymInput = {
    create?: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput> | GymInstructorCreateWithoutGymInput[] | GymInstructorUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutGymInput | GymInstructorCreateOrConnectWithoutGymInput[]
    createMany?: GymInstructorCreateManyGymInputEnvelope
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
  }

  export type UserTimeLogsCreateNestedManyWithoutGymInput = {
    create?: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput> | UserTimeLogsCreateWithoutGymInput[] | UserTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutGymInput | UserTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: UserTimeLogsCreateManyGymInputEnvelope
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
  }

  export type MemberTimeLogsCreateNestedManyWithoutGymInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput> | MembershipCreateWithoutGymInput[] | MembershipUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutGymInput | MembershipCreateOrConnectWithoutGymInput[]
    createMany?: MembershipCreateManyGymInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type GymInstructorUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput> | GymInstructorCreateWithoutGymInput[] | GymInstructorUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutGymInput | GymInstructorCreateOrConnectWithoutGymInput[]
    createMany?: GymInstructorCreateManyGymInputEnvelope
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
  }

  export type UserTimeLogsUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput> | UserTimeLogsCreateWithoutGymInput[] | UserTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutGymInput | UserTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: UserTimeLogsCreateManyGymInputEnvelope
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
  }

  export type MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<MemberTimeLogsCreateWithoutGymInput, MemberTimeLogsUncheckedCreateWithoutGymInput> | MemberTimeLogsCreateWithoutGymInput[] | MemberTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: MemberTimeLogsCreateOrConnectWithoutGymInput | MemberTimeLogsCreateOrConnectWithoutGymInput[]
    createMany?: MemberTimeLogsCreateManyGymInputEnvelope
    connect?: MemberTimeLogsWhereUniqueInput | MemberTimeLogsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGyms_ownedNestedInput = {
    create?: XOR<UserCreateWithoutGyms_ownedInput, UserUncheckedCreateWithoutGyms_ownedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGyms_ownedInput
    upsert?: UserUpsertWithoutGyms_ownedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGyms_ownedInput, UserUpdateWithoutGyms_ownedInput>, UserUncheckedUpdateWithoutGyms_ownedInput>
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

  export type GymInstructorUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput> | GymInstructorCreateWithoutGymInput[] | GymInstructorUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutGymInput | GymInstructorCreateOrConnectWithoutGymInput[]
    upsert?: GymInstructorUpsertWithWhereUniqueWithoutGymInput | GymInstructorUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymInstructorCreateManyGymInputEnvelope
    set?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    disconnect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    delete?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    update?: GymInstructorUpdateWithWhereUniqueWithoutGymInput | GymInstructorUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymInstructorUpdateManyWithWhereWithoutGymInput | GymInstructorUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
  }

  export type UserTimeLogsUpdateManyWithoutGymNestedInput = {
    create?: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput> | UserTimeLogsCreateWithoutGymInput[] | UserTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutGymInput | UserTimeLogsCreateOrConnectWithoutGymInput[]
    upsert?: UserTimeLogsUpsertWithWhereUniqueWithoutGymInput | UserTimeLogsUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: UserTimeLogsCreateManyGymInputEnvelope
    set?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    disconnect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    delete?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    update?: UserTimeLogsUpdateWithWhereUniqueWithoutGymInput | UserTimeLogsUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: UserTimeLogsUpdateManyWithWhereWithoutGymInput | UserTimeLogsUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
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

  export type GymInstructorUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput> | GymInstructorCreateWithoutGymInput[] | GymInstructorUncheckedCreateWithoutGymInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutGymInput | GymInstructorCreateOrConnectWithoutGymInput[]
    upsert?: GymInstructorUpsertWithWhereUniqueWithoutGymInput | GymInstructorUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: GymInstructorCreateManyGymInputEnvelope
    set?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    disconnect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    delete?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    update?: GymInstructorUpdateWithWhereUniqueWithoutGymInput | GymInstructorUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: GymInstructorUpdateManyWithWhereWithoutGymInput | GymInstructorUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
  }

  export type UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput> | UserTimeLogsCreateWithoutGymInput[] | UserTimeLogsUncheckedCreateWithoutGymInput[]
    connectOrCreate?: UserTimeLogsCreateOrConnectWithoutGymInput | UserTimeLogsCreateOrConnectWithoutGymInput[]
    upsert?: UserTimeLogsUpsertWithWhereUniqueWithoutGymInput | UserTimeLogsUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: UserTimeLogsCreateManyGymInputEnvelope
    set?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    disconnect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    delete?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    connect?: UserTimeLogsWhereUniqueInput | UserTimeLogsWhereUniqueInput[]
    update?: UserTimeLogsUpdateWithWhereUniqueWithoutGymInput | UserTimeLogsUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: UserTimeLogsUpdateManyWithWhereWithoutGymInput | UserTimeLogsUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
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

  export type PlanCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<PlanCreateWithoutMembershipsInput, PlanUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMembershipsInput
    connect?: PlanWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutMembershipInput = {
    create?: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput> | PaymentCreateWithoutMembershipInput[] | PaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembershipInput | PaymentCreateOrConnectWithoutMembershipInput[]
    createMany?: PaymentCreateManyMembershipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutMembershipInput = {
    create?: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput> | PaymentCreateWithoutMembershipInput[] | PaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembershipInput | PaymentCreateOrConnectWithoutMembershipInput[]
    createMany?: PaymentCreateManyMembershipInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type PlanUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<PlanCreateWithoutMembershipsInput, PlanUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMembershipsInput
    upsert?: PlanUpsertWithoutMembershipsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutMembershipsInput, PlanUpdateWithoutMembershipsInput>, PlanUncheckedUpdateWithoutMembershipsInput>
  }

  export type PaymentUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput> | PaymentCreateWithoutMembershipInput[] | PaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembershipInput | PaymentCreateOrConnectWithoutMembershipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMembershipInput | PaymentUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: PaymentCreateManyMembershipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMembershipInput | PaymentUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMembershipInput | PaymentUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutMembershipNestedInput = {
    create?: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput> | PaymentCreateWithoutMembershipInput[] | PaymentUncheckedCreateWithoutMembershipInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembershipInput | PaymentCreateOrConnectWithoutMembershipInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMembershipInput | PaymentUpsertWithWhereUniqueWithoutMembershipInput[]
    createMany?: PaymentCreateManyMembershipInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMembershipInput | PaymentUpdateWithWhereUniqueWithoutMembershipInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMembershipInput | PaymentUpdateManyWithWhereWithoutMembershipInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MembershipCreateNestedManyWithoutPlanInput = {
    create?: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput> | MembershipCreateWithoutPlanInput[] | MembershipUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutPlanInput | MembershipCreateOrConnectWithoutPlanInput[]
    createMany?: MembershipCreateManyPlanInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput> | MembershipCreateWithoutPlanInput[] | MembershipUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutPlanInput | MembershipCreateOrConnectWithoutPlanInput[]
    createMany?: MembershipCreateManyPlanInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembershipUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput> | MembershipCreateWithoutPlanInput[] | MembershipUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutPlanInput | MembershipCreateOrConnectWithoutPlanInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutPlanInput | MembershipUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MembershipCreateManyPlanInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutPlanInput | MembershipUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutPlanInput | MembershipUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput> | MembershipCreateWithoutPlanInput[] | MembershipUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutPlanInput | MembershipCreateOrConnectWithoutPlanInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutPlanInput | MembershipUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MembershipCreateManyPlanInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutPlanInput | MembershipUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutPlanInput | MembershipUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type MembershipCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutPaymentsInput
    connect?: MembershipWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type MembershipUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembershipCreateOrConnectWithoutPaymentsInput
    upsert?: MembershipUpsertWithoutPaymentsInput
    connect?: MembershipWhereUniqueInput
    update?: XOR<XOR<MembershipUpdateToOneWithWhereWithoutPaymentsInput, MembershipUpdateWithoutPaymentsInput>, MembershipUncheckedUpdateWithoutPaymentsInput>
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

  export type UserCreateNestedOneWithoutAttendance_logsInput = {
    create?: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendance_logsInput
    connect?: UserWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutUser_time_logsInput = {
    create?: XOR<GymCreateWithoutUser_time_logsInput, GymUncheckedCreateWithoutUser_time_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutUser_time_logsInput
    connect?: GymWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendance_logsNestedInput = {
    create?: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendance_logsInput
    upsert?: UserUpsertWithoutAttendance_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendance_logsInput, UserUpdateWithoutAttendance_logsInput>, UserUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type GymUpdateOneRequiredWithoutUser_time_logsNestedInput = {
    create?: XOR<GymCreateWithoutUser_time_logsInput, GymUncheckedCreateWithoutUser_time_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutUser_time_logsInput
    upsert?: GymUpsertWithoutUser_time_logsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutUser_time_logsInput, GymUpdateWithoutUser_time_logsInput>, GymUncheckedUpdateWithoutUser_time_logsInput>
  }

  export type GymInstructorCreateNestedOneWithoutTraineesInput = {
    create?: XOR<GymInstructorCreateWithoutTraineesInput, GymInstructorUncheckedCreateWithoutTraineesInput>
    connectOrCreate?: GymInstructorCreateOrConnectWithoutTraineesInput
    connect?: GymInstructorWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutGym_instructorsInput = {
    create?: XOR<MemberCreateWithoutGym_instructorsInput, MemberUncheckedCreateWithoutGym_instructorsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutGym_instructorsInput
    connect?: MemberWhereUniqueInput
  }

  export type GymInstructorUpdateOneRequiredWithoutTraineesNestedInput = {
    create?: XOR<GymInstructorCreateWithoutTraineesInput, GymInstructorUncheckedCreateWithoutTraineesInput>
    connectOrCreate?: GymInstructorCreateOrConnectWithoutTraineesInput
    upsert?: GymInstructorUpsertWithoutTraineesInput
    connect?: GymInstructorWhereUniqueInput
    update?: XOR<XOR<GymInstructorUpdateToOneWithWhereWithoutTraineesInput, GymInstructorUpdateWithoutTraineesInput>, GymInstructorUncheckedUpdateWithoutTraineesInput>
  }

  export type MemberUpdateOneRequiredWithoutGym_instructorsNestedInput = {
    create?: XOR<MemberCreateWithoutGym_instructorsInput, MemberUncheckedCreateWithoutGym_instructorsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutGym_instructorsInput
    upsert?: MemberUpsertWithoutGym_instructorsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutGym_instructorsInput, MemberUpdateWithoutGym_instructorsInput>, MemberUncheckedUpdateWithoutGym_instructorsInput>
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

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
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

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type GymCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutOwnerInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
  }

  export type GymCreateManyOwnerInputEnvelope = {
    data: GymCreateManyOwnerInput | GymCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserTimeLogsCreateWithoutUserInput = {
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
    gym: GymCreateNestedOneWithoutUser_time_logsInput
  }

  export type UserTimeLogsUncheckedCreateWithoutUserInput = {
    id?: number
    gym_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type UserTimeLogsCreateOrConnectWithoutUserInput = {
    where: UserTimeLogsWhereUniqueInput
    create: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput>
  }

  export type UserTimeLogsCreateManyUserInputEnvelope = {
    data: UserTimeLogsCreateManyUserInput | UserTimeLogsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GymUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GymWhereUniqueInput
    update: XOR<GymUpdateWithoutOwnerInput, GymUncheckedUpdateWithoutOwnerInput>
    create: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
  }

  export type GymUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GymWhereUniqueInput
    data: XOR<GymUpdateWithoutOwnerInput, GymUncheckedUpdateWithoutOwnerInput>
  }

  export type GymUpdateManyWithWhereWithoutOwnerInput = {
    where: GymScalarWhereInput
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GymScalarWhereInput = {
    AND?: GymScalarWhereInput | GymScalarWhereInput[]
    OR?: GymScalarWhereInput[]
    NOT?: GymScalarWhereInput | GymScalarWhereInput[]
    id?: StringFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    created_by?: StringFilter<"Gym"> | string
  }

  export type UserTimeLogsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTimeLogsWhereUniqueInput
    update: XOR<UserTimeLogsUpdateWithoutUserInput, UserTimeLogsUncheckedUpdateWithoutUserInput>
    create: XOR<UserTimeLogsCreateWithoutUserInput, UserTimeLogsUncheckedCreateWithoutUserInput>
  }

  export type UserTimeLogsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTimeLogsWhereUniqueInput
    data: XOR<UserTimeLogsUpdateWithoutUserInput, UserTimeLogsUncheckedUpdateWithoutUserInput>
  }

  export type UserTimeLogsUpdateManyWithWhereWithoutUserInput = {
    where: UserTimeLogsScalarWhereInput
    data: XOR<UserTimeLogsUpdateManyMutationInput, UserTimeLogsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTimeLogsScalarWhereInput = {
    AND?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
    OR?: UserTimeLogsScalarWhereInput[]
    NOT?: UserTimeLogsScalarWhereInput | UserTimeLogsScalarWhereInput[]
    id?: IntFilter<"UserTimeLogs"> | number
    user_id?: StringFilter<"UserTimeLogs"> | string
    gym_id?: StringFilter<"UserTimeLogs"> | string
    checked_in_at?: DateTimeFilter<"UserTimeLogs"> | Date | string
    checked_out_at?: DateTimeNullableFilter<"UserTimeLogs"> | Date | string | null
    recorded_by?: StringFilter<"UserTimeLogs"> | string
  }

  export type MembershipCreateWithoutMemberInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
    payments?: PaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutMemberInput = {
    id?: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    payments?: PaymentUncheckedCreateNestedManyWithoutMembershipInput
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

  export type InstructorAssignmentCreateWithoutMemberInput = {
    assigned_at?: Date | string
    assigned_by: string
    instructor: GymInstructorCreateNestedOneWithoutTraineesInput
  }

  export type InstructorAssignmentUncheckedCreateWithoutMemberInput = {
    id?: number
    instructor_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type InstructorAssignmentCreateOrConnectWithoutMemberInput = {
    where: InstructorAssignmentWhereUniqueInput
    create: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput>
  }

  export type InstructorAssignmentCreateManyMemberInputEnvelope = {
    data: InstructorAssignmentCreateManyMemberInput | InstructorAssignmentCreateManyMemberInput[]
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
    plan_id?: StringFilter<"Membership"> | string
    start_date?: DateTimeFilter<"Membership"> | Date | string
    end_date?: DateTimeNullableFilter<"Membership"> | Date | string | null
    is_active?: BoolFilter<"Membership"> | boolean
    is_paid?: BoolFilter<"Membership"> | boolean
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

  export type InstructorAssignmentUpsertWithWhereUniqueWithoutMemberInput = {
    where: InstructorAssignmentWhereUniqueInput
    update: XOR<InstructorAssignmentUpdateWithoutMemberInput, InstructorAssignmentUncheckedUpdateWithoutMemberInput>
    create: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput>
  }

  export type InstructorAssignmentUpdateWithWhereUniqueWithoutMemberInput = {
    where: InstructorAssignmentWhereUniqueInput
    data: XOR<InstructorAssignmentUpdateWithoutMemberInput, InstructorAssignmentUncheckedUpdateWithoutMemberInput>
  }

  export type InstructorAssignmentUpdateManyWithWhereWithoutMemberInput = {
    where: InstructorAssignmentScalarWhereInput
    data: XOR<InstructorAssignmentUpdateManyMutationInput, InstructorAssignmentUncheckedUpdateManyWithoutMemberInput>
  }

  export type InstructorAssignmentScalarWhereInput = {
    AND?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
    OR?: InstructorAssignmentScalarWhereInput[]
    NOT?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
    id?: IntFilter<"InstructorAssignment"> | number
    instructor_id?: StringFilter<"InstructorAssignment"> | string
    member_id?: StringFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeFilter<"InstructorAssignment"> | Date | string
    assigned_by?: StringFilter<"InstructorAssignment"> | string
  }

  export type InstructorAssignmentCreateWithoutInstructorInput = {
    assigned_at?: Date | string
    assigned_by: string
    member: MemberCreateNestedOneWithoutGym_instructorsInput
  }

  export type InstructorAssignmentUncheckedCreateWithoutInstructorInput = {
    id?: number
    member_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type InstructorAssignmentCreateOrConnectWithoutInstructorInput = {
    where: InstructorAssignmentWhereUniqueInput
    create: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorAssignmentCreateManyInstructorInputEnvelope = {
    data: InstructorAssignmentCreateManyInstructorInput | InstructorAssignmentCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type GymCreateWithoutInstructorsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    owner: UserCreateNestedOneWithoutGyms_ownedInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutInstructorsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutInstructorsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
  }

  export type InstructorAssignmentUpsertWithWhereUniqueWithoutInstructorInput = {
    where: InstructorAssignmentWhereUniqueInput
    update: XOR<InstructorAssignmentUpdateWithoutInstructorInput, InstructorAssignmentUncheckedUpdateWithoutInstructorInput>
    create: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorAssignmentUpdateWithWhereUniqueWithoutInstructorInput = {
    where: InstructorAssignmentWhereUniqueInput
    data: XOR<InstructorAssignmentUpdateWithoutInstructorInput, InstructorAssignmentUncheckedUpdateWithoutInstructorInput>
  }

  export type InstructorAssignmentUpdateManyWithWhereWithoutInstructorInput = {
    where: InstructorAssignmentScalarWhereInput
    data: XOR<InstructorAssignmentUpdateManyMutationInput, InstructorAssignmentUncheckedUpdateManyWithoutInstructorInput>
  }

  export type GymUpsertWithoutInstructorsInput = {
    update: XOR<GymUpdateWithoutInstructorsInput, GymUncheckedUpdateWithoutInstructorsInput>
    create: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutInstructorsInput, GymUncheckedUpdateWithoutInstructorsInput>
  }

  export type GymUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutGyms_ownedNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type UserCreateWithoutGyms_ownedInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    attendance_logs?: UserTimeLogsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGyms_ownedInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    attendance_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGyms_ownedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGyms_ownedInput, UserUncheckedCreateWithoutGyms_ownedInput>
  }

  export type MembershipCreateWithoutGymInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
    payments?: PaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutGymInput = {
    id?: string
    member_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    payments?: PaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutGymInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutGymInput, MembershipUncheckedCreateWithoutGymInput>
  }

  export type MembershipCreateManyGymInputEnvelope = {
    data: MembershipCreateManyGymInput | MembershipCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type GymInstructorCreateWithoutGymInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
    trainees?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
  }

  export type GymInstructorUncheckedCreateWithoutGymInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
    trainees?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type GymInstructorCreateOrConnectWithoutGymInput = {
    where: GymInstructorWhereUniqueInput
    create: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput>
  }

  export type GymInstructorCreateManyGymInputEnvelope = {
    data: GymInstructorCreateManyGymInput | GymInstructorCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type UserTimeLogsCreateWithoutGymInput = {
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
    user: UserCreateNestedOneWithoutAttendance_logsInput
  }

  export type UserTimeLogsUncheckedCreateWithoutGymInput = {
    id?: number
    user_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type UserTimeLogsCreateOrConnectWithoutGymInput = {
    where: UserTimeLogsWhereUniqueInput
    create: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput>
  }

  export type UserTimeLogsCreateManyGymInputEnvelope = {
    data: UserTimeLogsCreateManyGymInput | UserTimeLogsCreateManyGymInput[]
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

  export type UserUpsertWithoutGyms_ownedInput = {
    update: XOR<UserUpdateWithoutGyms_ownedInput, UserUncheckedUpdateWithoutGyms_ownedInput>
    create: XOR<UserCreateWithoutGyms_ownedInput, UserUncheckedCreateWithoutGyms_ownedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGyms_ownedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGyms_ownedInput, UserUncheckedUpdateWithoutGyms_ownedInput>
  }

  export type UserUpdateWithoutGyms_ownedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: UserTimeLogsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGyms_ownedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: UserTimeLogsUncheckedUpdateManyWithoutUserNestedInput
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

  export type GymInstructorUpsertWithWhereUniqueWithoutGymInput = {
    where: GymInstructorWhereUniqueInput
    update: XOR<GymInstructorUpdateWithoutGymInput, GymInstructorUncheckedUpdateWithoutGymInput>
    create: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput>
  }

  export type GymInstructorUpdateWithWhereUniqueWithoutGymInput = {
    where: GymInstructorWhereUniqueInput
    data: XOR<GymInstructorUpdateWithoutGymInput, GymInstructorUncheckedUpdateWithoutGymInput>
  }

  export type GymInstructorUpdateManyWithWhereWithoutGymInput = {
    where: GymInstructorScalarWhereInput
    data: XOR<GymInstructorUpdateManyMutationInput, GymInstructorUncheckedUpdateManyWithoutGymInput>
  }

  export type GymInstructorScalarWhereInput = {
    AND?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
    OR?: GymInstructorScalarWhereInput[]
    NOT?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
    id?: StringFilter<"GymInstructor"> | string
    gym_id?: StringFilter<"GymInstructor"> | string
    firstname?: StringFilter<"GymInstructor"> | string
    middlename?: StringNullableFilter<"GymInstructor"> | string | null
    lastname?: StringFilter<"GymInstructor"> | string
    created_at?: DateTimeFilter<"GymInstructor"> | Date | string
    created_by?: StringFilter<"GymInstructor"> | string
  }

  export type UserTimeLogsUpsertWithWhereUniqueWithoutGymInput = {
    where: UserTimeLogsWhereUniqueInput
    update: XOR<UserTimeLogsUpdateWithoutGymInput, UserTimeLogsUncheckedUpdateWithoutGymInput>
    create: XOR<UserTimeLogsCreateWithoutGymInput, UserTimeLogsUncheckedCreateWithoutGymInput>
  }

  export type UserTimeLogsUpdateWithWhereUniqueWithoutGymInput = {
    where: UserTimeLogsWhereUniqueInput
    data: XOR<UserTimeLogsUpdateWithoutGymInput, UserTimeLogsUncheckedUpdateWithoutGymInput>
  }

  export type UserTimeLogsUpdateManyWithWhereWithoutGymInput = {
    where: UserTimeLogsScalarWhereInput
    data: XOR<UserTimeLogsUpdateManyMutationInput, UserTimeLogsUncheckedUpdateManyWithoutGymInput>
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

  export type MemberCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    attendance_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
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
    owner: UserCreateNestedOneWithoutGyms_ownedInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    created_by: string
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutMembershipsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutMembershipsInput, GymUncheckedCreateWithoutMembershipsInput>
  }

  export type PlanCreateWithoutMembershipsInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type PlanUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    created_by: string
  }

  export type PlanCreateOrConnectWithoutMembershipsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMembershipsInput, PlanUncheckedCreateWithoutMembershipsInput>
  }

  export type PaymentCreateWithoutMembershipInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
  }

  export type PaymentUncheckedCreateWithoutMembershipInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
  }

  export type PaymentCreateOrConnectWithoutMembershipInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput>
  }

  export type PaymentCreateManyMembershipInputEnvelope = {
    data: PaymentCreateManyMembershipInput | PaymentCreateManyMembershipInput[]
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
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    attendance_logs?: MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
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
    owner?: UserUpdateOneRequiredWithoutGyms_ownedNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type PlanUpsertWithoutMembershipsInput = {
    update: XOR<PlanUpdateWithoutMembershipsInput, PlanUncheckedUpdateWithoutMembershipsInput>
    create: XOR<PlanCreateWithoutMembershipsInput, PlanUncheckedCreateWithoutMembershipsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutMembershipsInput, PlanUncheckedUpdateWithoutMembershipsInput>
  }

  export type PlanUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutMembershipInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMembershipInput, PaymentUncheckedUpdateWithoutMembershipInput>
    create: XOR<PaymentCreateWithoutMembershipInput, PaymentUncheckedCreateWithoutMembershipInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMembershipInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMembershipInput, PaymentUncheckedUpdateWithoutMembershipInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMembershipInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMembershipInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    membership_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
    created_by?: StringFilter<"Payment"> | string
  }

  export type MembershipCreateWithoutPlanInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    payments?: PaymentCreateNestedManyWithoutMembershipInput
  }

  export type MembershipUncheckedCreateWithoutPlanInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    payments?: PaymentUncheckedCreateNestedManyWithoutMembershipInput
  }

  export type MembershipCreateOrConnectWithoutPlanInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput>
  }

  export type MembershipCreateManyPlanInputEnvelope = {
    data: MembershipCreateManyPlanInput | MembershipCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type MembershipUpsertWithWhereUniqueWithoutPlanInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutPlanInput, MembershipUncheckedUpdateWithoutPlanInput>
    create: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutPlanInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutPlanInput, MembershipUncheckedUpdateWithoutPlanInput>
  }

  export type MembershipUpdateManyWithWhereWithoutPlanInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutPlanInput>
  }

  export type MembershipCreateWithoutPaymentsInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
    member: MemberCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutPaymentsInput = {
    id?: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipCreateOrConnectWithoutPaymentsInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
  }

  export type MembershipUpsertWithoutPaymentsInput = {
    update: XOR<MembershipUpdateWithoutPaymentsInput, MembershipUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MembershipCreateWithoutPaymentsInput, MembershipUncheckedCreateWithoutPaymentsInput>
    where?: MembershipWhereInput
  }

  export type MembershipUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MembershipWhereInput
    data: XOR<MembershipUpdateWithoutPaymentsInput, MembershipUncheckedUpdateWithoutPaymentsInput>
  }

  export type MembershipUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    gym_instructors?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
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
    owner: UserCreateNestedOneWithoutGyms_ownedInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutMember_time_logsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    user_time_logs?: UserTimeLogsUncheckedCreateNestedManyWithoutGymInput
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
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    gym_instructors?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
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
    owner?: UserUpdateOneRequiredWithoutGyms_ownedNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutMember_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type UserCreateWithoutAttendance_logsInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gyms_owned?: GymCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    username?: string | null
    password_hash: string
    role?: $Enums.Role
    contact_number?: string | null
    is_active?: boolean
    created_at?: Date | string
    created_by: string
    gyms_owned?: GymUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAttendance_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
  }

  export type GymCreateWithoutUser_time_logsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
    owner: UserCreateNestedOneWithoutGyms_ownedInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutUser_time_logsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    member_time_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutUser_time_logsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutUser_time_logsInput, GymUncheckedCreateWithoutUser_time_logsInput>
  }

  export type UserUpsertWithoutAttendance_logsInput = {
    update: XOR<UserUpdateWithoutAttendance_logsInput, UserUncheckedUpdateWithoutAttendance_logsInput>
    create: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendance_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendance_logsInput, UserUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type UserUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gyms_owned?: GymUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gyms_owned?: GymUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type GymUpsertWithoutUser_time_logsInput = {
    update: XOR<GymUpdateWithoutUser_time_logsInput, GymUncheckedUpdateWithoutUser_time_logsInput>
    create: XOR<GymCreateWithoutUser_time_logsInput, GymUncheckedCreateWithoutUser_time_logsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutUser_time_logsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutUser_time_logsInput, GymUncheckedUpdateWithoutUser_time_logsInput>
  }

  export type GymUpdateWithoutUser_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutGyms_ownedNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutUser_time_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymInstructorCreateWithoutTraineesInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
    gym: GymCreateNestedOneWithoutInstructorsInput
  }

  export type GymInstructorUncheckedCreateWithoutTraineesInput = {
    id?: string
    gym_id: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
  }

  export type GymInstructorCreateOrConnectWithoutTraineesInput = {
    where: GymInstructorWhereUniqueInput
    create: XOR<GymInstructorCreateWithoutTraineesInput, GymInstructorUncheckedCreateWithoutTraineesInput>
  }

  export type MemberCreateWithoutGym_instructorsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutGym_instructorsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    contact_number?: string | null
    created_at?: Date | string
    created_by: string
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: MemberTimeLogsUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutGym_instructorsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutGym_instructorsInput, MemberUncheckedCreateWithoutGym_instructorsInput>
  }

  export type GymInstructorUpsertWithoutTraineesInput = {
    update: XOR<GymInstructorUpdateWithoutTraineesInput, GymInstructorUncheckedUpdateWithoutTraineesInput>
    create: XOR<GymInstructorCreateWithoutTraineesInput, GymInstructorUncheckedCreateWithoutTraineesInput>
    where?: GymInstructorWhereInput
  }

  export type GymInstructorUpdateToOneWithWhereWithoutTraineesInput = {
    where?: GymInstructorWhereInput
    data: XOR<GymInstructorUpdateWithoutTraineesInput, GymInstructorUncheckedUpdateWithoutTraineesInput>
  }

  export type GymInstructorUpdateWithoutTraineesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type GymInstructorUncheckedUpdateWithoutTraineesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUpsertWithoutGym_instructorsInput = {
    update: XOR<MemberUpdateWithoutGym_instructorsInput, MemberUncheckedUpdateWithoutGym_instructorsInput>
    create: XOR<MemberCreateWithoutGym_instructorsInput, MemberUncheckedCreateWithoutGym_instructorsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutGym_instructorsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutGym_instructorsInput, MemberUncheckedUpdateWithoutGym_instructorsInput>
  }

  export type MemberUpdateWithoutGym_instructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutGym_instructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: MemberTimeLogsUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type GymCreateManyOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    created_by: string
  }

  export type UserTimeLogsCreateManyUserInput = {
    id?: number
    gym_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type GymUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    user_time_logs?: UserTimeLogsUncheckedUpdateManyWithoutGymNestedInput
    member_time_logs?: MemberTimeLogsUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsUpdateWithoutUserInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutUser_time_logsNestedInput
  }

  export type UserTimeLogsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyMemberInput = {
    id?: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
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

  export type InstructorAssignmentCreateManyMemberInput = {
    id?: number
    instructor_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type MembershipUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: PaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
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

  export type InstructorAssignmentUpdateWithoutMemberInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    instructor?: GymInstructorUpdateOneRequiredWithoutTraineesNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentCreateManyInstructorInput = {
    id?: number
    member_id: string
    assigned_at?: Date | string
    assigned_by: string
  }

  export type InstructorAssignmentUpdateWithoutInstructorInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutGym_instructorsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyGymInput = {
    id?: string
    member_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type GymInstructorCreateManyGymInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    created_at?: Date | string
    created_by: string
  }

  export type UserTimeLogsCreateManyGymInput = {
    id?: number
    user_id: string
    checked_in_at?: Date | string
    checked_out_at?: Date | string | null
    recorded_by: string
  }

  export type MemberTimeLogsCreateManyGymInput = {
    id?: number
    member_id: string
    checked_in_at?: Date | string
    recorded_by: string
  }

  export type MembershipUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: PaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type GymInstructorUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    trainees?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
  }

  export type GymInstructorUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    trainees?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type GymInstructorUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsUpdateWithoutGymInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type UserTimeLogsUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
  }

  export type UserTimeLogsUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checked_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recorded_by?: StringFieldUpdateOperationsInput | string
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

  export type PaymentCreateManyMembershipInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: string
  }

  export type PaymentUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutMembershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipCreateManyPlanInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    amount_paid: string
    created_at?: Date | string
    created_by: string
  }

  export type MembershipUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    member?: MemberUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    payments?: PaymentUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutMembershipNestedInput
  }

  export type MembershipUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    amount_paid?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
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
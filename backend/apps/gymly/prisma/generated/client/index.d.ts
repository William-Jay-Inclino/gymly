
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
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model GymInstructor
 * 
 */
export type GymInstructor = $Result.DefaultSelection<Prisma.$GymInstructorPayload>
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
 * Model AttendanceLog
 * 
 */
export type AttendanceLog = $Result.DefaultSelection<Prisma.$AttendanceLogPayload>
/**
 * Model InstructorAssignment
 * 
 */
export type InstructorAssignment = $Result.DefaultSelection<Prisma.$InstructorAssignmentPayload>
/**
 * Model WorkoutPlan
 * 
 */
export type WorkoutPlan = $Result.DefaultSelection<Prisma.$WorkoutPlanPayload>
/**
 * Model WorkoutEntry
 * 
 */
export type WorkoutEntry = $Result.DefaultSelection<Prisma.$WorkoutEntryPayload>

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


export const Day: {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun'
};

export type Day = (typeof Day)[keyof typeof Day]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

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
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.attendanceLog`: Exposes CRUD operations for the **AttendanceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceLogs
    * const attendanceLogs = await prisma.attendanceLog.findMany()
    * ```
    */
  get attendanceLog(): Prisma.AttendanceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorAssignment`: Exposes CRUD operations for the **InstructorAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorAssignments
    * const instructorAssignments = await prisma.instructorAssignment.findMany()
    * ```
    */
  get instructorAssignment(): Prisma.InstructorAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutPlan`: Exposes CRUD operations for the **WorkoutPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutPlans
    * const workoutPlans = await prisma.workoutPlan.findMany()
    * ```
    */
  get workoutPlan(): Prisma.WorkoutPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutEntry`: Exposes CRUD operations for the **WorkoutEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutEntries
    * const workoutEntries = await prisma.workoutEntry.findMany()
    * ```
    */
  get workoutEntry(): Prisma.WorkoutEntryDelegate<ExtArgs, ClientOptions>;
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
    Gym: 'Gym',
    GymInstructor: 'GymInstructor',
    Membership: 'Membership',
    Plan: 'Plan',
    Payment: 'Payment',
    AttendanceLog: 'AttendanceLog',
    InstructorAssignment: 'InstructorAssignment',
    WorkoutPlan: 'WorkoutPlan',
    WorkoutEntry: 'WorkoutEntry'
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
      modelProps: "user" | "gym" | "gymInstructor" | "membership" | "plan" | "payment" | "attendanceLog" | "instructorAssignment" | "workoutPlan" | "workoutEntry"
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
      AttendanceLog: {
        payload: Prisma.$AttendanceLogPayload<ExtArgs>
        fields: Prisma.AttendanceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          findFirst: {
            args: Prisma.AttendanceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          findMany: {
            args: Prisma.AttendanceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>[]
          }
          create: {
            args: Prisma.AttendanceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          createMany: {
            args: Prisma.AttendanceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>[]
          }
          delete: {
            args: Prisma.AttendanceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          update: {
            args: Prisma.AttendanceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceLogPayload>
          }
          aggregate: {
            args: Prisma.AttendanceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceLog>
          }
          groupBy: {
            args: Prisma.AttendanceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceLogCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceLogCountAggregateOutputType> | number
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
      WorkoutPlan: {
        payload: Prisma.$WorkoutPlanPayload<ExtArgs>
        fields: Prisma.WorkoutPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findFirst: {
            args: Prisma.WorkoutPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findMany: {
            args: Prisma.WorkoutPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          create: {
            args: Prisma.WorkoutPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          createMany: {
            args: Prisma.WorkoutPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          delete: {
            args: Prisma.WorkoutPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          update: {
            args: Prisma.WorkoutPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          aggregate: {
            args: Prisma.WorkoutPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutPlan>
          }
          groupBy: {
            args: Prisma.WorkoutPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanCountAggregateOutputType> | number
          }
        }
      }
      WorkoutEntry: {
        payload: Prisma.$WorkoutEntryPayload<ExtArgs>
        fields: Prisma.WorkoutEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          findFirst: {
            args: Prisma.WorkoutEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          findMany: {
            args: Prisma.WorkoutEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>[]
          }
          create: {
            args: Prisma.WorkoutEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          createMany: {
            args: Prisma.WorkoutEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>[]
          }
          delete: {
            args: Prisma.WorkoutEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          update: {
            args: Prisma.WorkoutEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutEntryPayload>
          }
          aggregate: {
            args: Prisma.WorkoutEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutEntry>
          }
          groupBy: {
            args: Prisma.WorkoutEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutEntryCountAggregateOutputType> | number
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
    gym?: GymOmit
    gymInstructor?: GymInstructorOmit
    membership?: MembershipOmit
    plan?: PlanOmit
    payment?: PaymentOmit
    attendanceLog?: AttendanceLogOmit
    instructorAssignment?: InstructorAssignmentOmit
    workoutPlan?: WorkoutPlanOmit
    workoutEntry?: WorkoutEntryOmit
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
    gym_instructor_at: number
    gyms: number
    memberships: number
    payments: number
    attendance_logs: number
    member_assignments: number
    instructor_assignments: number
    member_workout_plans: number
    instructor_workout_plans: number
    created_users: number
    created_gyms: number
    created_memberships: number
    created_plans: number
    created_payments: number
    created_attendance_logs: number
    created_instructor_assignments: number
    created_workout_plans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym_instructor_at?: boolean | UserCountOutputTypeCountGym_instructor_atArgs
    gyms?: boolean | UserCountOutputTypeCountGymsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    attendance_logs?: boolean | UserCountOutputTypeCountAttendance_logsArgs
    member_assignments?: boolean | UserCountOutputTypeCountMember_assignmentsArgs
    instructor_assignments?: boolean | UserCountOutputTypeCountInstructor_assignmentsArgs
    member_workout_plans?: boolean | UserCountOutputTypeCountMember_workout_plansArgs
    instructor_workout_plans?: boolean | UserCountOutputTypeCountInstructor_workout_plansArgs
    created_users?: boolean | UserCountOutputTypeCountCreated_usersArgs
    created_gyms?: boolean | UserCountOutputTypeCountCreated_gymsArgs
    created_memberships?: boolean | UserCountOutputTypeCountCreated_membershipsArgs
    created_plans?: boolean | UserCountOutputTypeCountCreated_plansArgs
    created_payments?: boolean | UserCountOutputTypeCountCreated_paymentsArgs
    created_attendance_logs?: boolean | UserCountOutputTypeCountCreated_attendance_logsArgs
    created_instructor_assignments?: boolean | UserCountOutputTypeCountCreated_instructor_assignmentsArgs
    created_workout_plans?: boolean | UserCountOutputTypeCountCreated_workout_plansArgs
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
  export type UserCountOutputTypeCountGym_instructor_atArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymInstructorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMember_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstructor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMember_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInstructor_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_gymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_instructor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    memberships: number
    instructors: number
    attendance_logs: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | GymCountOutputTypeCountMembershipsArgs
    instructors?: boolean | GymCountOutputTypeCountInstructorsArgs
    attendance_logs?: boolean | GymCountOutputTypeCountAttendance_logsArgs
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
  export type GymCountOutputTypeCountAttendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceLogWhereInput
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
   * Count Type WorkoutPlanCountOutputType
   */

  export type WorkoutPlanCountOutputType = {
    workout_entries: number
  }

  export type WorkoutPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_entries?: boolean | WorkoutPlanCountOutputTypeCountWorkout_entriesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlanCountOutputType
     */
    select?: WorkoutPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeCountWorkout_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutEntryWhereInput
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
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
    created_by_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
    created_by_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    middlename: number
    lastname: number
    email: number
    password_hash: number
    role: number
    is_active: number
    created_at: number
    created_by_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
    created_by_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
    created_by_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    password_hash?: true
    role?: true
    is_active?: true
    created_at?: true
    created_by_id?: true
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
    firstname: string
    middlename: string | null
    lastname: string
    email: string | null
    password_hash: string
    role: $Enums.Role
    is_active: boolean
    created_at: Date
    created_by_id: string | null
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
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | User$created_byArgs<ExtArgs>
    gym_instructor_at?: boolean | User$gym_instructor_atArgs<ExtArgs>
    gyms?: boolean | User$gymsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    attendance_logs?: boolean | User$attendance_logsArgs<ExtArgs>
    member_assignments?: boolean | User$member_assignmentsArgs<ExtArgs>
    instructor_assignments?: boolean | User$instructor_assignmentsArgs<ExtArgs>
    member_workout_plans?: boolean | User$member_workout_plansArgs<ExtArgs>
    instructor_workout_plans?: boolean | User$instructor_workout_plansArgs<ExtArgs>
    created_users?: boolean | User$created_usersArgs<ExtArgs>
    created_gyms?: boolean | User$created_gymsArgs<ExtArgs>
    created_memberships?: boolean | User$created_membershipsArgs<ExtArgs>
    created_plans?: boolean | User$created_plansArgs<ExtArgs>
    created_payments?: boolean | User$created_paymentsArgs<ExtArgs>
    created_attendance_logs?: boolean | User$created_attendance_logsArgs<ExtArgs>
    created_instructor_assignments?: boolean | User$created_instructor_assignmentsArgs<ExtArgs>
    created_workout_plans?: boolean | User$created_workout_plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | User$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | User$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    created_by_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "middlename" | "lastname" | "email" | "password_hash" | "role" | "is_active" | "created_at" | "created_by_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | User$created_byArgs<ExtArgs>
    gym_instructor_at?: boolean | User$gym_instructor_atArgs<ExtArgs>
    gyms?: boolean | User$gymsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    attendance_logs?: boolean | User$attendance_logsArgs<ExtArgs>
    member_assignments?: boolean | User$member_assignmentsArgs<ExtArgs>
    instructor_assignments?: boolean | User$instructor_assignmentsArgs<ExtArgs>
    member_workout_plans?: boolean | User$member_workout_plansArgs<ExtArgs>
    instructor_workout_plans?: boolean | User$instructor_workout_plansArgs<ExtArgs>
    created_users?: boolean | User$created_usersArgs<ExtArgs>
    created_gyms?: boolean | User$created_gymsArgs<ExtArgs>
    created_memberships?: boolean | User$created_membershipsArgs<ExtArgs>
    created_plans?: boolean | User$created_plansArgs<ExtArgs>
    created_payments?: boolean | User$created_paymentsArgs<ExtArgs>
    created_attendance_logs?: boolean | User$created_attendance_logsArgs<ExtArgs>
    created_instructor_assignments?: boolean | User$created_instructor_assignmentsArgs<ExtArgs>
    created_workout_plans?: boolean | User$created_workout_plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | User$created_byArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | User$created_byArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs> | null
      gym_instructor_at: Prisma.$GymInstructorPayload<ExtArgs>[]
      gyms: Prisma.$GymPayload<ExtArgs>[]
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      attendance_logs: Prisma.$AttendanceLogPayload<ExtArgs>[]
      member_assignments: Prisma.$InstructorAssignmentPayload<ExtArgs>[]
      instructor_assignments: Prisma.$InstructorAssignmentPayload<ExtArgs>[]
      member_workout_plans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
      instructor_workout_plans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
      created_users: Prisma.$UserPayload<ExtArgs>[]
      created_gyms: Prisma.$GymPayload<ExtArgs>[]
      created_memberships: Prisma.$MembershipPayload<ExtArgs>[]
      created_plans: Prisma.$PlanPayload<ExtArgs>[]
      created_payments: Prisma.$PaymentPayload<ExtArgs>[]
      created_attendance_logs: Prisma.$AttendanceLogPayload<ExtArgs>[]
      created_instructor_assignments: Prisma.$InstructorAssignmentPayload<ExtArgs>[]
      created_workout_plans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      middlename: string | null
      lastname: string
      email: string | null
      password_hash: string
      role: $Enums.Role
      is_active: boolean
      created_at: Date
      created_by_id: string | null
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
    created_by<T extends User$created_byArgs<ExtArgs> = {}>(args?: Subset<T, User$created_byArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gym_instructor_at<T extends User$gym_instructor_atArgs<ExtArgs> = {}>(args?: Subset<T, User$gym_instructor_atArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymInstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gyms<T extends User$gymsArgs<ExtArgs> = {}>(args?: Subset<T, User$gymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance_logs<T extends User$attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_assignments<T extends User$member_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$member_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructor_assignments<T extends User$instructor_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$instructor_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    member_workout_plans<T extends User$member_workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$member_workout_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructor_workout_plans<T extends User$instructor_workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$instructor_workout_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_users<T extends User$created_usersArgs<ExtArgs> = {}>(args?: Subset<T, User$created_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_gyms<T extends User$created_gymsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_gymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_memberships<T extends User$created_membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_plans<T extends User$created_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$created_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_payments<T extends User$created_paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_attendance_logs<T extends User$created_attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_instructor_assignments<T extends User$created_instructor_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$created_instructor_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_workout_plans<T extends User$created_workout_plansArgs<ExtArgs> = {}>(args?: Subset<T, User$created_workout_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstname: FieldRef<"User", 'String'>
    readonly middlename: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly created_by_id: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.created_by
   */
  export type User$created_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.gym_instructor_at
   */
  export type User$gym_instructor_atArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.gyms
   */
  export type User$gymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.attendance_logs
   */
  export type User$attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    where?: AttendanceLogWhereInput
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    cursor?: AttendanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
  }

  /**
   * User.member_assignments
   */
  export type User$member_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.instructor_assignments
   */
  export type User$instructor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.member_workout_plans
   */
  export type User$member_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * User.instructor_workout_plans
   */
  export type User$instructor_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * User.created_users
   */
  export type User$created_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.created_gyms
   */
  export type User$created_gymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.created_memberships
   */
  export type User$created_membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.created_plans
   */
  export type User$created_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * User.created_payments
   */
  export type User$created_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.created_attendance_logs
   */
  export type User$created_attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    where?: AttendanceLogWhereInput
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    cursor?: AttendanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
  }

  /**
   * User.created_instructor_assignments
   */
  export type User$created_instructor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.created_workout_plans
   */
  export type User$created_workout_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
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
    created_by_id: string | null
    created_at: Date | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    owner_id: string | null
    created_by_id: string | null
    created_at: Date | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    name: number
    location: number
    owner_id: number
    created_by_id: number
    created_at: number
    _all: number
  }


  export type GymMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
    created_by_id?: true
    created_at?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
    created_by_id?: true
    created_at?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    owner_id?: true
    created_by_id?: true
    created_at?: true
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
    created_by_id: string
    created_at: Date
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
    created_by_id?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    instructors?: boolean | Gym$instructorsArgs<ExtArgs>
    attendance_logs?: boolean | Gym$attendance_logsArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    owner_id?: boolean
    created_by_id?: boolean
    created_at?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "owner_id" | "created_by_id" | "created_at", ExtArgs["result"]["gym"]>
  export type GymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Gym$membershipsArgs<ExtArgs>
    instructors?: boolean | Gym$instructorsArgs<ExtArgs>
    attendance_logs?: boolean | Gym$attendance_logsArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      instructors: Prisma.$GymInstructorPayload<ExtArgs>[]
      attendance_logs: Prisma.$AttendanceLogPayload<ExtArgs>[]
      created_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      owner_id: string
      created_by_id: string
      created_at: Date
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
    attendance_logs<T extends Gym$attendance_logsArgs<ExtArgs> = {}>(args?: Subset<T, Gym$attendance_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly created_by_id: FieldRef<"Gym", 'String'>
    readonly created_at: FieldRef<"Gym", 'DateTime'>
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
   * Gym.attendance_logs
   */
  export type Gym$attendance_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    where?: AttendanceLogWhereInput
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    cursor?: AttendanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
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
    user_id: string | null
    assigned_at: Date | null
  }

  export type GymInstructorMaxAggregateOutputType = {
    id: string | null
    gym_id: string | null
    user_id: string | null
    assigned_at: Date | null
  }

  export type GymInstructorCountAggregateOutputType = {
    id: number
    gym_id: number
    user_id: number
    assigned_at: number
    _all: number
  }


  export type GymInstructorMinAggregateInputType = {
    id?: true
    gym_id?: true
    user_id?: true
    assigned_at?: true
  }

  export type GymInstructorMaxAggregateInputType = {
    id?: true
    gym_id?: true
    user_id?: true
    assigned_at?: true
  }

  export type GymInstructorCountAggregateInputType = {
    id?: true
    gym_id?: true
    user_id?: true
    assigned_at?: true
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
    user_id: string
    assigned_at: Date
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
    user_id?: boolean
    assigned_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    user_id?: boolean
    assigned_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gym_id?: boolean
    user_id?: boolean
    assigned_at?: boolean
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gymInstructor"]>

  export type GymInstructorSelectScalar = {
    id?: boolean
    gym_id?: boolean
    user_id?: boolean
    assigned_at?: boolean
  }

  export type GymInstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gym_id" | "user_id" | "assigned_at", ExtArgs["result"]["gymInstructor"]>
  export type GymInstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymInstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GymInstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | GymDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GymInstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GymInstructor"
    objects: {
      gym: Prisma.$GymPayload<ExtArgs>
      instructor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gym_id: string
      user_id: string
      assigned_at: Date
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
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly user_id: FieldRef<"GymInstructor", 'String'>
    readonly assigned_at: FieldRef<"GymInstructor", 'DateTime'>
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
    created_at: Date | null
    created_by_id: string | null
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
    created_at: Date | null
    created_by_id: string | null
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
    created_at: number
    created_by_id: number
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
    created_at?: true
    created_by_id?: true
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
    created_at?: true
    created_by_id?: true
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
    created_at?: true
    created_by_id?: true
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
    created_at: Date
    created_by_id: string
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
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
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
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
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
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
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
    created_at?: boolean
    created_by_id?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "plan_id" | "start_date" | "end_date" | "is_active" | "is_paid" | "created_at" | "created_by_id", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
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
      created_at: Date
      created_by_id: string
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
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gym<T extends GymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GymDefaultArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly created_at: FieldRef<"Membership", 'DateTime'>
    readonly created_by_id: FieldRef<"Membership", 'String'>
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
    name: string | null
    description: string | null
    price: string | null
    num_of_days: number | null
    num_of_sessions: number | null
    is_active: boolean | null
    is_default: boolean | null
    created_by_id: string | null
    created_at: Date | null
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
    created_by_id: string | null
    created_at: Date | null
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
    created_by_id: number
    created_at: number
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
    created_by_id?: true
    created_at?: true
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
    created_by_id?: true
    created_at?: true
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
    created_by_id?: true
    created_at?: true
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
    created_by_id: string
    created_at: Date
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
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
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
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
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
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
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
    created_by_id?: boolean
    created_at?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "num_of_days" | "num_of_sessions" | "is_active" | "is_default" | "created_by_id" | "created_at", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Plan$membershipsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
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
      created_by_id: string
      created_at: Date
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
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly created_by_id: FieldRef<"Plan", 'String'>
    readonly created_at: FieldRef<"Plan", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
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
    member_id: string | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    paid_at: Date | null
    created_by_id: string | null
    created_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    member_id: string | null
    amount: number | null
    payment_method: $Enums.PaymentMethod | null
    paid_at: Date | null
    created_by_id: string | null
    created_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    member_id: number
    amount: number
    payment_method: number
    paid_at: number
    created_by_id: number
    created_at: number
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
    member_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_by_id?: true
    created_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    member_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_by_id?: true
    created_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    member_id?: true
    amount?: true
    payment_method?: true
    paid_at?: true
    created_by_id?: true
    created_at?: true
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
    member_id: string
    amount: number
    payment_method: $Enums.PaymentMethod
    paid_at: Date
    created_by_id: string
    created_at: Date
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
    member_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_by_id?: boolean
    created_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    member_id?: boolean
    amount?: boolean
    payment_method?: boolean
    paid_at?: boolean
    created_by_id?: boolean
    created_at?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "amount" | "payment_method" | "paid_at" | "created_by_id" | "created_at", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      member_id: string
      amount: number
      payment_method: $Enums.PaymentMethod
      paid_at: Date
      created_by_id: string
      created_at: Date
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
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly member_id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly payment_method: FieldRef<"Payment", 'PaymentMethod'>
    readonly paid_at: FieldRef<"Payment", 'DateTime'>
    readonly created_by_id: FieldRef<"Payment", 'String'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
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
   * Model AttendanceLog
   */

  export type AggregateAttendanceLog = {
    _count: AttendanceLogCountAggregateOutputType | null
    _avg: AttendanceLogAvgAggregateOutputType | null
    _sum: AttendanceLogSumAggregateOutputType | null
    _min: AttendanceLogMinAggregateOutputType | null
    _max: AttendanceLogMaxAggregateOutputType | null
  }

  export type AttendanceLogAvgAggregateOutputType = {
    id: number | null
  }

  export type AttendanceLogSumAggregateOutputType = {
    id: number | null
  }

  export type AttendanceLogMinAggregateOutputType = {
    id: number | null
    member_id: string | null
    gym_id: string | null
    created_by_id: string | null
    checked_in_at: Date | null
  }

  export type AttendanceLogMaxAggregateOutputType = {
    id: number | null
    member_id: string | null
    gym_id: string | null
    created_by_id: string | null
    checked_in_at: Date | null
  }

  export type AttendanceLogCountAggregateOutputType = {
    id: number
    member_id: number
    gym_id: number
    created_by_id: number
    checked_in_at: number
    _all: number
  }


  export type AttendanceLogAvgAggregateInputType = {
    id?: true
  }

  export type AttendanceLogSumAggregateInputType = {
    id?: true
  }

  export type AttendanceLogMinAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    created_by_id?: true
    checked_in_at?: true
  }

  export type AttendanceLogMaxAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    created_by_id?: true
    checked_in_at?: true
  }

  export type AttendanceLogCountAggregateInputType = {
    id?: true
    member_id?: true
    gym_id?: true
    created_by_id?: true
    checked_in_at?: true
    _all?: true
  }

  export type AttendanceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceLog to aggregate.
     */
    where?: AttendanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceLogs to fetch.
     */
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceLogs
    **/
    _count?: true | AttendanceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceLogMaxAggregateInputType
  }

  export type GetAttendanceLogAggregateType<T extends AttendanceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceLog[P]>
      : GetScalarType<T[P], AggregateAttendanceLog[P]>
  }




  export type AttendanceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceLogWhereInput
    orderBy?: AttendanceLogOrderByWithAggregationInput | AttendanceLogOrderByWithAggregationInput[]
    by: AttendanceLogScalarFieldEnum[] | AttendanceLogScalarFieldEnum
    having?: AttendanceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceLogCountAggregateInputType | true
    _avg?: AttendanceLogAvgAggregateInputType
    _sum?: AttendanceLogSumAggregateInputType
    _min?: AttendanceLogMinAggregateInputType
    _max?: AttendanceLogMaxAggregateInputType
  }

  export type AttendanceLogGroupByOutputType = {
    id: number
    member_id: string
    gym_id: string
    created_by_id: string
    checked_in_at: Date
    _count: AttendanceLogCountAggregateOutputType | null
    _avg: AttendanceLogAvgAggregateOutputType | null
    _sum: AttendanceLogSumAggregateOutputType | null
    _min: AttendanceLogMinAggregateOutputType | null
    _max: AttendanceLogMaxAggregateOutputType | null
  }

  type GetAttendanceLogGroupByPayload<T extends AttendanceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceLogGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceLogGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    created_by_id?: boolean
    checked_in_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceLog"]>

  export type AttendanceLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    created_by_id?: boolean
    checked_in_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceLog"]>

  export type AttendanceLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    created_by_id?: boolean
    checked_in_at?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceLog"]>

  export type AttendanceLogSelectScalar = {
    id?: boolean
    member_id?: boolean
    gym_id?: boolean
    created_by_id?: boolean
    checked_in_at?: boolean
  }

  export type AttendanceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "member_id" | "gym_id" | "created_by_id" | "checked_in_at", ExtArgs["result"]["attendanceLog"]>
  export type AttendanceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type AttendanceLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }
  export type AttendanceLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    gym?: boolean | GymDefaultArgs<ExtArgs>
  }

  export type $AttendanceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceLog"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
      gym: Prisma.$GymPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      member_id: string
      gym_id: string
      created_by_id: string
      checked_in_at: Date
    }, ExtArgs["result"]["attendanceLog"]>
    composites: {}
  }

  type AttendanceLogGetPayload<S extends boolean | null | undefined | AttendanceLogDefaultArgs> = $Result.GetResult<Prisma.$AttendanceLogPayload, S>

  type AttendanceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceLogCountAggregateInputType | true
    }

  export interface AttendanceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceLog'], meta: { name: 'AttendanceLog' } }
    /**
     * Find zero or one AttendanceLog that matches the filter.
     * @param {AttendanceLogFindUniqueArgs} args - Arguments to find a AttendanceLog
     * @example
     * // Get one AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceLogFindUniqueArgs>(args: SelectSubset<T, AttendanceLogFindUniqueArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceLogFindUniqueOrThrowArgs} args - Arguments to find a AttendanceLog
     * @example
     * // Get one AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogFindFirstArgs} args - Arguments to find a AttendanceLog
     * @example
     * // Get one AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceLogFindFirstArgs>(args?: SelectSubset<T, AttendanceLogFindFirstArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogFindFirstOrThrowArgs} args - Arguments to find a AttendanceLog
     * @example
     * // Get one AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceLogs
     * const attendanceLogs = await prisma.attendanceLog.findMany()
     * 
     * // Get first 10 AttendanceLogs
     * const attendanceLogs = await prisma.attendanceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceLogWithIdOnly = await prisma.attendanceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceLogFindManyArgs>(args?: SelectSubset<T, AttendanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceLog.
     * @param {AttendanceLogCreateArgs} args - Arguments to create a AttendanceLog.
     * @example
     * // Create one AttendanceLog
     * const AttendanceLog = await prisma.attendanceLog.create({
     *   data: {
     *     // ... data to create a AttendanceLog
     *   }
     * })
     * 
     */
    create<T extends AttendanceLogCreateArgs>(args: SelectSubset<T, AttendanceLogCreateArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceLogs.
     * @param {AttendanceLogCreateManyArgs} args - Arguments to create many AttendanceLogs.
     * @example
     * // Create many AttendanceLogs
     * const attendanceLog = await prisma.attendanceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceLogCreateManyArgs>(args?: SelectSubset<T, AttendanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceLogs and returns the data saved in the database.
     * @param {AttendanceLogCreateManyAndReturnArgs} args - Arguments to create many AttendanceLogs.
     * @example
     * // Create many AttendanceLogs
     * const attendanceLog = await prisma.attendanceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceLogs and only return the `id`
     * const attendanceLogWithIdOnly = await prisma.attendanceLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceLog.
     * @param {AttendanceLogDeleteArgs} args - Arguments to delete one AttendanceLog.
     * @example
     * // Delete one AttendanceLog
     * const AttendanceLog = await prisma.attendanceLog.delete({
     *   where: {
     *     // ... filter to delete one AttendanceLog
     *   }
     * })
     * 
     */
    delete<T extends AttendanceLogDeleteArgs>(args: SelectSubset<T, AttendanceLogDeleteArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceLog.
     * @param {AttendanceLogUpdateArgs} args - Arguments to update one AttendanceLog.
     * @example
     * // Update one AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceLogUpdateArgs>(args: SelectSubset<T, AttendanceLogUpdateArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceLogs.
     * @param {AttendanceLogDeleteManyArgs} args - Arguments to filter AttendanceLogs to delete.
     * @example
     * // Delete a few AttendanceLogs
     * const { count } = await prisma.attendanceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceLogDeleteManyArgs>(args?: SelectSubset<T, AttendanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceLogs
     * const attendanceLog = await prisma.attendanceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceLogUpdateManyArgs>(args: SelectSubset<T, AttendanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceLogs and returns the data updated in the database.
     * @param {AttendanceLogUpdateManyAndReturnArgs} args - Arguments to update many AttendanceLogs.
     * @example
     * // Update many AttendanceLogs
     * const attendanceLog = await prisma.attendanceLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceLogs and only return the `id`
     * const attendanceLogWithIdOnly = await prisma.attendanceLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceLog.
     * @param {AttendanceLogUpsertArgs} args - Arguments to update or create a AttendanceLog.
     * @example
     * // Update or create a AttendanceLog
     * const attendanceLog = await prisma.attendanceLog.upsert({
     *   create: {
     *     // ... data to create a AttendanceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceLog we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceLogUpsertArgs>(args: SelectSubset<T, AttendanceLogUpsertArgs<ExtArgs>>): Prisma__AttendanceLogClient<$Result.GetResult<Prisma.$AttendanceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogCountArgs} args - Arguments to filter AttendanceLogs to count.
     * @example
     * // Count the number of AttendanceLogs
     * const count = await prisma.attendanceLog.count({
     *   where: {
     *     // ... the filter for the AttendanceLogs we want to count
     *   }
     * })
    **/
    count<T extends AttendanceLogCountArgs>(
      args?: Subset<T, AttendanceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceLogAggregateArgs>(args: Subset<T, AttendanceLogAggregateArgs>): Prisma.PrismaPromise<GetAttendanceLogAggregateType<T>>

    /**
     * Group by AttendanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceLogGroupByArgs} args - Group by arguments.
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
      T extends AttendanceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceLogGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceLog model
   */
  readonly fields: AttendanceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttendanceLog model
   */
  interface AttendanceLogFieldRefs {
    readonly id: FieldRef<"AttendanceLog", 'Int'>
    readonly member_id: FieldRef<"AttendanceLog", 'String'>
    readonly gym_id: FieldRef<"AttendanceLog", 'String'>
    readonly created_by_id: FieldRef<"AttendanceLog", 'String'>
    readonly checked_in_at: FieldRef<"AttendanceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceLog findUnique
   */
  export type AttendanceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceLog to fetch.
     */
    where: AttendanceLogWhereUniqueInput
  }

  /**
   * AttendanceLog findUniqueOrThrow
   */
  export type AttendanceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceLog to fetch.
     */
    where: AttendanceLogWhereUniqueInput
  }

  /**
   * AttendanceLog findFirst
   */
  export type AttendanceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceLog to fetch.
     */
    where?: AttendanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceLogs to fetch.
     */
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceLogs.
     */
    cursor?: AttendanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceLogs.
     */
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
  }

  /**
   * AttendanceLog findFirstOrThrow
   */
  export type AttendanceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceLog to fetch.
     */
    where?: AttendanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceLogs to fetch.
     */
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceLogs.
     */
    cursor?: AttendanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceLogs.
     */
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
  }

  /**
   * AttendanceLog findMany
   */
  export type AttendanceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceLogs to fetch.
     */
    where?: AttendanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceLogs to fetch.
     */
    orderBy?: AttendanceLogOrderByWithRelationInput | AttendanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceLogs.
     */
    cursor?: AttendanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceLogs.
     */
    skip?: number
    distinct?: AttendanceLogScalarFieldEnum | AttendanceLogScalarFieldEnum[]
  }

  /**
   * AttendanceLog create
   */
  export type AttendanceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceLog.
     */
    data: XOR<AttendanceLogCreateInput, AttendanceLogUncheckedCreateInput>
  }

  /**
   * AttendanceLog createMany
   */
  export type AttendanceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceLogs.
     */
    data: AttendanceLogCreateManyInput | AttendanceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceLog createManyAndReturn
   */
  export type AttendanceLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceLogs.
     */
    data: AttendanceLogCreateManyInput | AttendanceLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceLog update
   */
  export type AttendanceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceLog.
     */
    data: XOR<AttendanceLogUpdateInput, AttendanceLogUncheckedUpdateInput>
    /**
     * Choose, which AttendanceLog to update.
     */
    where: AttendanceLogWhereUniqueInput
  }

  /**
   * AttendanceLog updateMany
   */
  export type AttendanceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceLogs.
     */
    data: XOR<AttendanceLogUpdateManyMutationInput, AttendanceLogUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceLogs to update
     */
    where?: AttendanceLogWhereInput
    /**
     * Limit how many AttendanceLogs to update.
     */
    limit?: number
  }

  /**
   * AttendanceLog updateManyAndReturn
   */
  export type AttendanceLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceLogs.
     */
    data: XOR<AttendanceLogUpdateManyMutationInput, AttendanceLogUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceLogs to update
     */
    where?: AttendanceLogWhereInput
    /**
     * Limit how many AttendanceLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceLog upsert
   */
  export type AttendanceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceLog to update in case it exists.
     */
    where: AttendanceLogWhereUniqueInput
    /**
     * In case the AttendanceLog found by the `where` argument doesn't exist, create a new AttendanceLog with this data.
     */
    create: XOR<AttendanceLogCreateInput, AttendanceLogUncheckedCreateInput>
    /**
     * In case the AttendanceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceLogUpdateInput, AttendanceLogUncheckedUpdateInput>
  }

  /**
   * AttendanceLog delete
   */
  export type AttendanceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
    /**
     * Filter which AttendanceLog to delete.
     */
    where: AttendanceLogWhereUniqueInput
  }

  /**
   * AttendanceLog deleteMany
   */
  export type AttendanceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceLogs to delete
     */
    where?: AttendanceLogWhereInput
    /**
     * Limit how many AttendanceLogs to delete.
     */
    limit?: number
  }

  /**
   * AttendanceLog without action
   */
  export type AttendanceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceLog
     */
    select?: AttendanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceLog
     */
    omit?: AttendanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceLogInclude<ExtArgs> | null
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
    created_by_id: string | null
  }

  export type InstructorAssignmentMaxAggregateOutputType = {
    id: number | null
    instructor_id: string | null
    member_id: string | null
    assigned_at: Date | null
    created_by_id: string | null
  }

  export type InstructorAssignmentCountAggregateOutputType = {
    id: number
    instructor_id: number
    member_id: number
    assigned_at: number
    created_by_id: number
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
    created_by_id?: true
  }

  export type InstructorAssignmentMaxAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    assigned_at?: true
    created_by_id?: true
  }

  export type InstructorAssignmentCountAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    assigned_at?: true
    created_by_id?: true
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
    created_by_id: string
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
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorAssignment"]>

  export type InstructorAssignmentSelectScalar = {
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    assigned_at?: boolean
    created_by_id?: boolean
  }

  export type InstructorAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructor_id" | "member_id" | "assigned_at" | "created_by_id", ExtArgs["result"]["instructorAssignment"]>
  export type InstructorAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstructorAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorAssignment"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
      instructor: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructor_id: string
      member_id: string
      assigned_at: Date
      created_by_id: string
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
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly created_by_id: FieldRef<"InstructorAssignment", 'String'>
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
   * Model WorkoutPlan
   */

  export type AggregateWorkoutPlan = {
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  export type WorkoutPlanMinAggregateOutputType = {
    id: string | null
    instructor_id: string | null
    member_id: string | null
    title: string | null
    notes: string | null
    created_at: Date | null
    created_by_id: string | null
  }

  export type WorkoutPlanMaxAggregateOutputType = {
    id: string | null
    instructor_id: string | null
    member_id: string | null
    title: string | null
    notes: string | null
    created_at: Date | null
    created_by_id: string | null
  }

  export type WorkoutPlanCountAggregateOutputType = {
    id: number
    instructor_id: number
    member_id: number
    title: number
    notes: number
    created_at: number
    created_by_id: number
    _all: number
  }


  export type WorkoutPlanMinAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    title?: true
    notes?: true
    created_at?: true
    created_by_id?: true
  }

  export type WorkoutPlanMaxAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    title?: true
    notes?: true
    created_at?: true
    created_by_id?: true
  }

  export type WorkoutPlanCountAggregateInputType = {
    id?: true
    instructor_id?: true
    member_id?: true
    title?: true
    notes?: true
    created_at?: true
    created_by_id?: true
    _all?: true
  }

  export type WorkoutPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlan to aggregate.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutPlans
    **/
    _count?: true | WorkoutPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type GetWorkoutPlanAggregateType<T extends WorkoutPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutPlan[P]>
      : GetScalarType<T[P], AggregateWorkoutPlan[P]>
  }




  export type WorkoutPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithAggregationInput | WorkoutPlanOrderByWithAggregationInput[]
    by: WorkoutPlanScalarFieldEnum[] | WorkoutPlanScalarFieldEnum
    having?: WorkoutPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutPlanCountAggregateInputType | true
    _min?: WorkoutPlanMinAggregateInputType
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type WorkoutPlanGroupByOutputType = {
    id: string
    instructor_id: string
    member_id: string
    title: string
    notes: string | null
    created_at: Date
    created_by_id: string
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  type GetWorkoutPlanGroupByPayload<T extends WorkoutPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    title?: boolean
    notes?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    workout_entries?: boolean | WorkoutPlan$workout_entriesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    title?: boolean
    notes?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    title?: boolean
    notes?: boolean
    created_at?: boolean
    created_by_id?: boolean
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectScalar = {
    id?: boolean
    instructor_id?: boolean
    member_id?: boolean
    title?: boolean
    notes?: boolean
    created_at?: boolean
    created_by_id?: boolean
  }

  export type WorkoutPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructor_id" | "member_id" | "title" | "notes" | "created_at" | "created_by_id", ExtArgs["result"]["workoutPlan"]>
  export type WorkoutPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
    workout_entries?: boolean | WorkoutPlan$workout_entriesArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | UserDefaultArgs<ExtArgs>
    instructor?: boolean | UserDefaultArgs<ExtArgs>
    member?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutPlan"
    objects: {
      created_by: Prisma.$UserPayload<ExtArgs>
      instructor: Prisma.$UserPayload<ExtArgs>
      member: Prisma.$UserPayload<ExtArgs>
      workout_entries: Prisma.$WorkoutEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instructor_id: string
      member_id: string
      title: string
      notes: string | null
      created_at: Date
      created_by_id: string
    }, ExtArgs["result"]["workoutPlan"]>
    composites: {}
  }

  type WorkoutPlanGetPayload<S extends boolean | null | undefined | WorkoutPlanDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPlanPayload, S>

  type WorkoutPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutPlanCountAggregateInputType | true
    }

  export interface WorkoutPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutPlan'], meta: { name: 'WorkoutPlan' } }
    /**
     * Find zero or one WorkoutPlan that matches the filter.
     * @param {WorkoutPlanFindUniqueArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutPlanFindUniqueArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutPlanFindUniqueOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutPlanFindFirstArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany()
     * 
     * // Get first 10 WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutPlanFindManyArgs>(args?: SelectSubset<T, WorkoutPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutPlan.
     * @param {WorkoutPlanCreateArgs} args - Arguments to create a WorkoutPlan.
     * @example
     * // Create one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.create({
     *   data: {
     *     // ... data to create a WorkoutPlan
     *   }
     * })
     * 
     */
    create<T extends WorkoutPlanCreateArgs>(args: SelectSubset<T, WorkoutPlanCreateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutPlans.
     * @param {WorkoutPlanCreateManyArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutPlanCreateManyArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutPlans and returns the data saved in the database.
     * @param {WorkoutPlanCreateManyAndReturnArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutPlan.
     * @param {WorkoutPlanDeleteArgs} args - Arguments to delete one WorkoutPlan.
     * @example
     * // Delete one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.delete({
     *   where: {
     *     // ... filter to delete one WorkoutPlan
     *   }
     * })
     * 
     */
    delete<T extends WorkoutPlanDeleteArgs>(args: SelectSubset<T, WorkoutPlanDeleteArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutPlan.
     * @param {WorkoutPlanUpdateArgs} args - Arguments to update one WorkoutPlan.
     * @example
     * // Update one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutPlanUpdateArgs>(args: SelectSubset<T, WorkoutPlanUpdateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutPlans.
     * @param {WorkoutPlanDeleteManyArgs} args - Arguments to filter WorkoutPlans to delete.
     * @example
     * // Delete a few WorkoutPlans
     * const { count } = await prisma.workoutPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutPlanDeleteManyArgs>(args?: SelectSubset<T, WorkoutPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutPlanUpdateManyArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans and returns the data updated in the database.
     * @param {WorkoutPlanUpdateManyAndReturnArgs} args - Arguments to update many WorkoutPlans.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutPlan.
     * @param {WorkoutPlanUpsertArgs} args - Arguments to update or create a WorkoutPlan.
     * @example
     * // Update or create a WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.upsert({
     *   create: {
     *     // ... data to create a WorkoutPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutPlan we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutPlanUpsertArgs>(args: SelectSubset<T, WorkoutPlanUpsertArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanCountArgs} args - Arguments to filter WorkoutPlans to count.
     * @example
     * // Count the number of WorkoutPlans
     * const count = await prisma.workoutPlan.count({
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkoutPlanCountArgs>(
      args?: Subset<T, WorkoutPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutPlanAggregateArgs>(args: Subset<T, WorkoutPlanAggregateArgs>): Prisma.PrismaPromise<GetWorkoutPlanAggregateType<T>>

    /**
     * Group by WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanGroupByArgs} args - Group by arguments.
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
      T extends WorkoutPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutPlanGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutPlan model
   */
  readonly fields: WorkoutPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout_entries<T extends WorkoutPlan$workout_entriesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$workout_entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkoutPlan model
   */
  interface WorkoutPlanFieldRefs {
    readonly id: FieldRef<"WorkoutPlan", 'String'>
    readonly instructor_id: FieldRef<"WorkoutPlan", 'String'>
    readonly member_id: FieldRef<"WorkoutPlan", 'String'>
    readonly title: FieldRef<"WorkoutPlan", 'String'>
    readonly notes: FieldRef<"WorkoutPlan", 'String'>
    readonly created_at: FieldRef<"WorkoutPlan", 'DateTime'>
    readonly created_by_id: FieldRef<"WorkoutPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutPlan findUnique
   */
  export type WorkoutPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findUniqueOrThrow
   */
  export type WorkoutPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findFirst
   */
  export type WorkoutPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findFirstOrThrow
   */
  export type WorkoutPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findMany
   */
  export type WorkoutPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan create
   */
  export type WorkoutPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutPlan.
     */
    data: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
  }

  /**
   * WorkoutPlan createMany
   */
  export type WorkoutPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutPlan createManyAndReturn
   */
  export type WorkoutPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan update
   */
  export type WorkoutPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutPlan.
     */
    data: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
    /**
     * Choose, which WorkoutPlan to update.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan updateMany
   */
  export type WorkoutPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
  }

  /**
   * WorkoutPlan updateManyAndReturn
   */
  export type WorkoutPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan upsert
   */
  export type WorkoutPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutPlan to update in case it exists.
     */
    where: WorkoutPlanWhereUniqueInput
    /**
     * In case the WorkoutPlan found by the `where` argument doesn't exist, create a new WorkoutPlan with this data.
     */
    create: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
    /**
     * In case the WorkoutPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
  }

  /**
   * WorkoutPlan delete
   */
  export type WorkoutPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter which WorkoutPlan to delete.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan deleteMany
   */
  export type WorkoutPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlans to delete
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to delete.
     */
    limit?: number
  }

  /**
   * WorkoutPlan.workout_entries
   */
  export type WorkoutPlan$workout_entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    where?: WorkoutEntryWhereInput
    orderBy?: WorkoutEntryOrderByWithRelationInput | WorkoutEntryOrderByWithRelationInput[]
    cursor?: WorkoutEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutEntryScalarFieldEnum | WorkoutEntryScalarFieldEnum[]
  }

  /**
   * WorkoutPlan without action
   */
  export type WorkoutPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutEntry
   */

  export type AggregateWorkoutEntry = {
    _count: WorkoutEntryCountAggregateOutputType | null
    _avg: WorkoutEntryAvgAggregateOutputType | null
    _sum: WorkoutEntrySumAggregateOutputType | null
    _min: WorkoutEntryMinAggregateOutputType | null
    _max: WorkoutEntryMaxAggregateOutputType | null
  }

  export type WorkoutEntryAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type WorkoutEntrySumAggregateOutputType = {
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type WorkoutEntryMinAggregateOutputType = {
    id: string | null
    workout_plan_id: string | null
    exercise_name: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    day: $Enums.Day | null
    notes: string | null
    created_at: Date | null
  }

  export type WorkoutEntryMaxAggregateOutputType = {
    id: string | null
    workout_plan_id: string | null
    exercise_name: string | null
    sets: number | null
    reps: number | null
    weight: number | null
    day: $Enums.Day | null
    notes: string | null
    created_at: Date | null
  }

  export type WorkoutEntryCountAggregateOutputType = {
    id: number
    workout_plan_id: number
    exercise_name: number
    sets: number
    reps: number
    weight: number
    day: number
    notes: number
    created_at: number
    _all: number
  }


  export type WorkoutEntryAvgAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
  }

  export type WorkoutEntrySumAggregateInputType = {
    sets?: true
    reps?: true
    weight?: true
  }

  export type WorkoutEntryMinAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    day?: true
    notes?: true
    created_at?: true
  }

  export type WorkoutEntryMaxAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    day?: true
    notes?: true
    created_at?: true
  }

  export type WorkoutEntryCountAggregateInputType = {
    id?: true
    workout_plan_id?: true
    exercise_name?: true
    sets?: true
    reps?: true
    weight?: true
    day?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type WorkoutEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutEntry to aggregate.
     */
    where?: WorkoutEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEntries to fetch.
     */
    orderBy?: WorkoutEntryOrderByWithRelationInput | WorkoutEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutEntries
    **/
    _count?: true | WorkoutEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutEntryMaxAggregateInputType
  }

  export type GetWorkoutEntryAggregateType<T extends WorkoutEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutEntry[P]>
      : GetScalarType<T[P], AggregateWorkoutEntry[P]>
  }




  export type WorkoutEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutEntryWhereInput
    orderBy?: WorkoutEntryOrderByWithAggregationInput | WorkoutEntryOrderByWithAggregationInput[]
    by: WorkoutEntryScalarFieldEnum[] | WorkoutEntryScalarFieldEnum
    having?: WorkoutEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutEntryCountAggregateInputType | true
    _avg?: WorkoutEntryAvgAggregateInputType
    _sum?: WorkoutEntrySumAggregateInputType
    _min?: WorkoutEntryMinAggregateInputType
    _max?: WorkoutEntryMaxAggregateInputType
  }

  export type WorkoutEntryGroupByOutputType = {
    id: string
    workout_plan_id: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes: string | null
    created_at: Date
    _count: WorkoutEntryCountAggregateOutputType | null
    _avg: WorkoutEntryAvgAggregateOutputType | null
    _sum: WorkoutEntrySumAggregateOutputType | null
    _min: WorkoutEntryMinAggregateOutputType | null
    _max: WorkoutEntryMaxAggregateOutputType | null
  }

  type GetWorkoutEntryGroupByPayload<T extends WorkoutEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutEntryGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    day?: boolean
    notes?: boolean
    created_at?: boolean
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutEntry"]>

  export type WorkoutEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    day?: boolean
    notes?: boolean
    created_at?: boolean
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutEntry"]>

  export type WorkoutEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workout_plan_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    day?: boolean
    notes?: boolean
    created_at?: boolean
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutEntry"]>

  export type WorkoutEntrySelectScalar = {
    id?: boolean
    workout_plan_id?: boolean
    exercise_name?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    day?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type WorkoutEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workout_plan_id" | "exercise_name" | "sets" | "reps" | "weight" | "day" | "notes" | "created_at", ExtArgs["result"]["workoutEntry"]>
  export type WorkoutEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }
  export type WorkoutEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }
  export type WorkoutEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_plan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }

  export type $WorkoutEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutEntry"
    objects: {
      workout_plan: Prisma.$WorkoutPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workout_plan_id: string
      exercise_name: string
      sets: number
      reps: number
      weight: number
      day: $Enums.Day
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["workoutEntry"]>
    composites: {}
  }

  type WorkoutEntryGetPayload<S extends boolean | null | undefined | WorkoutEntryDefaultArgs> = $Result.GetResult<Prisma.$WorkoutEntryPayload, S>

  type WorkoutEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutEntryCountAggregateInputType | true
    }

  export interface WorkoutEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutEntry'], meta: { name: 'WorkoutEntry' } }
    /**
     * Find zero or one WorkoutEntry that matches the filter.
     * @param {WorkoutEntryFindUniqueArgs} args - Arguments to find a WorkoutEntry
     * @example
     * // Get one WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutEntryFindUniqueArgs>(args: SelectSubset<T, WorkoutEntryFindUniqueArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutEntryFindUniqueOrThrowArgs} args - Arguments to find a WorkoutEntry
     * @example
     * // Get one WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryFindFirstArgs} args - Arguments to find a WorkoutEntry
     * @example
     * // Get one WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutEntryFindFirstArgs>(args?: SelectSubset<T, WorkoutEntryFindFirstArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryFindFirstOrThrowArgs} args - Arguments to find a WorkoutEntry
     * @example
     * // Get one WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutEntries
     * const workoutEntries = await prisma.workoutEntry.findMany()
     * 
     * // Get first 10 WorkoutEntries
     * const workoutEntries = await prisma.workoutEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutEntryWithIdOnly = await prisma.workoutEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutEntryFindManyArgs>(args?: SelectSubset<T, WorkoutEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutEntry.
     * @param {WorkoutEntryCreateArgs} args - Arguments to create a WorkoutEntry.
     * @example
     * // Create one WorkoutEntry
     * const WorkoutEntry = await prisma.workoutEntry.create({
     *   data: {
     *     // ... data to create a WorkoutEntry
     *   }
     * })
     * 
     */
    create<T extends WorkoutEntryCreateArgs>(args: SelectSubset<T, WorkoutEntryCreateArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutEntries.
     * @param {WorkoutEntryCreateManyArgs} args - Arguments to create many WorkoutEntries.
     * @example
     * // Create many WorkoutEntries
     * const workoutEntry = await prisma.workoutEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutEntryCreateManyArgs>(args?: SelectSubset<T, WorkoutEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutEntries and returns the data saved in the database.
     * @param {WorkoutEntryCreateManyAndReturnArgs} args - Arguments to create many WorkoutEntries.
     * @example
     * // Create many WorkoutEntries
     * const workoutEntry = await prisma.workoutEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutEntries and only return the `id`
     * const workoutEntryWithIdOnly = await prisma.workoutEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutEntry.
     * @param {WorkoutEntryDeleteArgs} args - Arguments to delete one WorkoutEntry.
     * @example
     * // Delete one WorkoutEntry
     * const WorkoutEntry = await prisma.workoutEntry.delete({
     *   where: {
     *     // ... filter to delete one WorkoutEntry
     *   }
     * })
     * 
     */
    delete<T extends WorkoutEntryDeleteArgs>(args: SelectSubset<T, WorkoutEntryDeleteArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutEntry.
     * @param {WorkoutEntryUpdateArgs} args - Arguments to update one WorkoutEntry.
     * @example
     * // Update one WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutEntryUpdateArgs>(args: SelectSubset<T, WorkoutEntryUpdateArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutEntries.
     * @param {WorkoutEntryDeleteManyArgs} args - Arguments to filter WorkoutEntries to delete.
     * @example
     * // Delete a few WorkoutEntries
     * const { count } = await prisma.workoutEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutEntryDeleteManyArgs>(args?: SelectSubset<T, WorkoutEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutEntries
     * const workoutEntry = await prisma.workoutEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutEntryUpdateManyArgs>(args: SelectSubset<T, WorkoutEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutEntries and returns the data updated in the database.
     * @param {WorkoutEntryUpdateManyAndReturnArgs} args - Arguments to update many WorkoutEntries.
     * @example
     * // Update many WorkoutEntries
     * const workoutEntry = await prisma.workoutEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutEntries and only return the `id`
     * const workoutEntryWithIdOnly = await prisma.workoutEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutEntry.
     * @param {WorkoutEntryUpsertArgs} args - Arguments to update or create a WorkoutEntry.
     * @example
     * // Update or create a WorkoutEntry
     * const workoutEntry = await prisma.workoutEntry.upsert({
     *   create: {
     *     // ... data to create a WorkoutEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutEntry we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutEntryUpsertArgs>(args: SelectSubset<T, WorkoutEntryUpsertArgs<ExtArgs>>): Prisma__WorkoutEntryClient<$Result.GetResult<Prisma.$WorkoutEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryCountArgs} args - Arguments to filter WorkoutEntries to count.
     * @example
     * // Count the number of WorkoutEntries
     * const count = await prisma.workoutEntry.count({
     *   where: {
     *     // ... the filter for the WorkoutEntries we want to count
     *   }
     * })
    **/
    count<T extends WorkoutEntryCountArgs>(
      args?: Subset<T, WorkoutEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutEntryAggregateArgs>(args: Subset<T, WorkoutEntryAggregateArgs>): Prisma.PrismaPromise<GetWorkoutEntryAggregateType<T>>

    /**
     * Group by WorkoutEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutEntryGroupByArgs} args - Group by arguments.
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
      T extends WorkoutEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutEntryGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutEntry model
   */
  readonly fields: WorkoutEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_plan<T extends WorkoutPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlanDefaultArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutEntry model
   */
  interface WorkoutEntryFieldRefs {
    readonly id: FieldRef<"WorkoutEntry", 'String'>
    readonly workout_plan_id: FieldRef<"WorkoutEntry", 'String'>
    readonly exercise_name: FieldRef<"WorkoutEntry", 'String'>
    readonly sets: FieldRef<"WorkoutEntry", 'Int'>
    readonly reps: FieldRef<"WorkoutEntry", 'Int'>
    readonly weight: FieldRef<"WorkoutEntry", 'Float'>
    readonly day: FieldRef<"WorkoutEntry", 'Day'>
    readonly notes: FieldRef<"WorkoutEntry", 'String'>
    readonly created_at: FieldRef<"WorkoutEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutEntry findUnique
   */
  export type WorkoutEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEntry to fetch.
     */
    where: WorkoutEntryWhereUniqueInput
  }

  /**
   * WorkoutEntry findUniqueOrThrow
   */
  export type WorkoutEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEntry to fetch.
     */
    where: WorkoutEntryWhereUniqueInput
  }

  /**
   * WorkoutEntry findFirst
   */
  export type WorkoutEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEntry to fetch.
     */
    where?: WorkoutEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEntries to fetch.
     */
    orderBy?: WorkoutEntryOrderByWithRelationInput | WorkoutEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutEntries.
     */
    cursor?: WorkoutEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutEntries.
     */
    distinct?: WorkoutEntryScalarFieldEnum | WorkoutEntryScalarFieldEnum[]
  }

  /**
   * WorkoutEntry findFirstOrThrow
   */
  export type WorkoutEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEntry to fetch.
     */
    where?: WorkoutEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEntries to fetch.
     */
    orderBy?: WorkoutEntryOrderByWithRelationInput | WorkoutEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutEntries.
     */
    cursor?: WorkoutEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutEntries.
     */
    distinct?: WorkoutEntryScalarFieldEnum | WorkoutEntryScalarFieldEnum[]
  }

  /**
   * WorkoutEntry findMany
   */
  export type WorkoutEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutEntries to fetch.
     */
    where?: WorkoutEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutEntries to fetch.
     */
    orderBy?: WorkoutEntryOrderByWithRelationInput | WorkoutEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutEntries.
     */
    cursor?: WorkoutEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutEntries.
     */
    skip?: number
    distinct?: WorkoutEntryScalarFieldEnum | WorkoutEntryScalarFieldEnum[]
  }

  /**
   * WorkoutEntry create
   */
  export type WorkoutEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutEntry.
     */
    data: XOR<WorkoutEntryCreateInput, WorkoutEntryUncheckedCreateInput>
  }

  /**
   * WorkoutEntry createMany
   */
  export type WorkoutEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutEntries.
     */
    data: WorkoutEntryCreateManyInput | WorkoutEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutEntry createManyAndReturn
   */
  export type WorkoutEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutEntries.
     */
    data: WorkoutEntryCreateManyInput | WorkoutEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutEntry update
   */
  export type WorkoutEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutEntry.
     */
    data: XOR<WorkoutEntryUpdateInput, WorkoutEntryUncheckedUpdateInput>
    /**
     * Choose, which WorkoutEntry to update.
     */
    where: WorkoutEntryWhereUniqueInput
  }

  /**
   * WorkoutEntry updateMany
   */
  export type WorkoutEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutEntries.
     */
    data: XOR<WorkoutEntryUpdateManyMutationInput, WorkoutEntryUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutEntries to update
     */
    where?: WorkoutEntryWhereInput
    /**
     * Limit how many WorkoutEntries to update.
     */
    limit?: number
  }

  /**
   * WorkoutEntry updateManyAndReturn
   */
  export type WorkoutEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutEntries.
     */
    data: XOR<WorkoutEntryUpdateManyMutationInput, WorkoutEntryUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutEntries to update
     */
    where?: WorkoutEntryWhereInput
    /**
     * Limit how many WorkoutEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutEntry upsert
   */
  export type WorkoutEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutEntry to update in case it exists.
     */
    where: WorkoutEntryWhereUniqueInput
    /**
     * In case the WorkoutEntry found by the `where` argument doesn't exist, create a new WorkoutEntry with this data.
     */
    create: XOR<WorkoutEntryCreateInput, WorkoutEntryUncheckedCreateInput>
    /**
     * In case the WorkoutEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutEntryUpdateInput, WorkoutEntryUncheckedUpdateInput>
  }

  /**
   * WorkoutEntry delete
   */
  export type WorkoutEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
    /**
     * Filter which WorkoutEntry to delete.
     */
    where: WorkoutEntryWhereUniqueInput
  }

  /**
   * WorkoutEntry deleteMany
   */
  export type WorkoutEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutEntries to delete
     */
    where?: WorkoutEntryWhereInput
    /**
     * Limit how many WorkoutEntries to delete.
     */
    limit?: number
  }

  /**
   * WorkoutEntry without action
   */
  export type WorkoutEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutEntry
     */
    select?: WorkoutEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutEntry
     */
    omit?: WorkoutEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutEntryInclude<ExtArgs> | null
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
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    created_by_id: 'created_by_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    owner_id: 'owner_id',
    created_by_id: 'created_by_id',
    created_at: 'created_at'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const GymInstructorScalarFieldEnum: {
    id: 'id',
    gym_id: 'gym_id',
    user_id: 'user_id',
    assigned_at: 'assigned_at'
  };

  export type GymInstructorScalarFieldEnum = (typeof GymInstructorScalarFieldEnum)[keyof typeof GymInstructorScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    plan_id: 'plan_id',
    start_date: 'start_date',
    end_date: 'end_date',
    is_active: 'is_active',
    is_paid: 'is_paid',
    created_at: 'created_at',
    created_by_id: 'created_by_id'
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
    created_by_id: 'created_by_id',
    created_at: 'created_at'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    amount: 'amount',
    payment_method: 'payment_method',
    paid_at: 'paid_at',
    created_by_id: 'created_by_id',
    created_at: 'created_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AttendanceLogScalarFieldEnum: {
    id: 'id',
    member_id: 'member_id',
    gym_id: 'gym_id',
    created_by_id: 'created_by_id',
    checked_in_at: 'checked_in_at'
  };

  export type AttendanceLogScalarFieldEnum = (typeof AttendanceLogScalarFieldEnum)[keyof typeof AttendanceLogScalarFieldEnum]


  export const InstructorAssignmentScalarFieldEnum: {
    id: 'id',
    instructor_id: 'instructor_id',
    member_id: 'member_id',
    assigned_at: 'assigned_at',
    created_by_id: 'created_by_id'
  };

  export type InstructorAssignmentScalarFieldEnum = (typeof InstructorAssignmentScalarFieldEnum)[keyof typeof InstructorAssignmentScalarFieldEnum]


  export const WorkoutPlanScalarFieldEnum: {
    id: 'id',
    instructor_id: 'instructor_id',
    member_id: 'member_id',
    title: 'title',
    notes: 'notes',
    created_at: 'created_at',
    created_by_id: 'created_by_id'
  };

  export type WorkoutPlanScalarFieldEnum = (typeof WorkoutPlanScalarFieldEnum)[keyof typeof WorkoutPlanScalarFieldEnum]


  export const WorkoutEntryScalarFieldEnum: {
    id: 'id',
    workout_plan_id: 'workout_plan_id',
    exercise_name: 'exercise_name',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight',
    day: 'day',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type WorkoutEntryScalarFieldEnum = (typeof WorkoutEntryScalarFieldEnum)[keyof typeof WorkoutEntryScalarFieldEnum]


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
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Day[]'
   */
  export type ListEnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by_id?: StringNullableFilter<"User"> | string | null
    created_by?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    gym_instructor_at?: GymInstructorListRelationFilter
    gyms?: GymListRelationFilter
    memberships?: MembershipListRelationFilter
    payments?: PaymentListRelationFilter
    attendance_logs?: AttendanceLogListRelationFilter
    member_assignments?: InstructorAssignmentListRelationFilter
    instructor_assignments?: InstructorAssignmentListRelationFilter
    member_workout_plans?: WorkoutPlanListRelationFilter
    instructor_workout_plans?: WorkoutPlanListRelationFilter
    created_users?: UserListRelationFilter
    created_gyms?: GymListRelationFilter
    created_memberships?: MembershipListRelationFilter
    created_plans?: PlanListRelationFilter
    created_payments?: PaymentListRelationFilter
    created_attendance_logs?: AttendanceLogListRelationFilter
    created_instructor_assignments?: InstructorAssignmentListRelationFilter
    created_workout_plans?: WorkoutPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    created_by?: UserOrderByWithRelationInput
    gym_instructor_at?: GymInstructorOrderByRelationAggregateInput
    gyms?: GymOrderByRelationAggregateInput
    memberships?: MembershipOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    attendance_logs?: AttendanceLogOrderByRelationAggregateInput
    member_assignments?: InstructorAssignmentOrderByRelationAggregateInput
    instructor_assignments?: InstructorAssignmentOrderByRelationAggregateInput
    member_workout_plans?: WorkoutPlanOrderByRelationAggregateInput
    instructor_workout_plans?: WorkoutPlanOrderByRelationAggregateInput
    created_users?: UserOrderByRelationAggregateInput
    created_gyms?: GymOrderByRelationAggregateInput
    created_memberships?: MembershipOrderByRelationAggregateInput
    created_plans?: PlanOrderByRelationAggregateInput
    created_payments?: PaymentOrderByRelationAggregateInput
    created_attendance_logs?: AttendanceLogOrderByRelationAggregateInput
    created_instructor_assignments?: InstructorAssignmentOrderByRelationAggregateInput
    created_workout_plans?: WorkoutPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by_id?: StringNullableFilter<"User"> | string | null
    created_by?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    gym_instructor_at?: GymInstructorListRelationFilter
    gyms?: GymListRelationFilter
    memberships?: MembershipListRelationFilter
    payments?: PaymentListRelationFilter
    attendance_logs?: AttendanceLogListRelationFilter
    member_assignments?: InstructorAssignmentListRelationFilter
    instructor_assignments?: InstructorAssignmentListRelationFilter
    member_workout_plans?: WorkoutPlanListRelationFilter
    instructor_workout_plans?: WorkoutPlanListRelationFilter
    created_users?: UserListRelationFilter
    created_gyms?: GymListRelationFilter
    created_memberships?: MembershipListRelationFilter
    created_plans?: PlanListRelationFilter
    created_payments?: PaymentListRelationFilter
    created_attendance_logs?: AttendanceLogListRelationFilter
    created_instructor_assignments?: InstructorAssignmentListRelationFilter
    created_workout_plans?: WorkoutPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    middlename?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_by_id?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    created_by_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    instructors?: GymInstructorListRelationFilter
    attendance_logs?: AttendanceLogListRelationFilter
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    owner?: UserOrderByWithRelationInput
    memberships?: MembershipOrderByRelationAggregateInput
    instructors?: GymInstructorOrderByRelationAggregateInput
    attendance_logs?: AttendanceLogOrderByRelationAggregateInput
    created_by?: UserOrderByWithRelationInput
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    name?: StringFilter<"Gym"> | string
    location?: StringFilter<"Gym"> | string
    owner_id?: StringFilter<"Gym"> | string
    created_by_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: MembershipListRelationFilter
    instructors?: GymInstructorListRelationFilter
    attendance_logs?: AttendanceLogListRelationFilter
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
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
    created_by_id?: StringWithAggregatesFilter<"Gym"> | string
    created_at?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
  }

  export type GymInstructorWhereInput = {
    AND?: GymInstructorWhereInput | GymInstructorWhereInput[]
    OR?: GymInstructorWhereInput[]
    NOT?: GymInstructorWhereInput | GymInstructorWhereInput[]
    id?: StringFilter<"GymInstructor"> | string
    gym_id?: StringFilter<"GymInstructor"> | string
    user_id?: StringFilter<"GymInstructor"> | string
    assigned_at?: DateTimeFilter<"GymInstructor"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GymInstructorOrderByWithRelationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    user_id?: SortOrder
    assigned_at?: SortOrder
    gym?: GymOrderByWithRelationInput
    instructor?: UserOrderByWithRelationInput
  }

  export type GymInstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gym_id_user_id?: GymInstructorGym_idUser_idCompoundUniqueInput
    AND?: GymInstructorWhereInput | GymInstructorWhereInput[]
    OR?: GymInstructorWhereInput[]
    NOT?: GymInstructorWhereInput | GymInstructorWhereInput[]
    gym_id?: StringFilter<"GymInstructor"> | string
    user_id?: StringFilter<"GymInstructor"> | string
    assigned_at?: DateTimeFilter<"GymInstructor"> | Date | string
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "gym_id_user_id">

  export type GymInstructorOrderByWithAggregationInput = {
    id?: SortOrder
    gym_id?: SortOrder
    user_id?: SortOrder
    assigned_at?: SortOrder
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
    user_id?: StringWithAggregatesFilter<"GymInstructor"> | string
    assigned_at?: DateTimeWithAggregatesFilter<"GymInstructor"> | Date | string
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
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by_id?: StringFilter<"Membership"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
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
    created_at?: SortOrder
    created_by_id?: SortOrder
    created_by?: UserOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
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
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by_id?: StringFilter<"Membership"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
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
    created_at?: SortOrder
    created_by_id?: SortOrder
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
    created_at?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    created_by_id?: StringWithAggregatesFilter<"Membership"> | string
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
    created_by_id?: StringFilter<"Plan"> | string
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    created_by_id?: SortOrder
    created_at?: SortOrder
    created_by?: UserOrderByWithRelationInput
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
    created_by_id?: StringFilter<"Plan"> | string
    created_at?: DateTimeFilter<"Plan"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    created_by_id?: SortOrder
    created_at?: SortOrder
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
    created_by_id?: StringWithAggregatesFilter<"Plan"> | string
    created_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    member_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_by_id?: StringFilter<"Payment"> | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
    created_by?: UserOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    member_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_by_id?: StringFilter<"Payment"> | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
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
    member_id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    created_by_id?: StringWithAggregatesFilter<"Payment"> | string
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AttendanceLogWhereInput = {
    AND?: AttendanceLogWhereInput | AttendanceLogWhereInput[]
    OR?: AttendanceLogWhereInput[]
    NOT?: AttendanceLogWhereInput | AttendanceLogWhereInput[]
    id?: IntFilter<"AttendanceLog"> | number
    member_id?: StringFilter<"AttendanceLog"> | string
    gym_id?: StringFilter<"AttendanceLog"> | string
    created_by_id?: StringFilter<"AttendanceLog"> | string
    checked_in_at?: DateTimeFilter<"AttendanceLog"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }

  export type AttendanceLogOrderByWithRelationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    created_by_id?: SortOrder
    checked_in_at?: SortOrder
    created_by?: UserOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
    gym?: GymOrderByWithRelationInput
  }

  export type AttendanceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceLogWhereInput | AttendanceLogWhereInput[]
    OR?: AttendanceLogWhereInput[]
    NOT?: AttendanceLogWhereInput | AttendanceLogWhereInput[]
    member_id?: StringFilter<"AttendanceLog"> | string
    gym_id?: StringFilter<"AttendanceLog"> | string
    created_by_id?: StringFilter<"AttendanceLog"> | string
    checked_in_at?: DateTimeFilter<"AttendanceLog"> | Date | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    gym?: XOR<GymScalarRelationFilter, GymWhereInput>
  }, "id">

  export type AttendanceLogOrderByWithAggregationInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    created_by_id?: SortOrder
    checked_in_at?: SortOrder
    _count?: AttendanceLogCountOrderByAggregateInput
    _avg?: AttendanceLogAvgOrderByAggregateInput
    _max?: AttendanceLogMaxOrderByAggregateInput
    _min?: AttendanceLogMinOrderByAggregateInput
    _sum?: AttendanceLogSumOrderByAggregateInput
  }

  export type AttendanceLogScalarWhereWithAggregatesInput = {
    AND?: AttendanceLogScalarWhereWithAggregatesInput | AttendanceLogScalarWhereWithAggregatesInput[]
    OR?: AttendanceLogScalarWhereWithAggregatesInput[]
    NOT?: AttendanceLogScalarWhereWithAggregatesInput | AttendanceLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceLog"> | number
    member_id?: StringWithAggregatesFilter<"AttendanceLog"> | string
    gym_id?: StringWithAggregatesFilter<"AttendanceLog"> | string
    created_by_id?: StringWithAggregatesFilter<"AttendanceLog"> | string
    checked_in_at?: DateTimeWithAggregatesFilter<"AttendanceLog"> | Date | string
  }

  export type InstructorAssignmentWhereInput = {
    AND?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    OR?: InstructorAssignmentWhereInput[]
    NOT?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    id?: IntFilter<"InstructorAssignment"> | number
    instructor_id?: StringFilter<"InstructorAssignment"> | string
    member_id?: StringFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeFilter<"InstructorAssignment"> | Date | string
    created_by_id?: StringFilter<"InstructorAssignment"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InstructorAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    created_by_id?: SortOrder
    created_by?: UserOrderByWithRelationInput
    instructor?: UserOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
  }

  export type InstructorAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    OR?: InstructorAssignmentWhereInput[]
    NOT?: InstructorAssignmentWhereInput | InstructorAssignmentWhereInput[]
    instructor_id?: StringFilter<"InstructorAssignment"> | string
    member_id?: StringFilter<"InstructorAssignment"> | string
    assigned_at?: DateTimeFilter<"InstructorAssignment"> | Date | string
    created_by_id?: StringFilter<"InstructorAssignment"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InstructorAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    created_by_id?: SortOrder
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
    created_by_id?: StringWithAggregatesFilter<"InstructorAssignment"> | string
  }

  export type WorkoutPlanWhereInput = {
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    instructor_id?: StringFilter<"WorkoutPlan"> | string
    member_id?: StringFilter<"WorkoutPlan"> | string
    title?: StringFilter<"WorkoutPlan"> | string
    notes?: StringNullableFilter<"WorkoutPlan"> | string | null
    created_at?: DateTimeFilter<"WorkoutPlan"> | Date | string
    created_by_id?: StringFilter<"WorkoutPlan"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    workout_entries?: WorkoutEntryListRelationFilter
  }

  export type WorkoutPlanOrderByWithRelationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
    created_by?: UserOrderByWithRelationInput
    instructor?: UserOrderByWithRelationInput
    member?: UserOrderByWithRelationInput
    workout_entries?: WorkoutEntryOrderByRelationAggregateInput
  }

  export type WorkoutPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    instructor_id?: StringFilter<"WorkoutPlan"> | string
    member_id?: StringFilter<"WorkoutPlan"> | string
    title?: StringFilter<"WorkoutPlan"> | string
    notes?: StringNullableFilter<"WorkoutPlan"> | string | null
    created_at?: DateTimeFilter<"WorkoutPlan"> | Date | string
    created_by_id?: StringFilter<"WorkoutPlan"> | string
    created_by?: XOR<UserScalarRelationFilter, UserWhereInput>
    instructor?: XOR<UserScalarRelationFilter, UserWhereInput>
    member?: XOR<UserScalarRelationFilter, UserWhereInput>
    workout_entries?: WorkoutEntryListRelationFilter
  }, "id">

  export type WorkoutPlanOrderByWithAggregationInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
    _count?: WorkoutPlanCountOrderByAggregateInput
    _max?: WorkoutPlanMaxOrderByAggregateInput
    _min?: WorkoutPlanMinOrderByAggregateInput
  }

  export type WorkoutPlanScalarWhereWithAggregatesInput = {
    AND?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    OR?: WorkoutPlanScalarWhereWithAggregatesInput[]
    NOT?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    instructor_id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    member_id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    title?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    notes?: StringNullableWithAggregatesFilter<"WorkoutPlan"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
    created_by_id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
  }

  export type WorkoutEntryWhereInput = {
    AND?: WorkoutEntryWhereInput | WorkoutEntryWhereInput[]
    OR?: WorkoutEntryWhereInput[]
    NOT?: WorkoutEntryWhereInput | WorkoutEntryWhereInput[]
    id?: StringFilter<"WorkoutEntry"> | string
    workout_plan_id?: StringFilter<"WorkoutEntry"> | string
    exercise_name?: StringFilter<"WorkoutEntry"> | string
    sets?: IntFilter<"WorkoutEntry"> | number
    reps?: IntFilter<"WorkoutEntry"> | number
    weight?: FloatFilter<"WorkoutEntry"> | number
    day?: EnumDayFilter<"WorkoutEntry"> | $Enums.Day
    notes?: StringNullableFilter<"WorkoutEntry"> | string | null
    created_at?: DateTimeFilter<"WorkoutEntry"> | Date | string
    workout_plan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
  }

  export type WorkoutEntryOrderByWithRelationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    day?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    workout_plan?: WorkoutPlanOrderByWithRelationInput
  }

  export type WorkoutEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutEntryWhereInput | WorkoutEntryWhereInput[]
    OR?: WorkoutEntryWhereInput[]
    NOT?: WorkoutEntryWhereInput | WorkoutEntryWhereInput[]
    workout_plan_id?: StringFilter<"WorkoutEntry"> | string
    exercise_name?: StringFilter<"WorkoutEntry"> | string
    sets?: IntFilter<"WorkoutEntry"> | number
    reps?: IntFilter<"WorkoutEntry"> | number
    weight?: FloatFilter<"WorkoutEntry"> | number
    day?: EnumDayFilter<"WorkoutEntry"> | $Enums.Day
    notes?: StringNullableFilter<"WorkoutEntry"> | string | null
    created_at?: DateTimeFilter<"WorkoutEntry"> | Date | string
    workout_plan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
  }, "id">

  export type WorkoutEntryOrderByWithAggregationInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    day?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: WorkoutEntryCountOrderByAggregateInput
    _avg?: WorkoutEntryAvgOrderByAggregateInput
    _max?: WorkoutEntryMaxOrderByAggregateInput
    _min?: WorkoutEntryMinOrderByAggregateInput
    _sum?: WorkoutEntrySumOrderByAggregateInput
  }

  export type WorkoutEntryScalarWhereWithAggregatesInput = {
    AND?: WorkoutEntryScalarWhereWithAggregatesInput | WorkoutEntryScalarWhereWithAggregatesInput[]
    OR?: WorkoutEntryScalarWhereWithAggregatesInput[]
    NOT?: WorkoutEntryScalarWhereWithAggregatesInput | WorkoutEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutEntry"> | string
    workout_plan_id?: StringWithAggregatesFilter<"WorkoutEntry"> | string
    exercise_name?: StringWithAggregatesFilter<"WorkoutEntry"> | string
    sets?: IntWithAggregatesFilter<"WorkoutEntry"> | number
    reps?: IntWithAggregatesFilter<"WorkoutEntry"> | number
    weight?: FloatWithAggregatesFilter<"WorkoutEntry"> | number
    day?: EnumDayWithAggregatesFilter<"WorkoutEntry"> | $Enums.Day
    notes?: StringNullableWithAggregatesFilter<"WorkoutEntry"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"WorkoutEntry"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GymCreateInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutGymsInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutGymInput
    created_by: UserCreateNestedOneWithoutCreated_gymsInput
  }

  export type GymUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_by_id: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGymsNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutGymNestedInput
    created_by?: UserUpdateOneRequiredWithoutCreated_gymsNestedInput
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymCreateManyInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_by_id: string
    created_at?: Date | string
  }

  export type GymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymInstructorCreateInput = {
    id?: string
    assigned_at?: Date | string
    gym: GymCreateNestedOneWithoutInstructorsInput
    instructor: UserCreateNestedOneWithoutGym_instructor_atInput
  }

  export type GymInstructorUncheckedCreateInput = {
    id?: string
    gym_id: string
    user_id: string
    assigned_at?: Date | string
  }

  export type GymInstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutInstructorsNestedInput
    instructor?: UserUpdateOneRequiredWithoutGym_instructor_atNestedInput
  }

  export type GymInstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymInstructorCreateManyInput = {
    id?: string
    gym_id: string
    user_id: string
    assigned_at?: Date | string
  }

  export type GymInstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymInstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_membershipsInput
    member: UserCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
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
    created_at?: Date | string
    created_by_id: string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_membershipsNestedInput
    member?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
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
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
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
    created_at?: Date | string
    created_by_id: string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
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
    created_by: UserCreateNestedOneWithoutCreated_plansInput
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
    created_by_id: string
    created_at?: Date | string
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
    created_by?: UserUpdateOneRequiredWithoutCreated_plansNestedInput
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
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    created_by_id: string
    created_at?: Date | string
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
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_paymentsInput
    member: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    member_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_by_id: string
    created_at?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_paymentsNestedInput
    member?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    member_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_by_id: string
    created_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogCreateInput = {
    checked_in_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_attendance_logsInput
    member: UserCreateNestedOneWithoutAttendance_logsInput
    gym: GymCreateNestedOneWithoutAttendance_logsInput
  }

  export type AttendanceLogUncheckedCreateInput = {
    id?: number
    member_id: string
    gym_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type AttendanceLogUpdateInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_attendance_logsNestedInput
    member?: UserUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type AttendanceLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogCreateManyInput = {
    id?: number
    member_id: string
    gym_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type AttendanceLogUpdateManyMutationInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorAssignmentCreateInput = {
    assigned_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_instructor_assignmentsInput
    instructor: UserCreateNestedOneWithoutInstructor_assignmentsInput
    member: UserCreateNestedOneWithoutMember_assignmentsInput
  }

  export type InstructorAssignmentUncheckedCreateInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type InstructorAssignmentUpdateInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_instructor_assignmentsNestedInput
    instructor?: UserUpdateOneRequiredWithoutInstructor_assignmentsNestedInput
    member?: UserUpdateOneRequiredWithoutMember_assignmentsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentCreateManyInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type InstructorAssignmentUpdateManyMutationInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutPlanCreateInput = {
    id?: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_workout_plansInput
    instructor: UserCreateNestedOneWithoutInstructor_workout_plansInput
    member: UserCreateNestedOneWithoutMember_workout_plansInput
    workout_entries?: WorkoutEntryCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanUncheckedCreateInput = {
    id?: string
    instructor_id: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
    workout_entries?: WorkoutEntryUncheckedCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_workout_plansNestedInput
    instructor?: UserUpdateOneRequiredWithoutInstructor_workout_plansNestedInput
    member?: UserUpdateOneRequiredWithoutMember_workout_plansNestedInput
    workout_entries?: WorkoutEntryUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    workout_entries?: WorkoutEntryUncheckedUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanCreateManyInput = {
    id?: string
    instructor_id: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
  }

  export type WorkoutPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutEntryCreateInput = {
    id?: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
    workout_plan: WorkoutPlanCreateNestedOneWithoutWorkout_entriesInput
  }

  export type WorkoutEntryUncheckedCreateInput = {
    id?: string
    workout_plan_id: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
  }

  export type WorkoutEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workout_plan?: WorkoutPlanUpdateOneRequiredWithoutWorkout_entriesNestedInput
  }

  export type WorkoutEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutEntryCreateManyInput = {
    id?: string
    workout_plan_id: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
  }

  export type WorkoutEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workout_plan_id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GymInstructorListRelationFilter = {
    every?: GymInstructorWhereInput
    some?: GymInstructorWhereInput
    none?: GymInstructorWhereInput
  }

  export type GymListRelationFilter = {
    every?: GymWhereInput
    some?: GymWhereInput
    none?: GymWhereInput
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type AttendanceLogListRelationFilter = {
    every?: AttendanceLogWhereInput
    some?: AttendanceLogWhereInput
    none?: AttendanceLogWhereInput
  }

  export type InstructorAssignmentListRelationFilter = {
    every?: InstructorAssignmentWhereInput
    some?: InstructorAssignmentWhereInput
    none?: InstructorAssignmentWhereInput
  }

  export type WorkoutPlanListRelationFilter = {
    every?: WorkoutPlanWhereInput
    some?: WorkoutPlanWhereInput
    none?: WorkoutPlanWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GymInstructorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    owner_id?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
  }

  export type GymScalarRelationFilter = {
    is?: GymWhereInput
    isNot?: GymWhereInput
  }

  export type GymInstructorGym_idUser_idCompoundUniqueInput = {
    gym_id: string
    user_id: string
  }

  export type GymInstructorCountOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    user_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type GymInstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    user_id?: SortOrder
    assigned_at?: SortOrder
  }

  export type GymInstructorMinOrderByAggregateInput = {
    id?: SortOrder
    gym_id?: SortOrder
    user_id?: SortOrder
    assigned_at?: SortOrder
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

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
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
    created_at?: SortOrder
    created_by_id?: SortOrder
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
    created_at?: SortOrder
    created_by_id?: SortOrder
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
    created_at?: SortOrder
    created_by_id?: SortOrder
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
    created_by_id?: SortOrder
    created_at?: SortOrder
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
    created_by_id?: SortOrder
    created_at?: SortOrder
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
    created_by_id?: SortOrder
    created_at?: SortOrder
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

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    paid_at?: SortOrder
    created_by_id?: SortOrder
    created_at?: SortOrder
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

  export type AttendanceLogCountOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    created_by_id?: SortOrder
    checked_in_at?: SortOrder
  }

  export type AttendanceLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttendanceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    created_by_id?: SortOrder
    checked_in_at?: SortOrder
  }

  export type AttendanceLogMinOrderByAggregateInput = {
    id?: SortOrder
    member_id?: SortOrder
    gym_id?: SortOrder
    created_by_id?: SortOrder
    checked_in_at?: SortOrder
  }

  export type AttendanceLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstructorAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type InstructorAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstructorAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type InstructorAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    assigned_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type InstructorAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkoutEntryListRelationFilter = {
    every?: WorkoutEntryWhereInput
    some?: WorkoutEntryWhereInput
    none?: WorkoutEntryWhereInput
  }

  export type WorkoutEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanCountOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type WorkoutPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type WorkoutPlanMinOrderByAggregateInput = {
    id?: SortOrder
    instructor_id?: SortOrder
    member_id?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    created_by_id?: SortOrder
  }

  export type EnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type WorkoutPlanScalarRelationFilter = {
    is?: WorkoutPlanWhereInput
    isNot?: WorkoutPlanWhereInput
  }

  export type WorkoutEntryCountOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    day?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type WorkoutEntryAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type WorkoutEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    day?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type WorkoutEntryMinOrderByAggregateInput = {
    id?: SortOrder
    workout_plan_id?: SortOrder
    exercise_name?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    day?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type WorkoutEntrySumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type EnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutCreated_usersInput = {
    create?: XOR<UserCreateWithoutCreated_usersInput, UserUncheckedCreateWithoutCreated_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_usersInput
    connect?: UserWhereUniqueInput
  }

  export type GymInstructorCreateNestedManyWithoutInstructorInput = {
    create?: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput> | GymInstructorCreateWithoutInstructorInput[] | GymInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutInstructorInput | GymInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: GymInstructorCreateManyInstructorInputEnvelope
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
  }

  export type GymCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutMemberInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AttendanceLogCreateNestedManyWithoutMemberInput = {
    create?: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput> | AttendanceLogCreateWithoutMemberInput[] | AttendanceLogUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutMemberInput | AttendanceLogCreateOrConnectWithoutMemberInput[]
    createMany?: AttendanceLogCreateManyMemberInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type InstructorAssignmentCreateNestedManyWithoutMemberInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type InstructorAssignmentCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutMemberInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput> | WorkoutPlanCreateWithoutMemberInput[] | WorkoutPlanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberInput | WorkoutPlanCreateOrConnectWithoutMemberInput[]
    createMany?: WorkoutPlanCreateManyMemberInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput> | UserCreateWithoutCreated_byInput[] | UserUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreated_byInput | UserCreateOrConnectWithoutCreated_byInput[]
    createMany?: UserCreateManyCreated_byInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GymCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput> | GymCreateWithoutCreated_byInput[] | GymUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: GymCreateOrConnectWithoutCreated_byInput | GymCreateOrConnectWithoutCreated_byInput[]
    createMany?: GymCreateManyCreated_byInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput> | MembershipCreateWithoutCreated_byInput[] | MembershipUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutCreated_byInput | MembershipCreateOrConnectWithoutCreated_byInput[]
    createMany?: MembershipCreateManyCreated_byInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput> | PlanCreateWithoutCreated_byInput[] | PlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCreated_byInput | PlanCreateOrConnectWithoutCreated_byInput[]
    createMany?: PlanCreateManyCreated_byInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput> | PaymentCreateWithoutCreated_byInput[] | PaymentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreated_byInput | PaymentCreateOrConnectWithoutCreated_byInput[]
    createMany?: PaymentCreateManyCreated_byInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AttendanceLogCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput> | AttendanceLogCreateWithoutCreated_byInput[] | AttendanceLogUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutCreated_byInput | AttendanceLogCreateOrConnectWithoutCreated_byInput[]
    createMany?: AttendanceLogCreateManyCreated_byInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type InstructorAssignmentCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput> | InstructorAssignmentCreateWithoutCreated_byInput[] | InstructorAssignmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutCreated_byInput | InstructorAssignmentCreateOrConnectWithoutCreated_byInput[]
    createMany?: InstructorAssignmentCreateManyCreated_byInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput> | WorkoutPlanCreateWithoutCreated_byInput[] | WorkoutPlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreated_byInput | WorkoutPlanCreateOrConnectWithoutCreated_byInput[]
    createMany?: WorkoutPlanCreateManyCreated_byInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type GymInstructorUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput> | GymInstructorCreateWithoutInstructorInput[] | GymInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutInstructorInput | GymInstructorCreateOrConnectWithoutInstructorInput[]
    createMany?: GymInstructorCreateManyInstructorInputEnvelope
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
  }

  export type GymUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput> | GymCreateWithoutOwnerInput[] | GymUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GymCreateOrConnectWithoutOwnerInput | GymCreateOrConnectWithoutOwnerInput[]
    createMany?: GymCreateManyOwnerInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput> | MembershipCreateWithoutMemberInput[] | MembershipUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutMemberInput | MembershipCreateOrConnectWithoutMemberInput[]
    createMany?: MembershipCreateManyMemberInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AttendanceLogUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput> | AttendanceLogCreateWithoutMemberInput[] | AttendanceLogUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutMemberInput | AttendanceLogCreateOrConnectWithoutMemberInput[]
    createMany?: AttendanceLogCreateManyMemberInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput> | InstructorAssignmentCreateWithoutMemberInput[] | InstructorAssignmentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutMemberInput | InstructorAssignmentCreateOrConnectWithoutMemberInput[]
    createMany?: InstructorAssignmentCreateManyMemberInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput> | InstructorAssignmentCreateWithoutInstructorInput[] | InstructorAssignmentUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutInstructorInput | InstructorAssignmentCreateOrConnectWithoutInstructorInput[]
    createMany?: InstructorAssignmentCreateManyInstructorInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput> | WorkoutPlanCreateWithoutMemberInput[] | WorkoutPlanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberInput | WorkoutPlanCreateOrConnectWithoutMemberInput[]
    createMany?: WorkoutPlanCreateManyMemberInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput> | UserCreateWithoutCreated_byInput[] | UserUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreated_byInput | UserCreateOrConnectWithoutCreated_byInput[]
    createMany?: UserCreateManyCreated_byInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GymUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput> | GymCreateWithoutCreated_byInput[] | GymUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: GymCreateOrConnectWithoutCreated_byInput | GymCreateOrConnectWithoutCreated_byInput[]
    createMany?: GymCreateManyCreated_byInputEnvelope
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput> | MembershipCreateWithoutCreated_byInput[] | MembershipUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutCreated_byInput | MembershipCreateOrConnectWithoutCreated_byInput[]
    createMany?: MembershipCreateManyCreated_byInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput> | PlanCreateWithoutCreated_byInput[] | PlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCreated_byInput | PlanCreateOrConnectWithoutCreated_byInput[]
    createMany?: PlanCreateManyCreated_byInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput> | PaymentCreateWithoutCreated_byInput[] | PaymentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreated_byInput | PaymentCreateOrConnectWithoutCreated_byInput[]
    createMany?: PaymentCreateManyCreated_byInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput> | AttendanceLogCreateWithoutCreated_byInput[] | AttendanceLogUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutCreated_byInput | AttendanceLogCreateOrConnectWithoutCreated_byInput[]
    createMany?: AttendanceLogCreateManyCreated_byInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput> | InstructorAssignmentCreateWithoutCreated_byInput[] | InstructorAssignmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutCreated_byInput | InstructorAssignmentCreateOrConnectWithoutCreated_byInput[]
    createMany?: InstructorAssignmentCreateManyCreated_byInputEnvelope
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput> | WorkoutPlanCreateWithoutCreated_byInput[] | WorkoutPlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreated_byInput | WorkoutPlanCreateOrConnectWithoutCreated_byInput[]
    createMany?: WorkoutPlanCreateManyCreated_byInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
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

  export type UserUpdateOneWithoutCreated_usersNestedInput = {
    create?: XOR<UserCreateWithoutCreated_usersInput, UserUncheckedCreateWithoutCreated_usersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_usersInput
    upsert?: UserUpsertWithoutCreated_usersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_usersInput, UserUpdateWithoutCreated_usersInput>, UserUncheckedUpdateWithoutCreated_usersInput>
  }

  export type GymInstructorUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput> | GymInstructorCreateWithoutInstructorInput[] | GymInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutInstructorInput | GymInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: GymInstructorUpsertWithWhereUniqueWithoutInstructorInput | GymInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: GymInstructorCreateManyInstructorInputEnvelope
    set?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    disconnect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    delete?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    update?: GymInstructorUpdateWithWhereUniqueWithoutInstructorInput | GymInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: GymInstructorUpdateManyWithWhereWithoutInstructorInput | GymInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
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

  export type PaymentUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMemberInput | PaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMemberInput | PaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMemberInput | PaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AttendanceLogUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput> | AttendanceLogCreateWithoutMemberInput[] | AttendanceLogUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutMemberInput | AttendanceLogCreateOrConnectWithoutMemberInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutMemberInput | AttendanceLogUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AttendanceLogCreateManyMemberInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutMemberInput | AttendanceLogUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutMemberInput | AttendanceLogUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
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

  export type WorkoutPlanUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput> | WorkoutPlanCreateWithoutMemberInput[] | WorkoutPlanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberInput | WorkoutPlanCreateOrConnectWithoutMemberInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutMemberInput | WorkoutPlanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WorkoutPlanCreateManyMemberInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutMemberInput | WorkoutPlanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutMemberInput | WorkoutPlanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type WorkoutPlanUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutInstructorInput | WorkoutPlanUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput> | UserCreateWithoutCreated_byInput[] | UserUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreated_byInput | UserCreateOrConnectWithoutCreated_byInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreated_byInput | UserUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: UserCreateManyCreated_byInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreated_byInput | UserUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreated_byInput | UserUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GymUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput> | GymCreateWithoutCreated_byInput[] | GymUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: GymCreateOrConnectWithoutCreated_byInput | GymCreateOrConnectWithoutCreated_byInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutCreated_byInput | GymUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: GymCreateManyCreated_byInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutCreated_byInput | GymUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: GymUpdateManyWithWhereWithoutCreated_byInput | GymUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput> | MembershipCreateWithoutCreated_byInput[] | MembershipUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutCreated_byInput | MembershipCreateOrConnectWithoutCreated_byInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutCreated_byInput | MembershipUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: MembershipCreateManyCreated_byInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutCreated_byInput | MembershipUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutCreated_byInput | MembershipUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput> | PlanCreateWithoutCreated_byInput[] | PlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCreated_byInput | PlanCreateOrConnectWithoutCreated_byInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutCreated_byInput | PlanUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: PlanCreateManyCreated_byInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutCreated_byInput | PlanUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutCreated_byInput | PlanUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput> | PaymentCreateWithoutCreated_byInput[] | PaymentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreated_byInput | PaymentCreateOrConnectWithoutCreated_byInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCreated_byInput | PaymentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: PaymentCreateManyCreated_byInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCreated_byInput | PaymentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCreated_byInput | PaymentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AttendanceLogUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput> | AttendanceLogCreateWithoutCreated_byInput[] | AttendanceLogUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutCreated_byInput | AttendanceLogCreateOrConnectWithoutCreated_byInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutCreated_byInput | AttendanceLogUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: AttendanceLogCreateManyCreated_byInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutCreated_byInput | AttendanceLogUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutCreated_byInput | AttendanceLogUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
  }

  export type InstructorAssignmentUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput> | InstructorAssignmentCreateWithoutCreated_byInput[] | InstructorAssignmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutCreated_byInput | InstructorAssignmentCreateOrConnectWithoutCreated_byInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutCreated_byInput | InstructorAssignmentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: InstructorAssignmentCreateManyCreated_byInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutCreated_byInput | InstructorAssignmentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutCreated_byInput | InstructorAssignmentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
  }

  export type WorkoutPlanUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput> | WorkoutPlanCreateWithoutCreated_byInput[] | WorkoutPlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreated_byInput | WorkoutPlanCreateOrConnectWithoutCreated_byInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutCreated_byInput | WorkoutPlanUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: WorkoutPlanCreateManyCreated_byInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutCreated_byInput | WorkoutPlanUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutCreated_byInput | WorkoutPlanUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput> | GymInstructorCreateWithoutInstructorInput[] | GymInstructorUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: GymInstructorCreateOrConnectWithoutInstructorInput | GymInstructorCreateOrConnectWithoutInstructorInput[]
    upsert?: GymInstructorUpsertWithWhereUniqueWithoutInstructorInput | GymInstructorUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: GymInstructorCreateManyInstructorInputEnvelope
    set?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    disconnect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    delete?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    connect?: GymInstructorWhereUniqueInput | GymInstructorWhereUniqueInput[]
    update?: GymInstructorUpdateWithWhereUniqueWithoutInstructorInput | GymInstructorUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: GymInstructorUpdateManyWithWhereWithoutInstructorInput | GymInstructorUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
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

  export type PaymentUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput> | PaymentCreateWithoutMemberInput[] | PaymentUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMemberInput | PaymentCreateOrConnectWithoutMemberInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMemberInput | PaymentUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: PaymentCreateManyMemberInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMemberInput | PaymentUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMemberInput | PaymentUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput> | AttendanceLogCreateWithoutMemberInput[] | AttendanceLogUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutMemberInput | AttendanceLogCreateOrConnectWithoutMemberInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutMemberInput | AttendanceLogUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AttendanceLogCreateManyMemberInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutMemberInput | AttendanceLogUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutMemberInput | AttendanceLogUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
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

  export type WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput> | WorkoutPlanCreateWithoutMemberInput[] | WorkoutPlanUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberInput | WorkoutPlanCreateOrConnectWithoutMemberInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutMemberInput | WorkoutPlanUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: WorkoutPlanCreateManyMemberInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutMemberInput | WorkoutPlanUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutMemberInput | WorkoutPlanUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput> | WorkoutPlanCreateWithoutInstructorInput[] | WorkoutPlanUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutInstructorInput | WorkoutPlanCreateOrConnectWithoutInstructorInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: WorkoutPlanCreateManyInstructorInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput | WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutInstructorInput | WorkoutPlanUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput> | UserCreateWithoutCreated_byInput[] | UserUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreated_byInput | UserCreateOrConnectWithoutCreated_byInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreated_byInput | UserUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: UserCreateManyCreated_byInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreated_byInput | UserUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreated_byInput | UserUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GymUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput> | GymCreateWithoutCreated_byInput[] | GymUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: GymCreateOrConnectWithoutCreated_byInput | GymCreateOrConnectWithoutCreated_byInput[]
    upsert?: GymUpsertWithWhereUniqueWithoutCreated_byInput | GymUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: GymCreateManyCreated_byInputEnvelope
    set?: GymWhereUniqueInput | GymWhereUniqueInput[]
    disconnect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    delete?: GymWhereUniqueInput | GymWhereUniqueInput[]
    connect?: GymWhereUniqueInput | GymWhereUniqueInput[]
    update?: GymUpdateWithWhereUniqueWithoutCreated_byInput | GymUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: GymUpdateManyWithWhereWithoutCreated_byInput | GymUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: GymScalarWhereInput | GymScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput> | MembershipCreateWithoutCreated_byInput[] | MembershipUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutCreated_byInput | MembershipCreateOrConnectWithoutCreated_byInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutCreated_byInput | MembershipUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: MembershipCreateManyCreated_byInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutCreated_byInput | MembershipUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutCreated_byInput | MembershipUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput> | PlanCreateWithoutCreated_byInput[] | PlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutCreated_byInput | PlanCreateOrConnectWithoutCreated_byInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutCreated_byInput | PlanUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: PlanCreateManyCreated_byInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutCreated_byInput | PlanUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutCreated_byInput | PlanUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput> | PaymentCreateWithoutCreated_byInput[] | PaymentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCreated_byInput | PaymentCreateOrConnectWithoutCreated_byInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCreated_byInput | PaymentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: PaymentCreateManyCreated_byInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCreated_byInput | PaymentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCreated_byInput | PaymentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput> | AttendanceLogCreateWithoutCreated_byInput[] | AttendanceLogUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutCreated_byInput | AttendanceLogCreateOrConnectWithoutCreated_byInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutCreated_byInput | AttendanceLogUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: AttendanceLogCreateManyCreated_byInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutCreated_byInput | AttendanceLogUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutCreated_byInput | AttendanceLogUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput> | InstructorAssignmentCreateWithoutCreated_byInput[] | InstructorAssignmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: InstructorAssignmentCreateOrConnectWithoutCreated_byInput | InstructorAssignmentCreateOrConnectWithoutCreated_byInput[]
    upsert?: InstructorAssignmentUpsertWithWhereUniqueWithoutCreated_byInput | InstructorAssignmentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: InstructorAssignmentCreateManyCreated_byInputEnvelope
    set?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    disconnect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    delete?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    connect?: InstructorAssignmentWhereUniqueInput | InstructorAssignmentWhereUniqueInput[]
    update?: InstructorAssignmentUpdateWithWhereUniqueWithoutCreated_byInput | InstructorAssignmentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: InstructorAssignmentUpdateManyWithWhereWithoutCreated_byInput | InstructorAssignmentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: InstructorAssignmentScalarWhereInput | InstructorAssignmentScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput> | WorkoutPlanCreateWithoutCreated_byInput[] | WorkoutPlanUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutCreated_byInput | WorkoutPlanCreateOrConnectWithoutCreated_byInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutCreated_byInput | WorkoutPlanUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: WorkoutPlanCreateManyCreated_byInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutCreated_byInput | WorkoutPlanUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutCreated_byInput | WorkoutPlanUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGymsInput = {
    create?: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymsInput
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

  export type AttendanceLogCreateNestedManyWithoutGymInput = {
    create?: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput> | AttendanceLogCreateWithoutGymInput[] | AttendanceLogUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutGymInput | AttendanceLogCreateOrConnectWithoutGymInput[]
    createMany?: AttendanceLogCreateManyGymInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreated_gymsInput = {
    create?: XOR<UserCreateWithoutCreated_gymsInput, UserUncheckedCreateWithoutCreated_gymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_gymsInput
    connect?: UserWhereUniqueInput
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

  export type AttendanceLogUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput> | AttendanceLogCreateWithoutGymInput[] | AttendanceLogUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutGymInput | AttendanceLogCreateOrConnectWithoutGymInput[]
    createMany?: AttendanceLogCreateManyGymInputEnvelope
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGymsNestedInput = {
    create?: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGymsInput
    upsert?: UserUpsertWithoutGymsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGymsInput, UserUpdateWithoutGymsInput>, UserUncheckedUpdateWithoutGymsInput>
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

  export type AttendanceLogUpdateManyWithoutGymNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput> | AttendanceLogCreateWithoutGymInput[] | AttendanceLogUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutGymInput | AttendanceLogCreateOrConnectWithoutGymInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutGymInput | AttendanceLogUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: AttendanceLogCreateManyGymInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutGymInput | AttendanceLogUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutGymInput | AttendanceLogUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreated_gymsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_gymsInput, UserUncheckedCreateWithoutCreated_gymsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_gymsInput
    upsert?: UserUpsertWithoutCreated_gymsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_gymsInput, UserUpdateWithoutCreated_gymsInput>, UserUncheckedUpdateWithoutCreated_gymsInput>
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

  export type AttendanceLogUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput> | AttendanceLogCreateWithoutGymInput[] | AttendanceLogUncheckedCreateWithoutGymInput[]
    connectOrCreate?: AttendanceLogCreateOrConnectWithoutGymInput | AttendanceLogCreateOrConnectWithoutGymInput[]
    upsert?: AttendanceLogUpsertWithWhereUniqueWithoutGymInput | AttendanceLogUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: AttendanceLogCreateManyGymInputEnvelope
    set?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    disconnect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    delete?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    connect?: AttendanceLogWhereUniqueInput | AttendanceLogWhereUniqueInput[]
    update?: AttendanceLogUpdateWithWhereUniqueWithoutGymInput | AttendanceLogUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: AttendanceLogUpdateManyWithWhereWithoutGymInput | AttendanceLogUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
  }

  export type GymCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: GymCreateOrConnectWithoutInstructorsInput
    connect?: GymWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGym_instructor_atInput = {
    create?: XOR<UserCreateWithoutGym_instructor_atInput, UserUncheckedCreateWithoutGym_instructor_atInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_instructor_atInput
    connect?: UserWhereUniqueInput
  }

  export type GymUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: GymCreateOrConnectWithoutInstructorsInput
    upsert?: GymUpsertWithoutInstructorsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutInstructorsInput, GymUpdateWithoutInstructorsInput>, GymUncheckedUpdateWithoutInstructorsInput>
  }

  export type UserUpdateOneRequiredWithoutGym_instructor_atNestedInput = {
    create?: XOR<UserCreateWithoutGym_instructor_atInput, UserUncheckedCreateWithoutGym_instructor_atInput>
    connectOrCreate?: UserCreateOrConnectWithoutGym_instructor_atInput
    upsert?: UserUpsertWithoutGym_instructor_atInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGym_instructor_atInput, UserUpdateWithoutGym_instructor_atInput>, UserUncheckedUpdateWithoutGym_instructor_atInput>
  }

  export type UserCreateNestedOneWithoutCreated_membershipsInput = {
    create?: XOR<UserCreateWithoutCreated_membershipsInput, UserUncheckedCreateWithoutCreated_membershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_membershipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCreated_membershipsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_membershipsInput, UserUncheckedCreateWithoutCreated_membershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_membershipsInput
    upsert?: UserUpsertWithoutCreated_membershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_membershipsInput, UserUpdateWithoutCreated_membershipsInput>, UserUncheckedUpdateWithoutCreated_membershipsInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
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

  export type UserCreateNestedOneWithoutCreated_plansInput = {
    create?: XOR<UserCreateWithoutCreated_plansInput, UserUncheckedCreateWithoutCreated_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_plansInput
    connect?: UserWhereUniqueInput
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

  export type UserUpdateOneRequiredWithoutCreated_plansNestedInput = {
    create?: XOR<UserCreateWithoutCreated_plansInput, UserUncheckedCreateWithoutCreated_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_plansInput
    upsert?: UserUpsertWithoutCreated_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_plansInput, UserUpdateWithoutCreated_plansInput>, UserUncheckedUpdateWithoutCreated_plansInput>
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

  export type UserCreateNestedOneWithoutCreated_paymentsInput = {
    create?: XOR<UserCreateWithoutCreated_paymentsInput, UserUncheckedCreateWithoutCreated_paymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_paymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
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

  export type UserUpdateOneRequiredWithoutCreated_paymentsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_paymentsInput, UserUncheckedCreateWithoutCreated_paymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_paymentsInput
    upsert?: UserUpsertWithoutCreated_paymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_paymentsInput, UserUpdateWithoutCreated_paymentsInput>, UserUncheckedUpdateWithoutCreated_paymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutCreated_attendance_logsInput = {
    create?: XOR<UserCreateWithoutCreated_attendance_logsInput, UserUncheckedCreateWithoutCreated_attendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_attendance_logsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendance_logsInput = {
    create?: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendance_logsInput
    connect?: UserWhereUniqueInput
  }

  export type GymCreateNestedOneWithoutAttendance_logsInput = {
    create?: XOR<GymCreateWithoutAttendance_logsInput, GymUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutAttendance_logsInput
    connect?: GymWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreated_attendance_logsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_attendance_logsInput, UserUncheckedCreateWithoutCreated_attendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_attendance_logsInput
    upsert?: UserUpsertWithoutCreated_attendance_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_attendance_logsInput, UserUpdateWithoutCreated_attendance_logsInput>, UserUncheckedUpdateWithoutCreated_attendance_logsInput>
  }

  export type UserUpdateOneRequiredWithoutAttendance_logsNestedInput = {
    create?: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendance_logsInput
    upsert?: UserUpsertWithoutAttendance_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendance_logsInput, UserUpdateWithoutAttendance_logsInput>, UserUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type GymUpdateOneRequiredWithoutAttendance_logsNestedInput = {
    create?: XOR<GymCreateWithoutAttendance_logsInput, GymUncheckedCreateWithoutAttendance_logsInput>
    connectOrCreate?: GymCreateOrConnectWithoutAttendance_logsInput
    upsert?: GymUpsertWithoutAttendance_logsInput
    connect?: GymWhereUniqueInput
    update?: XOR<XOR<GymUpdateToOneWithWhereWithoutAttendance_logsInput, GymUpdateWithoutAttendance_logsInput>, GymUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type UserCreateNestedOneWithoutCreated_instructor_assignmentsInput = {
    create?: XOR<UserCreateWithoutCreated_instructor_assignmentsInput, UserUncheckedCreateWithoutCreated_instructor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_instructor_assignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInstructor_assignmentsInput = {
    create?: XOR<UserCreateWithoutInstructor_assignmentsInput, UserUncheckedCreateWithoutInstructor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructor_assignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMember_assignmentsInput = {
    create?: XOR<UserCreateWithoutMember_assignmentsInput, UserUncheckedCreateWithoutMember_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_assignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreated_instructor_assignmentsNestedInput = {
    create?: XOR<UserCreateWithoutCreated_instructor_assignmentsInput, UserUncheckedCreateWithoutCreated_instructor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_instructor_assignmentsInput
    upsert?: UserUpsertWithoutCreated_instructor_assignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_instructor_assignmentsInput, UserUpdateWithoutCreated_instructor_assignmentsInput>, UserUncheckedUpdateWithoutCreated_instructor_assignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutInstructor_assignmentsNestedInput = {
    create?: XOR<UserCreateWithoutInstructor_assignmentsInput, UserUncheckedCreateWithoutInstructor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructor_assignmentsInput
    upsert?: UserUpsertWithoutInstructor_assignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructor_assignmentsInput, UserUpdateWithoutInstructor_assignmentsInput>, UserUncheckedUpdateWithoutInstructor_assignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutMember_assignmentsNestedInput = {
    create?: XOR<UserCreateWithoutMember_assignmentsInput, UserUncheckedCreateWithoutMember_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_assignmentsInput
    upsert?: UserUpsertWithoutMember_assignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMember_assignmentsInput, UserUpdateWithoutMember_assignmentsInput>, UserUncheckedUpdateWithoutMember_assignmentsInput>
  }

  export type UserCreateNestedOneWithoutCreated_workout_plansInput = {
    create?: XOR<UserCreateWithoutCreated_workout_plansInput, UserUncheckedCreateWithoutCreated_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_workout_plansInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInstructor_workout_plansInput = {
    create?: XOR<UserCreateWithoutInstructor_workout_plansInput, UserUncheckedCreateWithoutInstructor_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructor_workout_plansInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMember_workout_plansInput = {
    create?: XOR<UserCreateWithoutMember_workout_plansInput, UserUncheckedCreateWithoutMember_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_workout_plansInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutEntryCreateNestedManyWithoutWorkout_planInput = {
    create?: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput> | WorkoutEntryCreateWithoutWorkout_planInput[] | WorkoutEntryUncheckedCreateWithoutWorkout_planInput[]
    connectOrCreate?: WorkoutEntryCreateOrConnectWithoutWorkout_planInput | WorkoutEntryCreateOrConnectWithoutWorkout_planInput[]
    createMany?: WorkoutEntryCreateManyWorkout_planInputEnvelope
    connect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
  }

  export type WorkoutEntryUncheckedCreateNestedManyWithoutWorkout_planInput = {
    create?: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput> | WorkoutEntryCreateWithoutWorkout_planInput[] | WorkoutEntryUncheckedCreateWithoutWorkout_planInput[]
    connectOrCreate?: WorkoutEntryCreateOrConnectWithoutWorkout_planInput | WorkoutEntryCreateOrConnectWithoutWorkout_planInput[]
    createMany?: WorkoutEntryCreateManyWorkout_planInputEnvelope
    connect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreated_workout_plansNestedInput = {
    create?: XOR<UserCreateWithoutCreated_workout_plansInput, UserUncheckedCreateWithoutCreated_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_workout_plansInput
    upsert?: UserUpsertWithoutCreated_workout_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_workout_plansInput, UserUpdateWithoutCreated_workout_plansInput>, UserUncheckedUpdateWithoutCreated_workout_plansInput>
  }

  export type UserUpdateOneRequiredWithoutInstructor_workout_plansNestedInput = {
    create?: XOR<UserCreateWithoutInstructor_workout_plansInput, UserUncheckedCreateWithoutInstructor_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructor_workout_plansInput
    upsert?: UserUpsertWithoutInstructor_workout_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructor_workout_plansInput, UserUpdateWithoutInstructor_workout_plansInput>, UserUncheckedUpdateWithoutInstructor_workout_plansInput>
  }

  export type UserUpdateOneRequiredWithoutMember_workout_plansNestedInput = {
    create?: XOR<UserCreateWithoutMember_workout_plansInput, UserUncheckedCreateWithoutMember_workout_plansInput>
    connectOrCreate?: UserCreateOrConnectWithoutMember_workout_plansInput
    upsert?: UserUpsertWithoutMember_workout_plansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMember_workout_plansInput, UserUpdateWithoutMember_workout_plansInput>, UserUncheckedUpdateWithoutMember_workout_plansInput>
  }

  export type WorkoutEntryUpdateManyWithoutWorkout_planNestedInput = {
    create?: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput> | WorkoutEntryCreateWithoutWorkout_planInput[] | WorkoutEntryUncheckedCreateWithoutWorkout_planInput[]
    connectOrCreate?: WorkoutEntryCreateOrConnectWithoutWorkout_planInput | WorkoutEntryCreateOrConnectWithoutWorkout_planInput[]
    upsert?: WorkoutEntryUpsertWithWhereUniqueWithoutWorkout_planInput | WorkoutEntryUpsertWithWhereUniqueWithoutWorkout_planInput[]
    createMany?: WorkoutEntryCreateManyWorkout_planInputEnvelope
    set?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    disconnect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    delete?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    connect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    update?: WorkoutEntryUpdateWithWhereUniqueWithoutWorkout_planInput | WorkoutEntryUpdateWithWhereUniqueWithoutWorkout_planInput[]
    updateMany?: WorkoutEntryUpdateManyWithWhereWithoutWorkout_planInput | WorkoutEntryUpdateManyWithWhereWithoutWorkout_planInput[]
    deleteMany?: WorkoutEntryScalarWhereInput | WorkoutEntryScalarWhereInput[]
  }

  export type WorkoutEntryUncheckedUpdateManyWithoutWorkout_planNestedInput = {
    create?: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput> | WorkoutEntryCreateWithoutWorkout_planInput[] | WorkoutEntryUncheckedCreateWithoutWorkout_planInput[]
    connectOrCreate?: WorkoutEntryCreateOrConnectWithoutWorkout_planInput | WorkoutEntryCreateOrConnectWithoutWorkout_planInput[]
    upsert?: WorkoutEntryUpsertWithWhereUniqueWithoutWorkout_planInput | WorkoutEntryUpsertWithWhereUniqueWithoutWorkout_planInput[]
    createMany?: WorkoutEntryCreateManyWorkout_planInputEnvelope
    set?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    disconnect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    delete?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    connect?: WorkoutEntryWhereUniqueInput | WorkoutEntryWhereUniqueInput[]
    update?: WorkoutEntryUpdateWithWhereUniqueWithoutWorkout_planInput | WorkoutEntryUpdateWithWhereUniqueWithoutWorkout_planInput[]
    updateMany?: WorkoutEntryUpdateManyWithWhereWithoutWorkout_planInput | WorkoutEntryUpdateManyWithWhereWithoutWorkout_planInput[]
    deleteMany?: WorkoutEntryScalarWhereInput | WorkoutEntryScalarWhereInput[]
  }

  export type WorkoutPlanCreateNestedOneWithoutWorkout_entriesInput = {
    create?: XOR<WorkoutPlanCreateWithoutWorkout_entriesInput, WorkoutPlanUncheckedCreateWithoutWorkout_entriesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutWorkout_entriesInput
    connect?: WorkoutPlanWhereUniqueInput
  }

  export type EnumDayFieldUpdateOperationsInput = {
    set?: $Enums.Day
  }

  export type WorkoutPlanUpdateOneRequiredWithoutWorkout_entriesNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutWorkout_entriesInput, WorkoutPlanUncheckedCreateWithoutWorkout_entriesInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutWorkout_entriesInput
    upsert?: WorkoutPlanUpsertWithoutWorkout_entriesInput
    connect?: WorkoutPlanWhereUniqueInput
    update?: XOR<XOR<WorkoutPlanUpdateToOneWithWhereWithoutWorkout_entriesInput, WorkoutPlanUpdateWithoutWorkout_entriesInput>, WorkoutPlanUncheckedUpdateWithoutWorkout_entriesInput>
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

  export type NestedEnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type NestedEnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type UserCreateWithoutCreated_usersInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_usersInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_usersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_usersInput, UserUncheckedCreateWithoutCreated_usersInput>
  }

  export type GymInstructorCreateWithoutInstructorInput = {
    id?: string
    assigned_at?: Date | string
    gym: GymCreateNestedOneWithoutInstructorsInput
  }

  export type GymInstructorUncheckedCreateWithoutInstructorInput = {
    id?: string
    gym_id: string
    assigned_at?: Date | string
  }

  export type GymInstructorCreateOrConnectWithoutInstructorInput = {
    where: GymInstructorWhereUniqueInput
    create: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type GymInstructorCreateManyInstructorInputEnvelope = {
    data: GymInstructorCreateManyInstructorInput | GymInstructorCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type GymCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutGymInput
    created_by: UserCreateNestedOneWithoutCreated_gymsInput
  }

  export type GymUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    created_by_id: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutOwnerInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutOwnerInput, GymUncheckedCreateWithoutOwnerInput>
  }

  export type GymCreateManyOwnerInputEnvelope = {
    data: GymCreateManyOwnerInput | GymCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutMemberInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_membershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutMemberInput = {
    id?: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
  }

  export type MembershipCreateOrConnectWithoutMemberInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutMemberInput, MembershipUncheckedCreateWithoutMemberInput>
  }

  export type MembershipCreateManyMemberInputEnvelope = {
    data: MembershipCreateManyMemberInput | MembershipCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutMemberInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_paymentsInput
  }

  export type PaymentUncheckedCreateWithoutMemberInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_by_id: string
    created_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput>
  }

  export type PaymentCreateManyMemberInputEnvelope = {
    data: PaymentCreateManyMemberInput | PaymentCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceLogCreateWithoutMemberInput = {
    checked_in_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_attendance_logsInput
    gym: GymCreateNestedOneWithoutAttendance_logsInput
  }

  export type AttendanceLogUncheckedCreateWithoutMemberInput = {
    id?: number
    gym_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type AttendanceLogCreateOrConnectWithoutMemberInput = {
    where: AttendanceLogWhereUniqueInput
    create: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput>
  }

  export type AttendanceLogCreateManyMemberInputEnvelope = {
    data: AttendanceLogCreateManyMemberInput | AttendanceLogCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type InstructorAssignmentCreateWithoutMemberInput = {
    assigned_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_instructor_assignmentsInput
    instructor: UserCreateNestedOneWithoutInstructor_assignmentsInput
  }

  export type InstructorAssignmentUncheckedCreateWithoutMemberInput = {
    id?: number
    instructor_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type InstructorAssignmentCreateOrConnectWithoutMemberInput = {
    where: InstructorAssignmentWhereUniqueInput
    create: XOR<InstructorAssignmentCreateWithoutMemberInput, InstructorAssignmentUncheckedCreateWithoutMemberInput>
  }

  export type InstructorAssignmentCreateManyMemberInputEnvelope = {
    data: InstructorAssignmentCreateManyMemberInput | InstructorAssignmentCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type InstructorAssignmentCreateWithoutInstructorInput = {
    assigned_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_instructor_assignmentsInput
    member: UserCreateNestedOneWithoutMember_assignmentsInput
  }

  export type InstructorAssignmentUncheckedCreateWithoutInstructorInput = {
    id?: number
    member_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type InstructorAssignmentCreateOrConnectWithoutInstructorInput = {
    where: InstructorAssignmentWhereUniqueInput
    create: XOR<InstructorAssignmentCreateWithoutInstructorInput, InstructorAssignmentUncheckedCreateWithoutInstructorInput>
  }

  export type InstructorAssignmentCreateManyInstructorInputEnvelope = {
    data: InstructorAssignmentCreateManyInstructorInput | InstructorAssignmentCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutPlanCreateWithoutMemberInput = {
    id?: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_workout_plansInput
    instructor: UserCreateNestedOneWithoutInstructor_workout_plansInput
    workout_entries?: WorkoutEntryCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanUncheckedCreateWithoutMemberInput = {
    id?: string
    instructor_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
    workout_entries?: WorkoutEntryUncheckedCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanCreateOrConnectWithoutMemberInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput>
  }

  export type WorkoutPlanCreateManyMemberInputEnvelope = {
    data: WorkoutPlanCreateManyMemberInput | WorkoutPlanCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutPlanCreateWithoutInstructorInput = {
    id?: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_workout_plansInput
    member: UserCreateNestedOneWithoutMember_workout_plansInput
    workout_entries?: WorkoutEntryCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanUncheckedCreateWithoutInstructorInput = {
    id?: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
    workout_entries?: WorkoutEntryUncheckedCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanCreateOrConnectWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput>
  }

  export type WorkoutPlanCreateManyInstructorInputEnvelope = {
    data: WorkoutPlanCreateManyInstructorInput | WorkoutPlanCreateManyInstructorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreated_byInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_byInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_byInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput>
  }

  export type UserCreateManyCreated_byInputEnvelope = {
    data: UserCreateManyCreated_byInput | UserCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type GymCreateWithoutCreated_byInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutGymsInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutGymInput
  }

  export type GymUncheckedCreateWithoutCreated_byInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutCreated_byInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput>
  }

  export type GymCreateManyCreated_byInputEnvelope = {
    data: GymCreateManyCreated_byInput | GymCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutCreated_byInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    member: UserCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutCreated_byInput = {
    id?: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
  }

  export type MembershipCreateOrConnectWithoutCreated_byInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput>
  }

  export type MembershipCreateManyCreated_byInputEnvelope = {
    data: MembershipCreateManyCreated_byInput | MembershipCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutCreated_byInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    memberships?: MembershipCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutCreated_byInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutCreated_byInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput>
  }

  export type PlanCreateManyCreated_byInputEnvelope = {
    data: PlanCreateManyCreated_byInput | PlanCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCreated_byInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
    member: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCreated_byInput = {
    id?: string
    member_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCreated_byInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput>
  }

  export type PaymentCreateManyCreated_byInputEnvelope = {
    data: PaymentCreateManyCreated_byInput | PaymentCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceLogCreateWithoutCreated_byInput = {
    checked_in_at?: Date | string
    member: UserCreateNestedOneWithoutAttendance_logsInput
    gym: GymCreateNestedOneWithoutAttendance_logsInput
  }

  export type AttendanceLogUncheckedCreateWithoutCreated_byInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
  }

  export type AttendanceLogCreateOrConnectWithoutCreated_byInput = {
    where: AttendanceLogWhereUniqueInput
    create: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput>
  }

  export type AttendanceLogCreateManyCreated_byInputEnvelope = {
    data: AttendanceLogCreateManyCreated_byInput | AttendanceLogCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type InstructorAssignmentCreateWithoutCreated_byInput = {
    assigned_at?: Date | string
    instructor: UserCreateNestedOneWithoutInstructor_assignmentsInput
    member: UserCreateNestedOneWithoutMember_assignmentsInput
  }

  export type InstructorAssignmentUncheckedCreateWithoutCreated_byInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
  }

  export type InstructorAssignmentCreateOrConnectWithoutCreated_byInput = {
    where: InstructorAssignmentWhereUniqueInput
    create: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput>
  }

  export type InstructorAssignmentCreateManyCreated_byInputEnvelope = {
    data: InstructorAssignmentCreateManyCreated_byInput | InstructorAssignmentCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutPlanCreateWithoutCreated_byInput = {
    id?: string
    title: string
    notes?: string | null
    created_at?: Date | string
    instructor: UserCreateNestedOneWithoutInstructor_workout_plansInput
    member: UserCreateNestedOneWithoutMember_workout_plansInput
    workout_entries?: WorkoutEntryCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanUncheckedCreateWithoutCreated_byInput = {
    id?: string
    instructor_id: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    workout_entries?: WorkoutEntryUncheckedCreateNestedManyWithoutWorkout_planInput
  }

  export type WorkoutPlanCreateOrConnectWithoutCreated_byInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput>
  }

  export type WorkoutPlanCreateManyCreated_byInputEnvelope = {
    data: WorkoutPlanCreateManyCreated_byInput | WorkoutPlanCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_usersInput = {
    update: XOR<UserUpdateWithoutCreated_usersInput, UserUncheckedUpdateWithoutCreated_usersInput>
    create: XOR<UserCreateWithoutCreated_usersInput, UserUncheckedCreateWithoutCreated_usersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_usersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_usersInput, UserUncheckedUpdateWithoutCreated_usersInput>
  }

  export type UserUpdateWithoutCreated_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type GymInstructorUpsertWithWhereUniqueWithoutInstructorInput = {
    where: GymInstructorWhereUniqueInput
    update: XOR<GymInstructorUpdateWithoutInstructorInput, GymInstructorUncheckedUpdateWithoutInstructorInput>
    create: XOR<GymInstructorCreateWithoutInstructorInput, GymInstructorUncheckedCreateWithoutInstructorInput>
  }

  export type GymInstructorUpdateWithWhereUniqueWithoutInstructorInput = {
    where: GymInstructorWhereUniqueInput
    data: XOR<GymInstructorUpdateWithoutInstructorInput, GymInstructorUncheckedUpdateWithoutInstructorInput>
  }

  export type GymInstructorUpdateManyWithWhereWithoutInstructorInput = {
    where: GymInstructorScalarWhereInput
    data: XOR<GymInstructorUpdateManyMutationInput, GymInstructorUncheckedUpdateManyWithoutInstructorInput>
  }

  export type GymInstructorScalarWhereInput = {
    AND?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
    OR?: GymInstructorScalarWhereInput[]
    NOT?: GymInstructorScalarWhereInput | GymInstructorScalarWhereInput[]
    id?: StringFilter<"GymInstructor"> | string
    gym_id?: StringFilter<"GymInstructor"> | string
    user_id?: StringFilter<"GymInstructor"> | string
    assigned_at?: DateTimeFilter<"GymInstructor"> | Date | string
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
    created_by_id?: StringFilter<"Gym"> | string
    created_at?: DateTimeFilter<"Gym"> | Date | string
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
    created_at?: DateTimeFilter<"Membership"> | Date | string
    created_by_id?: StringFilter<"Membership"> | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMemberInput, PaymentUncheckedUpdateWithoutMemberInput>
    create: XOR<PaymentCreateWithoutMemberInput, PaymentUncheckedCreateWithoutMemberInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMemberInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMemberInput, PaymentUncheckedUpdateWithoutMemberInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMemberInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMemberInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    member_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    payment_method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    created_by_id?: StringFilter<"Payment"> | string
    created_at?: DateTimeFilter<"Payment"> | Date | string
  }

  export type AttendanceLogUpsertWithWhereUniqueWithoutMemberInput = {
    where: AttendanceLogWhereUniqueInput
    update: XOR<AttendanceLogUpdateWithoutMemberInput, AttendanceLogUncheckedUpdateWithoutMemberInput>
    create: XOR<AttendanceLogCreateWithoutMemberInput, AttendanceLogUncheckedCreateWithoutMemberInput>
  }

  export type AttendanceLogUpdateWithWhereUniqueWithoutMemberInput = {
    where: AttendanceLogWhereUniqueInput
    data: XOR<AttendanceLogUpdateWithoutMemberInput, AttendanceLogUncheckedUpdateWithoutMemberInput>
  }

  export type AttendanceLogUpdateManyWithWhereWithoutMemberInput = {
    where: AttendanceLogScalarWhereInput
    data: XOR<AttendanceLogUpdateManyMutationInput, AttendanceLogUncheckedUpdateManyWithoutMemberInput>
  }

  export type AttendanceLogScalarWhereInput = {
    AND?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
    OR?: AttendanceLogScalarWhereInput[]
    NOT?: AttendanceLogScalarWhereInput | AttendanceLogScalarWhereInput[]
    id?: IntFilter<"AttendanceLog"> | number
    member_id?: StringFilter<"AttendanceLog"> | string
    gym_id?: StringFilter<"AttendanceLog"> | string
    created_by_id?: StringFilter<"AttendanceLog"> | string
    checked_in_at?: DateTimeFilter<"AttendanceLog"> | Date | string
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
    created_by_id?: StringFilter<"InstructorAssignment"> | string
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

  export type WorkoutPlanUpsertWithWhereUniqueWithoutMemberInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutMemberInput, WorkoutPlanUncheckedUpdateWithoutMemberInput>
    create: XOR<WorkoutPlanCreateWithoutMemberInput, WorkoutPlanUncheckedCreateWithoutMemberInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutMemberInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutMemberInput, WorkoutPlanUncheckedUpdateWithoutMemberInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutMemberInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutMemberInput>
  }

  export type WorkoutPlanScalarWhereInput = {
    AND?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    OR?: WorkoutPlanScalarWhereInput[]
    NOT?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    instructor_id?: StringFilter<"WorkoutPlan"> | string
    member_id?: StringFilter<"WorkoutPlan"> | string
    title?: StringFilter<"WorkoutPlan"> | string
    notes?: StringNullableFilter<"WorkoutPlan"> | string | null
    created_at?: DateTimeFilter<"WorkoutPlan"> | Date | string
    created_by_id?: StringFilter<"WorkoutPlan"> | string
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutInstructorInput, WorkoutPlanUncheckedUpdateWithoutInstructorInput>
    create: XOR<WorkoutPlanCreateWithoutInstructorInput, WorkoutPlanUncheckedCreateWithoutInstructorInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutInstructorInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutInstructorInput, WorkoutPlanUncheckedUpdateWithoutInstructorInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutInstructorInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutInstructorInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreated_byInput, UserUncheckedUpdateWithoutCreated_byInput>
    create: XOR<UserCreateWithoutCreated_byInput, UserUncheckedCreateWithoutCreated_byInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreated_byInput, UserUncheckedUpdateWithoutCreated_byInput>
  }

  export type UserUpdateManyWithWhereWithoutCreated_byInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    middlename?: StringNullableFilter<"User"> | string | null
    lastname?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    created_by_id?: StringNullableFilter<"User"> | string | null
  }

  export type GymUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: GymWhereUniqueInput
    update: XOR<GymUpdateWithoutCreated_byInput, GymUncheckedUpdateWithoutCreated_byInput>
    create: XOR<GymCreateWithoutCreated_byInput, GymUncheckedCreateWithoutCreated_byInput>
  }

  export type GymUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: GymWhereUniqueInput
    data: XOR<GymUpdateWithoutCreated_byInput, GymUncheckedUpdateWithoutCreated_byInput>
  }

  export type GymUpdateManyWithWhereWithoutCreated_byInput = {
    where: GymScalarWhereInput
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type MembershipUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutCreated_byInput, MembershipUncheckedUpdateWithoutCreated_byInput>
    create: XOR<MembershipCreateWithoutCreated_byInput, MembershipUncheckedCreateWithoutCreated_byInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutCreated_byInput, MembershipUncheckedUpdateWithoutCreated_byInput>
  }

  export type MembershipUpdateManyWithWhereWithoutCreated_byInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type PlanUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutCreated_byInput, PlanUncheckedUpdateWithoutCreated_byInput>
    create: XOR<PlanCreateWithoutCreated_byInput, PlanUncheckedCreateWithoutCreated_byInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutCreated_byInput, PlanUncheckedUpdateWithoutCreated_byInput>
  }

  export type PlanUpdateManyWithWhereWithoutCreated_byInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: StringFilter<"Plan"> | string
    num_of_days?: IntFilter<"Plan"> | number
    num_of_sessions?: IntFilter<"Plan"> | number
    is_active?: BoolFilter<"Plan"> | boolean
    is_default?: BoolFilter<"Plan"> | boolean
    created_by_id?: StringFilter<"Plan"> | string
    created_at?: DateTimeFilter<"Plan"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCreated_byInput, PaymentUncheckedUpdateWithoutCreated_byInput>
    create: XOR<PaymentCreateWithoutCreated_byInput, PaymentUncheckedCreateWithoutCreated_byInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCreated_byInput, PaymentUncheckedUpdateWithoutCreated_byInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCreated_byInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type AttendanceLogUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: AttendanceLogWhereUniqueInput
    update: XOR<AttendanceLogUpdateWithoutCreated_byInput, AttendanceLogUncheckedUpdateWithoutCreated_byInput>
    create: XOR<AttendanceLogCreateWithoutCreated_byInput, AttendanceLogUncheckedCreateWithoutCreated_byInput>
  }

  export type AttendanceLogUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: AttendanceLogWhereUniqueInput
    data: XOR<AttendanceLogUpdateWithoutCreated_byInput, AttendanceLogUncheckedUpdateWithoutCreated_byInput>
  }

  export type AttendanceLogUpdateManyWithWhereWithoutCreated_byInput = {
    where: AttendanceLogScalarWhereInput
    data: XOR<AttendanceLogUpdateManyMutationInput, AttendanceLogUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type InstructorAssignmentUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: InstructorAssignmentWhereUniqueInput
    update: XOR<InstructorAssignmentUpdateWithoutCreated_byInput, InstructorAssignmentUncheckedUpdateWithoutCreated_byInput>
    create: XOR<InstructorAssignmentCreateWithoutCreated_byInput, InstructorAssignmentUncheckedCreateWithoutCreated_byInput>
  }

  export type InstructorAssignmentUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: InstructorAssignmentWhereUniqueInput
    data: XOR<InstructorAssignmentUpdateWithoutCreated_byInput, InstructorAssignmentUncheckedUpdateWithoutCreated_byInput>
  }

  export type InstructorAssignmentUpdateManyWithWhereWithoutCreated_byInput = {
    where: InstructorAssignmentScalarWhereInput
    data: XOR<InstructorAssignmentUpdateManyMutationInput, InstructorAssignmentUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutCreated_byInput, WorkoutPlanUncheckedUpdateWithoutCreated_byInput>
    create: XOR<WorkoutPlanCreateWithoutCreated_byInput, WorkoutPlanUncheckedCreateWithoutCreated_byInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutCreated_byInput, WorkoutPlanUncheckedUpdateWithoutCreated_byInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutCreated_byInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type UserCreateWithoutGymsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutGymsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutGymsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
  }

  export type MembershipCreateWithoutGymInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_membershipsInput
    member: UserCreateNestedOneWithoutMembershipsInput
    plan: PlanCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutGymInput = {
    id?: string
    member_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
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
    assigned_at?: Date | string
    instructor: UserCreateNestedOneWithoutGym_instructor_atInput
  }

  export type GymInstructorUncheckedCreateWithoutGymInput = {
    id?: string
    user_id: string
    assigned_at?: Date | string
  }

  export type GymInstructorCreateOrConnectWithoutGymInput = {
    where: GymInstructorWhereUniqueInput
    create: XOR<GymInstructorCreateWithoutGymInput, GymInstructorUncheckedCreateWithoutGymInput>
  }

  export type GymInstructorCreateManyGymInputEnvelope = {
    data: GymInstructorCreateManyGymInput | GymInstructorCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceLogCreateWithoutGymInput = {
    checked_in_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_attendance_logsInput
    member: UserCreateNestedOneWithoutAttendance_logsInput
  }

  export type AttendanceLogUncheckedCreateWithoutGymInput = {
    id?: number
    member_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type AttendanceLogCreateOrConnectWithoutGymInput = {
    where: AttendanceLogWhereUniqueInput
    create: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput>
  }

  export type AttendanceLogCreateManyGymInputEnvelope = {
    data: AttendanceLogCreateManyGymInput | AttendanceLogCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreated_gymsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_gymsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_gymsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_gymsInput, UserUncheckedCreateWithoutCreated_gymsInput>
  }

  export type UserUpsertWithoutGymsInput = {
    update: XOR<UserUpdateWithoutGymsInput, UserUncheckedUpdateWithoutGymsInput>
    create: XOR<UserCreateWithoutGymsInput, UserUncheckedCreateWithoutGymsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGymsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGymsInput, UserUncheckedUpdateWithoutGymsInput>
  }

  export type UserUpdateWithoutGymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutGymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
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

  export type AttendanceLogUpsertWithWhereUniqueWithoutGymInput = {
    where: AttendanceLogWhereUniqueInput
    update: XOR<AttendanceLogUpdateWithoutGymInput, AttendanceLogUncheckedUpdateWithoutGymInput>
    create: XOR<AttendanceLogCreateWithoutGymInput, AttendanceLogUncheckedCreateWithoutGymInput>
  }

  export type AttendanceLogUpdateWithWhereUniqueWithoutGymInput = {
    where: AttendanceLogWhereUniqueInput
    data: XOR<AttendanceLogUpdateWithoutGymInput, AttendanceLogUncheckedUpdateWithoutGymInput>
  }

  export type AttendanceLogUpdateManyWithWhereWithoutGymInput = {
    where: AttendanceLogScalarWhereInput
    data: XOR<AttendanceLogUpdateManyMutationInput, AttendanceLogUncheckedUpdateManyWithoutGymInput>
  }

  export type UserUpsertWithoutCreated_gymsInput = {
    update: XOR<UserUpdateWithoutCreated_gymsInput, UserUncheckedUpdateWithoutCreated_gymsInput>
    create: XOR<UserCreateWithoutCreated_gymsInput, UserUncheckedCreateWithoutCreated_gymsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_gymsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_gymsInput, UserUncheckedUpdateWithoutCreated_gymsInput>
  }

  export type UserUpdateWithoutCreated_gymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_gymsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type GymCreateWithoutInstructorsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutGymsInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutGymInput
    created_by: UserCreateNestedOneWithoutCreated_gymsInput
  }

  export type GymUncheckedCreateWithoutInstructorsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_by_id: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutInstructorsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutInstructorsInput, GymUncheckedCreateWithoutInstructorsInput>
  }

  export type UserCreateWithoutGym_instructor_atInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutGym_instructor_atInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutGym_instructor_atInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGym_instructor_atInput, UserUncheckedCreateWithoutGym_instructor_atInput>
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
    owner?: UserUpdateOneRequiredWithoutGymsNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutGymNestedInput
    created_by?: UserUpdateOneRequiredWithoutCreated_gymsNestedInput
  }

  export type GymUncheckedUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutGymNestedInput
  }

  export type UserUpsertWithoutGym_instructor_atInput = {
    update: XOR<UserUpdateWithoutGym_instructor_atInput, UserUncheckedUpdateWithoutGym_instructor_atInput>
    create: XOR<UserCreateWithoutGym_instructor_atInput, UserUncheckedCreateWithoutGym_instructor_atInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGym_instructor_atInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGym_instructor_atInput, UserUncheckedUpdateWithoutGym_instructor_atInput>
  }

  export type UserUpdateWithoutGym_instructor_atInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutGym_instructor_atInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserCreateWithoutCreated_membershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_membershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_membershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_membershipsInput, UserUncheckedCreateWithoutCreated_membershipsInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type GymCreateWithoutMembershipsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutGymsInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutGymInput
    created_by: UserCreateNestedOneWithoutCreated_gymsInput
  }

  export type GymUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_by_id: string
    created_at?: Date | string
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutGymInput
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
    created_by: UserCreateNestedOneWithoutCreated_plansInput
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
    created_by_id: string
    created_at?: Date | string
  }

  export type PlanCreateOrConnectWithoutMembershipsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMembershipsInput, PlanUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutCreated_membershipsInput = {
    update: XOR<UserUpdateWithoutCreated_membershipsInput, UserUncheckedUpdateWithoutCreated_membershipsInput>
    create: XOR<UserCreateWithoutCreated_membershipsInput, UserUncheckedCreateWithoutCreated_membershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_membershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_membershipsInput, UserUncheckedUpdateWithoutCreated_membershipsInput>
  }

  export type UserUpdateWithoutCreated_membershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_membershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
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
    owner?: UserUpdateOneRequiredWithoutGymsNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutGymNestedInput
    created_by?: UserUpdateOneRequiredWithoutCreated_gymsNestedInput
  }

  export type GymUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutGymNestedInput
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
    created_by?: UserUpdateOneRequiredWithoutCreated_plansNestedInput
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
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCreated_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_plansInput, UserUncheckedCreateWithoutCreated_plansInput>
  }

  export type MembershipCreateWithoutPlanInput = {
    id?: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_membershipsInput
    member: UserCreateNestedOneWithoutMembershipsInput
    gym: GymCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutPlanInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
  }

  export type MembershipCreateOrConnectWithoutPlanInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutPlanInput, MembershipUncheckedCreateWithoutPlanInput>
  }

  export type MembershipCreateManyPlanInputEnvelope = {
    data: MembershipCreateManyPlanInput | MembershipCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_plansInput = {
    update: XOR<UserUpdateWithoutCreated_plansInput, UserUncheckedUpdateWithoutCreated_plansInput>
    create: XOR<UserCreateWithoutCreated_plansInput, UserUncheckedCreateWithoutCreated_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_plansInput, UserUncheckedUpdateWithoutCreated_plansInput>
  }

  export type UserUpdateWithoutCreated_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
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

  export type UserCreateWithoutCreated_paymentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_paymentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_paymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_paymentsInput, UserUncheckedCreateWithoutCreated_paymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutCreated_paymentsInput = {
    update: XOR<UserUpdateWithoutCreated_paymentsInput, UserUncheckedUpdateWithoutCreated_paymentsInput>
    create: XOR<UserCreateWithoutCreated_paymentsInput, UserUncheckedCreateWithoutCreated_paymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_paymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_paymentsInput, UserUncheckedUpdateWithoutCreated_paymentsInput>
  }

  export type UserUpdateWithoutCreated_paymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_paymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserCreateWithoutCreated_attendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_attendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_attendance_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_attendance_logsInput, UserUncheckedCreateWithoutCreated_attendance_logsInput>
  }

  export type UserCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutAttendance_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendance_logsInput, UserUncheckedCreateWithoutAttendance_logsInput>
  }

  export type GymCreateWithoutAttendance_logsInput = {
    id?: string
    name: string
    location: string
    created_at?: Date | string
    owner: UserCreateNestedOneWithoutGymsInput
    memberships?: MembershipCreateNestedManyWithoutGymInput
    instructors?: GymInstructorCreateNestedManyWithoutGymInput
    created_by: UserCreateNestedOneWithoutCreated_gymsInput
  }

  export type GymUncheckedCreateWithoutAttendance_logsInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_by_id: string
    created_at?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutGymInput
    instructors?: GymInstructorUncheckedCreateNestedManyWithoutGymInput
  }

  export type GymCreateOrConnectWithoutAttendance_logsInput = {
    where: GymWhereUniqueInput
    create: XOR<GymCreateWithoutAttendance_logsInput, GymUncheckedCreateWithoutAttendance_logsInput>
  }

  export type UserUpsertWithoutCreated_attendance_logsInput = {
    update: XOR<UserUpdateWithoutCreated_attendance_logsInput, UserUncheckedUpdateWithoutCreated_attendance_logsInput>
    create: XOR<UserCreateWithoutCreated_attendance_logsInput, UserUncheckedCreateWithoutCreated_attendance_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_attendance_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_attendance_logsInput, UserUncheckedUpdateWithoutCreated_attendance_logsInput>
  }

  export type UserUpdateWithoutCreated_attendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_attendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
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
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type GymUpsertWithoutAttendance_logsInput = {
    update: XOR<GymUpdateWithoutAttendance_logsInput, GymUncheckedUpdateWithoutAttendance_logsInput>
    create: XOR<GymCreateWithoutAttendance_logsInput, GymUncheckedCreateWithoutAttendance_logsInput>
    where?: GymWhereInput
  }

  export type GymUpdateToOneWithWhereWithoutAttendance_logsInput = {
    where?: GymWhereInput
    data: XOR<GymUpdateWithoutAttendance_logsInput, GymUncheckedUpdateWithoutAttendance_logsInput>
  }

  export type GymUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGymsNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    created_by?: UserUpdateOneRequiredWithoutCreated_gymsNestedInput
  }

  export type GymUncheckedUpdateWithoutAttendance_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
  }

  export type UserCreateWithoutCreated_instructor_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_instructor_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_instructor_assignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_instructor_assignmentsInput, UserUncheckedCreateWithoutCreated_instructor_assignmentsInput>
  }

  export type UserCreateWithoutInstructor_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutInstructor_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutInstructor_assignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructor_assignmentsInput, UserUncheckedCreateWithoutInstructor_assignmentsInput>
  }

  export type UserCreateWithoutMember_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutMember_assignmentsInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutMember_assignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMember_assignmentsInput, UserUncheckedCreateWithoutMember_assignmentsInput>
  }

  export type UserUpsertWithoutCreated_instructor_assignmentsInput = {
    update: XOR<UserUpdateWithoutCreated_instructor_assignmentsInput, UserUncheckedUpdateWithoutCreated_instructor_assignmentsInput>
    create: XOR<UserCreateWithoutCreated_instructor_assignmentsInput, UserUncheckedCreateWithoutCreated_instructor_assignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_instructor_assignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_instructor_assignmentsInput, UserUncheckedUpdateWithoutCreated_instructor_assignmentsInput>
  }

  export type UserUpdateWithoutCreated_instructor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_instructor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutInstructor_assignmentsInput = {
    update: XOR<UserUpdateWithoutInstructor_assignmentsInput, UserUncheckedUpdateWithoutInstructor_assignmentsInput>
    create: XOR<UserCreateWithoutInstructor_assignmentsInput, UserUncheckedCreateWithoutInstructor_assignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructor_assignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructor_assignmentsInput, UserUncheckedUpdateWithoutInstructor_assignmentsInput>
  }

  export type UserUpdateWithoutInstructor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutMember_assignmentsInput = {
    update: XOR<UserUpdateWithoutMember_assignmentsInput, UserUncheckedUpdateWithoutMember_assignmentsInput>
    create: XOR<UserCreateWithoutMember_assignmentsInput, UserUncheckedCreateWithoutMember_assignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMember_assignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMember_assignmentsInput, UserUncheckedUpdateWithoutMember_assignmentsInput>
  }

  export type UserUpdateWithoutMember_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutMember_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserCreateWithoutCreated_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutCreated_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutCreated_workout_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_workout_plansInput, UserUncheckedCreateWithoutCreated_workout_plansInput>
  }

  export type UserCreateWithoutInstructor_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanCreateNestedManyWithoutMemberInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutInstructor_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    member_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutMemberInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutInstructor_workout_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructor_workout_plansInput, UserUncheckedCreateWithoutInstructor_workout_plansInput>
  }

  export type UserCreateWithoutMember_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by?: UserCreateNestedOneWithoutCreated_usersInput
    gym_instructor_at?: GymInstructorCreateNestedManyWithoutInstructorInput
    gyms?: GymCreateNestedManyWithoutOwnerInput
    memberships?: MembershipCreateNestedManyWithoutMemberInput
    payments?: PaymentCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutInstructorInput
    instructor_workout_plans?: WorkoutPlanCreateNestedManyWithoutInstructorInput
    created_users?: UserCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanCreateNestedManyWithoutCreated_byInput
  }

  export type UserUncheckedCreateWithoutMember_workout_plansInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    created_by_id?: string | null
    gym_instructor_at?: GymInstructorUncheckedCreateNestedManyWithoutInstructorInput
    gyms?: GymUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutMemberInput
    payments?: PaymentUncheckedCreateNestedManyWithoutMemberInput
    attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutMemberInput
    member_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutMemberInput
    instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutInstructorInput
    instructor_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutInstructorInput
    created_users?: UserUncheckedCreateNestedManyWithoutCreated_byInput
    created_gyms?: GymUncheckedCreateNestedManyWithoutCreated_byInput
    created_memberships?: MembershipUncheckedCreateNestedManyWithoutCreated_byInput
    created_plans?: PlanUncheckedCreateNestedManyWithoutCreated_byInput
    created_payments?: PaymentUncheckedCreateNestedManyWithoutCreated_byInput
    created_attendance_logs?: AttendanceLogUncheckedCreateNestedManyWithoutCreated_byInput
    created_instructor_assignments?: InstructorAssignmentUncheckedCreateNestedManyWithoutCreated_byInput
    created_workout_plans?: WorkoutPlanUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type UserCreateOrConnectWithoutMember_workout_plansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMember_workout_plansInput, UserUncheckedCreateWithoutMember_workout_plansInput>
  }

  export type WorkoutEntryCreateWithoutWorkout_planInput = {
    id?: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
  }

  export type WorkoutEntryUncheckedCreateWithoutWorkout_planInput = {
    id?: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
  }

  export type WorkoutEntryCreateOrConnectWithoutWorkout_planInput = {
    where: WorkoutEntryWhereUniqueInput
    create: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput>
  }

  export type WorkoutEntryCreateManyWorkout_planInputEnvelope = {
    data: WorkoutEntryCreateManyWorkout_planInput | WorkoutEntryCreateManyWorkout_planInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreated_workout_plansInput = {
    update: XOR<UserUpdateWithoutCreated_workout_plansInput, UserUncheckedUpdateWithoutCreated_workout_plansInput>
    create: XOR<UserCreateWithoutCreated_workout_plansInput, UserUncheckedCreateWithoutCreated_workout_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_workout_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_workout_plansInput, UserUncheckedUpdateWithoutCreated_workout_plansInput>
  }

  export type UserUpdateWithoutCreated_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutInstructor_workout_plansInput = {
    update: XOR<UserUpdateWithoutInstructor_workout_plansInput, UserUncheckedUpdateWithoutInstructor_workout_plansInput>
    create: XOR<UserCreateWithoutInstructor_workout_plansInput, UserUncheckedCreateWithoutInstructor_workout_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructor_workout_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructor_workout_plansInput, UserUncheckedUpdateWithoutInstructor_workout_plansInput>
  }

  export type UserUpdateWithoutInstructor_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructor_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUpsertWithoutMember_workout_plansInput = {
    update: XOR<UserUpdateWithoutMember_workout_plansInput, UserUncheckedUpdateWithoutMember_workout_plansInput>
    create: XOR<UserCreateWithoutMember_workout_plansInput, UserUncheckedCreateWithoutMember_workout_plansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMember_workout_plansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMember_workout_plansInput, UserUncheckedUpdateWithoutMember_workout_plansInput>
  }

  export type UserUpdateWithoutMember_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneWithoutCreated_usersNestedInput
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutMember_workout_plansInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: NullableStringFieldUpdateOperationsInput | string | null
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type WorkoutEntryUpsertWithWhereUniqueWithoutWorkout_planInput = {
    where: WorkoutEntryWhereUniqueInput
    update: XOR<WorkoutEntryUpdateWithoutWorkout_planInput, WorkoutEntryUncheckedUpdateWithoutWorkout_planInput>
    create: XOR<WorkoutEntryCreateWithoutWorkout_planInput, WorkoutEntryUncheckedCreateWithoutWorkout_planInput>
  }

  export type WorkoutEntryUpdateWithWhereUniqueWithoutWorkout_planInput = {
    where: WorkoutEntryWhereUniqueInput
    data: XOR<WorkoutEntryUpdateWithoutWorkout_planInput, WorkoutEntryUncheckedUpdateWithoutWorkout_planInput>
  }

  export type WorkoutEntryUpdateManyWithWhereWithoutWorkout_planInput = {
    where: WorkoutEntryScalarWhereInput
    data: XOR<WorkoutEntryUpdateManyMutationInput, WorkoutEntryUncheckedUpdateManyWithoutWorkout_planInput>
  }

  export type WorkoutEntryScalarWhereInput = {
    AND?: WorkoutEntryScalarWhereInput | WorkoutEntryScalarWhereInput[]
    OR?: WorkoutEntryScalarWhereInput[]
    NOT?: WorkoutEntryScalarWhereInput | WorkoutEntryScalarWhereInput[]
    id?: StringFilter<"WorkoutEntry"> | string
    workout_plan_id?: StringFilter<"WorkoutEntry"> | string
    exercise_name?: StringFilter<"WorkoutEntry"> | string
    sets?: IntFilter<"WorkoutEntry"> | number
    reps?: IntFilter<"WorkoutEntry"> | number
    weight?: FloatFilter<"WorkoutEntry"> | number
    day?: EnumDayFilter<"WorkoutEntry"> | $Enums.Day
    notes?: StringNullableFilter<"WorkoutEntry"> | string | null
    created_at?: DateTimeFilter<"WorkoutEntry"> | Date | string
  }

  export type WorkoutPlanCreateWithoutWorkout_entriesInput = {
    id?: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by: UserCreateNestedOneWithoutCreated_workout_plansInput
    instructor: UserCreateNestedOneWithoutInstructor_workout_plansInput
    member: UserCreateNestedOneWithoutMember_workout_plansInput
  }

  export type WorkoutPlanUncheckedCreateWithoutWorkout_entriesInput = {
    id?: string
    instructor_id: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
  }

  export type WorkoutPlanCreateOrConnectWithoutWorkout_entriesInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutWorkout_entriesInput, WorkoutPlanUncheckedCreateWithoutWorkout_entriesInput>
  }

  export type WorkoutPlanUpsertWithoutWorkout_entriesInput = {
    update: XOR<WorkoutPlanUpdateWithoutWorkout_entriesInput, WorkoutPlanUncheckedUpdateWithoutWorkout_entriesInput>
    create: XOR<WorkoutPlanCreateWithoutWorkout_entriesInput, WorkoutPlanUncheckedCreateWithoutWorkout_entriesInput>
    where?: WorkoutPlanWhereInput
  }

  export type WorkoutPlanUpdateToOneWithWhereWithoutWorkout_entriesInput = {
    where?: WorkoutPlanWhereInput
    data: XOR<WorkoutPlanUpdateWithoutWorkout_entriesInput, WorkoutPlanUncheckedUpdateWithoutWorkout_entriesInput>
  }

  export type WorkoutPlanUpdateWithoutWorkout_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_workout_plansNestedInput
    instructor?: UserUpdateOneRequiredWithoutInstructor_workout_plansNestedInput
    member?: UserUpdateOneRequiredWithoutMember_workout_plansNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutWorkout_entriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type GymInstructorCreateManyInstructorInput = {
    id?: string
    gym_id: string
    assigned_at?: Date | string
  }

  export type GymCreateManyOwnerInput = {
    id?: string
    name: string
    location: string
    created_by_id: string
    created_at?: Date | string
  }

  export type MembershipCreateManyMemberInput = {
    id?: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
  }

  export type PaymentCreateManyMemberInput = {
    id?: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_by_id: string
    created_at?: Date | string
  }

  export type AttendanceLogCreateManyMemberInput = {
    id?: number
    gym_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type InstructorAssignmentCreateManyMemberInput = {
    id?: number
    instructor_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type InstructorAssignmentCreateManyInstructorInput = {
    id?: number
    member_id: string
    assigned_at?: Date | string
    created_by_id: string
  }

  export type WorkoutPlanCreateManyMemberInput = {
    id?: string
    instructor_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
  }

  export type WorkoutPlanCreateManyInstructorInput = {
    id?: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
    created_by_id: string
  }

  export type UserCreateManyCreated_byInput = {
    id?: string
    firstname: string
    middlename?: string | null
    lastname: string
    email?: string | null
    password_hash: string
    role?: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
  }

  export type GymCreateManyCreated_byInput = {
    id?: string
    name: string
    location: string
    owner_id: string
    created_at?: Date | string
  }

  export type MembershipCreateManyCreated_byInput = {
    id?: string
    member_id: string
    gym_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
  }

  export type PlanCreateManyCreated_byInput = {
    id?: string
    name: string
    description?: string | null
    price: string
    num_of_days: number
    num_of_sessions: number
    is_active?: boolean
    is_default?: boolean
    created_at?: Date | string
  }

  export type PaymentCreateManyCreated_byInput = {
    id?: string
    member_id: string
    amount: number
    payment_method?: $Enums.PaymentMethod
    paid_at?: Date | string
    created_at?: Date | string
  }

  export type AttendanceLogCreateManyCreated_byInput = {
    id?: number
    member_id: string
    gym_id: string
    checked_in_at?: Date | string
  }

  export type InstructorAssignmentCreateManyCreated_byInput = {
    id?: number
    instructor_id: string
    member_id: string
    assigned_at?: Date | string
  }

  export type WorkoutPlanCreateManyCreated_byInput = {
    id?: string
    instructor_id: string
    member_id: string
    title: string
    notes?: string | null
    created_at?: Date | string
  }

  export type GymInstructorUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym?: GymUpdateOneRequiredWithoutInstructorsNestedInput
  }

  export type GymInstructorUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymInstructorUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutGymNestedInput
    created_by?: UserUpdateOneRequiredWithoutCreated_gymsNestedInput
  }

  export type GymUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_membershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_paymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUpdateWithoutMemberInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_attendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type AttendanceLogUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    gym_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorAssignmentUpdateWithoutMemberInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_instructor_assignmentsNestedInput
    instructor?: UserUpdateOneRequiredWithoutInstructor_assignmentsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUpdateWithoutInstructorInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_instructor_assignmentsNestedInput
    member?: UserUpdateOneRequiredWithoutMember_assignmentsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutInstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutPlanUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_workout_plansNestedInput
    instructor?: UserUpdateOneRequiredWithoutInstructor_workout_plansNestedInput
    workout_entries?: WorkoutEntryUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    workout_entries?: WorkoutEntryUncheckedUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutPlanUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_workout_plansNestedInput
    member?: UserUpdateOneRequiredWithoutMember_workout_plansNestedInput
    workout_entries?: WorkoutEntryUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    workout_entries?: WorkoutEntryUncheckedUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym_instructor_at?: GymInstructorUpdateManyWithoutInstructorNestedInput
    gyms?: GymUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUpdateManyWithoutMemberNestedInput
    payments?: PaymentUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUpdateManyWithoutInstructorNestedInput
    created_users?: UserUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gym_instructor_at?: GymInstructorUncheckedUpdateManyWithoutInstructorNestedInput
    gyms?: GymUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutMemberNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutMemberNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutMemberNestedInput
    member_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutMemberNestedInput
    instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutInstructorNestedInput
    member_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutMemberNestedInput
    instructor_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutInstructorNestedInput
    created_users?: UserUncheckedUpdateManyWithoutCreated_byNestedInput
    created_gyms?: GymUncheckedUpdateManyWithoutCreated_byNestedInput
    created_memberships?: MembershipUncheckedUpdateManyWithoutCreated_byNestedInput
    created_plans?: PlanUncheckedUpdateManyWithoutCreated_byNestedInput
    created_payments?: PaymentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutCreated_byNestedInput
    created_instructor_assignments?: InstructorAssignmentUncheckedUpdateManyWithoutCreated_byNestedInput
    created_workout_plans?: WorkoutPlanUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutGymsNestedInput
    memberships?: MembershipUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutGymNestedInput
    instructors?: GymInstructorUncheckedUpdateManyWithoutGymNestedInput
    attendance_logs?: AttendanceLogUncheckedUpdateManyWithoutGymNestedInput
  }

  export type GymUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    num_of_days?: IntFieldUpdateOperationsInput | number
    num_of_sessions?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUpdateWithoutCreated_byInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: UserUpdateOneRequiredWithoutAttendance_logsNestedInput
    gym?: GymUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type AttendanceLogUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorAssignmentUpdateWithoutCreated_byInput = {
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutInstructor_assignmentsNestedInput
    member?: UserUpdateOneRequiredWithoutMember_assignmentsNestedInput
  }

  export type InstructorAssignmentUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorAssignmentUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutInstructor_workout_plansNestedInput
    member?: UserUpdateOneRequiredWithoutMember_workout_plansNestedInput
    workout_entries?: WorkoutEntryUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workout_entries?: WorkoutEntryUncheckedUpdateManyWithoutWorkout_planNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutCreated_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructor_id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyGymInput = {
    id?: string
    member_id: string
    plan_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
  }

  export type GymInstructorCreateManyGymInput = {
    id?: string
    user_id: string
    assigned_at?: Date | string
  }

  export type AttendanceLogCreateManyGymInput = {
    id?: number
    member_id: string
    created_by_id: string
    checked_in_at?: Date | string
  }

  export type MembershipUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_membershipsNestedInput
    member?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    plan?: PlanUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    plan_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type GymInstructorUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: UserUpdateOneRequiredWithoutGym_instructor_atNestedInput
  }

  export type GymInstructorUncheckedUpdateWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymInstructorUncheckedUpdateManyWithoutGymInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigned_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUpdateWithoutGymInput = {
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_attendance_logsNestedInput
    member?: UserUpdateOneRequiredWithoutAttendance_logsNestedInput
  }

  export type AttendanceLogUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceLogUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    member_id?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    checked_in_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyPlanInput = {
    id?: string
    member_id: string
    gym_id: string
    start_date?: Date | string
    end_date?: Date | string | null
    is_active?: boolean
    is_paid?: boolean
    created_at?: Date | string
    created_by_id: string
  }

  export type MembershipUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: UserUpdateOneRequiredWithoutCreated_membershipsNestedInput
    member?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    gym?: GymUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type MembershipUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    member_id?: StringFieldUpdateOperationsInput | string
    gym_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutEntryCreateManyWorkout_planInput = {
    id?: string
    exercise_name: string
    sets: number
    reps: number
    weight: number
    day: $Enums.Day
    notes?: string | null
    created_at?: Date | string
  }

  export type WorkoutEntryUpdateWithoutWorkout_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutEntryUncheckedUpdateWithoutWorkout_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutEntryUncheckedUpdateManyWithoutWorkout_planInput = {
    id?: StringFieldUpdateOperationsInput | string
    exercise_name?: StringFieldUpdateOperationsInput | string
    sets?: IntFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
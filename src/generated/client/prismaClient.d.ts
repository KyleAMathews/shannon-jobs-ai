
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Jobs
 * 
 */
export type Jobs = {
  job_id: string
  title: string | null
  company_name: string | null
  location: string | null
  via: string | null
  description: string | null
  job_highlights: Prisma.JsonValue | null
  related_links: Prisma.JsonValue | null
  thumbnail: string | null
  extensions: Prisma.JsonValue | null
  detected_extensions: Prisma.JsonValue | null
  would_shannon_like_this_job: boolean | null
  pros: Prisma.JsonValue | null
  cons: Prisma.JsonValue | null
  job_summary: string | null
  created_at: Date | null
  google_jobs_listing_url: string | null
  apply_options: Prisma.JsonValue | null
}

/**
 * Model Read_jobs
 * 
 */
export type Read_jobs = {
  /**
   * @zod.string.uuid()
   */
  id: string
  job_id: string
  created_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jobs
 * const jobs = await prisma.jobs.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jobs
   * const jobs = await prisma.jobs.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.jobs`: Exposes CRUD operations for the **Jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.JobsDelegate<GlobalReject>;

  /**
   * `prisma.read_jobs`: Exposes CRUD operations for the **Read_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Read_jobs
    * const read_jobs = await prisma.read_jobs.findMany()
    * ```
    */
  get read_jobs(): Prisma.Read_jobsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Jobs: 'Jobs',
    Read_jobs: 'Read_jobs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Jobs
   */


  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsMinAggregateOutputType = {
    job_id: string | null
    title: string | null
    company_name: string | null
    location: string | null
    via: string | null
    description: string | null
    thumbnail: string | null
    would_shannon_like_this_job: boolean | null
    job_summary: string | null
    created_at: Date | null
    google_jobs_listing_url: string | null
  }

  export type JobsMaxAggregateOutputType = {
    job_id: string | null
    title: string | null
    company_name: string | null
    location: string | null
    via: string | null
    description: string | null
    thumbnail: string | null
    would_shannon_like_this_job: boolean | null
    job_summary: string | null
    created_at: Date | null
    google_jobs_listing_url: string | null
  }

  export type JobsCountAggregateOutputType = {
    job_id: number
    title: number
    company_name: number
    location: number
    via: number
    description: number
    job_highlights: number
    related_links: number
    thumbnail: number
    extensions: number
    detected_extensions: number
    would_shannon_like_this_job: number
    pros: number
    cons: number
    job_summary: number
    created_at: number
    google_jobs_listing_url: number
    apply_options: number
    _all: number
  }


  export type JobsMinAggregateInputType = {
    job_id?: true
    title?: true
    company_name?: true
    location?: true
    via?: true
    description?: true
    thumbnail?: true
    would_shannon_like_this_job?: true
    job_summary?: true
    created_at?: true
    google_jobs_listing_url?: true
  }

  export type JobsMaxAggregateInputType = {
    job_id?: true
    title?: true
    company_name?: true
    location?: true
    via?: true
    description?: true
    thumbnail?: true
    would_shannon_like_this_job?: true
    job_summary?: true
    created_at?: true
    google_jobs_listing_url?: true
  }

  export type JobsCountAggregateInputType = {
    job_id?: true
    title?: true
    company_name?: true
    location?: true
    via?: true
    description?: true
    job_highlights?: true
    related_links?: true
    thumbnail?: true
    extensions?: true
    detected_extensions?: true
    would_shannon_like_this_job?: true
    pros?: true
    cons?: true
    job_summary?: true
    created_at?: true
    google_jobs_listing_url?: true
    apply_options?: true
    _all?: true
  }

  export type JobsAggregateArgs = {
    /**
     * Filter which Jobs to aggregate.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type JobsGroupByArgs = {
    where?: JobsWhereInput
    orderBy?: Enumerable<JobsOrderByWithAggregationInput>
    by: Array<JobsScalarFieldEnum>
    having?: JobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }


  export type JobsGroupByOutputType = {
    job_id: string
    title: string | null
    company_name: string | null
    location: string | null
    via: string | null
    description: string | null
    job_highlights: JsonValue | null
    related_links: JsonValue | null
    thumbnail: string | null
    extensions: JsonValue | null
    detected_extensions: JsonValue | null
    would_shannon_like_this_job: boolean | null
    pros: JsonValue | null
    cons: JsonValue | null
    job_summary: string | null
    created_at: Date | null
    google_jobs_listing_url: string | null
    apply_options: JsonValue | null
    _count: JobsCountAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends JobsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type JobsSelect = {
    job_id?: boolean
    title?: boolean
    company_name?: boolean
    location?: boolean
    via?: boolean
    description?: boolean
    job_highlights?: boolean
    related_links?: boolean
    thumbnail?: boolean
    extensions?: boolean
    detected_extensions?: boolean
    would_shannon_like_this_job?: boolean
    pros?: boolean
    cons?: boolean
    job_summary?: boolean
    created_at?: boolean
    google_jobs_listing_url?: boolean
    apply_options?: boolean
  }


  export type JobsGetPayload<S extends boolean | null | undefined | JobsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Jobs :
    S extends undefined ? never :
    S extends { include: any } & (JobsArgs | JobsFindManyArgs)
    ? Jobs 
    : S extends { select: any } & (JobsArgs | JobsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Jobs ? Jobs[P] : never
  } 
      : Jobs


  type JobsCountArgs = Merge<
    Omit<JobsFindManyArgs, 'select' | 'include'> & {
      select?: JobsCountAggregateInputType | true
    }
  >

  export interface JobsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {JobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Jobs'> extends True ? Prisma__JobsClient<JobsGetPayload<T>> : Prisma__JobsClient<JobsGetPayload<T> | null, null>

    /**
     * Find one Jobs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JobsFindUniqueOrThrowArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Jobs'> extends True ? Prisma__JobsClient<JobsGetPayload<T>> : Prisma__JobsClient<JobsGetPayload<T> | null, null>

    /**
     * Find the first Jobs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobsFindFirstOrThrowArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobsWithJob_idOnly = await prisma.jobs.findMany({ select: { job_id: true } })
     * 
    **/
    findMany<T extends JobsFindManyArgs>(
      args?: SelectSubset<T, JobsFindManyArgs>
    ): PrismaPromise<Array<JobsGetPayload<T>>>

    /**
     * Create a Jobs.
     * @param {JobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
    **/
    create<T extends JobsCreateArgs>(
      args: SelectSubset<T, JobsCreateArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Create many Jobs.
     *     @param {JobsCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const jobs = await prisma.jobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobsCreateManyArgs>(
      args?: SelectSubset<T, JobsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {JobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
    **/
    delete<T extends JobsDeleteArgs>(
      args: SelectSubset<T, JobsDeleteArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Update one Jobs.
     * @param {JobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobsUpdateArgs>(
      args: SelectSubset<T, JobsUpdateArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Delete zero or more Jobs.
     * @param {JobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobsDeleteManyArgs>(
      args?: SelectSubset<T, JobsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobsUpdateManyArgs>(
      args: SelectSubset<T, JobsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {JobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
    **/
    upsert<T extends JobsUpsertArgs>(
      args: SelectSubset<T, JobsUpsertArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobsCountArgs>(
      args?: Subset<T, JobsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsGroupByArgs} args - Group by arguments.
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
      T extends JobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobsGroupByArgs['orderBy'] }
        : { orderBy?: JobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, JobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Jobs base type for findUnique actions
   */
  export type JobsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs findUnique
   */
  export interface JobsFindUniqueArgs extends JobsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jobs findUniqueOrThrow
   */
  export type JobsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs base type for findFirst actions
   */
  export type JobsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     * 
    **/
    distinct?: Enumerable<JobsScalarFieldEnum>
  }

  /**
   * Jobs findFirst
   */
  export interface JobsFindFirstArgs extends JobsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jobs findFirstOrThrow
   */
  export type JobsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     * 
    **/
    distinct?: Enumerable<JobsScalarFieldEnum>
  }


  /**
   * Jobs findMany
   */
  export type JobsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JobsScalarFieldEnum>
  }


  /**
   * Jobs create
   */
  export type JobsCreateArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * The data needed to create a Jobs.
     * 
    **/
    data: XOR<JobsCreateInput, JobsUncheckedCreateInput>
  }


  /**
   * Jobs createMany
   */
  export type JobsCreateManyArgs = {
    /**
     * The data used to create many Jobs.
     * 
    **/
    data: Enumerable<JobsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Jobs update
   */
  export type JobsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * The data needed to update a Jobs.
     * 
    **/
    data: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
    /**
     * Choose, which Jobs to update.
     * 
    **/
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs updateMany
   */
  export type JobsUpdateManyArgs = {
    /**
     * The data used to update Jobs.
     * 
    **/
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     * 
    **/
    where?: JobsWhereInput
  }


  /**
   * Jobs upsert
   */
  export type JobsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * The filter to search for the Jobs to update in case it exists.
     * 
    **/
    where: JobsWhereUniqueInput
    /**
     * In case the Jobs found by the `where` argument doesn't exist, create a new Jobs with this data.
     * 
    **/
    create: XOR<JobsCreateInput, JobsUncheckedCreateInput>
    /**
     * In case the Jobs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
  }


  /**
   * Jobs delete
   */
  export type JobsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Filter which Jobs to delete.
     * 
    **/
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs deleteMany
   */
  export type JobsDeleteManyArgs = {
    /**
     * Filter which Jobs to delete
     * 
    **/
    where?: JobsWhereInput
  }


  /**
   * Jobs without action
   */
  export type JobsArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
  }



  /**
   * Model Read_jobs
   */


  export type AggregateRead_jobs = {
    _count: Read_jobsCountAggregateOutputType | null
    _min: Read_jobsMinAggregateOutputType | null
    _max: Read_jobsMaxAggregateOutputType | null
  }

  export type Read_jobsMinAggregateOutputType = {
    id: string | null
    job_id: string | null
    created_at: Date | null
  }

  export type Read_jobsMaxAggregateOutputType = {
    id: string | null
    job_id: string | null
    created_at: Date | null
  }

  export type Read_jobsCountAggregateOutputType = {
    id: number
    job_id: number
    created_at: number
    _all: number
  }


  export type Read_jobsMinAggregateInputType = {
    id?: true
    job_id?: true
    created_at?: true
  }

  export type Read_jobsMaxAggregateInputType = {
    id?: true
    job_id?: true
    created_at?: true
  }

  export type Read_jobsCountAggregateInputType = {
    id?: true
    job_id?: true
    created_at?: true
    _all?: true
  }

  export type Read_jobsAggregateArgs = {
    /**
     * Filter which Read_jobs to aggregate.
     * 
    **/
    where?: Read_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Read_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<Read_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Read_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Read_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Read_jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Read_jobs
    **/
    _count?: true | Read_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Read_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Read_jobsMaxAggregateInputType
  }

  export type GetRead_jobsAggregateType<T extends Read_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateRead_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRead_jobs[P]>
      : GetScalarType<T[P], AggregateRead_jobs[P]>
  }




  export type Read_jobsGroupByArgs = {
    where?: Read_jobsWhereInput
    orderBy?: Enumerable<Read_jobsOrderByWithAggregationInput>
    by: Array<Read_jobsScalarFieldEnum>
    having?: Read_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Read_jobsCountAggregateInputType | true
    _min?: Read_jobsMinAggregateInputType
    _max?: Read_jobsMaxAggregateInputType
  }


  export type Read_jobsGroupByOutputType = {
    id: string
    job_id: string
    created_at: Date | null
    _count: Read_jobsCountAggregateOutputType | null
    _min: Read_jobsMinAggregateOutputType | null
    _max: Read_jobsMaxAggregateOutputType | null
  }

  type GetRead_jobsGroupByPayload<T extends Read_jobsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Read_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Read_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Read_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Read_jobsGroupByOutputType[P]>
        }
      >
    >


  export type Read_jobsSelect = {
    id?: boolean
    job_id?: boolean
    created_at?: boolean
  }


  export type Read_jobsGetPayload<S extends boolean | null | undefined | Read_jobsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Read_jobs :
    S extends undefined ? never :
    S extends { include: any } & (Read_jobsArgs | Read_jobsFindManyArgs)
    ? Read_jobs 
    : S extends { select: any } & (Read_jobsArgs | Read_jobsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Read_jobs ? Read_jobs[P] : never
  } 
      : Read_jobs


  type Read_jobsCountArgs = Merge<
    Omit<Read_jobsFindManyArgs, 'select' | 'include'> & {
      select?: Read_jobsCountAggregateInputType | true
    }
  >

  export interface Read_jobsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Read_jobs that matches the filter.
     * @param {Read_jobsFindUniqueArgs} args - Arguments to find a Read_jobs
     * @example
     * // Get one Read_jobs
     * const read_jobs = await prisma.read_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Read_jobsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Read_jobsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Read_jobs'> extends True ? Prisma__Read_jobsClient<Read_jobsGetPayload<T>> : Prisma__Read_jobsClient<Read_jobsGetPayload<T> | null, null>

    /**
     * Find one Read_jobs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Read_jobsFindUniqueOrThrowArgs} args - Arguments to find a Read_jobs
     * @example
     * // Get one Read_jobs
     * const read_jobs = await prisma.read_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Read_jobsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Read_jobsFindUniqueOrThrowArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Find the first Read_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsFindFirstArgs} args - Arguments to find a Read_jobs
     * @example
     * // Get one Read_jobs
     * const read_jobs = await prisma.read_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Read_jobsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Read_jobsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Read_jobs'> extends True ? Prisma__Read_jobsClient<Read_jobsGetPayload<T>> : Prisma__Read_jobsClient<Read_jobsGetPayload<T> | null, null>

    /**
     * Find the first Read_jobs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsFindFirstOrThrowArgs} args - Arguments to find a Read_jobs
     * @example
     * // Get one Read_jobs
     * const read_jobs = await prisma.read_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Read_jobsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Read_jobsFindFirstOrThrowArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Find zero or more Read_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Read_jobs
     * const read_jobs = await prisma.read_jobs.findMany()
     * 
     * // Get first 10 Read_jobs
     * const read_jobs = await prisma.read_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const read_jobsWithIdOnly = await prisma.read_jobs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Read_jobsFindManyArgs>(
      args?: SelectSubset<T, Read_jobsFindManyArgs>
    ): PrismaPromise<Array<Read_jobsGetPayload<T>>>

    /**
     * Create a Read_jobs.
     * @param {Read_jobsCreateArgs} args - Arguments to create a Read_jobs.
     * @example
     * // Create one Read_jobs
     * const Read_jobs = await prisma.read_jobs.create({
     *   data: {
     *     // ... data to create a Read_jobs
     *   }
     * })
     * 
    **/
    create<T extends Read_jobsCreateArgs>(
      args: SelectSubset<T, Read_jobsCreateArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Create many Read_jobs.
     *     @param {Read_jobsCreateManyArgs} args - Arguments to create many Read_jobs.
     *     @example
     *     // Create many Read_jobs
     *     const read_jobs = await prisma.read_jobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Read_jobsCreateManyArgs>(
      args?: SelectSubset<T, Read_jobsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Read_jobs.
     * @param {Read_jobsDeleteArgs} args - Arguments to delete one Read_jobs.
     * @example
     * // Delete one Read_jobs
     * const Read_jobs = await prisma.read_jobs.delete({
     *   where: {
     *     // ... filter to delete one Read_jobs
     *   }
     * })
     * 
    **/
    delete<T extends Read_jobsDeleteArgs>(
      args: SelectSubset<T, Read_jobsDeleteArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Update one Read_jobs.
     * @param {Read_jobsUpdateArgs} args - Arguments to update one Read_jobs.
     * @example
     * // Update one Read_jobs
     * const read_jobs = await prisma.read_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Read_jobsUpdateArgs>(
      args: SelectSubset<T, Read_jobsUpdateArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Delete zero or more Read_jobs.
     * @param {Read_jobsDeleteManyArgs} args - Arguments to filter Read_jobs to delete.
     * @example
     * // Delete a few Read_jobs
     * const { count } = await prisma.read_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Read_jobsDeleteManyArgs>(
      args?: SelectSubset<T, Read_jobsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Read_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Read_jobs
     * const read_jobs = await prisma.read_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Read_jobsUpdateManyArgs>(
      args: SelectSubset<T, Read_jobsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Read_jobs.
     * @param {Read_jobsUpsertArgs} args - Arguments to update or create a Read_jobs.
     * @example
     * // Update or create a Read_jobs
     * const read_jobs = await prisma.read_jobs.upsert({
     *   create: {
     *     // ... data to create a Read_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Read_jobs we want to update
     *   }
     * })
    **/
    upsert<T extends Read_jobsUpsertArgs>(
      args: SelectSubset<T, Read_jobsUpsertArgs>
    ): Prisma__Read_jobsClient<Read_jobsGetPayload<T>>

    /**
     * Count the number of Read_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsCountArgs} args - Arguments to filter Read_jobs to count.
     * @example
     * // Count the number of Read_jobs
     * const count = await prisma.read_jobs.count({
     *   where: {
     *     // ... the filter for the Read_jobs we want to count
     *   }
     * })
    **/
    count<T extends Read_jobsCountArgs>(
      args?: Subset<T, Read_jobsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Read_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Read_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Read_jobsAggregateArgs>(args: Subset<T, Read_jobsAggregateArgs>): PrismaPromise<GetRead_jobsAggregateType<T>>

    /**
     * Group by Read_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Read_jobsGroupByArgs} args - Group by arguments.
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
      T extends Read_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Read_jobsGroupByArgs['orderBy'] }
        : { orderBy?: Read_jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Read_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRead_jobsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Read_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Read_jobsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Read_jobs base type for findUnique actions
   */
  export type Read_jobsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter, which Read_jobs to fetch.
     * 
    **/
    where: Read_jobsWhereUniqueInput
  }

  /**
   * Read_jobs findUnique
   */
  export interface Read_jobsFindUniqueArgs extends Read_jobsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Read_jobs findUniqueOrThrow
   */
  export type Read_jobsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter, which Read_jobs to fetch.
     * 
    **/
    where: Read_jobsWhereUniqueInput
  }


  /**
   * Read_jobs base type for findFirst actions
   */
  export type Read_jobsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter, which Read_jobs to fetch.
     * 
    **/
    where?: Read_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Read_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<Read_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Read_jobs.
     * 
    **/
    cursor?: Read_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Read_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Read_jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Read_jobs.
     * 
    **/
    distinct?: Enumerable<Read_jobsScalarFieldEnum>
  }

  /**
   * Read_jobs findFirst
   */
  export interface Read_jobsFindFirstArgs extends Read_jobsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Read_jobs findFirstOrThrow
   */
  export type Read_jobsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter, which Read_jobs to fetch.
     * 
    **/
    where?: Read_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Read_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<Read_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Read_jobs.
     * 
    **/
    cursor?: Read_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Read_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Read_jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Read_jobs.
     * 
    **/
    distinct?: Enumerable<Read_jobsScalarFieldEnum>
  }


  /**
   * Read_jobs findMany
   */
  export type Read_jobsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter, which Read_jobs to fetch.
     * 
    **/
    where?: Read_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Read_jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<Read_jobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Read_jobs.
     * 
    **/
    cursor?: Read_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Read_jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Read_jobs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Read_jobsScalarFieldEnum>
  }


  /**
   * Read_jobs create
   */
  export type Read_jobsCreateArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * The data needed to create a Read_jobs.
     * 
    **/
    data: XOR<Read_jobsCreateInput, Read_jobsUncheckedCreateInput>
  }


  /**
   * Read_jobs createMany
   */
  export type Read_jobsCreateManyArgs = {
    /**
     * The data used to create many Read_jobs.
     * 
    **/
    data: Enumerable<Read_jobsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Read_jobs update
   */
  export type Read_jobsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * The data needed to update a Read_jobs.
     * 
    **/
    data: XOR<Read_jobsUpdateInput, Read_jobsUncheckedUpdateInput>
    /**
     * Choose, which Read_jobs to update.
     * 
    **/
    where: Read_jobsWhereUniqueInput
  }


  /**
   * Read_jobs updateMany
   */
  export type Read_jobsUpdateManyArgs = {
    /**
     * The data used to update Read_jobs.
     * 
    **/
    data: XOR<Read_jobsUpdateManyMutationInput, Read_jobsUncheckedUpdateManyInput>
    /**
     * Filter which Read_jobs to update
     * 
    **/
    where?: Read_jobsWhereInput
  }


  /**
   * Read_jobs upsert
   */
  export type Read_jobsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * The filter to search for the Read_jobs to update in case it exists.
     * 
    **/
    where: Read_jobsWhereUniqueInput
    /**
     * In case the Read_jobs found by the `where` argument doesn't exist, create a new Read_jobs with this data.
     * 
    **/
    create: XOR<Read_jobsCreateInput, Read_jobsUncheckedCreateInput>
    /**
     * In case the Read_jobs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Read_jobsUpdateInput, Read_jobsUncheckedUpdateInput>
  }


  /**
   * Read_jobs delete
   */
  export type Read_jobsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
    /**
     * Filter which Read_jobs to delete.
     * 
    **/
    where: Read_jobsWhereUniqueInput
  }


  /**
   * Read_jobs deleteMany
   */
  export type Read_jobsDeleteManyArgs = {
    /**
     * Filter which Read_jobs to delete
     * 
    **/
    where?: Read_jobsWhereInput
  }


  /**
   * Read_jobs without action
   */
  export type Read_jobsArgs = {
    /**
     * Select specific fields to fetch from the Read_jobs
     * 
    **/
    select?: Read_jobsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JobsScalarFieldEnum: {
    job_id: 'job_id',
    title: 'title',
    company_name: 'company_name',
    location: 'location',
    via: 'via',
    description: 'description',
    job_highlights: 'job_highlights',
    related_links: 'related_links',
    thumbnail: 'thumbnail',
    extensions: 'extensions',
    detected_extensions: 'detected_extensions',
    would_shannon_like_this_job: 'would_shannon_like_this_job',
    pros: 'pros',
    cons: 'cons',
    job_summary: 'job_summary',
    created_at: 'created_at',
    google_jobs_listing_url: 'google_jobs_listing_url',
    apply_options: 'apply_options'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const Read_jobsScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    created_at: 'created_at'
  };

  export type Read_jobsScalarFieldEnum = (typeof Read_jobsScalarFieldEnum)[keyof typeof Read_jobsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type JobsWhereInput = {
    AND?: Enumerable<JobsWhereInput>
    OR?: Enumerable<JobsWhereInput>
    NOT?: Enumerable<JobsWhereInput>
    job_id?: StringFilter | string
    title?: StringNullableFilter | string | null
    company_name?: StringNullableFilter | string | null
    location?: StringNullableFilter | string | null
    via?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    job_highlights?: JsonNullableFilter
    related_links?: JsonNullableFilter
    thumbnail?: StringNullableFilter | string | null
    extensions?: JsonNullableFilter
    detected_extensions?: JsonNullableFilter
    would_shannon_like_this_job?: BoolNullableFilter | boolean | null
    pros?: JsonNullableFilter
    cons?: JsonNullableFilter
    job_summary?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    google_jobs_listing_url?: StringNullableFilter | string | null
    apply_options?: JsonNullableFilter
  }

  export type JobsOrderByWithRelationInput = {
    job_id?: SortOrder
    title?: SortOrder
    company_name?: SortOrder
    location?: SortOrder
    via?: SortOrder
    description?: SortOrder
    job_highlights?: SortOrder
    related_links?: SortOrder
    thumbnail?: SortOrder
    extensions?: SortOrder
    detected_extensions?: SortOrder
    would_shannon_like_this_job?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    job_summary?: SortOrder
    created_at?: SortOrder
    google_jobs_listing_url?: SortOrder
    apply_options?: SortOrder
  }

  export type JobsWhereUniqueInput = {
    job_id?: string
  }

  export type JobsOrderByWithAggregationInput = {
    job_id?: SortOrder
    title?: SortOrder
    company_name?: SortOrder
    location?: SortOrder
    via?: SortOrder
    description?: SortOrder
    job_highlights?: SortOrder
    related_links?: SortOrder
    thumbnail?: SortOrder
    extensions?: SortOrder
    detected_extensions?: SortOrder
    would_shannon_like_this_job?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    job_summary?: SortOrder
    created_at?: SortOrder
    google_jobs_listing_url?: SortOrder
    apply_options?: SortOrder
    _count?: JobsCountOrderByAggregateInput
    _max?: JobsMaxOrderByAggregateInput
    _min?: JobsMinOrderByAggregateInput
  }

  export type JobsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobsScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobsScalarWhereWithAggregatesInput>
    job_id?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    company_name?: StringNullableWithAggregatesFilter | string | null
    location?: StringNullableWithAggregatesFilter | string | null
    via?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    job_highlights?: JsonNullableWithAggregatesFilter
    related_links?: JsonNullableWithAggregatesFilter
    thumbnail?: StringNullableWithAggregatesFilter | string | null
    extensions?: JsonNullableWithAggregatesFilter
    detected_extensions?: JsonNullableWithAggregatesFilter
    would_shannon_like_this_job?: BoolNullableWithAggregatesFilter | boolean | null
    pros?: JsonNullableWithAggregatesFilter
    cons?: JsonNullableWithAggregatesFilter
    job_summary?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    google_jobs_listing_url?: StringNullableWithAggregatesFilter | string | null
    apply_options?: JsonNullableWithAggregatesFilter
  }

  export type Read_jobsWhereInput = {
    AND?: Enumerable<Read_jobsWhereInput>
    OR?: Enumerable<Read_jobsWhereInput>
    NOT?: Enumerable<Read_jobsWhereInput>
    id?: UuidFilter | string
    job_id?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
  }

  export type Read_jobsOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type Read_jobsWhereUniqueInput = {
    id?: string
  }

  export type Read_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
    _count?: Read_jobsCountOrderByAggregateInput
    _max?: Read_jobsMaxOrderByAggregateInput
    _min?: Read_jobsMinOrderByAggregateInput
  }

  export type Read_jobsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Read_jobsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Read_jobsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Read_jobsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    job_id?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type JobsCreateInput = {
    job_id: string
    title?: string | null
    company_name?: string | null
    location?: string | null
    via?: string | null
    description?: string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: string | null
    created_at?: Date | string | null
    google_jobs_listing_url?: string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsUncheckedCreateInput = {
    job_id: string
    title?: string | null
    company_name?: string | null
    location?: string | null
    via?: string | null
    description?: string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: string | null
    created_at?: Date | string | null
    google_jobs_listing_url?: string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsUpdateInput = {
    job_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_jobs_listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsUncheckedUpdateInput = {
    job_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_jobs_listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsCreateManyInput = {
    job_id: string
    title?: string | null
    company_name?: string | null
    location?: string | null
    via?: string | null
    description?: string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: string | null
    created_at?: Date | string | null
    google_jobs_listing_url?: string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsUpdateManyMutationInput = {
    job_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_jobs_listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type JobsUncheckedUpdateManyInput = {
    job_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    via?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    job_highlights?: NullableJsonNullValueInput | InputJsonValue
    related_links?: NullableJsonNullValueInput | InputJsonValue
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    extensions?: NullableJsonNullValueInput | InputJsonValue
    detected_extensions?: NullableJsonNullValueInput | InputJsonValue
    would_shannon_like_this_job?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    job_summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    google_jobs_listing_url?: NullableStringFieldUpdateOperationsInput | string | null
    apply_options?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Read_jobsCreateInput = {
    id: string
    job_id: string
    created_at?: Date | string | null
  }

  export type Read_jobsUncheckedCreateInput = {
    id: string
    job_id: string
    created_at?: Date | string | null
  }

  export type Read_jobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Read_jobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Read_jobsCreateManyInput = {
    id: string
    job_id: string
    created_at?: Date | string | null
  }

  export type Read_jobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Read_jobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    job_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type JobsCountOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    company_name?: SortOrder
    location?: SortOrder
    via?: SortOrder
    description?: SortOrder
    job_highlights?: SortOrder
    related_links?: SortOrder
    thumbnail?: SortOrder
    extensions?: SortOrder
    detected_extensions?: SortOrder
    would_shannon_like_this_job?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    job_summary?: SortOrder
    created_at?: SortOrder
    google_jobs_listing_url?: SortOrder
    apply_options?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    company_name?: SortOrder
    location?: SortOrder
    via?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    would_shannon_like_this_job?: SortOrder
    job_summary?: SortOrder
    created_at?: SortOrder
    google_jobs_listing_url?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    job_id?: SortOrder
    title?: SortOrder
    company_name?: SortOrder
    location?: SortOrder
    via?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    would_shannon_like_this_job?: SortOrder
    job_summary?: SortOrder
    created_at?: SortOrder
    google_jobs_listing_url?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type Read_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type Read_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type Read_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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
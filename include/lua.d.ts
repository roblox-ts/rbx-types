/// <reference no-default-lib="true"/>

// LUA API

interface Table {}

/** A table that is shared between all scripts of the same context level. */
declare const _G: Table;

/** A string containing the current interpreter version. */
declare const _VERSION: string;

/** Throws an error if the provided value is false or nil . Returns the value that was passed into the function if the assertion passes. */
declare function assert<T>(condition: T, message?: string): T;

/** Performs an operation on the Lua garbage collector based on the specified option. Roblox's Lua sandbox only allows the "count" option to be used, so none of the other standard options are available. The "count" option returns the total memory in use by Lua (in kilobytes). */
declare function collectgarbage(option: "count"): number;

/** Terminates the last protected function called and outputs message as an error message. If the function containing the error is not called in a protected function (pcall), then the script which called the function will terminate. The error function itself never returns and acts like a script error. The level argument specifies how to get the error position. With level 1 (the default), the error position is where the error function was called. Level 2 points the error to where the function that called error was called; and so on. Passing a level 0 avoids the addition of error position information to the message. */
declare function error(message?: string, level?: number): void;

/** Returns the current environment in use by the function. If provided with a function, the environment of the function will be returned as an array. If provided with an integer, getfenv will provide the environment of the function at the provided stack level: Level 1 is the function calling getfenv. If stack is 0, getfenv returns the global environment of the current script. When using getfenv to get the current environment of a script, it will return the same table every time within the specific thread. */
declare function getfenv(stack: number): Array<any>;

/** Returns the metatable of the specified object if it has one, otherwise returns nil. If the object does have a metatable, but the metatable has a __metatable field set, the value of __metatable will be returned instead. */
declare function getmetatable(object: object): any;

/** Creates a blank 'userdata'. Includes an empty metatable. */
declare function newproxy(IncludeEmptyMetatable?: boolean | undefined): any;

/** Returns the first key/value pair in the array. If a lastKey argument was specified then returns the next element in the array based on the key that provided. The order in which the indices are enumerated is not specified, even for numeric indices. To traverse a table in numeric order, use a numerical for or the ipairs function. The behavior of next is undefined if, during the traversal, you assign any value to a non-existent field in the table. You may, however, modify existing fields. In particular, you may clear existing fields. */
declare function next(t: any): [any, any];

/** Prints a list of parameters to console. */
declare function print(...params: Array<any>): void;

/** Checks whether v1 is equal to v2, without invoking any metamethod. */
declare function rawequal(v1: any, v2: any): boolean;

/** Gets the real value of table[index], without invoking any metamethod. */
declare function rawget(t: any, index: any): any;

/** Sets the real value of table[index] to a given value, without invoking any metamethod. */
declare function rawset(t: any, index: any, value: any): void;

/** Returns all arguments after argument number index. */
declare function select(index: number, ...args: Array<any>): Array<any>;

/** Returns the total number of arguments that were passed after the cmd argument. */
declare function select(cmd: "#", ...args: Array<any>): number;

/** Attempts to convert the arg into a number with a specified base to interpret the value in. If it cannot be converted, this function returns nil. The base may be any integer between 2 and 36, inclusive. In bases above 10, the letter 'A' (in either upper or lower case) represents 10, 'B' represents 11, and so forth, with 'Z' representing 35. In base 10 (the default), the number may have a decimal part, as well as an optional exponent part. In other bases, only unsigned integers are accepted. */
declare function tonumber(arg: any, base?: number): number | undefined;

/** Receives an argument of any type and converts it to a string in a reasonable format. If the metatable of e has a "__tostring" field, then tostring calls the corresponding value with e as an argument and uses the result of the call as its result. For complete control of how numbers are converted, use string.format. */
declare function tostring(value: any): string;

/** Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, pcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, pcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message. */
declare function pcall<T extends any[], U>(
	func: (...args: T) => U,
	...args: T
): U extends [infer A]
	? [boolean, A]
	: U extends [infer A, infer B]
		? [boolean, A, B]
		: U extends [infer A, infer B, infer C]
			? [boolean, A, B, C]
			: U extends [infer A, infer B, infer C, infer D]
				? [boolean, A, B, C, D]
				: U extends [infer A, infer B, infer C, infer D, infer E]
					? [boolean, A, B, C, D, E]
					: U extends [infer A, infer B, infer C, infer D, infer E, infer F]
						? [boolean, A, B, C, D, E, F]
						: [boolean, U];
/** Calls the function func with the given arguments in protected mode. This means that any error inside func is not propagated; instead, pcall catches the error and returns a status code. Its first result is the status code (a boolean), which is true if the call succeeds without errors. In such case, pcall also returns all results from the call, after this first result. In case of any error, pcall returns false plus the error message. */
declare function pcall<T extends any[], U>(
	func: (...args: T) => U
): U extends [infer A]
	? [boolean, A]
	: U extends [infer A, infer B]
		? [boolean, A, B]
		: U extends [infer A, infer B, infer C]
			? [boolean, A, B, C]
			: U extends [infer A, infer B, infer C, infer D]
				? [boolean, A, B, C, D]
				: U extends [infer A, infer B, infer C, infer D, infer E]
					? [boolean, A, B, C, D, E]
					: U extends [infer A, infer B, infer C, infer D, infer E, infer F]
						? [boolean, A, B, C, D, E, F]
						: [boolean, U];

interface LuaMetatable<T> {
	__index?: (self: T, index: any) => void;
	__newindex?: (self: T, index: any, value: any) => void;
	__add?: (self: T, other: unknown) => any;
	__sub?: (self: T, other: unknown) => any;
	__mul?: (self: T, other: unknown) => any;
	__div?: (self: T, other: unknown) => any;
	__mod?: (self: T, other: unknown) => any;
	__pow?: (self: T, other: unknown) => any;
	__unm?: (self: T) => any;
	__eq?: (self: T, other: unknown) => boolean;
	__lt?: (self: T, other: unknown) => boolean;
	__le?: (self: T, other: unknown) => boolean;
	__call?: (self: T, ...arguments: Array<unknown>) => any;
	__concat?: (self: T, ...arguments: Array<unknown>) => string;
	__tostring?: (self: T) => string;
	__len?: (self: T) => any;
	__mode?: string;
	__metatable?: string;
}

/** Sets the metatable for the given table. If setTo is nil, the metatable of the given table is removed. If the original metatable has a "__metatable" field, this will raise an error. This function returns the table t, which was passed to the function. */
declare function setmetatable<T extends object>(object: T, metatable: LuaMetatable<T>): object;

interface DateTable {
	year: number;
	month: number;
	day: number;
	hour?: number;
	min?: number;
	sec?: number;
	isdst?: boolean;
	yday?: number;
	wday?: number;
}

declare namespace os {
	function time(): number;
	function time(dateTable: DateTable): number;
	function date(formatString: "*t" | "!*t", time?: number): DateTable;
	function date(formatString: string, time?: number): string;
	function difftime(t2: number, t1: number): number;
}

declare namespace debug {
	function traceback(): string;
	function profilebegin(profileName: string): void;
	function profileend(): void;
}

interface String {
	/** Returns the internal numerical codes of the characters `s[i]`, `s[i+1]`, `...`, `s[j]`. The default value for i is 1; the default value for j is i. These indices are corrected following the same rules of function string.sub. */
	byte(i?: number, j?: number): number;

	/** Looks for the first match of pattern in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends; otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain "find substring" operation, with no characters in the pattern being considered "magic". Note that if `plain` is given, then `init` must be given as well. */
	find(pattern: string, init?: number, plain?: boolean): [number, number];

	/** Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). */
	format(...args: Array<number | string>): string;

	/** Returns an iterator function that, each time it is called, returns the next captures from pattern over the string s. */
	gmatch(pattern: string): () => string;

	/** Returns a copy of s in which all (or the first n, if given) occurrences of the pattern have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred. */
	gsub(pattern: string, repl: any, n?: number): string;

	/** Returns the length of the string */
	len(): number;

	/** Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. */
	lower(): string;

	/** Looks for the first match of pattern in the string s. If a match is found, it is returned; otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. */
	match(pattern: string, init?: number): string | undefined;

	/** Returns a string that is the concatenation of n copies of the string s separated by the string sep. */
	rep(n: number): string;

	/** Returns a string that is the string s reversed. */
	reverse(): string;

	/** Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). */
	sub(i: number, j?: number): string;

	/** Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. */
	upper(): string;
}

declare namespace string {
	/** Returns the internal numerical codes of the characters `s[i]`, `s[i+1]`, `...`, `s[j]`. The default value for i is 1; the default value for j is i. These indices are corrected following the same rules of function string.sub. */
	function byte(s: string, i?: number, j?: number): number;

	/** Receives zero or more integers. Returns a string with length equal to the number of arguments, in which each character has the internal numerical code equal to its corresponding argument. */
	function char(...args: Array<number>): string;

	/** Looks for the first match of pattern in the string s. If it finds a match, then find returns the indices of s where this occurrence starts and ends; otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. A value of true as a fourth, optional argument plain turns off the pattern matching facilities, so the function does a plain "find substring" operation, with no characters in the pattern being considered "magic". Note that if `plain` is given, then `init` must be given as well. */
	function find(s: string, pattern: string, init?: number, plain?: boolean): [number, number];

	/** Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string). */
	function format(pattern: string, ...args: Array<number | string>): string;

	/** Returns an iterator function that, each time it is called, returns the next captures from pattern over the string s. */
	function gmatch(s: string, pattern: string): () => string;

	/** Returns a copy of s in which all (or the first n, if given) occurrences of the pattern have been replaced by a replacement string specified by repl, which can be a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred. */
	function gsub(s: string, pattern: string, repl: any, n?: number): string;

	/** Returns the length of the string */
	function len(s: string): number;

	/** Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. */
	function lower(s: string): string;

	/** Looks for the first match of pattern in the string s. If a match is found, it is returned; otherwise, it returns nil. A third, optional numerical argument init specifies where to start the search; its default value is 1 and can be negative. */
	function match(s: string, pattern: string, init?: number): string | undefined;

	/** Returns a string that is the concatenation of n copies of the string s separated by the string sep. */
	function rep(s: string, n: number): string;

	/** Returns a string that is the string s reversed. */
	function reverse(s: string): string;

	/** Returns the substring of s that starts at i and continues until j; i and j can be negative. If j is absent, then it is assumed to be equal to -1 (which is the same as the string length). */
	function sub(s: string, i: number, j?: number): string;

	/** Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other characters are left unchanged. */
	function upper(s: string): string;
}

declare namespace math {
	/** The number π is a mathematical constant. Originally defined as the ratio of a circle's circumference to its diameter, it now has various equivalent definitions and appears in many formulas in all areas of mathematics and physics. It is approximately equal to 3.14159. */
	const pi: number;

	/** The value HUGE_VAL, a value larger than or equal to any other numerical value. */
	const huge: number;

	/** Returns the absolute value of x. */
	function abs(n: number): number;

	/** Returns the arc cosine of x. */
	function acos(n: number): number;

	/** Returns the arc sine of x. */
	function asin(n: number): number;

	/** Returns the arc tangent of x (in radians). */
	function atan(n: number): number;

	/** Returns the arc tangent of y/x (in radians), but uses the signs of both parameters to find the quadrant of the result. It also handles correctly the case of x being zero. */
	function atan2(y: number, x: number): number;

	/** Returns the smallest integer larger than or equal to x. */
	function ceil(n: number): number;

	/** Returns the cosine of x (assumed to be in radians). */
	function cos(n: number): number;

	/** Returns the hyperbolic cosine of x. */
	function cosh(n: number): number;

	/** Returns the angle x (given in radians) in degrees. */
	function deg(n: number): number;

	/** Returns the value e^x. */
	function exp(n: number): number;

	/** Returns the largest integer smaller than or equal to x. */
	function floor(n: number): number;

	/** Returns the remainder of the division of x by y that rounds the quotient towards zero. */
	function fmod(x: number, y: number): number;

	/** Returns m and e such that x = m*2^e, e is an integer and the absolute value of m is in the range [0.5, 1) (or zero when x is zero). */
	function frexp(n: number): number;

	/** Returns m*2^e (e should be an integer). */
	function ldexp(m: number, e: number): number;

	/** Returns the natural logarithm of x. */
	function log(n: number): number;

	/** Returns the base-10 logarithm of x. */
	function log10(n: number): number;

	/** Returns the maximum value among the numbers passed to the function. */
	function max(...n: Array<number>): number;

	/** Returns the minimum value among the numbers passed to the function. */
	function min(...n: Array<number>): number;

	/** Returns two numbers, the integral part of x and the fractional part of x. */
	function modf(n: number): [number, number];

	/** Returns x^y. (You can also use the expression x^y to compute this value.) */
	function pow(x: number, y: number): number;

	/** Returns the angle x (given in degrees) in radians. */
	function rad(n: number): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random real number in the range [0,1). */
	function random(): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random integer in the range [1, m]. */
	function random(max: number): number;

	/** This function is an interface to the simple pseudo-random generator function rand provided by ANSI C. (No guarantees can be given for its statistical properties.) Returns a uniform pseudo-random integer in the range [m, n]. */
	function random(min: number, max: number): number;

	/** Sets x as the seed for the pseudo-random generator: equal seeds produce equal sequences of numbers. */
	function randomseed(seed: number): number;

	/** Returns -1 if `x < 0`, 0 if `x == 0`, or 1 if `x > 0`. */
	function sign(n: number): number;

	/** Returns the sine of x (assumed to be in radians). */
	function sin(n: number): number;

	/** Returns the hyperbolic sine of x. */
	function sinh(n: number): number;

	/** Returns the square root of x. (You can also use the expression `x^0.5` to compute this value.) */
	function sqrt(n: number): number;

	/** Returns the tangent of x (assumed to be in radians). */
	function tan(n: number): number;

	/** Returns the hyperbolic tangent of x. */
	function tanh(n: number): number;
}

declare namespace table {
	/** Given a list where all elements are strings or numbers, returns the string `list[i]..sep..list[i+1] ... sep..list[j]`. The default value for sep is the empty string, the default for i is 1, and the default for j is #list. If i is greater than j, returns the empty string. */
	function concat(list: Table, sep: string, i: number, j: number): string;

	/** Iterates over the provided table, passing the key and value of each iteration over to the provided function. */
	function foreach(t: Table, f: () => void): void;

	/** Iterates over the provided table, passing the index and value of each iteration over to the provided function. */
	function foreachi(t: Table, f: () => void): void;

	/** Returns the number of elements in the table passed. */
	function getn(t: Table): number;

	/** Appends the provided value to the end of the table. */
	function insert(t: Table, value: any): void;

	/** Places the value in the table at position and shifts elements to make room if necessary. */
	function insert(t: Table, position: number, value: any): void;

	/** Removes from list the element at position pos, returning the value of the removed element. When pos is an integer between 1 and #list, it shifts down the elements list[pos+1], list[pos+2], ..., list[#list] and erases element list[#list]; The index pos can also be 0 when #list is 0, or #list + 1; in those cases, the function erases the element list[pos]. */
	function remove(list: Table, pos: number): any;

	/** Sorts list elements in a given order, in-place, from `list[1]` to `list[#list]`, using the standard Lua less-than operator. */
	function sort(t: Table): void;

	/** Sorts list elements in a given order, in-place, from `list[1]` to `list[#list]`. Comp is a function that receives two list elements and returns true when the first element must come before the second in the final order (so that `not comp(list[i+1],list[i])` will be true after the sort). */
	function sort(t: Table, comp: () => boolean): void;
}

interface thread {}

declare namespace coroutine {
	/** Creates a new coroutine, with body f. f must be a Lua function. */
	function create(f: Function): thread;

	/** Starts or continues the execution of coroutine co. The first time you resume a coroutine, it starts running its body. The values val1, ... are passed as the arguments to the body function. If the coroutine has yielded, resume restarts it; the values val1, ... are passed as the results from the yield. If the coroutine runs without any errors, resume returns true plus any values passed to yield (if the coroutine yields) or any values returned by the body function (if the coroutine terminates). If there is any error, resume returns false plus the error message. */
	function resume(co: thread, ...params: Array<any>): unknown;

	/** Returns the running coroutine. */
	function running(): thread;

	/** Returns the status of coroutine co, as a string: 'running', if the coroutine is running (that is, it called status); 'suspended', if the coroutine is suspended in a call to yield, or if it has not started running yet; 'normal' if the coroutine is active but not running (that is, it has resumed another coroutine); and 'dead' if the coroutine has finished its body function, or if it has stopped with an error. */
	function status(co: thread): string;

	/** Creates a new coroutine, with body f. f must be a Lua function. Returns a function that resumes the coroutine each time it is called. Any arguments passed to the function behave as the extra arguments to resume. Returns the same values returned by resume, except the first boolean. In case of error, propagates the error. */
	function wrap<T extends Function>(f: T): T;

	/** Suspends the execution of the calling coroutine. Any arguments to yield are passed as extra results to resume. */
	function yield(...params: Array<any>): unknown;
}

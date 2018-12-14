**leetcode 7**

**题目**

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

**Note**

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

假设我们处理的环境只能存储32位带符号整数范围内的整数:[2^31,2^31-1]。对于这个问题，假设函数在反向整数溢出时返回0。

**思路**

循环，通过/10  +  %10 ，获得每一位值


# Digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n. If that value has more
# than one digit, continue reducing in this way until a single-digit
# number is produced. The input will be a non-negative integer.


def digital_root(n):
    while n > 9:
        l = [int(x) for x in str(n)]
        sum = 0
        for i in l:
            sum += i
            n = sum
    return n


digital_root(942)

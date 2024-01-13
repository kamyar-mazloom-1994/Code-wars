# Count the number of divisors of a positive integer n.
# Random tests go up to n = 500000.
# Examples (input --> output)
# 4 --> 3 (1, 2, 4)
# 5ote you should only return a number, the count of divisors. The
# numbers between parentheses are shown only for you to see which
# numbers are counted in each case.


def divisors(n):
    div_list = []
    i = 1
    while i <= n:
        if n % i == 0:
            div_list.append(i)
        i += 1

    return len(div_list)

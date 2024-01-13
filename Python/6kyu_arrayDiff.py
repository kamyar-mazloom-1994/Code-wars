# Your goal in this kata is to implement a difference function, which
# subtracts one list from another and returns the result.

# It should remove all values from list a, which are present in list b
# keeping their order.


def array_diff(a, b):
    if len(b) == 0:
        return a

    for i in b:
        if i in a:
            for n in range(a.count(i)):
                a.remove(i)
    return a

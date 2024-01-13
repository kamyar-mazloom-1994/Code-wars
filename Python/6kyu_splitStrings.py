# Complete the solution so that it splits the string into pairs of two
# characters. If the string contains an odd number of characters then
# it should replace the missing second character of the final pair
# with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']


def solution(string):
    n = 2
    chunks = [string[i : n + i] for i in range(0, len(string), n)]
    if len(chunks) == 0:
        return []
    elif len(chunks[-1]) == 1:
        chunks[-1] += "_"
    return chunks

# You probably know the "like" system from Facebook and other pages.
# People can "like" blog posts, pictures or other items. We want to
# create the text that should be displayed next to such an item.

# Implement the function which takes an array containing the names of
# people that like an item. It must return the display text as shown
# in the examples:


def likes(names):

    textToReturn = ""

    if len(names) == 0:
        textToReturn = "no one likes this"
    elif len(names) == 1:
        textToReturn = str(names[0]) + " likes this"
    elif len(names) > 1 and len(names) < 4:
        for name in range(0, len(names) - 1):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = (
            textToReturn + " and " + str(names[len(names) - 1]) + " like this"
        )
    else:
        for name in range(0, 2):
            textToReturn = textToReturn + names[name] + ", "
        textToReturn = textToReturn[:-2]
        textToReturn = (
            textToReturn + " and " + str(len(names) - 2) + " others like this"
        )
    return textToReturn

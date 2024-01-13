# Write a function that takes in a string of one or more words, and
# returns the same string, but with all five or more letter words
# reversed (Just like the name of this Kata). Strings passed in will
# consist of only letters and spaces. Spaces will be included only
# when more than one word is present.


def spin_words(sentence):
    sentence_list = sentence.split(" ")

    for i in range(len(sentence_list)):
        print(len(sentence_list[i]))
        if len(sentence_list[i]) > 4:
            sentence_list[i] = sentence_list[i][::-1]

    return " ".join(sentence_list)

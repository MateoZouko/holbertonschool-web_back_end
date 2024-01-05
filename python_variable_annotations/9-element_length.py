#!/usr/bin/env python3
from typing import List, Iterable, Sequence, Tuple
"""Task 9"""


def element_length(lst: Iterable[Sequence]) -> List\
    [Tuple[Sequence, int]]:
    """Function that return a list of a tuple"""
    return [(i, len(i)) for i in lst]

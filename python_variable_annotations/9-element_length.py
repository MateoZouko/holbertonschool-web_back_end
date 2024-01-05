#!/usr/bin/env python3
"""Task 9"""
from typing import List, Iterable, Sequence, Tuple



def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Function that return a list of a tuple"""
    return [(i, len(i)) for i in lst]

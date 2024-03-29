#!/usr/bin/env python3
"""Task 8"""
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """Returns a callable function"""

    def multiplyFunction(x: float) -> float:
        """Multiplies x and multiplier"""
        return x * multiplier

    return multiplyFunction

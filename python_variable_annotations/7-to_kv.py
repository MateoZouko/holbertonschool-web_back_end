#!/usr/bin/env python3
"""Task 6"""
import typing


def to_kv(k: str, v: typing.Union[int, float]) -> typing.Tuple[str, float]:
    """sum mixed list"""
    return (k, (v**2))
